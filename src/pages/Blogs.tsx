import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Jewellery Retail: Why RFID is No Longer Optional",
    excerpt: "In an era of rapid digital transformation, the jewellery industry is undergoing a massive shift. RFID technology is at the forefront, revolutionizing inventory management and customer experience.",
    image: "/J.jpeg",
    category: "Jewellery",
    author: "Umang Garg",
    date: "May 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Streamlining Patient Care: How Integrated HMS Reduces Wait Times by 40%",
    excerpt: "Modern healthcare facilities are moving beyond simple digital records. Learn how a fully integrated Hospital Management System can transform the patient journey from appointment to discharge.",
    image: "/H.jpeg",
    category: "Healthcare",
    author: "Lokesh Verma",
    date: "May 12, 2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Scaling Your Retail Empire: The Role of AI-Native ERP in 2024",
    excerpt: "For multi-chain retail businesses, data is the new gold. We explore how AI-powered ERP systems are helping retailers predict demand, optimize stock, and personalize customer engagement.",
    image: "/R.jpeg",
    category: "Retail",
    author: "Kuntal Mathur",
    date: "May 10, 2024",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Karigar Management: Solving the Age-Old Problem of Metal Loss Tracking",
    excerpt: "Manufacturing jewellery involves complex workflows with artisans. Precise metal tracking is critical for profitability. Here's how technology is bringing transparency to the karigar-jeweller relationship.",
    image: "/barcode.png",
    category: "Manufacturing",
    author: "Urja Ramanandi",
    date: "May 08, 2024",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Digital Transformation in Tier-2 Cities: A New Frontier for SaaS",
    excerpt: "As metropolitan markets become saturated, local businesses in Tier-2 and Tier-3 cities are rapidly adopting digital tools. SlateBiz is leading this transition with localized ERP solutions.",
    image: "/ab.png",
    category: "Tech Trends",
    author: "Anil Chaudhary",
    date: "May 05, 2024",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "The Security of Cloud ERP: Protecting Your Most Valuable Business Asset",
    excerpt: "Moving your core business data to the cloud can be daunting. We break down the security protocols and encryption standards that keep your business information safe and accessible.",
    image: "/who.png",
    category: "Security",
    author: "Lokesh Verma",
    date: "May 02, 2024",
    readTime: "6 min read"
  }
];

const CATEGORIES = ["All", "Jewellery", "Healthcare", "Retail", "Manufacturing", "Tech Trends", "Security"];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section className="relative bg-[#0d3b75] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/herobg.png" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Insights & Innovation
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of technology and business growth. From ERP deep-dives to industry-specific trends.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Featured Post (only if 'All' is selected) */}
        {activeCategory === "All" && (
          <div className="mb-20">
            <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img 
                  src={BLOG_POSTS[0].image} 
                  alt="featured" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                    Featured Post
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="inline-flex items-center text-blue-600 font-semibold uppercase tracking-wider text-xs">
                    {BLOG_POSTS[0].category}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                      {BLOG_POSTS[0].author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{BLOG_POSTS[0].author}</p>
                      <p className="text-xs text-gray-500">{BLOG_POSTS[0].readTime}</p>
                    </div>
                  </div>
                  <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.slice(activeCategory === "All" ? 1 : 0).map(post => (
            <article key={post.id} className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow font-light line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-bold">
                      {post.author[0]}
                    </div>
                    <span className="text-xs font-medium text-gray-700">{post.author}</span>
                  </div>
                  <Link to="/contact" className="text-gray-900 font-bold text-xs flex items-center group-hover:text-blue-600">
                    LEARN MORE <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay Ahead of the Curve</h2>
            <p className="text-gray-400 text-lg mb-10 font-light">
              Join 5,000+ business owners receiving our weekly insights on automation, scaling, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/10 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap" type="button">
                Subscribe Now
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              Zero spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
