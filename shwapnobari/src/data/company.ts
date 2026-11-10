export interface CoreValue {
  id: string;
  title: string;
  description: string;
  index: string;
}

export interface ServingLocation {
  name: string;
  locationParam: string;
  categorySlug: string;
  zone: string;
}

export const COMPANY = {
  brandName: 'Shwapno Bari Real Estate Ltd.',
  shortName: 'Shwapno Bari',
  establishedYear: 2016,
  tagline: 'A Reliable Platform of Property Solution',
  heroVideoUrl: 'https://www.youtube.com/watch?v=hyJYhGPQyy8',
  heroVideoId: 'hyJYhGPQyy8',
  websiteUrl: 'https://shwapnobari.com',
  address: 'House- 14/A, Level-1(1st floor), Road-02, Block-L, Banani, Dhaka-1213',
  googleMapsUrl: 'https://www.google.com/maps?cid=17258634447160801028',
  coordinates: [23.783182607625, 90.400369788188] as [number, number],
  phones: {
    primary: '+880 1711107238',
    primaryTel: 'tel:+8801711107238',
    secondary: '01722926232',
    secondaryTel: 'tel:01722926232',
    whatsappDisplay: '+88017111 07238',
    whatsappUrl: 'https://wa.me/8801711107238',
  },
  emails: {
    general: 'info@shwapnobari.com',
    properties: 'helloshwapnobari@gmail.com',
    director: 'mahfuzred@gmail.com',
    managingDirector: 'z.hossain71@yahoo.com',
  },
  social: {
    facebook: 'https://www.facebook.com/shwapnobaribd/',
  },
  assets: {
    logoDark: '/uploads/2024/04/Logo.webp',
    logoWhite: '/uploads/2024/04/White-Logo.webp',
    heroFallback: '/uploads/2024/04/Atf-Image.jpg',
    aboutImage: '/uploads/2024/04/About-Us-image.jpg',
    coreValuesBg: '/uploads/2024/04/Core-Values-Image.jpg',
    mapSectionBg: '/uploads/2024/04/map_bg.jpg',
    expertBanner: '/uploads/2024/04/banner-1024x134.webp',
    phfImage: '/uploads/2025/08/Shwapno-Bari-Social-Activities.jpeg',
    contactHeroBg: '/uploads/2024/05/Image-1.jpg',
    aboutHeroBg: '/uploads/2024/05/Image-3.jpg',
    servicesHeroBg: '/uploads/2024/06/Image-1.jpg',
    servicesSidePhoto: '/uploads/2024/06/Image-2.jpg',
    contactShowcasePhoto: '/uploads/2025/08/Urban-Shishirkona-00-1024x682.jpg',
    duskVillaPhoto: '/uploads/2024/05/Image-2.jpg',
  },
};

