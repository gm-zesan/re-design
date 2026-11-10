import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ShieldCheck,
  KeyRound,
  ClipboardCheck,
  UserCheck,
  LogOut,
  Coins,
  Scale,
  Wrench,
} from 'lucide-react';
import siteData from '../data/siteData.json';
import propertiesSummary from '../data/propertiesSummary.json';
import SearchConsole from '../components/SearchConsole';
import PropertyCard from '../components/PropertyCard';
import ContactSection from '../components/ContactSection';
import ImageWithFallback from '../components/ImageWithFallback';
import { toInternalRoute } from '../utils/propertyHelpers';

const FURNISHED_TABS = ['Gulshan', 'Banani', 'Baridhara', 'Niketon', 'Uttara', 'Bashundhara'];
const COMMERCIAL_TABS = ['Gulshan', 'Banani', 'Mohakhali', 'Tejgaon', 'Progoti Sarani', 'Uttara'];

const SERVICE_CAPABILITIES = [
  'Agency / Brokerage :- Sales/Buy/Rent – Land, House, Industrial Land, Factory',
  'Individual & Corporate Solutions (Rent)',
  'Property Management Services',
  'Interior decoration for Residential / Commercial',
  'Property Marketing',
  'Tenant Representation for Buy / Rent',
  'Landlord Leasing Representation - Short term or long term',
  'Valuation and Advisory Services',
  'Corporate Solution',
  'All kind of Service Apartment for Living facilities if any support require such as Carpenter, Repairer, Gas, Current, Air condition mechanic etc.',
  'Residential or Commercial packing & shifting.',
];

const PORTFOLIO_CATEGORIES = [
  { label: 'Residential', count: 240, to: '/property-type/residential' },
  { label: 'Furnished Apt', count: 127, to: '/property-type/residential/furnished-apartment-for-rent-in-dhaka' },
  { label: 'Apartments', count: 76, to: '/property-type/residential/apartment' },
  { label: 'Service Apt', count: 22, to: '/property-type/residential/service-apartment-in-dhaka' },
  { label: 'Houses', count: 15, to: '/property-type/residential/independent-house' },
  { label: 'Commercial', count: 125, to: '/property-type/commercial' },
  { label: 'Office Space', count: 106, to: '/property-type/commercial/office-space-for-rent-in-dhaka' },
  { label: 'Warehouses', count: 14, to: '/property-type/commercial/warehouse' },
  { label: 'Factories', count: 5, to: '/property-type/commercial/factory' },
];

const LIFECYCLE_ICONS = [Coins, ClipboardCheck, UserCheck, KeyRound, LogOut];

