import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type * as LeafletNS from 'leaflet';
import { MapPin, Navigation, Building2, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { PROPERTIES, Property } from '../../data/properties';

interface MapPinItem {
  id: string;
  label: string;
  subtitle: string;
  coords: [number, number];
  kind: 'office' | 'available' | 'sold';
  to?: string;
  externalUrl?: string;
  price?: string;
}

interface DhakaMapProps {
  focusProperty?: Property;
  heightClass?: string;
}

export function DhakaMap({ focusProperty, heightClass = 'h-[430px]' }: DhakaMapProps) {
  const mapElRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<typeof LeafletNS | null>(null);
  const mapInstanceRef = useRef<LeafletNS.Map | null>(null);
  const markersRef = useRef<Record<string, LeafletNS.Marker>>({});
  const [selectedId, setSelectedId] = useState<string>(focusProperty?.refId || 'office');

  const pins: MapPinItem[] = [
    {
      id: 'office',
      label: 'Shwapno Bari Head Office',
      subtitle: COMPANY.address,
      coords: COMPANY.coordinates,
      kind: 'office',
      externalUrl: COMPANY.googleMapsUrl,
    },
    ...PROPERTIES.filter((p) => p.coordinates).map((p) => ({
      id: p.refId,
      label: p.mapLabel || p.projectName,
      subtitle: `${p.areaName} • ${p.sizeSft} SFT`,
      coords: p.coordinates as [number, number],
      kind: (p.status === 'Available' ? 'available' : 'sold') as 'available' | 'sold',
      to: `/properties/${p.slug}`,
      price: p.priceDisplay,
    })),
  ];

  const activePins = focusProperty?.coordinates
    ? pins.filter((pin) => pin.id === focusProperty.refId || pin.id === 'office')
    : pins;

  const createPinIcon = (L: typeof LeafletNS, kind: MapPinItem['kind'], selected: boolean) => {
    const color = kind === 'office' ? '#0C0C0C' : kind === 'available' ? '#DA2328' : '#475467';
    const ring = selected ? '0 0 0 6px rgba(218,35,40,0.22)' : '0 4px 12px rgba(0,0,0,0.28)';
    const size = selected ? 20 : 16;

    return L.divIcon({
      className: 'shwapnobari-map-pin',
      html: `<div style="width:${size}px;height:${size}px;border-radius:9999px;background:${color};border:2.5px solid #FFFFFF;box-shadow:${ring};transition:transform 0.2s;"></div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -10],
    });
  };

  useEffect(() => {
    let cancelled = false;
    let map: LeafletNS.Map | null = null;

    async function initMap() {
      const L = (await import('leaflet')).default || (await import('leaflet'));
      if (cancelled || !mapElRef.current) return;

      leafletRef.current = L;
      const initialCenter = focusProperty?.coordinates || COMPANY.coordinates;
      const initialZoom = focusProperty?.coordinates ? 14 : 12;

      map = L.map(mapElRef.current, {
        center: initialCenter,
        zoom: initialZoom,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      const markerMap: Record<string, LeafletNS.Marker> = {};
      activePins.forEach((pin) => {
        const marker = L.marker(pin.coords, {
          icon: createPinIcon(L, pin.kind, pin.id === selectedId),
        }).addTo(map!);

        const safePrice = pin.price
          ? `<div style="font-size:12px;font-weight:600;color:#DA2328;margin-top:4px;">${pin.price}</div>`
          : '';
        const safeSubtitle = `<div style="font-size:11px;opacity:0.75;margin-top:2px;">${pin.subtitle}</div>`;
        marker.bindPopup(
          `<div style="min-width:170px;padding:4px 2px;">
            <div style="font-weight:700;font-size:13px;">${pin.label}</div>
            ${safeSubtitle}
            ${safePrice}
          </div>`
        );

        marker.on('click', () => {
          setSelectedId(pin.id);
        });

        markerMap[pin.id] = marker;
      });

      if (focusProperty?.coordinates && markerMap[focusProperty.refId]) {
        markerMap[focusProperty.refId].openPopup();
      }

      mapInstanceRef.current = map;
      markersRef.current = markerMap;
    }

    void initMap();

    return () => {
      cancelled = true;
      if (map) {
        map.remove();
      }
      mapInstanceRef.current = null;
      markersRef.current = {};
    };
  }, [focusProperty?.refId]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const L = leafletRef.current;
    if (!map || !L) return;

    activePins.forEach((pin) => {
      const marker = markersRef.current[pin.id];
      if (marker) {
        marker.setIcon(createPinIcon(L, pin.kind, pin.id === selectedId));
      }
    });
  }, [selectedId]);

  const handleSelectPin = (pin: MapPinItem) => {
    setSelectedId(pin.id);
    const map = mapInstanceRef.current;
    const marker = markersRef.current[pin.id];
    if (map && marker) {
      map.flyTo(pin.coords, 14, { duration: 0.7 });
      marker.openPopup();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#E5E2DC] dark:border-[#242A34] bg-white dark:bg-[#14181F] overflow-hidden">
      {/* Pin Directory Rail */}
      <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E5E2DC] dark:border-[#242A34] bg-[#FAFAF8] dark:bg-[#11151B] divide-y divide-[#E5E2DC] dark:divide-[#242A34] max-h-[430px] overflow-y-auto">
        <div className="px-5 py-4 bg-white dark:bg-[#14181F]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#DA2328]">
            Verified Dhaka Coordinates
          </p>
          <p className="text-xs text-[#5E646C] dark:text-[#A4A8AE] mt-1">
            Select a pin to center map view and inspect location details.
          </p>
        </div>

        {activePins.map((pin) => {
          const isActive = pin.id === selectedId;
          return (
            <div
              key={pin.id}
              onClick={() => handleSelectPin(pin)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleSelectPin(pin);
              }}
              className={`p-4 cursor-pointer transition-colors ${
                isActive
                  ? 'bg-white dark:bg-[#1A2029] border-l-4 border-l-[#DA2328]'
                  : 'hover:bg-white/75 dark:hover:bg-[#171C24]'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  {pin.kind === 'office' ? (
                    <Building2 className="w-4 h-4 text-[#0C0C0C] dark:text-[#F5F3EE] shrink-0" />
                  ) : (
                    <MapPin
                      className={`w-4 h-4 shrink-0 ${
                        pin.kind === 'available' ? 'text-[#DA2328]' : 'text-[#5E646C] dark:text-[#A4A8AE]'
                      }`}
                    />
                  )}
                  <h4 className="font-semibold text-sm text-[#111418] dark:text-[#F5F3EE]">{pin.label}</h4>
                </div>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 shrink-0 ${
                    pin.kind === 'office'
                      ? 'bg-[#0C0C0C] dark:bg-[#232934] text-white'
                      : pin.kind === 'available'
                      ? 'bg-[#ECF7F1] text-[#156E44] dark:bg-[#156E44]/25 dark:text-[#6EE7B7]'
                      : 'bg-[#EFEFF1] text-[#1F242D] dark:bg-[#232934] dark:text-[#D1D5DB]'
                  }`}
                >
                  {pin.kind === 'office' ? 'Office' : pin.kind === 'available' ? 'Available' : 'Sold'}
                </span>
              </div>

              <p className="text-xs text-[#5E646C] dark:text-[#A4A8AE] mt-1 pl-6">{pin.subtitle}</p>
              <p className="text-[11px] font-mono text-[#5E646C]/80 dark:text-[#8D939E] mt-1 pl-6 tabular-nums">
                {pin.coords[0].toFixed(5)}, {pin.coords[1].toFixed(5)}
              </p>

              <div className="mt-2.5 pl-6 flex items-center gap-4">
                {pin.to && (
                  <Link
                    to={pin.to}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#DA2328] hover:underline"
                  >
                    View Property <ArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
                {pin.externalUrl && (
                  <a
                    href={pin.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#111418] dark:text-[#F5F3EE] hover:text-[#DA2328]"
                  >
                    <Navigation className="w-3 h-3" /> Open Google Maps
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Leaflet Map Canvas */}
      <div className={`lg:col-span-8 relative ${heightClass} z-10`}>
        <div ref={mapElRef} className="w-full h-full" />
      </div>
    </div>
  );
}
