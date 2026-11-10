export interface ServiceCardItem {
  id: string;
  title: string;
  icon: string;
  targetRoute: string;
  summary: string;
  highlights: string[];
}

export interface ServiceDetailContent {
  slug: string;
  title: string;
  heading: string;
  heroTitle: string;
  tagline: string;
  sideImage: string;
  paragraphs: string[];
  capabilities: { label: string; detail: string }[];
  ctaText: string;
}

// Note: On the live WordPress `/services/` page, all 9 cards displayed `Lorem ipsum` dummy copy and
// the Buy/Sell cards swapped their WebP icons. Below, we pair the correct WebP icons with each
// service title and synthesize accurate concise descriptions solely from Shwapno Bari's own
// documented capabilities on `/about-us/` and `/contact-us/` (zero fabricated statistics or claims).
export const SERVICES_GRID: ServiceCardItem[] = [
  {
    id: 'buy-property',
    title: 'Buy Property',
    icon: '/uploads/2024/06/Buy-Property.webp',
    targetRoute: '/service-buy',
    summary:
      'Search and acquire ready-to-move luxury flats, stylish apartments, duplex homes, and residential plots from our legally vetted and carefully analyzed Dhaka inventories.',
    highlights: ['Verified Ready Flats', 'Title & Mutation Review', 'Personalized Viewing'],
  },
  {
    id: 'sell-property',
    title: 'Sell Property',
    icon: '/uploads/2024/06/Sell-Property.webp',
    targetRoute: '/service-sell',
    summary:
      'Sell your apartments or land at the best possible value in Bangladesh’s secondary real estate market with end-to-end documentation, registration, and buyer matching.',
    highlights: ['Market Valuation', 'Sale Permission Support', 'Clean Transfer'],
  },
  {
    id: 'develop',
    title: 'Develop',
    icon: '/uploads/2024/06/Rent-Lease.webp',
    targetRoute: '/service-develop',
    summary:
      'Collaborative residential, commercial, and land development partnerships guided by architectural excellence, structural safety, engineering standards, and green technology.',
    highlights: ['Developer Partnerships', 'Residential & Commercial', 'Sustainable Standards'],
  },
  {
    id: 'office-solutions',
    title: 'Office Solutions',
    icon: '/uploads/2024/06/Office-Solutions.webp',
    targetRoute: '/service-buy',
    summary:
      'Dedicated advisory for commercial building spaces and business premises aligned with client operational requirements across key Dhaka corridors.',
    highlights: ['Commercial Spaces', 'Business Locations', 'Lease & Purchase Advisory'],
  },
  {
    id: 'credit-profiling',
    title: 'Credit Profiling',
    icon: '/uploads/2024/06/Credit-Profiling.webp',
    targetRoute: '/service-sell',
    summary:
      'Financial readiness planning and installment modeling to help prospective homebuyers assess property pricing, down payments, and monthly financing commitments.',
    highlights: ['Installment Planning', 'Down Payment Modeling', 'Budget Clarity'],
  },
  {
    id: 'legal-support',
    title: 'Legal Support (Rajuk & Private)',
    icon: '/uploads/2024/06/Legal-Support-2.webp',
    targetRoute: '/service-exchange', // Live `/service-exchange/` returned 404; fixed cleanly to resolve on our full Legal & Exchange advisory view
    summary:
      'Complete legislative and documentation assistance resolving issues related to sale permission, deed registration, land mutation, and title vetting.',
    highlights: ['Sale Permission', 'Registration Support', 'Mutation & Title Audit'],
  },
  {
    id: 'property-consultancy',
    title: 'Property Consultancy',
    icon: '/uploads/2024/06/Property-Consultancy.webp',
    targetRoute: '/service-buy',
    summary:
      'Personalized real estate guidance led by experienced industry professionals to help clients evaluate true property worth, neighborhood potential, and long-term value.',
    highlights: ['Market Insight', 'Inventory Analysis', 'Tailored Guidance'],
  },
  {
    id: 'property-management',
    title: 'Property Management',
    icon: '/uploads/2024/06/Property-Management.webp',
    targetRoute: '/service-sell',
    summary:
      'Rent out residential apartments to trustworthy tenants and maintain asset readiness across Dhaka’s prime neighborhoods with reliable oversight.',
    highlights: ['Trustworthy Tenants', 'Rental Advisory', 'Ongoing Upkeep'],
  },
  {
    id: 'property-acquisition',
    title: 'Property Acquisition',
    icon: '/uploads/2024/06/Property-Acquisition.webp',
    targetRoute: '/service-exchange',
    summary:
      'Strategic acquisition and property exchange offers allowing homeowners to upgrade old apartments or land into modern residences cleanly and transparently.',
    highlights: ['Property Exchange Offers', 'Legally Vetted Assets', 'Smooth Transactions'],
  },
];

