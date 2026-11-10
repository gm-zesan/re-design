import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '../../data/company';

export function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-[#D8D4CC] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Head Office Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={COMPANY.assets.logoWhite}
                alt="Shwapno Bari Real Estate Ltd."
                className="h-12 w-auto object-contain"
              />
            </Link>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white mb-3">{COMPANY.brandName}</h2>
              <p className="text-sm text-white/70 leading-relaxed max-w-md">
                {COMPANY.tagline}. Serving homebuyers, landowners, and developers across Bangladesh with legally
                vetted property solutions since {COMPANY.establishedYear}.
              </p>
            </div>

            <div className="space-y-3 pt-1 text-sm">
              <a
                href={COMPANY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/85 hover:text-white transition-colors group"
              >
                <img
                  src="/uploads/2024/04/Local-Icon-White.webp"
                  alt="Office Pin"
                  className="w-4 h-4 mt-1 shrink-0 opacity-90"
                />
                <span>
                  {COMPANY.address}
                  <span className="inline-flex items-center gap-1 ml-2 text-xs text-[#DA2328] group-hover:underline">
                    Google Maps <ArrowUpRight className="w-3 h-3" />
                  </span>
                </span>
              </a>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href={COMPANY.phones.primaryTel}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#DA2328]" />
                  <span>{COMPANY.phones.primary}</span>
                </a>
                <a
                  href={COMPANY.phones.secondaryTel}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#DA2328]" />
                  <span>{COMPANY.phones.secondary}</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href={`mailto:${COMPANY.emails.general}`}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Mail className="w-4 h-4 text-[#DA2328]" />
                  <span>{COMPANY.emails.general}</span>
                </a>
                <a
                  href={`mailto:${COMPANY.emails.properties}`}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Mail className="w-4 h-4 text-[#DA2328]" />
                  <span>{COMPANY.emails.properties}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-white/50">Portfolio</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/properties-list" className="hover:text-white transition-colors">
                  All Properties
                </Link>
              </li>
              <li>
                <Link to="/properties-list?project_state=Available" className="hover:text-white transition-colors">
                  Available Flats
                </Link>
              </li>
              <li>
                <Link to="/properties-list?project_state=Upcoming" className="hover:text-white transition-colors">
                  Upcoming Projects
                </Link>
              </li>
              <li>
                <Link to="/properties-list?project_state=Sold" className="hover:text-white transition-colors">
                  Delivered / Sold
                </Link>
              </li>
              <li>
                <Link to="/properties/luxury-flat-for-sale-asad-avenue" className="hover:text-white transition-colors">
                  Shanta Mirzam
                </Link>
              </li>
              <li>
                <Link to="/properties/luxury-flat-for-sale-bashundhara" className="hover:text-white transition-colors">
                  EMPL Odhuna
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Advisories Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-white/50">
              Services & Advisory
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All 9 Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/service-buy" className="hover:text-white transition-colors">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link to="/service-sell" className="hover:text-white transition-colors">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link to="/service-develop" className="hover:text-white transition-colors">
                  Develop With Us
                </Link>
              </li>
              <li>
                <Link to="/service-exchange" className="hover:text-white transition-colors">
                  Exchange, Legal (RAJUK) & Acquisition
                </Link>
              </li>
            </ul>
          </div>

          {/* Leadership & Social Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-white/50">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/profile-zakir" className="hover:text-white transition-colors">
                  Md. Zakir Hossain (MD)
                </Link>
              </li>
              <li>
                <Link to="/profile-mahfuzur" className="hover:text-white transition-colors">
                  Sayed Mahfuzur Rahman
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-white/50 mb-3">
                Official Channel
              </h4>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 border border-white/20 hover:border-[#DA2328] text-xs font-medium text-white transition-colors"
              >
                <img src="/uploads/2024/04/Facebook.webp" alt="Facebook" className="w-4 h-4 object-contain" />
                <span>@shwapnobaribd</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DA2328]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#DA2328]" />
            <span>Copyright © Shwapno Bari Real Estate Ltd. • Dhaka, Bangladesh</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about-us" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

