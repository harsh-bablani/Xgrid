import crypto from 'crypto';
import { prisma } from './prisma.js';

const STOP_WORDS = new Set(['the', 'and', 'for', 'in', 'a', 'of', 'to', 'on', 'vs', 'an']);

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

/** No-op kept for callers; aliases are created when content is saved. */
export async function ensureDefaultBlogRedirects() {
  return;
}

async function listPublishedSlugs() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    select: { slug: true },
  });
  return posts.map((p) => p.slug);
}

/**
 * Map a short / mistyped slug to one published post when the match is unambiguous.
 * Example: hospital-management-software-india-buyer-guide
 *        → hospital-management-software-in-india-the-2026-buyer-guide
 */
export function suggestPublishedSlug(requested, publishedSlugs) {
  const clean = cleanBlogSlug(requested);
  if (!clean) return null;
  if (publishedSlugs.includes(clean)) return clean;

  const prefixed = publishedSlugs.filter(
    (s) => s === clean || s.startsWith(`${clean}-`) || clean.startsWith(`${s}-`)
  );
  if (prefixed.length === 1) return prefixed[0];

  const tokens = clean.split('-').filter((t) => t.length > 2 && !STOP_WORDS.has(t));
  if (tokens.length < 3) return null;

  const scored = publishedSlugs
    .map((s) => {
      const hit = tokens.filter((t) => s.includes(t)).length;
      return { s, hit, ratio: hit / tokens.length };
    })
    .filter((x) => x.ratio >= 0.8 && x.hit >= 3)
    .sort((a, b) => b.hit - a.hit || a.s.length - b.s.length);

  if (!scored.length) return null;
  if (scored.length === 1) return scored[0].s;
  if (scored[0].hit > scored[1].hit) return scored[0].s;
  return null;
}

export function topPublishedSlugSuggestions(requested, publishedSlugs, limit = 2) {
  const clean = cleanBlogSlug(requested);
  const tokens = clean.split('-').filter((t) => t.length > 2 && !STOP_WORDS.has(t));
  if (!tokens.length) return [];

  return publishedSlugs
    .map((s) => {
      const hit = tokens.filter((t) => s.includes(t)).length;
      return { s, hit, ratio: hit / tokens.length };
    })
    .filter((x) => x.hit >= 2)
    .sort((a, b) => b.hit - a.hit || a.s.length - b.s.length)
    .slice(0, limit)
    .map((x) => x.s);
}

/** Collect unique /blog/{slug} targets from HTML or structured content. */
export function extractBlogSlugsFromContent(content) {
  const found = new Set();
  const scan = (html) => {
    for (const m of String(html || '').matchAll(
      /(?:https?:\/\/(?:www\.)?slatebiz\.(?:com|in))?\/blog\/([a-z0-9-]+)\/?/gi
    )) {
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

export async function formatBrokenBlogLinkError(brokenSlugs) {
  const published = await listPublishedSlugs();
  const parts = brokenSlugs.map((slug) => {
    const tips = topPublishedSlugSuggestions(slug, published, 2);
    if (!tips.length) return `/blog/${slug}`;
    return `/blog/${slug} (try ${tips.map((t) => `/blog/${t}`).join(' or ')})`;
  });
  return `Broken blog links — use the exact published URL slug for each link: ${parts.join('; ')}`;
}

function mapContentHtml(content, rewriteHtml) {
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

/** Strip trailing slashes and absolute slatebiz hosts on /blog/... hrefs. */
export function normalizeBlogContentLinks(content) {
  const rewriteHtml = (html) =>
    String(html || '')
      .replace(
        /href=(["'])https?:\/\/(?:www\.)?slatebiz\.(?:com|in)\/blog\/([a-z0-9-]+)\/?\1/gi,
        'href=$1/blog/$2$1'
      )
      .replace(/href=(["'])(\/blog\/[a-z0-9-]+)\/+(["'#?\s>])/gi, 'href=$1$2$3');

  return mapContentHtml(content, rewriteHtml);
}

/**
 * After basic normalize, rewrite short/mistyped /blog/ slugs to the unique
 * published match and record a redirect so the short URL keeps working.
 */
export async function rewriteBlogContentToPublishedSlugs(content) {
  const normalized = normalizeBlogContentLinks(content);
  const published = await listPublishedSlugs();
  const redirects = [];

  const rewriteHtml = (html) =>
    String(html || '').replace(/href=(["'])\/blog\/([a-z0-9-]+)\/?\1/gi, (full, quote, raw) => {
      const clean = cleanBlogSlug(raw);
      const suggested = suggestPublishedSlug(clean, published);
      if (suggested && suggested !== clean) {
        redirects.push([clean, suggested]);
        return `href=${quote}/blog/${suggested}${quote}`;
      }
      return `href=${quote}/blog/${clean}${quote}`;
    });

  const rewritten = mapContentHtml(normalized, rewriteHtml);
  await Promise.all(redirects.map(([from, to]) => upsertRedirect(from, to)));
  return rewritten;
}
