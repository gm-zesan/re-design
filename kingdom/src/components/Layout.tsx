import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F3] text-[#121629] transition-colors duration-200 dark:bg-[#0B0E1A] dark:text-[#F1EFE9]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#1E1B5E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children ?? <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
