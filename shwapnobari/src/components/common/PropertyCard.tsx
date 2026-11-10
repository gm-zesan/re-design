import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Property } from '../../data/properties';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'featured';
}

export function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const imageSrc = variant === 'featured' && property.homeSlideImage ? property.homeSlideImage : property.cardImage;
  const aspectClass = variant === 'featured' ? 'aspect-[4/5]' : 'aspect-[4/3]';

  return (
    <article className="group bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] hover:border-[#0C0C0C]/40 dark:hover:border-[#DA2328]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-[0_2px_12px_rgba(12,12,12,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_18px_40px_rgba(12,12,12,0.08)] dark:hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)]">
      {/* Image frame */}
      <Link to={`/properties/${property.slug}`} className={`relative ${aspectClass} overflow-hidden bg-[#F2EFE9] dark:bg-[#1B2029] block`}>
        <img
          src={imageSrc}
          alt={`${property.projectName} — ${property.areaName}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80 group-hover:opacity-65 transition-opacity" />

        {/* Status & Ref Top Bar */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <span
            className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm ${
              property.status === 'Available'
                ? 'bg-[#156E44] text-white'
                : 'bg-[#0C0C0C]/90 text-white/95'
            }`}
          >
            {property.status}
          </span>
          <span className="px-2.5 py-1 text-[11px] font-mono tracking-wider bg-white/95 dark:bg-[#14181F]/95 text-[#111418] dark:text-[#F5F3EE] border border-[#E5E2DC] dark:border-[#2A303A]">
            {property.refId}
          </span>
        </div>

        {/* Bottom Price Strip on photo */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 bg-black/50 backdrop-blur-xs px-2.5 py-1">
            {property.areaName}
          </span>
          <span className="text-sm font-semibold text-white bg-[#0C0C0C]/85 px-3 py-1 tabular-nums">
            {property.priceDisplay}
          </span>
        </div>
      </Link>

      {/* Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#DA2328] mb-1.5">
            {property.completionStatus} • {property.typeLabel}
          </p>
          <h3 className="font-serif text-2xl font-semibold text-[#111418] dark:text-[#F5F3EE] leading-snug group-hover:text-[#DA2328] transition-colors">
            <Link to={`/properties/${property.slug}`}>{property.homeCardTitle}</Link>
          </h3>
          <p className="mt-2 text-xs text-[#5E646C] dark:text-[#A4A8AE] flex items-start gap-1.5 leading-relaxed">
            <MapPin className="w-3.5 h-3.5 text-[#DA2328] shrink-0 mt-0.5" />
            <span>{property.address}</span>
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-[#F2EFE9] dark:border-[#242A34]">
          <div className="grid grid-cols-3 gap-2 text-center py-2 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#F2EFE9] dark:border-[#242A34] text-xs">
            <div className="flex flex-col items-center gap-1">
              <img src="/uploads/2024/05/Beds.webp" alt="" className="w-4 h-4 object-contain opacity-75 dark:opacity-90 dark:brightness-125" />
              <span className="font-semibold text-[#111418] dark:text-[#F5F3EE] tabular-nums">{property.beds} Beds</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-[#E5E2DC] dark:border-[#242A34]">
              <img src="/uploads/2024/05/Baths.webp" alt="" className="w-4 h-4 object-contain opacity-75 dark:opacity-90 dark:brightness-125" />
              <span className="font-semibold text-[#111418] dark:text-[#F5F3EE] tabular-nums">{property.baths} Baths</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src="/uploads/2024/05/sqft.webp" alt="" className="w-4 h-4 object-contain opacity-75 dark:opacity-90 dark:brightness-125" />
              <span className="font-semibold text-[#111418] dark:text-[#F5F3EE] tabular-nums">{property.sizeSft} SFT</span>
            </div>
          </div>

          <Link
            to={`/properties/${property.slug}`}
            className="mt-4 inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-[0.14em] text-[#111418] dark:text-[#EAE7E1] group-hover:text-[#DA2328] transition-colors"
          >
            <span>View Full Dossier</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
