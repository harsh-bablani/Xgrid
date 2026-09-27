/**
 * Report broken /blog/ links in published posts (exact slug required).
 * Optionally strip trailing slashes from hrefs.
 *
 * Run: node --env-file=.env scripts/audit-blog-links.mjs
 * Fix slashes: node --env-file=.env scripts/audit-blog-links.mjs --fix-slashes
 */
import { PrismaClient } from '@prisma/client';
import {
  extractBlogSlugsFromContent,
  resolvePublishedSlug,
  normalizeBlogContentLinks,
} from '../server/blogLinks.js';

const prisma = new PrismaClient();
const fixSlashes = process.argv.includes('--fix-slashes');

const posts = await prisma.blogPost.findMany({ where: { published: true } });
let brokenTotal = 0;

for (const post of posts) {
  const slugs = extractBlogSlugsFromContent(post.content);
  const broken = [];
  for (const slug of slugs) {
    if (slug === post.slug) continue;
    const resolved = await resolvePublishedSlug(slug);
    if (!resolved) broken.push(slug);
  }
  if (broken.length) {
    brokenTotal += broken.length;
    console.log('\n', post.slug);
    for (const s of broken) console.log('  BROKEN /blog/' + s);
  }

  if (fixSlashes) {
    const next = normalizeBlogContentLinks(post.content);
    if (JSON.stringify(next) !== JSON.stringify(post.content)) {
      await prisma.blogPost.update({ where: { id: post.id }, data: { content: next } });
      console.log('  fixed trailing slashes');
    }
  }
}

console.log('\nBroken link count:', brokenTotal);
await prisma.$disconnect();
