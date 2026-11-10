import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MapPin,
  Video,
  ArrowRight,
  ExternalLink,
  Phone,
  MessageCircle,
  Search,
  Building2,
  Compass,
} from 'lucide-react';
import siteData from '../data/siteData.json';
import propertiesSummary from '../data/propertiesSummary.json';
import PropertyCard from '../components/PropertyCard';
import { filterProperties, toInternalRoute } from '../utils/propertyHelpers';

function inferContextFilter(slug = '') {
  const s = slug.toLowerCase();
  const filter = { availability: 'all' };
  let label = 'Featured Dhaka Properties';

  if (s.includes('baridhara')) {
    filter.area = '12';
    label = 'Baridhara Diplomatic Zone Properties';
  } else if (s.includes('banani')) {
    filter.area = '2';
    label = 'Banani Dhaka Properties';
  } else if (s.includes('gulshan')) {
    filter.area = '1';
    label = 'Gulshan Dhaka Properties';
  }

  if (s.includes('office')) {
    filter.category = '2';
    filter.subcategory = '2';
    label = s.includes('gulshan') ? 'Office Spaces in Gulshan' : 'Office Spaces in Dhaka';
  } else if (s.includes('service-apartment')) {
    filter.category = '1';
    filter.subcategory = '9';
    label = 'Service Apartments in Dhaka';
  } else if (s.includes('furnished')) {
    filter.category = '1';
    filter.subcategory = '5';
    label = s.includes('baridhara')
      ? 'Furnished Apartments in Baridhara'
      : s.includes('banani')
      ? 'Furnished Apartments in Banani'
      : s.includes('gulshan')
      ? 'Furnished Apartments in Gulshan'
      : 'Furnished Apartments in Dhaka';
  }

  return { filter, label };
}

function buildSearchUrlFromFilter(filter) {
  const params = new URLSearchParams();
  if (filter.area) params.set('area', filter.area);
  if (filter.category) params.set('property_type', filter.category);
  if (filter.subcategory) params.set('property_type_subcat', filter.subcategory);
  const qs = params.toString();
  return qs ? `/searchResult?${qs}` : '/rent';
}

