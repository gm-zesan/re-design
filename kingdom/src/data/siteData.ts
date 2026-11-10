export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  linkTo: string;
  badgeText?: string;
  fitMode?: 'cover' | 'contain';
}

export interface OfficeInfo {
  id: string;
  title: string;
  badge?: string;
  addressLines: string[];
  phones?: string[];
  fax?: string[];
  mobiles?: string[];
  customerCare?: string;
  collection?: string;
  emails?: string[];
  web?: string;
  note?: string;
}

export interface MemberOrganization {
  id: string;
  acronym: string;
  fullName: string;
  image: string;
  role: string;
}

export interface TeamMember {
  id: string;
  tab: 'management' | 'marketing' | 'technical' | 'general';
  name: string;
  designation: string;
  department: string;
  contactNo: string;
  location: string;
  originImageUrl: string;
  recoveredImage?: string;
  note?: string;
}

export interface EnterpriseApp {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  originUrl: string;
  externalUrl?: string;
  status: 'active-external' | 'server-error' | 'offline-archived';
  statusBadge: string;
  description: string;
}

export const SITE_META = {
  brandName: 'KINGDOM GROUP',
  brandShort: 'KINGDOM',
  tagline: 'TRUSTED PARTNER TO REALIZE YOUR DREAM',
  logoHeader: '/images/brand/logo-header.png',
  logoLogin: '/images/brand/logo-login.png',
  primaryPhone: '+88 01711-070777',
  controlUnitPhones: ['+88 01711-070777', '+88 01711-070744'],
  primaryEmail: 'info@kingdombd.com',
  secondaryEmail: 'info@kingdom.com.bd',
  hotmailEmail: 'kingdombd@hotmail.com',
  banglaMarquee: 'গাছ লাগান পরিবেশ বাঁচান, পরিবেশ বান্ধব সপ্নীল আবাসন গড়ে তুলন ।',
  banglaMarqueeTranslation:
    'Plant trees, protect the environment — build eco-friendly dream housing.',
  mapsPlaceUrl:
    'https://www.google.com.bd/maps/place/KINGDOM+GROUP/@23.7790249,90.3948747,17z/data=!4m5!3m4!1s0x3755c769dcea7309:0x7adaed52ed0fa5bc!8m2!3d23.7788825!4d90.3941859?hl=en&hl=en',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.116021868814!2d90.39199721498187!3d23.778882484575245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769dcea7309%3A0x7adaed52ed0fa5bc!2sKINGDOM+GROUP!5e0!3m2!1sen!2s!4v1503555649041',
  copyright: '© 2020 KINGDOM GROUP. All rights reserved.',
  developerName: 'Cyberdyne Technology Ltd.',
  developerUrl: 'http://www.cyberdynetechnologyltd.com/',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: 'KINGDOM Engineering & Workshop',
    subtitle: 'Heavy Haulage Fleet & Civil Equipment Operations',
    image: '/images/hero/truck1.jpg',
    category: 'Construction & Fleet',
    linkTo: '/concerns/construction',
    badgeText: 'Heavy Fleet',
  },
  {
    id: 2,
    title: 'KINGDOM Construction',
    subtitle: 'Large-Scale Earthmoving, Grading & Highway Engineering',
    image: '/images/hero/construction-dozer.jpg',
    category: 'Infrastructure',
    linkTo: '/concerns/construction',
    badgeText: 'Civil Works',
  },
  {
    id: 3,
    title: 'KINGDOM Stone Crusher',
    subtitle: 'Dedicated Aggregate Crushing Facility — Panama Zone, Jaflong, Sylhet',
    image: '/images/hero/stone-crusher.jpg',
    category: 'Aggregates',
    linkTo: '/concerns/construction',
    badgeText: 'Sylhet Plant',
  },
  {
    id: 4,
    title: 'KINGDOM City',
    subtitle: 'খরিদ সূত্রে জমির মালিক — Planned Township near Dhaka–Mawa Bypass Road',
    image: '/images/hero/kingdom-city-sign.jpg',
    category: 'Flagship Township',
    linkTo: '/concerns/housing',
    badgeText: 'RAJUK RD - 0090',
  },
  {
    id: 5,
    title: 'KINGDOM City',
    subtitle: 'Paved Approach Road & On-Site Client Service Office at Eastern Bazar',
    image: '/images/hero/kingdom-city-road.jpg',
    category: 'Flagship Township',
    linkTo: '/concerns/housing',
    badgeText: 'Site Office',
  },
  {
    id: 6,
    title: 'KINGDOM City',
    subtitle: 'Active Ready-Plot Land Grading & Sector Development',
    image: '/images/hero/kingdom-city-development.jpg',
    category: 'Land Development',
    linkTo: '/concerns/housing',
    badgeText: '2.5–10 Katha Plots',
  },
  {
    id: 7,
    title: 'KINGDOM Builders Ltd.',
    subtitle: 'Around 700 Apartments Handed Over Across Dhaka Residential Neighborhoods',
    image: '/images/hero/builders-banner.jpg',
    category: 'Real Estate',
    linkTo: '/concerns/builders',
    badgeText: 'Residential',
  },
  {
    id: 8,
    title: 'KINGDOM Construction Ltd.',
    subtitle: 'Integrated Excavator, Dumper & Compaction Roller Operations',
    image: '/images/hero/construction-fleet.jpg',
    category: 'Heavy Machinery',
    linkTo: '/concerns/construction',
    badgeText: 'Field Operations',
    fitMode: 'contain',
  },
  {
    id: 9,
    title: 'KINGDOM Construction Ltd.',
    subtitle: 'Structural RCC Framing, Formwork & Public Works Engineering',
    image: '/images/hero/construction-site.jpg',
    category: 'Structural Engineering',
    linkTo: '/concerns/construction',
    badgeText: 'Public & Private',
    fitMode: 'contain',
  },
  {
    id: 10,
    title: 'KINGDOM Builders Ltd.',
    subtitle: 'Zilla Parishad Kingdom Tower — Chowrongy, Palong, Shariatpur Sadar',
    image: '/images/hero/zilla-parishad-tower.jpg',
    category: 'Landmark Tower',
    linkTo: '/concerns/builders',
    badgeText: 'District HQ',
    fitMode: 'contain',
  },
  {
    id: 11,
    title: 'KINGDOM Builders Ltd.',
    subtitle: 'Contemporary Multi-Story Apartment & Mixed-Use Architecture',
    image: '/images/hero/builders-evening.jpg',
    category: 'Real Estate',
    linkTo: '/concerns/builders',
    badgeText: 'Architecture',
    fitMode: 'contain',
  },
];

