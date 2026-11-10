import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, MapPin, Maximize2 } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

const STATUS_BADGE = {
  ongoing: {
    label: 'Ongoing',
    className: 'bg-crimson text-white',
  },
  upcoming: {
    label: 'Upcoming',
    className: 'bg-bronze text-white',
  },
  handover: {
    label: 'Handed Over',
    className: 'bg-obsidian/90 text-[#F8F6F2]',
  },
};

export default function ProjectCard({ project }) {
  const badge = STATUS_BADGE[project.status] || STATUS_BADGE.ongoing;
  const specs = project.specs || {};

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden border border-stone bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-editorial">
      <Link
        to={`/project-details/${project.id}`}
        className="relative block aspect-[16/10] overflow-hidden bg-obsidian"
      >
        <ImageWithFallback
          src={project.cardImage}
          alt={project.title}
          available={project.cardImageOk}
          fallbackTitle={project.title}
          fallbackNote="Elevation image unavailable on origin"
          className="h-full w-full"
          imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className={`inline-flex items-center px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${badge.className}`}
          >
            {badge.label}
          </span>
        </div>

        {specs.nature && (
          <span className="absolute bottom-3 left-4 max-w-[85%] truncate rounded bg-obsidian/75 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
            {specs.nature}
          </span>
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col p-6">
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-2xl font-semibold leading-snug text-charcoal [overflow-wrap:anywhere] transition-colors group-hover:text-crimson-ink">
            <Link to={`/project-details/${project.id}`}>{project.title}</Link>
          </h3>

          {specs.address && (
            <p className="mt-2.5 flex items-start gap-2 text-sm text-concrete [overflow-wrap:anywhere]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crimson-ink" />
              <span className="min-w-0">{specs.address}</span>
            </p>
          )}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-stone pt-4 text-xs">
          <div className="flex min-w-0 items-start gap-2">
            <Maximize2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bronze-ink" />
            <div className="min-w-0">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-concrete">
                Apartment Size
              </span>
              <span className="block font-semibold text-charcoal [overflow-wrap:anywhere]">
                {specs.apartmentSize || 'On Inquiry'}
              </span>
            </div>
          </div>

          <div className="flex min-w-0 items-start gap-2">
            <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bronze-ink" />
            <div className="min-w-0">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-concrete">
                Land / Units
              </span>
              <span className="block font-semibold text-charcoal [overflow-wrap:anywhere]">
                {[specs.landArea, specs.apartments ? `${specs.apartments} Units` : '']
                  .filter(Boolean)
                  .join(' • ') || 'View Specs'}
              </span>
            </div>
          </div>
        </div>

        <Link
          to={`/project-details/${project.id}`}
          className="mt-5 inline-flex items-center justify-between border-t border-stone/70 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors group-hover:text-crimson-ink"
        >
          <span>View Architectural Details</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
