import { useState, FormEvent } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Lock,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  FileSpreadsheet,
  ExternalLink,
  Building2,
  Sun,
  Moon,
} from 'lucide-react';
import { SITE_META } from '../data/siteData';
import { CONCERN_COMPANIES } from '../data/concernsData';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>('concerns');
  const [showQuickEfs, setShowQuickEfs] = useState(false);
  const [efsUser, setEfsUser] = useState('');
  const [efsPass, setEfsPass] = useState('');

  const handleQuickEfsSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowQuickEfs(false);
    navigate('/applications', {
      state: {
        efsAttemptUser: efsUser || 'Guest User',
      },
    });
    setEfsUser('');
    setEfsPass('');
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${isActive
      ? 'bg-[#2D3192] text-white shadow-sm dark:bg-[#3B5BDB]/25 dark:text-[#BFDBFE] dark:ring-1 dark:ring-[#60A5FA]/45'
      : 'text-[#0F172A] hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-[#BFDBFE]'
    }`;

  const isConcernsActive =
    location.pathname.startsWith('/concerns') ||
    location.pathname.toLowerCase().includes('content_details') ||
    location.pathname.toLowerCase().includes('content_builders') ||
    location.pathname.startsWith('/Home/');

  const isAboutActive =
    location.pathname === '/about' ||
    location.pathname === '/home/about_us' ||
    location.pathname === '/gallery' ||
    location.pathname === '/home/photo_gallery';

  const isCareerActive =
    location.pathname.startsWith('/career') ||
    location.pathname.startsWith('/team') ||
    location.pathname.startsWith('/notices') ||
    location.pathname.includes('team_members') ||
    location.pathname.includes('notice_view') ||
    location.pathname.includes('cv_submission_form');

  const isAppsActive =
    location.pathname === '/applications' || location.pathname === '/eFS';

  return (
    <>
      <div className="relative z-40">
        {/* 1. Top Corporate Utility Bar */}
        <div className="bg-[#0F1629] text-xs text-white/85 dark:bg-[#060A13]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a
                href={`tel:${SITE_META.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 font-medium text-white transition hover:text-[#93C5FD]"
              >
                <Phone className="h-3.5 w-3.5 text-[#93C5FD]" />
                <span className="tabular-nums">{SITE_META.primaryPhone}</span>
              </a>

              <a
                href={`mailto:${SITE_META.primaryEmail}`}
                className="inline-flex items-center gap-1.5 transition hover:text-[#93C5FD]"
              >
                <Mail className="h-3.5 w-3.5 text-[#93C5FD]" />
                <span>{SITE_META.primaryEmail}</span>
              </a>

              <a
                href={SITE_META.mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 transition hover:text-[#93C5FD] sm:inline-flex"
              >
                <MapPin className="h-3.5 w-3.5 text-[#93C5FD]" />
                <span>Get Direction (Mohakhali DOHS)</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowQuickEfs((prev) => !prev)}
                className="inline-flex items-center gap-1.5 rounded border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white transition hover:border-[#2D3192] hover:bg-white/10"
              >
                <FileSpreadsheet className="h-3 w-3 text-[#93C5FD]" />
                <span>e-File Quick Login</span>
              </button>

              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 rounded bg-[#3B5BDB]/20 px-2.5 py-1 text-[11px] font-semibold text-[#BFDBFE] ring-1 ring-[#2D3192]/40 transition hover:bg-[#3B5BDB] hover:text-white"
              >
                <Lock className="h-3 w-3" />
                <span>Admin</span>
              </Link>
            </div>
          </div>

          {/* Collapsible Header e-File System Quick Login Form (Preserves CompanyID=3, UserName, Password) */}
          {showQuickEfs && (
            <div className="border-t border-white/10 bg-[#141D35] px-4 py-2.5 sm:px-6 lg:px-8">
              <form
                onSubmit={handleQuickEfsSubmit}
                className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <span className="font-mono-tech rounded bg-white/10 px-2 py-0.5 text-[11px] text-[#93C5FD]">
                    eFS • CompanyID: 3
                  </span>
                  <span className="hidden md:inline">
                    Preserved header portal from origin site — submits to frontend portal preview.
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <input type="hidden" name="CompanyID" value="3" />
                  <input
                    type="text"
                    name="UserName"
                    value={efsUser}
                    onChange={(e) => setEfsUser(e.target.value)}
                    placeholder="UserName"
                    aria-label="e-File System Username"
                    className="w-36 rounded border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white placeholder:text-white/50 focus:border-[#93C5FD] focus:outline-none"
                  />
                  <input
                    type="password"
                    name="Password"
                    value={efsPass}
                    onChange={(e) => setEfsPass(e.target.value)}
                    placeholder="Password"
                    aria-label="e-File System Password"
                    className="w-36 rounded border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white placeholder:text-white/50 focus:border-[#93C5FD] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded bg-[#3B5BDB] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#4C6EF5]"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowQuickEfs(false)}
                    className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-white"
                    aria-label="Close e-File bar"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* 2. Bangla Eco-Housing Marquee Announcement Strip */}
        <div className="border-b border-[#E2E8F0] bg-[#F1F5F9] text-[#2D3192] dark:border-white/10 dark:bg-[#10182C] dark:text-[#F8FAFC]">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-1.5 sm:px-6 lg:px-8">

            <div className="marquee-fade-mask relative min-w-0 flex-1 overflow-hidden">
              <div className="animate-marquee-slow items-center gap-12 font-bengali text-xs font-semibold text-[#2D3192] dark:text-[#F8FAFC] sm:text-sm">
                <span>{SITE_META.banglaMarquee}</span>
                <span className="text-[#C8232C] dark:text-[#F87171]">•</span>
                <span>{SITE_META.tagline}</span>
                <span className="text-[#C8232C] dark:text-[#F87171]">•</span>
                <span>{SITE_META.banglaMarquee}</span>
                <span className="text-[#C8232C] dark:text-[#F87171]">•</span>
                <span>{SITE_META.tagline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Sticky Main Brand & Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-[#E2E8F0] bg-[#F8FAFC]/95 shadow-sm backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[#10182C]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand Identity (Clean transparent logo with no background container or border) */}
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={SITE_META.logoHeader}
              alt="KINGDOM GROUP Logo"
              className="h-10 w-auto object-contain transition dark:brightness-110 dark:hue-rotate-180 dark:invert sm:h-11"
            />
            <div className="hidden sm:block">
              <p className="font-display text-lg font-bold leading-none tracking-tight text-[#2D3192] dark:text-white">
                KINGDOM GROUP
              </p>
              <p className="mt-0.5 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#475569] dark:text-[#93C5FD]">
                Est. 2006 • Bangladesh
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${isAboutActive
                    ? 'bg-[#2D3192] text-white shadow-sm dark:bg-[#3B5BDB]/25 dark:text-[#BFDBFE] dark:ring-1 dark:ring-[#60A5FA]/45'
                    : 'text-[#0F172A] hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-[#BFDBFE]'
                  }`}
                aria-expanded={openDropdown === 'about'}
              >
                <span>About Us</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-75" />
              </button>

              {openDropdown === 'about' && (
                <div className="absolute left-0 top-full w-60 pt-2">
                  <div className="rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-xl dark:border-white/15 dark:bg-[#10182C]">
                    <Link
                      to="/about"
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#0F172A] transition hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white dark:hover:bg-white/10 dark:hover:text-[#93C5FD]"
                    >
                      About KINGDOM GROUP
                      <span className="mt-0.5 block text-xs font-normal text-[#475569] dark:text-slate-300">
                        Heritage, Leadership, Vision &amp; Mission
                      </span>
                    </Link>
                    <Link
                      to="/gallery"
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#0F172A] transition hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white dark:hover:bg-white/10 dark:hover:text-[#93C5FD]"
                    >
                      Photo Gallery
                      <span className="mt-0.5 block text-xs font-normal text-[#475569] dark:text-slate-300">
                        Community Aid &amp; Group Portfolio
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Our Concern Mega-Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('concerns')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'concerns' ? null : 'concerns')}
                className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${isConcernsActive
                    ? 'bg-[#2D3192] text-white shadow-sm dark:bg-[#3B5BDB]/25 dark:text-[#BFDBFE] dark:ring-1 dark:ring-[#60A5FA]/45'
                    : 'text-[#0F172A] hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-[#BFDBFE]'
                  }`}
                aria-expanded={openDropdown === 'concerns'}
              >
                <span>Our Concern</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-75" />
              </button>

              {openDropdown === 'concerns' && (
                <div className="absolute -left-24 top-full w-[680px] pt-2">
                  <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-2xl dark:border-white/15 dark:bg-[#10182C]">
                    <div className="mb-3 flex items-center justify-between border-b border-[#E2E8F0] pb-3 dark:border-white/10">
                      <div>
                        <p className="font-display text-base font-semibold text-[#2D3192] dark:text-white">
                          KINGDOM GROUP Sister Concerns (7 Entities)
                        </p>
                        <p className="text-xs text-[#475569] dark:text-slate-300">
                          Explore Housing, Builders, Construction, Trading, Software &amp; Philanthropy
                        </p>
                      </div>
                      <Link
                        to="/concerns"
                        onClick={() => setOpenDropdown(null)}
                        className="inline-flex items-center gap-1 rounded-lg bg-[#F1F5F9] px-3 py-1.5 text-xs font-semibold text-[#2D3192] transition hover:bg-[#2D3192] hover:text-white dark:bg-[#3B5BDB] dark:text-white dark:hover:bg-[#4C6EF5]"
                      >
                        <span>All Concerns</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {CONCERN_COMPANIES.map((company) => (
                        <div
                          key={company.slug}
                          className="rounded-xl border border-[#E2E8F0]/80 bg-[#F8FAFC] p-3 transition hover:border-[#2D3192]/40 hover:bg-white dark:border-white/10 dark:bg-[#10182C] dark:hover:border-[#93C5FD]/50 dark:hover:bg-[#192440]"
                        >
                          <Link
                            to={company.route}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-start gap-2.5"
                          >
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="h-9 w-11 shrink-0 object-contain dark:brightness-125 dark:drop-shadow-[0_0_0.5px_rgba(255,255,255,0.9)]"
                            />
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-[#0F172A] hover:text-[#2D3192] dark:text-white dark:hover:text-[#93C5FD]">
                                {company.name}
                              </p>
                              <p className="line-clamp-1 text-[11px] text-[#475569] dark:text-slate-300">
                                {company.sector}
                              </p>
                            </div>
                          </Link>

                          {company.subUnits.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1 border-t border-[#E2E8F0]/70 pt-2 dark:border-white/10">
                              {company.subUnits.map((unit) => (
                                <Link
                                  key={unit.name}
                                  to={company.route}
                                  onClick={() => setOpenDropdown(null)}
                                  className="rounded bg-white px-2 py-0.5 text-[11px] text-[#2D3192] ring-1 ring-[#E2E8F0] transition hover:bg-[#2D3192] hover:text-white dark:bg-white/10 dark:text-[#BFDBFE] dark:ring-white/15 dark:hover:bg-[#3B5BDB] dark:hover:text-white"
                                >
                                  {unit.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Applications Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('apps')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'apps' ? null : 'apps')}
                className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${isAppsActive
                    ? 'bg-[#2D3192] text-white shadow-sm dark:bg-[#3B5BDB]/25 dark:text-[#BFDBFE] dark:ring-1 dark:ring-[#60A5FA]/45'
                    : 'text-[#0F172A] hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-[#BFDBFE]'
                  }`}
                aria-expanded={openDropdown === 'apps'}
              >
                <span>Applications</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-75" />
              </button>

              {openDropdown === 'apps' && (
                <div className="absolute left-0 top-full w-72 pt-2">
                  <div className="rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-xl dark:border-white/15 dark:bg-[#10182C]">
                    <Link
                      to="/applications"
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#0F172A] transition hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white dark:hover:bg-white/10 dark:hover:text-[#93C5FD]"
                    >
                      e-File System (eFS) &amp; Suite
                      <span className="mt-0.5 block text-xs font-normal text-[#475569] dark:text-slate-300">
                        Corporate portal &amp; status overview
                      </span>
                    </Link>
                    <a
                      href="http://cyberdynetechnologyltd.com/scm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-[#0F172A] transition hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white dark:hover:bg-white/10 dark:hover:text-[#93C5FD]"
                    >
                      <span>Supply Chain Management (SCM)</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#475569] dark:text-slate-300" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Career Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('career')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'career' ? null : 'career')}
                className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${isCareerActive
                    ? 'bg-[#2D3192] text-white shadow-sm dark:bg-[#3B5BDB]/25 dark:text-[#BFDBFE] dark:ring-1 dark:ring-[#60A5FA]/45'
                    : 'text-[#0F172A] hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-[#BFDBFE]'
                  }`}
                aria-expanded={openDropdown === 'career'}
              >
                <span>Career</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-75" />
              </button>

              {openDropdown === 'career' && (
                <div className="absolute left-0 top-full w-64 pt-2">
                  <div className="rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-xl dark:border-white/15 dark:bg-[#10182C]">
                    <Link
                      to="/team"
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-[#0F172A] hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white dark:hover:bg-white/10"
                    >
                      KINGDOM Team Members
                    </Link>
                    <Link
                      to="/notices"
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-[#0F172A] hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white dark:hover:bg-white/10"
                    >
                      General Notice
                    </Link>
                    <Link
                      to="/career"
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-[#0F172A] hover:bg-[#F1F5F9] hover:text-[#2D3192] dark:text-white dark:hover:bg-white/10"
                    >
                      Job Circular
                    </Link>
                    <Link
                      to="/career/apply"
                      onClick={() => setOpenDropdown(null)}
                      className="mt-1 block rounded-lg bg-[#2D3192] px-3 py-2 text-sm font-semibold text-white hover:bg-[#1E2270] dark:bg-[#3B5BDB] dark:text-white dark:hover:bg-[#4C6EF5]"
                    >
                      CV Submission
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Theme Icon Switcher (Sun / Moon icon only) + CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#2D3192] transition hover:border-[#2D3192] hover:bg-[#F1F5F9] dark:border-white/15 dark:bg-white/10 dark:text-[#93C5FD] dark:hover:bg-white/20"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <Link
              to="/concerns/housing"
              className="hidden items-center gap-1.5 rounded-lg bg-[#2D3192] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1E2270] dark:bg-[#3B5BDB] dark:text-white dark:hover:bg-[#4C6EF5] sm:inline-flex"
            >
              <Building2 className="h-3.5 w-3.5 text-[#93C5FD] dark:text-white" />
              <span>KINGDOM City</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-lg border border-[#E2E8F0] bg-white p-2 text-[#0F172A] dark:border-white/15 dark:bg-white/10 dark:text-white lg:hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="max-h-[80vh] overflow-y-auto border-t border-[#E2E8F0] bg-white px-4 py-4 dark:border-white/10 dark:bg-[#10182C] lg:hidden">
            <div className="space-y-1.5">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#0F172A] hover:bg-[#F1F5F9] dark:text-white dark:hover:bg-white/10"
              >
                Home
              </Link>

              {/* Mobile About */}
              <div className="rounded-lg border border-[#E2E8F0]/70 dark:border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === 'about' ? null : 'about')
                  }
                  className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#0F172A] dark:text-white"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`h-4 w-4 transition ${mobileExpanded === 'about' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {mobileExpanded === 'about' && (
                  <div className="space-y-1 border-t border-[#E2E8F0]/70 bg-[#F8FAFC] px-3 py-2 dark:border-white/10 dark:bg-[#10182C]">
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded px-2 py-1.5 text-sm text-[#0F172A] hover:bg-white dark:text-white/90 dark:hover:bg-white/10"
                    >
                      About KINGDOM GROUP
                    </Link>
                    <Link
                      to="/gallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded px-2 py-1.5 text-sm text-[#0F172A] hover:bg-white dark:text-white/90 dark:hover:bg-white/10"
                    >
                      Photo Gallery
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Concerns */}
              <div className="rounded-lg border border-[#E2E8F0]/70 dark:border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === 'concerns' ? null : 'concerns')
                  }
                  className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#0F172A] dark:text-white"
                >
                  <span>Our Concern (7 Companies)</span>
                  <ChevronDown
                    className={`h-4 w-4 transition ${mobileExpanded === 'concerns' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {mobileExpanded === 'concerns' && (
                  <div className="space-y-1 border-t border-[#E2E8F0]/70 bg-[#F8FAFC] px-3 py-2 dark:border-white/10 dark:bg-[#10182C]">
                    <Link
                      to="/concerns"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded px-2 py-1.5 text-sm font-semibold text-[#2D3192] hover:bg-white dark:text-[#93C5FD] dark:hover:bg-white/10"
                    >
                      All Sister Concerns Overview
                    </Link>
                    {CONCERN_COMPANIES.map((company) => (
                      <Link
                        key={company.slug}
                        to={company.route}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded px-2 py-1.5 text-sm text-[#0F172A] hover:bg-white dark:text-white/90 dark:hover:bg-white/10"
                      >
                        {company.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Applications */}
              <div className="rounded-lg border border-[#E2E8F0]/70 dark:border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === 'apps' ? null : 'apps')
                  }
                  className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#0F172A] dark:text-white"
                >
                  <span>Applications</span>
                  <ChevronDown
                    className={`h-4 w-4 transition ${mobileExpanded === 'apps' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {mobileExpanded === 'apps' && (
                  <div className="space-y-1 border-t border-[#E2E8F0]/70 bg-[#F8FAFC] px-3 py-2 dark:border-white/10 dark:bg-[#10182C]">
                    <Link
                      to="/applications"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded px-2 py-1.5 text-sm text-[#0F172A] hover:bg-white dark:text-white/90 dark:hover:bg-white/10"
                    >
                      e-File System (eFS) &amp; Suite
                    </Link>
                    <a
                      href="http://cyberdynetechnologyltd.com/scm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded px-2 py-1.5 text-sm text-[#0F172A] hover:bg-white dark:text-white/90 dark:hover:bg-white/10"
                    >
                      <span>Supply Chain Management (SCM)</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Career */}
              <div className="rounded-lg border border-[#E2E8F0]/70 dark:border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === 'career' ? null : 'career')
                  }
                  className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#0F172A] dark:text-white"
                >
                  <span>Career &amp; People</span>
                  <ChevronDown
                    className={`h-4 w-4 transition ${mobileExpanded === 'career' ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {mobileExpanded === 'career' && (
                  <div className="space-y-1 border-t border-[#E2E8F0]/70 bg-[#F8FAFC] px-3 py-2 dark:border-white/10 dark:bg-[#10182C]">
                    <Link
                      to="/team"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded px-2 py-1.5 text-sm text-[#0F172A] hover:bg-white dark:text-white/90 dark:hover:bg-white/10"
                    >
                      KINGDOM Team Members
                    </Link>
                    <Link
                      to="/notices"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded px-2 py-1.5 text-sm text-[#0F172A] hover:bg-white dark:text-white/90 dark:hover:bg-white/10"
                    >
                      General Notice
                    </Link>
                    <Link
                      to="/career"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded px-2 py-1.5 text-sm text-[#0F172A] hover:bg-white dark:text-white/90 dark:hover:bg-white/10"
                    >
                      Job Circular
                    </Link>
                    <Link
                      to="/career/apply"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded px-2 py-1.5 text-sm font-semibold text-[#2D3192] hover:bg-white dark:text-[#93C5FD] dark:hover:bg-white/10"
                    >
                      CV Submission
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#0F172A] hover:bg-[#F1F5F9] dark:text-white dark:hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
