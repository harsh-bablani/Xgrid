/**
 * One-time import: server/data/db.json → Supabase (via Prisma)
 * Run: npm run db:seed
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { connectDatabase, disconnectDatabase, prisma } from '../server/prisma.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, 'data', 'db.json');

function readJsonDb() {
  if (!fs.existsSync(DB_PATH)) {
    return { posts: [], redirects: [] };
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

async function main() {
  await connectDatabase();
  const data = readJsonDb();

  for (const post of data.posts || []) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      create: {
        id: post.id || crypto.randomUUID(),
        brand: post.brand,
        slug: post.slug,
        categoryLabel: post.category_label || '',
        title: post.title || '',
        description: post.description || '',
        heroImage: post.hero_image || '',
        imageAlt: post.image_alt || '',
        author: post.author || '',
        tags: Array.isArray(post.tags) ? post.tags : [],
        date: post.date || '',
        readTime: post.read_time || '5 MIN READ',
        content: post.content || [],
        published: Boolean(post.published),
        publishedAt: post.published_at ? new Date(post.published_at) : null,
        previousSlugs: Array.isArray(post.previous_slugs) ? post.previous_slugs : [],
        metaTitle: post.meta_title || '',
        metaDescription: post.meta_description || '',
        focusKeyword: post.focus_keyword || '',
        seoKeywords: post.seo_keywords || '',
        canonicalUrl: post.canonical_url || '',
        ogTitle: post.og_title || '',
        ogDescription: post.og_description || '',
        ogImage: post.og_image || '',
        twitterTitle: post.twitter_title || '',
        twitterDescription: post.twitter_description || '',
        twitterImage: post.twitter_image || '',
        noIndex: Boolean(post.no_index),
        noFollow: Boolean(post.no_follow),
        createdAt: post.created_at ? new Date(post.created_at) : new Date(),
        updatedAt: post.updated_at ? new Date(post.updated_at) : new Date(),
      },
      update: {
        brand: post.brand,
        categoryLabel: post.category_label || '',
        title: post.title || '',
        description: post.description || '',
        heroImage: post.hero_image || '',
        imageAlt: post.image_alt || '',
        author: post.author || '',
        tags: Array.isArray(post.tags) ? post.tags : [],
        date: post.date || '',
        readTime: post.read_time || '5 MIN READ',
        content: post.content || [],
        published: Boolean(post.published),
        publishedAt: post.published_at ? new Date(post.published_at) : null,
        previousSlugs: Array.isArray(post.previous_slugs) ? post.previous_slugs : [],
        updatedAt: post.updated_at ? new Date(post.updated_at) : new Date(),
      },
    });
    console.log(`Imported post: ${post.slug}`);
  }

  for (const redirect of data.redirects || []) {
    if (!redirect.from || !redirect.to) continue;
    await prisma.blogRedirect.upsert({
      where: { fromSlug: redirect.from },
      create: {
        id: crypto.randomUUID(),
        fromSlug: redirect.from,
        toSlug: redirect.to,
      },
      update: { toSlug: redirect.to },
    });
    console.log(`Imported redirect: ${redirect.from} → ${redirect.to}`);
  }

  console.log('Seed complete.');
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await disconnectDatabase();
  });
