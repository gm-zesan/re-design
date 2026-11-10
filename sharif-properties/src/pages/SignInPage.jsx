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

export default function SignInPage() {
  const navigate = useNavigate();
  const { favorites, user, loginUser, logoutUser, showToast, theme, toggleTheme } = useApp();
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    remember: true,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.email.trim() || !loginForm.password.trim()) {
      showToast('Please enter email and password', 'error');
      return;
    }
    loginUser({
      name: loginForm.email.split('@')[0],
      email: loginForm.email.trim(),
      phone: '',
      address: '',
      loggedInAt: new Date().toISOString(),
    });
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail.trim()) return;
    showToast(`Password reset instructions prepared for ${forgotEmail}`);
    setForgotOpen(false);
    setForgotEmail('');
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

      {/* Centered Low-Opacity Translucent Sign In Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[440px] rounded-md bg-brand-navyDeep/35 backdrop-blur-md border border-white/25 p-6 sm:p-8 shadow-elevated">
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
              Client Sign In
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
              <form onSubmit={handleLogin} className="pt-5 space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/75 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    placeholder="Write Your Email"
                    className="w-full px-3.5 py-2.5 rounded bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white focus:bg-white/15"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/75 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    placeholder="Write Your Password"
                    className="w-full px-3.5 py-2.5 rounded bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white focus:bg-white/15"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-white/75">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={loginForm.remember}
                      onChange={(e) => setLoginForm({ ...loginForm, remember: e.target.checked })}
                      className="rounded border-white/30 bg-white/10 text-brand-magenta"
                    />
                    <span>Remember Me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setForgotOpen(!forgotOpen)}
                    className="text-white/90 hover:text-brand-magenta underline-offset-2 hover:underline transition-colors"
                  >
                    Forgot Your password?
                  </button>
                </div>

                {forgotOpen && (
                  <div className="p-3 rounded bg-white/10 border border-white/15 space-y-2">
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-white/80">
                      Recovery Email
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="flex-1 min-w-0 px-3 py-1.5 rounded bg-white/10 border border-white/20 text-xs text-white placeholder:text-white/45 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleForgotSubmit}
                        className="px-3 py-1.5 rounded bg-brand-cobalt hover:bg-brand-royal text-white text-xs font-semibold"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 rounded bg-brand-magenta hover:bg-brand-magentaDark text-white text-sm font-semibold tracking-wider uppercase transition-colors"
                >
                  LOGIN
                </button>
              </form>

              <div className="mt-5 pt-4 border-t border-white/15 text-center text-xs text-white/75">
                Don&apos;t have an account?{' '}
                <Link
                  to="/signup"
                  className="text-white font-semibold hover:text-brand-magenta underline underline-offset-4 transition-colors"
                >
                  Sign Up
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

