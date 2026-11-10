import { useState } from 'react';
import { Camera, Maximize2, Sparkles } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ImageLightbox } from '../components/ImageLightbox';
import { GALLERY_COLLECTIONS } from '../data/siteData';

const CATEGORIES = [
  'All',
  'Community & Foundation',
  'Kingdom City',
  'Construction & Fleet',
  'Builders & Architecture',
];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<(typeof GALLERY_COLLECTIONS)[number] | null>(
    null
  );

  const featuredOriginItem = GALLERY_COLLECTIONS[0];
  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_COLLECTIONS
      : GALLERY_COLLECTIONS.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <PageBanner
        eyebrow="Visual Archive"
        title="Photo Gallery"
        subtitle="Preserving KINGDOM GROUP's original community aid gallery photograph alongside field operations, Kingdom City site visuals, and Builders architectural perspectives."
        breadcrumbs={[{ label: 'About Us', to: '/about' }, { label: 'Photo Gallery' }]}
        backgroundImage="/images/gallery/jakat-dhaka.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Highlighted Single Active Item from /home/photo_gallery */}
        <div className="mb-12 rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#1A1C21] lg:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="group relative overflow-hidden rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] dark:border-white/15 dark:bg-[#141518] lg:col-span-6">
              <img
                src={featuredOriginItem.image}
                alt={featuredOriginItem.title}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <button
                type="button"
                onClick={() => setLightboxItem(featuredOriginItem)}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-[#111215]/85 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xs transition hover:bg-[#18191D]"
              >
                <Maximize2 className="h-3.5 w-3.5 text-[#C9A46B]" />
                <span>Inspect Photo</span>
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F2F1EE] px-3 py-1 font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#18191D] dark:bg-[#C9A46B]/18 dark:text-[#DFC69B]">
                <Sparkles className="h-3.5 w-3.5 text-[#8C6730] dark:text-[#C9A46B]" />
                <span>Original /home/photo_gallery Feature</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#18191D] dark:text-white">
                Caption: &ldquo;{featuredOriginItem.title}&rdquo;
              </h2>
              <p className="mt-2 text-sm font-medium text-[#8C6730] dark:text-[#C9A46B]">
                {featuredOriginItem.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#52555E] dark:text-zinc-300">
                This photograph was the sole live entry published on the original{' '}
                <code className="rounded bg-[#F9F9F8] px-1.5 py-0.5 font-mono-tech text-xs dark:bg-[#141518]">
                  /home/photo_gallery
                </code>{' '}
                page, showing Managing Director Mohammed Nusrot Hossan participating in Zakat and
                community welfare distribution in Dhaka.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-[#18191D] dark:text-[#C9A46B]" />
            <h2 className="font-display text-2xl font-semibold text-[#18191D] dark:text-white">
              Complete Group Photography Collection
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-[#18191D] text-white shadow-xs dark:bg-[#8C6730] dark:text-[#111215]'
                    : 'border border-[#E4E3DF] bg-white text-[#52555E] hover:border-[#18191D] hover:text-[#18191D] dark:border-white/15 dark:bg-[#141518] dark:text-zinc-300 dark:hover:border-[#C9A46B] dark:hover:text-[#C9A46B]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E3DF] bg-white shadow-2xs transition hover:border-[#18191D]/40 hover:shadow-md dark:border-white/10 dark:bg-[#1A1C21] dark:hover:border-[#C9A46B]/40"
            >
              <div className="relative overflow-hidden bg-[#111215]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => setLightboxItem(item)}
                  className="absolute bottom-3 right-3 rounded-lg bg-[#111215]/80 p-2 text-white backdrop-blur-xs transition hover:bg-[#18191D]"
                  aria-label={`View ${item.title} enlarged`}
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
                <span className="absolute left-3 top-3 rounded-full bg-[#111215]/80 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-[#DFC69B] backdrop-blur-xs">
                  {item.sourcePage}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-[#8C6730] dark:text-[#C9A46B]">
                    {item.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-[#141518] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="font-bengali mt-1 text-xs leading-relaxed text-[#52555E] dark:text-zinc-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {lightboxItem && (
        <ImageLightbox
          src={lightboxItem.image}
          alt={lightboxItem.title}
          title={lightboxItem.title}
          caption={`${lightboxItem.subtitle} • Source: ${lightboxItem.sourcePage}`}
          isOpen
          onClose={() => setLightboxItem(null)}
        />
      )}
    </div>
  );
}