export const HOME_OVERVIEW = {
  heading: 'Building Bangladesh’s Urban & Infrastructure Foundations Since 2006',
  paragraph1:
    'Founded in 2006 by Mohammed Nusrot Hossan, KINGDOM GROUP was established with an exchange of land for an International Track Loader. KINGDOM Construction Company has grown steadily for over 12 years. We have a significant equipment fleet and workforce to handle a variety of heavy construction projects.',
  paragraph2:
    "KINGDOM Construction Company provides construction services for both public and private clients. The company prides itself in efficient and high quality workmanship in the areas of highway construction, site development, underground utilities and residential infrastructure. KINGDOM's philosophy is that a project must prove to be beneficial to the client in order for it to be a success.",
  sideImage: '/images/about/home-building.jpg',
  sideImageAlt: 'KINGDOM GROUP multi-story architectural rendering',
};

export const ABOUT_DATA = {
  bannerImage: '/images/about/about-banner.jpg',
  bannerCaption: 'AITVET Architectural Campus Visual (Origin About Page Header)',
  title: 'About KINGDOM GROUP',
  introduction:
    'KINGDOM Builders Limited "Dedicated to Quality and Commitment" was incorporated in the year 2006 to make housing solutions in the mega city of Dhaka for the people who cherish the dream for a sweet home. In a short time KINGDOM became a renowned brand in the Real-Estate sector of Bangladesh. KINGDOM Builders Limited has made successful handovers of around 700 apartments to its clients since its incorporation. KINGDOM has maintained its consistent growth and became a conglomerate of 05 (Five) successful companies by taking its name as KINGDOM GROUP OF COMPANIES.',
  management:
    'KINGDOM GROUP is managed by a group of highly skilled and qualified Managers, Architects and Engineers. The Organogram of KINGDOM Group is shown below:',
  managementOrganogramNote:
    'Audit note: The origin website includes the introductory line referencing the organogram above, but no organogram diagram or image was embedded beneath it.',
  managingDirector: {
    name: 'MOHAMMED NUSROT HOSSAN',
    title: 'MANAGING DIRECTOR',
    org: 'KINGDOM GROUP',
    sectionHeading: 'Chairman & Managing Director',
    image: '/images/team/md-nusrot-hossan.jpg',
    bio: 'Mohammed Nusrot Hossan is the founder Managing Director of Kingdom Group. Having done his post graduation in Computer Science from Stamford University he engages himself in Business. With his prudence and perseverance he achieved success in a short time. As Managing Director, he leads a team of professionals who drive the Kingdom Group towards achieving its objectives. Beside this business. he also works at assorted social activities for poverty alleviation and disadvantages people.',
  },
  founderChairmanArchive: {
    name: 'MAJOR GENERAL MD ABDUR RASHID',
    credentials: 'psc, G(RTD), MDS, MBA',
    title: 'CHAIRMAN, KINGDOM GROUP',
    image: '/images/team/chairman-abdur-rashid.jpg',
    bio: 'Major General Md. Abdur Rashid, psc G (Retired) is the Founder Chairman of KINGDOM GROUP. In his glorious service life he undertook challenging assignments and responsibilities with success. With wide and varied experience he kept his marks in socio-economic sector of Bangladesh. He always thrived for better business environment and contributed in REHAB (Real estate & Housing Association of Bangladesh) as Vice President (Ex), Member of BASIS and member of Federation of Bangladesh.',
    sourceNote:
      'Displayed actively under Management Team (/home/team_members) and archived in HTML comments on the origin About page.',
  },
  businessStatus:
    'KINGDOM Group focuses on Residential and commercial building projects along with Land development business. It is also engaged in contractual Construction in District Headuarters. It has already signed a number of contracts for constructing large buildings and commercial complexes with Local Governmental agencies of the peoples republic of Bangladesh.',
  vision:
    'KINGDOM Builders Limited "Dedicated to Quality and Commitment" has been incorporated to make housing solutions in the mega city of Dhaka for the people who cherish dreams for a sweet home. Our vision is to be the best Real Estate Company in the world--in the eyes of our customers, shareholders, communities and people.',
  mission:
    'To make the buying and selling of real estate as cost effective as possible while maintaining the highest level of service. To provide accurate and up-to-date information, skilled analysis and sound real estate advice and explore new ideas and technology, to make the selling and buying of real estate faster, less costly, and easier.',
};

