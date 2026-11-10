import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Coins,
  Scale,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Briefcase,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import siteData from '../data/siteData.json';
import propertiesSummary from '../data/propertiesSummary.json';
import ImageWithFallback from '../components/ImageWithFallback';
import { toInternalRoute } from '../utils/propertyHelpers';

const RESPONSIBILITY_PILLARS = [
  {
    key: 'valuation',
    title: 'Client Intake, Market Appraisal & Pricing',
    subtitle: 'Understanding requirements and benchmarking competitive Dhaka rents',
    Icon: TrendingUp,
    numbers: [1, 2, 3, 4, 11, 13, 28],
  },
  {
    key: 'marketing',
    title: 'Property Marketing, Inspections & Showings',
    subtitle: 'Targeted promotion, owner solicitation, and accompanied property tours',
    Icon: Building2,
    numbers: [6, 7, 8, 14, 15, 18, 21],
  },
  {
    key: 'contracts',
    title: 'Contracts, Compliance & Closings',
    subtitle: 'Lease documentation, title checks, escrow coordination, and closing',
    Icon: FileCheck2,
    numbers: [5, 9, 10, 12, 16],
  },
  {
    key: 'advisory',
    title: 'Financing, Advisory Network & Staging',
    subtitle: 'Eligibility review, mortgage options, legal/contractor referrals, and prep',
    Icon: Briefcase,
    numbers: [17, 22, 23, 24, 25, 29],
  },
  {
    key: 'stewardship',
    title: 'Property Maintenance, Research & Standards',
    subtitle: 'Premises upkeep, industry research, agent training, and dedicated leasing',
    Icon: Wrench,
    numbers: [19, 20, 26, 27, 30],
  },
];

