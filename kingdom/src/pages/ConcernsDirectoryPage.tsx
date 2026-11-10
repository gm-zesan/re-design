import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileWarning } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { CONCERN_COMPANIES } from '../data/concernsData';

export function ConcernsDirectoryPage() {
  return (
    <div>
      <PageBanner
        eyebrow="Our Concern"
        title="KINGDOM GROUP Sister Concerns"
        subtitle="Complete architectural overview of all 7 business and social welfare concerns listed in the KINGDOM GROUP conglomerate navigation."
        breadcrumbs={[{ label: 'Our Concern' }]}
        backgroundImage="/images/hero/kingdom-flagship-hero.jpg"
        badge="7 Group Entities"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {CONCERN_COMPANIES.map((company) => (
            <article
              key={company.slug}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-2xs transition hover:border-[#2D3192]/35 dark:border-white/10 dark:bg-[#141D35] dark:hover:border-[#93C5FD]/40 sm:p-8"
            >
              <div className="grid items-start gap-6 lg:grid-cols-12">
                <div className="flex items-center gap-4 lg:col-span-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-16 w-24 shrink-0 object-contain dark:brightness-125 dark:drop-shadow-[0_0_0.6px_rgba(255,255,255,0.95)]"
                  />
                  <div>
                    <h2 className="font-display text-xl font-semibold text-[#2D3192] dark:text-white">
                      {company.name}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-[#2D3192] dark:text-[#93C5FD]">{company.sector}</p>
                    {company.tagline && (
                      <p className="font-bengali mt-1 text-xs text-[#475569] dark:text-slate-300">
                        {company.tagline}
                      </p>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed text-[#475569] dark:text-slate-300">{company.summary}</p>

                  {company.subUnits.length > 0 && (
                    <div className="mt-4 space-y-2 border-t border-[#E2E8F0] pt-3 dark:border-white/10">
                      <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[#475569] dark:text-slate-400">
                        Divisions &amp; Sub-Menus
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {company.subUnits.map((unit) => (
                          <div
                            key={unit.name}
                            className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1.5 text-xs dark:border-white/10 dark:bg-[#10182C]"
                          >
                            <span className="font-semibold text-[#0F172A] dark:text-white">{unit.name}</span>
                            {unit.children && (
                              <span className="ml-1.5 text-[#475569] dark:text-slate-300">
                                ({unit.children.map((c) => c.name).join(', ')})
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between gap-3 lg:col-span-3 lg:items-end">
                  <div
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium ${
                      company.hasOriginalDedicatedContent
                        ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:ring-emerald-500/30'
                        : 'bg-[#F1F5F9] text-[#0F172A] ring-1 ring-[#E2E8F0] dark:bg-white/10 dark:text-[#BFDBFE] dark:ring-white/15'
                    }`}
                  >
                    {company.hasOriginalDedicatedContent ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      <FileWarning className="h-3.5 w-3.5 text-[#2D3192] dark:text-[#93C5FD]" />
                    )}
                    <span>
                      {company.hasOriginalDedicatedContent
                        ? 'Full Origin Sub-Portal'
                        : 'Consolidated Origin Data'}
                    </span>
                  </div>

                  <p className="text-left text-xs text-[#475569] dark:text-slate-300 lg:text-right">
                    {company.auditStatus}
                  </p>

                  <Link
                    to={company.route}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#2D3192] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#1E2270] dark:bg-[#3B5BDB] dark:text-white dark:hover:bg-[#4C6EF5]"
                  >
                    <span>Open Concern Page</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
