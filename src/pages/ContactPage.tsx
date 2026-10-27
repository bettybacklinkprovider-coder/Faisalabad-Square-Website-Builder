import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Navigation,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';
import { SmartImage } from '../components/SmartImage';

interface InquirySubmission {
  name: string;
  phone: string;
  topic: string;
  message: string;
  submittedAt: string;
}

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('General Visitor Inquiry');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<InquirySubmission | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Faisalabad Square – 03041111250';
    window.scrollTo(0, 0);
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(BUSINESS_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanMsg = message.trim();

    if (cleanName.length < 2) {
      setError('Please enter your full name.');
      return;
    }

    const phoneRegex = /^[0-9+\-\s()]{7,18}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setError('Please enter a valid phone number (e.g., 0300-1234567).');
      return;
    }

    if (cleanMsg.length < 5) {
      setError('Please enter a brief message so we can assist you.');
      return;
    }

    setSubmittedData({
      name: cleanName,
      phone: cleanPhone,
      topic,
      message: cleanMsg,
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });

    setName('');
    setPhone('');
    setMessage('');
  };

  const buildWhatsAppInquiryUrl = (data: InquirySubmission) => {
    const text = `Hello Faisalabad Square,\nName: ${data.name}\nPhone: ${data.phone}\nTopic: ${data.topic}\nMessage: ${data.message}`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const directionRoutes = [
    {
      index: '01',
      origin: 'From Ayub Agricultural Research Institute',
      detail:
        'Located directly opposite Ayub Research on main Jhang Road in Gulfishan Colony, Faisalabad.',
    },
    {
      index: '02',
      origin: 'From Clock Tower (Ghanta Ghar) & City Center',
      detail:
        'Head west along Jhang Road toward Gulfishan Colony and Ayub Research; Faisalabad Square is situated along the main commercial corridor.',
    },
    {
      index: '03',
      origin: 'From Faisalabad International Airport & Bypass',
      detail:
        'Proceed along Jhang Road toward central Faisalabad past the bypass intersection into Gulfishan Colony opposite Ayub Research.',
    },
  ];

  return (
    <main className="bg-[#FAF9F6]">
      {/* Page Header */}
      <section className="relative bg-[#0B132B] text-white py-20 lg:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <SmartImage
            src={IMAGES.concourseEntrance}
            alt="Main arrival concourse and entrance at Faisalabad Square"
            fallbackLabel="Contact Faisalabad Square"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#D4AF37]">
              <span>Contact Us</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-tabular">{BUSINESS_INFO.phoneRaw}</span>
              <span aria-hidden="true">·</span>
              <span>Gulfishan Colony, Faisalabad</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight text-balance">
              Get in Touch with Faisalabad Square
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Connect with us via direct phone call, WhatsApp, or our online inquiry form, or visit us at Jhang Road, Opposite Ayub Research, Gulfishan Colony, Faisalabad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid: Direct Channels + Contact Form */}
      <section className="py-20 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-medium text-[#9A7418]">
                    Verified Contact Information
                  </span>
                  <h2 className="font-display text-3xl font-bold text-[#0B132B]">
                    Direct Communication Channels
                  </h2>
                  <p className="text-sm text-slate-600">
                    Use the buttons below to call our office immediately or start a WhatsApp conversation.
                  </p>
                </div>

                <div className="space-y-5 pt-4 border-t border-slate-200">
                  {/* Phone Item */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-[#0B132B] text-[#C59B27] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-slate-500 block">Phone Number</span>
                      <div className="flex items-center gap-3 mt-0.5">
                        <a
                          href={`tel:${BUSINESS_INFO.phoneRaw}`}
                          className="text-lg font-bold text-[#0B132B] hover:text-[#9A7418] transition-colors font-mono-tabular"
                        >
                          {BUSINESS_INFO.phoneRaw}
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyPhone}
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 rounded transition-colors"
                          aria-label="Copy phone number"
                        >
                          {copiedPhone ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Item */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-[#0B132B] text-[#C59B27] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">WhatsApp Direct</span>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-[#0B132B] hover:text-[#9A7418] transition-colors font-mono-tabular mt-0.5 inline-block"
                      >
                        +{BUSINESS_INFO.whatsappNumber}
                      </a>
                    </div>
                  </div>

                  {/* Address Item */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-[#0B132B] text-[#C59B27] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Complete Address</span>
                      <p className="text-sm font-semibold text-slate-900 mt-0.5 leading-relaxed">
                        {BUSINESS_INFO.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-white bg-[#0B132B] hover:bg-[#16234d] rounded-md transition-colors whitespace-nowrap font-mono-tabular"
                  >
                    <Phone className="w-4 h-4 text-[#C59B27]" />
                    <span>Click to Call</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Contact Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-8 sm:p-10">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-medium text-[#9A7418]">
                  Online Inquiry Form
                </span>
                <h2 className="font-display text-3xl font-bold text-[#0B132B]">
                  Send Us a Message
                </h2>
                <p className="text-sm text-slate-600">
                  Fill out your name, phone number, and message below. You can also forward your inquiry directly via WhatsApp after submitting.
                </p>
              </div>

              {submittedData ? (
                <div className="p-6 rounded-lg bg-stone-50 border border-slate-200 space-y-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-2xl font-bold text-[#0B132B]">
                        Thank You, {submittedData.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Your inquiry has been recorded at <span className="font-mono-tabular">{submittedData.submittedAt}</span>. Our team will reach out to you at <span className="font-mono-tabular font-semibold text-slate-900">{submittedData.phone}</span>.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-white border border-slate-200 text-xs space-y-1.5 text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-800">Topic:</span> {submittedData.topic}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Message:</span> {submittedData.message}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={buildWhatsAppInquiryUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors whitespace-nowrap"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Send via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="px-4 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {error && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-md bg-red-50 border border-red-200 text-xs font-medium text-red-700"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-slate-300 rounded-md focus:outline-none focus:bg-white focus:border-[#0B132B] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="e.g., 0304-1111250"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-slate-300 rounded-md focus:outline-none focus:bg-white focus:border-[#0B132B] transition-colors font-mono-tabular"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-slate-300 rounded-md focus:outline-none focus:bg-white focus:border-[#0B132B] transition-colors"
                    >
                      <option value="General Visitor Inquiry">General Visitor Inquiry</option>
                      <option value="Retail Showroom / Shop Inquiry">Retail Showroom / Shop Inquiry</option>
                      <option value="Commercial / Corporate Office Space">Commercial / Corporate Office Space</option>
                      <option value="Management & Facility Support">Management &amp; Facility Support</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="How can we help you today?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#FAF9F6] border border-slate-300 rounded-md focus:outline-none focus:bg-white focus:border-[#0B132B] transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Or call directly: <span className="font-mono-tabular font-semibold text-slate-800">{BUSINESS_INFO.phoneRaw}</span>
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#0B132B] bg-[#C59B27] hover:bg-[#d6ad38] rounded-md transition-colors whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps & Location Directions Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-[#9A7418]">
                <Navigation className="w-4 h-4" />
                <span>Location &amp; Directions</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B132B]">
                How to Reach Faisalabad Square
              </h2>
              <p className="text-sm text-slate-600">
                Address: {BUSINESS_INFO.address}
              </p>
            </div>

            <a
              href={BUSINESS_INFO.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0B132B] hover:bg-[#16234d] rounded-md transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 h-[420px]">
            <iframe
              title="Exact Location of Faisalabad Square on Google Maps"
              src={BUSINESS_INFO.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {directionRoutes.map((route) => (
              <div
                key={route.index}
                className="rounded-lg bg-[#FAF9F6] border border-slate-200 overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <SmartImage
                    src={route.image}
                    alt={route.imageAlt}
                    fallbackLabel={route.origin}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-2 flex-1">
                  <span className="text-xs font-mono-tabular font-semibold text-[#9A7418]">
                    {route.index}. Approach Route
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#0B132B]">
                    {route.origin}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {route.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
