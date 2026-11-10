import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  ShieldCheck,
  Sun,
  X,
} from 'lucide-react';
import { COMPANY } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about-us',
    children: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Our Message', to: '/our-message' },
      { label: 'Our Business', to: '/our-business' },
      { label: 'Mission & Vision', to: '/mission-vision' },
      { label: 'Why Clients Love Us', to: '/why-we' },
      { label: 'Our Team', to: '/team' },
    ],
  },
  {
    label: 'Project',
    to: '/projects',
    children: [
      { label: 'All Projects (23)', to: '/projects' },
      { label: 'Ongoing Projects (10)', to: '/ongoing-project' },
      { label: 'Upcoming Projects (3)', to: '/upcomming-project' },
      { label: 'Handover Projects (10)', to: '/handover-project' },
      { label: 'Photo Gallery (19)', to: '/gallery' },
    ],
  },
  { label: 'Services', to: '/service' },
  {
    label: 'Query',
    to: '/buyer-query',
    children: [
      { label: 'Landowner Query', to: '/landowner-query' },
      { label: 'Buyer Query', to: '/buyer-query' },
      { label: 'Careers & Openings', to: '/careers' },
      { label: 'FAQs', to: '/faq' },
    ],
  },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact-us' },
];

const FOOTER_COMPANY_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Our Message', to: '/our-message' },
  { label: 'Our Business', to: '/our-business' },
  { label: 'Team', to: '/team' },
  { label: 'Why We', to: '/why-we' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Mission Vision', to: '/mission-vision' },
  { label: 'Terms & Condition', to: '/terms-condition' },
  { label: 'Ongoing Projects', to: '/ongoing-project' },
  { label: 'Upcoming Projects', to: '/upcomming-project' },
  { label: 'Handover Projects', to: '/handover-project' },
  { label: 'Services', to: '/service' },
  { label: 'Landowner Query', to: '/landowner-query' },
  { label: 'Buyer Query', to: '/buyer-query' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const cleaned = newsletterEmail.trim();
    if (!cleaned || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) {
      setNewsletterError('Please enter a valid email address.');
      setNewsletterMsg('');
      return;
    }
    setNewsletterError('');
    setNewsletterMsg(
      `Thank you — ${cleaned} has been noted for El Dorado project updates.`
    );
    setNewsletterEmail('');
  };

  const headOffice = COMPANY.offices[0];
  const corporateOffice = COMPANY.offices[1];
  const canadaOffice = COMPANY.offices[2];

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-alabaster text-charcoal transition-colors duration-200">
      {/* Top Utility Bar */}
      <div className="bg-obsidian text-white/85 border-b border-white/10 text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={`tel:${COMPANY.topBar.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-crimson" />
              <span>{COMPANY.topBar.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY.topBar.email}`}
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-crimson" />
              <span>{COMPANY.topBar.email}</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1.5 text-white/60">
              <Building2 className="h-3.5 w-3.5 text-bronze-light" />
              <span>{COMPANY.groupLine}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {COMPANY.topBar.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 rounded border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-white/90"
              >
                <ShieldCheck className="h-3 w-3 text-bronze-light" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-stone bg-surface/95 backdrop-blur-md transition-colors duration-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 focus:outline-none dark:rounded-sm dark:bg-white/95 dark:px-2.5 dark:py-1"
            aria-label="El Dorado Developments Ltd. Home"
          >
            <img
              src={COMPANY.logo}
              alt={COMPANY.name}
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.children);
              const isDropdownOpen = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    hasChildren ? setOpenDropdown(item.label) : undefined
                  }
                  onMouseLeave={() =>
                    hasChildren ? setOpenDropdown(null) : undefined
                  }
                >
                  <div className="flex items-center">
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em] transition-colors ${
                          isActive
                            ? 'text-crimson-ink'
                            : 'text-charcoal hover:text-crimson-ink'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      {hasChildren && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-crimson-ink' : ''
                          }`}
                        />
                      )}
                    </NavLink>
                  </div>

                  {hasChildren && isDropdownOpen && (
                    <div className="absolute left-0 top-full z-50 w-60 pt-1">
                      <div className="border border-stone bg-surface py-2 shadow-editorial">
                        {item.children.map((sub) => (
                          <NavLink
                            key={sub.to}
                            to={sub.to}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-xs font-medium tracking-wide transition-colors ${
                                isActive
                                  ? 'bg-crimson-soft text-crimson-ink font-semibold'
                                  : 'text-charcoal hover:bg-limestone hover:text-crimson-ink'
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Theme Toggle, Desktop Quick Inquiry CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              data-testid="theme-toggle"
              className="inline-flex h-10 w-10 items-center justify-center border border-stone bg-alabaster text-charcoal transition hover:border-crimson hover:text-crimson-ink focus:outline-none"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-bronze-light" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 text-charcoal" aria-hidden="true" />
              )}
            </button>

            <Link
              to="/buyer-query"
              className="hidden xl:inline-flex items-center gap-2 border border-obsidian bg-obsidian px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-crimson hover:bg-crimson dark:border-white/20 dark:bg-[#272D37] dark:hover:border-crimson dark:hover:bg-crimson"
            >
              <span>Inquire Now</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center border border-stone bg-alabaster text-charcoal transition hover:border-crimson hover:text-crimson-ink lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="border-t border-stone bg-surface lg:hidden max-h-[82vh] overflow-y-auto">
            <nav
              aria-label="Mobile Navigation"
              className="mx-auto max-w-7xl divide-y divide-stone/60 px-4 py-3 sm:px-6"
            >
              {NAV_ITEMS.map((item) => {
                const hasChildren = Boolean(item.children);
                const expanded = mobileExpanded === item.label;

                if (!hasChildren) {
                  return (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className={({ isActive }) =>
                        `block py-3.5 text-sm font-semibold uppercase tracking-[0.14em] ${
                          isActive ? 'text-crimson-ink' : 'text-charcoal'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                return (
                  <div key={item.label} className="py-1">
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `py-2.5 text-sm font-semibold uppercase tracking-[0.14em] ${
                            isActive ? 'text-crimson-ink' : 'text-charcoal'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.label)
                        }
                        aria-label={`Toggle ${item.label} submenu`}
                        className="p-2 text-concrete hover:text-crimson-ink"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                    {expanded && (
                      <div className="mb-2 space-y-1 border-l-2 border-crimson/30 pl-4">
                        {item.children.map((sub) => (
                          <NavLink
                            key={sub.to}
                            to={sub.to}
                            className={({ isActive }) =>
                              `block py-2 text-sm ${
                                isActive
                                  ? 'font-semibold text-crimson-ink'
                                  : 'text-concrete hover:text-charcoal'
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 pb-2 flex flex-col gap-2">
                <Link
                  to="/buyer-query"
                  className="inline-flex items-center justify-center gap-2 bg-crimson px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white"
                >
                  <span>Buyer Query</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/landowner-query"
                  className="inline-flex items-center justify-center gap-2 border border-obsidian px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
                >
                  <span>Landowner Partnership</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Route View */}
      <main className="w-full min-w-0 flex-1">
        <Outlet />
      </main>

      {/* Pre-Footer Quote / Help Band */}
      <section className="border-t border-stone bg-limestone bg-arch-grid">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
              Get A Free Quote
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
              Need Help? Let Us Guide You Home Forever
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-concrete">
              Whether you are exploring residences across Bashundhara R/A,
              Jalshiri Abashon &amp; Siddeshwari, or considering a joint-venture
              land partnership with {COMPANY.name}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-crimson-dark"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/landowner-query"
              className="inline-flex items-center gap-2 border border-obsidian bg-surface px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
            >
              <span>Landowner Query</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Architectural Dark Footer */}
      <footer className="bg-obsidian text-white/80 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-3 space-y-5">
              <Link
                to="/"
                className="inline-block rounded bg-white px-3.5 py-2.5 shadow-sm"
              >
                <img
                  src={COMPANY.logo}
                  alt={COMPANY.name}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <p className="text-sm leading-relaxed text-white/70">
                Established in {COMPANY.established} and a sister concern of{' '}
                <span className="text-white font-medium">Rajbari Group</span>.
                More than 70 projects handed over under our enduring motto{' '}
                <span className="italic text-bronze-light">
                  “{COMPANY.motto}”
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-2">
                {COMPANY.topBar.badges.map((badge) => (
                  <span
                    key={badge}
                    className="border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Offices Columns */}
            <div className="lg:col-span-5 grid gap-8 sm:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white">
                    {headOffice.title}
                  </h3>
                  <p className="mt-2.5 flex items-start gap-2 text-xs leading-relaxed text-white/70">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" />
                    <span>{headOffice.address}</span>
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-xs text-white/80">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-bronze-light" />
                    <a
                      href={`tel:${headOffice.phones[0].replace(/\s+/g, '')}`}
                      className="hover:text-white"
                    >
                      {headOffice.phones[0]}
                    </a>
                  </p>
                  <p className="mt-1.5 flex items-center gap-2 text-xs text-white/80">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-bronze-light" />
                    <a
                      href={`mailto:${headOffice.email}`}
                      className="hover:text-white"
                    >
                      {headOffice.email}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-white">
                    {canadaOffice.title}
                  </h3>
                  <p className="mt-2.5 flex items-start gap-2 text-xs leading-relaxed text-white/70">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" />
                    <span>{canadaOffice.address}</span>
                  </p>
                  <div className="mt-2 space-y-1 text-xs text-white/80">
                    {canadaOffice.phones.map((phone) => (
                      <p key={phone} className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 shrink-0 text-bronze-light" />
                        <a href={`tel:${phone}`} className="hover:text-white">
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-white">
                  {corporateOffice.title}
                </h3>
                <p className="mt-2.5 flex items-start gap-2 text-xs leading-relaxed text-white/70">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" />
                  <span>{corporateOffice.address}</span>
                </p>
                <div className="mt-2.5 space-y-1 text-xs text-white/80">
                  {corporateOffice.phones.map((phone) => (
                    <p key={phone} className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-bronze-light" />
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="hover:text-white"
                      >
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
                <p className="mt-2 text-xs text-white/65">
                  <span className="font-semibold text-white/85">Fax:</span>{' '}
                  {corporateOffice.fax}
                </p>
                <p className="mt-2 flex items-center gap-2 text-xs text-white/80">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-bronze-light" />
                  <a
                    href={`mailto:${COMPANY.contactSummary.salesEmail}`}
                    className="hover:text-white"
                  >
                    {COMPANY.contactSummary.salesEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Company Navigation & Newsletter */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="font-serif text-lg font-semibold text-white">
                  Company
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  {FOOTER_COMPANY_LINKS.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-white/70 transition hover:text-white hover:underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="font-serif text-lg font-semibold text-white">
                  Project Updates
                </h3>
                <p className="mt-1.5 text-xs text-white/65">
                  Receive updates on upcoming developments and handover milestones.
                </p>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="mt-3 flex flex-col gap-2 sm:flex-row"
                  noValidate
                >
                  <label htmlFor="footer-newsletter" className="sr-only">
                    Email address for project updates
                  </label>
                  <input
                    id="footer-newsletter"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder:text-white/45 focus:border-crimson focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-crimson px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-crimson-dark"
                  >
                    Subscribe
                  </button>
                </form>
                {newsletterError && (
                  <p className="mt-2 text-xs text-red-400">{newsletterError}</p>
                )}
                {newsletterMsg && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-emerald-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>{newsletterMsg}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {COMPANY.name} All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/terms-condition" className="hover:text-white">
                Terms &amp; Condition
              </Link>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
              <Link to="/contact-us" className="hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
