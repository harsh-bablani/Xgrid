import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const productLinks = [
  { to: '/jewelbiz/', title: 'JewelBiz', subtitle: 'Jewellery ERP' },
  { to: '/curabiz/', title: 'CuraBiz', subtitle: 'Hospital HMS' },
  { to: '/retailbiz/', title: 'Specialized Retail', subtitle: 'RetailBiz ERP' },
  { to: '/products', title: 'Custom ERP', subtitle: 'Built for your workflows' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const isBlueHeader = false;

  const headerBgClass = isBlueHeader
    ? "bg-[#166C96] border-none shadow-none"
    : "bg-white";

  return (
    <header className={`${headerBgClass} sticky top-0 z-50 transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px] md:h-[96px]">

          {/* Logo - Clickable and redirects to home */}
          <Link to="/" className="flex items-center">
            <img
              src={isBlueHeader ? "/Logo-White.png" : "/logo.jpg"}
              alt="Slatebiz Logo"
              className={`${isBlueHeader ? 'h-[32px] md:h-[50px]' : 'h-[32px] md:h-[50px]'} w-auto ${isBlueHeader ? "" : "mix-blend-multiply"}`}
              style={{ display: "block" }}
            />
          </Link>

          {/* Right-aligned Navigation Items (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="flex items-center gap-1 text-[15px] font-medium transition-colors tracking-wide uppercase text-slate-800"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 lg:left-1/2 lg:-translate-x-1/2 pt-3 w-[min(280px,calc(100vw-2rem))] z-50">
                  <div className="rounded-xl bg-white py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]">
                    {productLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-5 py-3 min-h-[52px] hover:bg-slate-50 transition-colors"
                        onClick={() => setIsProductsDropdownOpen(false)}
                      >
                        <span className="block text-[15px] font-semibold text-slate-900 leading-tight">
                          {item.title}
                        </span>
                        <span className="block mt-0.5 text-[13px] text-slate-500 leading-snug">
                          {item.subtitle}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`text-[15px] font-medium transition-colors tracking-wide uppercase text-slate-800`}
            >
              Services
            </Link>

            <Link
              to="/about-us/"
              className={`text-[15px] font-medium transition-colors tracking-wide uppercase text-slate-800`}
            >
              About Us
            </Link>

            <Link
              to="/blogs"
              className={`text-[15px] font-medium transition-colors tracking-wide uppercase text-slate-800`}
            >
              Blogs
            </Link>

            <Link
              to="/contact/#contact-form"
              className={`text-[15px] font-medium transition-colors tracking-wide uppercase text-slate-800`}
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById('contact-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Contact Us
            </Link>

            <Link
              to="/contact/#contact-form"
              className={`inline-flex items-center justify-center w-[163px] h-[43px] text-[14px] font-semibold rounded-[10px] transition-colors tracking-wide uppercase !text-white bg-[#FF641F] hover:bg-[#E55A18]`}
            >
              Book A Demo
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg transition-colors text-slate-800 hover:bg-slate-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 max-h-[calc(100svh-80px)] overflow-y-auto">
            <div className="space-y-1 pb-4">
              {/* Mobile Products Dropdown */}
              <div className="px-2">
                <button
                  type="button"
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex items-center justify-between w-full min-h-[48px] px-3 text-[15px] font-medium tracking-wide uppercase text-slate-800 rounded-lg hover:bg-slate-50"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && (
                  <div className="mt-1 ml-3 space-y-0.5 border-l-2 border-gray-100 pl-3 py-1">
                    {productLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block py-3 px-2 rounded-lg hover:bg-slate-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="block text-[14px] font-semibold text-slate-900">
                          {item.title}
                        </span>
                        <span className="block mt-0.5 text-[12px] text-slate-500">
                          {item.subtitle}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/services"
                className="flex items-center min-h-[48px] px-5 text-[15px] font-medium tracking-wide uppercase text-slate-800 rounded-lg hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                to="/about-us/"
                className="flex items-center min-h-[48px] px-5 text-[15px] font-medium tracking-wide uppercase text-slate-800 rounded-lg hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/blogs/"
                className="flex items-center min-h-[48px] px-5 text-[15px] font-medium tracking-wide uppercase text-slate-800 rounded-lg hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>

              <Link
                to="/contact/#contact-form"
                className="flex items-center min-h-[48px] px-5 text-[15px] font-medium tracking-wide uppercase text-slate-800 rounded-lg hover:bg-slate-50"
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById('contact-form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
              >
                Contact
              </Link>

              <div className="px-4 pt-3">
                <Link
                  to="/contact/#contact-form"
                  className="w-full min-h-[48px] inline-flex items-center justify-center text-[14px] font-semibold rounded-[10px] transition-colors tracking-wide uppercase !text-white bg-[#FF641F] hover:bg-[#E55A18]"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('contact-form');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                >
                  Book A Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
