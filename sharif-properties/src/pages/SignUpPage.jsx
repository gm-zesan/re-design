import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  LogOut,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Heart,
  Sun,
  Moon,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function SignUpPage() {
  const navigate = useNavigate();
  const { favorites, user, loginUser, logoutUser, showToast, theme, toggleTheme } = useApp();

  const [regForm, setRegForm] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = (e) => {
    e.preventDefault();
    if (!regForm.fullName.trim() || !regForm.email.trim() || !regForm.password) {
      showToast('Please complete required registration fields', 'error');
      return;
    }
    if (regForm.password !== regForm.confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }
    loginUser({
      name: regForm.fullName.trim(),
      email: regForm.email.trim(),
      phone: regForm.phone.trim(),
      address: regForm.address.trim(),
      loggedInAt: new Date().toISOString(),
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-brand-navyDeep text-white overflow-x-clip">
      {/* Full-Bleed Architectural Background Photo + Balanced Overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/header-bg.jpg')" }}
      />
      <div className="fixed inset-0 bg-brand-navyDeep/60" />

      {/* Quiet Top Return Link + Theme Switcher */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 pt-5 flex items-center justify-between text-xs sm:text-sm">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-white/85 hover:text-white transition-colors bg-brand-navyDeep/40 border border-white/15 px-3 py-1.5 rounded backdrop-blur-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          data-testid="theme-toggle"
          className="inline-flex items-center justify-center p-2 rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-colors"
        >
          {theme === 'dark' ? (
            <Sun className="w-[18px] h-[18px] text-amber-400" />
          ) : (
            <Moon className="w-[18px] h-[18px] text-white/90" />
          )}
        </button>
      </div>

      {/* Centered Low-Opacity Translucent Sign Up Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[480px] rounded-md bg-brand-navyDeep/35 backdrop-blur-md border border-white/25 p-6 sm:p-8 shadow-elevated">
          {/* Card Header: Logo & Title */}
          <div className="flex flex-col items-center text-center pb-5 border-b border-white/15">
            <Link
              to="/"
              className="bg-white/95 rounded p-2 mb-3 inline-flex items-center justify-center shadow-soft"
            >
              <img
                src="/assets/logo.png"
                alt="Sharif Properties Service"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <h1 className="font-serif text-2xl sm:text-[28px] font-bold text-white leading-tight">
              Create Client Account
            </h1>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/75 font-medium mt-1">
              Sharif Properties Service &mdash; Dhaka
            </p>
          </div>

          {user ? (
            <div className="pt-6 space-y-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-magenta shrink-0" />
                <div>
                  <h2 className="font-serif text-xl font-bold text-white">
                    {user.name || 'Sharif Client'}
                  </h2>
                  <p className="text-xs text-white/65">Signed in client session</p>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-white/80 bg-white/[0.06] border border-white/15 rounded p-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-magenta shrink-0" />
                  <span>{user.email}</span>
                </div>
                {user.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-magenta shrink-0" />
                    <span className="tabular-nums">{user.phone}</span>
                  </div>
                )}
                {user.address && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-magenta shrink-0" />
                    <span>{user.address}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => navigate('/saved')}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-brand-cobalt hover:bg-brand-royal text-white text-sm font-semibold transition-colors"
                >
                  <Heart className="w-4 h-4 text-brand-magenta fill-current" />
                  <span>Shortlist ({favorites.length})</span>
                </button>
                <button
                  type="button"
                  onClick={logoutUser}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold text-white transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleRegister} className="pt-5 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/75 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={regForm.fullName}
                    onChange={(e) => setRegForm({ ...regForm, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2 rounded bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white focus:bg-white/15"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/75 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={regForm.email}
                      onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                      placeholder="Write Your Email"
                      className="w-full px-3.5 py-2 rounded bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white focus:bg-white/15"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/75 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regForm.phone}
                      onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                      placeholder="Phone Number"
                      className="w-full px-3.5 py-2 rounded bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white focus:bg-white/15"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/75 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value={regForm.address}
                    onChange={(e) => setRegForm({ ...regForm, address: e.target.value })}
                    placeholder="Address"
                    className="w-full px-3.5 py-2 rounded bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white focus:bg-white/15"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/75 mb-1">
                      Password *
                    </label>
                    <input
                      type="password"
                      required
                      value={regForm.password}
                      onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
                      placeholder="Password"
                      className="w-full px-3.5 py-2 rounded bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white focus:bg-white/15"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/75 mb-1">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      required
                      value={regForm.confirmPassword}
                      onChange={(e) =>
                        setRegForm({ ...regForm, confirmPassword: e.target.value })
                      }
                      placeholder="Confirm"
                      className="w-full px-3.5 py-2 rounded bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white focus:bg-white/15"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-1 py-2.5 rounded bg-brand-cobalt hover:bg-brand-royal text-white text-sm font-semibold tracking-wider uppercase transition-colors"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-5 pt-4 border-t border-white/15 text-center text-xs text-white/75">
                Already have an account?{' '}
                <Link
                  to="/userLogin"
                  className="text-white font-semibold hover:text-brand-magenta underline underline-offset-4 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Quiet Footer Copyright */}
      <div className="relative z-10 text-center pb-5 px-4 text-xs text-white/60">
        &copy; {new Date().getFullYear()} Sharif Properties Service. All rights reserved.
      </div>
    </div>
  );
}

