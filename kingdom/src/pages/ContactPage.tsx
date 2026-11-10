import { FormEvent, useState } from 'react';
import {
  Building2,
  ExternalLink,
  Globe,
  Info,
  Mail,
  MapPin,
  Phone,
  Printer,
  Send,
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ToastBanner } from '../components/ToastBanner';
import { OFFICES_DATA, SITE_META } from '../data/siteData';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill out Your Name, Your Email, and Your Message.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <PageBanner
        eyebrow="Offices & 24/7 Control Unit"
        title="Contact Us"
        subtitle="Connect with KINGDOM GROUP Corporate Headquarters in Mohakhali DOHS, Motijheel Sales Office, South Keraniganj Site Office, Gulshan, Sylhet Stone Plant, or Shariatpur Regional Office."
        breadcrumbs={[{ label: 'Contact' }]}
        badge="7 Active Offices"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 7 Active Offices Bento Grid */}
        <div className="mb-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#B8862D] dark:text-[#E5C17B]">
                Office Locations
              </span>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#1E1B5E] dark:text-white">
                Nationwide &amp; Dhaka Office Directory
              </h2>
            </div>
            <a
              href={SITE_META.mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#1E1B5E]/30 bg-white px-4 py-2 text-xs font-semibold text-[#1E1B5E] transition hover:bg-[#1E1B5E] hover:text-white dark:border-white/15 dark:bg-[#161B36] dark:text-[#E5C17B] dark:hover:bg-[#B8862D] dark:hover:text-[#0E1122]"
            >
              <MapPin className="h-3.5 w-3.5 text-[#B8862D] dark:text-[#E5C17B]" />
              <span>Open KINGDOM GROUP on Google Maps</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {OFFICES_DATA.map((office) => {
              const isControlUnit = office.id === 'control-unit';
              return (
                <article
                  key={office.id}
                  className={`flex flex-col justify-between rounded-2xl border p-6 shadow-2xs ${
                    isControlUnit
                      ? 'border-[#1E1B5E] bg-[#1E1B5E] text-white dark:border-[#B8862D]/40 dark:bg-[#10142A] md:col-span-2 lg:col-span-3'
                      : 'border-[#E5DFD0] bg-white text-[#121629] dark:border-white/10 dark:bg-[#161B36] dark:text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Building2
                          className={`h-5 w-5 ${
                            isControlUnit ? 'text-[#E5C17B]' : 'text-[#B8862D] dark:text-[#E5C17B]'
                          }`}
                        />
                        <h3 className="font-display text-xl font-semibold">{office.title}</h3>
                      </div>
                      {office.badge && (
                        <span
                          className={`rounded-full px-2.5 py-0.5 font-mono-tech text-[10px] font-semibold uppercase tracking-wider ${
                            isControlUnit
                              ? 'bg-[#B8862D] text-[#0E1122]'
                              : 'bg-[#F3ECD8] text-[#1E1B5E] dark:bg-[#B8862D]/20 dark:text-[#F5DC9C]'
                          }`}
                        >
                          {office.badge}
                        </span>
                      )}
                    </div>

                    <div
                      className={`mt-3 space-y-0.5 text-sm leading-relaxed ${
                        isControlUnit ? 'text-white/85' : 'text-[#4A4F63] dark:text-slate-300'
                      }`}
                    >
                      {office.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>

                    <div
                      className={`mt-4 space-y-2 text-xs ${
                        isControlUnit
                          ? 'flex flex-wrap items-center gap-4 space-y-0'
                          : 'text-[#4A4F63] dark:text-slate-300'
                      }`}
                    >
                      {office.phones && (
                        <p className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 shrink-0 text-[#B8862D] dark:text-[#E5C17B]" />
                          <span className="tabular-nums">
                            <strong className="dark:text-white">Phone:</strong> {office.phones.join(', ')}
                          </span>
                        </p>
                      )}
                      {office.fax && (
                        <p className="flex items-center gap-2">
                          <Printer className="h-3.5 w-3.5 shrink-0 text-[#B8862D] dark:text-[#E5C17B]" />
                          <span className="tabular-nums">
                            <strong className="dark:text-white">Fax:</strong> {office.fax.join(', ')}
                          </span>
                        </p>
                      )}
                      {office.mobiles &&
                        office.mobiles.map((mob) => (
                          <p key={mob} className="flex items-center gap-2">
                            <Phone
                              className={`h-3.5 w-3.5 shrink-0 ${
                                isControlUnit ? 'text-[#E5C17B]' : 'text-[#B8862D] dark:text-[#E5C17B]'
                              }`}
                            />
                            <a
                              href={`tel:${mob.replace(/\s+/g, '')}`}
                              className={`font-semibold tabular-nums hover:underline ${
                                isControlUnit
                                  ? 'rounded-lg bg-white/10 px-3 py-1.5 text-sm text-[#F5DC9C]'
                                  : 'text-[#1E1B5E] dark:text-[#E5C17B]'
                              }`}
                            >
                              {isControlUnit ? mob : `Mobile: ${mob}`}
                            </a>
                          </p>
                        ))}
                      {office.customerCare && (
                        <p className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 shrink-0 text-[#B8862D] dark:text-[#E5C17B]" />
                          <span className="tabular-nums">
                            <strong className="dark:text-white">Customer Care:</strong> {office.customerCare}
                          </span>
                        </p>
                      )}
                      {office.collection && (
                        <p className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 shrink-0 text-[#B8862D] dark:text-[#E5C17B]" />
                          <span className="tabular-nums">
                            <strong className="dark:text-white">Collection:</strong> {office.collection}
                          </span>
                        </p>
                      )}
                      {office.emails && (
                        <p className="flex items-start gap-2">
                          <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B8862D] dark:text-[#E5C17B]" />
                          <span>
                            <strong className="dark:text-white">E-mail:</strong>{' '}
                            {office.emails.map((em, i) => (
                              <span key={em}>
                                <a href={`mailto:${em}`} className="text-[#1E1B5E] hover:underline dark:text-[#E5C17B]">
                                  {em}
                                </a>
                                {i < office.emails!.length - 1 ? ', ' : ''}
                              </span>
                            ))}
                          </span>
                        </p>
                      )}
                      {office.web && (
                        <p className="flex items-center gap-2">
                          <Globe className="h-3.5 w-3.5 shrink-0 text-[#B8862D] dark:text-[#E5C17B]" />
                          <span>
                            <strong className="dark:text-white">Web:</strong> {office.web}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  {office.note && (
                    <div
                      className={`mt-4 flex items-start gap-1.5 border-t pt-3 text-[11px] ${
                        isControlUnit
                          ? 'border-white/15 text-white/75'
                          : 'border-[#E5DFD0] text-[#4A4F63] dark:border-white/10 dark:text-slate-400'
                      }`}
                    >
                      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B8862D] dark:text-[#E5C17B]" />
                      <span>{office.note}</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Map & Direct Inquiry Form Split */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Embedded Map */}
          <div className="overflow-hidden rounded-2xl border border-[#E5DFD0] bg-white p-3 shadow-xs dark:border-white/10 dark:bg-[#161B36] lg:col-span-6">
            <div className="mb-3 flex items-center justify-between px-2 pt-1">
              <div>
                <h2 className="font-display text-xl font-semibold text-[#1E1B5E] dark:text-white">
                  Headquarters Map Location
                </h2>
                <p className="text-xs text-[#4A4F63] dark:text-slate-300">Mohakhali DOHS, Dhaka-1206</p>
              </div>
              <a
                href={SITE_META.mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#1E1B5E] hover:underline dark:text-[#E5C17B]"
              >
                Larger Map →
              </a>
            </div>
            <iframe
              title="KINGDOM GROUP Mohakhali DOHS Location Map"
              src={SITE_META.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full rounded-xl border border-[#E5DFD0] dark:border-white/10"
              allowFullScreen
            />
          </div>

          {/* Contact Inquiry Form */}
          <div className="rounded-2xl border border-[#E5DFD0] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#161B36] sm:p-8 lg:col-span-6">
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#B8862D] dark:text-[#E5C17B]">
              Direct Inquiry
            </span>
            <h2 className="mt-1 font-display text-2xl font-semibold text-[#1E1B5E] dark:text-white">
              Send a Message
            </h2>
            <p className="mt-1 text-sm text-[#4A4F63] dark:text-slate-300">
              Reach Corporate Headquarters or request plot and project consultation.
            </p>

            <div className="mt-4">
              <ToastBanner
                visible={submitted}
                title="Message Ready (Frontend Demo Preview)"
                message="Your inquiry has been validated. Direct mail delivery requires backend configuration, so please contact info@kingdombd.com or +88 01711-070777 for immediate assistance."
                onDismiss={() => setSubmitted(false)}
              />
            </div>

            {errorMsg && (
              <div className="mt-4 rounded-xl border border-[#B93832]/30 bg-red-50 px-4 py-3 text-xs font-medium text-[#B93832] dark:border-red-500/40 dark:bg-red-950/50 dark:text-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="contact-page-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#121629] dark:text-slate-200"
                >
                  Your Name *
                </label>
                <input
                  id="contact-page-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E5DFD0] bg-[#FAF8F3] px-4 py-2.5 text-sm text-[#121629] focus:border-[#1E1B5E] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0E1122] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#E5C17B] dark:focus:bg-[#0E1122]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-page-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#121629] dark:text-slate-200"
                >
                  Your Email *
                </label>
                <input
                  id="contact-page-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E5DFD0] bg-[#FAF8F3] px-4 py-2.5 text-sm text-[#121629] focus:border-[#1E1B5E] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0E1122] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#E5C17B] dark:focus:bg-[#0E1122]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-page-msg"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#121629] dark:text-slate-200"
                >
                  Your Message *
                </label>
                <textarea
                  id="contact-page-msg"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E5DFD0] bg-[#FAF8F3] px-4 py-2.5 text-sm text-[#121629] focus:border-[#1E1B5E] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0E1122] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#E5C17B] dark:focus:bg-[#0E1122]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1E1B5E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2E3192] dark:bg-[#B8862D] dark:text-[#0E1122] dark:hover:bg-[#E5C17B]"
              >
                <span>Get in touch &raquo;</span>
                <Send className="h-4 w-4 text-[#E5C17B] dark:text-[#0E1122]" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

