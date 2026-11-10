import { Quote } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { LEADERSHIP_MESSAGES } from '../data/siteData';

export default function MessagesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Executive Leadership"
        title="Our Messages"
        subtitle="Perspectives from our Chairman and Managing Director guiding El Dorado Developments Ltd. since inception."
        breadcrumbs={[
          { label: 'About Us', to: '/about-us' },
          { label: 'Our Message' },
        ]}
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
          {LEADERSHIP_MESSAGES.map((leader, idx) => (
            <article
              key={leader.id}
              className="border border-stone bg-surface p-6 shadow-editorial sm:p-10 lg:p-12"
            >
              <div
                className={`grid gap-8 lg:grid-cols-12 lg:items-start ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Portrait Card (framed modestly so original Chairman 137x180 photo stays sharp) */}
                <div className="lg:col-span-4">
                  <div className="mx-auto max-w-[230px] border border-stone bg-limestone p-3 lg:mx-0">
                    <div className="aspect-[3/4] overflow-hidden bg-surface">
                      <img
                        src={leader.image}
                        alt={`${leader.name} — ${leader.title}`}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="mt-3 border-t border-stone pt-3 text-center">
                      <h2 className="font-serif text-xl font-semibold text-charcoal">
                        {leader.name}
                      </h2>
                      <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-crimson-ink">
                        {leader.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-concrete">
                        El Dorado Developments Ltd.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Letter Body */}
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <Quote className="h-7 w-7 text-crimson-ink/50" />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink">
                      Executive Address
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                    {leader.heading}
                  </h3>
                  <div className="mt-4 h-px w-20 bg-crimson" />

                  <div className="mt-6 space-y-4 text-base leading-relaxed text-concrete">
                    {leader.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className={
                          pIdx === 0
                            ? 'font-medium text-charcoal text-lg'
                            : undefined
                        }
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

