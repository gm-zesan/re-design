import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Mail, MessageSquare, Phone, Send } from 'lucide-react';
import { ABOUT_CONTENT, COMPANY } from '../data/company';
import { DhakaMap } from '../components/common/DhakaMap';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please provide your Name, Phone number, and Email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-[#0C0C0C] text-white overflow-hidden">
        <img
          src={COMPANY.assets.contactHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/75 to-[#0C0C0C]/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="text-xs uppercase tracking-[0.18em] text-white/60 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#DA2328]">Contact Us</span>
          </nav>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-white">Contact Us</h1>
          <p className="mt-4 text-base text-white/80 max-w-2xl leading-relaxed">
            {ABOUT_CONTENT.contactDocumentationNote}
          </p>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8] dark:bg-[#0D1014] border-b border-[#E5E2DC] dark:border-[#242A34] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Get in Touch & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-7 sm:p-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328]">Banani Head Office</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                Get in Touch
              </h2>
              <p className="text-sm sm:text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
                {ABOUT_CONTENT.contactIntro}
              </p>
              <p className="text-sm font-medium text-[#111418] dark:text-[#F5F3EE] p-4 bg-[#FAFAF8] dark:bg-[#191E27] border-l-2 border-[#DA2328] leading-relaxed">
                {ABOUT_CONTENT.contactCtaLine}
              </p>
            </div>

            {/* Direct Info Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${COMPANY.emails.general}`}
                className="flex items-start gap-4 p-5 bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] hover:border-[#DA2328] transition-colors group"
              >
                <div className="w-11 h-11 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#2A303A] flex items-center justify-center p-2 shrink-0">
                  <img src="/uploads/2024/05/Email-new.webp" alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5E646C] dark:text-[#A4A8AE]">
                    Email us
                  </p>
                  <p className="text-base font-semibold text-[#111418] dark:text-[#F5F3EE] group-hover:text-[#DA2328] mt-0.5">
                    {COMPANY.emails.general}
                  </p>
                  <p className="text-xs text-[#5E646C] dark:text-[#A4A8AE] mt-0.5">
                    Properties Desk: {COMPANY.emails.properties}
                  </p>
                </div>
              </a>

              <div className="p-5 bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] flex items-start gap-4">
                <div className="w-11 h-11 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#2A303A] flex items-center justify-center p-2 shrink-0">
                  <img src="/uploads/2024/05/Call-new.webp" alt="" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5E646C] dark:text-[#A4A8AE]">
                    Call us
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
                    <a
                      href={COMPANY.phones.primaryTel}
                      className="text-base font-semibold text-[#111418] dark:text-[#F5F3EE] hover:text-[#DA2328] tabular-nums"
                    >
                      {COMPANY.phones.primary}
                    </a>
                    <a
                      href={COMPANY.phones.secondaryTel}
                      className="text-base font-semibold text-[#111418] dark:text-[#F5F3EE] hover:text-[#DA2328] tabular-nums"
                    >
                      {COMPANY.phones.secondary}
                    </a>
                  </div>
                  <a
                    href={COMPANY.phones.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#156E44] dark:text-[#6EE7B7] mt-2 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp: {COMPANY.phones.whatsappDisplay}</span>
                  </a>
                </div>
              </div>

              <a
                href={COMPANY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] hover:border-[#DA2328] transition-colors group"
              >
                <div className="w-11 h-11 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#2A303A] flex items-center justify-center p-2 shrink-0">
                  <img src="/uploads/2024/05/Home-new.webp" alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5E646C] dark:text-[#A4A8AE]">
                    Head Office
                  </p>
                  <p className="text-sm font-semibold text-[#111418] dark:text-[#F5F3EE] group-hover:text-[#DA2328] mt-0.5 leading-snug">
                    {COMPANY.address}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#DA2328] mt-1.5 font-medium">
                    View on Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Showcase Photo + Send Us Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] overflow-hidden">
            <div className="relative h-52 sm:h-64 overflow-hidden bg-[#F2EFE9] dark:bg-[#1B2029]">
              <img
                src={COMPANY.assets.contactShowcasePhoto}
                alt="Shwapno Bari Featured Residence — Urban Shishirkona"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <p className="text-xs sm:text-sm text-white/95 max-w-xl leading-relaxed">
                  {ABOUT_CONTENT.contactDocumentationNote}
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                Send Us Message
              </h2>
              <p className="text-sm text-[#5E646C] dark:text-[#A4A8AE] mt-1 mb-6">
                Share your requirements for buying, selling, exchanging, or legal documentation in Dhaka.
              </p>

              {submitted ? (
                <div className="p-6 bg-[#ECF7F1] dark:bg-[#12281E] border border-[#156E44]/30 dark:border-[#156E44]/50 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#156E44] dark:text-[#6EE7B7] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                        Inquiry Prepared for {formData.name}
                      </h3>
                      <p className="text-sm text-[#363B42] dark:text-[#C5C8CE] mt-1">
                        Thank you for reaching out to {COMPANY.brandName}. This frontend redesign confirms your
                        details below—you can also open your default email client or call our Banani desk directly for
                        immediate scheduling.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={`mailto:${COMPANY.emails.general}?subject=${encodeURIComponent(
                        formData.subject || `Property Inquiry from ${formData.name}`
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\n${formData.message}`
                      )}`}
                      className="px-5 py-2.5 bg-[#0C0C0C] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" /> Send via Email App
                    </a>
                    <a
                      href={COMPANY.phones.primaryTel}
                      className="px-5 py-2.5 bg-[#DA2328] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call {COMPANY.phones.primary}
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 border border-[#156E44]/40 text-xs font-semibold text-[#111418] dark:text-[#F5F3EE] cursor-pointer"
                    >
                      New Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {error && (
                    <div className="p-3 bg-[#F2DEDE] dark:bg-[#3A1618] border border-[#B94A48]/30 text-xs font-medium text-[#B94A48] dark:text-[#FCA5A5]">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="your-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1] mb-1.5"
                      >
                        Your name *
                      </label>
                      <input
                        id="your-name"
                        name="your-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full px-4 py-3 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm text-[#111418] dark:text-[#F5F3EE] placeholder-[#5E646C] dark:placeholder-[#8D939E] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1] mb-1.5"
                      >
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full px-4 py-3 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm text-[#111418] dark:text-[#F5F3EE] placeholder-[#5E646C] dark:placeholder-[#8D939E] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="your-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1] mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        id="your-email"
                        name="your-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm text-[#111418] dark:text-[#F5F3EE] placeholder-[#5E646C] dark:placeholder-[#8D939E] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="your-subject"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1] mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="your-subject"
                        name="your-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Property inquiry / Valuation / Legal support"
                        className="w-full px-4 py-3 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm text-[#111418] dark:text-[#F5F3EE] placeholder-[#5E646C] dark:placeholder-[#8D939E] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="your-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1] mb-1.5"
                    >
                      Your message (optional)
                    </label>
                    <textarea
                      id="your-message"
                      name="your-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Preferred neighborhood, size (SFT), budget, or consultation topic..."
                      className="w-full px-4 py-3 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm text-[#111418] dark:text-[#F5F3EE] placeholder-[#5E646C] dark:placeholder-[#8D939E] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.18em] inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>SEND NOW</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dhaka Map */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#12161C] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">Find Our Office</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
              Banani Head Office &amp; Property Locations
            </h2>
          </div>
          <DhakaMap />
        </div>
      </section>
    </>
  );
}

