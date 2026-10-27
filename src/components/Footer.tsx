import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGalleryNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('gallery');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#gallery');
    }
  };

  return (
    <footer className="bg-[#0B132B] text-stone-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Overview */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="font-display text-3xl font-bold tracking-tight text-white inline-block"
            >
              {BUSINESS_INFO.name}
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              A premier commercial and shopping destination in Faisalabad, thoughtfully designed for modern retail showrooms, corporate spaces, and comfortable family visits along Jhang Road.
            </p>
            <div className="pt-2 text-xs text-stone-400 flex flex-wrap items-center gap-2">
              <span>{BUSINESS_INFO.city}, {BUSINESS_INFO.country}</span>
              <span aria-hidden="true">·</span>
              <span>Postal Code <span className="font-mono-tabular">{BUSINESS_INFO.postalCode}</span></span>
              <span aria-hidden="true">·</span>
              <span>Gulfishan Colony</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#C59B27]">
              Website Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-stone-300 hover:text-white transition-colors">
                  Services & Facilities
                </Link>
              </li>
              <li>
                <a
                  href="/#gallery"
                  onClick={handleGalleryNav}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Architectural Gallery
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-white transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Contact & Address */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#C59B27]">
              Location & Direct Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-1" />
                <span className="text-stone-300 leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-white hover:text-[#C59B27] transition-colors font-mono-tabular font-medium"
                >
                  {BUSINESS_INFO.phoneRaw}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#C59B27] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp <span className="font-mono-tabular">+{BUSINESS_INFO.whatsappNumber}</span></span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>
            {BUSINESS_INFO.shortAddress}
          </p>
        </div>
      </div>
    </footer>
  );
};
