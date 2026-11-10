import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, Lock, ShieldAlert } from 'lucide-react';
import { ToastBanner } from '../components/ToastBanner';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotNotice, setForgotNotice] = useState(false);
  const [demoNotice, setDemoNotice] = useState(false);
  const [simulateError, setSimulateError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setSimulateError(true);
      setDemoNotice(false);
      return;
    }
    setSimulateError(false);
    setDemoNotice(true);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090A0C] px-4 py-10 sm:px-6">
      {/* Full-bleed background image */}
      <img
        src="/images/brand/login-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Atmospheric overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#090A0C]/35 via-[#18191D]/25 to-[#090A0C]/45 dark:from-[#090A0C]/55 dark:via-[#111215]/45 dark:to-[#090A0C]/65"
      />

      {/* Low-opacity form card: logo + title + form */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md dark:border-white/15 dark:bg-[#0C0D0F]/40 sm:p-8">
        <div className="text-center">
          <Link to="/" aria-label="Return to KINGDOM GROUP homepage" className="inline-block">
            <img
              src="/images/brand/logo-login.png"
              alt="KINGDOM GROUP CTL_CMS"
              className="mx-auto h-20 w-auto object-contain brightness-110 hue-rotate-180 invert transition hover:opacity-90"
            />
          </Link>
          <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
            CTL_CMS Login
          </h1>
        </div>

        {(simulateError || demoNotice || forgotNotice) && (
          <div className="mt-5 space-y-3">
            {simulateError && (
              <div className="flex items-center gap-2 rounded-xl border border-red-400/40 bg-red-950/60 px-3.5 py-2.5 text-xs font-medium text-red-100 backdrop-blur-sm">
                <ShieldAlert className="h-4 w-4 shrink-0 text-red-300" />
                <span>Log In failed! Please enter both username and password.</span>
              </div>
            )}

            <ToastBanner
              visible={demoNotice}
              tone="info"
              title="CTL_CMS Frontend Preview"
              message={`Credentials entered for "${username}"${
                rememberMe ? ' (Remember me checked)' : ''
              }. Server-side authentication (/admin/login/login_Check) is outside the scope of this frontend redesign.`}
              onDismiss={() => setDemoNotice(false)}
            />

            {forgotNotice && (
              <div className="flex items-start gap-2 rounded-xl border border-[#C9A46B]/40 bg-[#111215]/70 px-3.5 py-2.5 text-xs text-zinc-100 backdrop-blur-sm">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A46B]" />
                <span>
                  Password recovery is handled by KINGDOM IT / Cyberdyne Technology Ltd.
                  Contact IT Officer Mahbubur Rahman (+88 01912-751486) or Control Unit
                  (+88 01711-070777).
                </span>
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="cms-username"
              className="block text-xs font-semibold uppercase tracking-wider text-white/90"
            >
              Email address / Username
            </label>
            <input
              id="cms-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Email address/Username"
              className="mt-1.5 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/55 transition focus:border-[#C9A46B] focus:bg-white/15 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="cms-password"
              className="block text-xs font-semibold uppercase tracking-wider text-white/90"
            >
              Password
            </label>
            <input
              id="cms-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mt-1.5 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/55 transition focus:border-[#C9A46B] focus:bg-white/15 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between gap-2 text-xs">
            <label className="inline-flex cursor-pointer items-center gap-2 text-white/85">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-white/30 bg-white/10 text-[#8C6730] focus:ring-[#C9A46B]"
              />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              onClick={() => setForgotNotice((prev) => !prev)}
              className="font-medium text-[#C9A46B] underline-offset-2 hover:underline"
            >
              Forgot the password?
            </button>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A46B] px-5 py-3 text-sm font-semibold text-[#0C0D0F] shadow-md transition hover:bg-[#DFBE88]"
          >
            <Lock className="h-4 w-4 text-[#111215]" />
            <span>Sign in</span>
          </button>
        </form>
      </div>
    </div>
  );
}
