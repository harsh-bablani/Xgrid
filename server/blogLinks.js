import crypto from 'crypto';
import { prisma } from './prisma.js';

export function cleanBlogSlug(slug) {
  return String(slug || '')
    .trim()
    .toLowerCase()
    .replace(/^\/+/, '')
    .replace(/^blog\//, '')
    .replace(/\/+$/, '')
    .split(/[?#]/)[0];
}

/**
 * Resolve a requested slug to a published post.
 * Exact match only, plus intentional redirects / previous slugs (from renames).
 * No fuzzy guessing.
 */
export async function resolvePublishedSlug(rawSlug) {
  const slug = cleanBlogSlug(rawSlug);
  if (!slug) return null;

  const exact = await prisma.blogPost.findFirst({
    where: { slug, published: true },
    select: { slug: true },
  });
  if (exact) return { slug: exact.slug, via: 'exact' };

  const redirect = await prisma.blogRedirect.findUnique({ where: { fromSlug: slug } });
  if (redirect?.toSlug) {
    const target = await prisma.blogPost.findFirst({
      where: { slug: redirect.toSlug, published: true },
      select: { slug: true },
    });
    if (target) return { slug: target.slug, via: 'redirect' };
  }

  const viaPrevious = await prisma.blogPost.findFirst({
    where: {
      published: true,
      previousSlugs: { has: slug },
    },
    select: { slug: true },
  });
  if (viaPrevious) return { slug: viaPrevious.slug, via: 'previous' };

  return null;
}

export async function upsertRedirect(fromSlug, toSlug) {
  const from = cleanBlogSlug(fromSlug);
  const to = cleanBlogSlug(toSlug);
  if (!from || !to || from === to) return;

  await prisma.blogRedirect.upsert({
    where: { fromSlug: from },
    create: { id: crypto.randomUUID(), fromSlug: from, toSlug: to },
    update: { toSlug: to },
  });

  const pointing = await prisma.blogRedirect.findMany({
    where: { toSlug: from },
  });
  await Promise.all(
    pointing.map((r) =>
      prisma.blogRedirect.update({
        where: { id: r.id },
        data: { toSlug: to },
      })
    )
  );
}

/** No-op kept for callers; we no longer seed guessed aliases. */
export async function ensureDefaultBlogRedirects() {
  return;
}

/** Collect unique /blog/{slug} targets from HTML or structured content. */
export function extractBlogSlugsFromContent(content) {
  const found = new Set();
  const scan = (html) => {
    for (const m of String(html || '').matchAll(/\/blog\/([a-z0-9-]+)\/?/gi)) {
      const slug = cleanBlogSlug(m[1]);
      if (slug) found.add(slug);
    }
  };

  if (typeof content === 'string') scan(content);
  else if (Array.isArray(content)) {
    for (const block of content) {
      if (block && typeof block.html === 'string') scan(block.html);
      else scan(JSON.stringify(block));
    }
  } else if (content && typeof content === 'object') {
    scan(JSON.stringify(content));
  }

  return [...found];
}

/**
 * Returns internal /blog links that do not resolve to a published post
 * (exact slug, explicit redirect, or previous slug).
 */
export async function findBrokenBlogLinks(content, { allowSlug } = {}) {
  const requested = extractBlogSlugsFromContent(content);
  const broken = [];

  for (const slug of requested) {
    if (allowSlug && slug === cleanBlogSlug(allowSlug)) continue;
    const resolved = await resolvePublishedSlug(slug);
    if (!resolved) broken.push(slug);
  }

  return broken;
}

/** Strip trailing slashes on /blog/... hrefs only — never rewrite to another post. */
export function normalizeBlogContentLinks(content) {
  const rewriteHtml = (html) =>
    String(html || '').replace(
      /href=(["'])(\/blog\/[a-z0-9-]+)\/+(["'#?\s>])/gi,
      'href=$1$2$3'
    );

  if (typeof content === 'string') return rewriteHtml(content);
  if (Array.isArray(content)) {
    return content.map((block) => {
      if (block && typeof block === 'object' && typeof block.html === 'string') {
        return { ...block, html: rewriteHtml(block.html) };
      }
      return block;
    });
  }
  if (content && typeof content === 'object') {
    return JSON.parse(rewriteHtml(JSON.stringify(content)));
  }
  return content;
}
