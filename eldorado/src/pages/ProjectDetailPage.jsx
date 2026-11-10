import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CarFront,
  ChevronLeft,
  ChevronRight,
  Compass,
  Expand,
  Home,
  Info,
  Layers,
  MapPin,
  Maximize2,
  Phone,
  Sparkles,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ImageWithFallback from '../components/ImageWithFallback';
import LightboxModal from '../components/LightboxModal';
import ProjectCard from '../components/ProjectCard';
import { PROJECT_CATEGORIES, PROJECTS } from '../data/projects';

const STATUS_BADGE = {
  ongoing: { label: 'Ongoing Project', className: 'bg-crimson text-white' },
  upcoming: { label: 'Upcoming Project', className: 'bg-bronze text-white' },
  handover: {
    label: 'Handed Over Project',
    className: 'bg-obsidian text-white',
  },
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => String(p.id) === String(id));

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageIdx(0);
    setLightboxOpen(false);
  }, [id]);

  if (!project) {
    return (
      <div>
        <PageHeader
          eyebrow="Portfolio Directory"
          title="Project Not Found"
          subtitle="We could not locate a development dossier with the requested ID."
          breadcrumbs={[
            { label: 'Projects', to: '/projects' },
            { label: 'Not Found' },
          ]}
        />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to All 23 Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  const categoryMeta =
    PROJECT_CATEGORIES[project.status] || PROJECT_CATEGORIES.ongoing;
  const badge = STATUS_BADGE[project.status] || STATUS_BADGE.ongoing;
  const specs = project.specs || {};
  const validImages = project.images || [];
  const brokenImages = project.brokenImages || [];

  const relatedProjects = PROJECTS.filter(
    (p) => p.status === project.status && p.id !== project.id
  ).slice(0, 3);

  const specRows = [
    { label: 'Address', value: specs.address, Icon: MapPin },
    { label: 'Nature', value: specs.nature, Icon: Building2 },
    { label: 'Storey', value: specs.storey, Icon: Layers },
    { label: 'Land Area', value: specs.landArea, Icon: Compass },
    { label: 'No. of Apartments', value: specs.apartments, Icon: Home },
    { label: 'Car Parking', value: specs.carParking, Icon: CarFront },
    {
      label: 'No. of Elevator / Lift',
      value: specs.elevators,
      Icon: Sparkles,
    },
    { label: 'Apartment Size', value: specs.apartmentSize, Icon: Maximize2 },
  ].filter((row) => row.value && String(row.value).trim() !== '');

  return (
    <div>
      <PageHeader
        eyebrow={categoryMeta.label}
        title={project.title}
        subtitle={specs.address || categoryMeta.subtitle}
        breadcrumbs={[
          { label: 'Projects', to: '/projects' },
          { label: categoryMeta.label, to: categoryMeta.route },
          { label: `Project #${project.id}` },
        ]}
        rightSlot={
          <span
            className={`inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${badge.className}`}
          >
            {badge.label}
          </span>
        }
      />

      <section className="bg-alabaster py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Gallery & Description */}
            <div className="min-w-0 lg:col-span-7 space-y-6">
              <div className="border border-stone bg-surface p-3 shadow-editorial">
                <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
                  {validImages.length > 0 ? (
                    <>
                      <img
                        src={validImages[activeImageIdx]}
                        alt={`${project.title} view ${activeImageIdx + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setLightboxOpen(true)}
                        aria-label="Expand image to full screen"
                        className="absolute right-4 top-4 inline-flex items-center gap-1.5 bg-obsidian/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-crimson"
                      >
                        <Expand className="h-3.5 w-3.5" />
                        <span>Expand</span>
                      </button>

                      {validImages.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveImageIdx(
                                (prev) =>
                                  (prev - 1 + validImages.length) %
                                  validImages.length
                              )
                            }
                            aria-label="Previous project image"
                            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-obsidian/75 text-white transition hover:bg-crimson"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveImageIdx(
                                (prev) => (prev + 1) % validImages.length
                              )
                            }
                            aria-label="Next project image"
                            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-obsidian/75 text-white transition hover:bg-crimson"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                          <span className="absolute bottom-3 right-3 bg-obsidian/80 px-2.5 py-1 font-mono text-xs text-white/90">
                            {activeImageIdx + 1} / {validImages.length}
                          </span>
                        </>
                      )}
                    </>
                  ) : (
                    <ImageWithFallback
                      available={false}
                      fallbackTitle={project.title}
                      fallbackNote="Project image returned HTTP 404 on origin server"
                      className="h-full w-full"
                    />
                  )}
                </div>

                {validImages.length > 1 && (
                  <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
                    {validImages.map((img, idx) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setActiveImageIdx(idx)}
                        aria-label={`Select photo ${idx + 1}`}
                        className={`relative h-16 w-24 shrink-0 overflow-hidden border-2 transition ${
                          idx === activeImageIdx
                            ? 'border-crimson'
                            : 'border-transparent opacity-65 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} thumbnail ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {brokenImages.length > 0 && (
                <div className="flex items-start gap-3 border border-bronze/40 bg-bronze-soft/60 p-4 text-xs text-charcoal">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-bronze-ink" />
                  <p>
                    <strong>Media Audit Note:</strong> {brokenImages.length}{' '}
                    additional image reference(s) for this project returned{' '}
                    <code>HTTP 404</code> on the original server and were
                    excluded from broken rendering.
                  </p>
                </div>
              )}

              {(project.detailDescription || project.summary) && (
                <div className="border border-stone bg-surface p-7 shadow-card">
                  <h2 className="font-serif text-2xl font-semibold text-charcoal">
                    Architectural Overview
                  </h2>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-concrete sm:text-base">
                    {project.detailDescription || project.summary}
                  </p>
                </div>
              )}

              {(specs.commonFeatures || specs.apartmentContains) && (
                <div className="grid gap-6 sm:grid-cols-2">
                  {specs.commonFeatures && (
                    <div className="min-w-0 border border-stone bg-surface p-6 shadow-card">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson-ink">
                        Amenities &amp; Shared Spaces
                      </span>
                      <h3 className="mt-1 font-serif text-2xl font-semibold text-charcoal">
                        Common Features
                      </h3>
                      <p className="mt-3 whitespace-pre-line [overflow-wrap:anywhere] text-sm leading-relaxed text-concrete">
                        {specs.commonFeatures}
                      </p>
                    </div>
                  )}

                  {specs.apartmentContains && (
                    <div className="min-w-0 border border-stone bg-surface p-6 shadow-card">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-ink">
                        Unit Layout &amp; Rooms
                      </span>
                      <h3 className="mt-1 font-serif text-2xl font-semibold text-charcoal">
                        Apartment Contains
                      </h3>
                      <p className="mt-3 whitespace-pre-line [overflow-wrap:anywhere] text-sm leading-relaxed text-concrete">
                        {specs.apartmentContains}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Specification Matrix & Inquiry CTA */}
            <aside className="min-w-0 lg:col-span-5 space-y-6">
              <div className="border border-stone bg-surface p-7 shadow-editorial lg:sticky lg:top-28">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                  Project Monograph • ID #{project.id}
                </span>
                <h2 className="mt-1 font-serif text-3xl font-semibold text-charcoal">
                  Specification Matrix
                </h2>

                <dl className="mt-6 divide-y divide-stone border-y border-stone">
                  {specRows.map(({ label, value, Icon }) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 py-3.5 text-sm"
                    >
                      <dt className="flex items-center gap-2 font-medium text-concrete shrink-0">
                        <Icon className="h-4 w-4 text-crimson-ink" />
                        <span>{label}</span>
                      </dt>
                      <dd className="min-w-0 text-right font-semibold text-charcoal [overflow-wrap:anywhere]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 space-y-3">
                  <Link
                    to="/buyer-query"
                    state={{
                      prefillArea: specs.address || project.title,
                      projectTitle: project.title,
                    }}
                    className="flex w-full items-center justify-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-crimson-dark"
                  >
                    <span>Send Buyer Query</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href="tel:+8801713137161"
                    className="flex w-full items-center justify-center gap-2 border border-obsidian bg-alabaster px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Sales Hotline: +88 01713-137161</span>
                  </a>
                </div>

                <div className="mt-6 border-t border-stone pt-4 flex items-center justify-between text-xs">
                  <Link
                    to={categoryMeta.route}
                    className="inline-flex items-center gap-1.5 font-semibold text-concrete hover:text-crimson-ink"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to {categoryMeta.label}</span>
                  </Link>
                  <Link
                    to="/projects"
                    className="font-semibold text-charcoal hover:text-crimson-ink"
                  >
                    All 23 Projects
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-stone bg-limestone py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-ink">
                  More Developments
                </span>
                <h2 className="mt-1 font-serif text-3xl font-semibold text-charcoal">
                  Other {categoryMeta.label}
                </h2>
              </div>
              <Link
                to={categoryMeta.route}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal hover:text-crimson-ink"
              >
                View All →
              </Link>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.id} project={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      <LightboxModal
        images={validImages}
        currentIndex={activeImageIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setActiveImageIdx}
        title={project.title}
      />
    </div>
  );
}
