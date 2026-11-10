import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY } from '../data/siteData';

const VERIFIED_FAQS = [
  {
    q: 'When was El Dorado Developments Ltd. established and what is its parent group?',
    a: 'El Dorado Developments Ltd. was established in 2003 and is a sister concern of Rajbari Group, guided by the motto “Home Forever”. With over 20 years of industry experience, the company has handed over more than 70 projects.',
  },
  {
    q: 'Is El Dorado Developments Ltd. affiliated with REHAB and RAJUK?',
    a: 'Yes. El Dorado Developments Ltd. is a REHAB Member and RAJUK Enlisted developer, along with trade accreditations displayed under Members & Certifications.',
  },
  {
    q: 'Where are El Dorado’s residential and commercial projects located?',
    a: 'Published ongoing, upcoming, and handed-over developments span Bashundhara R/A (Blocks D, F, L, M), Jalshiri Abashon (Sectors 09 & 16), Siddheshwari / Ramna, Malibagh Chowdhury Para, Khilgaon, Nakhalpara, Bakshibazar, Mirbagh, Kafrul / Dhaka Cantonment, Mohammadpur, and Mirpur-2.',
  },
  {
    q: 'What apartment sizes are available across your projects?',
    a: 'Across our published portfolio, apartment sizes range from 960 Sft and 1,250–1,600 Sft urban units up to 2,850 Sft fair-face residences in Jalshiri Abashon and 3,500 Sft single-unit residences at Eldorado Starlight in Bashundhara R/A. The Buyer Query form supports requirements from 700 Sft to 3,200 Sft.',
  },
  {
    q: 'How can a landowner propose a joint-venture development?',
    a: 'Landowners can submit plot details (Area, Address, Land Size, Front Road Width, Freehold/Leasehold category, Land Facing, and contact information) through our Landowner Query page or reach us directly on +880-1314-300 800 or info@eldorado.com.bd.',
  },
  {
    q: 'Where are El Dorado Developments Ltd. offices located?',
    a: `Head Office: Floor C-9, Rupayan Shopping Square, Plot 2, Block G, Sayem Sobhan Anvir Road, Bashundhara R/A, Dhaka-1229. Corporate Office: House-323 (1st floor), Road-22, New DOHS, Mohakhali, Dhaka-1206. Canada Office: 3098 Danforth Ave, Suite 216, Toronto, ON M1L 1B1, Canada.`,
  },
];

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div>
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="FAQS"
        subtitle="Verified company, project, landowner partnership, and homebuyer inquiry facts compiled from El Dorado Developments Ltd."
        breadcrumbs={[{ label: 'FAQ' }]}
        image="/media/slider/WhatsApp_Image_2023-07-23_at_12.39.20.jpeg"
        badgeLabel="Verified Information"
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-start gap-3 border border-bronze/40 bg-bronze-soft/60 p-4 text-xs sm:text-sm text-charcoal">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-bronze-ink" />
            <p>
              <strong>Audit Transparency Note:</strong> On the original{' '}
              <code>/faq/</code> page, the four accordion items contained
              leftover website-template placeholder entries (about “Tuts+
              Premium affiliate program” and “Author resources”). Rather than
              leaving unrelated Latin placeholder copy, this page presents
              factual answers compiled strictly from El Dorado’s published About,
              Portfolio, Query, and Contact documentation.
            </p>
          </div>

          <div className="space-y-4">
            {VERIFIED_FAQS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={item.q}
                  className="border border-stone bg-surface shadow-card"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-serif text-xl font-semibold text-charcoal sm:text-2xl">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-crimson-ink transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-stone px-6 pb-6 pt-4 text-sm leading-relaxed text-concrete sm:text-base">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-stone bg-surface p-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                Have a Specific Project or Purchase Question?
              </h2>
              <p className="mt-1 text-sm text-concrete">
                Call our hotline {COMPANY.topBar.phone} or send us a message.
              </p>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-crimson px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-crimson-dark"
            >
              <span>Contact Advisory Desk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

