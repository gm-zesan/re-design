import React, { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';

export default function ImageWithFallback({
  src,
  fallbackSrc = '',
  alt,
  className = '',
  fallbackClassName = '',
  loading = 'lazy',
}) {
  const [errored, setErrored] = useState(false);
  const [fallbackErrored, setFallbackErrored] = useState(false);

  useEffect(() => {
    setErrored(false);
    setFallbackErrored(false);
  }, [src, fallbackSrc]);

  if (errored && fallbackSrc && !fallbackErrored) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        loading={loading}
        onError={() => setFallbackErrored(true)}
        className={className}
      />
    );
  }

  if (!src || errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-panel text-ink-muted ${fallbackClassName || className}`}
        aria-label={alt || 'Property photograph'}
      >
        <Building2 className="w-7 h-7 text-brand-cobalt/60 mb-1.5" strokeWidth={1.5} />
        <span className="text-[11px] uppercase tracking-wider font-medium text-ink-subtle px-3 text-center line-clamp-1">
          Sharif Properties Service
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
