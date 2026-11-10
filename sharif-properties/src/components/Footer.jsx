import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import siteData from '../data/siteData.json';
import { useApp } from '../context/AppContext';

const FOOTER_MAP_LINKS = [
  {
    label: 'Furnished Apartments for Rent in Gulshan (Place)',
    url: 'https://www.google.com/maps/place/furnished+apartments+for+rent+in+Gulshan,+Dhaka/@23.789747,90.3929247,14z/',
  },
  {
    label: 'Service Apartment in Dhaka (Map)',
    url: 'https://www.google.com/maps/place/service+apartment+in+Dhaka/@23.789747,90.3929247,14z/',
  },
  {
    label: 'Furnished Apartments for Rent in Gulshan',
    url: 'https://www.google.com/maps/search/furnished+apartments+for+rent+in+gulshan/@23.7984545,90.4030951,15z/data=!3m1!4b1/',
  },
  {
    label: 'Furnished Apartments for Rent in Banani',
    url: 'https://www.google.com/maps/search/furnished+apartments+for+rent+in+banani/@23.798455,90.4030951,15z/data=!3m1!4b1/',
  },
  {
    label: 'Furnished Apartments for Rent in Baridhara',
    url: 'https://www.google.com/maps/search/furnished+apartments+for+rent+in+baridhara/@23.798454,90.4030951,15z/data=!3m1!4b1/',
  },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useApp();
  const cf = siteData.site.contactAndFooter;

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setSubscribed(true);
    setNewsletterEmail('');
    showToast('Subscribed to Sharif Properties updates');
  };

  return (
    <>
      <footer className="bg-brand-navyDeep text-white/80 border-t border-brand-slate/40 no-print">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Brand & Contact */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded p-1.5 shrink-0">
                  <img
                    src="/assets/logo.png"
                    alt="Sharif Properties Service"
                    className="h-11 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">
                    {cf.brandName}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-brand-magenta font-semibold">
                    {cf.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-sm text-white/75">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-magenta shrink-0 mt-0.5" />
                  <span>{cf.addressLines.join(', ')}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-brand-magenta shrink-0 mt-0.5" />
                  <div className="flex flex-col tabular-nums">
                    {cf.phones.map((ph) => (
                      <a key={ph} href={`tel:${ph}`} className="hover:text-white transition-colors">
                        {ph}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-brand-magenta shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    {cf.emails.map((em) => (
                      <a key={em} href={`mailto:${em}`} className="hover:text-white transition-colors">
                        {em}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white/60 mb-2">
                  Google Maps Location Directory
                </h4>
                <ul className="space-y-1.5 text-xs">
                  {FOOTER_MAP_LINKS.map((mp) => (
                    <li key={mp.url}>
                      <a
                        href={mp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white inline-flex items-center gap-1"
                      >
                        <span>{mp.label}</span>
                        <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Explore & Prime Locations */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-white mb-4 pb-2 border-b border-white/10">
                Locations &amp; Property Portfolios
              </h4>
              <ul className="space-y-2 text-sm">
                {cf.footerInternalLinks.map((lnk) => (
                  <li key={lnk.path + lnk.label}>
                    <Link
                      to={lnk.path}
                      className="text-white/75 hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-brand-magenta" />
                      <span>{lnk.label}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/rent"
                    className="text-white/75 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-brand-cobalt" />
                    <span>All Rental Properties (365)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Newspaper Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-white mb-4 pb-2 border-b border-white/10">
                Newspaper Links
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                {cf.footerExternalNewspaperLinks.map((lnk) => (
                  <li key={lnk.url}>
                    <a
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/75 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{lnk.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter, Facebook Feed & Socials */}
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-semibold text-white mb-1.5">
                  Newsletter
                </h4>
                <p className="text-xs text-white/65 mb-3">Stay update with our latest</p>
                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs text-white bg-brand-cobalt/40 border border-brand-cobalt rounded px-3 py-2.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Thank you! You are subscribed to updates.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter Email"
                      required
                      className="w-full px-3.5 py-2.5 rounded-l bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-brand-cobalt"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="px-4 py-2.5 rounded-r bg-brand-magenta hover:bg-brand-magentaDark text-white transition-colors flex items-center justify-center"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-white mb-2.5">
                  Facebook Feed
                </h4>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <a
                      key={n}
                      href="https://www.facebook.com/shariproperties"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-square overflow-hidden rounded-sm border border-white/15 hover:border-brand-magenta transition-colors"
                    >
                      <img
                        src={`/assets/i${n}.jpg`}
                        alt={`Sharif Properties gallery ${n}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-white mb-1">
                  Follow Us
                </h4>
                <p className="text-xs text-white/60 mb-2.5">Let us be social</p>
                <div className="flex flex-wrap gap-1.5">
                  {cf.socialLinks.map((soc) => (
                    <a
                      key={soc.platform}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-white/10 hover:bg-brand-cobalt text-xs text-white/85 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {soc.platform === 'Lacartes' && (
                        <img
                          src="/assets/lacartes_icon.png"
                          alt=""
                          className="w-3.5 h-3.5 object-contain"
                        />
                      )}
                      <span>{soc.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
            <p>
              Copyright &copy; {new Date().getFullYear()} {cf.brandName}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link to="/service-apartments-dhaka" className="hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/property-management-dhaka-bangladesh" className="hover:text-white transition-colors">
                Property Management
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Restrained WhatsApp Quick Concierge Dock */}
      <a
        href="https://api.whatsapp.com/send?phone=8801636333333&text=Hello"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 no-print flex items-center gap-2 bg-brand-navy hover:bg-brand-cobalt border border-white/20 text-white px-3.5 py-2.5 rounded-md shadow-elevated transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span className="hidden sm:inline text-xs font-semibold">WhatsApp Desk</span>
      </a>
    </>
  );
}
