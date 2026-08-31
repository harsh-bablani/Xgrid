import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DB_PATH = path.join(__dirname, 'data', 'db.json');
const SESSIONS_PATH = path.join(__dirname, 'data', 'sessions.json');
const UPLOAD_DIR = path.join(ROOT, 'public', 'uploads', 'blogs');

const PORT = process.env.PORT || 3001;
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const VALID_BRANDS = ['jewelbiz', 'curabiz', 'retailbiz'];

const ADMIN_USER = {
  id: 'admin-1',
  email: process.env.ADMIN_EMAIL || 'admin@slatebiz.com',
  password: process.env.ADMIN_PASSWORD || 'admin123',
  name: 'SlateBiz Admin',
};

/** @type {Map<string, { user: object, createdAt: number }>} */
const sessions = new Map();

function loadSessions() {
  try {
    if (fs.existsSync(SESSIONS_PATH)) {
      const data = JSON.parse(fs.readFileSync(SESSIONS_PATH, 'utf-8'));
      const now = Date.now();
      for (const [token, entry] of Object.entries(data)) {
        const parsed = typeof entry === 'object' && entry !== null && 'createdAt' in entry
          ? entry
          : { user: entry, createdAt: now };
        if (now - parsed.createdAt < SESSION_TTL_MS) {
          sessions.set(token, parsed);
        }
      }
    }
  } catch {
    // ignore corrupt sessions
  }
}

function persistSessions() {
  fs.writeFileSync(SESSIONS_PATH, JSON.stringify(Object.fromEntries(sessions), null, 2));
}

function pruneSessions() {
  const now = Date.now();
  for (const [token, entry] of sessions) {
    if (now - entry.createdAt >= SESSION_TTL_MS) sessions.delete(token);
  }
}

loadSessions();
pruneSessions();
fs.mkdirSync(UPLOAD_DIR, { recursive: true });
fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

function readDb() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      const empty = { posts: [], redirects: [] };
      fs.writeFileSync(DB_PATH, JSON.stringify(empty, null, 2));
      return empty;
    }
    const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
    if (!Array.isArray(data.posts)) data.posts = [];
    if (!Array.isArray(data.redirects)) data.redirects = [];
    return data;
  } catch {
    throw Object.assign(new Error('Database file is corrupt. Check server/data/db.json.'), { status: 503 });
  }
}