function parseResponsibilities(blocks = []) {
  const byNumber = new Map();
  for (const blk of blocks) {
    const raw = (blk.text || '').trim();
    if (!raw || raw === '.') continue;
    const match = raw.match(/^(\d{1,2})\.\s*(.+)$/);
    if (match) {
      const num = Number(match[1]);
      let text = match[2].trim();
      if (!/[.!?]$/.test(text)) {
        text = `${text}.`;
      }
      byNumber.set(num, text);
    }
  }
  return byNumber;
}

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const { site } = siteData;
  const cf = site.contactAndFooter;
  const totalCount = propertiesSummary.length;

  useEffect(() => {
    let active = true;
    import('../data/infoPages.json')
      .then((mod) => {
        if (active) {
          setAboutData(mod.default['/about'] || null);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const { introParagraphs, areaInternalLinks, areaMapLinks, responsibilitiesMap } = useMemo(() => {
    const blocks = aboutData?.blocks || [];
    const intro = blocks.slice(0, 2).map((b) => b.text).filter(Boolean);
    const respMap = parseResponsibilities(blocks);
    const links = aboutData?.links || [];
    const internal = links.filter(
      (l) => l.href.includes('sharif.com.bd') || l.href.startsWith('/')
    );
    const maps = links.filter((l) => l.href.includes('google.com/maps'));
    return {
      introParagraphs: intro,
      areaInternalLinks: internal,
      areaMapLinks: maps,
      responsibilitiesMap: respMap,
    };
  }, [aboutData]);

  return (
    <div className="bg-canvas min-h-screen">
      {/* 1. Architectural Page Banner */}
      <section className="relative bg-brand-navyDeep text-white py-14 border-b border-brand-slate/40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/assets/header-bg.jpg')" }}
        />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/70 mb-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                About {cf.brandName}
              </h1>
              <p className="text-sm sm:text-base text-white/80 mt-2 max-w-2xl">
                {aboutData?.sectionHeading || 'Welcome To Sharif Properties'} &mdash; {cf.subtitle} in Gulshan, Banani, and Baridhara Diplomatic Zone.
              </p>
            </div>
            <div className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/90 font-medium bg-white/10 border border-white/20 px-4 py-2 rounded">
              Primary Contact: <strong className="text-white">{cf.contactPerson}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Two-Column Company Story + Architectural Photo + Key Facts */}
      <section className="py-14 bg-surface border-b border-hairline">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="pb-3 border-b border-hairline">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-magenta mb-1">
                {cf.brandName}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
                {aboutData?.sectionHeading || 'Welcome To Sharif Properties'}
              </h2>
            </div>

            {introParagraphs.length > 0 ? (
              <div className="space-y-4 text-sm sm:text-[15px] text-ink-muted leading-[1.8]">
                {introParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            ) : (
              <div className="space-y-3 animate-pulse">
                <div className="h-4 bg-panel rounded w-full" />
                <div className="h-4 bg-panel rounded w-5/6" />
              </div>
            )}

            {/* Architectural Factual Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-hairline rounded-md bg-canvas divide-x divide-y sm:divide-y-0 divide-hairline overflow-hidden pt-0">
              <div className="px-4 py-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">
                  {totalCount}
                </div>
                <div className="text-xs text-ink-muted font-medium mt-0.5">
                  Properties Managed
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">
                  {site.areas.length}
                </div>
                <div className="text-xs text-ink-muted font-medium mt-0.5">
                  Dhaka Locations
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">
                  30
                </div>
                <div className="text-xs text-ink-muted font-medium mt-0.5">
                  Client Responsibilities
                </div>
              </div>
              <div className="px-4 py-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">
                  11
                </div>
                <div className="text-xs text-ink-muted font-medium mt-0.5">
                  Management Services
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-canvas rounded-md border border-hairline p-2.5 shadow-soft">
              <div className="aspect-[4/3] rounded overflow-hidden">
                <ImageWithFallback
                  src="/assets/about-img.jpg"
                  alt="Sharif Properties Service Dhaka"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-3 pt-3 pb-1 flex items-center justify-between gap-3 text-xs text-ink-muted">
                <span className="inline-flex items-center gap-1.5 font-medium text-brand-navy">
                  <MapPin className="w-3.5 h-3.5 text-brand-magenta shrink-0" />
                  <span>Banani Block-L Leasing Desk, Dhaka 1213</span>
                </span>
                <Link
                  to="/contact"
                  className="font-semibold text-brand-royal hover:text-brand-magenta shrink-0"
                >
                  Contact Office &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Core Company Pillars & Fee Transparency */}
      <section className="py-14 bg-canvas border-b border-hairline">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="pb-4 mb-8 border-b border-hairline flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
                Client Charter &amp; Fee Transparency
              </h2>
              <p className="text-sm text-ink-muted mt-1">
                Standard brokerage policies, transparent fee structures, and regulatory compliance across Dhaka.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.aboutSection.map((block, index) => {
              const Icon = index === 0 ? ShieldCheck : index === 1 ? Coins : Scale;
              const topAccent =
                index === 1 ? 'border-t-brand-magenta' : 'border-t-brand-cobalt';
              return (
                <div
                  key={block.heading}
                  className={`bg-surface rounded-md border border-hairline border-t-4 ${topAccent} p-6 space-y-3`}
                >
                  <div className="flex items-center gap-2.5 pb-2 border-b border-hairline">
                    <Icon
                      className={`w-5 h-5 ${
                        index === 1 ? 'text-brand-magenta' : 'text-brand-cobalt'
                      }`}
                    />
                    <h3 className="font-serif text-xl font-bold capitalize text-brand-navy">
                      {block.heading}
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm text-ink-muted leading-relaxed">
                    {block.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Prime Diplomatic & Furnished Rental Coverage (Original Links + Maps) */}
      {(areaInternalLinks.length > 0 || areaMapLinks.length > 0) && (
        <section className="py-14 bg-surface border-b border-hairline">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
            <div className="pb-4 mb-8 border-b border-hairline">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
                Diplomatic &amp; Furnished Apartment Coverage
              </h2>
              <p className="text-sm text-ink-muted mt-1">
                It is our great pleasure providing furnished apartments for rent in Gulshan, Banani, and Baridhara Diplomatic Zone.
              </p>
            </div>

            {areaInternalLinks.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {areaInternalLinks.map((lnk) => (
                  <Link
                    key={lnk.href}
                    to={toInternalRoute(lnk.href)}
                    className="group flex items-center justify-between gap-3 p-4 rounded-md border border-hairline bg-canvas hover:border-brand-cobalt hover:bg-panel transition-colors"
                  >
                    <div className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-magenta">
                        Featured Zone
                      </span>
                      <span className="block text-sm font-semibold text-brand-navy group-hover:text-brand-royal capitalize mt-0.5">
                        {lnk.text}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-cobalt shrink-0" />
                  </Link>
                ))}
              </div>
            )}

            {areaMapLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted mr-1">
                  Google Maps Coverage:
                </span>
                {areaMapLinks.map((mp) => (
                  <a
                    key={mp.href}
                    href={mp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-canvas border border-hairline text-xs font-medium text-brand-royal hover:border-brand-cobalt transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-brand-magenta shrink-0" />
                    <span className="capitalize">{mp.text}</span>
                    <ExternalLink className="w-3 h-3 opacity-70 shrink-0" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. ShariF's 30 Real Estate Agent Responsibilities (5 Categorized Pillars) */}
      <section className="py-14 bg-canvas">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="pb-4 mb-8 border-b border-hairline flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-magenta mb-1">
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>Brokerage Operating Standards</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
                ShariF&apos;s Real Estate Agent Responsibilities in Dhaka
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted max-w-md">
              All 30 client representation, valuation, legal compliance, and premises stewardship duties structured by function.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {RESPONSIBILITY_PILLARS.map((pillar, pIdx) => {
              const Icon = pillar.Icon;
              const isLastFull = pIdx === RESPONSIBILITY_PILLARS.length - 1;
              return (
                <div
                  key={pillar.key}
                  className={`bg-surface rounded-md border border-hairline p-6 sm:p-7 ${
                    isLastFull ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-3 pb-4 mb-4 border-b border-hairline">
                    <div className="w-9 h-9 rounded bg-brand-blueTint text-brand-cobalt flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-navy leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-ink-muted mt-0.5">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <ul
                    className={`grid gap-3 ${
                      isLastFull ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
                    }`}
                  >
                    {pillar.numbers.map((num) => {
                      const text = responsibilitiesMap.get(num);
                      if (!text) return null;
                      return (
                        <li
                          key={num}
                          className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed bg-canvas/60 border border-hairline/80 rounded px-3.5 py-2.5"
                        >
                          <span className="inline-flex items-center justify-center min-w-[26px] h-[22px] rounded bg-brand-navy text-white text-[11px] font-bold tabular-nums shrink-0 mt-0.5">
                            {String(num).padStart(2, '0')}
                          </span>
                          <span>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Banani Office Direct Consultation Strip */}
      <section className="pb-16 bg-canvas">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="bg-brand-navyDeep text-white rounded-md p-6 sm:p-10 border border-brand-slate/40 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.16em] text-brand-magenta font-semibold">
                Visit or Speak With Our Team
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Partner With {cf.brandName} in Dhaka
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {cf.addressLines.join(', ')} &mdash; Speak directly with{' '}
                <strong className="text-white">{cf.contactPerson}</strong> for residential apartments, diplomatic villas, corporate office spaces, warehouses, or facility management.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${cf.phones[0]}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold tabular-nums transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-magenta" />
                <span>{cf.phones[0]}</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=8801636333333&text=Hello%20Sharif%20Properties"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-brand-magenta hover:bg-brand-magentaDark text-white text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-brand-cobalt hover:bg-brand-royal text-white text-sm font-semibold transition-colors"
              >
                <span>Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

