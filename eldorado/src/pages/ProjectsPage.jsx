import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Search, X } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { PROJECT_CATEGORIES, PROJECTS } from '../data/projects';

const CATEGORY_TABS = [
  { key: 'all', label: 'All Projects', to: '/projects', count: PROJECTS.length },
  {
    key: 'ongoing',
    label: 'Ongoing',
    to: '/ongoing-project',
    count: PROJECTS.filter((p) => p.status === 'ongoing').length,
  },
  {
    key: 'upcoming',
    label: 'Upcoming',
    to: '/upcomming-project',
    count: PROJECTS.filter((p) => p.status === 'upcoming').length,
  },
  {
    key: 'handover',
    label: 'Handed Over',
    to: '/handover-project',
    count: PROJECTS.filter((p) => p.status === 'handover').length,
  },
];

const QUICK_AREAS = ['Bashundhara', 'Jalshiri', 'Siddeshwari', 'Malibagh'];

export default function ProjectsPage({ category = 'all' }) {
  const [searchQuery, setSearchQuery] = useState('');

  const meta =
    category === 'all'
      ? {
          label: 'All Architectural Projects',
          subtitle:
            'Explore all 23 published ongoing, upcoming, and handed-over developments across Dhaka (from 70+ total completed projects since 2003).',
        }
      : PROJECT_CATEGORIES[category];

  const categoryProjects = useMemo(() => {
    if (category === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.status === category);
  }, [category]);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return categoryProjects;
    return categoryProjects.filter((p) => {
      const specs = p.specs || {};
      const haystack = [
        p.title,
        specs.address,
        specs.nature,
        specs.apartmentSize,
        p.summary,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [categoryProjects, searchQuery]);

  return (
    <div>
      <PageHeader
        eyebrow="Development Portfolio"
        title={meta.label}
        subtitle={meta.subtitle}
        breadcrumbs={
          category === 'all'
            ? [{ label: 'Projects' }]
            : [
                { label: 'Projects', to: '/projects' },
                { label: meta.label },
              ]
        }
        rightSlot={
          <div className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-5 py-3 text-sm">
            <Building2 className="h-5 w-5 text-bronze-light" />
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Directory Count
              </span>
              <span className="font-serif text-xl font-semibold text-white">
                {categoryProjects.length} Developments
              </span>
            </div>
          </div>
        }
      />

      <section className="bg-alabaster bg-arch-grid py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Tabs & Search Controls */}
          <div className="flex flex-col gap-5 border border-stone bg-surface p-5 shadow-card lg:flex-row lg:items-center lg:justify-between">
            <nav
              aria-label="Project Categories"
              className="flex flex-wrap gap-2"
            >
              {CATEGORY_TABS.map((tab) => {
                const isActive = category === tab.key;
                return (
                  <Link
                    key={tab.key}
                    to={tab.to}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                      isActive
                        ? 'bg-crimson text-white'
                        : 'border border-stone bg-alabaster text-charcoal hover:border-crimson hover:text-crimson-ink'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-stone text-charcoal'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="relative w-full lg:w-80">
              <label htmlFor="project-search" className="sr-only">
                Filter projects by name or location
              </label>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-concrete" />
              <input
                id="project-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search title, Bashundhara, sft..."
                className="w-full border border-stone bg-alabaster py-2.5 pl-10 pr-9 text-sm text-charcoal placeholder:text-concrete/70 focus:border-crimson focus:bg-surface focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-concrete hover:text-crimson-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Location Chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold uppercase tracking-wider text-concrete">
              Locations:
            </span>
            {QUICK_AREAS.map((area) => (
              <button
                key={area}
                type="button"
                onClick={() =>
                  setSearchQuery((prev) =>
                    prev.toLowerCase() === area.toLowerCase() ? '' : area
                  )
                }
                className={`border px-3 py-1 font-medium transition ${
                  searchQuery.toLowerCase() === area.toLowerCase()
                    ? 'border-crimson bg-crimson text-white'
                    : 'border-stone bg-surface text-concrete hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {area}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-stone bg-surface p-12 text-center">
              <p className="font-serif text-2xl font-semibold text-charcoal">
                No matching projects found for “{searchQuery}”
              </p>
              <p className="mt-2 text-sm text-concrete">
                Try clearing your filter or switching between Ongoing, Upcoming,
                and Handed Over categories.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-5 inline-flex items-center gap-2 border border-obsidian bg-obsidian px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-crimson hover:bg-crimson dark:border-white/20 dark:bg-[#272D37] dark:hover:border-crimson dark:hover:bg-crimson"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

