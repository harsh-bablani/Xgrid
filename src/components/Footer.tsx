import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#E4EAFB] text-black">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-700">
              Company
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li>
                <Link to="/about-us/" className="hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy/" className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-black transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-700">
              Our Products
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              <li>
                <Link to="/jewelbiz/" className="hover:text-black transition-colors">
                  JewelBiz
                </Link>
              </li>
              <li>
                <Link to="/curabiz/" className="hover:text-black transition-colors">
                  CuraBiz
                </Link>
              </li>
              <li>
                <Link to="/retailbiz/" className="hover:text-black transition-colors">
                  RetailBiz
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-black transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-700">
              Contact
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-800">
              <p>
                <span className="block text-xs uppercase tracking-[0.2em] text-slate-700">Phone</span>
                <a href="tel:+919257373668" className="hover:text-black transition-colors">
                  +91 925 737 3668
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.2em] text-slate-700">Email</span>
                <a href="mailto:info@slatebiz.com" className="hover:text-black transition-colors">
                  info@slatebiz.com
                </a>
              </p>
              <p className="text-sm leading-relaxed">
                DH-079, 1st Floor Ansal Sushant City -1,
                <br /> Kalwar Road, Jaipur, Rajasthan 303706
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/slatebiz/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full bg-white/80 text-slate-700 hover:bg-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full bg-white/80 text-slate-700 hover:bg-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full bg-white/80 text-slate-700 hover:bg-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#C9D4F0] pt-5 text-xs text-slate-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SlateBiz. All rights reserved.</p>
          <p>Modern business software for growing teams.</p>
        </div>
      </div>
    </footer>
  );
}
