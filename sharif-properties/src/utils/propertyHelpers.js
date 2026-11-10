import siteData from '../data/siteData.json';

const PROPERTY_TYPE_ID_TO_NAME = {
  '1': 'Residential',
  '2': 'Commercial',
};

const SUBCAT_ID_TO_NAME = {
  '9': 'Service Apartment in Dhaka',
  '8': 'Independent House',
  '7': 'Factory',
  '6': 'Warehouse',
  '5': 'Furnished Apartment For Rent in Dhaka',
  '4': 'Apartment',
  '2': 'Office space for rent in dhaka',
};

const AREA_ID_TO_NAME = Object.fromEntries(
  (siteData.site.areas || []).map((a) => [String(a.value), a.label])
);

export function resolveAreaLabel(areaParam) {
  if (!areaParam) return '';
  return AREA_ID_TO_NAME[String(areaParam)] || areaParam;
}

export function resolveCategoryLabel(typeParam) {
  if (!typeParam) return '';
  return PROPERTY_TYPE_ID_TO_NAME[String(typeParam)] || typeParam;
}

export function resolveSubcategoryLabel(subParam) {
  if (!subParam) return '';
  return SUBCAT_ID_TO_NAME[String(subParam)] || subParam;
}

export function filterProperties(properties, filters) {
  const {
    q = '',
    card = '',
    category = '',
    subcategory = '',
    area = '',
    availability = 'all', // 'all' | 'available' | 'rented'
    minPrice = '',
    maxPrice = '',
    minSqft = '',
    maxSqft = '',
    minBeds = '',
    categoryPageSlug = '',
  } = filters;

  const qNorm = q.trim().toLowerCase();
  const cardNorm = card.trim().toLowerCase().replace(/^s/, '');
  const catNorm = resolveCategoryLabel(category).toLowerCase();
  const subNorm = resolveSubcategoryLabel(subcategory).toLowerCase();
  const areaNorm = resolveAreaLabel(area).toLowerCase();

  return properties.filter((p) => {
    if (categoryPageSlug && !p.categoryPages.includes(categoryPageSlug)) {
      return false;
    }
    if (availability === 'available' && p.isRented) return false;
    if (availability === 'rented' && !p.isRented) return false;

    if (cardNorm) {
      const pId = String(p.id || '').toLowerCase();
      const pCard = String(p.cardNo || '').toLowerCase();
      if (!pId.includes(cardNorm) && !pCard.includes(card.trim().toLowerCase())) {
        return false;
      }
    }

    if (catNorm) {
      const pCat = (p.category || '').toLowerCase();
      const pSub = (p.subcategory || '').toLowerCase();
      const pTitle = (p.title || '').toLowerCase();
      let matched = pCat === catNorm;

      if (!matched) {
        if (catNorm === 'apartment') {
          matched = pSub.includes('apartment') || pTitle.includes('apartment');
        } else if (catNorm === 'furnished apartment') {
          matched = pSub.includes('furnished') || pTitle.includes('furnished');
        } else if (catNorm === 'individual house') {
          matched = pSub === 'independent house' || pTitle.includes('house');
        } else if (catNorm === 'industrial land') {
          matched = pSub === 'factory' || pSub === 'warehouse' || pTitle.includes('industrial');
        } else if (catNorm === 'commercial space') {
          matched = pCat === 'commercial';
        } else if (catNorm === 'luxurious apartment') {
          matched = pCat === 'residential' && (pTitle.includes('luxur') || (p.totalMonthlyEstimate || 0) >= 150000);
        } else if (catNorm === 'un furnished') {
          matched = pSub === 'apartment' || pTitle.includes('non furnished') || pTitle.includes('non-furnished') || pTitle.includes('unfurnished');
        } else if (catNorm === 'semi furnished') {
          matched = pTitle.includes('semi furnished') || pTitle.includes('semi-furnished') || pSub === 'apartment';
        } else if (catNorm === 'office') {
          matched = pSub.includes('office') || pTitle.includes('office');
        }
      }

      if (!matched) return false;
    }

    if (subNorm && (p.subcategory || '').toLowerCase() !== subNorm) {
      return false;
    }

    if (areaNorm) {
      const pArea = (p.area || '').toLowerCase();
      const pTitle = (p.title || '').toLowerCase();
      if (areaNorm === 'banani dohs') {
        if (!pArea.includes('banani dohs') && !pTitle.includes('banani dohs')) {
          return false;
        }
      } else {
        const stripped = areaNorm.replace(/\s+(dhaka|diplomatic zone)$/i, '').trim();
        if (
          !pArea.includes(areaNorm) &&
          !pArea.includes(stripped) &&
          !pTitle.includes(areaNorm) &&
          !(stripped && pTitle.includes(stripped) && !pArea)
        ) {
          return false;
        }
      }
    }

    if (minPrice !== '' && minPrice !== null) {
      const minP = Number(minPrice);
      const effPrice = p.totalMonthlyEstimate || p.priceNumeric || 0;
      if (!Number.isNaN(minP) && effPrice < minP) return false;
    }

    if (maxPrice !== '' && maxPrice !== null) {
      const maxP = Number(maxPrice);
      const effPrice = p.totalMonthlyEstimate || p.priceNumeric || 0;
      if (!Number.isNaN(maxP) && effPrice > maxP) return false;
    }

    if (minSqft !== '' && minSqft !== null) {
      const minS = Number(minSqft);
      if (!Number.isNaN(minS) && (p.sqftNumeric || 0) < minS) return false;
    }

    if (maxSqft !== '' && maxSqft !== null) {
      const maxS = Number(maxSqft);
      if (!Number.isNaN(maxS) && (p.sqftNumeric || 0) > maxS) return false;
    }

    if (minBeds !== '' && minBeds !== null) {
      const mb = Number(minBeds);
      if (!Number.isNaN(mb) && (p.bedsNumeric || 0) < mb) return false;
    }

    if (qNorm) {
      const haystack = [
        p.title,
        p.area,
        p.category,
        p.subcategory,
        p.cardNo,
        p.id,
        p.slug,
        ...(p.keyFeatures || []),
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(qNorm)) return false;
    }

    return true;
  });
}

export function sortProperties(properties, sortBy = 'newest') {
  const arr = [...properties];
  switch (sortBy) {
    case 'price_asc':
      return arr.sort(
        (a, b) =>
          (a.totalMonthlyEstimate || a.priceNumeric || 0) -
          (b.totalMonthlyEstimate || b.priceNumeric || 0)
      );
    case 'price_desc':
      return arr.sort(
        (a, b) =>
          (b.totalMonthlyEstimate || b.priceNumeric || 0) -
          (a.totalMonthlyEstimate || a.priceNumeric || 0)
      );
    case 'sqft_desc':
      return arr.sort((a, b) => (b.sqftNumeric || 0) - (a.sqftNumeric || 0));
    case 'available_first':
      return arr.sort((a, b) => Number(a.isRented) - Number(b.isRented) || Number(b.id || 0) - Number(a.id || 0));
    case 'newest':
    default:
      return arr.sort((a, b) => Number(b.id || 0) - Number(a.id || 0));
  }
}

export function toInternalRoute(urlOrPath) {
  if (!urlOrPath) return '/';
  if (urlOrPath.startsWith('/')) return urlOrPath;
  if (urlOrPath.includes('sharif.com.bd')) {
    try {
      const parsed = new URL(urlOrPath);
      let p = parsed.pathname.replace(/^\/public/, '') || '/';
      if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
      return p + parsed.search + parsed.hash;
    } catch {
      return '/';
    }
  }
  return urlOrPath;
}
