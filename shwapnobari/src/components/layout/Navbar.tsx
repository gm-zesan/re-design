import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, Moon, Phone, Search, Sun, X, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { SearchModal } from './SearchModal';
import { useTheme } from '../../context/ThemeContext';

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobilePropsExpanded, setMobilePropsExpanded] = useState(true);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [desktopPropsOpen, setDesktopPropsOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const propsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
    setDesktopPropsOpen(false);
    setDesktopServicesOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setDesktopPropsOpen(false);
        setDesktopServicesOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (propsRef.current && !propsRef.current.contains(e.target as Node)) {
        setDesktopPropsOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
      isActive ? 'text-[#DA2328]' : 'text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328]'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0D1014]/95 backdrop-blur-md border-b border-[#E5E2DC] dark:border-[#242A34] shadow-[0_6px_28px_rgba(12,12,12,0.06)] dark:shadow-[0_6px_28px_rgba(0,0,0,0.45)]'
            : 'bg-white dark:bg-[#0D1014] border-b border-[#E5E2DC] dark:border-[#242A34]'
        }`}
      >
        {/* Subtle top utility bar on desktop */}
        <div className="hidden lg:block bg-[#0C0C0C] dark:bg-[#07090C] text-[#D8D4CC] text-[12px] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 h-9 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={COMPANY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#DA2328]" />
                <span>{COMPANY.address}</span>
              </a>
              <span className="text-white/25">|</span>
              <span className="tracking-wide text-white/75">Est. {COMPANY.establishedYear} • Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-5">
              <a href={COMPANY.phones.primaryTel} className="hover:text-white transition-colors tabular-nums">
                {COMPANY.phones.primary}
              </a>
              <a href={`mailto:${COMPANY.emails.general}`} className="hover:text-white transition-colors">
                {COMPANY.emails.general}
              </a>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white/85 hover:text-[#DA2328] transition-colors"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0 group" aria-label="Shwapno Bari Home">
            <img
              src={isDark ? COMPANY.assets.logoWhite : COMPANY.assets.logoDark}
              alt="Shwapno Bari Real Estate Ltd."
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary Navigation">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about-us" className={navLinkClass}>
              About Us
            </NavLink>

            {/* Properties Dropdown */}
            <div
              ref={propsRef}
              className="relative"
              onMouseEnter={() => setDesktopPropsOpen(true)}
              onMouseLeave={() => setDesktopPropsOpen(false)}
            >
              <div className="flex items-center gap-1">
                <NavLink
                  to="/properties-list"
                  className={({ isActive }) =>
                    `text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isActive || location.pathname.startsWith('/properties')
                        ? 'text-[#DA2328]'
                        : 'text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328]'
                    }`
                  }
                >
                  Properties
                </NavLink>
                <button
                  type="button"
                  onClick={() => setDesktopPropsOpen((v) => !v)}
                  aria-label="Toggle Properties Submenu"
                  aria-expanded={desktopPropsOpen}
                  className="p-0.5 text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328] cursor-pointer"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${desktopPropsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {desktopPropsOpen && (
                <div className="absolute left-0 top-full pt-3 w-56 z-50">
                  <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#262C36] shadow-2xl py-2">
                    <Link
                      to="/properties-list"
                      className="block px-4 py-2.5 text-sm font-medium text-[#111418] dark:text-[#F5F3EE] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] hover:text-[#DA2328] border-b border-[#F2EFE9] dark:border-[#242A34]"
                    >
                      All Properties (6)
                    </Link>
                    <Link
                      to="/properties-list?project_state=Available"
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-[#111418] dark:text-[#EAE7E1] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] hover:text-[#DA2328]"
                    >
                      <span>Available</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 bg-[#ECF7F1] text-[#156E44] dark:bg-[#156E44]/25 dark:text-[#6EE7B7]">
                        Ready
                      </span>
                    </Link>
                    <Link
                      to="/properties-list?project_state=Upcoming"
                      className="block px-4 py-2.5 text-sm text-[#111418] dark:text-[#EAE7E1] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] hover:text-[#DA2328]"
                    >
                      Upcoming
                    </Link>
                    <Link
                      to="/properties-list?project_state=Sold"
                      className="block px-4 py-2.5 text-sm text-[#111418] dark:text-[#EAE7E1] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] hover:text-[#DA2328]"
                    >
                      Sold
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isActive || location.pathname.startsWith('/service-')
                        ? 'text-[#DA2328]'
                        : 'text-[#111418] dark:text-[#EAE7E1] hover:text-[#DA2328]'
                    }`
                  }
                >
                  Services
                </NavLink>
                <button
                  type="button"
                  onClick={() => setDesktopServicesOpen((v) => !v)}
                  aria-label="Toggle Services Submenu"
                  aria-expanded={desktopServicesOpen}
                  className="p-0.5 text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328] cursor-pointer"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${desktopServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {desktopServicesOpen && (
                <div className="absolute left-0 top-full pt-3 w-64 z-50">
                  <div className="bg-white dark:bg-[#14181F] border border-[#E5E2DC] dark:border-[#262C36] shadow-2xl py-2">
                    <Link
                      to="/services"
                      className="block px-4 py-2.5 text-sm font-medium text-[#111418] dark:text-[#F5F3EE] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] hover:text-[#DA2328] border-b border-[#F2EFE9] dark:border-[#242A34]"
                    >
                      All Services Overview
                    </Link>
                    <Link
                      to="/service-buy"
                      className="block px-4 py-2.5 text-sm text-[#111418] dark:text-[#EAE7E1] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] hover:text-[#DA2328]"
                    >
                      Buy Property
                    </Link>
                    <Link
                      to="/service-sell"
                      className="block px-4 py-2.5 text-sm text-[#111418] dark:text-[#EAE7E1] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] hover:text-[#DA2328]"
                    >
                      Sell Property
                    </Link>
                    <Link
                      to="/service-develop"
                      className="block px-4 py-2.5 text-sm text-[#111418] dark:text-[#EAE7E1] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] hover:text-[#DA2328]"
                    >
                      Develop Property
                    </Link>
                    <Link
                      to="/service-exchange"
                      className="block px-4 py-2.5 text-sm text-[#111418] dark:text-[#EAE7E1] hover:bg-[#FAFAF8] dark:hover:bg-[#1C212A] hover:text-[#DA2328]"
                    >
                      Exchange, Legal &amp; Acquisition
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/contact-us" className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2.5 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#171C24] text-[#111418] dark:text-[#F5F3EE] hover:border-[#0C0C0C] dark:hover:border-[#DA2328] transition-colors cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#F4B942]" /> : <Moon className="w-4 h-4 text-[#111418]" />}
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search Properties"
              className="flex items-center gap-2 px-3.5 py-2 border border-[#E5E2DC] dark:border-[#2A303A] bg-[#FAFAF8] dark:bg-[#171C24] hover:border-[#0C0C0C] dark:hover:border-[#DA2328] text-xs font-medium text-[#111418] dark:text-[#F5F3EE] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#DA2328]" />
              <span className="hidden sm:inline">Search</span>
            </button>

            <a
              href={COMPANY.phones.primaryTel}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#DA2328] hover:bg-[#B11B20] text-white text-xs font-semibold uppercase tracking-[0.12em] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="tabular-nums">Consult Now</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 border border-[#E5E2DC] dark:border-[#2A303A] text-[#111418] dark:text-[#F5F3EE] hover:border-[#0C0C0C] dark:hover:border-[#DA2328] cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Slide Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setMobileOpen(false)} />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-[#0F1318] shadow-2xl flex flex-col overflow-y-auto border-l border-[#E5E2DC] dark:border-[#242A34]"
          >
            <div className="px-6 py-5 border-b border-[#E5E2DC] dark:border-[#242A34] flex items-center justify-between">
              <img src={isDark ? COMPANY.assets.logoWhite : COMPANY.assets.logoDark} alt="Shwapno Bari" className="h-10 w-auto" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close Menu"
                className="p-2 border border-[#E5E2DC] dark:border-[#2A303A] text-[#111418] dark:text-[#F5F3EE] hover:bg-[#FAFAF8] dark:hover:bg-[#171C24] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-6 flex-1 space-y-1">
              <Link
                to="/"
                className="block py-3 text-base font-semibold uppercase tracking-wider text-[#111418] dark:text-[#F5F3EE] border-b border-[#F2EFE9] dark:border-[#242A34]"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="block py-3 text-base font-semibold uppercase tracking-wider text-[#111418] dark:text-[#F5F3EE] border-b border-[#F2EFE9] dark:border-[#242A34]"
              >
                About Us
              </Link>

              <div className="border-b border-[#F2EFE9] dark:border-[#242A34] py-2">
                <div className="flex items-center justify-between py-1">
                  <button
                    type="button"
                    onClick={() => navigate('/properties-list')}
                    className="text-base font-semibold uppercase tracking-wider text-[#111418] dark:text-[#F5F3EE] cursor-pointer"
                  >
                    Properties
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobilePropsExpanded((v) => !v)}
                    aria-label="Toggle Properties Links"
                    className="p-1 text-[#5E646C] dark:text-[#A4A8AE]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobilePropsExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
                {mobilePropsExpanded && (
                  <div className="pl-4 pb-2 space-y-2 mt-1">
                    <Link
                      to="/properties-list"
                      className="block py-1 text-sm text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328]"
                    >
                      All Properties
                    </Link>
                    <Link
                      to="/properties-list?project_state=Available"
                      className="block py-1 text-sm text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328]"
                    >
                      Available
                    </Link>
                    <Link
                      to="/properties-list?project_state=Upcoming"
                      className="block py-1 text-sm text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328]"
                    >
                      Upcoming
                    </Link>
                    <Link
                      to="/properties-list?project_state=Sold"
                      className="block py-1 text-sm text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328]"
                    >
                      Sold
                    </Link>
                  </div>
                )}
              </div>

              <div className="border-b border-[#F2EFE9] dark:border-[#242A34] py-2">
                <div className="flex items-center justify-between py-1">
                  <button
                    type="button"
                    onClick={() => navigate('/services')}
                    className="text-base font-semibold uppercase tracking-wider text-[#111418] dark:text-[#F5F3EE] cursor-pointer"
                  >
                    Services
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileServicesExpanded((v) => !v)}
                    aria-label="Toggle Services Links"
                    className="p-1 text-[#5E646C] dark:text-[#A4A8AE]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileServicesExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
                {mobileServicesExpanded && (
                  <div className="pl-4 pb-2 space-y-2 mt-1">
                    <Link
                      to="/service-buy"
                      className="block py-1 text-sm text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328]"
                    >
                      Buy Property
                    </Link>
                    <Link
                      to="/service-sell"
                      className="block py-1 text-sm text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328]"
                    >
                      Sell Property
                    </Link>
                    <Link
                      to="/service-develop"
                      className="block py-1 text-sm text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328]"
                    >
                      Develop Property
                    </Link>
                    <Link
                      to="/service-exchange"
                      className="block py-1 text-sm text-[#5E646C] dark:text-[#A4A8AE] hover:text-[#DA2328]"
                    >
                      Exchange &amp; Legal Support
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact-us"
                className="block py-3 text-base font-semibold uppercase tracking-wider text-[#111418] dark:text-[#F5F3EE] border-b border-[#F2EFE9] dark:border-[#242A34]"
              >
                Contact Us
              </Link>
            </div>

            <div className="px-6 py-5 bg-[#FAFAF8] dark:bg-[#14181F] border-t border-[#E5E2DC] dark:border-[#242A34] space-y-3">
              <p className="text-xs uppercase tracking-[0.15em] text-[#5E646C] dark:text-[#A4A8AE] font-semibold">
                Head Office — Banani
              </p>
              <p className="text-sm text-[#111418] dark:text-[#F5F3EE]">{COMPANY.address}</p>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={COMPANY.phones.primaryTel}
                  className="text-center py-2.5 bg-[#DA2328] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Call Office
                </a>
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2.5 bg-[#0C0C0C] dark:bg-[#222834] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