export const OFFICES_DATA: OfficeInfo[] = [
  {
    id: 'corporate',
    title: 'Corporate Office',
    badge: 'Headquarters',
    addressLines: [
      'House # 160, Road # 23',
      'DOHS Mohakhali, Dhaka-1206, Bangladesh.',
    ],
    phones: ['+88-02-8714164', '+88-02-9861846-7'],
    fax: ['+88-02-9835774'],
    mobiles: ['+88 01711-925094'],
    emails: ['kingdombd@hotmail.com', 'info@kingdom.com.bd'],
    web: 'www.kingdom.com.bd',
    note: 'Also listed across Housing Booking Contact, Layout Plan & origin Registered Office archive as: House # 470, Road # 31, New DOHS Mohakhali, Dhaka-1206.',
  },
  {
    id: 'sales',
    title: 'Sales Office',
    badge: 'Motijheel Commercial Hub',
    addressLines: [
      '1308-09/A, Sena Kalyan Bhaban,',
      '195 Motijheel C/A,',
      'Dhaka-1000, Bangladesh.',
    ],
    mobiles: ['+88 01711-924594'],
    customerCare: '+88 01711-924727',
    collection: '+88 01711-924609',
  },
  {
    id: 'gulshan',
    title: 'Gulshan Office',
    badge: 'Dhaka East',
    addressLines: [
      'F-1, Latif Kingdom, Ba-2, South Badda,',
      'Gulshan-1, Dhaka-1212, Bangladesh.',
    ],
    mobiles: ['+88 01711-924659'],
    note: 'Also noted in origin HTML comments as Agro Based Office.',
  },
  {
    id: 'kingdom-city',
    title: 'Kingdom City Project Office',
    badge: 'Township Site',
    addressLines: [
      'Kingdom City, Bibir Bazar Road,',
      'South Keraniganj, Munshiganj Sadar, Dhaka.',
    ],
    mobiles: ['+88 01711-925098'],
    note: 'Housing Booking & Layout Plan also reference the Site Office at Eastern Bazar (Estern Bazar), South Keraniganj, Dhaka-1310.',
  },
  {
    id: 'sylhet',
    title: 'Sylhet Office',
    badge: 'Stone Crusher Plant',
    addressLines: [
      'Kingdom Stone Crusher, Panama Zone, Zumpara,',
      'Beside of Bashkal, Jaflong, Sylhet.',
    ],
    mobiles: ['+88 01701-688510'],
  },
  {
    id: 'shariatpur',
    title: 'Shariatpur Office',
    badge: 'Regional Office',
    addressLines: [
      'Zilla Parishad Kingdom Tower, Chowrongy,',
      'Palong, Shariatpur Sadar, Shariatpur.',
    ],
    mobiles: ['+88 01711-925095'],
  },
  {
    id: 'control-unit',
    title: 'Control Unit (24 Hours)',
    badge: '24/7 Helpline',
    addressLines: ['For any queries, contact us at:'],
    mobiles: ['+88 01711-070777', '+88 01711-070744'],
  },
];

