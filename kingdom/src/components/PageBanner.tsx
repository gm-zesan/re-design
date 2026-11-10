import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageBannerProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  backgroundPositionClass?: string;
  badge?: string;
}

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = '/images/hero/kingdom-flagship-hero.jpg',
  backgroundPositionClass = 'object-center',
  badge,
}: PageBannerProps) {
  return (
    <section className="relative flex min-h-[250px] flex-col justify-end overflow-hidden border-b border-[#E2E8F0] bg-[#0B1120] text-white dark:border-white/10 dark:bg-[#060A13] sm:min-h-[290px] lg:min-h-[320px]">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover ${backgroundPositionClass}`}
      />
      {/* Directional & bottom edge gradient scrim: keeps left/bottom typography legible while leaving photography clear */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B1120]/85 via-[#0B1120]/50 to-[#0B1120]/15 dark:from-[#060A13]/90 dark:via-[#060A13]/58 dark:to-[#060A13]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-[#0B1120]/25 to-black/20"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-white/75">
          <Link to="/" className="inline-flex items-center gap-1 transition hover:text-[#93C5FD]">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={`${crumb.label}-${idx}`} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              {crumb.to ? (
                <Link to={crumb.to} className="transition hover:text-[#93C5FD]">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-2.5">
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#93C5FD]">
                {eyebrow}
              </span>
              {badge && (
                <span className="rounded-full border border-[#60A5FA]/45 bg-[#3B5BDB]/25 px-2.5 py-0.5 font-mono-tech text-[11px] font-medium text-[#BFDBFE]">
                  {badge}
                </span>
              )}
            </div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Subtle architectural bottom accent line */}
      <div className="relative h-1 w-full bg-gradient-to-r from-[#2D3192] via-[#3B5BDB] to-[#C8232C]" />
    </section>
  );
}

