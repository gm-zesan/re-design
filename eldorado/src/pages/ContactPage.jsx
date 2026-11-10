import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Printer,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY } from '../data/siteData';

export default function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.mobile.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setError('Please complete all required fields in the contact form.');
      return;
    }
    setError('');
    navigate('/thankyou', {
      state: {
        source: 'General Contact Inquiry',
        summary: {
          Name: form.name,
          Email: form.email,
          Mobile: form.mobile,
          Subject: form.subject,
        },
      },
    });
  };

  return (
    <div>
      <PageHeader
        eyebrow="Reach El Dorado"
        title="Contact Us"
        subtitle="Visit our Dhaka Head & Corporate offices or our Canada office, or message our support and sales teams directly."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {/* Quick Direct Contact Strips */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-stone bg-surface p-6 shadow-card">
              <div className="flex items-center gap-2 text-crimson-ink">
                <Phone className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Support &amp; Hotline
                </span>
              </div>
              <p className="mt-3 font-serif text-2xl font-semibold text-charcoal">
                {COMPANY.contactSummary.supportPhone}
              </p>
              <p className="mt-1 text-sm text-concrete">
                Mobile Hotline: {COMPANY.contactSummary.hotline}
              </p>
            </div>

            <div className="border border-stone bg-surface p-6 shadow-card">
              <div className="flex items-center gap-2 text-crimson-ink">
                <Phone className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Sales &amp; Flat Inquiry
                </span>
              </div>
              <p className="mt-3 font-serif text-2xl font-semibold text-charcoal">
                {COMPANY.contactSummary.salesPhone}
              </p>
              <p className="mt-1 text-sm text-concrete">
                Email: {COMPANY.contactSummary.salesEmail}
              </p>
            </div>

            <div className="border border-stone bg-surface p-6 shadow-card">
              <div className="flex items-center gap-2 text-crimson-ink">
                <Mail className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Official Email Channels
                </span>
              </div>
              <p className="mt-3 font-serif text-2xl font-semibold text-charcoal">
                {COMPANY.contactSummary.supportEmail}
              </p>
              <p className="mt-1 text-sm text-concrete">
                {COMPANY.contactSummary.salesEmail}
              </p>
            </div>
          </div>

          {/* 3 Global Offices + Contact Form */}
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Office Locations */}
            <div className="lg:col-span-5 space-y-6">
              {COMPANY.offices.map((office) => (
                <article
                  key={office.id}
                  className="border border-stone bg-surface p-6 shadow-card"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-serif text-2xl font-semibold text-charcoal">
                      {office.title}
                    </h2>
                    <MapPin className="h-5 w-5 shrink-0 text-crimson-ink" />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-concrete">
                    {office.address}
                  </p>

                  <div className="mt-4 space-y-1.5 text-sm text-charcoal">
                    {office.phones.map((phone) => (
                      <p key={phone} className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-bronze-ink" />
                        <a
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="hover:text-crimson-ink"
                        >
                          {phone}
                        </a>
                      </p>
                    ))}
                    {office.fax && (
                      <p className="flex items-center gap-2 text-concrete">
                        <Printer className="h-3.5 w-3.5 text-bronze-ink" />
                        <span>Fax: {office.fax}</span>
                      </p>
                    )}
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${office.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-crimson-ink hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </article>
              ))}
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-stone bg-surface p-7 shadow-editorial sm:p-10"
              >
                <div className="border-b border-stone pb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                    Direct Message
                  </span>
                  <h2 className="mt-1 font-serif text-3xl font-semibold text-charcoal">
                    Send Us a Message
                  </h2>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="mt-5 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-800/70 dark:bg-red-950/50 dark:text-red-200"
                  >
                    {error}
                  </div>
                )}

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact_name"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Full Name <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="contact_name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact_email"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Email Address <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="contact_email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact_mobile"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Mobile Number <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="contact_mobile"
                      name="mobile"
                      type="tel"
                      required
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact_subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Subject <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="contact_subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Consultation"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact_message"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Message <span className="text-crimson-ink">*</span>
                    </label>
                    <textarea
                      id="contact_message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your inquiry for our support or sales team..."
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-8 border-t border-stone pt-6">
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-crimson px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-crimson-dark"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