export const HOUSING_BOOKING_DETAILS = {
  intro: 'Please contact the following address',
  registeredCorporate: {
    title: 'Corporate Office',
    address: 'House # 470, Road # 31, New DOHS Mohakhali, Dhaka-1206, Bangladesh.',
    phone: '+88-02-8714164, +88-02-9861846-7',
    fax: '+88-02-9835774',
    mobile: '+88 01711-925094',
    emails: ['kingdombd@hotmail.com', 'info@kingdom.com.bd'],
    web: 'www.kingdom.com.bd',
  },
  salesOffice: {
    title: 'Sales Office',
    address: '1308-09/A, Sena Kalyan Bhaban, 195 Motijheel C/A, Dhaka-1000, Bangladesh.',
    mobile: '+88 01711-924594',
    customerCare: '+88 01711-924727',
    collection: '+88 01711-924609',
  },
  siteOffice: {
    title: 'Site Office',
    address: 'Kingdom City, Estern Bazar, South Keranigong, Dhaka, Bangladesh.',
    layoutPlanVariant: 'Eastern Bazar, South Keraniganj, Dhaka-1310',
  },
  hotlines: [
    '01711925097',
    '01711925098',
    '01711924720',
    '01711924721',
    '01711924725',
    '01711924726',
  ],
  bannerHotlines: ['01711925095', '01711925096', '01711925097', '01711925098'],
};

export const MEMBER_LOGOS: MemberOrganization[] = [
  {
    id: 'rajuk',
    acronym: 'RAJUK',
    fullName: 'Rajdhani Unnayan Kartripakkha (রাজধানী উন্নয়ন কর্তৃপক্ষ)',
    image: '/images/members/rajuk.jpg',
    role: 'Capital Development Authority Registration (RD - 0090)',
  },
  {
    id: 'rehab',
    acronym: 'REHAB',
    fullName: 'Real Estate & Housing Association of Bangladesh',
    image: '/images/members/rehab.gif',
    role: 'National Real Estate Trade Body Member',
  },
  {
    id: 'basis',
    acronym: 'BASIS',
    fullName: 'Bangladesh Association of Software & Information Services',
    image: '/images/members/basis.png',
    role: 'Software & Automation Industry Affiliation',
  },
  {
    id: 'blda',
    acronym: 'BLDA',
    fullName: 'Bangladesh Land Developers Association',
    image: '/images/members/blda.png',
    role: 'Land & Township Developers Association',
  },
  {
    id: 'rhd',
    acronym: 'RHD',
    fullName: 'Roads and Highways Department',
    image: '/images/members/rhd.jpg',
    role: 'Public Infrastructure & Highway Contracting',
  },
  {
    id: 'bpdb',
    acronym: 'BPDB',
    fullName: 'Bangladesh Power Development Board (বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড)',
    image: '/images/members/bpdb.jpg',
    role: 'Government Power & Utility Sector Association',
  },
  {
    id: 'pwd',
    acronym: 'PWD',
    fullName: 'Public Works Department',
    image: '/images/members/pwd.jpg',
    role: 'Government Building & Civil Construction',
  },
  {
    id: 'bida',
    acronym: 'BIDA',
    fullName: 'Bangladesh Investment Development Authority',
    image: '/images/members/blda-bida.jpg',
    role: 'National Investment Facilitation Authority',
  },
];

