import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Phone,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { JOB_CIRCULARS } from '../data/editorial';

export default function JobDetailPage() {
  const { id } = useParams();
  const job = JOB_CIRCULARS.find((j) => String(j.id) === String(id));

  if (!job) {
    return (
      <div>
        <PageHeader
          eyebrow="Careers"
          title="Job Circular Not Found"
          subtitle="We could not locate a job posting matching this ID."
          breadcrumbs={[
            { label: 'Careers', to: '/careers' },
            { label: 'Not Found' },
          ]}
        />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Careers</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow={`Job Circular #${job.id} • ${job.businessArea}`}
        title={job.designation}
        subtitle={job.subtitle}
        breadcrumbs={[
          { label: 'Careers', to: '/careers' },
          { label: job.designation },
        ]}
        rightSlot={
          <span className="inline-flex items-center gap-2 bg-crimson px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Deadline: {job.deadline}
          </span>
        }
      />

      <section className="bg-alabaster py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Main Description */}
            <div className="lg:col-span-8 space-y-8 border border-stone bg-surface p-7 shadow-card sm:p-10">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  Role Overview
                </h2>
                <p className="mt-3 text-base leading-relaxed text-concrete">
                  {job.jobDescription}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  Additional Requirements
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm text-concrete">
                  {job.additionalRequirements.map((req) => (
                    <li key={req} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-ink" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  Job Responsibilities
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm text-concrete">
                  {job.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bronze-ink" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  Compensation &amp; Benefits
                </h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {job.benefits.map((b) => (
                    <span
                      key={b}
                      className="border border-stone bg-limestone px-4 py-2 text-xs font-semibold text-charcoal"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="border border-stone bg-surface p-7 shadow-editorial lg:sticky lg:top-28">
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  Job Summary
                </h2>
                <dl className="mt-5 divide-y divide-stone border-y border-stone text-sm">
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="flex items-center gap-2 text-concrete">
                      <Briefcase className="h-4 w-4 text-crimson-ink" />
                      <span>Employment Status</span>
                    </dt>
                    <dd className="font-semibold text-charcoal">
                      {job.employmentStatus}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="flex items-center gap-2 text-concrete">
                      <GraduationCap className="h-4 w-4 text-crimson-ink" />
                      <span>Education</span>
                    </dt>
                    <dd className="text-right font-semibold text-charcoal">
                      {job.education}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-concrete">Experience</dt>
                    <dd className="font-semibold text-charcoal">
                      {job.experience}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-concrete">Workplace</dt>
                    <dd className="text-right font-semibold text-charcoal">
                      {job.workplace}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="flex items-center gap-2 text-concrete">
                      <MapPin className="h-4 w-4 text-crimson-ink" />
                      <span>Location</span>
                    </dt>
                    <dd className="text-right font-semibold text-charcoal">
                      {job.location}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="flex items-center gap-2 text-concrete">
                      <Calendar className="h-4 w-4 text-crimson-ink" />
                      <span>Deadline</span>
                    </dt>
                    <dd className="font-semibold text-crimson-ink">
                      {job.deadline}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="flex items-center gap-2 text-concrete">
                      <Phone className="h-4 w-4 text-crimson-ink" />
                      <span>HR Contact</span>
                    </dt>
                    <dd className="font-semibold text-charcoal">
                      {job.contact}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 space-y-3">
                  <Link
                    to="/careers#apply-form"
                    state={{ prefillDesignation: job.designation }}
                    className="flex w-full items-center justify-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-crimson-dark"
                  >
                    <span>Apply For This Role</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/careers"
                    className="flex w-full items-center justify-center gap-2 border border-stone bg-alabaster px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal hover:border-charcoal"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>All Job Circulars</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

