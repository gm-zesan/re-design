import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY } from '../data/siteData';

export default function ThankYouPage() {
  const location = useLocation();
  const submission = location.state || null;

  return (
    <div>
      <PageHeader
        eyebrow="Submission Confirmation"
        title="Thank You"
        subtitle="Thank You — Our Team Will Contact You Soon."
        breadcrumbs={[{ label: 'Thank You' }]}
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="border border-stone bg-surface p-8 text-center shadow-editorial sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-crimson-soft text-crimson-ink">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <h2 className="mt-6 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
              Thank You Our Team Contact You Soon
            </h2>
            <p className="mt-3 text-base text-concrete">
              We have recorded your inquiry details. An advisor from{' '}
              {COMPANY.name} will reach out promptly during business hours.
            </p>

            {submission?.summary && (
              <div className="mt-8 border border-stone bg-alabaster p-5 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-ink">
                  {submission.source || 'Inquiry Reference'}
                </p>
                <dl className="mt-3 divide-y divide-stone/70 text-sm">
                  {Object.entries(submission.summary).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex justify-between gap-4 py-2"
                    >
                      <dt className="text-concrete">{key}</dt>
                      <dd className="font-semibold text-charcoal text-right">
                        {val}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-crimson-dark"
              >
                <span>Browse Portfolio</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-obsidian bg-surface px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
              >
                <span>Back to Home</span>
              </Link>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-xs text-concrete">
              <Phone className="h-3.5 w-3.5 text-crimson-ink" />
              <span>Urgent Inquiry? Call {COMPANY.topBar.phone}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

