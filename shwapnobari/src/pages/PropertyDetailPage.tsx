import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Check,
  Images,
  Mail,
  MapPin,
  Phone,
  Share2,
} from 'lucide-react';
import { PROPERTIES } from '../data/properties';
import { COMPANY } from '../data/company';
import { LightboxModal } from '../components/common/LightboxModal';
import { DhakaMap } from '../components/common/DhakaMap';
import { MortgageCalculator } from '../components/common/MortgageCalculator';
import { PropertyCard } from '../components/common/PropertyCard';
import { NotFoundPage } from './NotFoundPage';

export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const property = PROPERTIES.find((p) => p.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!property) {
    return <NotFoundPage />;
  }

  const openPhoto = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const recommended = property.recommendedSlugs
    .map((s) => PROPERTIES.find((item) => item.slug === s))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const shareUrl = `${COMPANY.websiteUrl}/properties/${property.slug}/`;
  const fbShareHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <>
      {/* Breadcrumb & Header Title Band */}
      <section className="bg-white dark:bg-[#14181F] border-b border-[#E5E2DC] dark:border-[#242A34] py-8 sm:py-10 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="text-xs uppercase tracking-[0.16em] text-[#5E646C] dark:text-[#A4A8AE] mb-4 flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-[#111418] dark:hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/properties-list" className="hover:text-[#111418] dark:hover:text-white">
              Properties
            </Link>
            <span>/</span>
            <Link
              to={`/properties-list?location=${property.locationSlug}`}
              className="hover:text-[#111418] dark:hover:text-white"
            >
              {property.areaName}
            </Link>
            <span>/</span>
            <span className="text-[#DA2328]">{property.refId}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span
                  className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                    property.status === 'Available'
                      ? 'bg-[#156E44] text-white'
                      : 'bg-[#0C0C0C] dark:bg-[#232934] text-white'
                  }`}
                >
                  {property.status}
                </span>
                <span className="px-3 py-1 text-[11px] font-mono tracking-wider bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#2A303A] text-[#111418] dark:text-[#F5F3EE]">
                  Ref: {property.refId}
                </span>
                <span className="px-3 py-1 text-[11px] uppercase tracking-wider bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#2A303A] text-[#5E646C] dark:text-[#A4A8AE]">
                  {property.category} • {property.purpose}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE] leading-tight">
                {property.title}
              </h1>
              <p className="mt-2.5 text-sm sm:text-base text-[#5E646C] dark:text-[#A4A8AE] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DA2328] shrink-0" />
                <span>{property.address}</span>
              </p>
            </div>

            <div className="lg:text-right shrink-0 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#2A303A] px-6 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5E646C] dark:text-[#A4A8AE]">
                Listed Value
              </p>
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#DA2328] mt-0.5 tabular-nums">
                {property.priceDisplay}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Stage */}
      <section className="bg-[#FAFAF8] dark:bg-[#0D1014] border-b border-[#E5E2DC] dark:border-[#242A34] py-6 sm:py-8 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Hero Photo */}
            <button
              type="button"
              onClick={() => openPhoto(0)}
              className="lg:col-span-7 relative aspect-[16/11] bg-[#EAE6DD] dark:bg-[#1B2029] overflow-hidden group cursor-pointer text-left"
            >
              <img
                src={property.gallery[0]}
                alt={`${property.projectName} primary view`}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <span className="absolute bottom-4 left-4 px-3.5 py-2 bg-[#0C0C0C]/80 text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2">
                <Images className="w-4 h-4 text-[#DA2328]" />
                <span>View All {property.gallery.length} Photos</span>
              </span>
            </button>

            {/* Mosaic Right */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {property.gallery.slice(1, 5).map((img, i) => {
                const actualIndex = i + 1;
                const isLastVisible = i === 3 && property.gallery.length > 5;
                return (
                  <button
                    key={img + i}
                    type="button"
                    onClick={() => openPhoto(actualIndex)}
                    className="relative aspect-[4/3] bg-[#EAE6DD] dark:bg-[#1B2029] overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${property.projectName} angle ${actualIndex + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isLastVisible && (
                      <span className="absolute inset-0 bg-black/55 flex items-center justify-center text-white font-semibold text-sm tracking-wide">
                        +{property.gallery.length - 5} More Photos
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Dossier Layout */}
      <section className="py-12 sm:py-16 bg-[#FAFAF8] dark:bg-[#0D1014] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 8-col Specification & Highlights */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Metric Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] divide-y sm:divide-y-0 sm:divide-x divide-[#E5E2DC] dark:divide-[#242A34]">
              <div className="p-5 flex items-center gap-3">
                <img src="/uploads/2024/05/Beds.webp" alt="" className="w-6 h-6 object-contain dark:brightness-125" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#5E646C] dark:text-[#A4A8AE]">Bedrooms</p>
                  <p className="text-lg font-semibold text-[#111418] dark:text-[#F5F3EE] tabular-nums">
                    {property.beds} Beds
                  </p>
                </div>
              </div>
              <div className="p-5 flex items-center gap-3">
                <img src="/uploads/2024/05/Baths.webp" alt="" className="w-6 h-6 object-contain dark:brightness-125" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#5E646C] dark:text-[#A4A8AE]">Bathrooms</p>
                  <p className="text-lg font-semibold text-[#111418] dark:text-[#F5F3EE] tabular-nums">
                    {property.baths} Baths
                  </p>
                </div>
              </div>
              <div className="p-5 flex items-center gap-3">
                <img src="/uploads/2024/05/sqft.webp" alt="" className="w-6 h-6 object-contain dark:brightness-125" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#5E646C] dark:text-[#A4A8AE]">Floor Size</p>
                  <p className="text-lg font-semibold text-[#111418] dark:text-[#F5F3EE] tabular-nums">
                    {property.sizeSft} SFT
                  </p>
                </div>
              </div>
              <div className="p-5 flex items-center gap-3">
                <img
                  src="/uploads/2024/06/Floor-Level.webp"
                  alt=""
                  className="w-6 h-6 object-contain dark:brightness-125"
                />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#5E646C] dark:text-[#A4A8AE]">Position</p>
                  <p className="text-sm font-semibold text-[#111418] dark:text-[#F5F3EE]">{property.floor}</p>
                </div>
              </div>
            </div>

            {/* Description & Narrative Highlights */}
            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DA2328] mb-2">
                  Architectural Overview
                </p>
                <h2 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                  {property.subtitle}
                </h2>
                <p className="mt-4 text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
                  {property.introParagraph}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#F2EFE9] dark:border-[#242A34]">
                {property.detailSections.map((sec) => (
                  <div key={sec.title} className="space-y-3">
                    <h3 className="font-serif text-2xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                      {sec.title}
                    </h3>
                    <ul className="space-y-2">
                      {sec.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#363B42] dark:text-[#C5C8CE] leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-[#DA2328] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Amenities Grid */}
            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DA2328] mb-2">
                Building Provisions
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE] mb-6">
                Verified Amenities ({property.amenities.length})
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity.label}
                    className="p-4 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#F2EFE9] dark:border-[#242A34] flex flex-col items-center text-center gap-2.5"
                  >
                    <div className="w-11 h-11 bg-[#FAFAF8] dark:bg-[#EFECE6] border border-[#E5E2DC] dark:border-[#2C333F] flex items-center justify-center p-1">
                      <img src={amenity.icon} alt="" className="w-9 h-9 object-contain" />
                    </div>
                    <span className="text-xs font-medium text-[#111418] dark:text-[#F5F3EE]">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Pin Map */}
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DA2328] mb-1">
                  Neighborhood Context
                </p>
                <h2 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                  Property Map &amp; Coordinates
                </h2>
              </div>

              {property.coordinates ? (
                <DhakaMap focusProperty={property} heightClass="h-[360px]" />
              ) : (
                <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#111418] dark:text-[#F5F3EE]">
                      Located at {property.address}
                    </p>
                    <p className="text-xs text-[#5E646C] dark:text-[#A4A8AE] mt-1">
                      Exact parcel pin coordinates were not published for this Banani residence; contact Shwapno Bari
                      head office in Banani for on-site inspection routing.
                    </p>
                  </div>
                  <Link
                    to="/contact-us"
                    className="px-5 py-2.5 bg-[#0C0C0C] dark:bg-[#DA2328] text-white text-xs font-semibold uppercase tracking-wider shrink-0"
                  >
                    Request Site Directions
                  </Link>
                </div>
              )}
            </div>

            {/* Interactive Mortgage Calculator */}
            <MortgageCalculator
              defaultPriceBdt={property.priceEstimateBdt}
              propertyTitle={property.projectName}
            />
          </div>

          {/* Right 4-col Sticky Dossier Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-6 sm:p-7 lg:sticky lg:top-24 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DA2328]">
                  Dossier Specifications
                </p>
                <p className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE] mt-1 tabular-nums">
                  {property.priceDisplay}
                </p>
              </div>

              <dl className="divide-y divide-[#F2EFE9] dark:divide-[#242A34] text-sm">
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#5E646C] dark:text-[#A4A8AE]">Reference ID</dt>
                  <dd className="font-mono font-semibold text-[#111418] dark:text-[#F5F3EE]">{property.refId}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#5E646C] dark:text-[#A4A8AE]">Project</dt>
                  <dd className="font-semibold text-[#111418] dark:text-[#F5F3EE] text-right">{property.projectName}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#5E646C] dark:text-[#A4A8AE]">Developer</dt>
                  <dd className="font-medium text-[#111418] dark:text-[#EAE7E1] text-right">{property.developer}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#5E646C] dark:text-[#A4A8AE]">Property Type</dt>
                  <dd className="font-medium text-[#111418] dark:text-[#EAE7E1]">{property.typeLabel}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#5E646C] dark:text-[#A4A8AE]">Completion</dt>
                  <dd className="font-medium text-[#111418] dark:text-[#EAE7E1]">{property.completionStatus}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#5E646C] dark:text-[#A4A8AE]">Purpose</dt>
                  <dd className="font-medium text-[#111418] dark:text-[#EAE7E1]">{property.purpose}</dd>
                </div>
                {property.landSize && (
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#5E646C] dark:text-[#A4A8AE]">Land Size</dt>
                    <dd className="font-medium text-[#111418] dark:text-[#EAE7E1]">{property.landSize}</dd>
                  </div>
                )}
                {property.buildingHeight && (
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#5E646C] dark:text-[#A4A8AE]">Building Structure</dt>
                    <dd className="font-medium text-[#111418] dark:text-[#EAE7E1] text-right">
                      {property.buildingHeight}
                    </dd>
                  </div>
                )}
                {property.handoverYear && (
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#5E646C] dark:text-[#A4A8AE]">Handover Year</dt>
                    <dd className="font-medium text-[#111418] dark:text-[#EAE7E1]">{property.handoverYear}</dd>
                  </div>
                )}
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#5E646C] dark:text-[#A4A8AE] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Last Updated
                  </dt>
                  <dd className="font-medium text-[#111418] dark:text-[#EAE7E1]">{property.lastUpdated}</dd>
                </div>
              </dl>

              {/* Agent Actions */}
              <div className="space-y-3 pt-2 border-t border-[#E5E2DC] dark:border-[#242A34]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5E646C] dark:text-[#A4A8AE]">
                  Speak With Shwapno Bari Advisory
                </p>
                <a
                  href={`tel:${property.agentPhone.replace(/\s+/g, '')}`}
                  className="w-full py-3.5 px-5 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="tabular-nums">Call {property.agentPhone}</span>
                </a>
                <a
                  href={`mailto:${property.agentEmail}?subject=${encodeURIComponent(
                    `Inquiry: ${property.projectName} (${property.refId})`
                  )}`}
                  className="w-full py-3.5 px-5 bg-[#0C0C0C] dark:bg-[#232934] hover:bg-[#23272E] dark:hover:bg-[#DA2328] text-white text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Property Desk</span>
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={COMPANY.phones.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 border border-[#E5E2DC] dark:border-[#2A303A] hover:border-[#156E44] text-xs font-semibold text-center text-[#111418] dark:text-[#F5F3EE]"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={fbShareHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 border border-[#E5E2DC] dark:border-[#2A303A] hover:border-[#0C0C0C] dark:hover:border-[#DA2328] text-xs font-semibold text-center text-[#111418] dark:text-[#F5F3EE] inline-flex items-center justify-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#DA2328]" /> Share
                  </a>
                </div>
              </div>

              {/* Nearby Neighborhood Links */}
              {property.nearbyLocations.length > 0 && (
                <div className="pt-4 border-t border-[#F2EFE9] dark:border-[#242A34]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5E646C] dark:text-[#A4A8AE] mb-2.5">
                    Nearby Apartments
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {property.nearbyLocations.map((loc) => (
                      <Link
                        key={loc.label}
                        to={`/properties-list?location=${loc.locationSlug}`}
                        className="px-3 py-1.5 text-xs bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#242A34] hover:border-[#DA2328] text-[#111418] dark:text-[#EAE7E1] transition-colors"
                      >
                        {loc.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Recommended Residences */}
      {recommended.length > 0 && (
        <section className="py-16 bg-white dark:bg-[#12161C] border-t border-[#E5E2DC] dark:border-[#242A34] transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DA2328]">Explore Similar</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111418] dark:text-[#F5F3EE] mt-1">
                  Recommended Properties
                </h2>
              </div>
              <Link
                to="/properties-list"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328]"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Portfolio
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {recommended.map((item) => (
                <PropertyCard key={item.refId} property={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <LightboxModal
        images={property.gallery}
        currentIndex={lightboxIndex}
        title={property.projectName}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}

