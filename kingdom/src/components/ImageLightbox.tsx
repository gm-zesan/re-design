import { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({
  src,
  alt,
  title,
  caption,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      setZoom(1);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(3, +(z + 0.35).toFixed(2)));
      if (e.key === '-') setZoom((z) => Math.max(0.75, +(z - 0.35).toFixed(2)));
      if (e.key === '0') setZoom(1);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#0F1629]/95 text-white backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={title || alt}
    >
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          {title && (
            <h3 className="truncate font-display text-base font-semibold text-white sm:text-lg">
              {title}
            </h3>
          )}
          {caption && (
            <p className="truncate text-xs text-white/70 sm:text-sm">{caption}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-white/15 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.75, +(z - 0.25).toFixed(2)))}
              className="rounded p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
              title="Zoom out (-)"
              aria-label="Zoom out"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="min-w-[3.25rem] text-center font-mono-tech text-xs text-white/90">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)))}
              className="rounded p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
              title="Zoom in (+)"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setZoom(1)}
              className="rounded p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
              title="Reset zoom (0)"
              aria-label="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>

          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 transition hover:bg-white/15 sm:inline-flex"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            Open Full Image
          </a>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/20 bg-white/10 p-2 text-white transition hover:bg-[#C8232C]"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scrollable/Zoomable Image Stage */}
      <div
        className="flex-1 overflow-auto p-4 sm:p-8"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="flex min-h-full items-center justify-center">
          <img
            src={src}
            alt={alt}
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'center center',
            }}
            className="max-h-[82vh] max-w-full rounded-lg border border-white/15 bg-white object-contain shadow-2xl transition-transform duration-200"
          />
        </div>
      </div>
    </div>
  );
}

