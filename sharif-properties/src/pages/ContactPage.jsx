import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ExternalLink, ArrowRight, Building2, ShieldCheck } from 'lucide-react';
import siteData from '../data/siteData.json';
import ContactSection from '../components/ContactSection';

const GOOGLE_MAPS_DIRECTORY = [
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

export default function ContactPage() {
  const cf = siteData.site.contactAndFooter;

  return (
    <div className="bg-canvas min-h-screen">
      {/* Page Banner */}
      <section className="relative bg-brand-navyDeep text-white py-14 border-b border-brand-slate/40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/assets/header-bg.jpg')" }}
        />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/70 mb-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Contact Us</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                Contact {cf.brandName}
              </h1>
              <p className="text-sm sm:text-base text-white/80 mt-2 max-w-2xl">
                {cf.subtitle} &mdash; Direct leasing office in Banani Block-L for furnished apartments, diplomatic villas, corporate office spaces, warehouses, and property management.
              </p>
            </div>
            <div className="self-start md:self-auto inline-flex items-center gap-1 text-xs sm:text-sm text-white/90 font-medium bg-white/10 border border-white/20 px-4 py-2 rounded">
              Primary Contact: <strong className="text-white">{cf.contactPerson}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid + Banani Google Map + Viewing Form */}
      <ContactSection showHeader={false} />

      {/* Advisory Desk & Office Hours Supplement */}
      <section className="pb-16 bg-canvas">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface rounded-md border border-hairline p-6 space-y-3">
            <div className="flex items-center gap-2 text-brand-navy font-serif text-lg font-bold pb-2 border-b border-hairline">
              <Clock className="w-4 h-4 text-brand-magenta" />
              <span>Office &amp; Global Coordination Desk</span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">
              Coordinating property viewings for expatriates and corporate teams across <strong className="text-ink">Dhaka, New York, Brisbane, and Tokyo</strong> time zones.
            </p>
            <div className="text-xs text-ink-subtle space-y-1 pt-1">
              <p>Location: Road No 2/2, House-3, Banani, Block-L, Dhaka 1213</p>
              <p>Direct Mobile &amp; WhatsApp: +8801636333333 / +8801916555222</p>
            </div>
          </div>

          <div className="bg-surface rounded-md border border-hairline p-6 space-y-3">
            <div className="flex items-center gap-2 text-brand-navy font-serif text-lg font-bold pb-2 border-b border-hairline">
              <ShieldCheck className="w-4 h-4 text-brand-cobalt" />
              <span>Google Maps Location Directory</span>
            </div>
            <ul className="space-y-1.5 text-xs">
              {GOOGLE_MAPS_DIRECTORY.map((mp) => (
                <li key={mp.url}>
                  <a
                    href={mp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-royal hover:text-brand-magenta inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{mp.label}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface rounded-md border border-hairline p-6 space-y-4">
            <div className="flex items-center gap-2 text-brand-navy font-serif text-lg font-bold pb-2 border-b border-hairline">
              <Building2 className="w-4 h-4 text-brand-cobalt" />
              <span>Quick Portfolio Navigation</span>
            </div>
            <div className="space-y-2 text-sm">
              <Link
                to="/rent"
                className="flex items-center justify-between px-3 py-2 rounded bg-canvas hover:bg-panel text-brand-navy font-medium transition-colors"
              >
                <span>Browse All 365 Properties</span>
                <ArrowRight className="w-4 h-4 text-brand-cobalt" />
              </Link>
              <Link
                to="/service-apartments-dhaka"
                className="flex items-center justify-between px-3 py-2 rounded bg-canvas hover:bg-panel text-brand-navy font-medium transition-colors"
              >
                <span>Full Services &amp; Facility Menu</span>
                <ArrowRight className="w-4 h-4 text-brand-cobalt" />
              </Link>
              <Link
                to="/about"
                className="flex items-center justify-between px-3 py-2 rounded bg-canvas hover:bg-panel text-brand-navy font-medium transition-colors"
              >
                <span>About Sharif Properties Service</span>
                <ArrowRight className="w-4 h-4 text-brand-cobalt" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

