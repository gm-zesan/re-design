import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '../data/company';
import { PRIVACY_POLICY, TERMS_CONDITIONS } from '../data/legal';

interface LegalPageProps {
  docType: 'privacy' | 'terms';
}

export function LegalPage({ docType }: LegalPageProps) {
  const doc = docType === 'privacy' ? PRIVACY_POLICY : TERMS_CONDITIONS;

  return (
    <>
      {/* Header */}
      <section className="relative py-20 sm:py-24 bg-[#0C0C0C] text-white overflow-hidden">
        <img
          src={COMPANY.assets.servicesHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/80 to-[#0C0C0C]/65" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="text-xs uppercase tracking-[0.18em] text-white/60 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#DA2328]">{doc.title}</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-white">{doc.title}</h1>
          <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl">{doc.intro}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-18 bg-[#FAFAF8] dark:bg-[#0D1014] transition-colors duration-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sticky Section Index */}
          <aside className="lg:col-span-4 bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DA2328] mb-4">
              Document Clauses
            </p>
            <nav className="space-y-2 text-xs font-medium text-[#5E646C] dark:text-[#A4A8AE]">
              {doc.sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block py-1 hover:text-[#111418] dark:hover:text-white hover:translate-x-0.5 transition-all"
                >
                  {sec.heading}
                </a>
              ))}
            </nav>
          </aside>

          {/* Clauses */}
          <div className="lg:col-span-8 bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-7 sm:p-10 space-y-10">
            {doc.sections.map((sec) => (
              <div key={sec.id} id={sec.id} className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE] pb-2 border-b border-[#F2EFE9] dark:border-[#242A34]">
                  {sec.heading}
                </h2>

                {sec.paragraphs?.map((para, i) => (
                  <p key={i} className="text-sm sm:text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
                    {para}
                  </p>
                ))}

                {sec.bullets && (
                  <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-[#363B42] dark:text-[#C5C8CE]">
                    {sec.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                {sec.subsections && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    {sec.subsections.map((sub) => (
                      <div
                        key={sub.subheading}
                        className="p-4 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#242A34]"
                      >
                        <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-[#F5F3EE] mb-2.5">
                          {sub.subheading}
                        </h3>
                        <ul className="space-y-1.5 text-sm text-[#363B42] dark:text-[#C5C8CE]">
                          {sub.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#DA2328] mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {sec.hasPrivacyLink && (
                  <div className="pt-1">
                    <Link
                      to="/privacy-policy"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#DA2328] hover:underline"
                    >
                      Read Full Privacy Policy →
                    </Link>
                  </div>
                )}

                {sec.includeCompanyContactBlock && (
                  <div className="p-5 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#242A34] space-y-2.5 text-sm text-[#111418] dark:text-[#F5F3EE]">
                    <p className="font-bold uppercase tracking-wide">SHWAPNOBARI REAL ESTATE LTD.</p>
                    <p className="flex items-start gap-2 text-[#363B42] dark:text-[#C5C8CE]">
                      <MapPin className="w-4 h-4 text-[#DA2328] shrink-0 mt-0.5" />
                      <span>{COMPANY.address}</span>
                    </p>
                    <p className="flex items-center gap-2 text-[#363B42] dark:text-[#C5C8CE]">
                      <Phone className="w-4 h-4 text-[#DA2328] shrink-0" />
                      <a href={COMPANY.phones.primaryTel} className="hover:text-[#DA2328] tabular-nums">
                        {COMPANY.phones.primary}
                      </a>
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold">
                      <a
                        href={COMPANY.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328]"
                      >
                        Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={COMPANY.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328]"
                      >
                        Facebook Page <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <Link
                        to="/contact-us"
                        className="ml-auto px-4 py-1.5 bg-[#0C0C0C] dark:bg-[#DA2328] text-white uppercase tracking-wider"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