export const HOME_STATUS_CARDS = [
  {
    state: 'Available' as const,
    icon: '/uploads/2024/04/Ongoing-icon.webp',
    title: 'Available',
    ctaLabel: 'View Available Properties',
    to: '/properties-list?project_state=Available',
    description:
      'Find your dream home today with Shwapno Bari Real Estate! We offer ready-to-move luxury flats, stylish apartments, elegant duplex homes, and prime residential plots in Dhaka’s most sought-after locations. All our properties are verified, secure, and designed to fit your lifestyle.',
  },
  {
    state: 'Upcoming' as const,
    icon: '/uploads/2024/04/Upcoming-Icon.webp',
    title: 'Upcoming',
    ctaLabel: 'View Upcoming Properties',
    to: '/properties-list?project_state=Upcoming',
    description:
      'Get ready for the future with Shwapno Bari Real Estate’s exclusive upcoming properties! Featuring modern apartments, luxury flats, and premium residential communities in Dhaka’s most desirable locations, our upcoming developments are designed to deliver style, comfort, and value.',
  },
  {
    state: 'Sold' as const,
    icon: '/uploads/2024/04/Completed-Icon.webp',
    title: 'Sold',
    ctaLabel: 'View Sold Properties',
    to: '/properties-list?project_state=Sold',
    description:
      'Our sold-out properties reflect the trust and satisfaction of our valued clients. From luxury apartments to premium plots, Shwapno Bari Real Estate has successfully delivered homes that combine quality, design, and comfort. Explore our past projects to see why so many families choose us for their dream home.',
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'consistency',
    index: '01',
    title: 'Consistency',
    description:
      'We believe in providing a consistently high level of service and maintaining unwavering standards in all aspects of our work and interaction. We strive for consistency in our communication, performance, and commitment to ensure each and every person receives the utmost reliability and professionalism.',
  },
  {
    id: 'disruptive',
    index: '02',
    title: 'Disruptive',
    description:
      'We embrace a disruptive mindset, challenging traditional practices and industry norms. By thinking differently and embracing innovation, we will revolutionise the real estate experience, bringing fresh perspectives and groundbreaking solutions, which is achieved by our commitment to staying at the forefront of industry trends and technologies.',
  },
  {
    id: 'execution',
    index: '03',
    title: 'Execution',
    description:
      'We prioritise effective execution, ensuring that plans are meticulously followed and turned into tangible results. With a focus on preparation, action and implementation, we carry out our strategies efficiently to achieve the most impactful outcome.',
  },
  {
    id: 'ownership',
    index: '04',
    title: 'Ownership',
    description:
      'We embrace a culture of ownership, where each team member takes responsibility for their actions, decisions, and outcomes. This encourages proactivity, accountability, and openly learning from mistakes. By embodying the value of ownership, we build trust, accountability, and a foundation for continuous improvement.',
  },
  {
    id: 'transparent',
    index: '05',
    title: 'Transparent',
    description:
      'Transparency is the foundation of our business. We believe in open and honest communication, providing clear and accurate information throughout the organisation. We operate with integrity and ensure that all interactions are transparent, building trust and cementing long-lasting relationships.',
  },
  {
    id: 'ambitious',
    index: '06',
    title: 'Ambitious',
    description:
      'Our commitment to excellence fuels our motivation to set ambitious goals and consistently push the boundaries of what is considered conventional. We embrace a culture of continuous improvement and innovation, constantly challenging ourselves to reach new heights and deliver extraordinary results.',
  },
];

// Preserves all distinct Home Serving Area neighborhoods (eliminating the live site's 3x "Uttara" duplication)
// and links directly to matching inventory/category routes.
export const SERVING_AREAS: ServingLocation[] = [
  { name: 'Gulshan', locationParam: 'gulshan', categorySlug: 'gulshan', zone: 'Diplomatic Enclave & North' },
  { name: 'Banani', locationParam: 'banani', categorySlug: 'banani', zone: 'Corporate & Residential Core' },
  { name: 'Bashundhara R/A', locationParam: 'bashundhara-properties', categorySlug: 'bashundhara-properties', zone: 'Planned Modern Living' },
  { name: 'Dhanmondi', locationParam: 'dhanmondi', categorySlug: 'dhanmondi', zone: 'Established Heritage South-West' },
  { name: 'Mohammadpur', locationParam: 'mohammadpur-properties', categorySlug: 'mohammadpur-properties', zone: 'Asad Avenue & Central West' },
  { name: 'Banasree', locationParam: 'banasree-properties', categorySlug: 'banasree-properties', zone: 'East Dhaka Main Road' },
  { name: 'Uttara', locationParam: 'uttara', categorySlug: 'uttara', zone: 'North Dhaka Growth Corridor' },
  { name: 'Mirpur DOHS', locationParam: 'mirpur', categorySlug: 'mirpur', zone: 'Secured Residential Enclave' },
  { name: 'Niketan', locationParam: 'niketan', categorySlug: 'niketan', zone: 'Gulshan Adjacent Community' },
  { name: 'Paltan', locationParam: 'paltan', categorySlug: 'paltan', zone: 'Central Commercial Hub' },
];

