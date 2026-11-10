import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  BedDouble,
  Bath,
  CarFront,
  Maximize2,
  Calendar,
  Hash,
  Heart,
  Share2,
  Printer,
  Check,
  Video,
  AlertTriangle,
  Phone,
  Mail,
  MessageCircle,
  Send,
  ArrowLeft,
} from 'lucide-react';
import propertiesSummary from '../data/propertiesSummary.json';
import siteData from '../data/siteData.json';
import PropertyGallery from '../components/PropertyGallery';
import PropertyCard from '../components/PropertyCard';
import TermsModal from '../components/TermsModal';
import { useApp } from '../context/AppContext';

export default function PropertyDetailPage() {
  const { slug } = useParams();
  const { isFavorite, toggleFavorite, showToast } = useApp();
  const [detailMap, setDetailMap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [termsOpen, setTermsOpen] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const videoRef = useRef(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    import('../data/propertyDetails.json')
      .then((mod) => {
        if (active) {
          setDetailMap(mod.default);
          setLoading(false);
        }
      })
      .catch(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const summaryProp = useMemo(
    () => propertiesSummary.find((p) => p.slug === slug),
    [slug]
  );

  const property = detailMap ? detailMap[slug] || summaryProp : summaryProp;

  useEffect(() => {
    setInquirySent(false);
    if (property) {
      setInquiry((prev) => ({
        ...prev,
        message: `Hello Sharif Properties, I am interested in Card ${property.cardNo || property.id} (${property.title}). Please share viewing availability.`,
      }));
    }
  }, [slug, property?.cardNo, property?.id, property?.title]);

  const similarProperties = useMemo(() => {
    if (!property) return [];
    const bySlug = new Map(propertiesSummary.map((p) => [p.slug, p]));
    const explicit = (property.similarSlugs || [])
      .map((s) => bySlug.get(s))
      .filter(Boolean);
    if (explicit.length >= 3) return explicit.slice(0, 6);

    const existing = new Set([property.slug, ...explicit.map((x) => x.slug)]);
    const fallback = propertiesSummary.filter(
      (p) =>
        !existing.has(p.slug) &&
        (p.area === property.area || p.subcategory === property.subcategory)
    );
    return [...explicit, ...fallback].slice(0, 6);
  }, [property]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Property link copied to clipboard');
    } catch {
      showToast('Share URL: ' + window.location.href);
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!agreedTerms) {
      showToast('Please agree to the Terms of Use before submitting', 'error');
      return;
    }
    if (!inquiry.name.trim() || (!inquiry.phone.trim() && !inquiry.email.trim())) {
      showToast('Please enter your name and phone or email', 'error');
      return;
    }
    setInquirySent(true);
    showToast(`Viewing request sent for Card ${property?.cardNo || property?.id}`);
  };

  if (loading && !summaryProp) {
    return (
      <div className="bg-canvas min-h-screen py-16 px-4 sm:px-6 max-w-[1320px] mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-panel rounded w-2/3" />
          <div className="h-[420px] bg-panel rounded-md w-full" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-64 bg-panel rounded-md" />
            <div className="h-64 bg-panel rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="bg-canvas min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-surface rounded-md border border-hairline p-10 max-w-lg text-center">
          <h1 className="font-serif text-3xl font-bold text-brand-navy">Property Not Found</h1>
          <p className="text-sm text-ink-muted mt-2">
            The listing slug <code className="text-brand-royal">{slug}</code> could not be located in the 365-property catalog.
          </p>
          <Link
            to="/rent"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-cobalt text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Rental Properties</span>
          </Link>
        </div>
      </div>
    );
  }

  const cf = siteData.site.contactAndFooter;
  const favorited = isFavorite(property.slug);
  const isSqftRate =
    typeof property.formattedPrice === 'string' &&
    property.formattedPrice.includes('/ sq ft');

  return (
    <div className="bg-canvas min-h-screen pb-16">
      {/* Specification Header */}
      <section className="bg-surface border-b border-hairline pt-6 pb-8">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-4">
            <Link to="/" className="hover:text-brand-royal">Home</Link>
            <span>/</span>
            <Link to="/rent" className="hover:text-brand-royal">Rent Property</Link>
            {property.category && (
              <>
                <span>/</span>
                <Link
                  to={`/property-type/${property.category.toLowerCase()}`}
                  className="hover:text-brand-royal"
                >
                  {property.category}
                </Link>
              </>
            )}
            {property.subcategory && (
              <>
                <span>/</span>
                <span className="text-ink-subtle">{property.subcategory}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                {property.isRented ? (
                  <span className="px-2.5 py-1 rounded-sm bg-brand-navyDeep text-white text-[11px] font-bold uppercase tracking-widest">
                    RENTED
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-sm bg-brand-cobalt text-white text-[11px] font-bold uppercase tracking-widest">
                    FOR RENT
                  </span>
                )}
                {property.cardNo && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-panel border border-hairline text-xs font-bold text-brand-navy tabular-nums">
                    <Hash className="w-3.5 h-3.5 text-brand-magenta" />
                    <span>Card {property.cardNo}</span>
                  </span>
                )}
                {property.statusLabels?.map((lbl) => (
                  <span
                    key={lbl}
                    className="px-2.5 py-1 rounded-sm bg-canvas border border-hairline text-xs font-medium text-ink-muted"
                  >
                    {lbl}
                  </span>
                ))}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-navy leading-tight">
                {property.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
                <MapPin className="w-4 h-4 text-brand-magenta shrink-0" />
                <span>{property.address || property.area || 'Dhaka, Bangladesh'}</span>
                {property.postcode && (
                  <span className="text-ink-subtle">• Post Code: {property.postcode}</span>
                )}
              </div>
            </div>

            <div className="lg:text-right flex flex-col lg:items-end gap-3 shrink-0">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">
                  {property.formattedPrice}
                </div>
                {isSqftRate && property.totalMonthlyEstimate && (
                  <div className="text-sm font-medium text-ink-muted mt-0.5 tabular-nums">
                    Estimated Monthly Total: BDT{' '}
                    {Math.round(property.totalMonthlyEstimate).toLocaleString()}
                  </div>
                )}
                {property.pricePerSqftBreakdown && (
                  <div className="inline-block mt-1.5 px-3 py-1 rounded-sm bg-panel border border-hairline text-xs font-medium text-brand-navy tabular-nums">
                    {property.pricePerSqftBreakdown}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 no-print">
                <button
                  type="button"
                  onClick={() => toggleFavorite(property.slug)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded border text-xs font-semibold transition-colors ${
                    favorited
                      ? 'bg-brand-magenta text-white border-brand-magenta'
                      : 'bg-surface border-hairline text-ink hover:border-brand-cobalt'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                  <span>{favorited ? 'Saved' : 'Save'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded border border-hairline bg-surface text-xs font-semibold text-ink hover:border-brand-cobalt transition-colors"
                >
                  <Share2 className="w-4 h-4 text-brand-cobalt" />
                  <span>Share</span>
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded border border-hairline bg-surface text-xs font-semibold text-ink hover:border-brand-cobalt transition-colors"
                >
                  <Printer className="w-4 h-4 text-brand-cobalt" />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-8">
        {property.detailAvailable === false && (
          <div className="mb-6 rounded-md border border-brand-magenta/40 bg-brand-magentaTint p-4 sm:p-5 flex items-start gap-3 text-sm text-brand-navy">
            <AlertTriangle className="w-5 h-5 text-brand-magenta shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Portfolio Card Record:</strong>{' '}
              {property.detailNote ||
                'The original live detail endpoint returned an incomplete response; all preserved listing card specifications, pricing, and images are displayed below.'}
            </div>
          </div>
        )}

        <div className="mb-10">
          <PropertyGallery
            images={property.images || (property.thumbnail ? [property.thumbnail] : [])}
            title={property.title}
            isRented={property.isRented}
            hasVideo={Boolean(property.youtubeEmbed)}
            onScrollToVideo={() =>
              videoRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 8 Columns */}
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-surface rounded-md border border-hairline p-6">
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-5 pb-3 border-b border-hairline">
                Property Overview
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-t border-l border-hairline">
                {property.cardNo && (
                  <div className="p-3.5 bg-surface border-r border-b border-hairline">
                    <div className="text-[11px] uppercase tracking-wider text-ink-subtle font-semibold">
                      Property Card
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-bold text-brand-navy tabular-nums">
                      <Hash className="w-4 h-4 text-brand-magenta" />
                      <span>{property.cardNo}</span>
                    </div>
                  </div>
                )}

                {property.bedrooms && (
                  <div className="p-3.5 bg-surface border-r border-b border-hairline">
                    <div className="text-[11px] uppercase tracking-wider text-ink-subtle font-semibold">
                      Bedrooms
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-bold text-ink tabular-nums">
                      <BedDouble className="w-4 h-4 text-brand-cobalt" />
                      <span>{property.bedrooms}</span>
                    </div>
                  </div>
                )}

                {property.bathrooms && (
                  <div className="p-3.5 bg-surface border-r border-b border-hairline">
                    <div className="text-[11px] uppercase tracking-wider text-ink-subtle font-semibold">
                      Bathrooms
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-bold text-ink tabular-nums">
                      <Bath className="w-4 h-4 text-brand-cobalt" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                )}

                {property.garage && (
                  <div className="p-3.5 bg-surface border-r border-b border-hairline">
                    <div className="text-[11px] uppercase tracking-wider text-ink-subtle font-semibold">
                      Garage / Parking
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-bold text-ink tabular-nums">
                      <CarFront className="w-4 h-4 text-brand-cobalt" />
                      <span>{property.garage}</span>
                    </div>
                  </div>
                )}

                {property.sqft && (
                  <div className="p-3.5 bg-surface border-r border-b border-hairline">
                    <div className="text-[11px] uppercase tracking-wider text-ink-subtle font-semibold">
                      Floor Size
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-bold text-ink tabular-nums">
                      <Maximize2 className="w-4 h-4 text-brand-cobalt" />
                      <span>
                        {Number(property.sqft)
                          ? `${Number(property.sqft).toLocaleString()} sq ft`
                          : `${property.sqft} sq ft`}
                      </span>
                    </div>
                  </div>
                )}

                {property.yearBuilt && (
                  <div className="p-3.5 bg-surface border-r border-b border-hairline">
                    <div className="text-[11px] uppercase tracking-wider text-ink-subtle font-semibold">
                      Year Built
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-bold text-ink tabular-nums">
                      <Calendar className="w-4 h-4 text-brand-cobalt" />
                      <span>{property.yearBuilt}</span>
                    </div>
                  </div>
                )}

                {property.category && (
                  <div className="p-3.5 bg-surface border-r border-b border-hairline">
                    <div className="text-[11px] uppercase tracking-wider text-ink-subtle font-semibold">
                      Category
                    </div>
                    <div className="mt-1 font-bold text-brand-royal text-sm">
                      {property.category}
                    </div>
                  </div>
                )}

                {property.subcategory && (
                  <div className="p-3.5 bg-surface border-r border-b border-hairline">
                    <div className="text-[11px] uppercase tracking-wider text-ink-subtle font-semibold">
                      Property Type
                    </div>
                    <div className="mt-1 font-semibold text-ink text-sm">
                      {property.subcategory}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {property.description && (
              <section className="bg-surface rounded-md border border-hairline p-6">
                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4 pb-3 border-b border-hairline">
                  Description
                </h2>
                <div className="space-y-3 text-sm sm:text-[15px] text-ink-muted leading-relaxed whitespace-pre-line">
                  {property.description}
                </div>
              </section>
            )}

            {property.features && property.features.length > 0 && (
              <section className="bg-surface rounded-md border border-hairline p-6">
                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4 pb-3 border-b border-hairline">
                  Property Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feat, i) => (
                    <div
                      key={feat + i}
                      className="flex items-center gap-2.5 text-sm text-ink bg-canvas px-3.5 py-2.5 rounded border border-hairline"
                    >
                      <Check className="w-4 h-4 text-brand-cobalt shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {property.amenities && property.amenities.length > 0 && (
              <section className="bg-surface rounded-md border border-hairline p-6">
                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4 pb-3 border-b border-hairline">
                  Amenities &amp; Living Facilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amen, i) => (
                    <div
                      key={amen + i}
                      className="flex items-center gap-2.5 text-sm text-ink bg-canvas px-3.5 py-2.5 rounded border border-hairline"
                    >
                      <Check className="w-4 h-4 text-brand-magenta shrink-0" />
                      <span>{amen}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {property.youtubeEmbed && (
              <section
                ref={videoRef}
                className="bg-surface rounded-md border border-hairline p-6"
              >
                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4 pb-3 border-b border-hairline flex items-center gap-2">
                  <Video className="w-5 h-5 text-brand-magenta" />
                  <span>Property Video Walkthrough</span>
                </h2>
                <div className="aspect-video rounded overflow-hidden bg-black border border-hairline">
                  <iframe
                    src={property.youtubeEmbed}
                    title={`${property.title} Video Tour`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </section>
            )}

            <section className="bg-surface rounded-md border border-hairline p-6">
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4 pb-3 border-b border-hairline flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-magenta" />
                <span>Address &amp; Neighborhood Map</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                <div className="p-3.5 rounded bg-canvas border border-hairline">
                  <span className="text-xs uppercase tracking-wider text-ink-subtle font-semibold block">
                    Full Address
                  </span>
                  <span className="font-medium text-ink mt-0.5 block">
                    {property.address || property.area}
                  </span>
                </div>
                {property.postcode && (
                  <div className="p-3.5 rounded bg-canvas border border-hairline">
                    <span className="text-xs uppercase tracking-wider text-ink-subtle font-semibold block">
                      Post Code
                    </span>
                    <span className="font-medium text-ink mt-0.5 block tabular-nums">
                      {property.postcode}
                    </span>
                  </div>
                )}
              </div>

              {property.googleMapEmbed && (
                <div className="h-[340px] rounded overflow-hidden border border-hairline">
                  <iframe
                    src={property.googleMapEmbed}
                    title={`${property.title} Location Map`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              )}
            </section>
          </div>

          {/* Right 4 Columns — Sticky Brokerage Desk & Viewing Request */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 no-print">
            <div className="bg-surface rounded-md border border-hairline p-6 shadow-soft">
              <div className="flex items-center gap-3.5 pb-4 mb-4 border-b border-hairline">
                <div className="w-12 h-12 rounded bg-canvas border border-hairline p-1.5 flex items-center justify-center shrink-0">
                  <img
                    src="/assets/logo.png"
                    alt="Sharif Properties"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-brand-navy">
                    {cf.contactPerson}
                  </div>
                  <div className="text-xs text-brand-magenta font-semibold uppercase tracking-wider">
                    {cf.brandName}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5 mb-5">
                {cf.phones.map((ph) => (
                  <a
                    key={ph}
                    href={`tel:${ph}`}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-hairline bg-canvas hover:border-brand-cobalt hover:text-brand-royal text-sm font-semibold text-ink tabular-nums transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-cobalt" />
                    <span>{ph}</span>
                  </a>
                ))}
                <a
                  href={`https://api.whatsapp.com/send?phone=8801636333333&text=${encodeURIComponent(
                    `Hello Sharif Properties, I am interested in Card ${property.cardNo || property.id}: ${property.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-brand-navy hover:bg-brand-cobalt text-white text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`mailto:${cf.emails[0]}?subject=${encodeURIComponent(
                    `Inquiry: Card ${property.cardNo || property.id} - ${property.title}`
                  )}`}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded border border-hairline text-xs font-medium text-ink-muted hover:text-brand-navy transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-cobalt" />
                  <span>{cf.emails[0]}</span>
                </a>
              </div>

              {inquirySent ? (
                <div className="rounded border border-brand-cobalt/30 bg-brand-blueTint p-5 text-center space-y-2">
                  <Check className="w-8 h-8 text-brand-cobalt mx-auto" />
                  <h3 className="font-serif text-lg font-bold text-brand-navy">
                    Viewing Inquiry Prepared
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Our leasing advisor will respond promptly regarding Card{' '}
                    <strong>{property.cardNo || property.id}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setInquirySent(false)}
                    className="text-xs font-semibold text-brand-royal hover:underline pt-1"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-brand-navy">
                    Request a Private Viewing
                  </h3>
                  <input
                    type="text"
                    required
                    value={inquiry.name}
                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                    placeholder="Your Name *"
                    className="w-full px-3.5 py-2.5 rounded border border-hairline bg-canvas text-sm focus:outline-none focus:border-brand-cobalt focus:bg-surface"
                  />
                  <input
                    type="tel"
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                    placeholder="Phone / WhatsApp Number"
                    className="w-full px-3.5 py-2.5 rounded border border-hairline bg-canvas text-sm focus:outline-none focus:border-brand-cobalt focus:bg-surface"
                  />
                  <input
                    type="email"
                    value={inquiry.email}
                    onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full px-3.5 py-2.5 rounded border border-hairline bg-canvas text-sm focus:outline-none focus:border-brand-cobalt focus:bg-surface"
                  />
                  <textarea
                    rows={3}
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-hairline bg-canvas text-sm focus:outline-none focus:border-brand-cobalt focus:bg-surface"
                  />

                  <label className="flex items-start gap-2 text-xs text-ink-muted cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="mt-0.5 rounded border-hairline text-brand-cobalt focus:ring-brand-cobalt"
                    />
                    <span>
                      By submitting this form I agree to the{' '}
                      <button
                        type="button"
                        onClick={() => setTermsOpen(true)}
                        className="text-brand-royal font-semibold underline hover:text-brand-magenta"
                      >
                        Terms of Use
                      </button>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-brand-magenta hover:bg-brand-magentaDark text-white text-sm font-semibold transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Viewing Request</span>
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>

        {similarProperties.length > 0 && (
          <section className="mt-14 pt-12 border-t border-hairline">
            <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-hairline">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy">
                Similar Properties in {property.area || 'Dhaka'}
              </h2>
              <Link
                to="/rent"
                className="text-sm font-semibold text-brand-royal hover:text-brand-magenta"
              >
                Explore All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((sp) => (
                <PropertyCard key={sp.slug} property={sp} />
              ))}
            </div>
          </section>
        )}
      </div>

      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </div>
  );
}
