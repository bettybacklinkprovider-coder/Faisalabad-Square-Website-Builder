import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MapPin,
  ArrowRight,
  Store,
  Building2,
  Utensils,
  Car,
  Layers,
  ShieldCheck,
  Expand,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  IMAGES,
  GALLERY_IMAGES,
  WHY_CHOOSE_US,
  loadFacilities,
  FacilityItem,
} from '../data/businessData';
import { SmartImage } from '../components/SmartImage';
import { LightboxModal } from '../components/LightboxModal';

const FacilityIcon: React.FC<{ name: FacilityItem['iconName'] }> = ({ name }) => {
  const props = { className: 'w-5 h-5 text-[#C59B27]' };
  switch (name) {
    case 'store':
      return <Store {...props} />;
    case 'building':
      return <Building2 {...props} />;
    case 'utensils':
      return <Utensils {...props} />;
    case 'car':
      return <Car {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'shield':
      return <ShieldCheck {...props} />;
  }
};

export const HomePage: React.FC = () => {
  const [facilities, setFacilities] = useState<FacilityItem[]>(() => loadFacilities());
  const [galleryFilter, setGalleryFilter] = useState<string>('All Spaces');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    document.title = 'Faisalabad Square | Premier Shopping & Commercial Center in Faisalabad';
    setFacilities(loadFacilities());
  }, []);

  useEffect(() => {
    if (location.hash === '#gallery') {
      const timer = setTimeout(() => {
        const el = document.getElementById('gallery');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const filteredGallery =
    galleryFilter === 'All Spaces'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === galleryFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
  };

  return (
    <main>
      {/* SECTION 1: HERO SECTION */}
      <section className="relative bg-[#0B132B] text-white overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage
            src={IMAGES.heroExterior}
            alt="Faisalabad Square modern shopping mall and commercial complex exterior at dusk"
            fallbackLabel="Faisalabad Square Exterior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/95 via-[#0B132B]/80 to-[#0B132B]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="max-w-2xl space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#D4AF37]">
              <span>Faisalabad, Pakistan</span>
              <span aria-hidden="true">·</span>
              <span>Opposite Ayub Research</span>
              <span aria-hidden="true">·</span>
              <span>Jhang Road Corridor</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              A Landmark Destination for Shopping &amp; Commerce in Faisalabad
            </h1>

            <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-xl">
              Located on Jhang Road opposite Ayub Research in Gulfishan Colony, Faisalabad Square brings together contemporary retail concourses, commercial business suites, and welcoming visitor amenities under one architectural roof.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-md transition-colors whitespace-nowrap shrink-0 font-mono-tabular"
              >
                <Phone className="w-4 h-4 text-[#C59B27]" />
                <span>Call Now: {BUSINESS_INFO.phoneRaw}</span>
              </a>
            </div>
          </div>

          {/* Full-width verified key facts strip below the hero content */}
          <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-xs text-stone-400">Location Corridor</p>
              <p className="text-sm font-semibold text-white mt-1">
                Jhang Road, Gulfishan Colony
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-400">Primary Landmark</p>
              <p className="text-sm font-semibold text-white mt-1">
                Opposite Ayub Research
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-400">City &amp; Postal Code</p>
              <p className="text-sm font-semibold text-white mt-1">
                Faisalabad, <span className="font-mono-tabular">38000</span>, Pakistan
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-400">Direct Inquiry Line</p>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-sm font-semibold text-[#D4AF37] hover:underline mt-1 inline-block font-mono-tabular"
              >
                {BUSINESS_INFO.phoneRaw}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT FAISALABAD SQUARE */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-medium text-[#9A7418]">
                  <span>01. About Faisalabad Square</span>
                  <span aria-hidden="true">·</span>
                  <span>Architectural Overview</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B132B] leading-tight text-balance">
                  Designed for Modern Retail Excellence and Everyday Convenience
                </h2>

                <p className="text-slate-600 leading-relaxed text-base">
                  Faisalabad Square stands as a prominent commercial and shopping center at Jhang Road, Opposite Ayub Research, Gulfishan Colony, Faisalabad. Built with a focus on accessibility, spacious interior circulation, and clean contemporary architecture, the square serves both local shoppers and commercial enterprises.
                </p>

                <p className="text-slate-600 leading-relaxed text-base">
                  From sunlit multi-level concourses to well-organized retail frontages and professional business spaces, every aspect of Faisalabad Square is structured to provide a reliable, welcoming environment for visitors and business owners alike.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block">Complete Address</span>
                    <span className="font-medium text-slate-900 mt-0.5 block">
                      Jhang Road, Opposite Ayub Research, Gulfishan Colony
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Direct Telephone</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="font-medium text-[#0B132B] hover:text-[#9A7418] transition-colors mt-0.5 block font-mono-tabular"
                    >
                      {BUSINESS_INFO.phoneRaw}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B132B] hover:text-[#9A7418] transition-colors whitespace-nowrap"
                  >
                    <span>Read Full Story &amp; Mission</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[360px] rounded-lg overflow-hidden border border-slate-200">
                <SmartImage
                  src={IMAGES.grandAtrium}
                  alt="Sunlit interior atrium of Faisalabad Square with glass skylight and escalators"
                  fallbackLabel="Central Atrium Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/50 to-transparent p-6 text-white">
                  <p className="font-display text-lg font-semibold">
                    Central Skylit Concourse &amp; Retail Levels
                  </p>
                  <p className="text-xs text-stone-300 mt-1">
                    Spacious walkways and multi-level circulation inside Faisalabad Square
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR FACILITIES */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#9A7418]">
                <span>02. Our Facilities</span>
                <span aria-hidden="true">·</span>
                <span>Commercial &amp; Visitor Spaces</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B132B] text-balance">
                Spaces &amp; Amenities at Faisalabad Square
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Explore the core retail, commercial, and visitor facilities available at our Jhang Road complex. Facility descriptions can also be customized on the Services page as new units open.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0B132B] hover:bg-[#16234d] rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <span>View &amp; Customize Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <article
                key={facility.id}
                className="group bg-[#FAF9F6] border border-slate-200/90 rounded-lg overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <SmartImage
                      src={facility.image}
                      alt={facility.imageAlt}
                      fallbackLabel={facility.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-mono-tabular font-medium text-[#9A7418]">
                        {facility.index}. {facility.category}
                      </span>
                      <FacilityIcon name={facility.iconName} />
                    </div>

                    <h3 className="font-display text-2xl font-bold text-[#0B132B] leading-snug">
                      {facility.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {facility.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate max-w-[210px]">{facility.customizableNote}</span>
                  <Link
                    to="/contact"
                    className="font-semibold text-[#0B132B] hover:text-[#9A7418] transition-colors whitespace-nowrap shrink-0"
                  >
                    Inquire →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: GALLERY */}
      <section id="gallery" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-200/80 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#9A7418]">
                <span>03. Visual Showcase</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-tabular">10 Architectural Views</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B132B] text-balance">
                Faisalabad Square Architectural Gallery
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Browse ten distinct perspectives of our exterior facade, sunlit central atrium, retail corridors, dining lounge, and commercial concourses. Click any photograph to inspect in full screen.
              </p>
            </div>

            {/* Interactive Filter Controls */}
            <div
              role="tablist"
              aria-label="Gallery category filter"
              className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start lg:self-auto"
            >
              {['All Spaces', 'Exterior & Arrival', 'Retail & Atrium', 'Dining & Commercial'].map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={galleryFilter === category}
                    onClick={() => setGalleryFilter(category)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      galleryFilter === category
                        ? 'bg-[#0B132B] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                className="group relative bg-[#0B132B] rounded-lg overflow-hidden border border-slate-200 flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => handleOpenLightbox(idx)}
                  className="relative aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-[#C59B27]"
                >
                  <SmartImage
                    src={item.src}
                    alt={item.alt}
                    fallbackLabel={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-md bg-[#0B132B]/75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Expand className="w-4 h-4 text-[#C59B27]" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37]">
                      <span className="font-mono-tabular">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.category}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mt-0.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="py-20 lg:py-28 bg-[#0B132B] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl space-y-3 mb-14">
            <div className="flex items-center gap-2 text-xs font-medium text-[#D4AF37]">
              <span>04. Why Choose Faisalabad Square</span>
              <span aria-hidden="true">·</span>
              <span>Key Advantages</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
              Built Around Accessibility, Professionalism, and Location Value
            </h2>
            <p className="text-stone-300 text-base leading-relaxed">
              We focus on practical, verified advantages that matter to shoppers, families, and commercial tenants operating in Faisalabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.index}
                className="group rounded-lg bg-[#111C3D] border border-white/10 overflow-hidden flex flex-col justify-between"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#0B132B] relative">
                  <SmartImage
                    src={item.image}
                    alt={item.imageAlt}
                    fallbackLabel={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111C3D] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-7 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                      <span className="font-mono-tabular font-semibold">{item.index}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.subtitle}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT AND LOCATION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF9F6] border border-slate-200 rounded-lg p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-medium text-[#9A7418]">
                  <span>05. Contact &amp; Location</span>
                  <span aria-hidden="true">·</span>
                  <span>Direct Reach</span>
                </div>

                <h2 className="font-display text-3xl font-bold text-[#0B132B] text-balance">
                  Visit or Contact Faisalabad Square
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Reach out directly via phone or WhatsApp for visitor directions, commercial space inquiries, or general assistance.
                </p>

                <div className="pt-4 space-y-5 border-t border-slate-200">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#9A7418] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-slate-500 block">
                        Verified Business Address
                      </span>
                      <p className="text-sm font-semibold text-slate-900 mt-0.5 leading-relaxed">
                        {BUSINESS_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#9A7418] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-slate-500 block">
                        Direct Phone Number
                      </span>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="text-base font-bold text-[#0B132B] hover:text-[#9A7418] transition-colors mt-0.5 inline-block font-mono-tabular"
                      >
                        {BUSINESS_INFO.phoneRaw}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-[#0B132B] hover:bg-[#16234d] rounded-md transition-colors whitespace-nowrap font-mono-tabular"
                  >
                    <Phone className="w-4 h-4 text-[#C59B27]" />
                    <span>Call {BUSINESS_INFO.phoneRaw}</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors whitespace-nowrap"
                >
                  <span>Open Full Contact &amp; Inquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <div className="relative flex-1 min-h-[380px] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Faisalabad Square Location on Google Maps"
                  src={BUSINESS_INFO.mapEmbedUrl}
                  className="w-full h-full min-h-[380px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span>Jhang Road, Opposite Ayub Research, Gulfishan Colony, Faisalabad, 38000</span>
                <a
                  href={BUSINESS_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#0B132B] hover:text-[#9A7418] transition-colors whitespace-nowrap"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LightboxModal
        images={filteredGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </main>
  );
};
