import { useMemo, useState } from 'react';
import { Expand, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ImageWithFallback from '../components/ImageWithFallback';
import LightboxModal from '../components/LightboxModal';
import { GALLERY_ITEMS } from '../data/siteData';

export default function GalleryPage() {
  const [filterMode, setFilterMode] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const validItems = useMemo(
    () => GALLERY_ITEMS.filter((item) => item.ok),
    []
  );

  const displayedItems =
    filterMode === 'valid' ? validItems : GALLERY_ITEMS;

  const openLightboxForItem = (item) => {
    const idx = validItems.findIndex((v) => v.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Milestones & Celebrations"
        title="Photo Gallery"
        subtitle="Signing ceremonies, ground-breaking events, Doa Mahfils, and project milestones across Bashundhara R/A and Jalshiri Abashon."
        image="/media/gallery/Daylight_Opening_day.jpg"
        breadcrumbs={[{ label: 'Gallery' }]}
        rightSlot={
          <div className="border border-stone border-t-2 border-t-crimson bg-white/95 px-5 py-3 text-sm text-charcoal backdrop-blur-md dark:border-white/15 dark:border-t-crimson dark:bg-[#161920]/90 dark:text-white">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-concrete dark:text-white/60">
              Archive Summary
            </span>
            <span className="font-serif text-xl font-semibold">
              {GALLERY_ITEMS.length} Records ({validItems.length} Photos Online)
            </span>
          </div>
        }
      />

      <section className="bg-alabaster py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 border border-bronze/40 bg-bronze-soft/60 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-charcoal">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-bronze-ink" />
              <p>
                <strong>Gallery Audit Note:</strong> All 19 original gallery
                captions are preserved. {validItems.length} photography assets
                are live (<code>200 OK</code>), while 10 historical entries return{' '}
                <code>404</code> on the origin server and render with clean
                archival placeholders.
              </p>
            </div>

            <div className="inline-flex shrink-0 border border-stone bg-surface p-1">
              <button
                type="button"
                onClick={() => setFilterMode('all')}
                className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  filterMode === 'all'
                    ? 'bg-obsidian text-white dark:bg-white dark:text-obsidian'
                    : 'text-concrete hover:text-charcoal'
                }`}
              >
                All ({GALLERY_ITEMS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('valid')}
                className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  filterMode === 'valid'
                    ? 'bg-crimson text-white'
                    : 'text-concrete hover:text-charcoal'
                }`}
              >
                Available Photos ({validItems.length})
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden border border-stone bg-surface shadow-card transition hover:shadow-editorial"
              >
                {item.ok ? (
                  <button
                    type="button"
                    onClick={() => openLightboxForItem(item)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-obsidian text-left focus:outline-none"
                    aria-label={`View full photo: ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-obsidian/75 text-white opacity-90 transition group-hover:bg-crimson">
                      <Expand className="h-4 w-4" />
                    </span>
                  </button>
                ) : (
                  <div className="aspect-[4/3] w-full">
                    <ImageWithFallback
                      available={false}
                      fallbackTitle={item.title}
                      fallbackNote="Origin photo unavailable (HTTP 404)"
                      variant="light"
                      className="h-full w-full"
                    />
                  </div>
                )}

                <div className="flex flex-1 items-center justify-between gap-3 p-5">
                  <h2 className="font-serif text-lg font-semibold leading-snug text-charcoal">
                    {item.title}
                  </h2>
                  <span className="shrink-0 font-mono text-xs text-concrete">
                    #{String(item.id).padStart(2, '0')}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LightboxModal
        images={validItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
