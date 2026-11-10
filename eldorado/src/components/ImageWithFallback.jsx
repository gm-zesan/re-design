import { useState, useEffect } from 'react';
import { Building2, ImageOff } from 'lucide-react';

export default function ImageWithFallback({
  src,
  alt = '',
  available = true,
  fallbackTitle = 'El Dorado Architectural Archive',
  fallbackNote = 'Visual preview unavailable on source server',
  className = '',
  imgClassName = 'w-full h-full object-cover',
  variant = 'dark',
  showMissingBadge = true,
  loading = 'lazy',
}) {
  const [hasError, setHasError] = useState(!available || !src);

  useEffect(() => {
    setHasError(!available || !src);
  }, [src, available]);

  if (hasError || !src) {
    const isLight = variant === 'light';
    return (
      <div
        role="img"
        aria-label={alt || fallbackTitle}
        className={`relative flex flex-col items-center justify-center overflow-hidden p-6 text-center ${
          isLight
            ? 'bg-limestone text-charcoal border border-stone bg-arch-grid'
            : 'bg-[#1A1D22] text-[#F8F6F2] bg-arch-grid-dark'
        } ${className}`}
      >
        <div
          className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full border ${
            isLight
              ? 'border-stone bg-surface text-crimson-ink'
              : 'border-white/15 bg-white/5 text-bronze-light'
          }`}
        >
          {showMissingBadge ? (
            <Building2 className="h-5 w-5" />
          ) : (
            <ImageOff className="h-5 w-5" />
          )}
        </div>
        <p className="font-serif text-lg font-semibold leading-snug">
          {fallbackTitle}
        </p>
        {showMissingBadge && (
          <span
            className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide uppercase ${
              isLight
                ? 'bg-stone/70 text-concrete'
                : 'bg-white/10 text-white/70'
            }`}
          >
            {fallbackNote}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onError={() => setHasError(true)}
        className={imgClassName}
      />
    </div>
  );
}

