import { Link, useParams } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import { SERVING_AREAS } from '../data/company';
import { PropertyCard } from '../components/common/PropertyCard';
import { ArrowRight } from 'lucide-react';

const CATEGORY_MAP: Record<string, { title: string; subtitle: string; locationSlug: string }> = {
  banani: { title: 'Banani Properties', subtitle: 'Residences & Commercial Spaces in Banani, Dhaka', locationSlug: 'banani' },
  'banasree-properties': { title: 'Banasree Properties', subtitle: 'Ready Family Residences in Banasree', locationSlug: 'banasree-properties' },
  'bashundhara-properties': { title: 'Bashundhara Properties', subtitle: 'Modern Apartments in Bashundhara R/A', locationSlug: 'bashundhara-properties' },
  dhanmondi: { title: 'Dhanmondi Properties', subtitle: 'South-Facing Urban Homes in Dhanmondi & West Dhanmondi', locationSlug: 'dhanmondi' },
  gulshan: { title: 'Gulshan Properties', subtitle: 'Prestigious Residences in Gulshan-1 & Gulshan-2', locationSlug: 'gulshan' },
  mirpur: { title: 'Mirpur Properties', subtitle: 'Mirpur & Mirpur DOHS Residential Solutions', locationSlug: 'mirpur' },
  'mohammadpur-properties': { title: 'Mohammadpur Properties', subtitle: 'Properties in Mohammadpur & Asad Avenue', locationSlug: 'mohammadpur-properties' },
  paltan: { title: 'Paltan Properties', subtitle: 'Central Dhaka Commercial & Residential Options', locationSlug: 'paltan' },
};

export function CategoryArchivePage() {
  const { slug } = useParams<{ slug: string }>();
  const info = (slug && CATEGORY_MAP[slug]) || {
    title: 'Neighborhood Properties',
    subtitle: 'Properties across Dhaka',
    locationSlug: slug || '',
  };

  const matched = PROPERTIES.filter((p) => p.locationSlug === info.locationSlug);

  return (
    <>
      <section className="py-16 sm:py-20 bg-[#0C0C0C] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="text-xs uppercase tracking-[0.18em] text-white/60 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/properties-list" className="hover:text-white">
              Properties
            </Link>
            <span>/</span>
            <span className="text-[#DA2328]">{info.title}</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-white">{info.title}</h1>
          <p className="mt-3 text-sm sm:text-base text-white/75">{info.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAF8] dark:bg-[#0D1014] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          {matched.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {matched.map((prop) => (
                <PropertyCard key={prop.refId} property={prop} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-10 text-center max-w-2xl mx-auto space-y-4">
              <h2 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
                Currently Sourcing in {info.title}
              </h2>
              <p className="text-sm text-[#5E646C] dark:text-[#A4A8AE] leading-relaxed">
                No public flats are currently listed under this neighborhood category online. Contact our Banani
                office for direct inventory checks or explore active Dhaka residences below.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <Link
                  to="/properties-list"
                  className="px-6 py-3 bg-[#0C0C0C] dark:bg-[#DA2328] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Browse All Properties
                </Link>
                <Link
                  to="/contact-us"
                  className="px-6 py-3 border border-[#E5E2DC] dark:border-[#2A303A] text-[#111418] dark:text-[#F5F3EE] text-xs font-semibold uppercase tracking-wider"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-[#E5E2DC] dark:border-[#242A34]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5E646C] dark:text-[#A4A8AE] mb-4">
              Explore Other Dhaka Areas
            </p>
            <div className="flex flex-wrap gap-2.5">
              {SERVING_AREAS.map((area) => (
                <Link
                  key={area.categorySlug}
                  to={`/properties-list?location=${area.locationParam}`}
                  className="px-3.5 py-2 bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] hover:border-[#DA2328] text-xs font-medium text-[#111418] dark:text-[#EAE7E1] inline-flex items-center gap-1.5"
                >
                  <span>{area.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

