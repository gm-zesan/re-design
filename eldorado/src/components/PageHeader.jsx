import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumbs = [],
  dark = true,
  rightSlot = null,
}) {
  return (
    <section
      className={`relative overflow-hidden border-b ${
        dark
          ? 'bg-obsidian text-white border-white/10 bg-arch-grid-dark'
          : 'bg-limestone text-charcoal border-stone bg-arch-grid'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={`mb-5 flex flex-wrap items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] ${
              dark ? 'text-white/65' : 'text-concrete'
            }`}
          >
            <Link
              to="/"
              className={`transition-colors ${
                dark ? 'hover:text-white' : 'hover:text-crimson-ink'
              }`}
            >
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className={`transition-colors ${
                      dark ? 'hover:text-white' : 'hover:text-crimson-ink'
                    }`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={dark ? 'text-bronze-light' : 'text-crimson-ink'}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && (
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
                  dark ? 'text-bronze-light' : 'text-crimson-ink'
                }`}
              >
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p
                className={`mt-4 text-base leading-relaxed sm:text-lg ${
                  dark ? 'text-white/75' : 'text-concrete'
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
          {rightSlot && <div className="shrink-0">{rightSlot}</div>}
        </div>
      </div>
    </section>
  );
}

