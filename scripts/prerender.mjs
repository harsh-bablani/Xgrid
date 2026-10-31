/**
 * Writes real HTML for each public page, including published blog posts,
 * so crawlers get the article text without running JavaScript.
 * Output: dist/_pages/<site>/*.html and dist/blog/<slug>/index.html
 * Blog files live at /blog/<slug>/ so Vercel serves them as static HTML.
 * vercel.json falls back to app-shell.html for posts published after a deploy.
 */
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverEntry = pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href;
const API = (process.env.VITE_API_URL || 'https://xgrid.onrender.com').replace(/\/$/, '');

const SITES = {
  slatebiz: [
    '/',
    '/products',
    '/services',
    '/about-us/',
    '/contact/',
    '/retailbiz/',
    '/blogs/',
    '/terms-of-use',
    '/privacy-policy/',
    '/careers',
    '/faq',
  ],
  jewelbiz: ['/'],
  curabiz: ['/'],
};

const fileNameFor = (route) => (route === '/' ? 'index' : route.replace(/^\/|\/$/g, ''));

const DEFAULT_HEAD_TAGS =
  /\s*<title>[\s\S]*?<\/title>|\s*<meta\s+(?:name="(?:description|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/g;

async function loadPosts() {
  const res = await fetch(`${API}/api/posts?published=true`, { signal: AbortSignal.timeout(60000) });
  if (!res.ok) throw new Error(`posts API returned ${res.status}`);
  const rows = await res.json();
  if (!Array.isArray(rows)) throw new Error('posts API did not return a list');
  return rows.filter((post) => post && post.published !== false && !post.no_index && post.slug);
}

function summary(post) {
  return { ...post, content: [] };
}

function blogBootstrap(bag) {
  const json = JSON.stringify(bag).replace(/</g, '\\u003c');
  return `<script>window.__SLATEBIZ_API_URL__=${JSON.stringify(API)};window.__PRERENDER_BLOG__=${json};</script>`;
}

const posts = await loadPosts();
const summaries = posts.map(summary);
console.log(`prerender: ${posts.length} published posts`);

const shell = await readFile(path.join(dist, 'index.html'), 'utf8');
if (!shell.includes('<div id="root"></div>')) throw new Error('dist/index.html has no empty #root');
const apiBootstrap = `<script>window.__SLATEBIZ_API_URL__=${JSON.stringify(API)};</script>`;
const appShell = shell.includes('__SLATEBIZ_API_URL__')
  ? shell
  : shell.replace('<script type="module"', `${apiBootstrap}\n    <script type="module"`);
await writeFile(path.join(dist, 'app-shell.html'), appShell);
const bareShell = shell.replace(DEFAULT_HEAD_TAGS, '');

globalThis.__SLATEBIZ_API_URL__ = API;

function writePage(outFile, rendered, bag) {
  const page = bareShell
    .replace('</head>', `    ${rendered.head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${rendered.html}</div>`)
    .replace('<script type="module"', `${blogBootstrap(bag)}\n    <script type="module"`);
  return writeFile(outFile, page);
}

let count = 0;
for (const [site, routes] of Object.entries(SITES)) {
  globalThis.__PRERENDER_SITE__ = site === 'slatebiz' ? undefined : site;
  const { render } = await import(`${serverEntry}?site=${site}`);
  const outDir = path.join(dist, '_pages', site);
  await mkdir(outDir, { recursive: true });

  for (const route of routes) {
    globalThis.__PRERENDER_BLOG__ = { posts: summaries };
    const rendered = await render(route);
    if (!rendered.html.trim()) throw new Error(`Empty render for ${site} ${route}`);
    await writePage(path.join(outDir, `${fileNameFor(route)}.html`), rendered, { posts: summaries });
    count += 1;
  }
}

globalThis.__PRERENDER_SITE__ = undefined;
const { render: renderSlate } = await import(`${serverEntry}?site=slatebiz-blogs`);

for (const post of posts) {
  globalThis.__PRERENDER_BLOG__ = { posts: summaries, post };
  const rendered = await renderSlate(`/blog/${post.slug}`);
  if (rendered.html.includes('Loading article') || rendered.html.includes('Blog not found')) {
    throw new Error(`Blog prerender did not include the article for ${post.slug}`);
  }
  const blogDir = path.join(dist, 'blog', post.slug);
  await mkdir(blogDir, { recursive: true });
  await writePage(path.join(blogDir, 'index.html'), rendered, { posts: summaries, post });
  count += 1;
}

await rm(path.join(dist, 'index.html'));
await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`prerendered ${count} pages`);
