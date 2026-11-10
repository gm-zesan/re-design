import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E4E3DF] bg-white text-[#18191D] shadow-xs dark:border-white/10 dark:bg-[#1A1C21] dark:text-[#C9A46B]">
        <Compass className="h-8 w-8 text-[#8C6730] dark:text-[#C9A46B]" />
      </div>
      <p className="mt-6 font-mono-tech text-xs uppercase tracking-[0.22em] text-[#8C6730] dark:text-[#C9A46B]">
        HTTP 404 • Route Not Found
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[#18191D] dark:text-white sm:text-4xl">
        Page Not Available
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-[#52555E] dark:text-zinc-300">
        The requested URL does not match an active section on the KINGDOM GROUP portal. Explore our
        concerns, housing projects, career opportunities, or contact directory below.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#18191D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/concerns/housing"
          className="rounded-xl border border-[#E4E3DF] bg-white px-5 py-2.5 text-sm font-semibold text-[#141518] transition hover:border-[#18191D] dark:border-white/15 dark:bg-[#1A1C21] dark:text-white dark:hover:border-[#C9A46B]"
        >
          KINGDOM City
        </Link>
        <Link
          to="/contact"
          className="rounded-xl border border-[#E4E3DF] bg-white px-5 py-2.5 text-sm font-semibold text-[#141518] transition hover:border-[#18191D] dark:border-white/15 dark:bg-[#1A1C21] dark:text-white dark:hover:border-[#C9A46B]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

