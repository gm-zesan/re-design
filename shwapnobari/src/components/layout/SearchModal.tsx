import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, MapPin } from 'lucide-react';
import { PROPERTIES } from '../../data/properties';
import { SERVING_AREAS } from '../../data/company';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const matches = PROPERTIES.filter((p) => {
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.projectName.toLowerCase().includes(q) ||
      p.areaName.toLowerCase().includes(q) ||
      p.address.toLowerCase().includes(q) ||
      p.refId.toLowerCase().includes(q) ||
      p.status.toLowerCase().includes(q) ||
      String(p.sizeSft).includes(q)
    );
  });

  const handleGo = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-24 px-4">
      <div className="fixed inset-0 bg-[#0C0C0C]/75 backdrop-blur-xs" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search Properties and Locations"
        className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#2A303A] shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E5E2DC] dark:border-[#242A34]">
          <Search className="w-5 h-5 text-[#DA2328] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by location (Gulshan, Bashundhara, Asad Avenue), project, Ref ID..."
            className="w-full text-sm sm:text-base text-[#111418] dark:text-[#F5F3EE] placeholder-[#5E646C] dark:placeholder-[#8D939E] focus:outline-none bg-transparent"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Search"
            className="p-1.5 text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#111418] dark:hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-3 bg-[#FAFAF8] dark:bg-[#10141A] border-b border-[#E5E2DC] dark:border-[#242A34] flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5E646C] dark:text-[#A4A8AE] mr-1">
            Quick Filters:
          </span>
          <button
            type="button"
            onClick={() => handleGo('/properties-list?project_state=Available')}
            className="px-2.5 py-1 text-xs font-medium bg-[#ECF7F1] text-[#156E44] dark:bg-[#156E44]/25 dark:text-[#6EE7B7] hover:opacity-85 cursor-pointer"
          >
            Available Flats
          </button>
          <button
            type="button"
            onClick={() => handleGo('/properties-list?project_state=Sold')}
            className="px-2.5 py-1 text-xs font-medium bg-[#EFEFF1] text-[#1F242D] dark:bg-[#232934] dark:text-[#D1D5DB] hover:opacity-85 cursor-pointer"
          >
            Delivered / Sold
          </button>
          {SERVING_AREAS.slice(0, 6).map((area) => (
            <button
              key={area.locationParam}
              type="button"
              onClick={() => handleGo(`/properties-list?location=${area.locationParam}`)}
              className="px-2.5 py-1 text-xs bg-white dark:bg-[#171C24] border border-[#E5E2DC] dark:border-[#2A303A] text-[#111418] dark:text-[#EAE7E1] hover:border-[#DA2328] hover:text-[#DA2328] cursor-pointer"
            >
              {area.name}
            </button>
          ))}
        </div>

        <div className="max-h-80 overflow-y-auto divide-y divide-[#F2EFE9] dark:divide-[#242A34]">
          {matches.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm text-[#5E646C] dark:text-[#A4A8AE]">
                No residences matched &ldquo;{query}&rdquo;. Try searching Mohammadpur, Bashundhara, Dhanmondi,
                Gulshan-2, Banani, or Banasree.
              </p>
            </div>
          ) : (
            matches.map((prop) => (
              <Link
                key={prop.refId}
                to={`/properties/${prop.slug}`}
                onClick={onClose}
                className="flex items-center gap-4 p-4 hover:bg-[#FAFAF8] dark:hover:bg-[#1A2029] transition-colors group"
              >
                <img
                  src={prop.cardImage}
                  alt={prop.projectName}
                  className="w-20 h-16 object-cover shrink-0 bg-[#F2EFE9] dark:bg-[#1E242E]"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5E646C] dark:text-[#A4A8AE]">
                      {prop.refId}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 ${
                        prop.status === 'Available'
                          ? 'bg-[#ECF7F1] text-[#156E44] dark:bg-[#156E44]/25 dark:text-[#6EE7B7]'
                          : 'bg-[#EFEFF1] text-[#1F242D] dark:bg-[#232934] dark:text-[#D1D5DB]'
                      }`}
                    >
                      {prop.status}
                    </span>
                  </div>
                  <p className="font-serif text-lg font-semibold text-[#111418] dark:text-[#F5F3EE] group-hover:text-[#DA2328] truncate">
                    {prop.projectName} — {prop.areaName}
                  </p>
                  <p className="text-xs text-[#5E646C] dark:text-[#A4A8AE] flex items-center gap-1.5 truncate">
                    <MapPin className="w-3 h-3 text-[#DA2328] shrink-0" />
                    <span className="truncate">{prop.address}</span>
                    <span>•</span>
                    <span className="tabular-nums font-medium text-[#111418] dark:text-[#F5F3EE]">
                      {prop.sizeSft} SFT
                    </span>
                  </p>
                </div>
                <div className="hidden sm:block text-right shrink-0">
                  <p className="text-xs font-semibold text-[#111418] dark:text-[#F5F3EE] tabular-nums">
                    {prop.priceDisplay}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#DA2328] font-medium mt-1">
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

