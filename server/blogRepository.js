import crypto from 'crypto';
import { prisma } from './prisma.js';

/** @param {import('@prisma/client').BlogPost} post */
export function toRecord(post) {
  return {
    id: post.id,
    brand: post.brand,
    slug: post.slug,
    category_label: post.categoryLabel,
    title: post.title,
    description: post.description,
    hero_image: post.heroImage,
    image_alt: post.imageAlt,
    author: post.author,
    tags: post.tags,
    date: post.date,
    read_time: post.readTime,
    content: post.content,
    published: post.published,
    published_at: post.publishedAt ? post.publishedAt.toISOString() : null,
    previous_slugs: post.previousSlugs,
    meta_title: post.metaTitle,
    meta_description: post.metaDescription,
    focus_keyword: post.focusKeyword,
    seo_keywords: post.seoKeywords,
    canonical_url: post.canonicalUrl,
    og_title: post.ogTitle,
    og_description: post.ogDescription,
    og_image: post.ogImage,
    twitter_title: post.twitterTitle,
    twitter_description: post.twitterDescription,
    twitter_image: post.twitterImage,
    no_index: post.noIndex,
    no_follow: post.noFollow,
    created_at: post.createdAt.toISOString(),
    updated_at: post.updatedAt.toISOString(),
  };
}

/** @param {Record<string, unknown>} input */
function toCreateData(input) {
  return {
    brand: input.brand,
    slug: input.slug,
    categoryLabel: input.category_label,
    title: input.title,
    description: input.description,
    heroImage: input.hero_image,
    imageAlt: input.image_alt,
    author: input.author,
    tags: input.tags,
    date: input.date,
    readTime: input.read_time,
    content: input.content,
    published: input.published,
    publishedAt: input.published ? new Date() : null,
    previousSlugs: [],
    metaTitle: input.meta_title,
    metaDescription: input.meta_description,
    focusKeyword: input.focus_keyword,
    seoKeywords: input.seo_keywords,
    canonicalUrl: input.canonical_url,
    ogTitle: input.og_title,
    ogDescription: input.og_description,
    ogImage: input.og_image,
    twitterTitle: input.twitter_title,
    twitterDescription: input.twitter_description,
    twitterImage: input.twitter_image,
    noIndex: input.no_index,
    noFollow: input.no_follow,
  };
}

/** @param {Record<string, unknown>} input */
function toUpdateData(input) {
  return {
    brand: input.brand,
    slug: input.slug,
    categoryLabel: input.category_label,
    title: input.title,
    description: input.description,
    heroImage: input.hero_image,
    imageAlt: input.image_alt,
    author: input.author,
    tags: input.tags,
    date: input.date,
    readTime: input.read_time,
    content: input.content,
    published: input.published,
    metaTitle: input.meta_title,
    metaDescription: input.meta_description,
    focusKeyword: input.focus_keyword,
    seoKeywords: input.seo_keywords,
    canonicalUrl: input.canonical_url,
    ogTitle: input.og_title,
    ogDescription: input.og_description,
    ogImage: input.og_image,
    twitterTitle: input.twitter_title,
    twitterDescription: input.twitter_description,
    twitterImage: input.twitter_image,
    noIndex: input.no_index,
    noFollow: input.no_follow,
  };
}

export async function listPosts({ publishedOnly = false } = {}) {
  const posts = await prisma.blogPost.findMany({
    where: publishedOnly ? { published: true } : undefined,
    orderBy: { updatedAt: 'desc' },
  });
  return posts.map(toRecord);
}

export async function getPostById(id) {
  const post = await prisma.blogPost.findUnique({ where: { id } });
  return post ? toRecord(post) : null;
}

export async function getPublishedPostBySlug(slug) {
  const post = await prisma.blogPost.findFirst({
    where: { slug, published: true },
  });
  return post ? toRecord(post) : null;
}

export async function getPublishedPostByBrandSlug(brand, slug) {
  const post = await prisma.blogPost.findFirst({
    where: { brand, slug, published: true },
  });
  return post ? toRecord(post) : null;
}

export async function ensureUniqueSlug(slug, excludeId = null) {
  let candidate = slug;
  let n = 2;
  while (true) {
    const existing = await prisma.blogPost.findFirst({
      where: {
        slug: candidate,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
    });
    if (!existing) return candidate;
    candidate = `${slug}-${n}`;
    n += 1;
  }
}

export async function getRedirect(fromSlug) {
  const redirect = await prisma.blogRedirect.findUnique({
    where: { fromSlug },
  });
  return redirect ? { from: redirect.fromSlug, to: redirect.toSlug } : null;
}

export async function upsertRedirect(fromSlug, toSlug) {
  if (!fromSlug || !toSlug || fromSlug === toSlug) return;

  await prisma.blogRedirect.upsert({
    where: { fromSlug },
    create: { id: crypto.randomUUID(), fromSlug, toSlug },
    update: { toSlug },
  });

  const pointing = await prisma.blogRedirect.findMany({
    where: { toSlug: fromSlug },
  });

  await Promise.all(
    pointing.map((r) =>
      prisma.blogRedirect.update({
        where: { id: r.id },
        data: { toSlug },
      })
    )
  );
}

export async function deleteRedirectsForSlug(slug) {
  await prisma.blogRedirect.deleteMany({
    where: {
      OR: [{ fromSlug: slug }, { toSlug: slug }],
    },
  });
}

export async function createPost(input) {
  const slug = await ensureUniqueSlug(input.slug);
  const post = await prisma.blogPost.create({
    data: {
      id: crypto.randomUUID(),
      ...toCreateData({ ...input, slug }),
    },
  });
  return toRecord(post);
}

export async function updatePost(id, input, existing) {
  const slug = await ensureUniqueSlug(input.slug, id);
  const previousSlugs = Array.isArray(existing.previous_slugs) ? [...existing.previous_slugs] : [];

  if (existing.slug && existing.slug !== slug) {
    if (!previousSlugs.includes(existing.slug)) previousSlugs.push(existing.slug);
    await upsertRedirect(existing.slug, slug);
    for (const old of previousSlugs) {
      if (old !== slug) await upsertRedirect(old, slug);
    }
  }

  let publishedAt = existing.published_at ? new Date(existing.published_at) : null;
  if (input.published && !publishedAt) publishedAt = new Date();

  const post = await prisma.blogPost.update({
    where: { id },
    data: {
      ...toUpdateData({ ...input, slug }),
      previousSlugs,
      publishedAt,
    },
  });
  return toRecord(post);
}

export async function deletePost(id) {
  const existing = await getPostById(id);
  if (!existing) return null;
  await deleteRedirectsForSlug(existing.slug);
  await prisma.blogPost.delete({ where: { id } });
  return existing;
}

export async function getPublishedPostsForSitemap() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true, noIndex: false },
    select: { slug: true },
  });
  return posts;
}
