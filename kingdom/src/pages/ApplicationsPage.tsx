import { FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AlertTriangle,
  ExternalLink,
  FileSpreadsheet,
  Info,
  Lock,
  ServerCrash,
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ToastBanner } from '../components/ToastBanner';
import { ENTERPRISE_APPS } from '../data/siteData';

export function ApplicationsPage() {
  const location = useLocation();
  const state = (location.state as { efsAttemptUser?: string } | null) || null;

  const [userName, setUserName] = useState(state?.efsAttemptUser || '');
  const [password, setPassword] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState(Boolean(state?.efsAttemptUser));

  const efsApp = ENTERPRISE_APPS.find((a) => a.id === 'efs')!;
  const scmApp = ENTERPRISE_APPS.find((a) => a.id === 'scm')!;
  const legacyApps = ENTERPRISE_APPS.filter((a) => a.status === 'offline-archived');

  const handleEfsSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedNotice(true);
  };

  return (
    <div>
      <PageBanner
        eyebrow="Enterprise Applications"
        title="Corporate Software & Portals"
        subtitle="Access KINGDOM GROUP's internal e-File System (eFS), Supply Chain Management (SCM), and view documented status of archived corporate software suites."
        breadcrumbs={[{ label: 'Applications' }]}
        backgroundImage="/images/about/about-banner.jpg"
        badge="Enterprise Suite"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* e-File System Interactive Login Card */}
          <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8 lg:col-span-6">
            <div className="flex items-start justify-between gap-4 border-b border-[#E4E3DF] pb-5 dark:border-white/10">
              <div className="flex items-center gap-3.5">
                <img
                  src={efsApp.icon}
                  alt="e-File System Icon"
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <div>
                  <span className="font-mono-tech text-[11px] uppercase tracking-wider text-[#8C6730] dark:text-[#C9A46B]">
                    Document Routing • CompanyID: 3
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-[#18191D] dark:text-white">
                    {efsApp.name}
                  </h2>
                </div>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1 font-mono-tech text-[10px] font-semibold text-amber-800 ring-1 ring-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:ring-amber-500/30">
                <ServerCrash className="h-3 w-3" />
                HTTP 500 / 404
              </span>
            </div>

            <div className="mt-5">
              <ToastBanner
                visible={submittedNotice}
                tone="info"
                title="e-File System Portal (Frontend Preview)"
                message={`Submission captured for UserName "${
                  userName || 'Unspecified'
                }" (CompanyID=3). Backend authentication endpoints (/eFS and /eFS/login/Welcome/login_Check) are offline on the origin server and out of scope for this frontend redesign.`}
                onDismiss={() => setSubmittedNotice(false)}
              />
            </div>

            <form onSubmit={handleEfsSubmit} className="mt-5 space-y-4">
              <input type="hidden" name="CompanyID" value="3" />
              <div>
                <label
                  htmlFor="efs-username"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#141518] dark:text-zinc-200"
                >
                  UserName
                </label>
                <input
                  id="efs-username"
                  name="UserName"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter eFS UserName"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-2.5 text-sm text-[#141518] focus:border-[#18191D] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-400 dark:focus:border-[#C9A46B] dark:focus:bg-[#111215]"
                />
              </div>

              <div>
                <label
                  htmlFor="efs-password"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#141518] dark:text-zinc-200"
                >
                  Password
                </label>
                <input
                  id="efs-password"
                  name="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-2.5 text-sm text-[#141518] focus:border-[#18191D] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-400 dark:focus:border-[#C9A46B] dark:focus:bg-[#111215]"
                />
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <span className="font-mono-tech text-[11px] text-[#52555E] dark:text-zinc-400">
                  Origin action: /eFS/login/Welcome/login_Check
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#18191D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
                >
                  <Lock className="h-4 w-4 text-[#C9A46B] dark:text-[#111215]" />
                  <span>Login</span>
                </button>
              </div>
            </form>

            <p className="mt-5 rounded-xl bg-[#F9F9F8] p-3.5 text-xs leading-relaxed text-[#52555E] dark:bg-[#141518] dark:text-zinc-300">
              {efsApp.description}
            </p>
          </div>

          {/* SCM Active External Application Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#18191D] bg-[#18191D] p-6 text-white shadow-lg dark:border-white/10 dark:bg-[#141518] sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-5">
                <div className="flex items-center gap-3.5">
                  <img
                    src={scmApp.icon}
                    alt="SCM Icon"
                    className="h-12 w-12 shrink-0 object-contain dark:brightness-125 dark:drop-shadow-[0_0_0.6px_rgba(255,255,255,0.95)]"
                  />
                  <div>
                    <span className="font-mono-tech text-[11px] uppercase tracking-wider text-[#C9A46B]">
                      Procurement &amp; Inventory
                    </span>
                    <h2 className="font-display text-2xl font-semibold text-white">
                      {scmApp.name}
                    </h2>
                  </div>
                </div>

                <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-emerald-500/20 px-2.5 py-1 font-mono-tech text-[10px] font-semibold text-emerald-200 ring-1 ring-emerald-400/40">
                  <FileSpreadsheet className="h-3 w-3" />
                  External Portal
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/85">
                {scmApp.description}
              </p>

              <div className="mt-6 rounded-xl border border-white/15 bg-white/10 p-4 text-xs text-white/85">
                <p className="font-mono-tech text-[11px] text-[#C9A46B]">
                  Target URL: {scmApp.externalUrl}
                </p>
                <p className="mt-1">
                  Maintained externally by Cyberdyne Technology Ltd. Opens in a new browser tab.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={scmApp.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A46B] px-5 py-3 text-sm font-semibold text-[#0C0D0F] transition hover:bg-[#DFBE88]"
              >
                <span>Open Supply Chain Management (SCM)</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Archived / Commented Origin Application Modules */}
        <div className="mt-12 rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E3DF] pb-4 dark:border-white/10">
            <div>
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                Source Code Audit Inventory
              </span>
              <h2 className="mt-1 font-display text-2xl font-semibold text-[#18191D] dark:text-white">
                Documented Commented-Out Enterprise Modules
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F2F1EE] px-3 py-1 text-xs font-medium text-[#141518] dark:bg-white/10 dark:text-[#DFC69B]">
              <Info className="h-3.5 w-3.5 text-[#8C6730] dark:text-[#C9A46B]" />
              <span>Disabled in Origin Source (HTTP 404)</span>
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {legacyApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col justify-between rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] p-4 dark:border-white/10 dark:bg-[#141518]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="h-10 w-10 shrink-0 object-contain"
                    />
                    <span className="inline-flex items-center gap-1 rounded bg-white px-2 py-0.5 font-mono-tech text-[10px] text-[#B93832] ring-1 ring-[#E4E3DF] dark:bg-red-950/60 dark:text-red-200 dark:ring-red-500/30">
                      <AlertTriangle className="h-3 w-3" />
                      {app.statusBadge}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-[#141518] dark:text-white">
                    {app.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#52555E] dark:text-zinc-300">
                    {app.description}
                  </p>
                </div>

                <p className="mt-3 border-t border-[#E4E3DF] pt-2 font-mono-tech text-[10px] text-[#52555E] dark:border-white/10 dark:text-zinc-400">
                  Origin target: {app.originUrl}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

