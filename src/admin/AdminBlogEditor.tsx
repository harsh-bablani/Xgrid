import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { createPost, fetchPostById, updatePost } from '../lib/blogService';
import type { Brand, BlogSection } from '../types/blog';
import {
  BRAND_OPTIONS,
  brandDefaultLabel,
  hasLegacyContent,
  normalizeSections,
  validateSlug,
} from '../types/blog';
import ImageUpload from './components/ImageUpload';
import SectionEditor from './components/SectionEditor';
import HtmlContentEditor from './components/HtmlContentEditor';
// Manual SEO panel — commented out; SEO is auto-generated like standard marketing sites.
// import AdminSeoPanel from './components/AdminSeoPanel';
import { createBlogTemplate, HTML_BLOG_STARTER } from '../data/blogTemplate';
import { blogPath, slugify } from '../lib/seo';
import {
  createHtmlContent,
  extractHtmlFromContent,
  isHtmlContent,
} from '../types/blog';

type ContentMode = 'sections' | 'html';

function formatPostDate(d: Date) {
  return d
    .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    .toUpperCase()
    .replace(/,/g, '');
}

export default function AdminBlogEditor() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isNew = location.pathname.endsWith('/new') || id === 'new' || !id;

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [legacyWarning, setLegacyWarning] = useState(false);

  const [brand, setBrand] = useState<Brand>('jewelbiz');
  const [slug, setSlug] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);
  const [categoryLabel, setCategoryLabel] = useState(brandDefaultLabel('jewelbiz'));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [author, setAuthor] = useState('SlateBiz Editorial');
  const [tagsInput, setTagsInput] = useState('');
  const [date, setDate] = useState(() => formatPostDate(new Date()));
  const [readTime, setReadTime] = useState('5 MIN READ');
  const [published, setPublished] = useState(false);
  const [contentMode, setContentMode] = useState<ContentMode>('sections');
  const [sections, setSections] = useState<BlogSection[]>(() => (isNew ? createBlogTemplate() : []));
  const [htmlContent, setHtmlContent] = useState('');
  const [showMoreSettings, setShowMoreSettings] = useState(false);

  const categoryTouched = useRef(false);

  const tags = useMemo(
    () =>
      tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    [tagsInput]
  );

  useEffect(() => {
    const state = location.state as { success?: string } | null;
    if (state?.success) {
      setSuccess(state.success);
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  useEffect(() => {
    if (isNew || !id) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError('');

    fetchPostById(id)
      .then((post) => {
        if (cancelled) return;
        setBrand(post.brand);
        setSlug(post.slug);
        setSlugTouched(true);
        setCategoryLabel(post.categoryLabel);
        setTitle(post.title);
        setDescription(post.description);
        setHeroImage(post.heroImage);
        setImageAlt(post.imageAlt || '');
        setAuthor(post.author || 'SlateBiz Editorial');
        setTagsInput((post.tags || []).join(', '));
        setDate(post.date);
        setReadTime(post.readTime);
        setPublished(post.published ?? false);
        categoryTouched.current = true;

        if (isHtmlContent(post.content)) {
          setContentMode('html');
          setHtmlContent(extractHtmlFromContent(post.content));
          setSections(createBlogTemplate());
          setLegacyWarning(false);
        } else {
          setContentMode('sections');
          setHtmlContent('');
          setLegacyWarning(hasLegacyContent(post.content));
          const loaded = normalizeSections(post.content);
          setSections(loaded.length ? loaded : createBlogTemplate());
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load post.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id, isNew]);

  const handleBrandChange = (next: Brand) => {
    setBrand(next);
    if (!categoryTouched.current) {
      setCategoryLabel(brandDefaultLabel(next));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const missing: string[] = [];
    if (!title.trim()) missing.push('title');
    if (!description.trim()) missing.push('short excerpt');
    if (!heroImage.trim()) missing.push('display image (hero)');
    const slugError = validateSlug(slug);
    if (slugError) missing.push('slug');

    if (missing.length) {
      setError(`Please fix: ${missing.join(', ')}.${slugError ? ` ${slugError}` : ''}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setSaving(true);

    const input = {
      brand,
      slug: slug.trim(),
      category_label: categoryLabel.trim() || brandDefaultLabel(brand),
      title: title.trim(),
      description: description.trim(),
      hero_image: heroImage || '/logo.jpg',
      image_alt: imageAlt.trim() || title.trim(),
      author: author.trim() || 'SlateBiz Editorial',
      tags,
      date: date.trim() || formatPostDate(new Date()),
      read_time: readTime.trim() || '5 MIN READ',
      content:
        contentMode === 'html'
          ? createHtmlContent(htmlContent)
          : sections.map((s) => ({
              ...s,
              subsections: s.subsections ?? [],
              faqs: s.faqs ?? [],
            })),
      published,
      // Auto SEO: leave override fields empty so public pages generate from title / excerpt / image
      meta_title: '',
      meta_description: '',
      focus_keyword: '',
      seo_keywords: tags.join(', '),
      canonical_url: '',
      og_title: '',
      og_description: '',
      og_image: '',
      twitter_title: '',
      twitter_description: '',
      twitter_image: '',
      no_index: false,
      no_follow: false,
    };

    try {
      if (isNew) {
        const created = await createPost(input);
        navigate('/admin', { replace: true, state: { success: `"${created.title}" created successfully.` } });
      } else if (id) {
        await updatePost(id, input);
        setLegacyWarning(false);
        setSuccess('Post saved successfully. Sitemap updated for published posts.');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Save failed.';
      setError(message);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (message.toLowerCase().includes('sign in') || message.toLowerCase().includes('unauthorized')) {
        setTimeout(() => navigate('/admin/login', { state: { from: location.pathname } }), 1500);
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-8 w-48 bg-slate-200 rounded animate-pulse" />
        <div className="h-64 bg-white rounded-2xl border border-gray-100 animate-pulse" />
      </div>
    );
  }

  return (
    <div>
      <Link to="/admin" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#0C69B6] mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to posts
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">{isNew ? 'New blog post' : 'Edit blog post'}</h1>
        {published && slug ? (
          <a
            href={blogPath(slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#0C69B6] font-medium hover:underline"
          >
            View on site →
          </a>
        ) : (
          <span className="text-sm text-amber-600 font-medium">Publish to make this post visible on the site</span>
        )}
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {success && (
        <div className="mb-6 rounded-lg bg-green-50 border border-green-100 px-4 py-3 text-sm text-green-700">
          {success}
        </div>
      )}

      {legacyWarning && (
        <div className="mb-6 rounded-lg bg-amber-50 border border-amber-100 px-4 py-3 text-sm text-amber-800">
          This post used an older content format. It has been converted for editing — review sections before saving.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-8 pb-28">
        <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0C69B6] mb-1">Step 1</p>
            <h2 className="text-lg font-semibold text-slate-900">Top of page</h2>
            <p className="text-sm text-slate-500 mt-1">
              Big title, display image, and listing preview — shown above the article body on the live post.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Title</label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (isNew && !slugTouched) setSlug(slugify(e.target.value));
              }}
              className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0C69B6]/20 focus:border-[#0C69B6]"
              placeholder="What are the Daily Challenges of Jewellery Accounting?"
            />
          </div>

          <ImageUpload
            label="Display image (hero)"
            kind="hero"
            value={heroImage}
            onChange={setHeroImage}
          />
          {!heroImage && (
            <p className="text-xs text-amber-700 -mt-2">Upload an image — without this, the site logo is used instead.</p>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Short excerpt</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0C69B6]/20"
              placeholder="2–3 sentences shown on the blog listing page"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Category</label>
              <select
                value={brand}
                onChange={(e) => handleBrandChange(e.target.value as Brand)}
                className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0C69B6]/20"
              >
                {BRAND_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label} — {opt.subtitle}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Listing label</label>
              <input
                value={categoryLabel}
                onChange={(e) => {
                  categoryTouched.current = true;
                  setCategoryLabel(e.target.value);
                }}
                className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0C69B6]/20"
                placeholder="JewelBiz · Jewellery ERP"
              />
            </div>
          </div>

          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="rounded border-gray-300 text-[#0C69B6] focus:ring-[#0C69B6]"
            />
            <span className="text-sm font-medium text-slate-700">Published — live on site and sitemap</span>
          </label>

          <button
            type="button"
            onClick={() => setShowMoreSettings((v) => !v)}
            className="text-sm font-medium text-[#0C69B6] hover:underline"
          >
            {showMoreSettings ? 'Hide extra settings' : 'Show extra settings (URL, date, author, tags…)'}
          </button>

          {showMoreSettings && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-gray-100">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">URL slug</label>
                <input
                  value={slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    setSlug(slugify(e.target.value));
                  }}
                  className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200"
                  placeholder="my-blog-post"
                />
                <p className="mt-1 text-xs text-slate-400">Live URL: {blogPath(slug || '…')}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Display image alt text</label>
                <input
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200"
                  placeholder="Defaults to title if empty"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Publication date</label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200"
                  placeholder="31 AUG 2026"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Read time</label>
                <input
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200"
                  placeholder="5 MIN READ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Author</label>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200"
                  placeholder="SlateBiz Editorial"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Tags</label>
                <input
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200"
                  placeholder="erp, gst, jewellery"
                />
              </div>
            </div>
          )}
        </section>

        <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0C69B6] mb-1">Step 2</p>
              <h2 className="text-lg font-semibold text-slate-900 mb-1">Article body</h2>
              <p className="text-sm text-slate-500">
                {contentMode === 'html'
                  ? 'Write HTML for the content below the hero image.'
                  : 'Fill blocks with image → heading → text, like your old blog posts.'}
              </p>
            </div>
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-slate-50 shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (contentMode === 'html' && htmlContent.trim()) {
                    if (!confirm('Switch to visual blocks? Saved content will use sections, not HTML.')) {
                      return;
                    }
                  }
                  setContentMode('sections');
                }}
                className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                  contentMode === 'sections' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                }`}
              >
                Visual blocks
              </button>
              <button
                type="button"
                onClick={() => {
                  if (contentMode === 'sections' && sections.some((s) => s.title || s.body || s.image)) {
                    if (!confirm('Switch to HTML? Your section content is not converted — use HTML or the starter template.')) {
                      return;
                    }
                  }
                  if (!htmlContent.trim()) {
                    setHtmlContent(HTML_BLOG_STARTER);
                  }
                  setContentMode('html');
                }}
                className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                  contentMode === 'html' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                }`}
              >
                HTML code
              </button>
            </div>
          </div>

          {contentMode === 'html' ? (
            <HtmlContentEditor value={htmlContent} onChange={setHtmlContent} />
          ) : (
            <SectionEditor sections={sections} onChange={setSections} />
          )}
        </section>

        {/* Manual SEO settings panel — disabled for now.
            Professional auto-SEO still runs on the public page from title, excerpt, image, slug, author, tags.
        <AdminSeoPanel ... />
        */}

        <div className="sticky bottom-0 z-30 -mx-4 px-4 py-4 bg-slate-50/95 backdrop-blur border-t border-gray-200">
          {error && <p className="mb-3 text-sm text-red-600 font-medium">{error}</p>}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 h-[50px] px-6 rounded-[10px] bg-[#FF641F] text-white text-sm font-semibold hover:bg-[#E55A18] disabled:opacity-60"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Saving…' : 'Save post'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
