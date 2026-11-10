export interface SubUnit {
  name: string;
  originalHref: string;
  children?: { name: string; originalHref: string }[];
  note?: string;
}

export interface ConcernCompany {
  slug: string;
  name: string;
  shortTitle: string;
  logo: string;
  sector: string;
  route: string;
  originHref: string;
  hasOriginalDedicatedContent: boolean;
  tagline?: string;
  summary: string;
  auditStatus: string;
  subUnits: SubUnit[];
  featuredImages?: { src: string; caption: string }[];
  contactOfficeId?: string;
}

export interface BuildersProject {
  id: string;
  name: string;
  image: string;
  category: string;
  type: string;
  country: string;
  addressLines: string[];
  cmsLocality: string;
  sourceNote: string;
}

export const CONCERN_COMPANIES: ConcernCompany[] = [
  {
    slug: 'housing',
    name: 'KINGDOM Housing Ltd.',
    shortTitle: 'KINGDOM Housing & Kingdom City',
    logo: '/images/concerns/kingdom-housing.png',
    sector: 'Planned Urban Township & Land Development',
    route: '/concerns/housing',
    originHref: '/home/content_details',
    hasOriginalDedicatedContent: true,
    tagline: 'TRUSTED PARTNER TO REALIZE YOUR DREAM',
    summary:
      'Flagship developer of KINGDOM City — a multi-sector modern urban residential township situated near the Dhaleshwari River and Dhaka–Mawa Bypass Road in South Keraniganj, registered with RAJUK (RD - 0090) and member of REHAB & BLDA.',
    auditStatus:
      'Complete original sub-portal preserved across About, Location Map, Layout Plan, Booking Contact, Photo Gallery & Feedback.',
    subUnits: [
      {
        name: 'KINGDOM City',
        originalHref: '/home/content_details',
        children: [
          { name: 'About & Plot Pricing', originalHref: '/Home/content_details' },
          { name: 'Location Map', originalHref: '/Home/location_map' },
          { name: 'Layout Plan (Sectors 1–7)', originalHref: '/Home/layout_plan' },
          { name: 'Booking Contact', originalHref: '/Home/booking' },
          { name: 'Photo Gallery', originalHref: '/Home/galleryH' },
          { name: 'Feedback', originalHref: '/Home/feedback' },
        ],
      },
    ],
    featuredImages: [
      {
        src: '/images/concerns/kingdom-city.png',
        caption: 'KINGDOM City Brand Emblem',
      },
      {
        src: '/images/hero/kingdom-city-sign.jpg',
        caption: 'KINGDOM City Site Office — খরিদ সূত্রে জমির মালিক',
      },
    ],
    contactOfficeId: 'kingdom-city',
  },
  {
    slug: 'builders',
    name: 'KINGDOM Builders Ltd.',
    shortTitle: 'KINGDOM Builders Ltd.',
    logo: '/images/concerns/kingdom-builders.png',
    sector: 'Residential Apartments & Commercial Complexes',
    route: '/concerns/builders',
    originHref: '/home/content_builders',
    hasOriginalDedicatedContent: true,
    tagline: 'Dedicated to Quality and Commitment',
    summary:
      'Incorporated in 2006 to deliver quality residential apartments and commercial complexes in Dhaka and District Headquarters. Has successfully handed over around 700 apartments and executes public & private development contracts.',
    auditStatus:
      'Preserves Private Development Projects (/home/content_builders) & homepage Shariatpur/residential renders. Government Development Project & Builders sidebar links (About, Builders Plan, Members, Photo Gallery) are # placeholders on origin.',
    subUnits: [
      {
        name: 'KINGDOM Private Development Project',
        originalHref: '/home/content_builders',
        note: 'Lists 3 Ongoing Projects: Gosairhat Auditorium, Paradise Kingdom, Khulna Trade Center.',
      },
      {
        name: 'KINGDOM Government Development Project',
        originalHref: '#',
        note: 'Nav item is # on origin; About Us & project cards document contracts with Local Government Agencies (e.g., Zilla Parishad Shariatpur & Khulna Zilla Parishad).',
      },
    ],
    featuredImages: [
      {
        src: '/images/hero/zilla-parishad-tower.jpg',
        caption: 'Zilla Parishad Kingdom Tower, Shariatpur',
      },
      {
        src: '/images/hero/builders-banner.jpg',
        caption: 'KINGDOM Builders Ltd. Residential Perspective',
      },
      {
        src: '/images/hero/builders-evening.jpg',
        caption: 'KINGDOM Builders Ltd. Modern Facade Concept',
      },
    ],
    contactOfficeId: 'shariatpur',
  },
  {
    slug: 'construction',
    name: 'KINGDOM Construction Ltd.',
    shortTitle: 'KINGDOM Construction Ltd.',
    logo: '/images/concerns/kingdom-construction.png',
    sector: 'Highway Engineering, Heavy Machinery & Stone Crushing',
    route: '/concerns/construction',
    originHref: '/home/content_details (redirected to Housing on origin)',
    hasOriginalDedicatedContent: false,
    summary:
      'Foundation arm of KINGDOM GROUP operating since 2006 with heavy construction fleet and workforce across highway construction, site development, underground utilities, residential infrastructure, aggregate crushing in Jaflong (Sylhet), and engineering workshops.',
    auditStatus:
      'Origin menu links sub-divisions to # and the parent company erroneously to /home/content_details. Verified facts below come directly from Home overview, Home slider visuals, Contact (Sylhet Office), and Career role taxonomy.',
    subUnits: [
      {
        name: 'KINGDOM Stone Crasher',
        originalHref: '#',
        note: 'Origin spelling: "KINGDOM Stone Crasher" (Hero Slide 3 caption: "KINGDOM Stone Crusher"; Contact confirms operational stone plant at Panama Zone, Zumpara, Beside of Bashkal, Jaflong, Sylhet, +88 01701-688510).',
      },
      {
        name: 'KINGDOM Engineering & Workshop',
        originalHref: '#',
        note: 'Featured in Hero Slide 1 ("KINGDOM Engineering & Workshop"). Dedicated subpage text not published on origin.',
      },
      {
        name: 'KINGDOM Transport & Communication',
        originalHref: '#',
        note: 'Listed in Our Concern menu and supported by 5 Transport & Logistic roles in CV Submission form. Dedicated subpage text not published on origin.',
      },
    ],
    featuredImages: [
      {
        src: '/images/hero/truck1.jpg',
        caption: 'KINGDOM Engineering & Workshop',
      },
      {
        src: '/images/hero/construction-dozer.jpg',
        caption: 'KINGDOM Construction — Earthmoving Fleet',
      },
      {
        src: '/images/hero/stone-crusher.jpg',
        caption: 'KINGDOM Stone Crusher — Jaflong, Sylhet',
      },
      {
        src: '/images/hero/construction-fleet.jpg',
        caption: 'KINGDOM Construction Ltd. — Field Operations',
      },
      {
        src: '/images/hero/construction-site.jpg',
        caption: 'KINGDOM Construction Ltd. — Civil Structural Works',
      },
    ],
    contactOfficeId: 'sylhet',
  },
  {
    slug: 'kingdom-ltd',
    name: 'KINGDOM Ltd.',
    shortTitle: 'KINGDOM Ltd.',
    logo: '/images/concerns/kingdom-ltd.png',
    sector: 'Export-Import Trading & Agro-Based Ventures',
    route: '/concerns/kingdom-ltd',
    originHref: '/home/content_details (redirected to Housing on origin)',
    hasOriginalDedicatedContent: false,
    summary:
      'Diversified trading and agriculture division of KINGDOM GROUP encompassing international Export & Import, Domestic Trading, and Agro-based operations (Dairy Farm, Fisheries, and Nursery).',
    auditStatus:
      'All sub-menus on origin (Trading, Agriculture, KINGDOM Export & Import, KINGDOM Trading, KINGDOM Dairy Farm, KINGDOM Fisheries, KINGDOM Nursery) are # placeholders, and the parent links to /home/content_details. Gulshan Office HTML comment notes "Agro Based Office" at F-1, Latif Kingdom, South Badda, Gulshan-1.',
    subUnits: [
      {
        name: 'Trading',
        originalHref: '#',
        children: [
          { name: 'KINGDOM Export & Import', originalHref: '#' },
          { name: 'KINGDOM Trading', originalHref: '#' },
        ],
      },
      {
        name: 'Agriculture',
        originalHref: '#',
        children: [
          { name: 'KINGDOM Dairy Farm', originalHref: '#' },
          { name: 'KINGDOM Fisheries', originalHref: '#' },
          { name: 'KINGDOM Nursery', originalHref: '#' },
        ],
      },
    ],
    contactOfficeId: 'gulshan',
  },
  {
    slug: 'natural-trading',
    name: 'Natural Trading Co. Ltd.',
    shortTitle: 'Natural Trading Co. Ltd. (NTCL)',
    logo: '/images/concerns/ntcl.png',
    sector: 'Commercial Trading',
    route: '/concerns/natural-trading',
    originHref: '/home/content_details (redirected to Housing on origin)',
    hasOriginalDedicatedContent: false,
    tagline: 'প্রকৃতির অনন্য বন্ধনে। (In Unique Bond with Nature)',
    summary:
      'Affiliate trading enterprise under KINGDOM GROUP identified by its official NTCL mark ("প্রকৃতির অনন্য বন্ধনে। — NATURAL Trading Company Limited").',
    auditStatus:
      'No standalone detail copy was published on the origin website; menu item incorrectly routed to /home/content_details.',
    subUnits: [],
  },
  {
    slug: 'softbangla',
    name: 'SOFTBANGLA Automation Ltd.',
    shortTitle: 'SOFTBANGLA Automation Ltd.',
    logo: '/images/concerns/softbangla.png',
    sector: 'Software & Enterprise Automation',
    route: '/concerns/softbangla',
    originHref: '/home/content_details (redirected to Housing on origin)',
    hasOriginalDedicatedContent: false,
    summary:
      'Technology and software automation concern aligned with KINGDOM GROUP’s BASIS affiliation and enterprise software portfolio.',
    auditStatus:
      'No standalone copy was published on the origin website; menu item routed to /home/content_details. Footer carries the active BASIS membership logo.',
    subUnits: [],
  },
  {
    slug: 'foundation',
    name: 'KINGDOM Foundation',
    shortTitle: 'KINGDOM Foundation',
    logo: '/images/concerns/kingdom-foundation.png',
    sector: 'Philanthropy, Zakat & Social Welfare',
    route: '/concerns/foundation',
    originHref: '/home/content_details (redirected to Housing on origin)',
    hasOriginalDedicatedContent: false,
    tagline: 'মানুষ মানুষের জন্য (Manush Manusher Jonno — Humanity for Humanity)',
    summary:
      'Social welfare and charitable wing carrying the Bangla motto "মানুষ মানুষের জন্য". Connected to Managing Director Mohammed Nusrot Hossan’s documented social initiatives for poverty alleviation and disadvantaged communities, as well as the Photo Gallery outreach feature.',
    auditStatus:
      'No dedicated Foundation page existed on origin (/home/content_details was linked instead); factual tagline comes directly from the Foundation crest and social welfare context from About Us & Photo Gallery.',
    subUnits: [],
    featuredImages: [
      {
        src: '/images/gallery/jakat-dhaka.jpg',
        caption: 'Community Outreach & Relief Distribution (Photo Gallery — Dhaka)',
      },
    ],
  },
];

