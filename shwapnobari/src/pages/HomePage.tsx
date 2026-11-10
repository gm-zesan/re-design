import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Play, X, MapPin } from 'lucide-react';
import {
  ABOUT_CONTENT,
  COMPANY,
  HOME_STATUS_CARDS,
  SERVING_AREAS,
} from '../data/company';
import { PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/common/PropertyCard';
import { CoreValuesSection } from '../components/common/CoreValuesSection';
import { DhakaMap } from '../components/common/DhakaMap';

export function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const featuredProperties = PROPERTIES.filter((p) => p.featuredOnHome);
  const counts = {
    Available: PROPERTIES.filter((p) => p.status === 'Available').length,
    Upcoming: PROPERTIES.filter((p) => p.status === 'Upcoming').length,
    Sold: PROPERTIES.filter((p) => p.status === 'Sold').length,
  };

  return (
    <>
      {/* 1. HERO BANNER — Brand Promise, Buy / Sell / Develop Actions & Trust Strip */}
      <section className="relative min-h-[78vh] flex items-center bg-[#0C0C0C] text-white overflow-hidden">
        <img
          src={COMPANY.assets.heroFallback}
          alt="Shwapno Bari Real Estate Architectural Horizon"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/75 to-[#0C0C0C]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-20 sm:py-28 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] font-semibold uppercase tracking-[0.22em] text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-[#DA2328]" />
              <span>Shwapno Bari Real Estate Ltd. • Est. {COMPANY.establishedYear}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-white uppercase">
              A Reliable Platform of Property Solution
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Curated luxury apartments, residential developments, and legally vetted secondary real estate across
              Gulshan, Banani, Bashundhara R/A, Dhanmondi, Mohammadpur, and Banasree.
            </p>

            {/* Primary Buy / Sell / Develop Pill Trio + Film Trigger */}
            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/service-buy"
                className="px-7 py-3.5 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors inline-flex items-center gap-2"
              >
                <span>Buy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/service-sell"
                className="px-7 py-3.5 bg-white text-[#111418] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
              >
                Sell
              </Link>
              <Link
                to="/service-develop"
                className="px-7 py-3.5 bg-transparent border border-white/40 hover:border-white text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
              >
                Develop
              </Link>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 ml-0 sm:ml-3 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 hover:text-white cursor-pointer group"
              >
                <span className="w-9 h-9 rounded-full border border-white/40 group-hover:border-[#DA2328] group-hover:bg-[#DA2328] flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Brand Showcase Film</span>
              </button>
            </div>
          </div>

          {/* Grounded Inventory Metric Ribbon */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-semibold text-white tabular-nums">Since 2016</p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/60 mt-1">Banani Head Office</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-semibold text-white tabular-nums">
                {counts.Available} Ready
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/60 mt-1">Available Residences</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-semibold text-white tabular-nums">
                {PROPERTIES.length} Dossiers
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/60 mt-1">Portfolio Records</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-semibold text-white">REAAB &amp; Rotary</p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/60 mt-1">Verified Standing</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVING AREA — Up-Front Dhaka Location Selection */}
      <section className="relative py-16 sm:py-20 bg-[#FAFAF8] dark:bg-[#12161C] border-b border-[#E5E2DC] dark:border-[#242A34] overflow-hidden transition-colors duration-200">
        <img
          src={COMPANY.assets.mapSectionBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-45 dark:opacity-10 dark:invert pointer-events-none"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">
                Dhaka Coverage Zones
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                Serving Area
              </h2>
            </div>
            <div className="flex flex-col sm:items-end gap-2">
              <p className="text-sm text-[#5E646C] dark:text-[#A4A8AE] max-w-md sm:text-right">
                Select a Dhaka neighborhood below to browse active listings and local advisory coverage.
              </p>
              <a
                href="#explore-map"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#DA2328] hover:underline"
              >
                <span>View All Pins on Map</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVING_AREAS.map((area) => (
              <Link
                key={area.name}
                to={`/properties-list?location=${area.locationParam}`}
                className="group bg-white/95 dark:bg-[#171C24]/95 border border-[#E5E2DC] dark:border-[#242A34] hover:border-[#DA2328] dark:hover:border-[#DA2328] p-5 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <MapPin className="w-4 h-4 text-[#DA2328]" />
                  <ArrowRight className="w-3.5 h-3.5 text-[#5E646C] dark:text-[#A4A8AE] group-hover:text-[#DA2328] group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#111418] dark:text-[#F5F3EE] group-hover:text-[#DA2328] transition-colors">
                  {area.name}
                </h3>
                <p className="text-xs text-[#5E646C] dark:text-[#A4A8AE] mt-1">{area.zone}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LATEST PROPERTIES SHOWCASE — Directly Following Serving Area */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#0D1014] border-b border-[#E5E2DC] dark:border-[#242A34] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">
                Curated Dhaka Residences
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                Latest Properties
              </h2>
            </div>
            <Link
              to="/properties-list"
              className="px-6 py-3 bg-[#0C0C0C] dark:bg-[#DA2328] hover:bg-[#DA2328] dark:hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors inline-flex items-center gap-2 self-start"
            >
              <span>All Properties ({PROPERTIES.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.refId} property={property} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORK WITH US — Mid-Page Developer Partnership Break Over Panorama Background */}
      <section className="relative overflow-hidden bg-[#000C18] text-white py-20 sm:py-24">
        <img
          src={COMPANY.assets.expertBanner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C18]/95 via-[#000C18]/82 to-[#000C18]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C18]/80 via-transparent to-[#000C18]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">
              Developer Collaborations
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white">Work With Us</h2>
            <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">{ABOUT_CONTENT.workWithUs}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact-us"
              className="px-7 py-3.5 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
            >
              Contact Now
            </Link>
            <Link
              to="/service-develop"
              className="px-7 py-3.5 border border-white/35 hover:border-white bg-black/25 backdrop-blur-xs text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
            >
              Developer Program
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BROWSE BY AVAILABILITY — Actionable Inventory Stages */}
      <section className="py-20 sm:py-24 bg-[#FAFAF8] dark:bg-[#12161C] border-b border-[#E5E2DC] dark:border-[#242A34] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">
                Portfolio Stages
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                Browse by Availability
              </h2>
            </div>
            <Link
              to="/properties-list"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328] transition-colors"
            >
              <span>Browse Full Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOME_STATUS_CARDS.map((card) => (
              <div
                key={card.state}
                className="bg-white dark:bg-[#171C24] border border-[#E5E2DC] dark:border-[#242A34] p-7 sm:p-8 flex flex-col justify-between hover:border-[#0C0C0C]/40 dark:hover:border-[#DA2328]/60 transition-colors shadow-[0_2px_12px_rgba(12,12,12,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-[#FAFAF8] dark:bg-[#1E242E] border border-[#E5E2DC] dark:border-[#2C333F] flex items-center justify-center p-2.5">
                      <img src={card.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 bg-[#F2EFE9] dark:bg-[#222834] text-[#111418] dark:text-[#EAE7E1] tabular-nums">
                      {counts[card.state]} {counts[card.state] === 1 ? 'Listing' : 'Listings'}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#5E646C] dark:text-[#A4A8AE] leading-relaxed">{card.description}</p>
                </div>

                <Link
                  to={card.to}
                  className="mt-7 pt-5 border-t border-[#F2EFE9] dark:border-[#242A34] inline-flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328] transition-colors"
                >
                  <span>{card.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CORE VALUES — Institutional Trust & Guiding Principles */}
      <CoreValuesSection />

      {/* 7. EXPLORE THE MAP — Interactive Dhaka Geographic Closing Band */}
      <section
        id="explore-map"
        className="scroll-mt-24 py-20 sm:py-24 bg-white dark:bg-[#0D1014] transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">
                Geographic Presence
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                Explore The Map
              </h2>
              <p className="mt-2 text-sm text-[#5E646C] dark:text-[#A4A8AE] max-w-2xl">
                Locate our Banani head office and geo-pinned residences across Mohammadpur, West Dhanmondi,
                Banasree, Gulshan-2, and Bashundhara R/A.
              </p>
            </div>
            <Link
              to="/properties-list"
              className="px-6 py-3 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors inline-flex items-center gap-2 self-start"
            >
              <span>All Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <DhakaMap />
        </div>
      </section>

      {/* Brand Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/85 backdrop-blur-xs" onClick={() => setVideoModalOpen(false)} />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Shwapno Bari Showcase Film"
            className="relative z-10 w-full max-w-4xl bg-[#0C0C0C] border border-white/20 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 text-white">
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Shwapno Bari Brand Film
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={COMPANY.heroVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#DA2328] hover:underline"
                >
                  Open on YouTube
                </a>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  aria-label="Close Video Player"
                  className="p-1.5 text-white hover:text-[#DA2328] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${COMPANY.heroVideoId}?autoplay=1&rel=0`}
                title="Shwapno Bari Real Estate Showcase"
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