const SITE_URL = (process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://slatebiz.com').replace(/\/$/, '');
const SITEMAP_PATH = path.join(ROOT, 'public', 'sitemap.xml');

const STATIC_SITEMAP_PATHS = [
  '/',
  '/products',
  '/services',
  '/about-us/',
  '/contact/',
  '/jewelbiz/',
  '/curabiz/',
  '/retailbiz/',
  '/blogs/',
  '/terms-of-use',
  '/privacy-policy/',
  '/careers',
  '/faq',
];

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSitemapXml(data) {
  const urls = [...STATIC_SITEMAP_PATHS];
  for (const post of data.posts || []) {
    if (!post.published || post.no_index) continue;
    if (!post.slug) continue;
    urls.push(`/blog/${post.slug}`);
  }

  const body = urls
    .map((loc) => {
      const abs = `${SITE_URL}${loc.startsWith('/') ? '' : '/'}${loc}`;
      return `  <url>\n    <loc>${xmlEscape(abs)}</loc>\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function writeSitemapFile(data) {
  fs.writeFileSync(SITEMAP_PATH, buildSitemapXml(data));
}

function writeDb(data) {
  if (!Array.isArray(data.redirects)) data.redirects = [];
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  try {
    writeSitemapFile(data);
  } catch (err) {
    console.warn('Sitemap regenerate failed:', err.message);
  }
}

function ensureUniqueSlug(db, slug, excludeId = null) {
  let candidate = slug;
  let n = 2;
  while (db.posts.some((p) => p.slug === candidate && p.id !== excludeId)) {
    candidate = `${slug}-${n}`;
    n += 1;
  }
  return candidate;
}

function upsertRedirect(db, from, to) {
  if (!from || !to || from === to) return;
  db.redirects = (db.redirects || []).filter((r) => r.from !== from);
  db.redirects.push({ from, to });
  for (const r of db.redirects) {
    if (r.to === from) r.to = to;
  }
}

function authMiddleware(req, res, next) {
  pruneSessions();
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  const session = token ? sessions.get(token) : null;
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized. Please sign in again.' });
  }
  req.user = session.user;
  next();
}

function validatePostBody(body, { partial = false } = {}) {
  const errors = [];
  if (!partial || body.brand !== undefined) {
    if (!VALID_BRANDS.includes(body.brand)) errors.push('Invalid brand.');
  }
  if (!partial || body.slug !== undefined) {
    const slug = String(body.slug || '').trim();
    if (!slug) errors.push('Slug is required.');
    else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) errors.push('Invalid slug format.');
  }
  if (!partial || body.title !== undefined) {
    if (!String(body.title || '').trim()) errors.push('Title is required.');
  }
  if (!partial || body.description !== undefined) {
    if (!String(body.description || '').trim()) errors.push('Description is required.');
  }
  if (body.content !== undefined && !Array.isArray(body.content)) {
    errors.push('Content must be an array.');
  }
  return errors;
}

function sanitizePostInput(body) {
  const tagsRaw = body.tags;
  const tags = Array.isArray(tagsRaw)
    ? tagsRaw.map((t) => String(t).trim()).filter(Boolean)
    : String(tagsRaw || '')
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

  return {
    brand: body.brand,
    slug: String(body.slug || '').trim(),
    category_label: String(body.category_label || '').trim(),
    title: String(body.title || '').trim(),
    description: String(body.description || '').trim(),
    hero_image: String(body.hero_image || '/logo.jpg').trim(),
    image_alt: String(body.image_alt || '').trim(),
    author: String(body.author || '').trim(),
    tags,
    date: String(body.date || '').trim(),
    read_time: String(body.read_time || '5 MIN READ').trim(),
    content: Array.isArray(body.content) ? body.content : [],
    published: Boolean(body.published),
    meta_title: String(body.meta_title || '').trim(),
    meta_description: String(body.meta_description || '').trim(),
    focus_keyword: String(body.focus_keyword || '').trim(),
    seo_keywords: String(body.seo_keywords || '').trim(),
    canonical_url: String(body.canonical_url || '').trim(),
    og_title: String(body.og_title || '').trim(),
    og_description: String(body.og_description || '').trim(),
    og_image: String(body.og_image || '').trim(),
    twitter_title: String(body.twitter_title || '').trim(),
    twitter_description: String(body.twitter_description || '').trim(),
    twitter_image: String(body.twitter_image || '').trim(),
    no_index: Boolean(body.no_index),
    no_follow: Boolean(body.no_follow),
  };
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
    cb(null, `${Date.now()}-${crypto.randomUUID().slice(0, 8)}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const allowedExt = ['.jpg', '.jpeg', '.png', '.webp'];
    const extOk = allowedExt.includes(ext);
    const mimeOk = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg', 'image/pjpeg'].includes(file.mimetype);
    if (extOk && mimeOk) cb(null, true);
    else cb(new Error('Only JPG, PNG, and WebP images are allowed.'));
  },
});

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, mode: 'local' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
    const token = crypto.randomUUID();
    const user = { id: ADMIN_USER.id, email: ADMIN_USER.email, name: ADMIN_USER.name };
    sessions.set(token, { user, createdAt: Date.now() });
    persistSessions();
    return res.json({ token, user });
  }
  return res.status(401).json({ error: 'Invalid email or password.' });
});

app.post('/api/auth/logout', authMiddleware, (req, res) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (token) {
    sessions.delete(token);
    persistSessions();
  }
  res.json({ ok: true });
});

app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

app.get('/api/posts', (req, res) => {
  try {
    const send = (posts) => {
      posts.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      res.json(posts);
    };

    if (req.query.published === 'true') {
      return send(readDb().posts.filter((p) => p.published));
    }

    authMiddleware(req, res, () => send(readDb().posts));
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Server error.' });
  }
});

app.get('/api/posts/slug/:slug', (req, res) => {
  try {
    const db = readDb();
    const slug = req.params.slug;
    let post = db.posts.find((p) => p.slug === slug && p.published);
    if (!post) {
      const redirect = (db.redirects || []).find((r) => r.from === slug);
      if (redirect) {
        post = db.posts.find((p) => p.slug === redirect.to && p.published);
        if (post) {
          res.set('X-Redirect-To', `/blog/${post.slug}`);
          return res.status(200).json({ ...post, _redirect_from: slug });
        }
      }
      return res.status(404).json({ error: 'Post not found.' });
    }
    res.json(post);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Server error.' });
  }
});

