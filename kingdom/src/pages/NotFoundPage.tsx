import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white text-[#2D3192] shadow-xs dark:border-white/10 dark:bg-[#141D35] dark:text-[#93C5FD]">
        <Compass className="h-8 w-8 text-[#2D3192] dark:text-[#93C5FD]" />
      </div>
      <p className="mt-6 font-mono-tech text-xs uppercase tracking-[0.22em] text-[#2D3192] dark:text-[#93C5FD]">
        HTTP 404 • Route Not Found
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[#2D3192] dark:text-white sm:text-4xl">
        Page Not Available
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-[#475569] dark:text-slate-300">
        The requested URL does not match an active section on the KINGDOM GROUP portal. Explore our
        concerns, housing projects, career opportunities, or contact directory below.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#2D3192] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1E2270] dark:bg-[#3B5BDB] dark:text-white dark:hover:bg-[#4C6EF5]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/concerns/housing"
          className="rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition hover:border-[#2D3192] dark:border-white/15 dark:bg-[#141D35] dark:text-white dark:hover:border-[#93C5FD]"
        >
          KINGDOM City
        </Link>
        <Link
          to="/contact"
          className="rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition hover:border-[#2D3192] dark:border-white/15 dark:bg-[#141D35] dark:text-white dark:hover:border-[#93C5FD]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

