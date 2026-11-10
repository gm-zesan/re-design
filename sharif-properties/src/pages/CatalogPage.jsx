import React, { useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  LayoutGrid,
  List as ListIcon,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  Building2,
  MapPin,
} from 'lucide-react';
import siteData from '../data/siteData.json';
import propertiesSummary from '../data/propertiesSummary.json';
import SearchConsole from '../components/SearchConsole';
import PropertyCard from '../components/PropertyCard';
import {
  filterProperties,
  sortProperties,
  resolveAreaLabel,
  resolveCategoryLabel,
  resolveSubcategoryLabel,
} from '../utils/propertyHelpers';

const ITEMS_PER_PAGE = 12;

export default function CatalogPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');

  const isCategoryRoute = location.pathname.startsWith('/property-type/');
  const categoryMeta = useMemo(() => {
    if (!isCategoryRoute) return null;
    const normPath =
      location.pathname.endsWith('/') && location.pathname !== '/'
        ? location.pathname.slice(0, -1)
        : location.pathname;
    return siteData.categoryPages.find((c) => c.slug === normPath) || null;
  }, [isCategoryRoute, location.pathname]);

  const filters = useMemo(
    () => ({
      q: searchParams.get('q') || '',
      card: searchParams.get('search_card') || '',
      category: searchParams.get('property_type') || '',
      subcategory: searchParams.get('property_type_subcat') || '',
      area: searchParams.get('area') || '',
      availability: searchParams.get('availability') || 'all',
      minPrice: searchParams.get('min_price') || '',
      maxPrice: searchParams.get('max_price') || '',
      minSqft: searchParams.get('min_sqft') || '',
      minBeds: searchParams.get('min_beds') || '',
      categoryPageSlug: categoryMeta?.slug || '',
    }),
    [searchParams, categoryMeta]
  );

  const sortBy = searchParams.get('sort') || 'newest';
  const currentPage = Math.max(1, Number(searchParams.get('page') || 1));

  const filteredAndSorted = useMemo(() => {
    const filtered = filterProperties(propertiesSummary, filters);
    return sortProperties(filtered, sortBy);
  }, [filters, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * ITEMS_PER_PAGE;
    return filteredAndSorted.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSorted, safePage]);

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all') next.delete(key);
    else next.set(key, value);
    if (key !== 'page') next.delete('page');
    setSearchParams(next);
  };

  const goToPage = (p) => {
    const next = new URLSearchParams(searchParams);
    if (p <= 1) next.delete('page');
    else next.set('page', String(p));
    setSearchParams(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageHeading = categoryMeta
    ? categoryMeta.title
    : location.pathname === '/searchResult'
    ? 'Property Search Results'
    : 'All Rental Properties in Dhaka';

  const activeChips = [
    filters.q && { key: 'q', label: `Keyword: ${filters.q}` },
    filters.card && { key: 'search_card', label: `Card: ${filters.card}` },
    filters.category && { key: 'property_type', label: resolveCategoryLabel(filters.category) },
    filters.subcategory && { key: 'property_type_subcat', label: resolveSubcategoryLabel(filters.subcategory) },
    filters.area && { key: 'area', label: resolveAreaLabel(filters.area) },
    filters.availability !== 'all' && {
      key: 'availability',
      label: filters.availability === 'available' ? 'Available Only' : 'Rented Archive',
    },
    filters.minPrice && { key: 'min_price', label: `Min: BDT ${Number(filters.minPrice).toLocaleString()}` },
    filters.maxPrice && { key: 'max_price', label: `Max: BDT ${Number(filters.maxPrice).toLocaleString()}` },
    filters.minSqft && { key: 'min_sqft', label: `Min Size: ${Number(filters.minSqft).toLocaleString()} sq ft` },
    filters.minBeds && { key: 'min_beds', label: `${filters.minBeds}+ Bedrooms` },
  ].filter(Boolean);

  const areaLinks = useMemo(() => {
    return siteData.site.areas
      .map((a) => ({
        ...a,
        count: filterProperties(propertiesSummary, { area: a.value }).length,
      }))
      .filter((a) => a.count > 0)
      .sort((a, b) => b.count - a.count);
  }, []);

  return (
    <div className="bg-canvas min-h-screen">
      {/* Architectural Header Banner */}
      <section className="bg-brand-navyDeep text-white py-10 border-b border-brand-slate/40">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/70 mb-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/rent" className="hover:text-white transition-colors">
              Rent Property
            </Link>
            {categoryMeta && (
              <>
                <span>/</span>
                <span className="text-white font-medium">{categoryMeta.title}</span>
              </>
            )}
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {pageHeading}
          </h1>
          <p className="text-sm text-white/80 mt-2 max-w-3xl">
            {categoryMeta?.metaDescription ||
              'Explore verified residential apartments, diplomatic houses, corporate offices, warehouses, and industrial spaces across Dhaka and Chattogram.'}
          </p>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <SearchConsole
            compact
            key={location.pathname + location.search}
            initialValues={filters}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Facets */}
          <aside className="lg:col-span-3 space-y-5">
            <div className="bg-surface rounded-md border border-hairline p-5">
              <h3 className="font-serif text-base font-bold text-brand-navy mb-3 pb-2 border-b border-hairline flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-brand-cobalt" />
                <span>Availability Status</span>
              </h3>
              <div className="space-y-1 text-sm">
                {[
                  { value: 'all', label: 'All Properties', count: propertiesSummary.length },
                  { value: 'available', label: 'Available Now', count: propertiesSummary.filter((p) => !p.isRented).length },
                  { value: 'rented', label: 'Rented Reference', count: propertiesSummary.filter((p) => p.isRented).length },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setParam('availability', opt.value)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded text-left transition-colors ${
                      filters.availability === opt.value
                        ? 'bg-brand-navy text-white font-semibold'
                        : 'hover:bg-panel text-ink-muted hover:text-brand-navy'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span className="tabular-nums text-xs opacity-85">{opt.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface rounded-md border border-hairline p-5">
              <h3 className="font-serif text-base font-bold text-brand-navy mb-3 pb-2 border-b border-hairline flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-cobalt" />
                <span>Property Categories</span>
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    to="/rent"
                    className={`flex items-center justify-between px-3 py-1.5 rounded transition-colors ${
                      location.pathname === '/rent'
                        ? 'bg-brand-blueTint text-brand-royal font-semibold'
                        : 'text-ink-muted hover:bg-panel hover:text-brand-navy'
                    }`}
                  >
                    <span>All Rental Listings</span>
                    <span className="tabular-nums text-xs">{propertiesSummary.length}</span>
                  </Link>
                </li>
                {siteData.categoryPages.map((cat) => {
                  const active = location.pathname === cat.slug;
                  return (
                    <li key={cat.slug}>
                      <Link
                        to={cat.slug}
                        className={`flex items-center justify-between px-3 py-1.5 rounded transition-colors ${
                          active
                            ? 'bg-brand-blueTint text-brand-royal font-semibold'
                            : 'text-ink-muted hover:bg-panel hover:text-brand-navy'
                        }`}
                      >
                        <span className="truncate pr-2">{cat.title}</span>
                        <span className="tabular-nums text-xs shrink-0">{cat.propertyCount}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-surface rounded-md border border-hairline p-5">
              <h3 className="font-serif text-base font-bold text-brand-navy mb-3 pb-2 border-b border-hairline flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-magenta" />
                <span>Browse by Location</span>
              </h3>
              <ul className="space-y-1 text-sm max-h-72 overflow-y-auto pr-1">
                {areaLinks.map((ar) => {
                  const isActive = filters.area === ar.value;
                  return (
                    <li key={ar.value}>
                      <Link
                        to={`/searchResult?area=${ar.value}`}
                        className={`flex items-center justify-between px-3 py-1.5 rounded transition-colors ${
                          isActive
                            ? 'bg-brand-blueTint text-brand-royal font-semibold'
                            : 'text-ink-muted hover:bg-panel hover:text-brand-navy'
                        }`}
                      >
                        <span>{ar.label}</span>
                        <span className="tabular-nums text-xs">{ar.count}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main Results Column */}
          <div className="lg:col-span-9">
            <div className="bg-surface rounded-md border border-hairline px-5 py-3.5 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-ink-muted">
                Showing{' '}
                <strong className="text-ink tabular-nums">
                  {filteredAndSorted.length === 0 ? 0 : (safePage - 1) * ITEMS_PER_PAGE + 1}
                  –{Math.min(safePage * ITEMS_PER_PAGE, filteredAndSorted.length)}
                </strong>{' '}
                of{' '}
                <strong className="text-brand-navy tabular-nums">
                  {filteredAndSorted.length}
                </strong>{' '}
                properties
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setParam('sort', e.target.value)}
                  aria-label="Sort properties"
                  className="px-3 py-2 rounded border border-hairline bg-canvas text-xs sm:text-sm font-medium text-ink focus:outline-none focus:border-brand-cobalt"
                >
                  <option value="newest">Sort: Newest Cards First</option>
                  <option value="available_first">Available Properties First</option>
                  <option value="price_asc">Rent: Low to High</option>
                  <option value="price_desc">Rent: High to Low</option>
                  <option value="sqft_desc">Size: Largest First</option>
                </select>

                <div className="inline-flex rounded border border-hairline bg-canvas p-0.5">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid view"
                    className={`p-1.5 rounded-sm transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-brand-navy text-white'
                        : 'text-ink-muted hover:text-brand-navy'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    aria-label="List view"
                    className={`p-1.5 rounded-sm transition-colors ${
                      viewMode === 'list'
                        ? 'bg-brand-navy text-white'
                        : 'text-ink-muted hover:text-brand-navy'
                    }`}
                  >
                    <ListIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {activeChips.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {activeChips.map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    onClick={() => setParam(chip.key, '')}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-brand-blueTint text-brand-navy border border-brand-cobalt/30 text-xs font-semibold hover:bg-brand-cobalt hover:text-white transition-colors"
                  >
                    <span>{chip.label}</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                ))}
                <Link
                  to="/rent"
                  className="text-xs font-semibold text-brand-magenta hover:underline px-2"
                >
                  Clear All Filters
                </Link>
              </div>
            )}

            {pageItems.length === 0 ? (
              <div className="bg-surface rounded-md border border-hairline p-12 text-center">
                <Building2 className="w-12 h-12 text-brand-cobalt/50 mx-auto mb-3" />
                <h2 className="font-serif text-2xl font-bold text-brand-navy">
                  No Matching Properties Found
                </h2>
                <p className="text-sm text-ink-muted mt-2 max-w-md mx-auto">
                  Try widening your budget range, clearing a filter chip, or browsing the complete 365-property portfolio.
                </p>
                <Link
                  to="/rent"
                  className="mt-5 inline-flex items-center px-5 py-2.5 rounded bg-brand-cobalt text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
                >
                  View All 365 Properties
                </Link>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'flex flex-col gap-5'
                }
              >
                {pageItems.map((prop) => (
                  <PropertyCard key={prop.slug} property={prop} variant={viewMode} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <nav
                aria-label="Catalog pagination"
                className="mt-10 flex flex-wrap items-center justify-center gap-1.5"
              >
                <button
                  type="button"
                  disabled={safePage === 1}
                  onClick={() => goToPage(safePage - 1)}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded border border-hairline bg-surface text-sm font-medium text-ink disabled:opacity-40 hover:border-brand-cobalt transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(
                    (p) =>
                      p === 1 ||
                      p === totalPages ||
                      Math.abs(p - safePage) <= 2
                  )
                  .reduce((acc, p, idx, arr) => {
                    if (idx > 0 && p - arr[idx - 1] > 1) {
                      acc.push('ellipsis-' + p);
                    }
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((item) =>
                    typeof item === 'string' ? (
                      <span key={item} className="px-2 text-ink-subtle">
                        ...
                      </span>
                    ) : (
                      <button
                        key={item}
                        type="button"
                        onClick={() => goToPage(item)}
                        className={`min-w-[38px] h-9 px-3 rounded text-sm font-semibold tabular-nums transition-colors ${
                          item === safePage
                            ? 'bg-brand-navy text-white'
                            : 'bg-surface border border-hairline text-ink hover:border-brand-cobalt'
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}

                <button
                  type="button"
                  disabled={safePage === totalPages}
                  onClick={() => goToPage(safePage + 1)}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded border border-hairline bg-surface text-sm font-medium text-ink disabled:opacity-40 hover:border-brand-cobalt transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
