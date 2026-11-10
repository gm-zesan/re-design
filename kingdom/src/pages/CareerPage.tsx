import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  FilePlus2,
  Info,
  Users,
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { POSITION_APPLIED_OPTIONS } from '../data/careersData';

const ROLE_GROUPS = [
  {
    title: 'Engineering & Civil Construction',
    examples: 'Project Director (Civil), Project Engineer, Site Engineer, Estimator, Auto Cad Operator',
  },
  {
    title: 'Architecture & Planning',
    examples: 'Architect, Assistant Architect, Estimator',
  },
  {
    title: 'Sales, Marketing & Client Relations',
    examples: 'GM/DGM (Sales & Marketing), Customer Care, Executive, Receptionist',
  },
  {
    title: 'Transport, Heavy Machinery & Fleet',
    examples: 'AGM / DGM / Manager (Transport & Logistic), Machine Operator, Mechanic, Driver',
  },
  {
    title: 'Corporate Management & Finance',
    examples: 'General Manager (Admin/Land), Audit Officer, PS to Managing Director, Store Keeper',
  },
  {
    title: 'Site Operations & Support',
    examples: 'Supervisor, massion, Wilder, Helper, Security Guard, Night Guard, Interne Student',
  },
];

export function CareerPage() {
  return (
    <div>
      <PageBanner
        eyebrow="Career Opportunities"
        title="Job Circulars & Careers"
        subtitle="Explore current recruitment announcements and submit your CV directly into the KINGDOM GROUP talent database across 56 specialized designations."
        breadcrumbs={[{ label: 'Career' }]}
        backgroundImage="/images/hero/stone-crusher.jpg"
        badge={`${POSITION_APPLIED_OPTIONS.length} Designations`}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Active Job Circular Status (Preserves Empty State Without Fabrication) */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E3DF] pb-4 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <Briefcase className="h-5 w-5 text-[#8C6730] dark:text-[#C9A46B]" />
                  <h2 className="font-display text-2xl font-semibold text-[#18191D] dark:text-white">
                    Active Job Circulars
                  </h2>
                </div>
                <span className="rounded-full bg-[#F2F1EE] px-3 py-1 font-mono-tech text-xs font-semibold text-[#18191D] dark:bg-[#C9A46B]/18 dark:text-[#DFC69B]">
                  0 Active Circulars
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-[#8C6730]/50 bg-[#F9F9F8] p-6 text-center dark:border-[#8C6730]/40 dark:bg-[#141518] sm:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F1EE] text-[#18191D] dark:bg-[#1E2026] dark:text-[#C9A46B]">
                  <Info className="h-6 w-6 text-[#8C6730] dark:text-[#C9A46B]" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#18191D] dark:text-white">
                  No Open Job Circulars Currently Posted
                </h3>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#52555E] dark:text-zinc-300">
                  The original KINGDOM GROUP{' '}
                  <code className="font-mono-tech">/career</code> circular board currently
                  contains zero active vacancy announcements. Prospective candidates across all{' '}
                  <strong className="dark:text-white">56 corporate, engineering, sales, and logistics roles</strong> are
                  invited to submit their resumes anytime via the official CV Submission form.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/career/apply"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#18191D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
                  >
                    <FilePlus2 className="h-4 w-4 text-[#C9A46B] dark:text-[#111215]" />
                    <span>Open CV Submission Form</span>
                  </Link>
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#E4E3DF] bg-white px-5 py-3 text-sm font-semibold text-[#141518] transition hover:border-[#18191D] dark:border-white/15 dark:bg-[#1A1C21] dark:text-white dark:hover:border-[#C9A46B]"
                  >
                    <Users className="h-4 w-4 text-[#8C6730] dark:text-[#C9A46B]" />
                    <span>View Team Members</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Department Taxonomy */}
            <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
              <h3 className="font-display text-xl font-semibold text-[#18191D] dark:text-white">
                Recruiting Disciplines Covered by CV Submission
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {ROLE_GROUPS.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] p-4 dark:border-white/10 dark:bg-[#141518]"
                  >
                    <p className="text-sm font-semibold text-[#18191D] dark:text-[#C9A46B]">{group.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#52555E] dark:text-zinc-300">
                      {group.examples}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Quick Application Sidebar */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-[#18191D] bg-[#18191D] p-6 text-white shadow-lg dark:border-white/10 dark:bg-[#141518] sm:p-8">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#C9A46B]">
                Direct Talent Intake
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold">
                Submit Your Resume for Future Openings
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Our digital CV submission form supports all 56 KINGDOM GROUP role categories, 64
                Bangladesh home districts, experience records, profile photo upload, CV attachment,
                and additional supporting documents.
              </p>

              <Link
                to="/career/apply"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A46B] px-5 py-3 text-sm font-semibold text-[#0C0D0F] transition hover:bg-[#DFBE88]"
              >
                <span>Proceed to CV Submission</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 dark:border-white/10 dark:bg-[#1A1C21]">
              <h4 className="font-display text-lg font-semibold text-[#18191D] dark:text-white">
                Related Career Links
              </h4>
              <div className="mt-3 space-y-2">
                <Link
                  to="/notices"
                  className="flex items-center justify-between rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-3 text-sm font-medium text-[#141518] transition hover:border-[#18191D] dark:border-white/10 dark:bg-[#141518] dark:text-white dark:hover:border-[#C9A46B]"
                >
                  <span>General Notice (czm/G/201/103)</span>
                  <ArrowRight className="h-4 w-4 text-[#8C6730] dark:text-[#C9A46B]" />
                </Link>
                <Link
                  to="/team"
                  className="flex items-center justify-between rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-3 text-sm font-medium text-[#141518] transition hover:border-[#18191D] dark:border-white/10 dark:bg-[#141518] dark:text-white dark:hover:border-[#C9A46B]"
                >
                  <span>KINGDOM Team Members</span>
                  <ArrowRight className="h-4 w-4 text-[#8C6730] dark:text-[#C9A46B]" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

