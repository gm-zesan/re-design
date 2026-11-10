import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Compass,
  HardHat,
  Layers,
  MapPin,
  Maximize2,
  Pause,
  Phone,
  Play,
  ShieldCheck,
} from 'lucide-react';
import {
  ABOUT_DATA,
  HERO_SLIDES,
  HOME_OVERVIEW,
  SITE_META,
} from '../data/siteData';
import {
  BUILDERS_PROJECTS,
  CONCERN_COMPANIES,
  KINGDOM_CITY_DATA,
} from '../data/concernsData';
import { ImageLightbox } from '../components/ImageLightbox';

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    title: string;
    caption?: string;
  } | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const currentSlide = HERO_SLIDES[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div>
      {/* 1. Full-Bleed Architectural Hero Showcase (All 11 Origin Slides) */}
      <section className="relative bg-[#0E1122] text-white">
        <div className="relative min-h-[540px] overflow-hidden lg:min-h-[620px]">
          {/* Active Slide Background */}
          <img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={currentSlide.title}
            className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1122]/92 via-[#0E1122]/75 to-[#0E1122]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1122] via-transparent to-transparent" />

          {/* Hero Foreground Grid */}
          <div className="relative mx-auto flex min-h-[540px] max-w-7xl flex-col justify-between px-4 pb-8 pt-10 sm:px-6 lg:min-h-[620px] lg:px-8 lg:pb-10 lg:pt-14">
            {/* Top Status Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B8862D]/40 bg-[#0E1122]/70 px-3.5 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#E5C17B]" />
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#F5DC9C]">
                  {SITE_META.tagline}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-[#0E1122]/70 px-3 py-1 backdrop-blur-sm">
                <span className="font-mono-tech text-xs text-white/80">
                  Slide {String(activeSlide + 1).padStart(2, '0')} / {HERO_SLIDES.length}
                </span>
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
                  aria-label={isPlaying ? 'Pause hero slideshow' : 'Play hero slideshow'}
                  title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      src: currentSlide.image,
                      alt: currentSlide.title,
                      title: currentSlide.title,
                      caption: currentSlide.subtitle,
                    })
                  }
                  className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
                  aria-label="Inspect slide full screen"
                  title="Inspect full image"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Center Editorial Copy */}
            <div className="my-auto max-w-3xl py-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded bg-[#B8862D] px-2.5 py-0.5 font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#0E1122]">
                  {currentSlide.category}
                </span>
                {currentSlide.badgeText && (
                  <span className="rounded border border-white/25 bg-white/10 px-2.5 py-0.5 font-mono-tech text-[11px] text-white/90 backdrop-blur-xs">
                    {currentSlide.badgeText}
                  </span>
                )}
              </div>

              <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {currentSlide.title}
              </h1>
              <p className="font-bengali mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {currentSlide.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to={currentSlide.linkTo}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#B8862D] px-5 py-3 text-sm font-semibold text-[#0E1122] shadow-lg transition hover:bg-[#E5C17B]"
                >
                  <span>Explore Division</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/concerns/housing"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xs transition hover:bg-white/20"
                >
                  <span>KINGDOM City Plots</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm font-medium text-white/90 transition hover:border-white/50 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#E5C17B]" />
                  <span>{SITE_META.primaryPhone}</span>
                </Link>
              </div>
            </div>

            {/* Bottom 11-Slide Filmstrip Navigation */}
            <div className="space-y-3 border-t border-white/15 pt-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-1 items-center gap-1.5 overflow-x-auto pb-1">
                  {HERO_SLIDES.map((slide, idx) => {
                    const active = idx === activeSlide;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setActiveSlide(idx)}
                        className={`shrink-0 rounded-lg border px-2.5 py-1.5 text-left transition ${
                          active
                            ? 'border-[#E5C17B] bg-white/15 text-white'
                            : 'border-white/10 bg-white/5 text-white/65 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span className="font-mono-tech mr-1.5 text-[10px] text-[#E5C17B]">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs font-medium">{slide.title}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="rounded-lg border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-lg border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Verifiable Metrics Strip */}
        <div className="border-t border-white/10 bg-[#141831]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
            <div className="px-4 py-4 sm:px-6">
              <p className="font-display text-2xl font-bold text-[#E5C17B]">2006</p>
              <p className="mt-0.5 text-xs text-white/75">
                Founded by Mohammed Nusrot Hossan
              </p>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <p className="font-display text-2xl font-bold text-[#E5C17B]">~700</p>
              <p className="mt-0.5 text-xs text-white/75">
                Apartments Successfully Handed Over
              </p>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <p className="font-display text-2xl font-bold text-[#E5C17B]">RD - 0090</p>
              <p className="mt-0.5 text-xs text-white/75">
                RAJUK Registered Township (REHAB / BLDA)
              </p>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <p className="font-display text-2xl font-bold text-[#E5C17B]">07</p>
              <p className="mt-0.5 text-xs text-white/75">
                Diversified Sister Concerns &amp; Divisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Heritage & Core Infrastructure Overview (Preserves Exact Home Copy + Visual) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#B8862D]">
              Home • Corporate Heritage
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1E1B5E] dark:text-white sm:text-4xl">
              {HOME_OVERVIEW.heading}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4A4F63] dark:text-slate-300">
              <p className="rounded-xl border-l-4 border-[#B8862D] bg-[#F3ECD8]/70 p-4 text-[#121629] dark:bg-[#161B36] dark:text-[#F1EFE9]">
                {HOME_OVERVIEW.paragraph1}
              </p>
              <p>{HOME_OVERVIEW.paragraph2}</p>
            </div>

            {/* 4 Explicit Disciplines Mentioned in Text */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: 'Highway Construction', icon: Compass },
                { label: 'Site Development', icon: Layers },
                { label: 'Underground Utilities', icon: HardHat },
                { label: 'Residential Infrastructure', icon: Building2 },
              ].map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[#E5DFD0] bg-white p-3.5 shadow-2xs dark:border-white/10 dark:bg-[#141831]"
                >
                  <Icon className="h-5 w-5 text-[#1E1B5E] dark:text-[#E5C17B]" />
                  <p className="mt-2 text-xs font-semibold text-[#121629] dark:text-white">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1E1B5E] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2E3192] dark:bg-[#B8862D] dark:text-[#0E1122] dark:hover:bg-[#E5C17B]"
              >
                <span>Read Full Corporate Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/concerns/construction"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E5DFD0] bg-white px-5 py-2.5 text-sm font-semibold text-[#121629] transition hover:border-[#1E1B5E] dark:border-white/15 dark:bg-[#141831] dark:text-white dark:hover:border-[#E5C17B]"
              >
                <span>Construction &amp; Fleet</span>
              </Link>
            </div>
          </div>

          {/* Right Architectural Render Card */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#E5DFD0] bg-white p-3 shadow-md dark:border-white/10 dark:bg-[#141831]">
              <div className="group relative overflow-hidden rounded-xl bg-[#0E1122]">
                <img
                  src={HOME_OVERVIEW.sideImage}
                  alt={HOME_OVERVIEW.sideImageAlt}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      src: HOME_OVERVIEW.sideImage,
                      alt: HOME_OVERVIEW.sideImageAlt,
                      title: 'KINGDOM GROUP Architectural Perspective',
                      caption: 'Visual from origin homepage (kingdom_md_n_pm.jpg)',
                    })
                  }
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-[#0E1122]/85 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xs transition hover:bg-[#1E1B5E]"
                >
                  <Maximize2 className="h-3.5 w-3.5 text-[#E5C17B]" />
                  <span>Expand</span>
                </button>
              </div>
              <div className="px-2 pb-1 pt-3">
                <p className="text-sm font-semibold text-[#1E1B5E] dark:text-[#E5C17B]">
                  Multi-Story Residential Development Perspective
                </p>
                <p className="mt-1 text-xs text-[#4A4F63] dark:text-slate-300">
                  Public &amp; private client delivery across Dhaka and District Headquarters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Conglomerate Portfolio Bento Grid (All 7 Sister Concerns) */}
      <section className="border-y border-[#E5DFD0] bg-[#F3ECD8]/60 py-16 dark:border-white/10 dark:bg-[#0F1326] lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#B8862D] dark:text-[#E5C17B]">
                Our Concern Portfolio
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1E1B5E] dark:text-white sm:text-4xl">
                Seven Diversified Companies Under One Group
              </h2>
            </div>
            <Link
              to="/concerns"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#1E1B5E]/25 bg-white px-4 py-2 text-sm font-semibold text-[#1E1B5E] transition hover:bg-[#1E1B5E] hover:text-white dark:border-white/15 dark:bg-[#141831] dark:text-[#E5C17B] dark:hover:bg-[#B8862D] dark:hover:text-[#0E1122]"
            >
              <span>View Full Directory</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CONCERN_COMPANIES.map((company) => (
              <Link
                key={company.slug}
                to={company.route}
                className="group flex flex-col justify-between rounded-2xl border border-[#E5DFD0] bg-white p-6 shadow-2xs transition hover:-translate-y-0.5 hover:border-[#1E1B5E]/40 hover:shadow-lg dark:border-white/10 dark:bg-[#161B36] dark:hover:border-[#E5C17B]/40"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-14 w-auto max-w-[120px] object-contain dark:brightness-125 dark:drop-shadow-[0_0_0.6px_rgba(255,255,255,0.95)]"
                    />
                    <span className="font-mono-tech rounded-full bg-[#F3ECD8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#1E1B5E] dark:bg-[#B8862D]/20 dark:text-[#F5DC9C]">
                      {company.hasOriginalDedicatedContent ? 'Flagship' : 'Group Entity'}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-[#121629] transition group-hover:text-[#1E1B5E] dark:text-white dark:group-hover:text-[#E5C17B]">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#B8862D] dark:text-[#E5C17B]">{company.sector}</p>
                  {company.tagline && (
                    <p className="font-bengali mt-2 text-xs font-semibold text-[#1E1B5E] dark:text-[#F5DC9C]">
                      {company.tagline}
                    </p>
                  )}
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#4A4F63] dark:text-slate-300">
                    {company.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#E5DFD0] pt-4 dark:border-white/10">
                  {company.subUnits.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {company.subUnits.map((unit) => (
                        <span
                          key={unit.name}
                          className="rounded-md bg-[#FAF8F3] px-2 py-0.5 text-[11px] font-medium text-[#4A4F63] ring-1 ring-[#E5DFD0] dark:bg-white/5 dark:text-slate-300 dark:ring-white/15"
                        >
                          {unit.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E1B5E] group-hover:gap-2.5 dark:text-[#E5C17B]">
                    <span>Explore {company.shortTitle}</span>
                    <ArrowRight className="h-4 w-4 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Flagship Real Estate Spotlights: KINGDOM City & KINGDOM Builders */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* KINGDOM City Flagship Township Card */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1E1B5E] bg-[#1E1B5E] text-white shadow-xl lg:col-span-7">
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={KINGDOM_CITY_DATA.logo}
                    alt="KINGDOM City"
                    className="h-12 w-12 rounded-xl object-cover"
                  />
                  <div>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#E5C17B]">
                      KINGDOM Housing Ltd.
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      KINGDOM City Township
                    </h2>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B8862D]/60 bg-[#B8862D]/20 px-3 py-1 font-mono-tech text-xs text-[#F5DC9C]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  RAJUK RD - 0090
                </span>
              </div>

              <p className="font-bengali mt-5 text-lg font-semibold text-[#F5DC9C]">
                {KINGDOM_CITY_DATA.banglaTagline} — {KINGDOM_CITY_DATA.banglaSubtitle}
              </p>
              <p className="font-bengali mt-2 text-sm leading-relaxed text-white/85">
                {KINGDOM_CITY_DATA.banglaParagraphs[1]}{' '}
                {KINGDOM_CITY_DATA.banglaParagraphs[2]}
              </p>

              {/* Verifiable Installment Pricing from ab.jpg */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {KINGDOM_CITY_DATA.installmentPricing.map((plan) => (
                  <div
                    key={plan.plotSizeEnglish}
                    className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-xs"
                  >
                    <p className="font-mono-tech text-[11px] uppercase tracking-wider text-[#E5C17B]">
                      {plan.plotSizeEnglish}
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold text-white tabular-nums">
                      {plan.monthlyEnglish}
                    </p>
                    <p className="font-bengali mt-1 text-xs text-white/80">
                      {plan.monthlyBangla}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 text-xs text-white/85 sm:grid-cols-3">
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                  <MapPin className="h-3.5 w-3.5 text-[#E5C17B]" />
                  <span>Dhaka–Mawa Bypass Road</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                  <Layers className="h-3.5 w-3.5 text-[#E5C17B]" />
                  <span>Sectors 1 to 7 Masterplan</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#E5C17B]" />
                  <span className="font-bengali">খরিদ সূত্রে জমির মালিক</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/15 bg-[#141831] px-6 py-4 sm:px-8">
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/concerns/housing"
                  className="rounded-lg bg-[#B8862D] px-4 py-2 text-xs font-semibold text-[#0E1122] transition hover:bg-[#E5C17B]"
                >
                  Overview &amp; Pricing
                </Link>
                <Link
                  to="/concerns/housing/layout-plan"
                  className="rounded-lg border border-white/25 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/10"
                >
                  Layout Plan
                </Link>
                <Link
                  to="/concerns/housing/location-map"
                  className="rounded-lg border border-white/25 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/10"
                >
                  Location Map
                </Link>
              </div>
              <Link
                to="/concerns/housing/booking"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C17B] hover:underline"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>01711-925098</span>
              </Link>
            </div>
          </div>

          {/* KINGDOM Builders Highlight */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E5DFD0] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#161B36] sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#B8862D] dark:text-[#E5C17B]">
                  KINGDOM Builders Ltd.
                </span>
                <span className="rounded-full bg-[#F3ECD8] px-3 py-0.5 text-[11px] font-semibold text-[#1E1B5E] dark:bg-[#B8862D]/20 dark:text-[#F5DC9C]">
                  Since 2006
                </span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold text-[#1E1B5E] dark:text-white">
                Ongoing &amp; Landmark Projects
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4A4F63] dark:text-slate-300">
                Dedicated to Quality and Commitment — delivering commercial complexes and
                residential towers across Dhaka, Shariatpur, and Khulna.
              </p>

              <div className="mt-5 space-y-3">
                {BUILDERS_PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    className="flex items-center gap-3 rounded-xl border border-[#E5DFD0] bg-[#FAF8F3] p-3 dark:border-white/10 dark:bg-[#0F1326]"
                  >
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="h-14 w-16 shrink-0 rounded-lg border border-[#E5DFD0] bg-white object-cover dark:border-white/15"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#121629] dark:text-white">{proj.name}</p>
                      <p className="line-clamp-1 text-xs text-[#4A4F63] dark:text-slate-300">
                        {proj.addressLines[0]}
                      </p>
                      <span className="mt-0.5 inline-block font-mono-tech text-[10px] uppercase text-[#B8862D] dark:text-[#E5C17B]">
                        {proj.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-[#E5DFD0] pt-4 dark:border-white/10">
              <Link
                to="/concerns/builders"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E1B5E] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2E3192] dark:bg-[#B8862D] dark:text-[#0E1122] dark:hover:bg-[#E5C17B]"
              >
                <span>View All Builders Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership Snapshot & Contact Strip */}
      <section className="border-t border-[#E5DFD0] bg-white py-14 dark:border-white/10 dark:bg-[#0F1326]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-5 sm:flex-row lg:col-span-8">
              <div className="flex items-center gap-4 rounded-2xl border border-[#E5DFD0] bg-[#FAF8F3] p-4 dark:border-white/10 dark:bg-[#161B36] sm:flex-1">
                <img
                  src={ABOUT_DATA.managingDirector.image}
                  alt={ABOUT_DATA.managingDirector.name}
                  className="h-20 w-20 shrink-0 rounded-xl border border-[#E5DFD0] object-cover object-top dark:border-white/15"
                />
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[#B8862D] dark:text-[#E5C17B]">
                    {ABOUT_DATA.managingDirector.title}
                  </p>
                  <p className="font-display text-base font-semibold text-[#1E1B5E] dark:text-white">
                    {ABOUT_DATA.managingDirector.name}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-[#4A4F63] dark:text-slate-300">
                    Founder Managing Director leading KINGDOM GROUP since 2006.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[#E5DFD0] bg-[#FAF8F3] p-4 dark:border-white/10 dark:bg-[#161B36] sm:flex-1">
                <img
                  src={ABOUT_DATA.founderChairmanArchive.image}
                  alt={ABOUT_DATA.founderChairmanArchive.name}
                  className="h-20 w-20 shrink-0 rounded-xl border border-[#E5DFD0] object-cover object-top dark:border-white/15"
                />
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[#B8862D] dark:text-[#E5C17B]">
                    {ABOUT_DATA.founderChairmanArchive.title}
                  </p>
                  <p className="font-display text-base font-semibold text-[#1E1B5E] dark:text-white">
                    {ABOUT_DATA.founderChairmanArchive.name}
                  </p>
                  <p className="mt-1 text-xs text-[#4A4F63] dark:text-slate-300">
                    {ABOUT_DATA.founderChairmanArchive.credentials} • REHAB &amp; BASIS Contributor
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-[#E5DFD0] bg-[#F3ECD8] p-6 dark:border-[#B8862D]/30 dark:bg-[#191F3D] lg:col-span-4">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#1E1B5E] dark:text-[#E5C17B]">
                7 Offices • 24h Control Unit
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-[#121629] dark:text-white">
                Connect With KINGDOM GROUP
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <Link
                  to="/contact"
                  className="rounded-lg bg-[#1E1B5E] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2E3192] dark:bg-[#B8862D] dark:text-[#0E1122] dark:hover:bg-[#E5C17B]"
                >
                  Office Directory &amp; Map
                </Link>
                <Link
                  to="/career/apply"
                  className="rounded-lg border border-[#1E1B5E]/30 bg-white px-4 py-2 text-xs font-semibold text-[#1E1B5E] transition hover:bg-[#1E1B5E] hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                >
                  Submit CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          title={lightboxImage.title}
          caption={lightboxImage.caption}
          isOpen
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}

