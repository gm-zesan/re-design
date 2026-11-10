import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Heart,
  User,
  Clock,
  Sun,
  Moon,
} from 'lucide-react';
import siteData from '../data/siteData.json';
import { useApp } from '../context/AppContext';

const CLOCK_ZONES = [
  { label: 'Dhaka', timeZone: 'Asia/Dhaka' },
  { label: 'New York', timeZone: 'America/New_York' },
  { label: 'Brisbane', timeZone: 'Australia/Brisbane' },
  { label: 'Tokyo', timeZone: 'Asia/Tokyo' },
];

function formatZoneTime(date, timeZone) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(date);
  } catch {
    return '';
  }
}

export default function Navbar() {
  const [now, setNow] = useState(() => new Date());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const { favorites, user, theme, toggleTheme } = useApp();
  const location = useLocation();

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.search]);

  const navItems = siteData.navigation.primary;

  return (
    <header className="sticky top-0 z-40 no-print bg-surface border-b border-hairline">
      {/* Executive World Clock & Direct Desk Strip (Logo Deep Navy) */}
      <div className="bg-brand-navyDeep text-white/90 text-[11px] sm:text-xs py-1.5 border-b border-brand-slate/40">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-white/70 font-medium uppercase tracking-wider text-[10px]">
              <Clock className="w-3 h-3 text-brand-magenta" />
              <span>Office Hours Desk</span>
            </span>
            {CLOCK_ZONES.map((z) => (
              <div key={z.label} className="inline-flex items-center gap-1.5">
                <span className="font-semibold text-white">{z.label}:</span>
                <span className="tabular-nums text-white/75">{formatZoneTime(now, z.timeZone)}</span>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <span className="text-white/80 font-medium">Mr. ShariF</span>
            <a
              href="tel:+8801636333333"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors tabular-nums"
            >
              <Phone className="w-3 h-3 text-brand-magenta" />
              <span>+8801636333333</span>
            </a>
            <a
              href="mailto:mail@sharif.com.bd"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-brand-magenta" />
              <span>mail@sharif.com.bd</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px] gap-4">
          {/* Authentic Brand Logo Lockup */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink group">
            <div className="shrink-0 logo-frame transition-colors">
              <img
                src="/assets/logo.png"
                alt="Sharif Properties Service"
                className="h-10 sm:h-11 w-auto object-contain shrink-0"
              />
            </div>
            <div className="min-w-0">
              <div className="font-serif text-base sm:text-xl font-bold tracking-tight text-brand-navy leading-tight group-hover:text-brand-cobalt transition-colors truncate">
                Sharif Properties Service
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.06em] sm:tracking-[0.14em] text-brand-magenta truncate">
                Home Management Dhaka
              </div>
            </div>
          </Link>

          {/* Desktop Navigation — Architectural Hairline Underline Style */}
          <nav className="hidden lg:flex items-center gap-1 shrink-0">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length);
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : item.path && location.pathname.startsWith(item.path.split('#')[0]);

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`whitespace-nowrap px-3 py-2 text-[13px] xl:text-sm font-medium border-b-2 transition-colors ${
                      isActive
                        ? 'text-brand-royal border-brand-magenta'
                        : 'text-ink border-transparent hover:text-brand-cobalt'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className={`whitespace-nowrap inline-flex items-center gap-1 px-3 py-2 text-[13px] xl:text-sm font-medium border-b-2 transition-colors ${
                      openDropdown === item.label
                        ? 'text-brand-royal border-brand-cobalt'
                        : 'text-ink border-transparent hover:text-brand-cobalt'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-65" />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-1 w-64 z-50">
                      <div className="bg-surface rounded-md shadow-elevated border border-hairline py-1.5">
                        {item.children.map((child) => {
                          if (child.children) {
                            return (
                              <div key={child.label} className="relative group/sub">
                                <div className="flex items-center justify-between px-4 py-2 text-sm text-ink hover:bg-panel hover:text-brand-royal cursor-pointer font-medium">
                                  <span>{child.label}</span>
                                  <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                                </div>
                                <div className="hidden group-hover/sub:block absolute left-full top-0 pl-0.5 w-64">
                                  <div className="bg-surface rounded-md shadow-elevated border border-hairline py-1.5">
                                    {child.children.map((sub) => (
                                      <Link
                                        key={sub.path}
                                        to={sub.path}
                                        className="block px-4 py-2 text-sm text-ink hover:bg-panel hover:text-brand-royal transition-colors"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-ink hover:bg-panel hover:text-brand-royal transition-colors"
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              data-testid="theme-toggle"
              className="inline-flex items-center justify-center p-2 rounded-full text-brand-navy hover:bg-panel transition-colors shrink-0"
            >
              {theme === 'dark' ? (
                <Sun className="w-[18px] h-[18px] text-amber-400" />
              ) : (
                <Moon className="w-[18px] h-[18px] text-brand-navy" />
              )}
            </button>

            <Link
              to="/saved"
              className="whitespace-nowrap inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded border border-hairline bg-surface hover:border-brand-cobalt text-xs sm:text-sm font-medium text-ink transition-colors"
              title="Saved Properties"
            >
              <Heart className="w-4 h-4 text-brand-magenta" />
              <span className="hidden sm:inline">Saved</span>
              {favorites.length > 0 && (
                <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded bg-brand-magenta text-white text-[10px] font-bold tabular-nums">
                  {favorites.length}
                </span>
              )}
            </Link>

            {user ? (
              <Link
                to="/userLogin"
                className="whitespace-nowrap hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-brand-cobalt hover:bg-brand-navy text-white text-xs xl:text-sm font-medium transition-colors"
              >
                <User className="w-4 h-4" />
                <span>{user.name?.split(' ')[0] || 'Account'}</span>
              </Link>
            ) : (
              <div className="hidden sm:flex items-center gap-1.5">
                <Link
                  to="/userLogin"
                  className="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-2 rounded border border-hairline bg-surface hover:border-brand-cobalt text-ink text-xs xl:text-sm font-medium transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-brand-cobalt" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-brand-cobalt hover:bg-brand-navy text-white text-xs xl:text-sm font-medium transition-colors"
                >
                  <span>Sign Up</span>
                </Link>
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded border border-hairline text-ink hover:bg-panel"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-hairline bg-surface max-h-[80vh] overflow-y-auto shadow-elevated">
          <div className="px-4 py-4 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-hairline text-xs text-ink-muted">
              <a href="tel:+8801636333333" className="inline-flex items-center gap-1.5 font-medium text-brand-royal">
                <Phone className="w-3.5 h-3.5" /> +8801636333333
              </a>
              <a href="mailto:mail@sharif.com.bd" className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> mail@sharif.com.bd
              </a>
            </div>

            {navItems.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length);
              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-3 py-2.5 rounded text-sm font-medium text-ink hover:bg-panel"
                  >
                    {item.label}
                  </Link>
                );
              }
              const expanded = Boolean(mobileExpanded[item.label]);
              return (
                <div key={item.label} className="rounded border border-hairline overflow-hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded((prev) => ({ ...prev, [item.label]: !prev[item.label] }))
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-ink bg-canvas"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expanded && (
                    <div className="px-3 py-2 space-y-1 bg-surface">
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.label} className="pt-1 pb-1">
                            <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-brand-magenta">
                              {child.label}
                            </div>
                            <div className="pl-2 space-y-1 border-l-2 border-hairline ml-2">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  className="block px-2 py-1.5 text-sm text-ink-muted hover:text-brand-royal"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-2 py-1.5 text-sm text-ink-muted hover:text-brand-royal"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-3 border-t border-hairline">
              {user ? (
                <Link
                  to="/userLogin"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-brand-cobalt text-white text-sm font-medium"
                >
                  <User className="w-4 h-4" />
                  <span>{`Account (${user.name || user.email})`}</span>
                </Link>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/userLogin"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded border border-hairline text-ink bg-canvas text-sm font-medium"
                  >
                    <User className="w-4 h-4 text-brand-cobalt" />
                    <span>Sign In</span>
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded bg-brand-cobalt text-white text-sm font-medium"
                  >
                    <span>Sign Up</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
