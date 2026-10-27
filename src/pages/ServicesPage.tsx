import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Store,
  Building2,
  Utensils,
  Car,
  Layers,
  ShieldCheck,
  Phone,
  MessageSquare,
  ArrowRight,
  SlidersHorizontal,
  RotateCcw,
  Check,
  X,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  IMAGES,
  FacilityItem,
  loadFacilities,
  saveFacilities,
  resetFacilities,
} from '../data/businessData';
import { SmartImage } from '../components/SmartImage';

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

export const ServicesPage: React.FC = () => {
  const [facilities, setFacilities] = useState<FacilityItem[]>(() => loadFacilities());
  const [selectedCategory, setSelectedCategory] = useState<string>('All Facilities');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState<FacilityItem | null>(null);
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Services & Facilities | Faisalabad Square – Jhang Road, Faisalabad';
    window.scrollTo(0, 0);
  }, []);

  const filteredFacilities =
    selectedCategory === 'All Facilities'
      ? facilities
      : facilities.filter((f) => f.category === selectedCategory);

  const startEdit = (item: FacilityItem) => {
    setEditingId(item.id);
    setEditDraft({ ...item });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditDraft(null);
  };

  const commitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editDraft) return;
    const updated = facilities.map((f) => (f.id === editDraft.id ? editDraft : f));
    setFacilities(updated);
    saveFacilities(updated);
    setEditingId(null);
    setEditDraft(null);
    setSavedNotice('Facility details updated and saved.');
    setTimeout(() => setSavedNotice(null), 3500);
  };

  const handleResetAll = () => {
    const defaults = resetFacilities();
    setFacilities(defaults);
    setEditingId(null);
    setEditDraft(null);
    setSavedNotice('Facilities restored to default descriptions.');
    setTimeout(() => setSavedNotice(null), 3500);
  };

  return (
    <main className="bg-[#FAF9F6]">
      {/* Page Header */}
      <section className="relative bg-[#0B132B] text-white py-20 lg:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <SmartImage
            src={IMAGES.retailCorridor}
            alt="Retail corridor and commercial spaces at Faisalabad Square"
            fallbackLabel="Services & Facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#D4AF37]">
              <span>Services &amp; Facilities</span>
              <span aria-hidden="true">·</span>
              <span>Faisalabad Square</span>
              <span aria-hidden="true">·</span>
              <span>Customizable Directory</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight text-balance">
              Commercial Spaces, Retail Concourses &amp; Visitor Facilities
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Discover the facilities and commercial offerings at Faisalabad Square on Jhang Road. Every facility card below can also be customized directly as tenant offerings and building services evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Customization Toolbar */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-slate-200">
            <div
              role="tablist"
              aria-label="Filter facilities by category"
              className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start"
            >
              {[
                'All Facilities',
                'Retail & Commercial',
                'Visitor Amenities',
                'Building Operations',
              ].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#0B132B] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {savedNotice && (
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md">
                  {savedNotice}
                </span>
              )}
              <button
                type="button"
                onClick={handleResetAll}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Default Text</span>
              </button>
            </div>
          </div>

          {/* Facilities List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredFacilities.map((facility) => {
              const isEditing = editingId === facility.id && editDraft !== null;

              return (
                <article
                  key={facility.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 relative">
                      <SmartImage
                        src={facility.image}
                        alt={facility.imageAlt}
                        fallbackLabel={facility.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <button
                          type="button"
                          onClick={() => startEdit(facility)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#0B132B]/85 hover:bg-[#0B132B] border border-white/20 rounded-md transition-colors whitespace-nowrap"
                        >
                          <SlidersHorizontal className="w-3.5 h-3.5 text-[#C59B27]" />
                          <span>Customize Text</span>
                        </button>
                      </div>
                    </div>

                    {isEditing ? (
                      <form onSubmit={commitEdit} className="p-6 space-y-4 bg-stone-50">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                          <span className="text-xs font-semibold text-[#0B132B]">
                            Editing Facility {facility.index}
                          </span>
                          <button
                            type="button"
                            onClick={cancelEdit}
                            className="text-xs text-slate-500 hover:text-slate-800 inline-flex items-center gap-1"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>Cancel</span>
                          </button>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Facility Title
                          </label>
                          <input
                            type="text"
                            required
                            value={editDraft.title}
                            onChange={(e) =>
                              setEditDraft({ ...editDraft, title: e.target.value })
                            }
                            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-[#0B132B]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Summary Description
                          </label>
                          <textarea
                            rows={2}
                            required
                            value={editDraft.shortDescription}
                            onChange={(e) =>
                              setEditDraft({ ...editDraft, shortDescription: e.target.value })
                            }
                            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-[#0B132B]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Extended Details
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={editDraft.detailedDescription}
                            onChange={(e) =>
                              setEditDraft({ ...editDraft, detailedDescription: e.target.value })
                            }
                            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-[#0B132B]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Footer Availability Note
                          </label>
                          <input
                            type="text"
                            required
                            value={editDraft.customizableNote}
                            onChange={(e) =>
                              setEditDraft({ ...editDraft, customizableNote: e.target.value })
                            }
                            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-[#0B132B]"
                          />
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-2">
                          <button
                            type="button"
                            onClick={cancelEdit}
                            className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Save Changes</span>
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="p-6 sm:p-8 space-y-4">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <div className="flex items-center gap-2">
                            <span className="font-mono-tabular font-semibold text-[#9A7418]">
                              {facility.index}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{facility.category}</span>
                          </div>
                          <FacilityIcon name={facility.iconName} />
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B132B]">
                          {facility.title}
                        </h2>

                        <p className="text-sm text-slate-700 leading-relaxed font-medium">
                          {facility.shortDescription}
                        </p>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {facility.detailedDescription}
                        </p>
                      </div>
                    )}
                  </div>

                  {!isEditing && (
                    <div className="px-6 sm:px-8 py-4 bg-[#FAF9F6] border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-xs text-slate-500">
                        {facility.customizableNote}
                      </span>
                      <div className="flex items-center gap-4 shrink-0">
                        <a
                          href={`tel:${BUSINESS_INFO.phoneRaw}`}
                          className="text-xs font-semibold text-slate-700 hover:text-[#0B132B] transition-colors font-mono-tabular whitespace-nowrap"
                        >
                          Call {BUSINESS_INFO.phoneRaw}
                        </a>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B132B] hover:text-[#9A7418] transition-colors whitespace-nowrap"
                        >
                          <span>Inquire Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Leasing & Visitor Inquiry CTA */}
      <section className="py-16 bg-[#0B132B] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                <span>Direct Assistance</span>
                <span aria-hidden="true">·</span>
                <span>Jhang Road, Opposite Ayub Research</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-white">
                Need Specific Information About Retail Units or Facilities?
              </h2>
              <p className="text-sm text-stone-300 max-w-2xl">
                Contact Faisalabad Square directly by phone or WhatsApp for current space availability, visiting hours, or management inquiries.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-colors whitespace-nowrap font-mono-tabular"
              >
                <Phone className="w-4 h-4 text-[#C59B27]" />
                <span>Call {BUSINESS_INFO.phoneRaw}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp +{BUSINESS_INFO.whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