export const TEAM_TABS = [
  { id: 'management', label: 'Management Team' },
  { id: 'marketing', label: 'Marketing Team' },
  { id: 'technical', label: 'Technical Team' },
  { id: 'general', label: 'General Team' },
] as const;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'abdur-rashid',
    tab: 'management',
    name: 'MAJOR GENERAL MD ABDUR RASHID',
    designation: 'CHAIRMAN',
    department: 'KINGDOM GROUP',
    contactNo: '01915547887',
    location: 'Not specified on live directory',
    originImageUrl: 'https://www.kingdom.com.bd/images/member_images/chairman2.jpg',
    recoveredImage: '/images/team/chairman-abdur-rashid.jpg',
    note: 'Origin member_images/chairman2.jpg returns 404; portrait recovered from origin About source (/images/kingdom-image/chairman.jpg).',
  },
  {
    id: 'mahmud-hasan-rasel',
    tab: 'marketing',
    name: 'Mahmud Hasan Rasel',
    designation: 'Marketing Officer',
    department: 'Marketing',
    contactNo: '01546415644',
    location: 'dhaka',
    originImageUrl: 'https://www.kingdom.com.bd/images/member_images/maha10.jpg',
    note: 'Origin image returned HTTP 404.',
  },
  {
    id: 'mahbubur-rahman',
    tab: 'technical',
    name: 'Mahbubur Rahman',
    designation: 'IT Officer',
    department: 'IT',
    contactNo: '01912751486',
    location: 'Dhaka',
    originImageUrl: 'https://www.kingdom.com.bd/images/member_images/maha.jpg',
    note: 'Origin image returned HTTP 404.',
  },
  {
    id: 'ratul-khan',
    tab: 'general',
    name: 'Ratul khan',
    designation: 'Marketing Officer',
    department: 'IT Officer',
    contactNo: '01912751486',
    location: 'Dhaka',
    originImageUrl: 'https://www.kingdom.com.bd/images/member_images/maha1.jpg',
    note: 'Origin image returned HTTP 404.',
  },
];

export const NOTICE_DATA = [
  {
    id: 1,
    noticeNo: 'czm/G/201/103',
    date: '29-08-2017',
    title: 'Eid Ul Adha Holiday Notice 2017',
    verbatimBody: [
      'Eid Mubarak !',
      'This is to inform that on the occasion of Holy Eid Ul Fitr 2017, entire training and general official activities of GEE Bangladesh will remain closed from 24 June to 30 June 2017.',
      'All of our training and general activities will resume on 1 July 2017 at 10 am. However, urgent administrative works will continue till 25 June 2017.',
      'All concerned are requested to follow the notice.',
      'Authority',
      'GEE Bangladesh',
      'Date: 18 June 2017',
    ],
    auditNote:
      'Preserved verbatim from https://www.kingdom.com.bd/home/notice_view. Note that the origin CMS entry contains legacy GEE Bangladesh Eid Ul Fitr June 2017 copy beneath the Eid Ul Adha August 2017 header.',
  },
];

export const ENTERPRISE_APPS: EnterpriseApp[] = [
  {
    id: 'efs',
    name: 'e-File System',
    shortName: 'eFS',
    icon: '/images/apps/efs.png',
    originUrl: 'https://www.kingdom.com.bd/eFS',
    status: 'server-error',
    statusBadge: 'Origin HTTP 500 / Header Form 404',
    description:
      'Internal digital document routing and corporate filing portal (header quick-login uses CompanyID=3). On the live server, /eFS returns HTTP 500 and the header form action /eFS/login/Welcome/login_Check returns HTTP 404.',
  },
  {
    id: 'scm',
    name: 'Supply Chain Management (SCM)',
    shortName: 'SCM',
    icon: '/images/apps/scm.png',
    originUrl: 'http://cyberdynetechnologyltd.com/scm/',
    externalUrl: 'http://cyberdynetechnologyltd.com/scm/',
    status: 'active-external',
    statusBadge: 'External Portal Link',
    description:
      'Procurement, materials inventory, and supply chain management suite hosted externally by Cyberdyne Technology Ltd.',
  },
  {
    id: 'hrm',
    name: 'Human Resource Management (HRM)',
    shortName: 'HRM',
    icon: '/images/apps/hrm.png',
    originUrl: 'http://www.kingdom.com.bd/hrm',
    status: 'offline-archived',
    statusBadge: 'Commented / HTTP 404',
    description:
      'Employee records, attendance, and payroll module referenced in commented navigation markup on the origin site; endpoint returns HTTP 404.',
  },
  {
    id: 'vems',
    name: 'Vehicle & Equipment Management (VEMS)',
    shortName: 'VEMS',
    icon: '/images/apps/vms.png',
    originUrl: 'http://kingdom.com.bd/vems/',
    status: 'offline-archived',
    statusBadge: 'Commented / HTTP 404',
    description:
      'Fleet dispatch and heavy construction equipment maintenance tracking module referenced in commented HTML markup; returns HTTP 404.',
  },
  {
    id: 'aims',
    name: 'Financial Accounting (ACTION-5)',
    shortName: 'ACTION-5',
    icon: '/images/apps/accounting.png',
    originUrl: 'http://kingdom.com.bd/aims/',
    status: 'offline-archived',
    statusBadge: 'Commented / HTTP 404',
    description:
      'Corporate accounting and ledger platform referenced in commented HTML markup; endpoint returns HTTP 404.',
  },
  {
    id: 'ss',
    name: 'Sales System (SS)',
    shortName: 'SS',
    icon: '/images/apps/sms.png',
    originUrl: '#',
    status: 'offline-archived',
    statusBadge: 'Commented / Unlinked (#)',
    description:
      'Real estate and plot sales management module listed inside commented markup with a placeholder # target.',
  },
];

