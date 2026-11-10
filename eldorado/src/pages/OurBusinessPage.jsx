import { Link } from 'react-router-dom';
import { Building2, ExternalLink, Factory, Palette } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { OUR_BUSINESSES } from '../data/siteData';

const CONCERN_META = [
  { Icon: Building2, code: '01', badge: 'Real Estate Flagship' },
  { Icon: Factory, code: '02', badge: 'Industrial Manufacturing' },
  { Icon: Palette, code: '03', badge: 'Artisan & Export' },
  { Icon: Factory, code: '04', badge: 'Jute Textile & Exports' },
];

export default function OurBusinessPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Rajbari Group Conglomerate"
        title="Our Business"
        subtitle="El Dorado Developments Ltd. operates as a proud sister concern alongside diversified industrial and craft enterprises under Rajbari Group."
        breadcrumbs={[
          { label: 'About Us', to: '/about-us' },
          { label: 'Our Business' },
        ]}
        image="/media/slider/eadded46702631.58605976a27f7.jpg"
        badgeLabel="Sister Concerns"
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {OUR_BUSINESSES.map((biz, idx) => {
              const meta = CONCERN_META[idx] || CONCERN_META[0];
              const Icon = meta.Icon;

              return (
                <article
                  key={biz.name}
                  className="flex flex-col justify-between border border-stone bg-surface p-8 shadow-card transition hover:border-bronze"
                >
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      {biz.logoOk ? (
                        <div className="flex h-20 items-center">
                          <img
                            src={biz.logo}
                            alt={biz.name}
                            className="max-h-14 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex h-20 w-44 items-center justify-center border border-stone bg-alabaster px-4 py-2">
                          <div className="flex items-center gap-2.5 text-charcoal">
                            <Icon className="h-6 w-6 shrink-0 text-crimson-ink" />
                            <span className="font-serif text-base font-semibold leading-tight">
                              {biz.name
                                .replace(' Ltd', '')
                                .split(' ')
                                .slice(0, 2)
                                .join(' ')}
                            </span>
                          </div>
                        </div>
                      )}
                      <span className="font-mono text-xs font-semibold tracking-widest text-bronze-ink">
                        CONCERN {meta.code}
                      </span>
                    </div>

                    <span className="mt-6 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-crimson-ink">
                      {meta.badge}
                    </span>
                    <h2 className="mt-1 font-serif text-3xl font-semibold text-charcoal">
                      {biz.name}
                    </h2>
                    <p className="mt-2 text-sm text-concrete">{biz.sector}</p>
                    {!biz.logoOk && (
                      <p className="mt-3 text-xs italic text-concrete/80">
                        Note: Concern brand image unavailable on origin media
                        server; displaying verified architectural emblem.
                      </p>
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-stone pt-6">
                    <a
                      href={biz.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-obsidian bg-obsidian px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-crimson hover:bg-crimson dark:border-white/20 dark:bg-[#272D37] dark:hover:border-crimson dark:hover:bg-crimson"
                    >
                      <span>Visit Us</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    {biz.internalRoute && (
                      <Link
                        to={biz.internalRoute}
                        className="inline-flex items-center gap-2 border border-stone bg-alabaster px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:border-crimson hover:text-crimson-ink"
                      >
                        <span>Explore Portfolio</span>
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
