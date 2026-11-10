import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { WHY_CLIENTS_LOVE_US } from '../data/siteData';

const PILLARS = [
  {
    title: 'Partners Under One Roof',
    detail:
      'Every landowner, apartment buyer, consultant, and engineer connected with El Dorado Developments Ltd. is treated with long-term partnership respect.',
  },
  {
    title: 'Design & Construction Excellence',
    detail:
      'Modern construction technologies, careful supplier selection, software-aided virtual planning, and maximum earthquake & fire safety measures.',
  },
  {
    title: 'High-End Customer Service',
    detail:
      'Dedicated coordination through every touchpoint from initial query and agreement signing to timely project handover.',
  },
  {
    title: 'Integrity in Fair Business',
    detail:
      'Absolute transparency, committed delivery schedules since 2003, and clean legal documentation verified across 70+ completed projects.',
  },
];

export default function WhyWePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Why We"
        title="Why Clients Love Us"
        subtitle="Built on fair business integrity, design & construction excellence, and enduring relationships with our homeowners and landowners."
        breadcrumbs={[
          { label: 'About Us', to: '/about-us' },
          { label: 'Why We' },
        ]}
        image={WHY_CLIENTS_LOVE_US.image}
        badgeLabel="Fair Business Integrity"
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="border border-stone bg-surface p-3 shadow-editorial">
                <img
                  src={WHY_CLIENTS_LOVE_US.image}
                  alt={WHY_CLIENTS_LOVE_US.heading}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                Our Commitment
              </span>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                {WHY_CLIENTS_LOVE_US.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-concrete">
                {WHY_CLIENTS_LOVE_US.text}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/buyer-query"
                  className="inline-flex items-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-crimson-dark"
                >
                  <span>Buyer Query</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/landowner-query"
                  className="inline-flex items-center gap-2 border border-obsidian bg-surface px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
                >
                  <span>Landowner Partnership</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="border border-stone bg-surface p-6 shadow-card"
              >
                <CheckCircle2 className="h-5 w-5 text-crimson-ink" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

