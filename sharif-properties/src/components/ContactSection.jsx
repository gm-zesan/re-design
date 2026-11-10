import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';
import siteData from '../data/siteData.json';
import { useApp } from '../context/AppContext';

export default function ContactSection({ showHeader = true }) {
  const cf = siteData.site.contactAndFooter;
  const { showToast } = useApp();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast('Please fill in your name, email, and inquiry message', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Inquiry received. Mr. ShariF’s desk will contact you shortly.');
  };

  return (
    <section
      id="contact"
      className={`py-14 sm:py-16 bg-canvas ${showHeader ? 'border-t border-hairline' : ''}`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        {showHeader && (
          <div className="border-b border-hairline pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
                Contact Us
              </h2>
              <p className="text-ink-muted mt-1.5 text-sm sm:text-base">
                Direct corporate relocation, diplomatic residence leasing, and property management consultations in Dhaka.
              </p>
            </div>
            <div className="text-xs font-semibold text-brand-cobalt">
              Primary Contact: {cf.contactPerson}
            </div>
          </div>
        )}

        {/* 3 Original Office & Desk Contact Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-surface rounded-md border border-hairline p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-brand-blueTint text-brand-cobalt flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-navy">
                Visit Service Apartment Dhaka
              </h3>
              <div className="text-sm text-ink-muted mt-1 space-y-0.5">
                {cf.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-md border border-hairline p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-brand-blueTint text-brand-cobalt flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-navy">
                Make a call to ShariF
              </h3>
              <div className="text-xs font-semibold text-brand-magenta mt-0.5 mb-1 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                <span>{cf.contactPerson}</span>
              </div>
              <div className="flex flex-col gap-1 text-sm text-ink tabular-nums font-medium">
                {cf.phones.map((ph) => (
                  <a
                    key={ph}
                    href={`tel:${ph}`}
                    className="hover:text-brand-royal transition-colors"
                  >
                    {ph}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-md border border-hairline p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-brand-blueTint text-brand-cobalt flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-navy">
                Email to ShariF
              </h3>
              <div className="flex flex-col gap-1 text-sm text-ink mt-1.5 font-medium">
                {cf.emails.map((em) => (
                  <a
                    key={em}
                    href={`mailto:${em}`}
                    className="hover:text-brand-royal transition-colors"
                  >
                    {em}
                  </a>
                ))}
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=8801636333333&text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-brand-cobalt hover:text-brand-magenta"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Direct Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map + Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-6 rounded-md overflow-hidden border border-hairline bg-surface min-h-[360px]">
            <iframe
              title="Sharif Properties Service Office Location - Banani Block-L"
              src={cf.googleMapsEmbed}
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="lg:col-span-6 bg-surface rounded-md border border-hairline p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-bold text-brand-navy">
              Schedule a Property Viewing
            </h3>
            <p className="text-sm text-ink-muted mt-1 mb-6">
              Enter your space requirements, preferred Dhaka area, or Property Card Number.
            </p>

            {submitted ? (
              <div className="rounded border border-brand-cobalt/30 bg-brand-blueTint p-6 text-center space-y-3">
                <CheckCircle2 className="w-9 h-9 text-brand-cobalt mx-auto" />
                <h4 className="font-serif text-xl font-bold text-brand-navy">
                  Thank You, {form.name}
                </h4>
                <p className="text-sm text-ink-muted">
                  Your inquiry has been prepared for <strong>Sharif Properties Service</strong> ({cf.emails[0]}).
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://api.whatsapp.com/send?phone=8801636333333&text=${encodeURIComponent(
                      `Hello Sharif Properties, Name: ${form.name}, Phone: ${form.phone}, Subject: ${form.subject} — ${form.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-cobalt text-white text-sm font-medium hover:bg-brand-navy transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded border border-hairline text-sm font-medium text-ink hover:bg-panel transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3.5 py-2.5 rounded border border-hairline bg-canvas text-sm focus:outline-none focus:border-brand-cobalt focus:bg-surface"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded border border-hairline bg-canvas text-sm focus:outline-none focus:border-brand-cobalt focus:bg-surface"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+880..."
                      className="w-full px-3.5 py-2.5 rounded border border-hairline bg-canvas text-sm focus:outline-none focus:border-brand-cobalt focus:bg-surface"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-1">
                      Subject / Card No.
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. Card S10439 or Gulshan Office"
                      className="w-full px-3.5 py-2.5 rounded border border-hairline bg-canvas text-sm focus:outline-none focus:border-brand-cobalt focus:bg-surface"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your preferred move-in timeline, budget, and space requirements..."
                    className="w-full px-3.5 py-2.5 rounded border border-hairline bg-canvas text-sm focus:outline-none focus:border-brand-cobalt focus:bg-surface"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-brand-magenta hover:bg-brand-magentaDark text-white font-semibold text-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
