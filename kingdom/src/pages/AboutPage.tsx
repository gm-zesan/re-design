import { Link } from 'react-router-dom';
import {
  Building,
  CheckCircle2,
  Compass,
  Info,
  Target,
  Users,
  ArrowRight,
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ABOUT_DATA } from '../data/siteData';

export function AboutPage() {
  return (
    <div>
      <PageBanner
        eyebrow="Corporate Profile"
        title={ABOUT_DATA.title}
        subtitle="Dedicated to Quality and Commitment — real estate development, land development, and public-private infrastructure excellence since 2006."
        breadcrumbs={[{ label: 'About Us' }]}
        backgroundImage={ABOUT_DATA.bannerImage}
        badge="Est. 2006"
      />

      {/* 1. Introduction & Business Status */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-2xs dark:border-white/10 dark:bg-[#141D35] sm:p-8">
              <div className="flex items-center gap-2.5 text-[#2D3192] dark:text-white">
                <Building className="h-5 w-5 text-[#2D3192] dark:text-[#93C5FD]" />
                <h2 className="font-display text-2xl font-semibold">Introduction</h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#475569] dark:text-slate-300">
                {ABOUT_DATA.introduction}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#E2E8F0] pt-5 dark:border-white/10 sm:grid-cols-3">
                <div>
                  <p className="font-display text-2xl font-bold text-[#2D3192] dark:text-[#93C5FD]">2006</p>
                  <p className="text-xs text-[#475569] dark:text-slate-300">Year Incorporated</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-[#2D3192] dark:text-[#93C5FD]">~700</p>
                  <p className="text-xs text-[#475569] dark:text-slate-300">Apartments Handed Over</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-display text-2xl font-bold text-[#2D3192] dark:text-[#93C5FD]">05 → 07</p>
                  <p className="text-xs text-[#475569] dark:text-slate-300">Group Companies</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-2xs dark:border-white/10 dark:bg-[#141D35] sm:p-8">
              <div className="flex items-center gap-2.5 text-[#2D3192] dark:text-white">
                <CheckCircle2 className="h-5 w-5 text-[#2D3192] dark:text-[#93C5FD]" />
                <h2 className="font-display text-2xl font-semibold">Business Status</h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#475569] dark:text-slate-300">
                {ABOUT_DATA.businessStatus}
              </p>
            </div>
          </div>

          {/* Management & Organogram + Vision Quick Preview */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9]/70 p-6 dark:border-white/10 dark:bg-[#141D35] sm:p-8">
              <div className="flex items-center gap-2.5 text-[#2D3192] dark:text-white">
                <Users className="h-5 w-5 text-[#2D3192] dark:text-[#93C5FD]" />
                <h2 className="font-display text-2xl font-semibold">Management</h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#0F172A] dark:text-[#F8FAFC]">
                {ABOUT_DATA.management}
              </p>

              <div className="mt-5 rounded-xl border border-[#2D3192]/35 bg-white p-4 dark:bg-[#10182C]">
                <div className="flex items-start gap-2.5">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#2D3192] dark:text-[#93C5FD]" />
                  <p className="text-xs leading-relaxed text-[#475569] dark:text-slate-300">
                    {ABOUT_DATA.managementOrganogramNote} View named personnel across the{' '}
                    <Link to="/team" className="font-semibold text-[#2D3192] underline dark:text-[#93C5FD]">
                      KINGDOM Team Members directory
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Header Campus Artwork Reference */}
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-3 dark:border-white/10 dark:bg-[#141D35]">
              <img
                src={ABOUT_DATA.bannerImage}
                alt={ABOUT_DATA.bannerCaption}
                className="aspect-[16/8] w-full rounded-xl object-cover"
              />
              <p className="px-2 pt-2.5 text-xs text-[#475569] dark:text-slate-300">
                Architectural institutional banner featured on the original About &amp; Builders
                pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Leadership Profiles: Managing Director & Founder Chairman */}
      <section className="border-y border-[#E2E8F0] bg-[#F1F5F9]/55 py-14 dark:border-white/10 dark:bg-[#10182C]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#2D3192] dark:text-[#93C5FD]">
              Executive Leadership
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#2D3192] dark:text-white">
              {ABOUT_DATA.managingDirector.sectionHeading}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Managing Director Card */}
            <article className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm dark:border-white/10 dark:bg-[#141D35]">
              <div className="grid sm:grid-cols-12">
                <div className="bg-[#F8FAFC] p-5 dark:bg-[#10182C] sm:col-span-5">
                  <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white dark:border-white/15">
                    <img
                      src={ABOUT_DATA.managingDirector.image}
                      alt={ABOUT_DATA.managingDirector.name}
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-display text-sm font-bold text-[#2D3192] dark:text-white">
                      {ABOUT_DATA.managingDirector.name}
                    </p>
                    <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[#2D3192] dark:text-[#93C5FD]">
                      {ABOUT_DATA.managingDirector.title}
                    </p>
                    <p className="text-[11px] font-medium text-[#475569] dark:text-slate-300">
                      {ABOUT_DATA.managingDirector.org}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-6 sm:col-span-7">
                  <div>
                    <span className="inline-block rounded-full bg-[#2D3192] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-white dark:bg-[#3B5BDB] dark:text-white">
                      Founder Managing Director
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-[#475569] dark:text-slate-300">
                      {ABOUT_DATA.managingDirector.bio}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-[#E2E8F0] pt-4 dark:border-white/10">
                    <Link
                      to="/concerns/foundation"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D3192] hover:underline dark:text-[#93C5FD]"
                    >
                      <span>Explore KINGDOM Foundation Social Initiatives</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Founder Chairman Profile (Preserved from Origin Team + About Archive) */}
            <article className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm dark:border-white/10 dark:bg-[#141D35]">
              <div className="grid sm:grid-cols-12">
                <div className="bg-[#F8FAFC] p-5 dark:bg-[#10182C] sm:col-span-5">
                  <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white dark:border-white/15">
                    <img
                      src={ABOUT_DATA.founderChairmanArchive.image}
                      alt={ABOUT_DATA.founderChairmanArchive.name}
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-display text-sm font-bold text-[#2D3192] dark:text-white">
                      {ABOUT_DATA.founderChairmanArchive.name}
                    </p>
                    <p className="font-mono-tech text-[10px] text-[#475569] dark:text-slate-300">
                      {ABOUT_DATA.founderChairmanArchive.credentials}
                    </p>
                    <p className="font-mono-tech mt-0.5 text-[10px] uppercase tracking-wider text-[#2D3192] dark:text-[#93C5FD]">
                      {ABOUT_DATA.founderChairmanArchive.title}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-6 sm:col-span-7">
                  <div>
                    <span className="inline-block rounded-full bg-[#F1F5F9] px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-[#2D3192] dark:bg-white/10 dark:text-[#93C5FD]">
                      Founder Chairman &amp; Team Directory Profile
                    </span>
                    <p className="mt-4 text-sm leading-relaxed text-[#475569] dark:text-slate-300">
                      {ABOUT_DATA.founderChairmanArchive.bio}
                    </p>
                  </div>
                  <p className="mt-5 border-t border-[#E2E8F0] pt-3 text-[11px] text-[#475569] dark:border-white/10 dark:text-slate-400">
                    {ABOUT_DATA.founderChairmanArchive.sourceNote}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Our Vision & Mission Split */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="font-mono-tech text-xs uppercase tracking-[0.22em] text-[#2D3192] dark:text-[#93C5FD]">
            Guiding Principles
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#2D3192] dark:text-white">
            Our Vision and Mission
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#2D3192]/35 bg-[#101A36] p-8 text-white shadow-lg dark:border-white/15">
            <div className="flex items-center gap-2.5 text-[#93C5FD]">
              <Compass className="h-6 w-6" />
              <h3 className="font-display text-2xl font-semibold text-white">Vision</h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-white/90">{ABOUT_DATA.vision}</p>
          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#141D35]">
            <div className="flex items-center gap-2.5 text-[#2D3192] dark:text-white">
              <Target className="h-6 w-6 text-[#2D3192] dark:text-[#93C5FD]" />
              <h3 className="font-display text-2xl font-semibold">Mission</h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-[#475569] dark:text-slate-300">{ABOUT_DATA.mission}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
