import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  Hash,
  MapPin,
  Building2,
  Layers,
  RotateCcw,
} from 'lucide-react';
import siteData from '../data/siteData.json';
import propertiesSummary from '../data/propertiesSummary.json';

export default function SearchConsole({ initialValues = {}, compact = false }) {
  const navigate = useNavigate();
  const { propertyTypes, propertySubcategories, areas, priceRange } = siteData.site;

  const [cardNo, setCardNo] = useState(initialValues.card || '');
  const [keyword, setKeyword] = useState(initialValues.q || '');
  const [category, setCategory] = useState(initialValues.category || '');
  const [subcategory, setSubcategory] = useState(initialValues.subcategory || '');
  const [area, setArea] = useState(initialValues.area || '');
  const [availability, setAvailability] = useState(initialValues.availability || 'all');
  const [minPrice, setMinPrice] = useState(initialValues.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(initialValues.maxPrice || '');
  const [minSqft, setMinSqft] = useState(initialValues.minSqft || '');
  const [minBeds, setMinBeds] = useState(initialValues.minBeds || '');
  const [showAdvanced, setShowAdvanced] = useState(Boolean(compact));

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedCard = cardNo.trim().toUpperCase();
    if (cleanedCard && !keyword && !category && !subcategory && !area && !minPrice && !maxPrice && !minSqft && !minBeds) {
      const strippedId = cleanedCard.replace(/^S/, '');
      const exactMatch = propertiesSummary.find(
        (p) =>
          (p.cardNo && p.cardNo.toUpperCase() === cleanedCard) ||
          String(p.id) === strippedId
      );
      if (exactMatch) {
        navigate(`/dhaka/${exactMatch.slug}`);
        return;
      }
    }

    const params = new URLSearchParams();
    if (keyword.trim()) params.set('q', keyword.trim());
    if (cardNo.trim()) params.set('search_card', cardNo.trim());
    if (category) params.set('property_type', category);
    if (subcategory) params.set('property_type_subcat', subcategory);
    if (area) params.set('area', area);
    if (availability && availability !== 'all') params.set('availability', availability);
    if (minPrice !== '') params.set('min_price', minPrice);
    if (maxPrice !== '') params.set('max_price', maxPrice);
    if (minSqft !== '') params.set('min_sqft', minSqft);
    if (minBeds !== '') params.set('min_beds', minBeds);

    const qs = params.toString();
    navigate(qs ? `/searchResult?${qs}` : '/searchResult');
  };

  const handleReset = () => {
    setCardNo('');
    setKeyword('');
    setCategory('');
    setSubcategory('');
    setArea('');
    setAvailability('all');
    setMinPrice('');
    setMaxPrice('');
    setMinSqft('');
    setMinBeds('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface rounded-md shadow-elevated border border-hairline overflow-hidden text-ink"
    >
      {/* Top Category Mode Tabs */}
      <div className="bg-panel border-b border-hairline px-4 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy mr-2">
            {siteData.site.searchLabel}
          </span>
          {[
            { label: 'All Types', val: '' },
            { label: 'Residential (240)', val: '1' },
            { label: 'Commercial (125)', val: '2' },
          ].map((tab) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setCategory(tab.val)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                category === tab.val
                  ? 'bg-brand-navy text-white'
                  : 'text-ink-muted hover:text-brand-navy hover:bg-surface'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {(cardNo || keyword || category || subcategory || area || minPrice || maxPrice || minSqft || minBeds || availability !== 'all') && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-brand-magenta transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-royal hover:text-brand-magenta transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{showAdvanced ? 'Fewer Filters' : 'Price, Size & Status'}</span>
          </button>
        </div>
      </div>

      {/* Primary Segmented Row */}
      <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
        <div className="lg:col-span-3 min-w-0">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
            Keyword or Street
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-ink-subtle absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Road, Duplex, Diplomatic..."
              className="w-full min-w-0 pl-9 pr-3 py-2.5 rounded border border-hairline bg-canvas text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-brand-cobalt focus:bg-surface"
            />
          </div>
        </div>

        <div className="lg:col-span-2 min-w-0">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
            Card Number
          </label>
          <div className="relative">
            <Hash className="w-4 h-4 text-brand-magenta absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={cardNo}
              onChange={(e) => setCardNo(e.target.value)}
              placeholder="e.g. S10439"
              className="w-full min-w-0 pl-9 pr-3 py-2.5 rounded border border-hairline bg-canvas text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-brand-cobalt focus:bg-surface"
            />
          </div>
        </div>

        <div className="lg:col-span-2 min-w-0">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
            Category
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-ink-subtle absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full min-w-0 pl-9 pr-3 py-2.5 rounded border border-hairline bg-canvas text-sm text-ink focus:outline-none focus:border-brand-cobalt focus:bg-surface truncate"
            >
              <option value="">All Types</option>
              <option value="1">Residential (240)</option>
              <option value="2">Commercial (125)</option>
              {propertyTypes.map((pt) => (
                <option key={pt.value} value={pt.value}>
                  {pt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="lg:col-span-2 min-w-0">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
            Subcategory
          </label>
          <div className="relative">
            <Layers className="w-4 h-4 text-ink-subtle absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full min-w-0 pl-9 pr-3 py-2.5 rounded border border-hairline bg-canvas text-sm text-ink focus:outline-none focus:border-brand-cobalt focus:bg-surface truncate"
            >
              <option value="">All Categories</option>
              {propertySubcategories.map((sub) => (
                <option key={sub.value} value={sub.value}>
                  {sub.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="lg:col-span-2 min-w-0">
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
            Location
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-ink-subtle absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full min-w-0 pl-9 pr-3 py-2.5 rounded border border-hairline bg-canvas text-sm text-ink focus:outline-none focus:border-brand-cobalt focus:bg-surface truncate"
            >
              <option value="">All Locations (20)</option>
              {areas.map((ar) => (
                <option key={ar.value} value={ar.value}>
                  {ar.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="lg:col-span-1">
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded bg-brand-magenta hover:bg-brand-magentaDark text-white font-semibold text-sm transition-colors flex items-center justify-center gap-1.5"
          >
            <Search className="w-4 h-4" />
            <span className="lg:hidden xl:inline">Search</span>
          </button>
        </div>
      </div>

      {/* Expandable Secondary Parameters Row */}
      {showAdvanced && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 bg-canvas/60">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
              Min Rent ({priceRange.currency})
            </label>
            <input
              type="number"
              min="0"
              step="5000"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder={`e.g. ${priceRange.defaultFrom.toLocaleString()}`}
              className="w-full min-w-0 px-3 py-2 rounded border border-hairline bg-surface text-sm text-ink tabular-nums focus:outline-none focus:border-brand-cobalt"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
              Max Rent ({priceRange.currency})
            </label>
            <input
              type="number"
              min="0"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder={`e.g. ${priceRange.defaultTo.toLocaleString()}`}
              className="w-full min-w-0 px-3 py-2 rounded border border-hairline bg-surface text-sm text-ink tabular-nums focus:outline-none focus:border-brand-cobalt"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
              Min Size (Sq Ft)
            </label>
            <input
              type="number"
              min="0"
              step="100"
              value={minSqft}
              onChange={(e) => setMinSqft(e.target.value)}
              placeholder="e.g. 1500"
              className="w-full min-w-0 px-3 py-2 rounded border border-hairline bg-surface text-sm text-ink tabular-nums focus:outline-none focus:border-brand-cobalt"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
              Min Bedrooms
            </label>
            <select
              value={minBeds}
              onChange={(e) => setMinBeds(e.target.value)}
              className="w-full min-w-0 px-3 py-2 rounded border border-hairline bg-surface text-sm text-ink focus:outline-none focus:border-brand-cobalt"
            >
              <option value="">Any Bedrooms</option>
              <option value="1">1+ Bedroom</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle mb-1">
              Availability Status
            </label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full min-w-0 px-3 py-2 rounded border border-hairline bg-surface text-sm text-ink focus:outline-none focus:border-brand-cobalt"
            >
              <option value="all">All Statuses</option>
              <option value="available">Available Only</option>
              <option value="rented">Rented Reference Only</option>
            </select>
          </div>
        </div>
      )}
    </form>
  );
}
