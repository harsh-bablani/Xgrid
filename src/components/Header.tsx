import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
                className={`flex items-center space-x-1 text-[15px] font-medium transition-colors tracking-wide uppercase text-slate-800`}
              >
                <span className="text-slate-800">Product</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${(isProductsDropdownOpen) ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-64 z-50`}>
                  <div className={`rounded-lg shadow-lg border bg-white border-gray-200 py-2 overflow-hidden`}>
                    <Link
                      to="/jewelbiz/"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Jewellery Management Software
                    </Link>
                    <Link
                      to="/curabiz/"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Hospital Management Software
                    </Link>
                    <Link
                      to="/retailbiz/"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Retail Management Software
                    </Link>
                    <Link
                      to="/products"
                      className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Get Customised Erp System
                    </Link>
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
              className={`p-2 transition-colors text-slate-800`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t border-gray-100`}>
            <div className="space-y-4">
              {/* Mobile Products Dropdown */}
              <div className="px-4">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className={`flex items-center justify-between w-full text-[15px] font-medium tracking-wide uppercase text-slate-800`}
                >
                  <span>Product</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && (
                  <div className={`mt-2 ml-4 space-y-3 border-l-2 border-gray-100 pl-4 py-2 animate-in slide-in-from-top-1 duration-200`}>
                    <Link
                      to="/jewelbiz/"
                      className={`block text-[12px] font-medium tracking-wide uppercase text-slate-800 opacity-80`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Jewellery ERP
                    </Link>
                    <Link
                      to="/curabiz/"
                      className={`block text-[12px] font-medium tracking-wide uppercase text-slate-800 opacity-80`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hospital HMS
                    </Link>
                    <Link
                      to="/retailbiz/"
                      className={`block text-[12px] font-medium tracking-wide uppercase text-slate-800 opacity-80`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Retail ERP
                    </Link>
                    <Link
                      to="/products"
                      className={`block text-[12px] font-bold tracking-wide uppercase text-blue-500`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Custom Solutions
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/services"
                className={`block px-4 text-[15px] font-medium tracking-wide uppercase text-slate-800`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                to="/about-us/"
                className={`block px-4 text-[15px] font-medium tracking-wide uppercase text-slate-800`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/blogs/"
                className={`block px-4 text-[15px] font-medium tracking-wide uppercase text-slate-800`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>

              <Link
                to="/contact/#contact-form"
                className={`block px-4 text-[15px] font-medium tracking-wide uppercase text-slate-800`}
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

              <div className="px-4 pt-4">
                <Link
                  to="/contact/#contact-form"
                  className={`w-full h-[43px] inline-flex items-center justify-center text-[14px] font-semibold rounded-[10px] transition-colors tracking-wide uppercase !text-white bg-[#FF641F] hover:bg-[#E55A18]`}
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
