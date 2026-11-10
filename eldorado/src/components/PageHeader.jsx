import { Link } from 'react-router-dom';
import { Building2, ChevronRight } from 'lucide-react';

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumbs = [],
  dark = false,
  image = '/media/slider/project-51-1920x1200.webp',
  badgeLabel = 'Dhaka Landmarks • Since 2003',
  rightSlot = null,
}) {
  return (
    <section
      className={`relative overflow-hidden border-b transition-colors duration-200 ${
        dark
          ? 'border-white/10 bg-obsidian text-white'
          : 'border-stone bg-limestone text-charcoal dark:border-white/10 dark:bg-obsidian dark:text-white'
      }`}
    >
      {/* Full-Bleed Architectural Photograph Backdrop */}
      {image && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <img
            src={image}
            alt=""
            className={`h-full w-full scale-[1.03] object-cover object-[72%_center] transition-opacity duration-200 ${
              dark ? 'opacity-55' : 'opacity-90 dark:opacity-55'
            }`}
          />
          <div
            className={`absolute inset-0 ${
              dark ? 'page-hero-scrim-dark' : 'page-hero-scrim'
            }`}
          />
          <div
            className={`absolute inset-0 ${
              dark
                ? 'bg-gradient-to-t from-obsidian/70 via-transparent to-obsidian/25'
                : 'bg-gradient-to-t from-limestone/40 via-transparent to-transparent dark:from-obsidian/70 dark:via-transparent dark:to-obsidian/25'
            }`}
          />
        </div>
      )}

      {/* Architectural Grid Texture & Top Signature Rule */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-45 dark:opacity-60 ${
          dark ? 'bg-arch-grid-dark' : 'bg-arch-grid dark:bg-arch-grid-dark'
        }`}
      />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-crimson via-bronze to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={`mb-6 inline-flex flex-wrap items-center gap-1.5 border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur-md ${
              dark
                ? 'border-white/15 bg-white/5 text-white/75'
                : 'border-stone bg-white/95 text-concrete shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white/75'
            }`}
          >
            <Link
              to="/"
              className={`transition-colors ${
                dark
                  ? 'hover:text-white'
                  : 'hover:text-crimson-ink dark:hover:text-white'
              }`}
            >
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 opacity-55" />
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className={`transition-colors ${
                      dark
                        ? 'hover:text-white'
                        : 'hover:text-crimson-ink dark:hover:text-white'
                    }`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={
                      dark
                        ? 'text-bronze-light'
                        : 'text-crimson-ink dark:text-bronze-light'
                    }
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 max-w-2xl">
            {eyebrow && (
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-crimson" />
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                    dark
                      ? 'text-bronze-light'
                      : 'text-crimson-ink dark:text-bronze-light'
                  }`}
                >
                  {eyebrow}
                </p>
              </div>
            )}

            <h1 className="font-serif text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-4 max-w-2xl border-l-2 border-crimson/70 pl-4 text-base leading-relaxed sm:text-lg ${
                  dark
                    ? 'text-white/80'
                    : 'text-charcoal/80 dark:text-white/80'
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            {rightSlot ? (
              <div className="shrink-0 shadow-2xl">{rightSlot}</div>
            ) : (
              image && (
                <div
                  className={`hidden lg:block w-full max-w-[310px] border-t-2 border-t-crimson border-x border-b p-2.5 shadow-2xl backdrop-blur-md ${
                    dark
                      ? 'border-white/15 bg-[#161920]/90 text-white'
                      : 'border-stone/90 bg-white/95 text-charcoal dark:border-white/15 dark:bg-[#161920]/90 dark:text-white'
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-obsidian">
                    <img
                      src={image}
                      alt={`${title} architectural vista`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div
                    className={`mt-2.5 flex items-center justify-between gap-2 border-t pt-2 px-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                      dark
                        ? 'border-white/10'
                        : 'border-stone/70 dark:border-white/10'
                    }`}
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 ${
                        dark
                          ? 'text-bronze-light'
                          : 'text-crimson-ink dark:text-bronze-light'
                      }`}
                    >
                      <Building2 className="h-3 w-3 shrink-0" />
                      <span>El Dorado</span>
                    </span>
                    <span
                      className={`truncate ${
                        dark
                          ? 'text-white/65'
                          : 'text-concrete dark:text-white/65'
                      }`}
                    >
                      {badgeLabel}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
