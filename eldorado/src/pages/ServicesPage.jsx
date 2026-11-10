import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  HardHat,
  HeartHandshake,
  Info,
  MapPin,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ImageWithFallback from '../components/ImageWithFallback';
import { SERVICES } from '../data/siteData';

const PILLAR_ICONS = [MapPin, Compass, HardHat, HeartHandshake];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Core Service Pillars"
        title="We Provide Amazing Solutions"
        subtitle="End-to-end excellence across prime site selection, architectural space planning, disciplined engineering, and attentive client care."
        breadcrumbs={[{ label: 'Services' }]}
        image="/media/service/WhatsApp_Image_2022-04-24_at_5.46.44_PM.jpeg"
        badgeLabel="Advisory & Execution"
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 border border-bronze/40 bg-bronze-soft/60 p-4 text-xs sm:text-sm text-charcoal">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-bronze-ink" />
            <p>
              <strong>Audit Note:</strong> 3 of 4 service card images returned{' '}
              <code>404</code> on the origin server and are rendered below with
              clean architectural emblem frames. Copy is preserved faithfully
              (noting that Card 01 contains the verbatim wording published on
              the origin website).
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES.map((service, idx) => {
              const Icon = PILLAR_ICONS[idx] || Compass;
              return (
                <article
                  key={service.number}
                  className="flex flex-col overflow-hidden border border-stone bg-surface shadow-editorial"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-obsidian">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      available={service.imageAvailable}
                      fallbackTitle={`${service.number} — ${service.title}`}
                      fallbackNote="Origin service image returned 404"
                      className="h-full w-full"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 bg-obsidian/85 px-3 py-1.5 font-mono text-xs font-semibold text-white backdrop-blur-sm">
                      <Icon className="h-3.5 w-3.5 text-crimson-ink" />
                      PILLAR {service.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <h2 className="font-serif text-3xl font-semibold text-charcoal">
                      {service.title}
                    </h2>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-concrete">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="border border-stone bg-limestone p-8 text-charcoal transition-colors duration-200 dark:border-white/15 dark:bg-obsidian dark:text-white sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink dark:text-bronze-light">
                  Begin Your Journey
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold">
                  Looking to Purchase a Residence or Develop Your Land?
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  to="/buyer-query"
                  className="inline-flex items-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-crimson-dark"
                >
                  <span>Buyer Query</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/landowner-query"
                  className="inline-flex items-center gap-2 border border-obsidian bg-surface px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/25 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
                >
                  <span>Landowner Query</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

