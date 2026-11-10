import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Info,
  MapPin,
  Maximize2,
  Phone,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ImageLightbox } from '../components/ImageLightbox';
import {
  BUILDERS_PROJECTS,
  BUILDERS_SIDEBAR_TABS,
} from '../data/concernsData';

export function BuildersPage() {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    title: string;
    caption?: string;
  } | null>(null);

  return (
    <div>
      <PageBanner
        eyebrow="KINGDOM Builders Ltd. • Real Estate & Towers"
        title="KINGDOM BUILDERS LTD."
        subtitle='“Dedicated to Quality and Commitment” — Around 700 apartments handed over since 2006 alongside public-private commercial & auditorium developments.'
        breadcrumbs={[
          { label: 'Our Concern', to: '/concerns' },
          { label: 'KINGDOM Builders Ltd.' },
        ]}
        backgroundImage="/images/hero/kingdom-flagship-hero.jpg"
        badge="~700 Handovers"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-5">
              <div className="overflow-hidden rounded-2xl border border-[#E4E3DF] bg-white shadow-xs dark:border-white/10 dark:bg-[#1A1C21]">
                <div className="border-b border-[#E4E3DF] bg-[#F2F1EE] px-4 py-3 dark:border-white/10 dark:bg-[#141518]">
                  <p className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#18191D] dark:text-[#C9A46B]">
                    KINGDOM BUILDERS LTD.
                  </p>
                </div>
                <nav className="p-2" aria-label="Builders navigation">
                  {BUILDERS_SIDEBAR_TABS.map((tab) => {
                    const active = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition ${
                          active
                            ? 'bg-[#18191D] text-white dark:bg-[#8C6730] dark:text-[#111215]'
                            : 'text-[#141518] hover:bg-[#F9F9F8] hover:text-[#18191D] dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-[#DFC69B]'
                        }`}
                      >
                        <span>{tab.label}</span>
                        {!tab.isPopulated && (
                          <span
                            className={`rounded px-1.5 py-0.5 font-mono-tech text-[10px] ${
                              active
                                ? 'bg-white/20 text-white dark:bg-black/15 dark:text-[#111215]'
                                : 'bg-[#F2F1EE] text-[#52555E] dark:bg-white/10 dark:text-zinc-300'
                            }`}
                          >
                            #
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="rounded-2xl border border-[#E4E3DF] bg-white p-5 dark:border-white/10 dark:bg-[#1A1C21]">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/concerns/kingdom-builders.png"
                    alt="KINGDOM Builders Logo"
                    className="h-12 w-14 shrink-0 object-contain dark:brightness-125 dark:drop-shadow-[0_0_0.5px_rgba(255,255,255,0.95)]"
                  />
                  <div>
                    <p className="font-display text-sm font-semibold text-[#18191D] dark:text-white">
                      Shariatpur Office
                    </p>
                    <p className="text-xs text-[#52555E] dark:text-zinc-300">Zilla Parishad Kingdom Tower</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#52555E] dark:text-zinc-300">
                  Chowrongy, Palong, Shariatpur Sadar, Shariatpur
                </p>
                <a
                  href="tel:+8801711925095"
                  className="mt-2 inline-flex items-center gap-1.5 font-mono-tech text-xs font-semibold text-[#18191D] dark:text-[#C9A46B]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#8C6730] dark:text-[#C9A46B]" />
                  <span>+88 01711-925095</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Area */}
          <div className="space-y-8 lg:col-span-9">
            {activeTab === 'ongoing' ? (
              <>
                <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E4E3DF] pb-4 dark:border-white/10">
                    <div>
                      <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                        KINGDOM Private Development Project
                      </span>
                      <h2 className="mt-1 font-display text-2xl font-semibold text-[#18191D] dark:text-white sm:text-3xl">
                        Ongoing Projects
                      </h2>
                    </div>
                    <span className="rounded-full bg-[#F2F1EE] px-3 py-1 font-mono-tech text-xs font-semibold text-[#18191D] dark:bg-[#C9A46B]/18 dark:text-[#DFC69B]">
                      3 Listed Active Cards
                    </span>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {BUILDERS_PROJECTS.map((project) => (
                      <article
                        key={project.id}
                        className="flex flex-col overflow-hidden rounded-2xl border border-[#E4E3DF] bg-[#F9F9F8] shadow-2xs transition hover:border-[#18191D]/40 dark:border-white/10 dark:bg-[#141518] dark:hover:border-[#C9A46B]/40"
                      >
                        <div className="group relative bg-white p-3 dark:bg-[#141518]">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="aspect-[4/3] w-full rounded-xl object-contain"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setLightbox({
                                src: project.image,
                                alt: project.name,
                                title: project.name,
                                caption: project.addressLines.join(' — '),
                              })
                            }
                            className="absolute bottom-5 right-5 rounded-lg bg-[#111215]/85 p-2 text-white transition hover:bg-[#18191D]"
                            aria-label={`Inspect ${project.name}`}
                          >
                            <Maximize2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-5">
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono-tech text-[10px] uppercase tracking-wider text-[#8C6730] dark:text-[#C9A46B]">
                                {project.category}
                              </span>
                              <span className="rounded bg-white px-2 py-0.5 font-mono-tech text-[10px] font-semibold text-[#18191D] ring-1 ring-[#E4E3DF] dark:bg-white/10 dark:text-[#DFC69B] dark:ring-white/15">
                                Type: {project.type}
                              </span>
                            </div>
                            <h3 className="mt-2 font-display text-xl font-semibold text-[#18191D] dark:text-white">
                              {project.name}
                            </h3>
                            <div className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-[#141518] dark:text-zinc-200">
                              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                              <div>
                                {project.addressLines.map((line) => (
                                  <p key={line}>{line}</p>
                                ))}
                                <p className="mt-0.5 text-[#52555E] dark:text-zinc-400">{project.country}</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 border-t border-[#E4E3DF] pt-3 dark:border-white/10">
                            <p className="font-mono-tech text-[10px] text-[#52555E] dark:text-zinc-400">
                              CMS Locality: {project.cmsLocality}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Zilla Parishad Kingdom Tower & Visual Perspectives */}
                <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                        District HQ Tower &amp; Architectural Perspectives
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-[#18191D] dark:text-white">
                        Zilla Parishad Kingdom Tower &amp; Residential Concepts
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-3">
                    {[
                      {
                        src: '/images/hero/zilla-parishad-tower.jpg',
                        title: 'Zilla Parishad Kingdom Tower',
                        subtitle: 'Chowrongy, Palong, Shariatpur Sadar (+88 01711-925095)',
                      },
                      {
                        src: '/images/hero/builders-banner.jpg',
                        title: 'KINGDOM Residential Corner Tower',
                        subtitle: '6-story multi-family apartment architecture',
                      },
                      {
                        src: '/images/hero/builders-evening.jpg',
                        title: 'Evening Facade Render',
                        subtitle: 'Contemporary residential apartment tower',
                      },
                    ].map((render) => (
                      <div
                        key={render.src}
                        className="group overflow-hidden rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] dark:border-white/10 dark:bg-[#141518]"
                      >
                        <div className="relative">
                          <img
                            src={render.src}
                            alt={render.title}
                            className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setLightbox({
                                src: render.src,
                                alt: render.title,
                                title: render.title,
                                caption: render.subtitle,
                              })
                            }
                            className="absolute bottom-2.5 right-2.5 rounded-lg bg-[#111215]/85 p-2 text-white transition hover:bg-[#18191D]"
                            aria-label={`Expand ${render.title}`}
                          >
                            <Maximize2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="p-4">
                          <p className="font-display text-base font-semibold text-[#141518] dark:text-white">
                            {render.title}
                          </p>
                          <p className="mt-1 text-xs text-[#52555E] dark:text-zinc-300">{render.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                <div className="flex items-start gap-3 rounded-xl border border-[#8C6730]/40 bg-[#F2F1EE]/60 p-5 dark:border-[#8C6730]/30 dark:bg-[#1E2026]">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                  <div>
                    <h2 className="font-display text-xl font-semibold text-[#18191D] dark:text-white">
                      {BUILDERS_SIDEBAR_TABS.find((t) => t.id === activeTab)?.label} — Origin Placeholders Preserved
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#52555E] dark:text-zinc-300">
                      On the live website (<code className="font-mono-tech">/home/content_builders</code>),
                      the sidebar links for <strong>About</strong>, <strong>Builders Plan</strong>,{' '}
                      <strong>Members</strong>, and <strong>Photo Gallery</strong> point to unlinked{' '}
                      <code className="font-mono-tech">#</code> placeholders without separate subpages.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#52555E] dark:text-zinc-300">
                      Verified facts for KINGDOM Builders Ltd. documented on About Us confirm its 2006
                      incorporation (&ldquo;Dedicated to Quality and Commitment&rdquo;),{' '}
                      <strong className="dark:text-white">around 700 apartments handed over</strong>, and District Headquarters
                      construction contracts with Local Government agencies.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveTab('ongoing')}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#18191D] px-4 py-2 text-xs font-semibold text-white dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
                      >
                        <Layers className="h-3.5 w-3.5" />
                        <span>Return to Ongoing Projects</span>
                      </button>
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E4E3DF] bg-white px-4 py-2 text-xs font-semibold text-[#141518] dark:border-white/15 dark:bg-[#141518] dark:text-white dark:hover:border-[#C9A46B]"
                      >
                        <Building2 className="h-3.5 w-3.5" />
                        <span>View About Us</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          title={lightbox.title}
          caption={lightbox.caption}
          isOpen
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}

