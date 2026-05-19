import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/slatebiz/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-primary-400 transition-colors">
              User Policy
            </Link>
            <Link to="/careers" className="hover:text-primary-400 transition-colors">
              Careers
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2026 Slatebiz. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
