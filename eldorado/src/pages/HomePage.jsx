import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  Compass,
  HardHat,
  HeartHandshake,
  MapPin,
  Pause,
  Play,
  Quote,
  Star,
  StarHalf,
} from 'lucide-react';
import {
  CERTIFICATIONS,
  COMPANY,
  HERO_SLIDES,
  HOME_INTRO,
  SERVICES,
  TESTIMONIALS,
  WHY_CLIENTS_LOVE_US,
} from '../data/siteData';
import { PROJECTS } from '../data/projects';
import { BLOG_POSTS } from '../data/editorial';
import ProjectCard from '../components/ProjectCard';
import ImageWithFallback from '../components/ImageWithFallback';

const SERVICE_ICONS = [MapPin, Compass, HardHat, HeartHandshake];

function RatingStars({ rating = 4.5 }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <div
      className="inline-flex items-center gap-0.5 text-bronze"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-bronze text-bronze" />
      ))}
      {hasHalf && <StarHalf className="h-3.5 w-3.5 fill-bronze text-bronze" />}
    </div>
  );
}

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [portfolioTab, setPortfolioTab] = useState('ongoing');

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentHero = HERO_SLIDES[activeSlide];
  const filteredProjects = PROJECTS.filter((p) => p.status === portfolioTab);
  const showcasedProjects = filteredProjects.slice(0, 6);

  return (
    <div>
      {/* 1. Full-Bleed Architectural Hero Carousel (All 8 Slides) */}
      <section
        aria-label="Featured Architectural Residences"
        className="relative min-h-[560px] lg:h-[80vh] lg:max-h-[820px] w-full overflow-hidden bg-obsidian text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            aria-hidden={idx !== activeSlide}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === activeSlide
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={`${slide.accent} — ${slide.title}`}
              className={`h-full w-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                idx === activeSlide ? 'scale-105' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-obsidian/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-obsidian/30" />
          </div>
        ))}

        {/* Hero Foreground Content */}
        <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-between gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 border border-white/20 bg-obsidian/55 px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-bronze-light backdrop-blur-sm">
              <Building2 className="h-3.5 w-3.5 shrink-0 text-crimson" />
              {COMPANY.groupLine}
            </span>

            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
              className="inline-flex items-center gap-1.5 border border-white/20 bg-obsidian/55 px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm transition hover:border-white/50 hover:text-white"
            >
              {isPaused ? (
                <>
                  <Play className="h-3 w-3" />
                  <span>Play</span>
                </>
              ) : (
                <>
                  <Pause className="h-3 w-3" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>

          <div className="my-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-bronze-light sm:text-sm">
              {currentHero.accent}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {currentHero.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Crafting contemporary urban residences and commercial landmarks
              across Bashundhara R/A, Jalshiri Abashon, and Dhaka’s prime
              neighborhoods since {COMPANY.established}.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to={currentHero.projectLink}
                className="inline-flex items-center gap-2.5 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-crimson-dark"
              >
                <span>Explore Showcase</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/landowner-query"
                className="inline-flex items-center gap-2 border border-white/35 bg-obsidian/45 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white hover:text-obsidian"
              >
                <span>Landowner Query</span>
              </Link>
            </div>
          </div>

          {/* Slide Navigation Strip */}
          <div className="flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-1.5">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`View slide ${idx + 1}: ${s.title}`}
                  className={`h-1.5 transition-all duration-300 ${
                    idx === activeSlide
                      ? 'w-10 bg-crimson'
                      : 'w-4 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
              <span className="ml-3 font-mono text-xs text-white/70">
                0{activeSlide + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setActiveSlide(
                    (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
                  )
                }
                aria-label="Previous hero slide"
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-obsidian/55 text-white transition hover:border-crimson hover:bg-crimson"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
                }
                aria-label="Next hero slide"
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-obsidian/55 text-white transition hover:border-crimson hover:bg-crimson"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Rajbari Group & Accreditation Strip */}
      <section className="border-b border-stone bg-limestone">
        <div className="mx-auto grid max-w-7xl divide-y divide-stone sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
          <div className="py-5 sm:pr-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-concrete">
              Heritage
            </span>
            <p className="mt-1 font-serif text-xl font-semibold text-charcoal">
              Since 2003 (20+ Years)
            </p>
          </div>
          <div className="py-5 sm:px-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-concrete">
              Parent Conglomerate
            </span>
            <p className="mt-1 font-serif text-xl font-semibold text-charcoal">
              {COMPANY.groupLine}
            </p>
          </div>
          <div className="py-5 sm:px-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-concrete">
              Delivery Track Record
            </span>
            <p className="mt-1 font-serif text-xl font-semibold text-charcoal">
              70+ Projects Handed Over
            </p>
          </div>
          <div className="py-5 sm:pl-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-concrete">
              Philosophy
            </span>
            <p className="mt-1 font-serif text-xl font-semibold italic text-crimson-ink">
              “{COMPANY.motto}”
            </p>
          </div>
        </div>
      </section>

      {/* 3. Leaders in Real Estate Intro Section */}
      <section className="bg-alabaster py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                About El Dorado Developments Ltd.
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                {HOME_INTRO.heading}
              </h2>
              <div className="mt-6 h-1 w-16 bg-crimson" />
              <p className="mt-6 text-sm font-medium italic text-bronze-ink">
                “{HOME_INTRO.banner}”
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 border border-obsidian bg-obsidian px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-crimson hover:bg-crimson dark:border-white/20 dark:bg-[#272D37] dark:hover:border-crimson dark:hover:bg-crimson"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/our-message"
                  className="inline-flex items-center gap-2 border border-stone bg-surface px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:border-crimson hover:text-crimson-ink"
                >
                  <span>Leadership Messages</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base leading-relaxed text-concrete">
              {HOME_INTRO.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'text-lg font-medium leading-relaxed text-charcoal'
                      : ''
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Counter & Experience Band (75 / 400 / 20) */}
      <section className="relative overflow-hidden border-y border-stone bg-limestone text-charcoal transition-colors duration-200 dark:border-white/10 dark:bg-obsidian dark:text-white">
        <img
          src={HOME_INTRO.counterBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06] mix-blend-multiply dark:opacity-20 dark:mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-limestone/85 via-limestone/70 to-alabaster/80 dark:from-obsidian dark:via-obsidian/92 dark:to-[#1F232A]/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-bronze-ink dark:text-bronze-light">
                Proven Track Record
              </span>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal dark:text-white sm:text-4xl">
                {HOME_INTRO.counterHeading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-concrete dark:text-white/75">
                Since 2003, El Dorado Developments Ltd. has delivered more than
                70 projects with engineering integrity, earthquake and fire
                safety compliance, and timely handover.
              </p>
              <Link
                to="/about-us"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-crimson-ink transition hover:text-charcoal dark:text-bronze-light dark:hover:text-white"
              >
                <span>Read More About Us</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-3">
              {HOME_INTRO.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-stone bg-surface p-6 shadow-card backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <p className="font-serif text-5xl font-semibold text-charcoal dark:text-white">
                    {stat.value}
                    <span className="text-crimson-ink">+</span>
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-bronze-ink dark:text-bronze-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Projects Filter Showcase (All 23 Accessible via Category/Page) */}
      <section className="bg-alabaster bg-arch-grid py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                Architectural Portfolio
              </span>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-charcoal sm:text-5xl">
                Signature Developments
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Project status filter"
              className="flex flex-wrap border border-stone bg-surface p-1"
            >
              {[
                { key: 'ongoing', label: 'Ongoing (10)' },
                { key: 'upcoming', label: 'Upcoming (3)' },
                { key: 'handover', label: 'Handed Over (10)' },
              ].map((tab) => {
                const active = portfolioTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setPortfolioTab(tab.key)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                      active
                        ? 'bg-obsidian text-white dark:bg-white dark:text-obsidian'
                        : 'text-concrete hover:text-charcoal'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {showcasedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-stone pt-8">
            <p className="text-sm text-concrete">
              Showing {showcasedProjects.length} of {filteredProjects.length}{' '}
              {portfolioTab === 'handover' ? 'handed over' : portfolioTab}{' '}
              projects in our curated directory (23 published web dossiers, 70+
              total completed works).
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={
                  portfolioTab === 'ongoing'
                    ? '/ongoing-project'
                    : portfolioTab === 'upcoming'
                      ? '/upcomming-project'
                      : '/handover-project'
                }
                className="inline-flex items-center gap-2 bg-crimson px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-crimson-dark"
              >
                <span>
                  View All{' '}
                  {portfolioTab === 'handover'
                    ? 'Handover'
                    : portfolioTab === 'upcoming'
                      ? 'Upcoming'
                      : 'Ongoing'}{' '}
                  Projects
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border border-obsidian bg-surface px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
              >
                <span>All 23 Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Clients Love Us Feature Split */}
      <section className="border-y border-stone bg-limestone py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="relative border border-stone bg-surface p-3 shadow-editorial">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={WHY_CLIENTS_LOVE_US.image}
                    alt={WHY_CLIENTS_LOVE_US.heading}
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-concrete">
                  <span className="font-semibold uppercase tracking-widest text-charcoal">
                    Partner-First Philosophy
                  </span>
                  <span>Fair Business Integrity</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                Why Choose El Dorado
              </span>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-charcoal sm:text-5xl">
                {WHY_CLIENTS_LOVE_US.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-concrete">
                {WHY_CLIENTS_LOVE_US.text}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Prestigious Landmark Locations',
                  'Excellence in Design & Construction',
                  'High-End Customer Services',
                  'Absolute Transparency & Ethics',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-charcoal"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-crimson-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  to="/why-we"
                  className="inline-flex items-center gap-2 border border-obsidian bg-obsidian px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-crimson hover:bg-crimson dark:border-white/20 dark:bg-[#272D37] dark:hover:border-crimson dark:hover:bg-crimson"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Services Section (All 4 Pillars) */}
      <section className="relative overflow-hidden border-b border-stone bg-surface py-20 text-charcoal transition-colors duration-200 dark:border-white/10 dark:bg-obsidian dark:text-white lg:py-24">
        <img
          src="/static/img/sections/bg/bg-13.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.04] dark:opacity-15"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-crimson-ink dark:text-bronze-light">
                Core Capabilities
              </span>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-charcoal dark:text-white sm:text-5xl">
                We Provide Amazing Solutions
              </h2>
            </div>
            <Link
              to="/service"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition hover:text-crimson-ink dark:text-bronze-light dark:hover:text-white"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx] || Building2;
              return (
                <Link
                  key={service.number}
                  to="/service"
                  className="group flex flex-col justify-between border border-stone bg-alabaster p-7 backdrop-blur-sm transition duration-300 hover:border-crimson hover:bg-limestone dark:border-white/15 dark:bg-white/5 dark:hover:border-crimson dark:hover:bg-white/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold tracking-widest text-bronze-ink dark:text-bronze-light">
                        {service.number}
                      </span>
                      <Icon className="h-5 w-5 text-crimson-ink" />
                    </div>
                    <h3 className="mt-5 font-serif text-2xl font-semibold text-charcoal group-hover:text-crimson-ink dark:text-white dark:group-hover:text-bronze-light">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-concrete dark:text-white/75">
                      {service.excerpt}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal group-hover:text-crimson-ink dark:text-white/80 dark:group-hover:text-white">
                    <span>Read Pillar</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Testimonials (All 4 Verified Client & Landowner Quotes) */}
      <section className="bg-alabaster py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
              Client &amp; Landowner Voices
            </span>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-charcoal sm:text-5xl">
              Trusted by Homeowners &amp; Partners
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((item) => (
              <article
                key={item.id}
                className="flex min-w-0 flex-col justify-between border border-stone bg-surface p-7 shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <Quote className="h-7 w-7 text-crimson-ink/45" />
                    <RatingStars rating={item.rating} />
                  </div>
                  <blockquote className="mt-4 [overflow-wrap:anywhere] text-sm leading-relaxed text-charcoal/90 sm:text-base">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-stone pt-5">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-stone bg-limestone">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-charcoal">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-concrete">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Latest News & Milestones (All 6 Blog Posts) */}
      <section className="relative overflow-hidden border-t border-stone bg-limestone py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                Journal &amp; Ceremonies
              </span>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-charcoal sm:text-5xl">
                Latest News
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition hover:text-crimson-ink"
            >
              <span>View All 6 Stories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group flex min-w-0 flex-col overflow-hidden border border-stone bg-surface transition hover:-translate-y-1 hover:shadow-editorial"
              >
                <Link
                  to={`/blog-details/${post.id}`}
                  className="aspect-[16/10] overflow-hidden bg-obsidian"
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2 text-xs text-concrete">
                    <span className="font-semibold uppercase tracking-wider text-crimson-ink">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-charcoal group-hover:text-crimson-ink">
                    <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 flex-1 [overflow-wrap:anywhere] text-sm text-concrete">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog-details/${post.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal group-hover:text-crimson-ink"
                  >
                    <span>Read Story</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Members & Certification Strip */}
      <section className="border-t border-stone bg-alabaster py-14 transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2.5">
              <Award className="h-5 w-5 text-crimson-ink" />
              <h2 className="font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
                Members &amp; Certification
              </h2>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-concrete">
              Official Accreditations &amp; Trade Affiliations
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.image}
                className="flex h-24 items-center justify-center border border-stone bg-white/95 p-4 transition hover:border-bronze"
                title={cert.name}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
