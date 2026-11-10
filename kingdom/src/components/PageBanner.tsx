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
    <section className="relative flex min-h-[250px] flex-col justify-end overflow-hidden border-b border-[#E4E3DF] bg-[#0C0D0F] text-white dark:border-white/10 dark:bg-[#090A0C] sm:min-h-[290px] lg:min-h-[320px]">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover ${backgroundPositionClass}`}
      />
      {/* Directional & bottom edge gradient scrim: keeps left/bottom typography legible while leaving photography clear */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0C0D0F]/85 via-[#0C0D0F]/50 to-[#0C0D0F]/15 dark:from-[#090A0C]/90 dark:via-[#090A0C]/58 dark:to-[#090A0C]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0D0F]/80 via-[#0C0D0F]/25 to-black/20"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-white/75">
          <Link to="/" className="inline-flex items-center gap-1 transition hover:text-[#C9A46B]">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={`${crumb.label}-${idx}`} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              {crumb.to ? (
                <Link to={crumb.to} className="transition hover:text-[#C9A46B]">
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
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#C9A46B]">
                {eyebrow}
              </span>
              {badge && (
                <span className="rounded-full border border-[#8C6730]/50 bg-[#C9A46B]/18 px-2.5 py-0.5 font-mono-tech text-[11px] font-medium text-[#DFC69B]">
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
      <div className="relative h-1 w-full bg-gradient-to-r from-[#8C6730] via-[#C9A46B] to-[#2E3036]" />
    </section>
  );
}

