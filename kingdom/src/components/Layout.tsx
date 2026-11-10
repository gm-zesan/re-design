import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9F8] text-[#141518] transition-colors duration-200 dark:bg-[#0C0D0F] dark:text-[#F4F3F0]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#18191D] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
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