export const GALLERY_COLLECTIONS = [
  {
    id: 'jakat-dhaka',
    title: 'dhaka',
    subtitle: 'Original Photo Gallery Feature — Social & Community Aid Distribution',
    category: 'Community & Foundation',
    sourcePage: '/home/photo_gallery',
    image: '/images/gallery/jakat-dhaka.jpg',
    captionNote: 'Original caption: "dhaka" (posted on /home/photo_gallery)',
  },
  {
    id: 'city-sign',
    title: 'KINGDOM City Site Office & Landownership Signboard',
    subtitle: 'খরিদ সূত্রে জমির মালিক — Eastern Bazar, South Keraniganj',
    category: 'Kingdom City',
    sourcePage: 'Home Slider',
    image: '/images/hero/kingdom-city-sign.jpg',
  },
  {
    id: 'city-road',
    title: 'KINGDOM City Paved Approach & Site Facility',
    subtitle: 'Direct road access at Kingdom City project office',
    category: 'Kingdom City',
    sourcePage: 'Home Slider',
    image: '/images/hero/kingdom-city-road.jpg',
  },
  {
    id: 'city-dozer',
    title: 'KINGDOM City Ready-Plot Land Grading',
    subtitle: 'Active earthwork and plot preparation',
    category: 'Kingdom City',
    sourcePage: 'Home Slider',
    image: '/images/hero/kingdom-city-development.jpg',
  },
  {
    id: 'stone-crusher',
    title: 'Jaflong Stone Crushing Plant & Fleet',
    subtitle: 'Panama Zone, Zumpara, Jaflong, Sylhet',
    category: 'Construction & Fleet',
    sourcePage: 'Home Slider',
    image: '/images/hero/stone-crusher.jpg',
  },
  {
    id: 'construction-fleet',
    title: 'KINGDOM Construction Field Machinery',
    subtitle: 'Excavators, dumpers and SAKA compaction roller in active service',
    category: 'Construction & Fleet',
    sourcePage: 'Home Slider',
    image: '/images/hero/construction-fleet.jpg',
  },
  {
    id: 'construction-site',
    title: 'Civil & RCC Structural Works',
    subtitle: 'Reinforcement, shuttering and multi-story structural erection',
    category: 'Construction & Fleet',
    sourcePage: 'Home Slider',
    image: '/images/hero/construction-site.jpg',
  },
  {
    id: 'zilla-parishad',
    title: 'Zilla Parishad Kingdom Tower, Shariatpur',
    subtitle: 'Architectural perspective of flagship Shariatpur tower complex',
    category: 'Builders & Architecture',
    sourcePage: 'Home Slider',
    image: '/images/hero/zilla-parishad-tower.jpg',
  },
  {
    id: 'builders-banner',
    title: 'KINGDOM Residential Development Concept',
    subtitle: '6-story corner plot architectural perspective',
    category: 'Builders & Architecture',
    sourcePage: 'Home Slider',
    image: '/images/hero/builders-banner.jpg',
  },
  {
    id: 'builders-evening',
    title: 'Evening Facade Render — KINGDOM Builders',
    subtitle: 'Modern multi-story apartment exterior perspective',
    category: 'Builders & Architecture',
    sourcePage: 'Home Slider',
    image: '/images/hero/builders-evening.jpg',
  },
];

