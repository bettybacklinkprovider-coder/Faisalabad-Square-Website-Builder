import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleGalleryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('gallery');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#gallery');
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && location.hash !== '#gallery';
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B132B]/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="font-display text-2xl font-bold tracking-tight text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
        >
          {BUSINESS_INFO.name}
        </Link>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300"
        >
          <Link
            to="/"
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              isActive('/')
                ? 'text-white border-[#C59B27]'
                : 'border-transparent hover:text-white hover:border-white/40'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              isActive('/about')
                ? 'text-white border-[#C59B27]'
                : 'border-transparent hover:text-white hover:border-white/40'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              isActive('/services')
                ? 'text-white border-[#C59B27]'
                : 'border-transparent hover:text-white hover:border-white/40'
            }`}
          >
            Services
          </Link>
          <a
            href="/#gallery"
            onClick={handleGalleryClick}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              location.pathname === '/' && location.hash === '#gallery'
                ? 'text-white border-[#C59B27]'
                : 'border-transparent hover:text-white hover:border-white/40'
            }`}
          >
            Gallery
          </a>
          <Link
            to="/contact"
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              isActive('/contact')
                ? 'text-white border-[#C59B27]'
                : 'border-transparent hover:text-white hover:border-white/40'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27]"
          >
            Contact Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-stone-200 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#C59B27]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B] border-t border-white/10 px-6 py-5 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-200">
            <Link
              to="/"
              className={`py-2 px-3 rounded-md transition-colors ${
                isActive('/') ? 'bg-white/10 text-[#D4AF37]' : 'hover:bg-white/5'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`py-2 px-3 rounded-md transition-colors ${
                isActive('/about') ? 'bg-white/10 text-[#D4AF37]' : 'hover:bg-white/5'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`py-2 px-3 rounded-md transition-colors ${
                isActive('/services') ? 'bg-white/10 text-[#D4AF37]' : 'hover:bg-white/5'
              }`}
            >
              Services
            </Link>
            <a
              href="/#gallery"
              onClick={handleGalleryClick}
              className="py-2 px-3 rounded-md hover:bg-white/5 transition-colors"
            >
              Gallery
            </a>
            <Link
              to="/contact"
              className={`py-2 px-3 rounded-md transition-colors ${
                isActive('/contact') ? 'bg-white/10 text-[#D4AF37]' : 'hover:bg-white/5'
              }`}
            >
              Contact Us
            </Link>
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              to="/contact"
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-2.5 px-4 text-center text-xs font-medium text-white border border-white/20 hover:bg-white/10 rounded-md transition-colors font-mono-tabular whitespace-nowrap"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
