import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function NotFoundPage() {
  return (
    <div>
      <PageHeader
        eyebrow="404 Error"
        title="Page Not Found"
        subtitle="The page you requested does not exist on this portal."
        breadcrumbs={[{ label: 'Not Found' }]}
      />

      <section className="bg-alabaster py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center border border-stone bg-surface text-crimson-ink shadow-card">
            <Compass className="h-6 w-6" />
          </div>
          <h2 className="mt-6 font-serif text-3xl font-semibold text-charcoal">
            Return to Verified Developments
          </h2>
          <p className="mt-3 text-sm text-concrete">
            Explore our ongoing, upcoming, and handed-over portfolio or return
            to the El Dorado homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-obsidian bg-surface px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
            >
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

