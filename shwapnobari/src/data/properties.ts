export type PropertyStatus = 'Available' | 'Upcoming' | 'Sold';
export type PropertyCategory = 'Residential' | 'Commercial';

export interface AmenityItem {
  label: string;
  icon: string;
}

export interface PropertySection {
  title: string;
  items: string[];
}

export interface Property {
  refId: string;
  slug: string;
  title: string;
  homeCardTitle: string;
  subtitle: string;
  developer: string;
  projectName: string;
  status: PropertyStatus;
  category: PropertyCategory;
  purpose: string;
  typeLabel: string;
  completionStatus: string;
  lastUpdated: string;
  priceDisplay: string;
  priceEstimateBdt: number; // Used only as default input in interactive calculator; 0 if Call for Details
  sizeSft: number;
  beds: number;
  baths: number;
  balconies?: number;
  floor: string;
  facing?: string;
  condition?: string;
  handoverYear?: string;
  parking?: string;
  gasSupply?: string;
  unitPerFloor?: string;
  landSize?: string;
  buildingHeight?: string;
  areaName: string;
  locationSlug: string;
  address: string;
  shortAddress: string;
  coordinates?: [number, number];
  mapLabel?: string;
  featuredOnHome: boolean;
  cardImage: string;
  homeSlideImage?: string;
  gallery: string[];
  introParagraph: string;
  detailSections: PropertySection[];
  amenities: AmenityItem[];
  recommendedSlugs: string[];
  nearbyLocations: { label: string; locationSlug: string }[];
  agentPhone: string;
  agentEmail: string;
}

const AMENITY_ICONS: Record<string, string> = {
  Balcony: '/uploads/2024/06/Balcony.webp',
  CCTV: '/uploads/2024/06/CCTV.webp',
  Elevators: '/uploads/2024/06/Elevators.webp',
  Lobby: '/uploads/2024/06/Lobby.webp',
  Generator: '/uploads/2024/06/Generator.webp',
  Flooring: '/uploads/2024/06/Flooring.webp',
  'Floor Level': '/uploads/2024/06/Floor-Level.webp',
  Intercom: '/uploads/2024/06/Intercom.webp',
  Parking: '/uploads/2024/06/Parking.webp',
  View: '/uploads/2024/06/View.webp',
  'Waste Disposal': '/uploads/2024/06/Waste-Disposal.webp',
  '24 Hours Concierge': '/uploads/2024/06/24-Hours-Concierge.webp',
};

const toAmenities = (names: string[]): AmenityItem[] =>
  names.map((label) => ({ label, icon: AMENITY_ICONS[label] || '/uploads/2024/06/Lobby.webp' }));

