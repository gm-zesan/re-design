import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { COMPANY } from '../data/company';
import { SERVICES_GRID } from '../data/services';

export function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-[#0C0C0C] text-white overflow-hidden">
        <img
          src={COMPANY.assets.servicesHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/75 to-[#0C0C0C]/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <nav className="text-xs uppercase tracking-[0.18em] text-white/60 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#DA2328]">Services</span>
          </nav>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-white">SERVICES</h1>
          <p className="mt-4 text-base text-white/80 max-w-2xl leading-relaxed">
            Our complete suite of real estate advisory, secondary market representation, developer collaborations,
            property management, and RAJUK/private legal documentation support.
          </p>
        </div>
      </section>

      {/* 9-Card Services Matrix */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8] dark:bg-[#0D1014] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">
              One-Stop Property Solution
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
              OUR SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_GRID.map((service, index) => (
              <div
                key={service.id}
                className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] hover:border-[#0C0C0C]/45 dark:hover:border-[#DA2328]/60 p-7 flex flex-col justify-between transition-all shadow-[0_2px_10px_rgba(12,12,12,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-[#FAFAF8] dark:bg-[#EFECE6] border border-[#E5E2DC] dark:border-[#2C333F] flex items-center justify-center p-2">
                      <img src={service.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-mono text-xs text-[#5E646C] dark:text-[#A4A8AE]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5E646C] dark:text-[#A4A8AE] leading-relaxed mb-5">{service.summary}</p>

                  <ul className="space-y-1.5 border-t border-[#F2EFE9] dark:border-[#242A34] pt-4">
                    {service.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-2 text-xs font-medium text-[#111418] dark:text-[#EAE7E1]">
                        <Check className="w-3.5 h-3.5 text-[#DA2328]" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.targetRoute}
                  className="mt-7 pt-4 border-t border-[#F2EFE9] dark:border-[#242A34] inline-flex items-center justify-between text-xs font-semibold uppercase tracking-[0.15em] text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328] transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Direct Consultation CTA */}
          <div className="mt-14 bg-[#0C0C0C] dark:bg-[#14181F] dark:border dark:border-[#242A34] text-white p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-serif text-3xl font-semibold text-white">
                Need Assistance With Sale Permission, Registration, or Mutation?
              </h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                Speak directly with our Banani advisory desk for legally vetted property inventory, valuation,
                exchange offers, or legislative documentation support.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/contact-us"
                className="px-6 py-3.5 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.16em]"
              >
                Send Inquiry
              </Link>
              <a
                href={COMPANY.phones.primaryTel}
                className="px-6 py-3.5 bg-white text-[#111418] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-[0.16em] inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#DA2328]" />
                <span>Call {COMPANY.phones.primary}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

