import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Mail, Phone, ZoomIn } from 'lucide-react';
import { ABOUT_CONTENT, COMPANY } from '../data/company';
import { TEAM_MEMBERS } from '../data/team';
import { LightboxModal } from '../components/common/LightboxModal';

export function AboutPage() {
  const [phfOpen, setPhfOpen] = useState(false);

  return (
    <>
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#0C0C0C] text-white overflow-hidden">
        <img
          src={COMPANY.assets.aboutHeroBg}
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
            <span className="text-[#DA2328]">About Us</span>
          </nav>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-white">{ABOUT_CONTENT.heroTitle}</h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
            {COMPANY.brandName} — Trusted Property Solutions Provider in Bangladesh Since {COMPANY.establishedYear}.
          </p>
        </div>
      </section>

      {/* Bangladesh Property Experts */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0D1014] border-b border-[#E5E2DC] dark:border-[#242A34] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">
              Company Heritage
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
              {ABOUT_CONTENT.introHeading}
            </h2>
            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
              {ABOUT_CONTENT.overviewParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#E5E2DC] dark:border-[#242A34] p-2 bg-[#FAFAF8] dark:bg-[#14181F]">
              <img
                src={COMPANY.assets.aboutImage}
                alt="Bangladesh Property Experts — Shwapno Bari"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8] dark:bg-[#12161C] border-b border-[#E5E2DC] dark:border-[#242A34] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#171C24] border border-[#E5E2DC] dark:border-[#242A34] p-8 sm:p-10">
            <span className="text-xs font-mono tracking-widest text-[#DA2328] uppercase">01 • Forward Direction</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111418] dark:text-[#F5F3EE] mt-2 mb-5">
              Vision
            </h2>
            <p className="text-sm sm:text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
              {ABOUT_CONTENT.vision}
            </p>
          </div>

          <div className="bg-white dark:bg-[#171C24] border border-[#E5E2DC] dark:border-[#242A34] p-8 sm:p-10">
            <span className="text-xs font-mono tracking-widest text-[#DA2328] uppercase">02 • Operational Mandate</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111418] dark:text-[#F5F3EE] mt-2 mb-5">
              Mission
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
              {ABOUT_CONTENT.missionParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Activities & PHF Achievement */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0D1014] border-b border-[#E5E2DC] dark:border-[#242A34] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#DA2328] mb-3">
              <Award className="w-4 h-4" />
              <span>{ABOUT_CONTENT.socialActivities.badge}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
              {ABOUT_CONTENT.socialActivities.heading}
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
              {ABOUT_CONTENT.socialActivities.copy}
            </p>
          </div>

          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => setPhfOpen(true)}
              className="group relative block w-full border border-[#E5E2DC] dark:border-[#242A34] p-2 bg-[#FAFAF8] dark:bg-[#14181F] text-left cursor-pointer"
            >
              <img
                src={ABOUT_CONTENT.socialActivities.image}
                alt={ABOUT_CONTENT.socialActivities.imageAlt}
                className="w-full max-h-[520px] object-contain mx-auto"
              />
              <span className="mt-2 px-3 py-2 bg-white dark:bg-[#171C24] border border-[#E5E2DC] dark:border-[#242A34] flex items-center justify-between text-xs font-medium text-[#111418] dark:text-[#F5F3EE] group-hover:text-[#DA2328]">
                <span>{ABOUT_CONTENT.socialActivities.imageAlt}</span>
                <ZoomIn className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8] dark:bg-[#12161C] border-b border-[#E5E2DC] dark:border-[#242A34] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328] mb-2">
              Executive Direction
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
              Leadership Team
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5E646C] dark:text-[#A4A8AE] leading-relaxed">
              Our leadership team combines vision, expertise, and integrity to drive Shwapno Bari Real Estate Ltd.
              toward innovation, excellence, and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.slug}
                className="bg-white dark:bg-[#171C24] border border-[#E5E2DC] dark:border-[#242A34] p-6 sm:p-8 flex flex-col sm:flex-row gap-6"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full sm:w-44 aspect-[4/5] object-cover object-top shrink-0 bg-[#F2EFE9] dark:bg-[#1E242E]"
                />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#DA2328]">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111418] dark:text-[#F5F3EE] mt-1">
                      {member.name}
                    </h3>
                    <ul className="mt-4 space-y-1.5 text-xs text-[#5E646C] dark:text-[#A4A8AE]">
                      {member.credentials.slice(0, 3).map((cred) => (
                        <li key={cred} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DA2328] mt-1.5 shrink-0" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F2EFE9] dark:border-[#242A34] flex items-center justify-between">
                    <Link
                      to={member.route}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328]"
                    >
                      <span>View Biography</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Corporate Overview & Call/Email CTA */}
      <section className="py-16 sm:py-20 bg-[#0C0C0C] text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white">{COMPANY.brandName}</h2>
          <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed">{ABOUT_CONTENT.bottomSummary}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={COMPANY.phones.primaryTel}
              className="px-7 py-3.5 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.18em] inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY.phones.primary}</span>
            </a>
            <a
              href={`mailto:${COMPANY.emails.director}`}
              className="px-7 py-3.5 bg-white text-[#111418] hover:bg-[#F2EFE9] text-xs font-semibold uppercase tracking-[0.18em] inline-flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#DA2328]" />
              <span>Email {COMPANY.emails.director}</span>
            </a>
          </div>
        </div>
      </section>

      <LightboxModal
        images={[ABOUT_CONTENT.socialActivities.image]}
        currentIndex={0}
        title={ABOUT_CONTENT.socialActivities.imageAlt}
        isOpen={phfOpen}
        onClose={() => setPhfOpen(false)}
        onNavigate={() => {}}
      />
    </>
  );
}