export default function EditorialGuidePage() {
  const location = useLocation();
  const [infoMap, setInfoMap] = useState(null);
  const [loading, setLoading] = useState(true);

  const normalizedSlug = useMemo(() => {
    let p = location.pathname.replace(/^\/public/, '') || '/';
    if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
    return p;
  }, [location.pathname]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    import('../data/infoPages.json')
      .then((mod) => {
        if (active) {
          setInfoMap(mod.default);
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

  const page = infoMap ? infoMap[normalizedSlug] : null;
  const cf = siteData.site.contactAndFooter;

  const { filter: contextFilter, label: contextLabel } = useMemo(
    () => inferContextFilter(normalizedSlug),
    [normalizedSlug]
  );

  const matchingProperties = useMemo(() => {
    const res = filterProperties(propertiesSummary, contextFilter);
    return (res.length > 0 ? res : propertiesSummary).slice(0, 3);
  }, [contextFilter]);

  const relatedGuides = useMemo(() => {
    const list = siteData.infoPageSummaries.filter((g) => g.slug !== normalizedSlug);
    const key =
      normalizedSlug.includes('gulshan')
        ? 'gulshan'
        : normalizedSlug.includes('banani')
        ? 'banani'
        : normalizedSlug.includes('baridhara')
        ? 'baridhara'
        : normalizedSlug.includes('maintenance') ||
          normalizedSlug.includes('plumber') ||
          normalizedSlug.includes('facility') ||
          normalizedSlug.includes('repair')
        ? 'maintenance'
        : 'dhaka';

    const prioritized = list.filter((g) => g.slug.includes(key));
    const others = list.filter((g) => !g.slug.includes(key));
    return [...prioritized, ...others].slice(0, 8);
  }, [normalizedSlug]);

  if (loading) {
    return (
      <div className="bg-canvas min-h-screen py-16 px-4 sm:px-6 max-w-[1320px] mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="h-10 bg-panel rounded w-1/2" />
          <div className="h-64 bg-panel rounded-md w-full" />
        </div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="bg-canvas min-h-[75vh] flex items-center justify-center px-4 py-16">
        <div className="bg-surface rounded-md border border-hairline p-8 sm:p-12 max-w-xl w-full text-center">
          <Compass className="w-12 h-12 text-brand-cobalt mx-auto mb-3" />
          <h1 className="font-serif text-3xl font-bold text-brand-navy">
            Page Not Found
          </h1>
          <p className="text-sm text-ink-muted mt-2">
            The route <code className="text-brand-royal font-medium">{normalizedSlug}</code> was not found. You can explore our 365 Dhaka rental listings or contact our Banani office directly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/rent"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-cobalt text-white text-sm font-semibold hover:bg-brand-navy transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Browse All 365 Properties</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-hairline bg-canvas text-ink text-sm font-semibold hover:border-brand-cobalt transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-cobalt" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const uniqueLinks = [];
  const seenHrefs = new Set();
  for (const lnk of page.links || []) {
    if (!lnk.href || seenHrefs.has(lnk.href)) continue;
    seenHrefs.add(lnk.href);
    uniqueLinks.push(lnk);
  }

  return (
    <div className="bg-canvas min-h-screen pb-16">
      <section className="relative bg-brand-navyDeep text-white py-14 sm:py-16 border-b border-brand-slate/40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/assets/header-bg.jpg')" }}
        />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/70 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/rent" className="hover:text-white transition-colors">Dhaka Real Estate</Link>
            <span>/</span>
            <span className="text-white font-medium">{page.bannerTitle}</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight max-w-4xl">
            {page.bannerTitle}
          </h1>
          {page.sectionHeading && page.sectionHeading !== page.bannerTitle && (
            <p className="text-base sm:text-lg text-white/85 mt-2 font-medium max-w-3xl">
              {page.sectionHeading}
            </p>
          )}
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Article */}
          <article className="lg:col-span-8 space-y-8">
            <div className="bg-surface rounded-md border border-hairline p-6 sm:p-10 space-y-4">
              {page.sectionHeading && (
                <div className="pb-4 mb-2 border-b border-hairline">
                  {page.sectionHeading.length > 90 ? (
                    <p className="font-serif text-lg sm:text-xl font-medium text-brand-navy leading-relaxed">
                      {page.sectionHeading}
                    </p>
                  ) : (
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy">
                      {page.sectionHeading}
                    </h2>
                  )}
                </div>
              )}

              <div className="space-y-4 text-ink-muted leading-[1.75] text-[15px]">
                {page.blocks.map((blk, i) => {
                  if (blk.type === 'heading') {
                    return (
                      <h3
                        key={i}
                        className="font-serif text-xl sm:text-2xl font-bold text-brand-navy pt-4 first:pt-0"
                      >
                        {blk.text}
                      </h3>
                    );
                  }
                  if (blk.type === 'list_item') {
                    return (
                      <div key={i} className="flex items-start gap-2.5 pl-2">
                        <span className="w-1.5 h-1.5 bg-brand-magenta mt-2.5 shrink-0" />
                        <p className="text-ink-muted">{blk.text}</p>
                      </div>
                    );
                  }
                  const colonIdx = blk.text.indexOf(':');
                  if (colonIdx > 2 && colonIdx < 42 && !blk.text.startsWith('http')) {
                    const label = blk.text.slice(0, colonIdx);
                    const rest = blk.text.slice(colonIdx + 1);
                    return (
                      <p key={i} className="bg-canvas px-4 py-3 border-l-2 border-brand-cobalt border border-hairline rounded-r">
                        <strong className="text-brand-navy font-semibold">{label}:</strong>
                        {rest}
                      </p>
                    );
                  }
                  return <p key={i}>{blk.text}</p>;
                })}
              </div>

              {uniqueLinks.length > 0 && (
                <div className="pt-6 mt-6 border-t border-hairline">
                  <h3 className="font-serif text-lg font-bold text-brand-navy mb-3">
                    Referenced Resources &amp; Map Links
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {uniqueLinks.map((lnk, idx) => {
                      const isInternal = lnk.href.includes('sharif.com.bd') || lnk.href.startsWith('/');
                      if (isInternal) {
                        return (
                          <Link
                            key={lnk.href + idx}
                            to={toInternalRoute(lnk.href)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-blueTint text-brand-navy text-xs font-semibold hover:bg-brand-cobalt hover:text-white transition-colors"
                          >
                            <span>{lnk.text}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        );
                      }
                      return (
                        <a
                          key={lnk.href + idx}
                          href={lnk.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-canvas border border-hairline text-ink text-xs font-medium hover:border-brand-cobalt transition-colors"
                        >
                          <span>{lnk.text}</span>
                          <ExternalLink className="w-3 h-3 text-brand-cobalt" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {page.youtubeEmbeds && page.youtubeEmbeds.length > 0 && (
              <section className="bg-surface rounded-md border border-hairline p-6 sm:p-8 space-y-5">
                <h2 className="font-serif text-2xl font-bold text-brand-navy flex items-center gap-2 pb-3 border-b border-hairline">
                  <Video className="w-5 h-5 text-brand-magenta" />
                  <span>Property &amp; Neighborhood Video Tours</span>
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {page.youtubeEmbeds.map((src, idx) => (
                    <div
                      key={src + idx}
                      className="aspect-video rounded overflow-hidden bg-black border border-hairline"
                    >
                      <iframe
                        src={src}
                        title={`${page.bannerTitle} Video ${idx + 1}`}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {page.googleMapEmbeds && page.googleMapEmbeds.length > 0 && (
              <section className="bg-surface rounded-md border border-hairline p-6 sm:p-8 space-y-5">
                <h2 className="font-serif text-2xl font-bold text-brand-navy flex items-center gap-2 pb-3 border-b border-hairline">
                  <MapPin className="w-5 h-5 text-brand-magenta" />
                  <span>Area Location Map</span>
                </h2>
                <div className="grid grid-cols-1 gap-5">
                  {page.googleMapEmbeds.map((src, idx) => (
                    <div
                      key={src + idx}
                      className="h-[340px] rounded overflow-hidden border border-hairline"
                    >
                      <iframe
                        src={src}
                        title={`${page.bannerTitle} Map ${idx + 1}`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Right Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-brand-navyDeep text-white rounded-md p-6 border border-brand-slate/40 space-y-4">
              <div className="text-[11px] uppercase tracking-[0.16em] text-brand-magenta font-semibold">
                Direct Advisory Desk
              </div>
              <h3 className="font-serif text-2xl font-bold">
                Speak with {cf.contactPerson}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Looking for verified apartments, diplomatic houses, commercial offices, or building maintenance support in Dhaka?
              </p>

              <div className="space-y-2 pt-1">
                {cf.phones.map((ph) => (
                  <a
                    key={ph}
                    href={`tel:${ph}`}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-white/10 hover:bg-white/15 border border-white/15 text-sm font-semibold tabular-nums transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-magenta" />
                    <span>{ph}</span>
                  </a>
                ))}
                <a
                  href={`https://api.whatsapp.com/send?phone=8801636333333&text=${encodeURIComponent(
                    `Hello Sharif Properties, I saw "${page.bannerTitle}" on your website and would like to inquire.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-brand-magenta hover:bg-brand-magentaDark text-white text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-surface rounded-md border border-hairline p-6">
              <h3 className="font-serif text-lg font-bold text-brand-navy mb-3 pb-2 border-b border-hairline flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-cobalt" />
                <span>Explore Live Inventory</span>
              </h3>
              <Link
                to={buildSearchUrlFromFilter(contextFilter)}
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded bg-brand-blueTint text-brand-navy font-semibold text-sm hover:bg-brand-cobalt hover:text-white transition-colors mb-2.5"
              >
                <span>{contextLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/rent"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded border border-hairline text-ink-muted hover:text-brand-navy text-xs font-semibold transition-colors"
              >
                <span>Browse All 365 Dhaka Properties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-surface rounded-md border border-hairline p-6">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-hairline">
                <h3 className="font-serif text-lg font-bold text-brand-navy">
                  Related Services &amp; Areas
                </h3>
                <Link
                  to="/rent"
                  className="text-xs font-semibold text-brand-royal hover:underline"
                >
                  All Properties
                </Link>
              </div>
              <ul className="space-y-1 text-sm">
                {relatedGuides.map((g) => (
                  <li key={g.slug}>
                    <Link
                      to={g.slug}
                      className="flex items-center justify-between px-3 py-2 rounded text-ink-muted hover:bg-panel hover:text-brand-royal transition-colors"
                    >
                      <span className="truncate pr-2">{g.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {matchingProperties.length > 0 && (
          <section className="mt-14 pt-12 border-t border-hairline">
            <div className="flex flex-wrap items-end justify-between gap-4 pb-4 mb-6 border-b border-hairline">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy">
                {contextLabel}
              </h2>
              <Link
                to={buildSearchUrlFromFilter(contextFilter)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-royal hover:text-brand-magenta"
              >
                <span>View Matching Properties</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingProperties.map((prop) => (
                <PropertyCard key={prop.slug} property={prop} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
