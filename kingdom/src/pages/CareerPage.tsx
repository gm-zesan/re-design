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
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#141D35] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E8F0] pb-4 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <Briefcase className="h-5 w-5 text-[#2D3192] dark:text-[#93C5FD]" />
                  <h2 className="font-display text-2xl font-semibold text-[#2D3192] dark:text-white">
                    Active Job Circulars
                  </h2>
                </div>
                <span className="rounded-full bg-[#F1F5F9] px-3 py-1 font-mono-tech text-xs font-semibold text-[#2D3192] dark:bg-[#3B5BDB]/20 dark:text-[#BFDBFE]">
                  0 Active Circulars
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-[#2D3192]/50 bg-[#F8FAFC] p-6 text-center dark:border-[#60A5FA]/35 dark:bg-[#10182C] sm:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F1F5F9] text-[#2D3192] dark:bg-[#192440] dark:text-[#93C5FD]">
                  <Info className="h-6 w-6 text-[#2D3192] dark:text-[#93C5FD]" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#2D3192] dark:text-white">
                  No Open Job Circulars Currently Posted
                </h3>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#475569] dark:text-slate-300">
                  The original KINGDOM GROUP{' '}
                  <code className="font-mono-tech">/career</code> circular board currently
                  contains zero active vacancy announcements. Prospective candidates across all{' '}
                  <strong className="dark:text-white">56 corporate, engineering, sales, and logistics roles</strong> are
                  invited to submit their resumes anytime via the official CV Submission form.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/career/apply"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#2D3192] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1E2270] dark:bg-[#3B5BDB] dark:text-white dark:hover:bg-[#4C6EF5]"
                  >
                    <FilePlus2 className="h-4 w-4 text-[#93C5FD] dark:text-white" />
                    <span>Open CV Submission Form</span>
                  </Link>
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#2D3192] dark:border-white/15 dark:bg-[#141D35] dark:text-white dark:hover:border-[#93C5FD]"
                  >
                    <Users className="h-4 w-4 text-[#2D3192] dark:text-[#93C5FD]" />
                    <span>View Team Members</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Department Taxonomy */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#141D35] sm:p-8">
              <h3 className="font-display text-xl font-semibold text-[#2D3192] dark:text-white">
                Recruiting Disciplines Covered by CV Submission
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {ROLE_GROUPS.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#10182C]"
                  >
                    <p className="text-sm font-semibold text-[#2D3192] dark:text-[#93C5FD]">{group.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#475569] dark:text-slate-300">
                      {group.examples}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Quick Application Sidebar */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-[#2D3192]/35 bg-[#101A36] p-6 text-white shadow-lg dark:border-white/10 dark:bg-[#10182C] sm:p-8">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#93C5FD]">
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
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3B5BDB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4C6EF5]"
              >
                <span>Proceed to CV Submission</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 dark:border-white/10 dark:bg-[#141D35]">
              <h4 className="font-display text-lg font-semibold text-[#2D3192] dark:text-white">
                Related Career Links
              </h4>
              <div className="mt-3 space-y-2">
                <Link
                  to="/notices"
                  className="flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#0F172A] transition hover:border-[#2D3192] dark:border-white/10 dark:bg-[#10182C] dark:text-white dark:hover:border-[#93C5FD]"
                >
                  <span>General Notice (czm/G/201/103)</span>
                  <ArrowRight className="h-4 w-4 text-[#2D3192] dark:text-[#93C5FD]" />
                </Link>
                <Link
                  to="/team"
                  className="flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#0F172A] transition hover:border-[#2D3192] dark:border-white/10 dark:bg-[#10182C] dark:text-white dark:hover:border-[#93C5FD]"
                >
                  <span>KINGDOM Team Members</span>
                  <ArrowRight className="h-4 w-4 text-[#2D3192] dark:text-[#93C5FD]" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

