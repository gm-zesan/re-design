import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function LightboxModal({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNavigate,
  title = '',
}) {
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate?.((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate?.((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const active = images[currentIndex] || images[0];
  const src = typeof active === 'string' ? active : active.image;
  const caption =
    typeof active === 'string' ? title : active.title || title || 'Gallery View';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-obsidian/70 text-white transition hover:border-crimson hover:bg-crimson sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate?.((currentIndex - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-obsidian/70 text-white transition hover:border-crimson hover:bg-crimson sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate?.((currentIndex + 1) % images.length);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-obsidian/70 text-white transition hover:border-crimson hover:bg-crimson sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        className="relative flex max-h-[88vh] max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={caption}
          className="max-h-[76vh] w-auto max-w-full border border-white/10 object-contain shadow-2xl"
        />
        <div className="mt-4 flex w-full items-center justify-between gap-4 px-2 text-sm text-white/85">
          <p className="font-serif text-lg font-medium">{caption}</p>
          {images.length > 1 && (
            <span className="shrink-0 font-mono text-xs tracking-wider text-white/60">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

