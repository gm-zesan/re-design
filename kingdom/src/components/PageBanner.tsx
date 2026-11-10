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
  badge?: string;
}

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  badge,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#E5DFD0] bg-[#1E1B5E] text-white dark:border-white/10 dark:bg-[#0D1024]">
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1122]/95 via-[#1E1B5E]/90 to-[#1E1B5E]/80" />
        </>
      ) : (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-white/75">
          <Link to="/" className="inline-flex items-center gap-1 transition hover:text-[#E5C17B]">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={`${crumb.label}-${idx}`} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              {crumb.to ? (
                <Link to={crumb.to} className="transition hover:text-[#E5C17B]">
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
              <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#E5C17B]">
                {eyebrow}
              </span>
              {badge && (
                <span className="rounded-full border border-[#B8862D]/50 bg-[#B8862D]/20 px-2.5 py-0.5 font-mono-tech text-[11px] font-medium text-[#F5DC9C]">
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
      <div className="relative h-1 w-full bg-gradient-to-r from-[#B8862D] via-[#E5C17B] to-[#2E3192]" />
    </section>
  );
}

