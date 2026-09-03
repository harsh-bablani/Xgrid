import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import type { Brand } from '../types/blog';
import { BLOG_CATEGORIES, brandDisplayTitle } from '../types/blog';
import { useBlogPosts } from '../hooks/useBlogPosts';
import SearchBar from '../components/SearchBar';
import { SITE_URL } from '../lib/seo';

const CATEGORIES: { value: Brand | 'all'; title: string; subtitle?: string }[] = [
  { value: 'all', title: 'All' },
  ...BLOG_CATEGORIES,
];

const PAGE_SIZE = 9;

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState<Brand | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const { posts: POSTS, loading, error } = useBlogPosts();

  const filteredPosts = useMemo(() => {
    let posts = POSTS;
    if (activeCategory !== 'all') {
      posts = posts.filter((post) => post.brand === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.description.toLowerCase().includes(q) ||
          post.categoryLabel.toLowerCase().includes(q) ||
          brandDisplayTitle(post.brand).toLowerCase().includes(q) ||
          post.brand.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [activeCategory, searchQuery, POSTS]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedPosts = filteredPosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const paginationPages = Math.max(totalPages, filteredPosts.length > 0 ? totalPages : 1);

  const selectCategory = (value: Brand | 'all') => {
    setActiveCategory(value);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Helmet>
        <title>Blogs | SlateBiz Softwares</title>
        <meta
          name="description"
          content="Explore strategies, guides, and insights on business automation, inventory management, SaaS tools, and scaling operations with modern technology."
        />
        <link rel="canonical" href={`${SITE_URL}/blogs/`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero — Figma soft pastel gradient */}
      <section
        className="relative overflow-hidden pt-[72px] pb-16 sm:pt-20 sm:pb-[72px] text-center"
        style={{
          background: 'linear-gradient(105deg, #E8F2FB 0%, #F3EFF7 42%, #FBEDE6 100%)',
        }}
      >
        <div className="max-w-[720px] mx-auto px-5 sm:px-6">
          <h1
            className="font-serif text-[42px] sm:text-[52px] md:text-[64px] leading-none tracking-[-0.02em] text-[#0C69B6] uppercase"
            style={{ fontWeight: 500 }}
          >
            Blogs
          </h1>
          <p className="mt-5 sm:mt-6 font-sans font-normal text-[14px] sm:text-[15px] leading-[1.75] text-[#667085] max-w-[580px] mx-auto">
            Explore strategies, guides, and insights on business automation, inventory management,
            SaaS tools, and scaling operations with modern technology.
          </p>

          <div className="mt-10 sm:mt-12">
            <SearchBar
              value={searchQuery}
              onChange={(v) => {
                setSearchQuery(v);
                setPage(1);
              }}
            />
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="-mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-stretch justify-start lg:justify-center gap-3 sm:gap-4 min-w-max lg:min-w-0">
            {CATEGORIES.map((category) => {
              const active = activeCategory === category.value;
              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => selectCategory(category.value)}
                  className={`shrink-0 rounded-lg px-4 py-3 text-left transition-colors border ${
                    active
                      ? 'bg-blue-50/80 border-[#0C69B6]/20'
                      : 'bg-white border-transparent hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`block font-sans text-[14px] font-semibold leading-tight ${
                      active ? 'text-slate-900' : 'text-slate-800'
                    }`}
                  >
                    {category.title}
                  </span>
                  {category.subtitle ? (
                    <span className="block mt-0.5 font-sans text-[12px] text-slate-500 leading-snug">
                      {category.subtitle}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="border-b border-[#F2F4F7] mt-4" />
      </div>

      {/* Cards grid */}
      <section className="pt-10 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-6 rounded-lg bg-amber-50 border border-amber-100 px-4 py-3 text-sm text-amber-800 font-sans">
              Could not refresh posts from server. Showing available articles.
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[16/10] bg-slate-100 rounded-[10px] animate-pulse" />
                  <div className="h-3 w-2/3 bg-slate-100 rounded animate-pulse" />
                  <div className="h-5 w-full bg-slate-100 rounded animate-pulse" />
                  <div className="h-12 w-full bg-slate-100 rounded animate-pulse" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-sans text-[#667085]">No articles match your search.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {pagedPosts.map((post) => (
                  <Link
                    key={post.id ?? `${post.brand}/${post.slug}`}
                    to={`/blog/${post.slug}`}
                    className="group flex flex-col text-left"
                  >
                    <div className="relative overflow-hidden rounded-[10px] bg-[#F2F4F7] aspect-[16/10]">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <p className="mt-5 font-sans text-[12px] font-medium uppercase tracking-[0.06em] text-[#98A2B3]">
                      {post.date} | {post.readTime} | {brandDisplayTitle(post.brand)}
                    </p>

                    <h2
                      className="mt-3 font-serif text-[22px] sm:text-[24px] leading-[1.3] tracking-[-0.01em] text-[#101828] line-clamp-2"
                      style={{ fontWeight: 400 }}
                    >
                      {post.title}
                    </h2>

                    <p className="mt-3 font-sans font-normal text-[14px] sm:text-[15px] leading-[1.7] text-[#667085] line-clamp-2 flex-1">
                      {post.description}
                    </p>

                    <span className="mt-5 inline-flex items-center font-sans text-[14px] font-semibold text-[#FF641F]">
                      Read More
                      <span className="ml-1.5 transition-transform group-hover:translate-x-0.5">&gt;</span>
                    </span>
                  </Link>
                ))}
              </div>

              {paginationPages > 1 && (
                <nav
                  className="mt-16 sm:mt-20 flex items-center justify-center gap-7 sm:gap-9"
                  aria-label="Blog pagination"
                >
                  {Array.from({ length: paginationPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => {
                        setPage(n);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`min-w-[1rem] pb-1.5 font-sans text-[15px] font-medium border-b-[2.5px] transition-colors ${
                        n === currentPage
                          ? 'text-[#FF641F] border-[#FF641F]'
                          : 'text-[#98A2B3] border-transparent hover:text-[#667085]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
