import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAFAF8] dark:bg-[#0D1014] transition-colors duration-200">
      <div className="max-w-2xl mx-auto px-5 text-center space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DA2328]">Error 404</p>
        <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-[#111418] dark:text-[#F5F3EE]">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#5E646C] dark:text-[#A4A8AE] leading-relaxed">
          The page or property dossier you requested does not exist at this URL. Return to the homepage or browse our
          verified Dhaka property portfolio.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-[#0C0C0C] dark:bg-[#DA2328] hover:bg-[#DA2328] dark:hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.16em] inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return Home
          </Link>
          <Link
            to="/properties-list"
            className="px-6 py-3 border border-[#E5E2DC] dark:border-[#2A303A] hover:border-[#0C0C0C] dark:hover:border-[#DA2328] text-[#111418] dark:text-[#F5F3EE] text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
          >
            All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}

