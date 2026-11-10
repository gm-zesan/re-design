export interface TeamMember {
  slug: string;
  route: string;
  name: string;
  role: string;
  photo: string;
  alternatePhoto: string;
  phone: string;
  phoneTel: string;
  email: string;
  homeExcerptParagraphs: string[];
  homeQuote?: string;
  fullBioParagraphs: string[];
  credentials: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: 'profile-zakir',
    route: '/profile-zakir',
    name: 'Rtn. Md. Zakir Hossain phf',
    role: 'MANAGING DIRECTOR',
    photo: '/uploads/2025/07/WhatsApp-Image-2025-07-26-at-15.55.53_da44d487.jpg',
    alternatePhoto: '/uploads/2024/04/managing-director-e1714031641735.jpg',
    phone: '+880 1911398936',
    phoneTel: 'tel:+8801911398936',
    email: 'z.hossain71@yahoo.com',
    homeExcerptParagraphs: [
      'I have had a difficult start in my life. The road I had to take was not an easy one, but I believe that it was my duty to travel down this path as the sole breadwinner of my family.',
      'I lost my father while I was still doing my SSC and a great responsibility was placed on my shoulder from a young age. I struggled and spent many sleepless nights to become who I am. I truly believe that with hard work and dedication, anyone can be successful.',
    ],
    homeQuote: '“I BELIEVE DIFFICULT ROAD OFTEN LEADS TO BEAUTIFUL DESTINATION’’',
    fullBioParagraphs: [
      'I have had a difficult start in my life. The road I had to take was not an easy one, but I believe that it was my duty to travel down this path as the sole breadwinner of my family.',
      'I lost my father while I was still doing my SSC and a great responsibility was placed on my shoulder from a young age. I struggled and spent many sleepless nights to become who I am. I truly believe that with hard work and dedication, anyone can be successful.',
      'In real estate sector, I started my career from Rupayan Housing Estate Ltd. Then I worked some renowned & reputed Real Estate Company and apart from this I got scope of gather knowledge from many sections of real estate sector. In the light of experiences of 19 years I established a very reliable organization ‘ ’SHWAPNO BARI’’ Real Estate Ltd company.',
      'Beside real estate sector, I involved in various social activities. I was Secretary of Rotary Club of ‘’Mukto Swadesh’’ (established by front line freedom fighters) Rotary International District 3281. Volunteer & member of CRP & lifelong member of Quantum Foundation.',
      'I completed my Post Graduation Degree in the field of Management and MBA Major in Marketing. Now I am 52 years old, but I can still work like I did when I was 30.',
    ],
    credentials: [
      '19 Years Real Estate Sector Experience (former Rupayan Housing Estate Ltd.)',
      'Post Graduation in Management & MBA Major in Marketing',
      'Past Secretary, Rotary Club of Mukto Swadesh (District 3281) & Paul Harris Fellow (PHF)',
      'Volunteer & Member of CRP; Lifelong Member of Quantum Foundation',
    ],
  },
  {
    slug: 'profile-mahfuzur',
    route: '/profile-mahfuzur',
    name: 'Rtn. Sayed Mahfuzur Rahman phf',
    role: 'DIRECTOR',
    photo: '/uploads/2025/07/WhatsApp-Image-2025-07-26-at-15.56.15_4bc3f1fc.jpg',
    alternatePhoto: '/uploads/2024/04/director.jpg',
    phone: '+880 1711107238',
    phoneTel: 'tel:+8801711107238',
    email: 'mahfuzred@gmail.com',
    homeExcerptParagraphs: [
      'Rtn. Sayed Mahfuzur Rahman phf completed his MBA Degree in the field of Major in Marketing & Real Estate. Being a specialization in real estate & marketing side with his utmost guidance and dynamic leadership SHWAPNO BARI is performing as one of the leading companies in the field of property development and buy -sale business (Secondary Business). He is also the founder Director of ’SHWAPNO BARI’’ Real Estate Ltd company. In addition, the strategic thinking capability of Mr. Mahfuz helps SHWAPNO BARI to continuously improve its product innovation and offerings.',
      'Currently he is Secretary of Rotary Club of ‘’Mukto Swadesh’’ (established by front line freedom fighters) Rotary International District 3281. Vice President of Real Estate Agency Association of Bangladesh (REAAB) and involve in many social activities.',
    ],
    fullBioParagraphs: [
      'Rtn. Sayed Mahfuzur Rahman phf completed his MBA Degree in the field of Major in Marketing & Real Estate. Being a specialization in real estate & marketing side with his utmost guidance and dynamic leadership SHWAPNO BARI is performing as one of the leading companies in the field of property development and buy -sale business (Secondary Business). He is also the founder Director of ’SHWAPNO BARI’’ Real Estate Ltd company. In addition, the strategic thinking capability of Mr. Mahfuz helps SHWAPNO BARI to continuously improve its product innovation and offerings.',
      'Currently he is Secretary of Rotary Club of ‘’Mukto Swadesh’’ (established by front line freedom fighters) Rotary International District 3281. Vice President of Real Estate Agency Association of Bangladesh (REAAB) and involve in many social activities.',
    ],
    credentials: [
      'Founder Director, Shwapno Bari Real Estate Ltd.',
      'MBA Major in Marketing & Real Estate',
      'Vice President, Real Estate Agency Association of Bangladesh (REAAB)',
      'Secretary, Rotary Club of Mukto Swadesh (District 3281) & Paul Harris Fellow (PHF)',
    ],
  },
];