export default function HomePage() {
  const [furnishedTab, setFurnishedTab] = useState('Gulshan');
  const [commercialTab, setCommercialTab] = useState('Gulshan');
  const [heroFeaturedIdx, setHeroFeaturedIdx] = useState(0);

  const { site } = siteData;

  const totalCount = propertiesSummary.length;
  const availableCount = useMemo(
    () => propertiesSummary.filter((p) => !p.isRented).length,
    []
  );

  const heroFeaturedListings = useMemo(() => {
    const priorityOrder = ['S10437', 'S10433', 'S10438', 'S10439', 'S10435'];
    const availableTop = propertiesSummary.filter(
      (p) => p.homepagePlacements.isTopRated && !p.isRented
    );
    const ordered = [...availableTop].sort((a, b) => {
      const ia = priorityOrder.indexOf(a.cardNo);
      const ib = priorityOrder.indexOf(b.cardNo);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
    return ordered.length > 0 ? ordered : propertiesSummary.slice(0, 5);
  }, []);

  const heroFeatured = heroFeaturedListings[heroFeaturedIdx % heroFeaturedListings.length];

  const furnishedListings = useMemo(() => {
    const exact = propertiesSummary.filter((p) =>
      p.homepagePlacements.furnishedTabs.includes(furnishedTab)
    );
    if (exact.length > 0) return exact.slice(0, 6);
    return propertiesSummary
      .filter(
        (p) =>
          p.category === 'Residential' &&
          p.area.toLowerCase().includes(furnishedTab.toLowerCase())
      )
      .slice(0, 6);
  }, [furnishedTab]);

  const commercialListings = useMemo(() => {
    const exact = propertiesSummary.filter((p) =>
      p.homepagePlacements.commercialTabs.includes(commercialTab)
    );
    if (exact.length > 0) return exact.slice(0, 6);
    return propertiesSummary
      .filter(
        (p) =>
          p.category === 'Commercial' &&
          p.area.toLowerCase().includes(commercialTab.toLowerCase())
      )
      .slice(0, 6);
  }, [commercialTab]);

  const topRatedListings = useMemo(
    () => propertiesSummary.filter((p) => p.homepagePlacements.isTopRated),
    []
  );

  const areaShowcase = useMemo(() => {
    const map = new Map();
    for (const p of propertiesSummary) {
      const a = p.homepagePlacements.cityShowcaseArea;
      if (a && !map.has(a)) {
        map.set(a, p);
      }
    }
    return Array.from(map.entries())
      .map(([areaName, property]) => {
        const matchedAreaObj = site.areas.find(
          (ar) => ar.label.toLowerCase() === areaName.toLowerCase()
        );
        const totalInArea = propertiesSummary.filter(
          (item) => item.area.toLowerCase() === areaName.toLowerCase()
        ).length;
        return {
          areaName,
          areaId: matchedAreaObj?.value || '',
          property,
          totalInArea,
        };
      })
      .sort((a, b) => a.areaName.localeCompare(b.areaName));
  }, [site.areas]);

  return (
    <div className="bg-canvas text-ink overflow-x-clip">
      {/* 1. ARCHITECTURAL BROKERAGE HERO — ASYMMETRIC SPLIT & FEATURED RESIDENCE */}
      <section className="relative bg-brand-navyDeep text-white overflow-hidden border-b border-brand-slate/30">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/service-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navyDeep via-brand-navyDeep/90 to-brand-navyDeep/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDeep via-transparent to-brand-navyDeep/40" />

        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pt-16 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Editorial Narrative Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center border-l-2 border-brand-magenta pl-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
                Gulshan &bull; Banani &bull; Baridhara Diplomatic Zone &bull; Dhaka
              </div>

              <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-[-0.015em] leading-[1.06] text-white">
                {site.heroHeading}
              </h1>

              <p className="mt-5 text-sm sm:text-base lg:text-[17px] text-white/80 leading-relaxed max-w-xl">
                Diplomatic residences, <strong className="text-white font-semibold">service apartment Dhaka</strong> suites, corporate headquarters, commercial buildings, and industrial facilities across Dhaka&apos;s prime enclaves.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5">
                <Link
                  to="/rent"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-brand-magenta hover:bg-brand-magentaDark text-white text-sm font-semibold transition-colors"
                >
                  <span>Browse All {totalCount} Properties</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-white/25 hover:border-white/60 bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-semibold transition-colors"
                >
                  <span>Schedule a Viewing</span>
                </Link>
              </div>

              {/* Clean Architectural Metric Row */}
              <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-3 gap-6 max-w-lg tabular-nums">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                    {totalCount}
                  </div>
                  <div className="text-xs text-white/65 mt-0.5">Verified Properties</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                    {availableCount}
                  </div>
                  <div className="text-xs text-white/65 mt-0.5">Available Now</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                    20
                  </div>
                  <div className="text-xs text-white/65 mt-0.5">Dhaka Locations</div>
                </div>
              </div>
            </div>

            {/* Right Framed Featured Property Showcase Card */}
            {heroFeatured && (
              <div className="lg:col-span-5">
                <div className="bg-surface text-ink rounded-md border border-white/20 shadow-elevated overflow-hidden">
                  <div className="relative aspect-[16/10] bg-panel overflow-hidden group">
                    <Link to={`/dhaka/${heroFeatured.slug}`} className="block w-full h-full">
                      <ImageWithFallback
                        key={heroFeatured.slug}
                        src={heroFeatured.thumbnail}
                        fallbackSrc="/assets/service-bg.jpg"
                        alt={heroFeatured.title}
                        loading="eager"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </Link>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-brand-navyDeep/90 text-white text-[10px] font-semibold uppercase tracking-[0.14em] tabular-nums">
                      Featured &bull; {heroFeatured.cardNo}
                    </div>

                    {heroFeaturedListings.length > 1 && (
                      <div className="absolute top-3 right-3 inline-flex items-center rounded-sm bg-brand-navyDeep/90 border border-white/15 text-white overflow-hidden">
                        <button
                          type="button"
                          onClick={() =>
                            setHeroFeaturedIdx(
                              (prev) =>
                                (prev - 1 + heroFeaturedListings.length) %
                                heroFeaturedListings.length
                            )
                          }
                          aria-label="Previous Featured Property"
                          className="p-1.5 hover:bg-white/15 transition-colors"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-1.5 text-[10px] font-semibold tabular-nums border-x border-white/15">
                          {(heroFeaturedIdx % heroFeaturedListings.length) + 1}/{heroFeaturedListings.length}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setHeroFeaturedIdx(
                              (prev) => (prev + 1) % heroFeaturedListings.length
                            )
                          }
                          aria-label="Next Featured Property"
                          className="p-1.5 hover:bg-white/15 transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="p-5 sm:p-6 bg-surface">
                    <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand-magenta">
                      <span className="inline-flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{heroFeatured.area}</span>
                      </span>
                      <span className="text-ink-subtle font-medium shrink-0">
                        {heroFeatured.isRented ? 'Rented' : 'Available'}
                      </span>
                    </div>

                    <Link
                      to={`/dhaka/${heroFeatured.slug}`}
                      className="block mt-1.5 font-serif text-2xl font-semibold text-brand-navy hover:text-brand-royal leading-snug line-clamp-1 transition-colors"
                    >
                      {heroFeatured.title}
                    </Link>

                    <div className="mt-4 pt-3.5 border-t border-hairline flex items-end justify-between gap-3">
                      <div>
                        <div className="font-serif text-2xl font-bold text-brand-navy tabular-nums leading-none">
                          {heroFeatured.formattedPrice}
                          <span className="font-sans text-xs font-normal text-ink-muted ml-1">
                            / month
                          </span>
                        </div>
                        <div className="text-xs text-ink-muted mt-1.5 tabular-nums">
                          {heroFeatured.sqftNumeric
                            ? `${heroFeatured.sqftNumeric.toLocaleString()} SqFt`
                            : null}
                          {heroFeatured.sqftNumeric && heroFeatured.bedsNumeric ? '  \u2022  ' : ''}
                          {heroFeatured.bedsNumeric ? `${heroFeatured.bedsNumeric} Bedrooms` : null}
                        </div>
                      </div>

                      <Link
                        to={`/dhaka/${heroFeatured.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-brand-blueTint hover:bg-brand-cobalt text-brand-navy hover:text-white text-xs font-semibold transition-colors shrink-0"
                      >
                        <span>Inspect</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Docked Property Search Console */}
      <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 -mt-12 mb-10">
        <SearchConsole />
      </div>

      {/* Architectural Portfolio Index Strip (All 9 Core Categories) */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 pb-14">
        <div className="bg-surface rounded-md border border-hairline grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 divide-x divide-y lg:divide-y-0 divide-hairline">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <Link
              key={cat.to}
              to={cat.to}
              className="group px-3 py-3.5 text-center hover:bg-panel transition-colors"
            >
              <div className="font-serif text-lg sm:text-xl font-bold text-brand-navy group-hover:text-brand-royal tabular-nums">
                {cat.count}
              </div>
              <div className="text-[11px] font-medium text-ink-muted group-hover:text-brand-navy mt-0.5 truncate">
                {cat.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. FURNISHED APARTMENT DHAKA (TABBED SHOWCASE) */}
      <section id="property" className="py-14 bg-surface border-y border-hairline">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 mb-8 border-b border-hairline">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
                Furnished Apartment Dhaka
              </h2>
              <p className="text-sm text-ink-muted mt-1">
                Ready-to-move-in diplomatic suites and serviced residences across prime Dhaka neighborhoods.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              {FURNISHED_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFurnishedTab(tab)}
                  className={`px-3 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${furnishedTab === tab
                    ? 'border-brand-magenta text-brand-navy'
                    : 'border-transparent text-ink-muted hover:text-brand-cobalt'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {furnishedListings.map((prop) => (
              <PropertyCard key={prop.slug} property={prop} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/property-type/residential/furnished-apartment-for-rent-in-dhaka"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded border border-brand-cobalt text-brand-navy hover:bg-brand-cobalt hover:text-white text-sm font-semibold transition-colors"
            >
              <span>Explore All 127 Furnished Apartments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. COMMERCIAL BUILDING DHAKA (TABBED SHOWCASE) */}
      <section className="py-16 bg-canvas">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 mb-8 border-b border-hairline">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
                Commercial Building Dhaka
              </h2>
              <p className="text-sm text-ink-muted mt-1">
                Corporate office floors, full commercial buildings, warehouses, and industrial estates.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              {COMMERCIAL_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setCommercialTab(tab)}
                  className={`px-3 py-2 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${commercialTab === tab
                    ? 'border-brand-magenta text-brand-navy'
                    : 'border-transparent text-ink-muted hover:text-brand-cobalt'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialListings.map((prop) => (
              <PropertyCard key={prop.slug} property={prop} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/property-type/commercial"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-brand-navy hover:bg-brand-cobalt text-white text-sm font-semibold transition-colors"
            >
              <Building2 className="w-4 h-4" />
              <span>View All 125 Commercial Spaces</span>
            </Link>
            <Link
              to="/property-type/commercial/office-space-for-rent-in-dhaka"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-hairline bg-surface hover:border-brand-cobalt text-ink text-sm font-semibold transition-colors"
            >
              <span>Office Spaces (106)</span>
            </Link>
            <Link
              to="/property-type/commercial/warehouse"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-hairline bg-surface hover:border-brand-cobalt text-ink text-sm font-semibold transition-colors"
            >
              <span>Warehouses (14)</span>
            </Link>
            <Link
              to="/property-type/commercial/factory"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-hairline bg-surface hover:border-brand-cobalt text-ink text-sm font-semibold transition-colors"
            >
              <span>Factories (5)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES & 5-STAGE PROPERTY MANAGEMENT LIFECYCLE */}
      <section className="relative py-20 bg-brand-navyDeep text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/assets/service-bg.jpg')" }}
        />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 mb-12 border-b border-white/15">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Our Services
              </h2>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                We provide Real Estate Solutions for corporate and individual clients. Over the years, we have thoughtfully and purposefully expanded our full-service menu.
              </p>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed border-l-2 border-brand-magenta pl-3.5">
                <strong className="text-white font-semibold">service Apartment Dhaka</strong> — Your Dream Luxury Rental Apartment Rent in Dhaka for residential furnished apartment rent Banani, the Baridhara Diplomatic Zone for foreigners, our Gulshan area for furnished apartments &amp; furnished apartments for rent in Baridhara.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/service-apartments-dhaka"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-magenta hover:bg-brand-magentaDark text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Full Services Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/facility-management-dhaka"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Wrench className="w-4 h-4 text-brand-magenta" />
                  <span>Facility Management</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/[0.04] border border-white/15 rounded-md p-6">
              <h3 className="font-serif text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">
                Full-Service Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/85">
                {SERVICE_CAPABILITIES.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-magenta shrink-0 mt-0.5" />
                    <span className="leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5 Property Management Lifecycle Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {site.servicesSection.items.map((svc, idx) => {
              const Icon = LIFECYCLE_ICONS[idx % LIFECYCLE_ICONS.length];
              const rawBullets = svc.body
                .split('•')
                .map((segment) => segment.replace(/\s*\n\s*/g, ' ').trim())
                .filter(Boolean);

              let bullets = rawBullets;
              let coverageNote = '';
              if (svc.title === 'Tenant Move Out' && bullets.length > 0) {
                const last = bullets[bullets.length - 1];
                const marker = 'Put the property back on the market for rent';
                if (last.startsWith(marker) && last.length > marker.length) {
                  bullets = [...bullets.slice(0, -1), marker];
                  coverageNote = last.slice(marker.length).trim();
                }
              }

              return (
                <div
                  key={svc.title}
                  className="bg-white/[0.05] hover:bg-white/[0.08] border border-white/15 rounded-md p-5 flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-brand-magenta shrink-0" />
                        <span className="text-xs font-bold tracking-widest text-white/60 tabular-nums">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-3">
                      {svc.title}
                    </h3>
                    <ul className="space-y-2 text-xs text-white/80 leading-relaxed">
                      {bullets.map((line, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-brand-magenta mt-0.5 shrink-0">&bull;</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {coverageNote && (
                    <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-white/60 leading-snug">
                      {coverageNote}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR TOP RATED PROPERTIES */}
      <section className="py-16 bg-surface border-b border-hairline">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-8 border-b border-hairline">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
                Our Top Rated Properties
              </h2>
              <p className="text-sm text-ink-muted mt-1">
                Featured residential and diplomatic listings curated across Gulshan, Niketon, Baridhara, and Mirpur DOHS.
              </p>
            </div>
            <Link
              to="/rent"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-royal hover:text-brand-magenta transition-colors"
            >
              <span>See Complete Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedListings.map((prop) => (
              <PropertyCard key={prop.slug} property={prop} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXPLORE BY NEIGHBORHOOD SHOWCASE (19 LOCATIONS) */}
      <section className="py-16 bg-canvas">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="pb-4 mb-8 border-b border-hairline flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
                Explore Properties by Neighborhood
              </h2>
              <p className="text-sm sm:text-base text-ink-muted mt-1">
                Representative properties across 19 zones in Dhaka and Khulshi Chattogram.
              </p>
            </div>
            <Link
              to="/rent"
              className="text-sm font-semibold text-brand-royal hover:text-brand-magenta transition-colors"
            >
              All 20 Filter Areas &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {areaShowcase.map(({ areaName, areaId, property, totalInArea }) => (
              <div
                key={areaName}
                className="group relative rounded-md overflow-hidden border border-hairline bg-brand-navyDeep aspect-[4/3] shadow-soft hover:shadow-elevated transition-all"
              >
                <ImageWithFallback
                  src={property.thumbnail}
                  alt={`${areaName} Featured Property`}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDeep/95 via-brand-navyDeep/35 to-transparent" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-block px-2 py-0.5 rounded-sm bg-brand-navyDeep/90 text-[10px] font-semibold text-white uppercase tracking-wider tabular-nums">
                    {totalInArea} {totalInArea === 1 ? 'listing' : 'listings'}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <div className="flex items-center gap-1.5 text-white/80 text-[11px] font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-brand-magenta" />
                    <span>{areaName}</span>
                  </div>
                  <Link
                    to={`/dhaka/${property.slug}`}
                    className="block mt-1 font-serif text-lg font-semibold leading-snug text-white hover:text-white/90 line-clamp-1"
                  >
                    {property.title}
                  </Link>
                  <div className="mt-2 pt-2 border-t border-white/15 flex items-center justify-between gap-2 text-xs">
                    <Link
                      to={`/dhaka/${property.slug}`}
                      className="text-white/80 hover:text-white underline underline-offset-2 tabular-nums"
                    >
                      Card {property.cardNo}
                    </Link>
                    {areaId && (
                      <Link
                        to={`/searchResult?area=${areaId}`}
                        className="text-white font-semibold hover:text-brand-magenta transition-colors"
                      >
                        Browse Area &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ABOUT / FEE TRANSPARENCY / LEGAL NOTICE */}
      <section id="about" className="scroll-mt-28 py-16 sm:py-24 bg-surface border-t border-hairline">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          {/* Editorial Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-10 border-b border-hairline">
            <div>
              <div className="inline-flex items-center border-l-2 border-brand-magenta pl-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cobalt">
                Brokerage Charter &amp; Fee Transparency
              </div>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-navy leading-tight">
                About Sharif Properties Service
              </h2>
            </div>
            <Link
              to={toInternalRoute('/about')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-royal hover:text-brand-magenta transition-colors shrink-0"
            >
              <span>Full Company Profile &amp; 30-Point Charter</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Editorial Visual + Fee Summary Dossier */}
            <div className="lg:col-span-5 flex flex-col rounded-md overflow-hidden border border-hairline bg-brand-navyDeep text-white shadow-soft">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:flex-1 lg:min-h-[280px] overflow-hidden">
                <img
                  src="/assets/about-img.jpg"
                  alt="Sharif Properties Service Dhaka"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDeep via-brand-navyDeep/35 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-magenta font-semibold">
                    Sharif Properties Service
                  </div>
                  <p className="font-serif text-2xl sm:text-[26px] font-bold text-white leading-snug mt-0.5">
                    Home Management Dhaka
                  </p>
                  <p className="text-xs text-white/75 mt-1">
                    {site.contactAndFooter.addressLines.join(' \u2022 ')}
                  </p>
                </div>
              </div>

              {/* Architectural Fee Benchmarks Strip */}
              <div className="p-5 sm:p-6 bg-brand-navyDeep border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  <span>Standard Fee Benchmarks</span>
                  <span className="text-brand-magenta tabular-nums">Dhaka Portfolio</span>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-1 tabular-nums">
                  <div className="border-l-2 border-brand-magenta pl-3">
                    <div className="font-serif text-2xl font-bold text-white leading-none">
                      20%
                    </div>
                    <div className="text-[11px] text-white/65 mt-1.5 leading-snug">
                      Commercial / Residential
                    </div>
                  </div>
                  <div className="border-l border-white/15 pl-3">
                    <div className="font-serif text-2xl font-bold text-white leading-none">
                      5%
                    </div>
                    <div className="text-[11px] text-white/65 mt-1.5 leading-snug">
                      Min. Apartment Income
                    </div>
                  </div>
                  <div className="border-l border-white/15 pl-3">
                    <div className="font-serif text-2xl font-bold text-white leading-none">
                      10,000/=
                    </div>
                    <div className="text-[11px] text-white/65 mt-1.5 leading-snug">
                      Min. Monthly Mgmt Charge
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Asymmetric Charter & Verbatim Terms Column */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                {site.aboutSection.map((block, index) => {
                  const Icon = index === 0 ? ShieldCheck : index === 1 ? Coins : Scale;
                  const numLabel = `0${index + 1}`;
                  const isFeeSchedule = index === 1;

                  return (
                    <div
                      key={block.heading}
                      className={`rounded-md border border-hairline p-5 sm:p-6 transition-colors ${index === 0
                          ? 'bg-canvas border-l-4 border-l-brand-magenta'
                          : isFeeSchedule
                            ? 'bg-panel/60 border-l-4 border-l-brand-cobalt'
                            : 'bg-canvas'
                        }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded bg-brand-blueTint text-brand-cobalt flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold capitalize text-brand-navy">
                            {block.heading}
                          </h3>
                        </div>
                        <span className="text-xs font-bold tracking-widest text-ink-subtle tabular-nums">
                          {numLabel}
                        </span>
                      </div>

                      {isFeeSchedule ? (
                        <div className="grid grid-cols-1 gap-2.5 mt-3">
                          {block.paragraphs.map((p, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 px-3.5 py-2.5 rounded bg-surface border border-hairline text-sm text-ink leading-relaxed"
                            >
                              <span className="mt-0.5 inline-flex items-center justify-center min-w-[22px] h-[22px] rounded bg-brand-blueTint text-brand-cobalt text-[11px] font-bold tabular-nums shrink-0">
                                {idx + 1}
                              </span>
                              <p className="text-ink-muted">{p}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div
                          className={`space-y-2 leading-relaxed ${index === 0
                              ? 'text-sm sm:text-[15px] text-ink font-normal'
                              : 'text-sm text-ink-muted'
                            }`}
                        >
                          {block.paragraphs.map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dual Action Footer */}
              <div className="pt-2 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={toInternalRoute('/about')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-brand-navy hover:bg-brand-cobalt text-white text-sm font-semibold transition-colors"
                  >
                    <span>Read Full About Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/service-apartments-dhaka"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-hairline bg-surface hover:border-brand-cobalt text-ink text-sm font-semibold transition-colors"
                  >
                    <span>Explore Our Services</span>
                  </Link>
                </div>

                <Link
                  to="/contact"
                  className="text-xs font-semibold text-brand-royal hover:text-brand-magenta transition-colors"
                >
                  Schedule Owner Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT & CONSULTATION */}
      <ContactSection />
    </div>
  );
}
