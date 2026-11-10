export interface LegalSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  subsections?: { subheading: string; items: string[] }[];
  bullets?: string[];
  hasPrivacyLink?: boolean;
  includeCompanyContactBlock?: boolean;
}

export const PRIVACY_POLICY = {
  title: 'Privacy Policy',
  intro:
    'At SHWAPNOBARI REAL ESTATE LTD., your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our services, website, or communication channels. By accessing or using https://shwapnobari.com, you agree to the practices described in this policy.',
  sections: [
    {
      id: 'information-we-collect',
      heading: '1. Information We Collect',
      paragraphs: ['We may collect the following types of information from you:'],
      subsections: [
        {
          subheading: 'a. Personal Information',
          items: [
            'Name',
            'Phone number',
            'Email address',
            'Location or address (if provided)',
            'Any other information you voluntarily submit via our contact forms, emails, or phone calls',
          ],
        },
        {
          subheading: 'b. Non-Personal Information',
          items: [
            'Browser type and version',
            'Device type',
            'IP address',
            'Website usage data (via cookies and analytics tools)',
          ],
        },
      ],
    },
    {
      id: 'how-we-use',
      heading: '2. How We Use Your Information',
      paragraphs: [
        'We use your information to:',
        'We do not sell or rent your personal information to third parties.',
      ],
      bullets: [
        'Respond to your inquiries or requests',
        'Provide property details and real estate services',
        'Schedule property visits or meetings',
        'Improve our website and services',
        'Send you occasional updates or promotional offers (only with your consent)',
      ],
    },
    {
      id: 'cookies',
      heading: '3. Cookies and Analytics',
      paragraphs: [
        'Our website may use cookies to improve your browsing experience and analyze website traffic. You can choose to accept or decline cookies through your browser settings.',
        'We may also use third-party analytics tools such as Google Analytics to understand website performance and visitor behavior.',
      ],
    },
    {
      id: 'third-party',
      heading: '4. Third-Party Links',
      paragraphs: [
        'Our website may contain links to external sites (e.g., Google Maps, Facebook). We are not responsible for the privacy practices or content of those websites. We encourage you to read their privacy policies separately.',
      ],
    },
    {
      id: 'data-security',
      heading: '5. Data Security',
      paragraphs: [
        'We take appropriate measures to secure your personal information through reasonable physical, technical, and administrative safeguards. However, no method of internet transmission is 100% secure.',
      ],
    },
    {
      id: 'your-rights',
      heading: '6. Your Rights',
      paragraphs: ['You have the right to:'],
      bullets: [
        'Request access to the personal information we hold about you',
        'Request correction or deletion of your information',
        'Withdraw your consent for marketing communications at any time',
        'Contact us to limit or stop processing your data',
      ],
    },
    {
      id: 'changes',
      heading: '7. Changes to This Policy',
      paragraphs: [
        'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated “Effective Date.”',
      ],
    },
    {
      id: 'contact',
      heading: '8. Contact Us',
      paragraphs: ['If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us:'],
      includeCompanyContactBlock: true,
    },
  ] as LegalSection[],
};

export const TERMS_CONDITIONS = {
  title: 'Terms & Conditions',
  intro:
    'Welcome to SHWAPNOBARI REAL ESTATE LTD. These Terms & Conditions (“Terms”) govern your use of our website https://shwapnobari.com and any of our services, content, or communications. By accessing our website or engaging with our services, you agree to comply with and be bound by these Terms.',
  sections: [
    {
      id: 'company-information',
      heading: '1. Company Information',
      includeCompanyContactBlock: true,
    },
    {
      id: 'use-of-website',
      heading: '2. Use of Our Website',
      paragraphs: ['By using this website, you agree that:'],
      bullets: [
        'You are at least 18 years old or accessing under the supervision of a legal guardian.',
        'You will use this website only for lawful purposes.',
        'You will not attempt to disrupt, misuse, or interfere with the site’s functionality, security, or content.',
      ],
    },
    {
      id: 'property-listings',
      heading: '3. Property Listings and Information',
      paragraphs: [
        'All property listings, descriptions, images, prices, and availability on our website are for informational purposes only. While we strive for accuracy, SHWAPNOBARI REAL ESTATE LTD. does not guarantee the completeness, reliability, or current availability of any listed property. We reserve the right to modify or withdraw listings without prior notice.',
      ],
    },
    {
      id: 'user-responsibilities',
      heading: '4. User Responsibilities',
      paragraphs: ['When submitting inquiries, contact forms, or information on our website:'],
      bullets: [
        'You agree to provide accurate and truthful details.',
        'You are solely responsible for any content you submit through our forms or communication channels.',
      ],
    },
    {
      id: 'intellectual-property',
      heading: '5. Intellectual Property',
      paragraphs: [
        'All content on this website, including text, images, logos, videos, graphics, and design, is the property of SHWAPNOBARI REAL ESTATE LTD. and protected under copyright and intellectual property laws. You may not copy, reuse, distribute, or modify any content without prior written consent.',
      ],
    },
    {
      id: 'third-party-links',
      heading: '6. Links to Third-Party Sites',
      paragraphs: [
        'Our website may include links to external websites (e.g., Google Maps, Facebook). These links are provided for convenience only. SHWAPNOBARI REAL ESTATE LTD. has no control over third-party sites and is not responsible for their content or privacy policies.',
      ],
    },
    {
      id: 'limitation-liability',
      heading: '7. Limitation of Liability',
      paragraphs: [
        'SHWAPNOBARI REAL ESTATE LTD. shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages resulting from:',
      ],
      bullets: [
        'Use or inability to use the website',
        'Reliance on any information obtained from the website',
        'Unauthorized access or alterations of your data or transmissions',
      ],
    },
    {
      id: 'privacy-policy-link',
      heading: '8. Privacy Policy',
      paragraphs: [
        'Your use of our website is also governed by our Privacy Policy. We are committed to protecting your personal data in accordance with applicable laws.',
      ],
      hasPrivacyLink: true,
    },
    {
      id: 'changes-terms',
      heading: '9. Changes to These Terms',
      paragraphs: [
        'We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website following any changes constitutes acceptance of those updates.',
      ],
    },
    {
      id: 'governing-law',
      heading: '10. Governing Law',
      paragraphs: [
        'These Terms & Conditions shall be governed by and construed in accordance with the laws of the People’s Republic of Bangladesh. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Dhaka, Bangladesh.',
      ],
    },
    {
      id: 'contact-us',
      heading: '11. Contact Us',
      paragraphs: ['If you have any questions or concerns regarding these Terms & Conditions, feel free to contact us at:'],
      includeCompanyContactBlock: true,
    },
  ] as LegalSection[],
};

