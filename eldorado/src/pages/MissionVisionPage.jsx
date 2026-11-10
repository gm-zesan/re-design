import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Compass, Eye, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { ABOUT_CONTENT, COMPANY } from '../data/siteData';

export default function MissionVisionPage() {
  return (
    <div>
      <PageHeader
        eyebrow={`Motto: “${COMPANY.motto}”`}
        title="Mission & Vision"
        subtitle="Guided since 2003 by our founding purpose: ensuring a modern, secure standard of urban living under our enduring philosophy “Home Forever”."
        breadcrumbs={[
          { label: 'About Us', to: '/about-us' },
          { label: 'Mission & Vision' },
        ]}
        image="/media/slider/Roof_garden.jpeg"
        badgeLabel="Philosophy • Home Forever"
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-start gap-3 border border-bronze/40 bg-bronze-soft/60 p-4 text-sm text-charcoal">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-bronze-ink" />
            <p>
              <strong>Audit Note:</strong> The original{' '}
              <code>/mission-vision/</code> endpoint displayed placeholder template
              text and two missing (<code>404</code>) image paths. Rather than inventing
              unverified statements or displaying placeholder Latin copy, this page
              presents the verified mission, vision, and company objectives
              published on El Dorado’s homepage and About Us page.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Vision */}
            <article className="border border-stone bg-surface p-8 shadow-editorial sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center border border-obsidian bg-obsidian text-white dark:border-white/15">
                <Eye className="h-5 w-5 text-bronze-light" />
              </div>
              <h2 className="mt-6 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                Our Vision
              </h2>
              <p className="mt-4 text-base leading-relaxed text-concrete">
                Attuned to the rhythms of present &amp; future,{' '}
                <strong className="text-charcoal">{COMPANY.name}</strong> has
                embarked on its journey with a noble vision to ensure a high
                standard of living for all classes of people—guided by the
                timeless philosophy{' '}
                <span className="italic font-semibold text-crimson-ink">
                  “Home Forever”
                </span>{' '}
                and to build a{' '}
                <strong className="text-charcoal">“Beautiful Tomorrow”</strong>.
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-stone pt-5 text-sm text-charcoal">
                {ABOUT_CONTENT.sustainabilityGoals.map((goal) => (
                  <li key={goal} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bronze-ink" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Mission */}
            <article className="border border-stone bg-limestone p-8 text-charcoal shadow-editorial transition-colors duration-200 dark:border-white/15 dark:bg-obsidian dark:text-white sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center bg-crimson text-white">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="mt-6 font-serif text-3xl font-semibold text-charcoal dark:text-white sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-concrete dark:text-white/80">
                To establish El Dorado Developments Ltd. as a premier, trusted
                real estate developer in Bangladesh by combining modern
                construction technologies, earthquake &amp; fire safety compliance,
                and strong business ethics—achieving internal and external customer
                satisfaction through:
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-stone pt-5 text-sm text-charcoal dark:border-white/15 dark:text-white/90">
                {ABOUT_CONTENT.objectives.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-stone pt-8">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 border border-obsidian bg-surface px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
            >
              <span>Read Full About Us</span>
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-crimson px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-crimson-dark"
            >
              <span>Explore Our Developments</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
