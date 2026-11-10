import React, { useState, useEffect, useCallback } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Video,
} from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function PropertyGallery({
  images = [],
  title = '',
  isRented = false,
  hasVideo = false,
  onScrollToVideo,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const safeImages = images.length > 0 ? images : [];

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % safeImages.length);
  }, [safeImages.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  }, [safeImages.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxOpen, goNext, goPrev]);

  const openAt = (idx) => {
    setActiveIndex(idx);
    setLightboxOpen(true);
  };

  if (safeImages.length === 0) {
    return (
      <div className="aspect-[16/9] rounded-md overflow-hidden border border-hairline bg-panel flex items-center justify-center">
        <ImageWithFallback src="" alt={title} className="w-full h-full" />
      </div>
    );
  }

  return (
    <>
      <div className="space-y-3">
        {safeImages.length === 1 ? (
          <div
            onClick={() => openAt(0)}
            className="relative aspect-[16/9] max-h-[520px] w-full rounded-md overflow-hidden border border-hairline bg-panel cursor-pointer group"
          >
            <ImageWithFallback
              src={safeImages[0]}
              alt={title}
              loading="eager"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            {isRented && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-sm bg-brand-navyDeep/95 text-white text-xs font-bold uppercase tracking-widest">
                RENTED
              </span>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div
              onClick={() => openAt(0)}
              className="md:col-span-8 relative aspect-[16/10] md:h-[440px] rounded-md overflow-hidden border border-hairline bg-panel cursor-pointer group"
            >
              <ImageWithFallback
                src={safeImages[0]}
                alt={`${title} - Photo 1`}
                loading="eager"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {isRented && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-sm bg-brand-navyDeep/95 text-white text-xs font-bold uppercase tracking-widest">
                  RENTED
                </span>
              )}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                {hasVideo && onScrollToVideo && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onScrollToVideo();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-cobalt hover:bg-brand-navy text-white text-xs font-semibold"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Video Tour</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openAt(0);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-navyDeep/80 hover:bg-brand-navyDeep text-white text-xs font-medium"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View All {safeImages.length} Photos</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:h-[440px]">
              {safeImages.slice(1, 3).map((img, i) => (
                <div
                  key={img + i}
                  onClick={() => openAt(i + 1)}
                  className="relative h-40 md:h-[214px] rounded-md overflow-hidden border border-hairline bg-panel cursor-pointer group"
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${title} - Photo ${i + 2}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {i === 1 && safeImages.length > 3 && (
                    <div className="absolute inset-0 bg-brand-navyDeep/55 flex items-center justify-center text-white font-semibold text-sm group-hover:bg-brand-navyDeep/70 transition-colors">
                      <Camera className="w-4 h-4 mr-1.5" />
                      <span>+{safeImages.length - 3} more photos</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {safeImages.length > 3 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {safeImages.map((img, idx) => (
              <button
                key={img + idx}
                type="button"
                onClick={() => openAt(idx)}
                className="w-20 h-14 rounded overflow-hidden border border-hairline hover:border-brand-cobalt shrink-0 transition-colors bg-panel"
              >
                <ImageWithFallback
                  src={img}
                  alt={`${title} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-brand-navyDeep/95 flex flex-col justify-between p-4 sm:p-6 no-print"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="flex items-center justify-between text-white max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-sm font-medium truncate pr-4">
              <span className="text-brand-magenta font-bold tabular-nums mr-2">
                {activeIndex + 1} / {safeImages.length}
              </span>
              <span className="text-white/90">{title}</span>
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-3 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-4 z-10 p-3 rounded bg-black/55 hover:bg-brand-cobalt text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={safeImages[activeIndex]}
              alt={`${title} - View ${activeIndex + 1}`}
              className="max-h-[72vh] max-w-full object-contain rounded"
            />

            <button
              type="button"
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-2 sm:right-4 z-10 p-3 rounded bg-black/55 hover:bg-brand-cobalt text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div
            className="flex items-center justify-center gap-2 overflow-x-auto max-w-4xl mx-auto py-1"
            onClick={(e) => e.stopPropagation()}
          >
            {safeImages.map((img, idx) => (
              <button
                key={img + idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`w-16 h-12 rounded overflow-hidden border-2 shrink-0 transition-all ${
                  idx === activeIndex
                    ? 'border-brand-magenta opacity-100'
                    : 'border-transparent opacity-55 hover:opacity-90'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
