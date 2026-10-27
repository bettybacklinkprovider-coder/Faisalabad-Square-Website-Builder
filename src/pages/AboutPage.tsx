import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';
import { SmartImage } from '../components/SmartImage';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Faisalabad Square – Jhang Road, Faisalabad';
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      index: '01',
      title: 'Architectural Clarity & Comfort',
      description:
        'We maintain bright, navigable concourses and clean modern architecture so families, shoppers, and professionals enjoy every visit.',
    },
    {
      index: '02',
      title: 'Commercial Reliability',
      description:
        'Our spaces are structured to support retail showrooms and corporate offices with dependable day-to-day facility management.',
    },
    {
      index: '03',
      title: 'Transparent Communication',
      description:
        'We believe in straightforward, accurate information without exaggerated claims—providing direct phone and on-site assistance whenever needed.',
    },
    {
      index: '04',
      title: 'Strategic Accessibility',
      description:
        'Positioned opposite Ayub Research on Jhang Road in Gulfishan Colony, our location connects seamlessly with central Faisalabad and surrounding residential neighborhoods.',
    },
  ];

  return (
    <main className="bg-[#FAF9F6]">
      {/* Page Header Banner */}
      <section className="relative bg-[#0B132B] text-white py-20 lg:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <SmartImage
            src={IMAGES.facadeEvening}
            alt="Evening architectural view of Faisalabad Square commercial complex"
            fallbackLabel="Faisalabad Square"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#D4AF37]">
              <span>About Faisalabad Square</span>
              <span aria-hidden="true">·</span>
              <span>Jhang Road, Gulfishan Colony</span>
              <span aria-hidden="true">·</span>
              <span>Faisalabad, 38000</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight text-balance">
              A Modern Commercial &amp; Shopping Destination in the Heart of Jhang Road
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Learn about the vision, architectural character, and community commitment behind Faisalabad Square, located opposite Ayub Research in Gulfishan Colony, Faisalabad.
            </p>
          </div>
        </div>
      </section>

      {/* Business Introduction & Background */}
      <section className="py-20 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-medium text-[#9A7418]">
                <span>01. Our Background</span>
                <span aria-hidden="true">·</span>
                <span>Commercial Landmark</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B132B] leading-tight text-balance">
                Serving Shoppers and Businesses Along Faisalabad’s Jhang Road Corridor
              </h2>

              <p className="text-slate-600 leading-relaxed text-base">
                Faisalabad Square was established to provide Gulfishan Colony and the broader Jhang Road corridor with a modern, purpose-built commercial and retail complex. Situated directly opposite the historic Ayub Agricultural Research Institute, the square occupies a well-known and easily reachable address in Faisalabad.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                Our building brings together multi-level retail galleries, commercial office suites, and welcoming public concourses. Whether you are visiting for daily shopping, dining with family, or establishing a commercial presence in Faisalabad, Faisalabad Square offers an organized, well-maintained environment.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-md bg-white border border-slate-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0B132B]">
                    <CheckCircle2 className="w-4 h-4 text-[#9A7418]" />
                    <span>Prime Road Frontage</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Direct visibility and convenient entry on main Jhang Road, Faisalabad.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white border border-slate-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0B132B]">
                    <CheckCircle2 className="w-4 h-4 text-[#9A7418]" />
                    <span>Multi-Level Concourses</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Spacious walkways, escalators, and sunlit central atrium circulation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-white flex flex-col">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <SmartImage
                    src={IMAGES.grandAtrium}
                    alt="Central skylit atrium inside Faisalabad Square"
                    fallbackLabel="Central Atrium"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold text-[#0B132B]">
                    Natural Skylit Atrium
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Open vertical sightlines connecting retail levels and pedestrian galleries.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-slate-200 bg-white flex flex-col">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <SmartImage
                    src={IMAGES.commercialLobby}
                    alt="Commercial concourse and lobby inside Faisalabad Square"
                    fallbackLabel="Commercial Concourse"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold text-[#0B132B]">
                    Executive Concourse
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Dedicated reception and circulation zones for commercial tenants and visitors.
                  </p>
                </div>
              </div>

              <div className="sm:col-span-2 rounded-lg overflow-hidden border border-slate-200 bg-white">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <SmartImage
                    src={IMAGES.concourseEntrance}
                    alt="Covered entrance canopy and arrival concourse at Faisalabad Square"
                    fallbackLabel="Arrival Concourse"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0B132B]">
                      Welcoming Arrival &amp; Drop-Off Concourse
                    </h3>
                    <p className="text-xs text-slate-600">
                      Convenient vehicular approach and illuminated pedestrian walkways.
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">
                    Gulfishan Colony · Faisalabad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Values */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#9A7418]">
                <span>02. Mission &amp; Values</span>
                <span aria-hidden="true">·</span>
                <span>Our Principles</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B132B] text-balance">
                Our Mission &amp; Guiding Standards
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our mission at Faisalabad Square is to provide a clean, well-managed, and accessible commercial hub where retail businesses can thrive and visitors can shop and gather in comfort.
              </p>
              <div className="p-6 rounded-lg bg-[#0B132B] text-white space-y-3 mt-6">
                <p className="text-xs font-medium text-[#D4AF37]">
                  Verified Location Details
                </p>
                <p className="font-display text-xl font-semibold">
                  {BUSINESS_INFO.name}
                </p>
                <div className="space-y-2 text-xs text-stone-300 pt-1">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <span>{BUSINESS_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-mono-tabular">{BUSINESS_INFO.phoneRaw}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((val) => (
                <div
                  key={val.index}
                  className="rounded-lg bg-[#FAF9F6] border border-slate-200 overflow-hidden flex flex-col justify-between"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <SmartImage
                      src={val.image}
                      alt={val.imageAlt}
                      fallbackLabel={val.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2.5 flex-1">
                    <span className="text-xs font-mono-tabular font-semibold text-[#9A7418]">
                      {val.index}. Core Value
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#0B132B]">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#0B132B] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-display text-3xl font-bold text-white">
              Plan Your Visit or Inquire About Commercial Space
            </h2>
            <p className="text-sm text-stone-300">
              Speak directly with our management office at {BUSINESS_INFO.phoneRaw} or view our customizable facility directory.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white border border-white/25 hover:bg-white/10 rounded-md transition-colors whitespace-nowrap"
            >
              <span>Explore Facilities</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
