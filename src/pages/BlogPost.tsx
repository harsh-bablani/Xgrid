import { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useBlogPost, useBlogPostBySlug, useBlogPosts } from '../hooks/useBlogPosts';
import BlogContentRenderer from '../components/BlogContentRenderer';
import SeoHead from '../components/SeoHead';
import { blogPath, pickRelatedArticles } from '../lib/seo';
import { brandDisplayTitle, type Brand } from '../types/blog';

export default function BlogPost() {
  const { brand, slug } = useParams();
  const bySlug = useBlogPostBySlug(brand ? undefined : slug);
  const byBrand = useBlogPost(brand, slug);
  const { post, loading, error } = brand ? byBrand : bySlug;
  const redirectTo = brand && post ? blogPath(post.slug) : bySlug.redirectTo;
  const { posts: allPosts } = useBlogPosts();

  const related = useMemo(() => {
    if (!post) return [];
    return pickRelatedArticles(
      {
        id: post.id,
        brand: post.brand,
        slug: post.slug,
        title: post.title,
        description: post.description,
        categoryLabel: post.categoryLabel,
        tags: post.tags,
        focusKeyword: post.focusKeyword,
        heroImage: post.heroImage,
        date: post.date,
        readTime: post.readTime,
      },
      allPosts.map((p) => ({
        id: p.id,
        brand: p.brand,
        slug: p.slug,
        title: p.title,
        description: p.description,
        categoryLabel: p.categoryLabel,
        tags: p.tags,
        focusKeyword: p.focusKeyword,
        heroImage: p.heroImage,
        date: p.date,
        readTime: p.readTime,
      })),
      3
    );
  }, [post, allPosts]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500">Loading…</p>
      </div>
    );
  }

  if (redirectTo && redirectTo !== `/blog/${slug}`) {
    return <Navigate to={redirectTo} replace />;
  }

  if (error && !post) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
            <p className="text-gray-600">{error}</p>
            <Link to="/blogs/" className="mt-6 inline-flex items-center text-blue-700 font-bold">
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
            <p className="text-gray-600">Blog not found.</p>
            <Link to="/blogs/" className="mt-6 inline-flex items-center text-blue-700 font-bold">
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      <SeoHead
        source={{
          title: post.title,
          description: post.description,
          slug: post.slug,
          heroImage: post.heroImage,
          imageAlt: post.imageAlt || post.title,
          author: post.author || 'SlateBiz Editorial',
          categoryLabel: post.categoryLabel,
          tags: post.tags,
          seoKeywords: (post.tags || []).join(', '),
          publishedAt: post.publishedAt || post.createdAt,
          updatedAt: post.updatedAt,
          noIndex: !post.published,
          noFollow: false,
        }}
        includeJsonLd={Boolean(post.published)}
      />

      <section className="relative overflow-hidden pt-10 pb-10 md:pt-14 md:pb-14">
        <div className="absolute inset-0 opacity-10">
          <img src="/herobg.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight text-center px-1">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
            <span className="text-gray-500 font-medium tracking-wide">
              {post.date} | {post.readTime}
              {post.author ? ` | ${post.author}` : ''}
            </span>
            <span className="inline-flex self-start sm:self-auto items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              {post.categoryLabel}
            </span>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden">
            <img
              src={post.heroImage}
              alt={post.imageAlt || post.title}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {post.content && post.content.length > 0 ? (
        <BlogContentRenderer content={post.content} />
      ) : (
        <section className="py-10 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 text-center">No article content yet.</p>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-8">
            Related Articles
          </h2>
          {related.length === 0 ? (
            <p className="text-sm text-gray-500">No closely related articles yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id ?? `${p.brand}/${p.slug}`}
                  to={blogPath(p.slug)}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition hover:shadow-md"
                >
                  <div className="overflow-hidden rounded-2xl m-3 border border-gray-100">
                    <img src={p.heroImage} alt={p.title} className="w-full h-48 object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 p-5 pt-0">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                      {p.date} | {p.readTime} | {brandDisplayTitle(p.brand as Brand)}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                      {p.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
                        Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="h-10" />
    </div>
  );
}
