import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { POSTS, Brand } from './blog-posts';

const CATEGORIES: { label: string; value: Brand | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'JewelBiz', value: 'jewelbiz' },
  { label: 'CuraBiz', value: 'curabiz' },
  { label: 'RetailBiz', value: 'retailbiz' },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState<Brand | 'all'>('all');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') {
      return POSTS;
    }
    return POSTS.filter((post) => post.brand === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white font-inter">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <img src="/herobg.png" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">Slatebiz Blog</h1>
          <p className="mt-4 text-lg text-gray-600">Insights on software, business automation, and industry compliance.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-md border border-gray-100 flex items-center gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`flex-1 px-4 py-2.5 text-sm font-bold rounded-lg transition-colors ${
                activeCategory === category.value
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blogs/${post.brand}/${post.slug}`}
                className="group grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-gray-50 border-2 border-gray-200">
                  <img src={post.heroImage} alt={post.title} className="w-full h-auto block" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-700 uppercase tracking-wider">{post.categoryLabel}</p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors">{post.title}</h2>
                  <p className="mt-3 text-gray-600 leading-relaxed">{post.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 font-bold text-blue-600">
                    Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