export const ABOUT_CONTENT = {
  heroTitle: 'About Us',
  introHeading: 'Bangladesh Property Experts',
  overviewParagraphs: [
    'Shwapno Bari Real Estate Ltd. is your most trusted Property Solutions Provider in Bangladesh. Since our inception in 2016, we are committed to providing the best Real Estate services and experiences to our Clients and Partners. We welcome you to Shwapno Bari Real Estate Ltd., a one-stop solution in the Real Estate marketplace of Bangladesh, with our Buy, Sell, and Exchange Offers. On our website, you can search for and buy your Dream Home from our meticulously handpicked collection of Residential Properties. Furthermore, you can also sell your old apartments or lands at the best possible price in the Real Estate market, rent out your apartments to trustworthy tenants, or even exchange your old property for new ones from us.',
    'At Shwapno Bari Real Estate Ltd. we always acknowledge the true worth of a property for a client. That is why our goal is to simplify the Property Solution Service of Bangladesh with the help of our legally vetted and carefully analysed Property Inventories. We possess the expertise and enthusiasm to facilitate smooth transactions by providing all the necessary documentation and legislative support to our clients.',
  ],
  vision:
    'Our vision is to be a world- class Estate Developer creating maximum value by providing quality homes and business. We aim to be a leader in innovation, technology, and sustainability, while remaining true to our core values and mission. We consistently strive to develop collaborative partnerships, based on transparency and mutual trust, which serve to build enduring client relationships. Our ultimate goal is to contribute to the growth and prosperity of the real estate industry in the country.',
  missionParagraphs: [
    'To build a develop environment- friendly Apartments, Commercial building & Land projects and property buy sale using the highest standard of safety, Architecture, Engineering & green technology.',
    'We’re dedicated to achieving our vision by creating a Reliable Property Marketplace by providing the best Real Estate Experiences to our clients through integrity in transactions, innovative approaches and customer convenience. We strive to create long-lasting relationships with our clients by providing them with personalized solutions that cater to their specific needs. Our ethics are built on our commitment to offer superior customer service, combining an entrepreneurial flair and bespoke service of a fast-growing organization.',
  ],
  socialActivities: {
    heading: 'Social Activities',
    badge: 'Rotary International District 3281 • Club ID No. 85915 • Chartered 12 June 2014',
    copy: 'Beside our profession both Director of Shwapno Bari Real Estate Ltd are involved in ‘’Rotary International’’. We are working at Rotary International District -3281Bangladesh. Club ID No: 85915 Chartered on 12 th June 2014. The name of our club is Rotary Club of ‘ Mukto Swadesh’ a renowned and exceptional club in Bangladesh. This club was established by ‘’ Front Line Freedom Fighters’’ in the war of liberation in 1971 of Bangladesh from Army, Navy, Airforce & Civil . As a Rotarian we develop service projects in seven broad areas: promoting peace, fighting disease, providing clean water, saving mothers and children through accessible health care and other services, supporting basic education and literacy, growing local economies, and protecting the environment. As a reward from Rotary International both are awarded RFSM (Rotary Foundation Sustainable Member) as well as PHF (Paul Harris Fellow) for Rotary activities, donation and many philanthropic activities.',
    image: '/uploads/2025/08/Shwapno-Bari-Social-Activities.jpeg',
    imageAlt: 'PHF Achievement — Rotary International Paul Harris Fellow Recognition',
  },
  workWithUs:
    'Shwapno Bari are committed to working with property developers to provide the best opportunities throughout the Bangladesh to our clients and customers. No matter what type of residential development, Shwapno Bari are always interested in working with new property developers.',
  bottomSummary:
    'is a leading property developer in Bangladesh, specializing in luxury apartments, commercial spaces, and premium land projects. Guided by innovation, sustainability, and world-class engineering, we deliver environment-friendly, safe, and modern developments that enhance lifestyles and communities. Our mission is to provide a reliable property marketplace with transparency, integrity, and personalized solutions tailored to each client’s needs. From buying and selling properties to delivering ready-to-move homes, we combine cutting-edge architecture, green technology, and superior customer service to set new benchmarks in the real estate industry. With every project, we aim to create maximum value, build long-lasting relationships, and contribute to the growth and prosperity of Bangladesh’s property sector. Whether you seek your dream home or a secure investment, Shwapno Bari Real Estate Ltd. is your trusted partner in real estate.',
  contactIntro:
    'Buying or selling a property is a life-changing decision. It can make or break you, so it has to be done via reliable hands. That is where Shwapno Bari steps in. We are here to make your property deal as efficient as possible with our trusted, experienced personnel.',
  contactCtaLine:
    'Call 01722926232 , or WhatsApp: +88017111 07238 or visit www.shwapnobari.com and check out our latest property deals now!',
  contactDocumentationNote:
    'Your property is in the most reliable hands with the professionals of Shwapnobari . Our expertise will definitely solve issues related to sale permission, registration, and mutation.',
};