export const KINGDOM_CITY_DATA = {
  companyHeading: 'KINGDOM HOUSING LTD.',
  projectName: 'KINGDOM City',
  bannerImage: '/images/housing/housing-banner.jpg',
  logo: '/images/concerns/kingdom-city.png',
  promoBrochureImage: '/images/housing/kingdom-city-promo.jpg',
  locationMapImage: '/images/housing/location-map.jpg',
  layoutPlanImage: '/images/housing/layout-plan.jpg',
  rajukReg: 'RAJUK Registered: RD - 0090 (রাজউক নিবন্ধিত RD - 0090)',
  associations: ['MEMBER REHAB', 'MEMBER BLDA', 'RAJUK RD - 0090'],
  landownershipBadge: 'খরিদ সূত্রে জমির মালিক (Landowner by Purchase)',
  banglaTagline: 'স্বপ্ন পূরণ করুন আমাদের হাত ধরে।',
  banglaSubtitle: 'ধলেশ্বরী নদীর তীরে একখণ্ড জমি',
  bilingualMotto: '..... a home ..... of your own ........ / ... আপনার একটি আপন বাড়ী ...',
  banglaParagraphs: [
    'স্বপ্ন পূরণ করুন আমাদের হাত ধরে। ঢাকার অদূরে গড়ে উঠছে আরেক নগরী। চলে আসুন কিংডম সিটিতে।',
    'অত্যাধুনিক সকল সুযোগ সুবিধা সমৃদ্ধ পরিকল্পিত নগরী। নিকটেই রয়েছে ধলেশ্বরী নদী ও ঢাকা মাওয়া বাইপাস রোড মুখী প্রকল্প।',
    'প্লটের আকার: ২.৫, ৩, ৪, ৫, ৬, ৭.৫ এবং ১০ কাঠা।',
    'এককালীন ও ৫ বছর মেয়াদী সহজ কিস্তির সুব্যবস্থা আছে । এছাড়াও প্রতি ব্লকেই আছে স্কুল, কলেজ, ক্লিনিক, খেলার মাঠ, মসজিদ, টেলিফোন সংযোগ, ফায়ার সার্ভিস, পুলিশ ষ্টেশন, গার্বেজ ডাম্পিং ম্যানেজমেন্ট সিস্টেম।',
    'বর্তমান রেডি প্লট উন্নয়ন কার্যক্রম চলমান...... আরও বিস্তারিত জানতে কল করুনঃ ☎️ 01711925098',
  ],
  englishSummaryPoints: [
    'Planned modern residential city just outside Dhaka near the Dhaleshwari River and facing the Dhaka–Mawa Bypass Road corridor.',
    'Available Plot Sizes: 2.5, 3, 4, 5, 6, 7.5, and 10 Katha.',
    'Payment Options: Lump-sum purchase and easy 5-year monthly installment plans.',
    'Promotional Monthly Installment Plans (from ab.jpg brochure):',
  ],
  installmentPricing: [
    {
      plotSizeBangla: '৩ কাঠা প্লট',
      plotSizeEnglish: '3 Katha Plot',
      monthlyBangla: 'প্রতি মাসে কিস্তি মাত্র ৩০,০০০ টাকা',
      monthlyEnglish: '30,000 BDT / month',
      note: 'Extracted from KINGDOM City About brochure graphic (ab.jpg)',
    },
    {
      plotSizeBangla: '৫ কাঠা প্লট',
      plotSizeEnglish: '5 Katha Plot',
      monthlyBangla: 'প্রতি মাসে কিস্তি মাত্র ৪০,০০০ টাকা',
      monthlyEnglish: '40,000 BDT / month',
      note: 'Extracted from KINGDOM City About brochure graphic (ab.jpg)',
    },
  ],
  blockAmenities: [
    { bn: 'স্কুল', en: 'School (Primary & Secondary)' },
    { bn: 'কলেজ', en: 'College' },
    { bn: 'ক্লিনিক / হাসপাতাল', en: 'Clinic & Hospital' },
    { bn: 'খেলার মাঠ', en: 'Playground' },
    { bn: 'মসজিদ', en: 'Central Mosque & Graveyard' },
    { bn: 'টেলিফোন সংযোগ', en: 'Telephone Connection & Utilities' },
    { bn: 'ফায়ার সার্ভিস', en: 'Fire Service Station' },
    { bn: 'পুলিশ ষ্টেশন', en: 'Police Station & Security Gate' },
    { bn: 'গার্বেজ ডাম্পিং ম্যানেজমেন্ট সিস্টেম', en: 'Garbage Dumping Management System' },
    { bn: 'রিসোর্ট ও বোটিং ক্লাব', en: 'Resort & Boating Club (Layout Plan)' },
    { bn: 'পার্ক ও নদীর পাড়', en: 'Park & Riverside Sitting (Dhaleshwari)' },
    { bn: 'বাণিজ্যিক অঞ্চল (সেক্টর ৪)', en: 'Commercial Zone (Sector 4)' },
  ],
  sectors: [
    { sector: 'Sector 1', highlights: 'Northern entrance zone off 300 ft Dhaka–Mawa By-Pass Road, school & mosque plot reserves' },
    { sector: 'Sector 2', highlights: 'Central-north residential blocks & playground' },
    { sector: 'Sector 3', highlights: 'Mid-township residential blocks adjoining central green corridor' },
    { sector: 'Sector 4', highlights: 'Designated Commercial Zone & Administrative facilities' },
    { sector: 'Sector 5', highlights: 'Southern residential blocks & educational campus reserve' },
    { sector: 'Sector 6', highlights: 'Riverside transition residential zone' },
    { sector: 'Sector 7', highlights: 'Riverside frontage residential & resort corridor facing Dhaleshwari River' },
  ],
  locationCorridors: [
    'G.P.O. & Motijheel CBD',
    'Babu-Bazar Bridge & Postogola Bridge (Buriganga River)',
    'International Container Terminal & Ekuria',
    'Central Jail & RAJUK Jhilimili Housing Project',
    'Bashundhara River View & Cantonment / DOHS corridor',
    'Dhaka–Mawa Highway & 300 ft Dhaka–Mawa By-Pass Road',
    'Dhaleshwari River & Mukterpur / Padma Bridge corridor',
  ],
};