export const PROPERTIES: Property[] = [
  {
    refId: 'SB00037',
    slug: 'luxury-flat-for-sale-asad-avenue',
    title: 'Luxury Flat for Sale @Asad Avenue | 2421 SFT',
    homeCardTitle: 'Shanta Mirzam',
    subtitle: 'Luxury Flat for Sale in Asad Avenue – 2,421 SFT | Shanta Mirzam by Shanta Properties',
    developer: 'Shanta Properties',
    projectName: 'Shanta Mirzam',
    status: 'Available',
    category: 'Residential',
    purpose: 'For Sale',
    typeLabel: 'Luxury Flat',
    completionStatus: 'Ready Flat',
    lastUpdated: '14 Aug 2025',
    priceDisplay: 'BDT - 18000/sft',
    priceEstimateBdt: 43578000, // 2421 * 18000
    sizeSft: 2421,
    beds: 3,
    baths: 3,
    balconies: 2,
    floor: '6th Floor (Prime Position)',
    facing: 'South',
    condition: 'Ready-to-move luxury apartment',
    parking: '1 Dedicated Car Parking Space',
    landSize: '14 Katha',
    buildingHeight: 'B1 + B2 + 14 Floors',
    areaName: 'Mohammadpur',
    locationSlug: 'mohammadpur-properties',
    address: '3/7, Asad Avenue, Block A, Mohammadpur, Dhaka',
    shortAddress: '3/7 Asad Avenue',
    coordinates: [23.760486072446, 90.369299324654],
    mapLabel: 'Shanta Mirzam',
    featuredOnHome: true,
    cardImage: '/uploads/2025/08/mirzam-flat-for-sale-02.avif',
    homeSlideImage: '/uploads/2025/08/SM01.jpg',
    gallery: [
      '/uploads/2025/08/mirzam-flat-for-sale-02.avif',
      '/uploads/2025/08/mirzam-flat-for-sale-01.avif',
      '/uploads/2025/08/mirzam-flat-for-sale-03.avif',
      '/uploads/2025/08/mirzam_9.width-2560.format-avif-1.avif',
      '/uploads/2025/08/mirzam-flat-for-sale-04.avif',
      '/uploads/2025/08/mirzam-flat-for-sale-05.avif',
      '/uploads/2025/08/mirzam_1.width-2560.format-avif.avif',
    ],
    introParagraph:
      'Own your dream home at Shanta Mirzam, a premium residential project by Shanta Properties, located at Plot-3/7, Asad Avenue, Block A, Mohammadpur, Dhaka. Designed for sophisticated living with modern architecture, prime location, and exclusive amenities, this ready-to-move luxury apartment offers comfort, convenience, and elegance in one of Dhaka’s most sought-after neighborhoods.',
    detailSections: [
      {
        title: 'Key Highlights',
        items: [
          'Apartment Size: 2,421 SFT',
          'Layout: 3 Bedrooms, 3 Modern Bathrooms, 2 Balconies',
          'Elegant Drawing Room, Dining Area, and Well-Planned Kitchen',
          'Additional Store Room and Servant Bath',
          'Floor Level: 6th Floor (Prime Position)',
          'Parking: 1 Dedicated Car Parking Space',
          'Facing: South',
          'Status: Ready Flat – Immediate Handover',
        ],
      },
      {
        title: 'Building Details',
        items: [
          'Land Area: 14 Katha',
          'Building Structure: B1 + B2 + 14 Floors',
          'Grand Double-Height Entrance Lobby',
          'Elegant Reception & Waiting Lounge',
        ],
      },
      {
        title: 'Exclusive Amenities',
        items: [
          'Gaming Zone for Entertainment',
          'Dedicated Children’s Play Area',
          'Premium Security & Building Management',
          'Excellent Connectivity to Dhanmondi, Lalmatia & Sangsad Bhaban Area',
        ],
      },
    ],
    amenities: toAmenities([
      'Balcony',
      'CCTV',
      'Elevators',
      'Lobby',
      'Generator',
      'Flooring',
      'Intercom',
      'Parking',
      'View',
      'Waste Disposal',
      '24 Hours Concierge',
    ]),
    recommendedSlugs: ['luxury-flat-for-sale-bashundhara', 'modern-south-facing-apartment-for-sale-west-dhanmondi'],
    nearbyLocations: [
      { label: 'Mirpur Apartments', locationSlug: 'mirpur' },
      { label: 'Mohammadpur Apartments', locationSlug: 'mohammadpur-properties' },
    ],
    agentPhone: '+880 1711107238',
    agentEmail: 'helloshwapnobari@gmail.com',
  },
  {
    refId: 'SB000033',
    slug: 'luxury-flat-for-sale-bashundhara',
    title: 'Luxury Flat for Sale @Bashundhara | 2129 SFT',
    homeCardTitle: 'EMPL Odhuna',
    subtitle: 'Luxury Flat for Sale in Bashundhara – 2,129 SQFT | Odhuna',
    developer: 'EMPL (Estate Management Partners Ltd.)',
    projectName: 'EMPL Odhuna',
    status: 'Available',
    category: 'Residential',
    purpose: 'For Sale',
    typeLabel: 'Luxury Flat',
    completionStatus: 'Ready Flat',
    lastUpdated: '14 Aug 2025',
    priceDisplay: 'BDT - 1,65,00,000',
    priceEstimateBdt: 16500000,
    sizeSft: 2129,
    beds: 3,
    baths: 4,
    balconies: 3,
    floor: '1A (1st Floor)',
    condition: 'Ready – Used Flat',
    parking: '1 Dedicated Car Parking Space',
    gasSupply: 'Titash connection',
    unitPerFloor: 'Only 1 – Enjoy complete privacy',
    landSize: '5 Katha',
    buildingHeight: 'Ground + 9 Floors',
    areaName: 'Bashundhara R/A',
    locationSlug: 'bashundhara-properties',
    address: 'House 73, Road 8, Block-B, Bashundhara R/A',
    shortAddress: 'House-73, Road-8, Block-B, Bashundhara',
    coordinates: [23.814557920245, 90.431706878087],
    mapLabel: 'EMPL Odhuna',
    featuredOnHome: true,
    cardImage: '/uploads/2025/08/EMPL-Bashundhara-003-scaled.jpg',
    homeSlideImage: '/uploads/2025/08/EMPL-Bashundhara-home.jpg',
    gallery: [
      '/uploads/2025/08/EMPL-Bashundhara-003-scaled.jpg',
      '/uploads/2025/08/EMPL-Bashundhara-01-scaled.jpg',
      '/uploads/2025/08/EMPL-Bashundhara-004-scaled.jpg',
      '/uploads/2025/08/EMPL-Bashundhara-001-scaled.jpg',
      '/uploads/2025/08/EMPL-Bashundhara-002-scaled.jpg',
    ],
    introParagraph:
      'Step into luxury living with this spacious and well-maintained 2,129 SQFT flat located at EMPL Odhuna, Block-B, Bashundhara R/A. Ideal for families seeking modern comfort, privacy, and prime connectivity in a sought-after residential community.',
    detailSections: [
      {
        title: 'Property Features',
        items: [
          'Floor Area: 2,129 SQFT',
          'Floor: 1A (First Floor)',
          'Condition: Ready – Used Flat',
          '3 Bedrooms | 4 Bathrooms | 3 Balconies',
          'Bright & airy Drawing and Dining Areas',
          'Spacious Kitchen with modern fittings',
          'Gas Supply: Titash connection',
          'Parking: 1 Dedicated Car Parking Space',
          'Unit Per Floor: Only 1 – Enjoy complete privacy',
        ],
      },
      {
        title: 'Building Details',
        items: [
          'Land Size: 5 Katha',
          'Building Height: Ground + 9 Floors',
        ],
      },
      {
        title: 'Why Choose This Property?',
        items: [
          'Prime location in Bashundhara R/A close to schools, universities, shopping malls, and healthcare facilities',
          'Well-maintained and move-in ready',
          'Secure building with modern design and quality construction',
        ],
      },
    ],
    amenities: toAmenities([
      'Balcony',
      'CCTV',
      'Elevators',
      'Floor Level',
      'Generator',
      'Intercom',
      'Parking',
      'Flooring',
    ]),
    recommendedSlugs: ['luxury-flat-for-sale-in-gulshan-2-3050-sft', 'luxury-flat-for-sale-asad-avenue'],
    nearbyLocations: [
      { label: 'Banani Apartments', locationSlug: 'banani' },
      { label: 'Banasree Apartments', locationSlug: 'banasree-properties' },
      { label: 'Gulshan Apartments', locationSlug: 'gulshan' },
    ],
    agentPhone: '+880 1711107238',
    agentEmail: 'helloshwapnobari@gmail.com',
  },
  {
    refId: 'SB00044',
    slug: 'modern-south-facing-apartment-for-sale-west-dhanmondi',
    title: 'Modern South-Facing Apartment for Sale @West Dhanmondi | 1400 SFT',
    homeCardTitle: 'Modern South-Facing Apartment',
    subtitle: 'Modern South-Facing Apartment for Sale in West Dhanmondi – 1,400 SQFT',
    developer: 'Renowned Developer',
    projectName: 'Modern South-Facing Apartment',
    status: 'Available',
    category: 'Residential',
    purpose: 'For Sale',
    typeLabel: 'Modern Flat',
    completionStatus: 'Ready Flat',
    lastUpdated: '14 Aug 2025',
    priceDisplay: 'BDT - Call for Details',
    priceEstimateBdt: 0,
    sizeSft: 1400,
    beds: 3,
    baths: 3,
    balconies: 2,
    floor: '7th Floor (Open on all sides)',
    facing: 'South-facing',
    condition: '100% Ready, Lightly Used',
    parking: '1 Dedicated Car Parking Space',
    areaName: 'West Dhanmondi',
    locationSlug: 'dhanmondi',
    address: 'West Dhanmondi (Shankar), Dhaka (Near Dhanmondi Party Center)',
    shortAddress: 'West Dhanmondi (Shankar)',
    coordinates: [23.749892184079, 90.367965174533],
    mapLabel: 'West Dhanmondi Flat',
    featuredOnHome: false,
    cardImage: '/uploads/2025/08/West-Dhanmondi-Modern-Flat.jpeg',
    gallery: [
      '/uploads/2025/08/West-Dhanmondi-Modern-Flat.jpeg',
      '/uploads/2025/08/West-Dhanmondi-Modern-Flat-02.jpeg',
      '/uploads/2025/08/West-Dhanmondi-Modern-Flat-01.jpeg',
      '/uploads/2025/08/West-Dhanmondi-Modern-Flat-03.jpeg',
    ],
    introParagraph:
      'Discover modern urban living in this bright, south-facing 1,400 SQFT apartment located in West Dhanmondi (Shankar), near Dhanmondi Party Center. Built by a renowned developer, this lightly used flat offers contemporary elegance, comfort, and prime accessibility.',
    detailSections: [
      {
        title: 'Property Features',
        items: [
          'Size: 1,400 SQFT',
          'Floor: 7th Floor (Open on all sides for unobstructed views & natural airflow)',
          'Condition: 100% Ready, Lightly Used',
          'Master Bedroom with attached balcony and bathroom',
          'Second Bedroom with attached balcony and bathroom',
          'Third Bedroom with access to a common bathroom',
          'Spacious Drawing & Dining Area',
          'Pleasant Kitchen with modern layout',
          'Parking: 1 Dedicated Car Parking Space',
        ],
      },
      {
        title: 'Why This Property Stands Out',
        items: [
          'South-facing for abundant sunlight and fresh air',
          'High floor offering open surroundings and panoramic views',
          'Equipped with modern amenities and 24/7 CCTV security',
          'Prime location in West Dhanmondi with easy access to schools, shopping centers, hospitals, and restaurants',
        ],
      },
    ],
    amenities: toAmenities([
      'Parking',
      'Balcony',
      'CCTV',
      'Elevators',
      'Floor Level',
      'Flooring',
      'Intercom',
    ]),
    recommendedSlugs: ['luxury-flat-for-sale-asad-avenue', 'luxury-flat-for-sale-bashundhara'],
    nearbyLocations: [
      { label: 'Mohammadpur Apartments', locationSlug: 'mohammadpur-properties' },
      { label: 'Dhanmondi Apartments', locationSlug: 'dhanmondi' },
    ],
    agentPhone: '+880 1711107238',
    agentEmail: 'helloshwapnobari@gmail.com',
  },
  {
    refId: 'SB00001',
    slug: 'luxury-flat-for-sale-banasree',
    title: 'Luxury Flat for Sale @Banasree | 2120 SFT',
    homeCardTitle: 'Shanta The Vintage',
    subtitle: 'Luxury Flat for Sale in Banasree – 2,120 SQFT | Shanta Properties – The Vintage',
    developer: 'Shanta Properties',
    projectName: 'Shanta Properties – The Vintage',
    status: 'Sold',
    category: 'Residential',
    purpose: 'For Sale',
    typeLabel: 'Luxury Flat',
    completionStatus: 'Ready Flat',
    lastUpdated: '14 Aug 2025',
    priceDisplay: 'BDT - 2,30,00,000',
    priceEstimateBdt: 23000000,
    sizeSft: 2120,
    beds: 3,
    baths: 3,
    balconies: 2,
    floor: '3rd Floor',
    facing: 'South & West Facing',
    condition: '100% Ready (Used)',
    parking: '1 Car Parking Space',
    landSize: '40 Katha',
    buildingHeight: 'B1 + B2 + 14 Floors',
    areaName: 'Banasree',
    locationSlug: 'banasree-properties',
    address: 'Plot-A, Main Road, Block-A, Banasree',
    shortAddress: 'Plot-A, Main Road, Block-A, Banasree',
    coordinates: [23.766586096453, 90.427094575542],
    mapLabel: 'The Vintage by Shanta',
    featuredOnHome: true,
    cardImage: '/uploads/2025/08/The-Vintage.avif',
    homeSlideImage: '/uploads/2025/08/Shanta-Vintage.jpg',
    gallery: [
      '/uploads/2025/08/The-Vintage.avif',
      '/uploads/2025/08/The-Vintage-01-1.avif',
      '/uploads/2025/08/The-Vintage-02.avif',
      '/uploads/2025/08/The-Vintage-01.avif',
      '/uploads/2025/08/The-Vintage-03.avif',
      '/uploads/2025/08/The-Vintage-04.avif',
    ],
    introParagraph:
      'Step into elegance with this beautifully designed 2,120 SQFT luxury apartment in The Vintage by Shanta Properties, ideally situated on Main Road, Block-A, Banasree. Ready to move in and thoughtfully planned, this property delivers comfort, prestige, and convenience for modern family living.',
    detailSections: [
      {
        title: 'Property Features',
        items: [
          'Floor Area: 2,120 SQFT',
          'Floor: 3rd Floor',
          'Condition: 100% Ready (Used)',
          '3 Spacious Bedrooms | 3 Bathrooms | 2 Balconies',
          'Elegant Drawing Room & Dining Area',
          'Modern Kitchen with dedicated Store Room',
          'Servant Bath included',
          'Parking: 1 Car Parking Space',
          'Facing: South & West Facing for optimal natural light and ventilation',
        ],
      },
      {
        title: 'Building Details',
        items: [
          'Land Size: 40 Katha',
          'Building Height: B1 + B2 + 14 Floors',
          'Grand Double-Height Entry creating an impressive arrival experience',
          'Elegant Reception & Waiting Lounge for guests',
          'Exclusive Amenities: Gaming Zone & Children’s Play Area',
        ],
      },
    ],
    amenities: toAmenities([
      'Balcony',
      'Lobby',
      'View',
      'Parking',
      'CCTV',
      'Elevators',
      'Floor Level',
      'Flooring',
      'Generator',
      'Intercom',
      'Waste Disposal',
      '24 Hours Concierge',
    ]),
    recommendedSlugs: ['luxury-flat-for-sale-asad-avenue'],
    nearbyLocations: [{ label: 'Mohammadpur Apartments', locationSlug: 'mohammadpur-properties' }],
    agentPhone: '+880 1711107238',
    agentEmail: 'helloshwapnobari@gmail.com',
  },
  {
    refId: 'SB00002',
    slug: 'luxury-flat-for-sale-in-gulshan-2-3050-sft',
    title: 'Luxury Flat for Sale @Gulshan-2 | 3050 SFT',
    homeCardTitle: 'Urban Shishirkona',
    subtitle: 'Luxury Flat for Sale in Gulshan-2 – 3,050 SQFT | Urban Shishirkona',
    developer: 'Urban Design & Development',
    projectName: 'Urban Shishirkona',
    status: 'Sold',
    category: 'Residential',
    purpose: 'For Sale',
    typeLabel: 'Luxury Flat',
    completionStatus: 'Ready Flat',
    lastUpdated: '14 Aug 2025',
    priceDisplay: 'BDT - 5,50,00,000',
    priceEstimateBdt: 55000000,
    sizeSft: 3050,
    beds: 4,
    baths: 5,
    balconies: 3,
    floor: '5A (5th Floor)',
    condition: '100% Ready – Brand New',
    parking: 'Two Dedicated Car Parking Spaces',
    gasSupply: 'LPG',
    unitPerFloor: 'Only 2 – Ensuring privacy and exclusivity',
    landSize: '15.9 Katha',
    buildingHeight: 'B1 + B2 + Ground + 12 Floors',
    areaName: 'Gulshan-2',
    locationSlug: 'gulshan',
    address: 'Road 115, House 36, Gulshan-2',
    shortAddress: 'Road 115, House 36, Gulshan-2',
    coordinates: [23.789446075374, 90.417825506178],
    mapLabel: 'Urban Shishirkona',
    featuredOnHome: true,
    cardImage: '/uploads/2025/08/Urban-Shishirkona-00.jpg',
    homeSlideImage: '/uploads/2025/08/Urban-Shishirkona-home-1.jpg',
    gallery: [
      '/uploads/2025/08/Urban-Shishirkona-00.jpg',
      '/uploads/2025/08/Urban-Shishirkona.jpg',
      '/uploads/2025/08/Urban-Shishirkona-03.jpg',
      '/uploads/2025/08/Urban-Shishirkona-02-1.jpg',
      '/uploads/2025/08/Urban-Shishirkona-04.jpg',
      '/uploads/2025/08/Urban-Shishirkona-02.jpg',
    ],
    introParagraph:
      'Experience unmatched sophistication and comfort in this brand-new, ready-to-move 3,050 SQFT apartment located at Urban Shishirkona in the prestigious Gulshan-2 neighborhood. Crafted for discerning homeowners seeking both privacy and modern grandeur, this property offers an extraordinary lifestyle.',
    detailSections: [
      {
        title: 'Property Features',
        items: [
          'Floor Area: 3,050 SQFT',
          'Floor: 5A (5th Floor)',
          'Condition: 100% Ready – Brand New',
          '4 Bedrooms | 5 Bathrooms | 3 Balconies',
          'Premium Finishing with modern architecture and spacious interiors',
          'Two Dedicated Car Parking Spaces',
          'Gas Supply: LPG',
          'Unit Per Floor: Only 2 – Ensuring privacy and exclusivity',
        ],
      },
      {
        title: 'Building Details',
        items: [
          'Land Size: 15.9 Katha',
          'Building Height: B1 + B2 + Ground + 12 Floors',
          'Saleable Unit: 5th Floor (5A)',
        ],
      },
      {
        title: 'Exclusive Amenities',
        items: [
          'Lavish Waiting Area',
          'Fully Equipped Gymnasium',
          'Elegant Community Hall for events and gatherings',
          'Guest Rest Room & Driver’s Waiting Room',
          'Meeting Area & Prayer Hall',
        ],
      },
    ],
    amenities: toAmenities([
      'View',
      'Balcony',
      'Parking',
      'Lobby',
      'Intercom',
      'Generator',
      'Flooring',
      'Floor Level',
      'Elevators',
      'CCTV',
      '24 Hours Concierge',
    ]),
    recommendedSlugs: ['luxury-flat-for-sale-banasree', 'luxury-flat-for-sale-asad-avenue'],
    nearbyLocations: [
      { label: 'Banasree Apartments', locationSlug: 'banasree-properties' },
      { label: 'Mohammadpur Apartments', locationSlug: 'mohammadpur-properties' },
    ],
    // Note: Live Gulshan-2 HTML omitted hrefs on tel:/mailto:; redesign safely supplies verified Property Desk contact
    agentPhone: '+880 1711107238',
    agentEmail: 'helloshwapnobari@gmail.com',
  },
  {
    refId: 'SB00039',
    slug: 'luxury-flat-for-sale-banani',
    title: 'Luxury Flat for Sale @Banani | 1800 SFT',
    homeCardTitle: 'ABC Blooming Dale',
    subtitle: 'Luxury Flat for Sale in Banani – 1,800 SQFT | ABC Blooming Dale',
    developer: 'ABC Real Estate',
    projectName: 'ABC Blooming Dale',
    status: 'Sold',
    category: 'Residential',
    purpose: 'For Sale',
    typeLabel: 'Luxury Flat',
    completionStatus: 'Ready Flat',
    lastUpdated: '14 Aug 2025',
    priceDisplay: 'BDT - 2,30,00,000',
    priceEstimateBdt: 23000000,
    sizeSft: 1800,
    beds: 3,
    baths: 4,
    balconies: 3,
    floor: 'B-201 (2nd Floor)',
    condition: '100% Ready – Brand New (Never lived in)',
    handoverYear: '2004',
    parking: '1 Dedicated Car Parking Space',
    gasSupply: 'Titash connection',
    unitPerFloor: 'Only 2 – Ensuring comfort and privacy',
    landSize: '10.37 Katha',
    buildingHeight: 'Ground + 5 Floors',
    areaName: 'Banani',
    locationSlug: 'banani',
    address: 'House 61, Road 01, Block-I, Banani',
    shortAddress: 'House 61, Road 01, Block-I, Banani',
    // Note: Live site omitted Leaflet coordinates for SB00039; not fabricated here
    featuredOnHome: false,
    cardImage: '/uploads/2025/08/ABC-Blooming-Dale.jpg',
    gallery: [
      '/uploads/2025/08/ABC-Blooming-Dale-00-scaled.jpg',
      '/uploads/2025/08/ABC-Blooming-Dale.jpg',
      '/uploads/2025/08/ABC-Blooming-Dale-03-scaled.jpg',
      '/uploads/2025/08/ABC-Blooming-Dale-02-scaled.jpg',
      '/uploads/2025/08/ABC-Blooming-Dale-01-scaled.jpg',
    ],
    introParagraph:
      'Discover refined living in this 1,800 SQFT ready apartment at ABC Blooming Dale, located in a peaceful and prestigious neighborhood of Banani. Despite being handed over earlier, the flat has never been used, offering a fresh start in a well-maintained building.',
    detailSections: [
      {
        title: 'Property Features',
        items: [
          'Floor Area: 1,800 SQFT',
          'Floor: B-201 (2nd Floor)',
          'Condition: 100% Ready – Brand New (never lived in)',
          'Handover Year: 2004',
          '3 Spacious Bedrooms | 4 Bathrooms | 3 Balconies',
          'Bright Drawing and Dining Areas',
          'Modern Kitchen with quality fittings',
          'Gas Supply: Titash connection',
          'Parking: 1 Dedicated Car Parking Space',
          'Unit Per Floor: Only 2 – Ensuring comfort and privacy',
        ],
      },
      {
        title: 'Building Details',
        items: [
          'Land Size: 10.37 Katha',
          'Building Height: Ground + 5 Floors',
        ],
      },
      {
        title: 'Why This Property is Special',
        items: [
          'Premium location in Banani close to business hubs, embassies, cafes, and shopping centers',
          'Brand new condition – move in without needing renovations',
          'Secure building with modern design and functional layout',
        ],
      },
    ],
    amenities: toAmenities(['Parking', 'Balcony', 'Generator', 'Intercom']),
    recommendedSlugs: ['luxury-flat-for-sale-asad-avenue'],
    nearbyLocations: [
      { label: 'Banani Apartments', locationSlug: 'banani' },
      { label: 'Banasree Apartments', locationSlug: 'banasree-properties' },
      { label: 'Bashundhara Apartments', locationSlug: 'bashundhara-properties' },
      { label: 'Gulshan Apartments', locationSlug: 'gulshan' },
    ],
    agentPhone: '+880 1711107238',
    agentEmail: 'helloshwapnobari@gmail.com',
  },
];

