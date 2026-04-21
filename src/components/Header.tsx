import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  const isContact = location.pathname === '/contact/';
  const isAbout = location.pathname === '/about-us/';
  const isBlueHeader = isAbout || isContact;

  const headerBgClass = isBlueHeader
    ? "bg-[#166C96] border-none shadow-none"
    : "bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800";

  const navTextClass = isBlueHeader
    ? "text-white hover:text-white/80"
    : "text-gray-800 dark:text-gray-200 hover:text-indigo-600";

  const btnClass = isBlueHeader
    ? "bg-white text-[#166C96] hover:bg-gray-50 shadow-sm"
    : "bg-[#5c6ee1] text-white hover:bg-[#4a58b8] shadow-sm";

  return (
    <header className={`${headerBgClass} sticky top-0 z-50 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px] md:h-[100px]">

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
            <Link
              to="/"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className={`flex items-center space-x-1 text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
              >
                <span className={navTextClass}>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${(isProductsDropdownOpen) ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-64 z-50`}>
                  <div className={`rounded-lg shadow-lg border bg-white border-gray-200 py-2 overflow-hidden`}>
                    <Link
                      to="/enterprise-resource-planning/jewelbiz/"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Jewellery Management Software
                    </Link>
                    <Link
                      to="/enterprise-resource-planning/curabiz/"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Hospital Management Software
                    </Link>
                    <Link
                      to="/enterprise-resource-planning/retailbiz/"
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
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              Services
            </Link>

            <Link
              to="/about-us/"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              About Us
            </Link>

            <Link
              to="/blogs"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
            >
              Blogs
            </Link>

            <Link
              to="/contact/#contact-form"
              className={`text-[13px] font-medium transition-colors tracking-widest uppercase ${navTextClass}`}
              onClick={() => {
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

            <Link
              to="/contact/#contact-form"
              className={`flex items-center justify-center px-5 py-2 text-[13px] font-semibold rounded-md transition-colors tracking-widest uppercase ${btnClass}`}
            >
              Book A Demo
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className={`p-2 transition-colors ${navTextClass}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isBlueHeader ? 'border-white/20' : 'border-gray-100 dark:border-gray-800'}`}>
            <div className="space-y-4">
              <Link
                to="/"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Products Dropdown */}
              <div className="px-4">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className={`flex items-center justify-between w-full text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && (
                  <div className={`mt-2 ml-4 space-y-3 border-l-2 ${isBlueHeader ? 'border-white/30' : 'border-gray-100'} pl-4 py-2 animate-in slide-in-from-top-1 duration-200`}>
                    <Link
                      to="/enterprise-resource-planning/jewelbiz/"
                      className={`block text-[12px] font-medium tracking-widest uppercase ${navTextClass} opacity-80`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Jewellery ERP
                    </Link>
                    <Link
                      to="/enterprise-resource-planning/curabiz/"
                      className={`block text-[12px] font-medium tracking-widest uppercase ${navTextClass} opacity-80`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hospital HMS
                    </Link>
                    <Link
                      to="/enterprise-resource-planning/retailbiz/"
                      className={`block text-[12px] font-medium tracking-widest uppercase ${navTextClass} opacity-80`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Retail ERP
                    </Link>
                    <Link
                      to="/products"
                      className={`block text-[12px] font-bold tracking-widest uppercase text-blue-500`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Custom Solutions
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/services"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                to="/about-us/"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/blogs/"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>

              <Link
                to="/contact/#contact-form"
                className={`block px-4 text-[13px] font-medium tracking-widest uppercase ${navTextClass}`}
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
                  className={`block w-full text-center px-6 py-3 text-[13px] font-semibold rounded-md transition-colors tracking-widest uppercase ${btnClass}`}
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