export const BUILDERS_PROJECTS: BuildersProject[] = [
  {
    id: 'gosairhat-auditorium',
    name: 'Gosairhat Auditorium',
    image: '/images/projects/gosairhat-auditorium.png',
    category: 'Ongoing Projects',
    type: 'Apartment',
    country: 'Bangladesh',
    addressLines: [
      'Shamsur Rahman Degree College, Gosairhat, Shariatpur',
      'Under Zilla Parishad, Shariatpur',
    ],
    cmsLocality: 'DOHS, Mirpur',
    sourceNote: 'Origin CMS metadata lists Type: Apartment & Locality: DOHS, Mirpur; verbatim address preserved.',
  },
  {
    id: 'paradise-kingdom',
    name: 'Paradise Kingdom',
    image: '/images/projects/paradise-kingdom.png',
    category: 'Ongoing Projects',
    type: 'Apartment',
    country: 'Bangladesh',
    addressLines: ['Sector No: 4, Road No: 10, Plot No: 24, Uttara, Dhaka'],
    cmsLocality: 'DOHS, Mirpur',
    sourceNote: 'Origin CMS metadata lists Locality: DOHS, Mirpur alongside exact Uttara Sector 4 plot address.',
  },
  {
    id: 'khulna-trade-center',
    name: 'Khulna Trade Center',
    image: '/images/projects/khulna-trade-center.png',
    category: 'Ongoing Projects',
    type: 'Apartment',
    country: 'Bangladesh',
    addressLines: ['Khulna Zilla Parisad, Old Duck Banglo, Khulna.'],
    cmsLocality: 'DOHS, Mirpur',
    sourceNote: 'Origin CMS metadata lists Type: Apartment & Locality: DOHS, Mirpur; verbatim Khulna address preserved.',
  },
];

export const BUILDERS_SIDEBAR_TABS = [
  { id: 'ongoing', label: 'Ongoing Projects', originalHref: '# (Active View)', isPopulated: true },
  { id: 'about', label: 'About', originalHref: '#', isPopulated: false },
  { id: 'plan', label: 'Builders Plan', originalHref: '#', isPopulated: false },
  { id: 'members', label: 'Members', originalHref: '#', isPopulated: false },
  { id: 'gallery', label: 'Photo Gallery', originalHref: '#', isPopulated: false },
];