export const SERVICE_DETAILS: Record<string, ServiceDetailContent> = {
  'service-buy': {
    slug: 'service-buy',
    title: 'Buy Property — Service Detail',
    heroTitle: 'Service Buy',
    heading: 'Buy your dream residence with Shwapno Bari Real Estate Ltd.',
    tagline: 'Legally Vetted Inventories & Secondary Real Estate Expertise Since 2016',
    sideImage: '/uploads/2024/06/Image-2.jpg',
    paragraphs: [
      'Finding a ready-to-move luxury flat, modern family apartment, or prime residential plot requires verified documentation and trusted local market guidance. Since our inception in 2016, Shwapno Bari Real Estate Ltd. has served clients across Dhaka’s most desirable neighborhoods through carefully analyzed and legally vetted property inventories.',
      'Whether you are evaluating ready residences in Gulshan, Banani, Bashundhara R/A, Mohammadpur, West Dhanmondi, or Banasree—or seeking office solutions and property consultancy—our team handles property shortlisting, site inspections, legislative vetting, registration, and mutation so your acquisition moves smoothly.',
    ],
    capabilities: [
      {
        label: 'Verified Property Inventories',
        detail: 'Every residential apartment and plot undergoes thorough legal and documentation analysis prior to presentation.',
      },
      {
        label: 'Legislative & Transfer Support',
        detail: 'Full guidance on sale permission, title verification, deed registration, and post-purchase mutation.',
      },
      {
        label: 'Property Consultancy & Office Solutions',
        detail: 'Personalized advisory tailored to residential lifestyles, commercial premises, and long-term capital preservation.',
      },
    ],
    ctaText: 'Contact Us',
  },
  'service-sell': {
    slug: 'service-sell',
    title: 'Sell Property — Service Detail',
    heroTitle: 'Service Sell',
    heading: 'Sell or lease your property at its true market value.',
    tagline: 'Reliable Representation Across Primary & Secondary Real Estate in Bangladesh',
    sideImage: '/uploads/2024/06/Image-2.jpg',
    paragraphs: [
      'Selling an apartment or piece of land is a major financial decision that depends on fair valuation, qualified buyers, and clean legal execution. At Shwapno Bari Real Estate Ltd., we always acknowledge the true worth of a property for our clients and manage every transaction with integrity and personal attention.',
      'Beyond direct secondary sales at competitive market value, our team assists homeowners wishing to rent out apartments to trustworthy tenants, structure credit profiling for qualified buyers, or exchange an existing property for a newer residence through our one-stop Buy, Sell, and Exchange framework.',
    ],
    capabilities: [
      {
        label: 'Accurate Property Valuation',
        detail: 'Market-aligned pricing guidance across Gulshan, Banani, Dhanmondi, Bashundhara, Banasree, Mohammadpur, and Uttara.',
      },
      {
        label: 'End-to-End Paperwork & Clearance',
        detail: 'Dedicated assistance solving bottlenecks related to RAJUK or private sale permission, registration, and mutation.',
      },
      {
        label: 'Tenant Placement & Property Management',
        detail: 'Reliable tenant matching and ongoing management support for property owners seeking steady rental occupancy.',
      },
    ],
    ctaText: 'Contact Us',
  },
  'service-develop': {
    slug: 'service-develop',
    title: 'Develop Property — Service Detail',
    heroTitle: 'Service Develop',
    heading: 'Develop property with Shwapno Bari Real Estate Ltd.',
    tagline: 'Partnering With Developers Across Architecture, Engineering & Green Technology',
    sideImage: '/uploads/2024/06/Image-2.jpg',
    paragraphs: [
      'Shwapno Bari are committed to working with property developers to provide the best opportunities throughout the Bangladesh to our clients and customers. No matter what type of residential development, Shwapno Bari are always interested in working with new property developers.',
      'Guided by our vision to be a world-class estate developer creating maximum value through quality homes and business spaces, we build and develop environment-friendly apartments, commercial buildings, and land projects using the highest standards of safety, architecture, engineering, and green technology.',
    ],
    capabilities: [
      {
        label: 'Developer Partnerships',
        detail: 'Open collaboration with property developers across residential and commercial projects throughout Bangladesh.',
      },
      {
        label: 'Architecture & Engineering Safety',
        detail: 'Commitment to safe structural engineering and enduring build quality for residential communities.',
      },
      {
        label: 'Sustainable Land & Building Projects',
        detail: 'Environment-friendly apartments, commercial spaces, and premium land developments delivering modern comfort.',
      },
    ],
    ctaText: 'Contact Us',
  },
  'service-exchange': {
    slug: 'service-exchange',
    title: 'Exchange, Acquisition & Legal Support (RAJUK & Private)',
    heroTitle: 'Exchange, Acquisition & Legal Support',
    heading: 'Property Exchange Offers, Acquisition & RAJUK Documentation Support',
    tagline: 'Resolving Sale Permission, Registration & Mutation Across Bangladesh',
    sideImage: '/uploads/2024/06/Image-2.jpg',
    paragraphs: [
      'As a one-stop solution in the real estate marketplace of Bangladesh, Shwapno Bari Real Estate Ltd. offers dedicated Property Exchange and Acquisition services—enabling clients to exchange old apartments or lands for newer residences from our verified inventory.',
      'Buying, selling, or exchanging a property has to be handled via reliable hands. Our experienced personnel provide comprehensive legislative and documentation support—solving complex issues related to RAJUK and private sale permission, deed registration, and mutation so every transfer concludes securely.',
    ],
    capabilities: [
      {
        label: 'Property Exchange Offers',
        detail: 'Upgrade seamlessly by exchanging an existing apartment or land asset toward a ready-to-move new home.',
      },
      {
        label: 'Legal Support (RAJUK & Private)',
        detail: 'Specialized assistance covering sale permission, title verification, registration, and municipal/RAJUK mutation.',
      },
      {
        label: 'Strategic Property Acquisition',
        detail: 'Transparent sourcing and due diligence for discerning residential buyers and institutional investors.',
      },
    ],
    ctaText: 'Contact Us',
  },
};

