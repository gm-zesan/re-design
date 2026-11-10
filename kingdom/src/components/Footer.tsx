import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { MEMBER_LOGOS, SITE_META } from '../data/siteData';
import { CONCERN_COMPANIES } from '../data/concernsData';

export function Footer() {
  return (
    <footer className="border-t border-[#1E1B5E]/20 bg-[#0E1122] text-white">
      {/* 1. Regulatory & Industry Membership Bar ("Member of") */}
      <div className="border-b border-white/10 bg-[#141831]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#E5C17B]" />
              <h2 className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E5C17B]">
                Member of &amp; Regulatory Affiliations
              </h2>
            </div>
            <p className="text-xs text-white/60">
              Registered &amp; affiliated across real estate, land, software &amp; public infrastructure bodies
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {MEMBER_LOGOS.map((member) => (
              <div
                key={member.id}
                title={`${member.fullName} — ${member.role}`}
                className="group flex flex-col items-center justify-between rounded-xl border border-white/10 bg-white p-3 text-center shadow-xs transition hover:-translate-y-0.5 hover:border-[#B8862D]"
              >
                <div className="flex h-12 w-full items-center justify-center">
                  <img
                    src={member.image}
                    alt={`${member.acronym} — ${member.fullName}`}
                    className="max-h-11 max-w-full object-contain"
                  />
                </div>
                <span className="mt-2 font-mono-tech text-[11px] font-semibold text-[#1E1B5E]">
                  {member.acronym}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main Architectural Footer Directory */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Identity (Logo without box background or border) */}
          <div>
            <img
              src={SITE_META.logoHeader}
              alt="KINGDOM GROUP"
              className="h-11 w-auto object-contain brightness-110 hue-rotate-180 invert"
            />
            <h3 className="mt-4 font-display text-lg font-semibold text-white">
              KINGDOM GROUP
            </h3>
            <p className="mt-1 font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#E5C17B]">
              {SITE_META.tagline}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/70">
              Incorporated in 2006 by Mohammed Nusrot Hossan. Diversified across real estate
              development, planned urban townships, heavy civil construction, stone crushing,
              trading, agriculture, automation, and social welfare.
            </p>
            <p className="mt-3 font-bengali text-xs text-[#F5DC9C]">
              {SITE_META.banglaMarquee}
            </p>
          </div>

          {/* Column 2: Sister Concerns */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E5C17B]">
              Our Concerns
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {CONCERN_COMPANIES.map((company) => (
                <li key={company.slug}>
                  <Link
                    to={company.route}
                    className="transition hover:text-[#E5C17B]"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/concerns"
                  className="text-xs font-semibold text-[#E5C17B] underline-offset-4 hover:underline"
                >
                  View All Concerns Directory →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E5C17B]">
              Corporate &amp; Portals
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <Link to="/about" className="transition hover:text-[#E5C17B]">
                  About KINGDOM GROUP
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition hover:text-[#E5C17B]">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/team" className="transition hover:text-[#E5C17B]">
                  KINGDOM Team Members
                </Link>
              </li>
              <li>
                <Link to="/notices" className="transition hover:text-[#E5C17B]">
                  General Notice
                </Link>
              </li>
              <li>
                <Link to="/career" className="transition hover:text-[#E5C17B]">
                  Job Circular
                </Link>
              </li>
              <li>
                <Link to="/career/apply" className="transition hover:text-[#E5C17B]">
                  CV Submission Form
                </Link>
              </li>
              <li>
                <Link to="/applications" className="transition hover:text-[#E5C17B]">
                  e-File System &amp; SCM
                </Link>
              </li>
              <li>
                <Link to="/login" className="transition hover:text-[#E5C17B]">
                  Admin Login (CTL_CMS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Control Unit */}
          <div>
            <h4 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#E5C17B]">
              Control Unit &amp; Offices
            </h4>
            <div className="mt-4 space-y-3 text-xs leading-relaxed text-white/80">
              <div>
                <p className="font-semibold text-white">Corporate Office (Mohakhali DOHS)</p>
                <p>House # 160, Road # 23, DOHS Mohakhali, Dhaka-1206, Bangladesh.</p>
                <p className="mt-0.5 text-white/60">
                  Booking / Reg.: House # 470, Road # 31, New DOHS Mohakhali
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Sales Office (Motijheel)</p>
                <p>1308-09/A, Sena Kalyan Bhaban, 195 Motijheel C/A, Dhaka-1000</p>
              </div>
              <div className="space-y-1 pt-1">
                <a
                  href={`tel:${SITE_META.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 font-medium text-white transition hover:text-[#E5C17B]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#E5C17B]" />
                  <span>24h Control: +88 01711-070777 / 01711-070744</span>
                </a>
                <a
                  href={`mailto:${SITE_META.primaryEmail}`}
                  className="flex items-center gap-2 transition hover:text-[#E5C17B]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#E5C17B]" />
                  <span>{SITE_META.primaryEmail} / {SITE_META.secondaryEmail}</span>
                </a>
                <a
                  href={SITE_META.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E5C17B] transition hover:underline"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Open on Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Copyright Bar */}
      <div className="border-t border-white/10 bg-[#090B17]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/65 sm:flex-row sm:px-6 lg:px-8">
          <p>{SITE_META.copyright}</p>
          <p>
            Design and Develop By{' '}
            <a
              href={SITE_META.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/85 underline-offset-4 transition hover:text-[#E5C17B] hover:underline"
            >
              {SITE_META.developerName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

