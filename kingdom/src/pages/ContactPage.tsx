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
        backgroundImage="/images/hero/kingdom-city-sign.jpg"
        backgroundPositionClass="object-[center_35%]"
        badge="7 Active Offices"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 7 Active Offices Bento Grid */}
        <div className="mb-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                Office Locations
              </span>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#18191D] dark:text-white">
                Nationwide &amp; Dhaka Office Directory
              </h2>
            </div>
            <a
              href={SITE_META.mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#18191D]/30 bg-white px-4 py-2 text-xs font-semibold text-[#18191D] transition hover:bg-[#18191D] hover:text-white dark:border-white/15 dark:bg-[#1A1C21] dark:text-[#C9A46B] dark:hover:bg-[#C9A46B] dark:hover:text-[#0C0D0F]"
            >
              <MapPin className="h-3.5 w-3.5 text-[#8C6730] dark:text-[#C9A46B]" />
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
                      ? 'border-[#18191D] bg-[#18191D] text-white dark:border-[#8C6730]/40 dark:bg-[#141518] md:col-span-2 lg:col-span-3'
                      : 'border-[#E4E3DF] bg-white text-[#141518] dark:border-white/10 dark:bg-[#1A1C21] dark:text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Building2
                          className={`h-5 w-5 ${
                            isControlUnit ? 'text-[#C9A46B]' : 'text-[#8C6730] dark:text-[#C9A46B]'
                          }`}
                        />
                        <h3 className="font-display text-xl font-semibold">{office.title}</h3>
                      </div>
                      {office.badge && (
                        <span
                          className={`rounded-full px-2.5 py-0.5 font-mono-tech text-[10px] font-semibold uppercase tracking-wider ${
                            isControlUnit
                              ? 'bg-[#8C6730] text-[#111215]'
                              : 'bg-[#F2F1EE] text-[#18191D] dark:bg-[#C9A46B]/18 dark:text-[#DFC69B]'
                          }`}
                        >
                          {office.badge}
                        </span>
                      )}
                    </div>

                    <div
                      className={`mt-3 space-y-0.5 text-sm leading-relaxed ${
                        isControlUnit ? 'text-white/85' : 'text-[#52555E] dark:text-zinc-300'
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
                          : 'text-[#52555E] dark:text-zinc-300'
                      }`}
                    >
                      {office.phones && (
                        <p className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                          <span className="tabular-nums">
                            <strong className="dark:text-white">Phone:</strong> {office.phones.join(', ')}
                          </span>
                        </p>
                      )}
                      {office.fax && (
                        <p className="flex items-center gap-2">
                          <Printer className="h-3.5 w-3.5 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
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
                                isControlUnit ? 'text-[#C9A46B]' : 'text-[#8C6730] dark:text-[#C9A46B]'
                              }`}
                            />
                            <a
                              href={`tel:${mob.replace(/\s+/g, '')}`}
                              className={`font-semibold tabular-nums hover:underline ${
                                isControlUnit
                                  ? 'rounded-lg bg-white/10 px-3 py-1.5 text-sm text-[#DFC69B]'
                                  : 'text-[#18191D] dark:text-[#C9A46B]'
                              }`}
                            >
                              {isControlUnit ? mob : `Mobile: ${mob}`}
                            </a>
                          </p>
                        ))}
                      {office.customerCare && (
                        <p className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                          <span className="tabular-nums">
                            <strong className="dark:text-white">Customer Care:</strong> {office.customerCare}
                          </span>
                        </p>
                      )}
                      {office.collection && (
                        <p className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                          <span className="tabular-nums">
                            <strong className="dark:text-white">Collection:</strong> {office.collection}
                          </span>
                        </p>
                      )}
                      {office.emails && (
                        <p className="flex items-start gap-2">
                          <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                          <span>
                            <strong className="dark:text-white">E-mail:</strong>{' '}
                            {office.emails.map((em, i) => (
                              <span key={em}>
                                <a href={`mailto:${em}`} className="text-[#18191D] hover:underline dark:text-[#C9A46B]">
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
                          <Globe className="h-3.5 w-3.5 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
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
                          : 'border-[#E4E3DF] text-[#52555E] dark:border-white/10 dark:text-zinc-400'
                      }`}
                    >
                      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
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
          <div className="overflow-hidden rounded-2xl border border-[#E4E3DF] bg-white p-3 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] lg:col-span-6">
            <div className="mb-3 flex items-center justify-between px-2 pt-1">
              <div>
                <h2 className="font-display text-xl font-semibold text-[#18191D] dark:text-white">
                  Headquarters Map Location
                </h2>
                <p className="text-xs text-[#52555E] dark:text-zinc-300">Mohakhali DOHS, Dhaka-1206</p>
              </div>
              <a
                href={SITE_META.mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#18191D] hover:underline dark:text-[#C9A46B]"
              >
                Larger Map →
              </a>
            </div>
            <iframe
              title="KINGDOM GROUP Mohakhali DOHS Location Map"
              src={SITE_META.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full rounded-xl border border-[#E4E3DF] dark:border-white/10"
              allowFullScreen
            />
          </div>

          {/* Contact Inquiry Form */}
          <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8 lg:col-span-6">
            <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
              Direct Inquiry
            </span>
            <h2 className="mt-1 font-display text-2xl font-semibold text-[#18191D] dark:text-white">
              Send a Message
            </h2>
            <p className="mt-1 text-sm text-[#52555E] dark:text-zinc-300">
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
                  className="block text-xs font-semibold uppercase tracking-wider text-[#141518] dark:text-zinc-200"
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
                  className="mt-1.5 w-full rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-2.5 text-sm text-[#141518] focus:border-[#18191D] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-400 dark:focus:border-[#C9A46B] dark:focus:bg-[#111215]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-page-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#141518] dark:text-zinc-200"
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
                  className="mt-1.5 w-full rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-2.5 text-sm text-[#141518] focus:border-[#18191D] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-400 dark:focus:border-[#C9A46B] dark:focus:bg-[#111215]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-page-msg"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#141518] dark:text-zinc-200"
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
                  className="mt-1.5 w-full rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-2.5 text-sm text-[#141518] focus:border-[#18191D] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-400 dark:focus:border-[#C9A46B] dark:focus:bg-[#111215]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#18191D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
              >
                <span>Get in touch &raquo;</span>
                <Send className="h-4 w-4 text-[#C9A46B] dark:text-[#111215]" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

