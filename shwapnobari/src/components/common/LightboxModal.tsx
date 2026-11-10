import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxModalProps {
  images: string[];
  currentIndex: number;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function LightboxModal({
  images,
  currentIndex,
  title,
  isOpen,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} Photo Gallery Lightbox`}
      className="fixed inset-0 z-50 bg-[#0C0C0C]/95 flex flex-col justify-between p-4 sm:p-6"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DA2328]">Gallery Viewer</p>
          <h3 className="font-serif text-xl sm:text-2xl text-white">{title}</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/70 tabular-nums">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Gallery"
            className="p-2 border border-white/25 text-white hover:bg-white hover:text-[#0C0C0C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-4 z-10 p-3 bg-black/60 hover:bg-[#DA2328] text-white border border-white/20 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={`${title} photograph ${currentIndex + 1}`}
          className="max-h-[70vh] max-w-full object-contain select-none"
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            aria-label="Next Image"
            className="absolute right-2 sm:right-4 z-10 p-3 bg-black/60 hover:bg-[#DA2328] text-white border border-white/20 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
          {images.map((img, idx) => (
            <button
              key={img + idx}
              type="button"
              onClick={() => onNavigate(idx)}
              className={`w-16 h-12 overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                idx === currentIndex ? 'border-[#DA2328] scale-105' : 'border-white/20 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

