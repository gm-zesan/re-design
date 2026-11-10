import { Link } from 'react-router-dom';
import { ArrowRight, Info, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY, LEADERSHIP_MESSAGES } from '../data/siteData';

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        eyebrow="People & Leadership"
        title="Meet the Team"
        subtitle="Executive leadership and the multi-disciplinary team of architects, engineers, consultants, and sales professionals behind El Dorado Developments Ltd."
        breadcrumbs={[
          { label: 'About Us', to: '/about-us' },
          { label: 'Our Team' },
        ]}
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-start gap-3 border border-bronze/40 bg-bronze-soft/60 p-4 text-sm text-charcoal">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-bronze-ink" />
            <p>
              <strong>Directory Transparency Note:</strong> On the original{' '}
              <code>/team/</code> page, the staff carousel was empty (0 published
              profiles). Below are our verified executives documented on{' '}
              <Link to="/our-message" className="underline text-crimson-ink">
                /our-message/
              </Link>
              ; please join us via{' '}
              <Link to="/careers" className="underline text-crimson-ink">
                Careers
              </Link>{' '}
              or contact our office for departmental introductions.
            </p>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
            Board Leadership
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {LEADERSHIP_MESSAGES.map((leader) => (
              <div
                key={leader.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-stone bg-surface p-6 shadow-card"
              >
                <div className="w-36 shrink-0 border border-stone bg-limestone p-2">
                  <img
                    src={leader.image}
                    alt={`${leader.name} — ${leader.title}`}
                    className="aspect-[3/4] w-full object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson-ink">
                    {leader.title}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-charcoal">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-concrete">
                    {COMPANY.name}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-concrete line-clamp-4">
                    {leader.paragraphs[0]}
                  </p>
                  <Link
                    to="/our-message"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal hover:text-crimson-ink"
                  >
                    <span>Read Full Message</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Verified Team Statement from About Us / Chairman Message */}
          <div className="mt-12 border border-stone bg-surface p-8 shadow-card">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-obsidian bg-obsidian text-white dark:border-white/15">
                <Users className="h-5 w-5 text-bronze-light" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal">
                  Engineering, Architecture &amp; Advisory Departments
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete">
                  El Dorado Developments Ltd. maintains dedicated departments for
                  Architecture &amp; Engineering, Construction &amp; Procurement,
                  Commercial, Logistic &amp; Legal, Marketing &amp; Sales,
                  Finance &amp; Accounts, Business Development, and Customer
                  Service—working closely to deliver every development on time.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-2 bg-crimson px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-crimson-dark"
                  >
                    <span>View Open Positions (2)</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 border border-stone bg-alabaster px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal transition hover:border-crimson hover:text-crimson-ink"
                  >
                    <span>Contact Office</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

