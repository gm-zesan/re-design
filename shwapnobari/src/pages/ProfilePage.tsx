import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';
import { COMPANY } from '../data/company';

interface ProfilePageProps {
  memberSlug: 'profile-zakir' | 'profile-mahfuzur';
}

export function ProfilePage({ memberSlug }: ProfilePageProps) {
  const member = TEAM_MEMBERS.find((m) => m.slug === memberSlug) || TEAM_MEMBERS[0];
  const otherMember = TEAM_MEMBERS.find((m) => m.slug !== member.slug);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-[#0C0C0C] text-white overflow-hidden">
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
            <Link to="/about-us" className="hover:text-white">
              About Us
            </Link>
            <span>/</span>
            <span className="text-[#DA2328]">{member.role}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DA2328]">{member.role}</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-white mt-2">{member.name}</h1>
        </div>
      </section>

      {/* Main Dossier */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8] dark:bg-[#0D1014] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Portrait & Direct Contact Column */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-3">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full aspect-[4/5] object-cover object-top"
              />
            </div>

            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DA2328]">
                Direct Executive Reach
              </p>
              <a
                href={member.phoneTel}
                className="flex items-center gap-3 p-3.5 bg-[#0C0C0C] dark:bg-[#DA2328] hover:bg-[#DA2328] dark:hover:bg-[#B11B20] text-white text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="tabular-nums">{member.phone}</span>
              </a>
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-3 p-3.5 border border-[#E5E2DC] dark:border-[#2A303A] hover:border-[#0C0C0C] dark:hover:border-[#DA2328] text-[#111418] dark:text-[#F5F3EE] text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-[#DA2328] shrink-0" />
                <span className="truncate">{member.email}</span>
              </a>
            </div>
          </aside>

          {/* Biography Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#242A34] p-7 sm:p-10">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111418] dark:text-[#F5F3EE] mb-6">
                Executive Biography
              </h2>

              <div className="space-y-5 text-base text-[#363B42] dark:text-[#C5C8CE] leading-relaxed">
                {member.fullBioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
                {member.homeQuote && (
                  <blockquote className="my-6 p-5 bg-[#FAFAF8] dark:bg-[#191E27] border-l-4 border-[#DA2328] font-serif text-xl sm:text-2xl italic text-[#111418] dark:text-[#F5F3EE]">
                    {member.homeQuote}
                  </blockquote>
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-[#E5E2DC] dark:border-[#242A34]">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-[#DA2328] mb-4">
                  Key Roles &amp; Affiliations
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {member.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="flex items-start gap-2.5 text-sm text-[#111418] dark:text-[#EAE7E1] p-3 bg-[#FAFAF8] dark:bg-[#191E27] border border-[#F2EFE9] dark:border-[#242A34]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#DA2328] shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328]"
              >
                <ArrowLeft className="w-4 h-4" /> Back to About Us
              </Link>
              {otherMember && (
                <Link
                  to={otherMember.route}
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#DA2328] hover:underline"
                >
                  View Co-Leader: {otherMember.name} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