app.get('/api/posts/by-slug/:brand/:slug', (req, res) => {
  try {
    const db = readDb();
    const post = db.posts.find(
      (p) => p.brand === req.params.brand && p.slug === req.params.slug && p.published
    );
    if (!post) return res.status(404).json({ error: 'Post not found.' });
    res.json(post);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Server error.' });
  }
});

app.get('/api/redirects/:slug', (req, res) => {
  try {
    const db = readDb();
    const redirect = (db.redirects || []).find((r) => r.from === req.params.slug);
    if (!redirect) return res.status(404).json({ error: 'No redirect.' });
    res.json(redirect);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Server error.' });
  }
});

app.get(['/api/sitemap.xml', '/sitemap.xml'], (_req, res) => {
  try {
    const xml = buildSitemapXml(readDb());
    res.type('application/xml').send(xml);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Server error.' });
  }
});

app.get('/api/posts/:id', authMiddleware, (req, res) => {
  try {
    const db = readDb();
    const post = db.posts.find((p) => p.id === req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found.' });
    res.json(post);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Server error.' });
  }
});

app.post('/api/posts', authMiddleware, (req, res) => {
  try {
    const errors = validatePostBody(req.body);
    if (errors.length) return res.status(400).json({ error: errors.join(' ') });

    const db = readDb();
    const now = new Date().toISOString();
    const input = sanitizePostInput(req.body);
    input.slug = ensureUniqueSlug(db, input.slug);

    const post = {
      id: crypto.randomUUID(),
      ...input,
      previous_slugs: [],
      published_at: input.published ? now : null,
      created_at: now,
      updated_at: now,
    };

    db.posts.push(post);
    writeDb(db);
    res.status(201).json(post);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Server error.' });
  }
});

app.put('/api/posts/:id', authMiddleware, (req, res) => {
  try {
    const errors = validatePostBody(req.body);
    if (errors.length) return res.status(400).json({ error: errors.join(' ') });

    const db = readDb();
    const index = db.posts.findIndex((p) => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Post not found.' });

    const existing = db.posts[index];
    const input = sanitizePostInput(req.body);
    input.slug = ensureUniqueSlug(db, input.slug, req.params.id);

    const previousSlugs = Array.isArray(existing.previous_slugs) ? [...existing.previous_slugs] : [];
    if (existing.slug && existing.slug !== input.slug) {
      if (!previousSlugs.includes(existing.slug)) previousSlugs.push(existing.slug);
      upsertRedirect(db, existing.slug, input.slug);
      for (const old of previousSlugs) {
        upsertRedirect(db, old, input.slug);
      }
    }

    let publishedAt = existing.published_at || null;
    if (input.published && !publishedAt) publishedAt = new Date().toISOString();
    if (!input.published) {
      // keep published_at history for schema; draft simply unpublished
    }

    db.posts[index] = {
      ...existing,
      ...input,
      id: req.params.id,
      previous_slugs: previousSlugs,
      published_at: publishedAt,
      created_at: existing.created_at,
      updated_at: new Date().toISOString(),
    };
    writeDb(db);
    res.json(db.posts[index]);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Server error.' });
  }
});

app.delete('/api/posts/:id', authMiddleware, (req, res) => {
  try {
    const db = readDb();
    const existing = db.posts.find((p) => p.id === req.params.id);
    if (!existing) return res.status(404).json({ error: 'Post not found.' });

    db.posts = db.posts.filter((p) => p.id !== req.params.id);
    db.redirects = (db.redirects || []).filter(
      (r) => r.to !== existing.slug && r.from !== existing.slug
    );
    writeDb(db);
    res.json({ ok: true });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Server error.' });
  }
});

app.post('/api/upload', authMiddleware, (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) return res.status(400).json({ error: err.message || 'Upload failed.' });
    if (!req.file) return res.status(400).json({ error: 'No file received. Choose a JPG, PNG, or WebP image.' });
    res.json({ url: `/uploads/blogs/${req.file.filename}` });
  });
});

app.use('/uploads', express.static(path.join(ROOT, 'public', 'uploads')));

const server = app.listen(PORT, () => {
  console.log(`Local API running at http://localhost:${PORT}`);
  try {
    writeSitemapFile(readDb());
  } catch {
    /* ignore */
  }
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Admin login: ${ADMIN_USER.email} / ${ADMIN_USER.password}`);
  }
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\nPort ${PORT} is already in use.`);
    console.error('Fix: run "npm run kill-server" then "npm run dev" again.\n');
    process.exit(1);
  }
  throw err;
});
