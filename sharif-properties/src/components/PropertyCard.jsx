import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  BedDouble,
  Bath,
  CarFront,
  Maximize2,
  Heart,
  Video,
  Camera,
} from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { useApp } from '../context/AppContext';

export default function PropertyCard({ property, variant = 'grid' }) {
  const { isFavorite, toggleFavorite } = useApp();
  const favorited = isFavorite(property.slug);

  const isSqftRate =
    typeof property.formattedPrice === 'string' &&
    property.formattedPrice.includes('/ sq ft');

  return (
    <article
      className={`group bg-surface rounded-md border border-hairline overflow-hidden shadow-soft hover:border-brand-cobalt hover:shadow-elevated transition-all duration-200 flex ${
        variant === 'list' ? 'flex-col sm:flex-row' : 'flex-col'
      }`}
    >
      {/* Clean Architectural Photography Frame */}
      <Link
        to={`/dhaka/${property.slug}`}
        className={`relative block overflow-hidden bg-panel shrink-0 ${
          variant === 'list' ? 'sm:w-72 md:w-80 aspect-[16/10] sm:aspect-auto' : 'aspect-[16/10]'
        }`}
      >
        <ImageWithFallback
          src={property.thumbnail}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />

        {/* Subtle bottom vignette solely for contrast */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent" />

        {/* Single Top-Left Status Label */}
        <div className="absolute top-2.5 left-2.5">
          {property.isRented ? (
            <span className="inline-block px-2.5 py-0.5 rounded-sm text-[10px] font-bold tracking-widest uppercase bg-brand-navyDeep/95 text-white">
              RENTED
            </span>
          ) : (
            <span className="inline-block px-2.5 py-0.5 rounded-sm text-[10px] font-bold tracking-widest uppercase bg-brand-cobalt/95 text-white">
              FOR RENT
            </span>
          )}
        </div>

        {/* Minimal Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(property.slug);
          }}
          aria-label={favorited ? 'Remove from saved properties' : 'Save property'}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded flex items-center justify-center transition-colors ${
            favorited
              ? 'bg-brand-magenta text-white'
              : 'bg-brand-navyDeep/55 text-white hover:bg-brand-magenta'
          }`}
        >
          <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
        </button>

        {/* Bottom Quiet Media Count & Card Ref */}
        <div className="absolute bottom-2 inset-x-2.5 flex items-center justify-between text-[11px] font-medium text-white/95">
          <div className="flex items-center gap-2">
            {property.imageCount > 0 && (
              <span className="inline-flex items-center gap-1 tabular-nums">
                <Camera className="w-3 h-3" />
                <span>{property.imageCount}</span>
              </span>
            )}
            {property.hasVideo && (
              <span className="inline-flex items-center gap-1">
                <Video className="w-3 h-3" />
                <span>Video</span>
              </span>
            )}
          </div>
          {property.cardNo && (
            <span className="font-semibold tracking-wide tabular-nums">
              {property.cardNo}
            </span>
          )}
        </div>
      </Link>

      {/* Structured Real Estate Metadata */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between min-w-0">
        <div>
          {/* Dominant Price Line */}
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
            <div>
              <span className="text-lg font-bold text-brand-navy tabular-nums">
                {property.formattedPrice}
              </span>
              {!isSqftRate && !String(property.formattedPrice || '').includes('/ day') && (
                <span className="text-xs text-ink-subtle ml-1">/ mo</span>
              )}
            </div>
            {property.category && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-cobalt">
                {property.category}
              </span>
            )}
          </div>

          {isSqftRate && property.totalMonthlyEstimate && (
            <div className="text-xs text-ink-muted mb-1.5 tabular-nums">
              Total est. BDT {Math.round(property.totalMonthlyEstimate).toLocaleString()} / month
            </div>
          )}

          {/* Property Title */}
          <Link to={`/dhaka/${property.slug}`} className="block">
            <h3 className="font-serif text-lg sm:text-[19px] font-semibold text-ink leading-snug line-clamp-2 group-hover:text-brand-royal transition-colors">
              {property.title}
            </h3>
          </Link>

          {/* Location & Property Type */}
          <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-muted">
            <MapPin className="w-3.5 h-3.5 text-brand-magenta shrink-0" />
            <span className="truncate">
              {property.area || 'Dhaka'}
              {property.subcategory ? ` • ${property.subcategory}` : ''}
            </span>
          </div>
        </div>

        {/* Clean Hairline Spec Divider Row */}
        <div className="mt-4 pt-3 border-t border-hairline flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted">
          <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1">
            {property.bedrooms && (
              <span className="inline-flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5 text-brand-cobalt" />
                <strong className="font-semibold text-ink tabular-nums">{property.bedrooms}</strong>
                <span>Bed</span>
              </span>
            )}
            {property.bathrooms && (
              <span className="inline-flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-brand-cobalt" />
                <strong className="font-semibold text-ink tabular-nums">{property.bathrooms}</strong>
                <span>Bath</span>
              </span>
            )}
            {property.garage && (
              <span className="inline-flex items-center gap-1">
                <CarFront className="w-3.5 h-3.5 text-brand-cobalt" />
                <strong className="font-semibold text-ink tabular-nums">{property.garage}</strong>
              </span>
            )}
            {property.sqft && (
              <span className="inline-flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-brand-cobalt" />
                <strong className="font-semibold text-ink tabular-nums">
                  {Number(property.sqft) ? Number(property.sqft).toLocaleString() : property.sqft}
                </strong>
                <span>sq ft</span>
              </span>
            )}
          </div>

          <Link
            to={`/dhaka/${property.slug}`}
            className="text-xs font-semibold text-brand-royal hover:text-brand-magenta transition-colors shrink-0"
          >
            Details &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
