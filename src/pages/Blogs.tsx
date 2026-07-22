import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { POSTS, Brand } from './blog-posts';
import SearchBar from '../components/SearchBar';

const CATEGORIES: { label: string; value: Brand | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'JewelBiz', value: 'jewelbiz' },
  { label: 'CuraBiz', value: 'curabiz' },
  { label: 'RetailBiz', value: 'retailbiz' },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState<Brand | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

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
          post.categoryLabel.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white font-inter">
      <section className="bg-gradient-to-r from-[#003B91] to-[#0071C5] text-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] sm:text-[40px] font-semibold mb-4 tracking-tight uppercase">
            Blogs
          </h1>
          <p className="text-[14px] sm:text-[15px] font-medium text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore strategies, guides, and insights on business automation, inventory management, SaaS tools, and scaling operations with modern technology.
          </p>
        </div>
      </section>

      {/* Floating search bar - overlaps hero bottom */}
      <div className="relative z-10 -mt-8 mb-0">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-5 py-2 text-[13px] font-semibold tracking-wider transition-colors ${
                activeCategory === category.value
                  ? 'text-[#003B91] border-b-2 border-[#003B91]'
                  : 'text-gray-500 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blogs/${post.brand}/${post.slug}`}
                className="group flex flex-col bg-white"
              >
                <div className="overflow-hidden border border-gray-200">
                  <img src={post.heroImage} alt={post.title} className="w-full h-auto block" />
                </div>
                <div className="flex flex-col flex-1 pt-4">
                  <h2 className="text-base font-bold text-gray-900 uppercase tracking-tight leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                    {post.description}
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                      Read More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Footer spacing */}
      <div className="h-10" />
    </div>
  );
}
