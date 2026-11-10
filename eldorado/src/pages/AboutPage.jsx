import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { ABOUT_CONTENT, COMPANY } from '../data/siteData';

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow={`Established ${COMPANY.established} • ${COMPANY.groupLine}`}
        title={ABOUT_CONTENT.heading}
        subtitle="Pledged to deliver enduring residences with excellent quality, timely project handover, strong business ethics, and absolute transparency."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 space-y-5 text-base leading-relaxed text-concrete">
              {ABOUT_CONTENT.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'text-lg font-medium leading-relaxed text-charcoal'
                      : idx === 1
                        ? 'border-l-4 border-crimson bg-limestone px-5 py-4 font-serif text-2xl italic font-semibold text-charcoal'
                        : ''
                  }
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4">
                <h2 className="font-serif text-3xl font-semibold text-charcoal">
                  Company Objective
                </h2>
                <p className="mt-3 text-base text-concrete">
                  {ABOUT_CONTENT.objectiveIntro}
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {ABOUT_CONTENT.objectives.map((obj) => (
                    <li
                      key={obj}
                      className="flex items-start gap-2.5 border border-stone bg-surface p-3.5 text-sm font-medium text-charcoal"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-ink" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-base text-concrete">
                  {ABOUT_CONTENT.sustainabilityIntro}
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {ABOUT_CONTENT.sustainabilityGoals.map((goal) => (
                    <li
                      key={goal}
                      className="flex items-start gap-2.5 border border-stone bg-limestone p-3.5 text-sm font-medium text-charcoal"
                    >
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-bronze-ink" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-stone pt-8">
                <h2 className="font-serif text-2xl font-semibold text-charcoal sm:text-3xl">
                  {ABOUT_CONTENT.creationHeading}
                </h2>
                <p className="mt-2 text-sm text-concrete">
                  Guided by dedicated architects, engineers, and consultants
                  focused on earthquake and fire safety alongside contemporary
                  design — uniting structural construction with thoughtful urban
                  living creation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="border border-stone bg-surface p-3 shadow-editorial">
                <img
                  src={ABOUT_CONTENT.image}
                  alt="El Dorado Developments Ltd."
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="mt-3 grid grid-cols-3 divide-x divide-stone border-t border-stone pt-3 text-center">
                  <div>
                    <p className="font-serif text-2xl font-semibold text-charcoal">
                      2003
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-concrete">
                      Founded
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-semibold text-crimson-ink">
                      70+
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-concrete">
                      Handed Over
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-semibold text-charcoal">
                      20+ Yrs
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-concrete">
                      Experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-stone bg-obsidian p-6 text-white dark:border-white/15">
                <div className="flex items-center gap-2 text-bronze-light">
                  <Building2 className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Explore Further
                  </span>
                </div>
                <p className="mt-2 font-serif text-2xl font-semibold">
                  Rajbari Group &amp; Leadership
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <Link
                    to="/our-message"
                    className="inline-flex items-center justify-between border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-crimson hover:bg-crimson"
                  >
                    <span>Chairman &amp; MD Messages</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/our-business"
                    className="inline-flex items-center justify-between border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-crimson hover:bg-crimson"
                  >
                    <span>Rajbari Group Concerns</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-between border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-crimson hover:bg-crimson"
                  >
                    <span>View All 23 Portfolio Projects</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3 border border-stone bg-surface p-4 text-xs text-concrete">
                <Award className="h-5 w-5 shrink-0 text-crimson-ink" />
                <span>
                  Registered Member of <strong>REHAB</strong> &amp;{' '}
                  <strong>RAJUK Enlisted</strong> developer.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

