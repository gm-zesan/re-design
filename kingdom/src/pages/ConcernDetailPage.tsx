import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Info,
  MapPin,
  Maximize2,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ImageLightbox } from '../components/ImageLightbox';
import { CONCERN_COMPANIES } from '../data/concernsData';
import { OFFICES_DATA, SITE_META } from '../data/siteData';

export function ConcernDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const company = CONCERN_COMPANIES.find((c) => c.slug === slug);

  if (!company) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-semibold text-[#18191D] dark:text-white">
          Concern Profile Not Found
        </h1>
        <p className="mt-2 text-sm text-[#52555E] dark:text-zinc-300">
          The requested sister concern could not be matched. Explore all 7 KINGDOM GROUP entities below.
        </p>
        <Link
          to="/concerns"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#18191D] px-5 py-2.5 text-sm font-semibold text-white dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>View All Concerns</span>
        </Link>
      </div>
    );
  }

  const linkedOffice = company.contactOfficeId
    ? OFFICES_DATA.find((o) => o.id === company.contactOfficeId)
    : undefined;

  const concernBannerMap: Record<string, string> = {
    construction: '/images/hero/stone-crusher.jpg',
    'trading-co': '/images/hero/truck1.jpg',
    agro: '/images/hero/kingdom-city-development.jpg',
    foundation: '/images/gallery/jakat-dhaka.jpg',
    softbangla: '/images/about/about-banner.jpg',
    'kingdom-ltd': '/images/hero/kingdom-flagship-hero.jpg',
  };

  return (
    <div>
      <PageBanner
        eyebrow="KINGDOM GROUP Sister Concern"
        title={company.name}
        subtitle={company.sector}
        breadcrumbs={[
          { label: 'Our Concern', to: '/concerns' },
          { label: company.name },
        ]}
        backgroundImage={concernBannerMap[company.slug] ?? '/images/hero/kingdom-flagship-hero.jpg'}
        badge={company.slug === 'softbangla' ? 'BASIS Member Sector' : 'Group Company'}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Identity Card */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 text-center shadow-xs dark:border-white/10 dark:bg-[#1A1C21]">
              <img
                src={company.logo}
                alt={company.name}
                className="mx-auto h-24 w-auto max-w-full object-contain dark:brightness-125 dark:drop-shadow-[0_0_0.6px_rgba(255,255,255,0.95)]"
              />
              <h2 className="mt-4 font-display text-xl font-semibold text-[#18191D] dark:text-white">
                {company.name}
              </h2>
              {company.tagline && (
                <p className="font-bengali mt-2 rounded-lg bg-[#F2F1EE] px-3 py-2 text-sm font-semibold text-[#18191D] dark:bg-[#C9A46B]/18 dark:text-[#DFC69B]">
                  {company.tagline}
                </p>
              )}
              <p className="mt-3 text-xs font-medium text-[#8C6730] dark:text-[#C9A46B]">{company.sector}</p>
            </div>

            {linkedOffice && (
              <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21]">
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                  Associated Operations Office
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-[#18191D] dark:text-white">
                  {linkedOffice.title}
                </h3>
                <div className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-[#52555E] dark:text-zinc-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                  <div>
                    {linkedOffice.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
                {linkedOffice.mobiles?.map((mob) => (
                  <a
                    key={mob}
                    href={`tel:${mob.replace(/\s+/g, '')}`}
                    className="mt-3 inline-flex items-center gap-1.5 font-mono-tech text-xs font-semibold text-[#18191D] dark:text-[#C9A46B]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#8C6730] dark:text-[#C9A46B]" />
                    <span>{mob}</span>
                  </a>
                ))}
                {linkedOffice.note && (
                  <p className="mt-3 border-t border-[#E4E3DF] pt-2 text-[11px] text-[#52555E] dark:border-white/10 dark:text-zinc-400">
                    {linkedOffice.note}
                  </p>
                )}
              </div>
            )}

            <div className="rounded-2xl border border-[#E4E3DF] bg-[#F9F9F8] p-5 dark:border-white/10 dark:bg-[#141518]">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#18191D] dark:text-[#C9A46B]">
                Switch Sister Concern
              </p>
              <div className="mt-3 space-y-1.5">
                {CONCERN_COMPANIES.map((other) => (
                  <Link
                    key={other.slug}
                    to={other.route}
                    className={`block rounded-lg px-3 py-2 text-xs font-medium transition ${
                      other.slug === company.slug
                        ? 'bg-[#18191D] text-white dark:bg-[#8C6730] dark:text-[#111215]'
                        : 'bg-white text-[#141518] ring-1 ring-[#E4E3DF] hover:bg-[#F2F1EE] dark:bg-[#1A1C21] dark:text-white/90 dark:ring-white/10 dark:hover:bg-white/10'
                    }`}
                  >
                    {other.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Main Profile */}
          <div className="space-y-8 lg:col-span-8">
            <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
              <div className="flex items-center gap-2 text-[#18191D] dark:text-white">
                <Building2 className="h-5 w-5 text-[#8C6730] dark:text-[#C9A46B]" />
                <h2 className="font-display text-2xl font-semibold">Corporate Profile</h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#52555E] dark:text-zinc-300">{company.summary}</p>

              {/* Softbangla BASIS badge or Construction civil capabilities */}
              {company.slug === 'softbangla' && (
                <div className="mt-6 flex items-center gap-4 rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] p-4 dark:border-white/10 dark:bg-[#141518]">
                  <img
                    src="/images/members/basis.png"
                    alt="BASIS Member Logo"
                    className="h-12 w-auto rounded bg-white p-1.5 object-contain"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#18191D] dark:text-white">
                      BASIS Industry Affiliation
                    </p>
                    <p className="text-xs text-[#52555E] dark:text-zinc-300">
                      Original footer carries the active BASIS (Bangladesh Association of Software
                      &amp; Information Services) membership seal, matching SOFTBANGLA Automation Ltd.
                      and Major General Md Abdur Rashid&rsquo;s documented BASIS membership.
                    </p>
                  </div>
                </div>
              )}

              {company.slug === 'construction' && (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Highway Construction (RHD, PWD, Public & Private)',
                    'Site Development & Land Grading',
                    'Underground Utilities Infrastructure',
                    'Residential & Commercial RCC Structures',
                  ].map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2 rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-3 text-sm font-medium text-[#141518] dark:border-white/10 dark:bg-[#141518] dark:text-white"
                    >
                      <ShieldCheck className="h-4 w-4 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-Divisions preserved verbatim */}
              {company.subUnits.length > 0 && (
                <div className="mt-8 border-t border-[#E4E3DF] pt-6 dark:border-white/10">
                  <h3 className="font-display text-xl font-semibold text-[#18191D] dark:text-white">
                    Operating Sub-Divisions (Navigation Hierarchy)
                  </h3>
                  <div className="mt-4 space-y-4">
                    {company.subUnits.map((unit) => (
                      <div
                        key={unit.name}
                        className="rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] p-4 dark:border-white/10 dark:bg-[#141518]"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-display text-base font-semibold text-[#141518] dark:text-white">
                            {unit.name}
                          </h4>
                          <span className="font-mono-tech text-[10px] text-[#52555E] dark:text-zinc-400">
                            Origin link: {unit.originalHref}
                          </span>
                        </div>
                        {unit.note && (
                          <p className="mt-1.5 text-xs leading-relaxed text-[#52555E] dark:text-zinc-300">
                            {unit.note}
                          </p>
                        )}
                        {unit.children && unit.children.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {unit.children.map((child) => (
                              <span
                                key={child.name}
                                className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-[#18191D] ring-1 ring-[#E4E3DF] dark:bg-white/10 dark:text-[#DFC69B] dark:ring-white/15"
                              >
                                {child.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Transparent Origin Audit Status */}
              <div className="mt-8 rounded-xl border border-[#8C6730]/40 bg-[#F2F1EE]/65 p-4 dark:border-[#8C6730]/30 dark:bg-[#1E2026]">
                <div className="flex items-start gap-2.5">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                  <div>
                    <p className="text-xs font-semibold text-[#141518] dark:text-white">
                      Original Website Content Preservation Note
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#52555E] dark:text-zinc-300">
                      {company.auditStatus} No speculative marketing copy has been invented beyond
                      the verified brand marks, sub-menus, field imagery, office contacts, and
                      corporate facts extracted from <code className="font-mono-tech">kingdom.com.bd</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Visuals */}
            {company.featuredImages && company.featuredImages.length > 0 && (
              <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                <h3 className="font-display text-xl font-semibold text-[#18191D] dark:text-white">
                  Verified Field &amp; Activity Photography
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {company.featuredImages.map((img) => (
                    <div
                      key={img.src}
                      className="group overflow-hidden rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] dark:border-white/10 dark:bg-[#141518]"
                    >
                      <div className="relative">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setLightbox({
                              src: img.src,
                              alt: img.caption,
                              title: `${company.name} — ${img.caption}`,
                            })
                          }
                          className="absolute bottom-2.5 right-2.5 rounded-lg bg-[#111215]/85 p-2 text-white transition hover:bg-[#18191D]"
                          aria-label={`Inspect ${img.caption}`}
                        >
                          <Maximize2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="p-3 text-xs font-medium text-[#141518] dark:text-zinc-200">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Action Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E4E3DF] bg-[#18191D] p-6 text-white dark:border-white/10 dark:bg-[#141518]">
              <div>
                <p className="font-display text-lg font-semibold">
                  Need Business or Career Assistance Regarding {company.shortTitle}?
                </p>
                <p className="mt-1 text-xs text-white/75">
                  24h Control Unit: {SITE_META.primaryPhone} • {SITE_META.primaryEmail}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#C9A46B] px-4 py-2 text-xs font-semibold text-[#0C0D0F] transition hover:bg-[#DFBE88]"
                >
                  <span>Contact Offices</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/career/apply"
                  className="rounded-lg border border-white/25 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  Submit CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          title={lightbox.title}
          isOpen
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}

