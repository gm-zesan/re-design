import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, X, Phone, ArrowRight, Building2 } from 'lucide-react';
import { PROPERTIES, PropertyCategory, PropertyStatus } from '../data/properties';
import { COMPANY, SERVING_AREAS } from '../data/company';
import { PropertyCard } from '../components/common/PropertyCard';

const LOCATION_TITLES: Record<string, string> = {
  banani: 'Banani',
  'banasree-properties': 'Banasree',
  'bashundhara-properties': 'Bashundhara',
  dhanmondi: 'Dhanmondi',
  gulshan: 'Gulshan',
  mirpur: 'Mirpur',
  'mohammadpur-properties': 'Mohammadpur',
  paltan: 'Paltan',
  uttara: 'Uttara',
  niketan: 'Niketan',
};

export function PropertiesListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const statusParam = (searchParams.get('project_state') || '') as PropertyStatus | '';
  const locationParam = searchParams.get('location') || '';

  const [categoryFilter, setCategoryFilter] = useState<'All' | PropertyCategory>('All');
  const [keyword, setKeyword] = useState('');

  const updateFilter = (key: 'project_state' | 'location', value: string) => {
    const next = new URLSearchParams(searchParams);
    if (!value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const resetAll = () => {
    setSearchParams(new URLSearchParams());
    setCategoryFilter('All');
    setKeyword('');
  };

  const filtered = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (statusParam && p.status.toLowerCase() !== statusParam.toLowerCase()) return false;
      if (locationParam && p.locationSlug !== locationParam) return false;
      if (categoryFilter !== 'All' && p.category !== categoryFilter) return false;
      if (keyword.trim()) {
        const q = keyword.trim().toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.projectName.toLowerCase().includes(q) ||
          p.areaName.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q) ||
          p.refId.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [statusParam, locationParam, categoryFilter, keyword]);

  // Construct descriptive page heading mirroring WP archive semantics
  const pageTitle = (() => {
    if (statusParam && locationParam) {
      return `${statusParam} Properties in ${LOCATION_TITLES[locationParam] || locationParam}`;
    }
    if (statusParam) return `All ${statusParam} Properties`;
    if (locationParam) return `All ${LOCATION_TITLES[locationParam] || locationParam} Properties`;
    return 'All Properties';
  })();

  const hasActiveFilters = Boolean(statusParam || locationParam || categoryFilter !== 'All' || keyword.trim());

  return (
    <>
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 bg-[#0C0C0C] text-white overflow-hidden">
        <img
          src={COMPANY.assets.coreValuesBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/85 to-[#0C0C0C]/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="text-xs uppercase tracking-[0.18em] text-white/60 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#DA2328]">Properties List</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-white">{pageTitle}</h1>
              <p className="mt-3 text-sm sm:text-base text-white/75 max-w-2xl">
                Browse Shwapno Bari Real Estate Ltd.’s curated residential residences and delivered portfolio across
                Dhaka’s established neighborhoods.
              </p>
            </div>
            <div className="text-xs font-mono uppercase tracking-widest px-4 py-2 bg-white/10 border border-white/20 text-white shrink-0 tabular-nums">
              Showing {filtered.length} of {PROPERTIES.length} Dossiers
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar & Grid */}
      <section className="py-12 sm:py-16 bg-[#FAFAF8] dark:bg-[#0D1014] min-h-[55vh] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 space-y-8">
          {/* Interactive Filters Box */}
          <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F2EFE9] dark:border-[#242A34] pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5E646C] dark:text-[#A4A8AE] mr-2 inline-flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-[#DA2328]" /> Category:
                </span>
                {(['All', 'Residential', 'Commercial'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      categoryFilter === cat
                        ? 'bg-[#0C0C0C] dark:bg-[#DA2328] text-white'
                        : 'bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#2A303A] text-[#111418] dark:text-[#EAE7E1] hover:border-[#0C0C0C] dark:hover:border-[#DA2328]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5E646C] dark:text-[#A4A8AE] mr-1">
                  Status:
                </span>
                {(['', 'Available', 'Upcoming', 'Sold'] as const).map((st) => (
                  <button
                    key={st || 'all'}
                    type="button"
                    onClick={() => updateFilter('project_state', st)}
                    className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      statusParam === st
                        ? 'bg-[#DA2328] text-white'
                        : 'bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#2A303A] text-[#111418] dark:text-[#EAE7E1] hover:border-[#DA2328]'
                    }`}
                  >
                    {st || 'All Status'}
                  </button>
                ))}
              </div>
            </div>

            {/* Neighborhood Select + Keyword Search */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-5">
                <label htmlFor="prop-keyword" className="sr-only">
                  Search properties
                </label>
                <input
                  id="prop-keyword"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Filter by project, road, or Ref ID (e.g., Shanta, SB00037)..."
                  className="w-full px-4 py-2.5 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm text-[#111418] dark:text-[#F5F3EE] placeholder-[#5E646C] dark:placeholder-[#8D939E] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="prop-location" className="sr-only">
                  Filter by Location
                </label>
                <select
                  id="prop-location"
                  value={locationParam}
                  onChange={(e) => updateFilter('location', e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#191E27] text-sm text-[#111418] dark:text-[#F5F3EE] focus:outline-none focus:border-[#0C0C0C] dark:focus:border-[#DA2328]"
                >
                  <option value="">All Dhaka Neighborhoods</option>
                  {Object.entries(LOCATION_TITLES).map(([slug, label]) => (
                    <option key={slug} value={slug}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 flex justify-end">
                {hasActiveFilters ? (
                  <button
                    type="button"
                    onClick={resetAll}
                    className="w-full px-4 py-2.5 border border-[#0C0C0C] dark:border-[#DA2328] text-[#111418] dark:text-[#F5F3EE] hover:bg-[#0C0C0C] dark:hover:bg-[#DA2328] hover:text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" /> Reset
                  </button>
                ) : (
                  <Link
                    to="/contact-us"
                    className="w-full px-4 py-2.5 bg-[#0C0C0C] dark:bg-[#DA2328] hover:bg-[#DA2328] dark:hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors"
                  >
                    Request Sourcing
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Results Grid or Authentic Empty State */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((property) => (
                <PropertyCard key={property.refId} property={property} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-10 sm:p-14 text-center max-w-2xl mx-auto">
              <div className="w-14 h-14 mx-auto bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#2A303A] flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6 text-[#DA2328]" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                No properties found
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#5E646C] dark:text-[#A4A8AE] leading-relaxed">
                There are currently no published online listings matching this exact selection. Our Banani advisory
                team also handles off-market residential, commercial, and upcoming property mandates across Dhaka.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetAll}
                  className="px-6 py-3 bg-[#0C0C0C] dark:bg-[#DA2328] hover:bg-[#DA2328] dark:hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer"
                >
                  View All {PROPERTIES.length} Properties
                </button>
                <a
                  href={COMPANY.phones.primaryTel}
                  className="px-6 py-3 border border-[#E5E2DC] dark:border-[#2A303A] hover:border-[#0C0C0C] dark:hover:border-[#DA2328] text-[#111418] dark:text-[#F5F3EE] text-xs font-semibold uppercase tracking-[0.16em] inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DA2328]" />
                  <span>Call Property Desk</span>
                </a>
              </div>
            </div>
          )}

          {/* Location Quick Directory Strip */}
          <div className="pt-8 border-t border-[#E5E2DC] dark:border-[#242A34]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5E646C] dark:text-[#A4A8AE] mb-4">
              Browse by Dhaka Location
            </p>
            <div className="flex flex-wrap gap-2.5">
              {SERVING_AREAS.map((area) => {
                const count = PROPERTIES.filter((p) => p.locationSlug === area.locationParam).length;
                const active = locationParam === area.locationParam;
                return (
                  <Link
                    key={area.locationParam}
                    to={`/properties-list?location=${area.locationParam}`}
                    className={`px-3.5 py-2 text-xs font-medium border transition-colors inline-flex items-center gap-2 ${
                      active
                        ? 'bg-[#0C0C0C] dark:bg-[#DA2328] text-white border-[#0C0C0C] dark:border-[#DA2328]'
                        : 'bg-white dark:bg-[#14181F] border-[#E5E2DC] dark:border-[#242A34] text-[#111418] dark:text-[#EAE7E1] hover:border-[#DA2328]'
                    }`}
                  >
                    <span>{area.name}</span>
                    <span
                      className={`text-[11px] tabular-nums ${
                        active ? 'text-white/75' : 'text-[#5E646C] dark:text-[#A4A8AE]'
                      }`}
                    >
                      ({count})
                    </span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

