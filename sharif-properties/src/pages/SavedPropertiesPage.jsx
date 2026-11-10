import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';
import propertiesSummary from '../data/propertiesSummary.json';
import PropertyCard from '../components/PropertyCard';
import { useApp } from '../context/AppContext';

export default function SavedPropertiesPage() {
  const { favorites, toggleFavorite } = useApp();

  const favoriteProperties = useMemo(
    () => propertiesSummary.filter((p) => favorites.includes(p.slug)),
    [favorites]
  );

  return (
    <div className="bg-canvas min-h-[85vh]">
      <section className="bg-brand-navyDeep text-white py-12 border-b border-brand-slate/40">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/70 mb-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Saved Shortlist</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Saved Property Shortlist ({favoriteProperties.length})
          </h1>
          <p className="text-sm text-white/80 mt-2 max-w-2xl">
            Compare your bookmarked residential apartments, houses, commercial offices, and industrial properties across Dhaka.
          </p>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-10">
        {favoriteProperties.length === 0 ? (
          <div className="bg-surface rounded-md border border-hairline p-12 text-center">
            <Heart className="w-12 h-12 text-brand-magenta/60 mx-auto mb-3" />
            <h2 className="font-serif text-2xl font-bold text-brand-navy">
              Your Property Shortlist Is Empty
            </h2>
            <p className="text-sm text-ink-muted mt-2 max-w-md mx-auto">
              Tap the heart icon on any residential apartment, house, office, or warehouse card to save it here for easy comparison.
            </p>
            <Link
              to="/rent"
              className="mt-5 inline-flex items-center px-5 py-2.5 rounded bg-brand-cobalt text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
            >
              Browse All 365 Properties
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-surface rounded-md border border-hairline px-5 py-3.5">
              <p className="text-sm text-ink-muted">
                You have{' '}
                <strong className="text-brand-navy tabular-nums">
                  {favoriteProperties.length}
                </strong>{' '}
                saved {favoriteProperties.length === 1 ? 'property' : 'properties'} in your local browser shortlist.
              </p>
              <button
                type="button"
                onClick={() => {
                  favoriteProperties.forEach((p) => toggleFavorite(p.slug));
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-magenta hover:underline"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Shortlisted</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteProperties.map((prop) => (
                <PropertyCard key={prop.slug} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

