import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY } from '../data/company';
import { SERVICE_DETAILS } from '../data/services';

interface ServiceDetailPageProps {
  serviceKey: 'service-buy' | 'service-sell' | 'service-develop' | 'service-exchange';
}

export function ServiceDetailPage({ serviceKey }: ServiceDetailPageProps) {
  const detail = SERVICE_DETAILS[serviceKey];
  const otherServices = Object.values(SERVICE_DETAILS).filter((item) => item.slug !== serviceKey);

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
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#DA2328]">{detail.heroTitle}</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">{detail.tagline}</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-white max-w-4xl">{detail.heroTitle}</h1>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8] dark:bg-[#0D1014] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-7 sm:p-10 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111418] dark:text-[#F5F3EE] leading-snug">
              {detail.heading}
            </h2>

            <div className="space-y-4 text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
              {detail.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[#F2EFE9] dark:border-[#242A34] space-y-4">
              <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#DA2328]">
                Advisory Scope
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {detail.capabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="p-5 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#E5E2DC] dark:border-[#242A34] flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#DA2328] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm text-[#111418] dark:text-[#F5F3EE]">{cap.label}</h4>
                      <p className="text-sm text-[#5E646C] dark:text-[#A4A8AE] mt-1 leading-relaxed">{cap.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="px-7 py-3.5 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.16em] inline-flex items-center gap-2 transition-colors"
              >
                <span>{detail.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/properties-list"
                className="px-7 py-3.5 border border-[#E5E2DC] dark:border-[#2A303A] hover:border-[#0C0C0C] dark:hover:border-[#DA2328] text-[#111418] dark:text-[#F5F3EE] text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
              >
                Browse Inventory
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-2">
              <img
                src={detail.sideImage}
                alt={detail.heading}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-[#0C0C0C] dark:bg-[#14181F] dark:border dark:border-[#242A34] text-white p-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DA2328]">
                Direct Hotline
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Speak directly with our Banani team or arrange a private consultation on {COMPANY.phones.primary} / WhatsApp {COMPANY.phones.whatsappDisplay}.
              </p>
              <a
                href={COMPANY.phones.primaryTel}
                className="w-full py-3 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="tabular-nums">Call {COMPANY.phones.primary}</span>
              </a>
            </div>

            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5E646C] dark:text-[#A4A8AE]">
                Other Advisory Tracks
              </p>
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  to={`/${other.slug}`}
                  className="flex items-center justify-between p-3 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#F2EFE9] dark:border-[#242A34] hover:border-[#DA2328] text-sm font-medium text-[#111418] dark:text-[#F5F3EE] hover:text-[#DA2328] transition-colors"
                >
                  <span>{other.heroTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

