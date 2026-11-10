import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
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
      {/* 1. Full-Screen Edge-to-Edge Architectural Gallery Hero (Emaar / Foster + Partners Aesthetic) */}
      <section className="relative flex min-h-[calc(100svh-167px)] w-full flex-col justify-between overflow-hidden bg-[#0C0D0F] lg:min-h-[calc(100svh-147px)]">
        {/* Unobstructed Flagship Architectural Photography + Subtle Ken Burns Motion */}
        <img
          src="/images/hero/kingdom-flagship-hero.jpg"
          alt="KINGDOM GROUP Luxury Residences & Landscaped Urban Boulevard"
          className="animate-hero-ken-burns absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Surgical Bottom-Third & Top-Edge Contrast Scrims (Keeps Towers & Sky Bright) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/80 via-[65%] to-transparent sm:via-[#0A0B0D]/68 sm:via-[38%]"
        />

        {/* Top Discreet Architectural HUD Bar */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 pt-4 sm:px-6 sm:pt-7 lg:px-8">
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-white/90 drop-shadow-xs sm:text-[11px] sm:tracking-[0.22em]">
            23.7789° N, 90.3942° E · Dhaka
          </span>
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#DFC69B] drop-shadow-xs sm:text-[11px] sm:tracking-[0.22em]">
            RAJUK RD-0090 · Est. 2006
          </span>
        </div>

        {/* Bottom-Anchored Monumental Editorial Stage */}
        <div className="relative z-10 mx-auto mt-6 w-full max-w-7xl px-4 pb-5 sm:mt-auto sm:px-6 sm:pb-8 lg:px-8 lg:pb-10">
          <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
            {/* Left Monumental Serif Anchor */}
            <div className="max-w-3xl">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-[#C9A46B] drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]">
                Trusted Partner to Realize Your Dream
              </p>

              <h1 className="mt-2 font-display text-[2.15rem] font-semibold leading-[0.98] tracking-[-0.025em] text-white sm:mt-3 sm:text-6xl lg:text-[4.5rem]">
                Shaping Skylines.
                <span className="mt-1 block font-normal italic text-[#C9A46B]">
                  Enduring Foundations.
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-base">
                Since 2006, uniting ~700 handed-over Dhaka apartments, the RAJUK-registered
                KINGDOM City modern township, and heavy civil engineering under seven
                diversified concerns.
              </p>
            </div>

            {/* Right Luxury CTA Group */}
            <div className="flex shrink-0 flex-wrap items-center gap-3 sm:gap-3.5 lg:justify-end">
              <Link
                to="/concerns/housing"
                className="inline-flex items-center gap-2 rounded-full bg-[#C9A46B] px-5 py-3 text-sm font-semibold text-[#0C0D0F] shadow-lg transition hover:bg-white sm:px-6 sm:py-3.5"
              >
                <span>Explore KINGDOM City</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                to="/concerns"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white hover:bg-white/20 sm:px-6 sm:py-3.5"
              >
                <span>07 Group Concerns</span>
              </Link>
            </div>
          </div>

          {/* Integrated Bottom Structural Pillars Bar */}
          <div className="mt-6 grid grid-cols-2 gap-3.5 border-t border-white/20 pt-4 sm:mt-8 sm:gap-6 sm:pt-5 lg:grid-cols-4 lg:gap-8">
            <Link to="/concerns/housing" className="group block">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#C9A46B]">
                01 · Township
              </span>
              <p className="mt-1 flex items-center gap-1.5 font-display text-base font-medium text-white transition group-hover:text-[#C9A46B]">
                <span>KINGDOM City</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </p>
              <p className="mt-0.5 text-xs text-white/70">South Keraniganj · 2.5–10 Katha</p>
            </Link>

            <Link to="/concerns/builders" className="group block">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#C9A46B]">
                02 · Real Estate
              </span>
              <p className="mt-1 flex items-center gap-1.5 font-display text-base font-medium text-white transition group-hover:text-[#C9A46B]">
                <span>KINGDOM Builders</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </p>
              <p className="mt-0.5 text-xs text-white/70">~700 Apartments Handed Over</p>
            </Link>

            <Link to="/concerns/construction" className="group block">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#C9A46B]">
                03 · Infrastructure
              </span>
              <p className="mt-1 flex items-center gap-1.5 font-display text-base font-medium text-white transition group-hover:text-[#C9A46B]">
                <span>Civil &amp; Crusher Fleet</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </p>
              <p className="mt-0.5 text-xs text-white/70">Highways, RCC &amp; Sylhet Aggregates</p>
            </Link>

            <Link to="/about" className="group block">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#C9A46B]">
                04 · Heritage
              </span>
              <p className="mt-1 flex items-center gap-1.5 font-display text-base font-medium text-white transition group-hover:text-[#C9A46B]">
                <span>Incorporated 2006</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </p>
              <p className="mt-0.5 text-xs text-white/70">Mohammed Nusrot Hossan, MD</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Heritage & Core Infrastructure Overview (Preserves Exact Home Copy + Visual) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#8C6730]">
              Home • Corporate Heritage
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#18191D] dark:text-white sm:text-4xl">
              {HOME_OVERVIEW.heading}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#52555E] dark:text-zinc-300">
              <p className="rounded-xl border-l-4 border-[#8C6730] bg-[#F2F1EE]/70 p-4 text-[#141518] dark:bg-[#1A1C21] dark:text-[#F4F3F0]">
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
                  className="rounded-xl border border-[#E4E3DF] bg-white p-3.5 shadow-2xs dark:border-white/10 dark:bg-[#141518]"
                >
                  <Icon className="h-5 w-5 text-[#18191D] dark:text-[#C9A46B]" />
                  <p className="mt-2 text-xs font-semibold text-[#141518] dark:text-white">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-[#18191D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
              >
                <span>Read Full Corporate Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/concerns/construction"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E4E3DF] bg-white px-5 py-2.5 text-sm font-semibold text-[#141518] transition hover:border-[#18191D] dark:border-white/15 dark:bg-[#141518] dark:text-white dark:hover:border-[#C9A46B]"
              >
                <span>Construction &amp; Fleet</span>
              </Link>
            </div>
          </div>

          {/* Right Architectural Render Card */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#E4E3DF] bg-white p-3 shadow-md dark:border-white/10 dark:bg-[#141518]">
              <div className="group relative overflow-hidden rounded-xl bg-[#111215]">
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
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-[#111215]/85 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xs transition hover:bg-[#18191D]"
                >
                  <Maximize2 className="h-3.5 w-3.5 text-[#C9A46B]" />
                  <span>Expand</span>
                </button>
              </div>
              <div className="px-2 pb-1 pt-3">
                <p className="text-sm font-semibold text-[#18191D] dark:text-[#C9A46B]">
                  Multi-Story Residential Development Perspective
                </p>
                <p className="mt-1 text-xs text-[#52555E] dark:text-zinc-300">
                  Public &amp; private client delivery across Dhaka and District Headquarters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2B. Field Operations, Projects & Fleet Archive (All 11 Origin Showcase Slides) */}
      <section className="border-t border-[#E4E3DF] bg-white/70 py-14 dark:border-white/10 dark:bg-[#111215] lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#8C6730] dark:text-[#C9A46B]">
                Project &amp; Operations Archive (11 Visuals)
              </span>
              <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#18191D] dark:text-white sm:text-3xl">
                Township Progress, Fleet &amp; Landmark Developments
              </h2>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E3DF] bg-white text-[#141518] transition hover:border-[#18191D] dark:border-white/15 dark:bg-[#141518] dark:text-white dark:hover:border-[#C9A46B]"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E3DF] bg-white text-[#141518] transition hover:border-[#18191D] dark:border-white/15 dark:bg-[#141518] dark:text-white dark:hover:border-[#C9A46B]"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E3DF] bg-white text-[#141518] transition hover:border-[#18191D] dark:border-white/15 dark:bg-[#141518] dark:text-white dark:hover:border-[#C9A46B]"
                aria-label={isPlaying ? 'Pause showcase' : 'Play showcase'}
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E3DF] bg-white text-[#141518] transition hover:border-[#18191D] dark:border-white/15 dark:bg-[#141518] dark:text-white dark:hover:border-[#C9A46B]"
                aria-label="Inspect slide full screen"
                title="Inspect full image"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div
                className={`relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E4E3DF] shadow-xs dark:border-white/10 ${
                  currentSlide.fitMode === 'contain'
                    ? 'bg-black'
                    : 'bg-[#ECEBE8] dark:bg-[#141518]'
                }`}
              >
                <img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  onClick={() =>
                    setLightboxImage({
                      src: currentSlide.image,
                      alt: currentSlide.title,
                      title: currentSlide.title,
                      caption: currentSlide.subtitle,
                    })
                  }
                  className={`h-full w-full cursor-zoom-in transition-opacity duration-500 ${
                    currentSlide.fitMode === 'contain'
                      ? 'object-contain p-1'
                      : 'object-cover object-center'
                  }`}
                />
              </div>

              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#8C6730] dark:text-[#C9A46B]">
                    {String(activeSlide + 1).padStart(2, '0')} / {HERO_SLIDES.length} —{' '}
                    {currentSlide.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[#141518] dark:text-white">
                    {currentSlide.title}
                  </h3>
                  <p className="font-bengali text-sm text-[#52555E] dark:text-zinc-300">
                    {currentSlide.subtitle}
                  </p>
                </div>
                <Link
                  to={currentSlide.linkTo}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18191D] hover:underline dark:text-[#C9A46B]"
                >
                  <span>Explore Division</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 lg:col-span-4" role="tablist" aria-label="Select archive visual">
              {HERO_SLIDES.map((slide, idx) => {
                const active = idx === activeSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveSlide(idx)}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left transition ${
                      active
                        ? 'border-[#18191D] bg-[#18191D] text-white dark:border-[#C9A46B] dark:bg-[#8C6730] dark:text-[#111215]'
                        : 'border-[#E4E3DF] bg-[#F9F9F8] text-[#141518] hover:border-[#18191D]/40 dark:border-white/10 dark:bg-[#141518] dark:text-zinc-200 dark:hover:border-[#C9A46B]/40'
                    }`}
                  >
                    <span className="min-w-0 truncate text-xs font-medium">
                      <span
                        className={`font-mono-tech mr-2 text-[10px] ${
                          active ? 'text-[#C9A46B] dark:text-[#111215]' : 'text-[#8C6730] dark:text-[#C9A46B]'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {slide.title}
                    </span>
                    <span
                      className={`ml-2 shrink-0 font-mono-tech text-[10px] ${
                        active ? 'text-white/80 dark:text-[#111215]/80' : 'text-[#52555E] dark:text-zinc-400'
                      }`}
                    >
                      {slide.badgeText || slide.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Conglomerate Portfolio Bento Grid (All 7 Sister Concerns) */}
      <section className="border-y border-[#E4E3DF] bg-[#F2F1EE]/60 py-16 dark:border-white/10 dark:bg-[#141518] lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#8C6730] dark:text-[#C9A46B]">
                Our Concern Portfolio
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#18191D] dark:text-white sm:text-4xl">
                Seven Diversified Companies Under One Group
              </h2>
            </div>
            <Link
              to="/concerns"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#18191D]/25 bg-white px-4 py-2 text-sm font-semibold text-[#18191D] transition hover:bg-[#18191D] hover:text-white dark:border-white/15 dark:bg-[#141518] dark:text-[#C9A46B] dark:hover:bg-[#C9A46B] dark:hover:text-[#0C0D0F]"
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
                className="group flex flex-col justify-between rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-2xs transition hover:-translate-y-0.5 hover:border-[#18191D]/40 hover:shadow-lg dark:border-white/10 dark:bg-[#1A1C21] dark:hover:border-[#C9A46B]/40"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-14 w-auto max-w-[120px] object-contain dark:brightness-125 dark:drop-shadow-[0_0_0.6px_rgba(255,255,255,0.95)]"
                    />
                    <span className="font-mono-tech rounded-full bg-[#F2F1EE] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#18191D] dark:bg-[#C9A46B]/18 dark:text-[#DFC69B]">
                      {company.hasOriginalDedicatedContent ? 'Flagship' : 'Group Entity'}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-[#141518] transition group-hover:text-[#18191D] dark:text-white dark:group-hover:text-[#C9A46B]">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#8C6730] dark:text-[#C9A46B]">{company.sector}</p>
                  {company.tagline && (
                    <p className="font-bengali mt-2 text-xs font-semibold text-[#18191D] dark:text-[#DFC69B]">
                      {company.tagline}
                    </p>
                  )}
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#52555E] dark:text-zinc-300">
                    {company.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#E4E3DF] pt-4 dark:border-white/10">
                  {company.subUnits.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {company.subUnits.map((unit) => (
                        <span
                          key={unit.name}
                          className="rounded-md bg-[#F9F9F8] px-2 py-0.5 text-[11px] font-medium text-[#52555E] ring-1 ring-[#E4E3DF] dark:bg-white/5 dark:text-zinc-300 dark:ring-white/15"
                        >
                          {unit.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#18191D] group-hover:gap-2.5 dark:text-[#C9A46B]">
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
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#18191D] bg-[#18191D] text-white shadow-xl dark:border-white/12 lg:col-span-7">
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={KINGDOM_CITY_DATA.logo}
                    alt="KINGDOM City"
                    className="h-12 w-12 rounded-xl object-cover"
                  />
                  <div>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#C9A46B]">
                      KINGDOM Housing Ltd.
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      KINGDOM City Township
                    </h2>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8C6730]/60 bg-[#C9A46B]/18 px-3 py-1 font-mono-tech text-xs text-[#DFC69B]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  RAJUK RD - 0090
                </span>
              </div>

              <p className="font-bengali mt-5 text-lg font-semibold text-[#DFC69B]">
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
                    <p className="font-mono-tech text-[11px] uppercase tracking-wider text-[#C9A46B]">
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
                  <MapPin className="h-3.5 w-3.5 text-[#C9A46B]" />
                  <span>Dhaka–Mawa Bypass Road</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                  <Layers className="h-3.5 w-3.5 text-[#C9A46B]" />
                  <span>Sectors 1 to 7 Masterplan</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#C9A46B]" />
                  <span className="font-bengali">খরিদ সূত্রে জমির মালিক</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/15 bg-[#141518] px-6 py-4 sm:px-8">
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/concerns/housing"
                  className="rounded-lg bg-[#C9A46B] px-4 py-2 text-xs font-semibold text-[#0C0D0F] transition hover:bg-[#DFBE88]"
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A46B] hover:underline"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>01711-925098</span>
              </Link>
            </div>
          </div>

          {/* KINGDOM Builders Highlight */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#1A1C21] sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                  KINGDOM Builders Ltd.
                </span>
                <span className="rounded-full bg-[#F2F1EE] px-3 py-0.5 text-[11px] font-semibold text-[#18191D] dark:bg-[#C9A46B]/18 dark:text-[#DFC69B]">
                  Since 2006
                </span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold text-[#18191D] dark:text-white">
                Ongoing &amp; Landmark Projects
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#52555E] dark:text-zinc-300">
                Dedicated to Quality and Commitment — delivering commercial complexes and
                residential towers across Dhaka, Shariatpur, and Khulna.
              </p>

              <div className="mt-5 space-y-3">
                {BUILDERS_PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    className="flex items-center gap-3 rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] p-3 dark:border-white/10 dark:bg-[#141518]"
                  >
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="h-14 w-16 shrink-0 rounded-lg border border-[#E4E3DF] bg-white object-cover dark:border-white/15"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#141518] dark:text-white">{proj.name}</p>
                      <p className="line-clamp-1 text-xs text-[#52555E] dark:text-zinc-300">
                        {proj.addressLines[0]}
                      </p>
                      <span className="mt-0.5 inline-block font-mono-tech text-[10px] uppercase text-[#8C6730] dark:text-[#C9A46B]">
                        {proj.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-[#E4E3DF] pt-4 dark:border-white/10">
              <Link
                to="/concerns/builders"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#18191D] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
              >
                <span>View All Builders Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership Snapshot & Contact Strip */}
      <section className="border-t border-[#E4E3DF] bg-white py-14 dark:border-white/10 dark:bg-[#141518]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-5 sm:flex-row lg:col-span-8">
              <div className="flex items-center gap-4 rounded-2xl border border-[#E4E3DF] bg-[#F9F9F8] p-4 dark:border-white/10 dark:bg-[#1A1C21] sm:flex-1">
                <img
                  src={ABOUT_DATA.managingDirector.image}
                  alt={ABOUT_DATA.managingDirector.name}
                  className="h-20 w-20 shrink-0 rounded-xl border border-[#E4E3DF] object-cover object-top dark:border-white/15"
                />
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[#8C6730] dark:text-[#C9A46B]">
                    {ABOUT_DATA.managingDirector.title}
                  </p>
                  <p className="font-display text-base font-semibold text-[#18191D] dark:text-white">
                    {ABOUT_DATA.managingDirector.name}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-[#52555E] dark:text-zinc-300">
                    Founder Managing Director leading KINGDOM GROUP since 2006.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[#E4E3DF] bg-[#F9F9F8] p-4 dark:border-white/10 dark:bg-[#1A1C21] sm:flex-1">
                <img
                  src={ABOUT_DATA.founderChairmanArchive.image}
                  alt={ABOUT_DATA.founderChairmanArchive.name}
                  className="h-20 w-20 shrink-0 rounded-xl border border-[#E4E3DF] object-cover object-top dark:border-white/15"
                />
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[#8C6730] dark:text-[#C9A46B]">
                    {ABOUT_DATA.founderChairmanArchive.title}
                  </p>
                  <p className="font-display text-base font-semibold text-[#18191D] dark:text-white">
                    {ABOUT_DATA.founderChairmanArchive.name}
                  </p>
                  <p className="mt-1 text-xs text-[#52555E] dark:text-zinc-300">
                    {ABOUT_DATA.founderChairmanArchive.credentials} • REHAB &amp; BASIS Contributor
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-[#E4E3DF] bg-[#F2F1EE] p-6 dark:border-[#8C6730]/30 dark:bg-[#1E2026] lg:col-span-4">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#18191D] dark:text-[#C9A46B]">
                7 Offices • 24h Control Unit
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-[#141518] dark:text-white">
                Connect With KINGDOM GROUP
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <Link
                  to="/contact"
                  className="rounded-lg bg-[#18191D] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
                >
                  Office Directory &amp; Map
                </Link>
                <Link
                  to="/career/apply"
                  className="rounded-lg border border-[#18191D]/30 bg-white px-4 py-2 text-xs font-semibold text-[#18191D] transition hover:bg-[#18191D] hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
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

