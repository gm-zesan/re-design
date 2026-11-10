import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastBannerProps {
  visible: boolean;
  title: string;
  message: string;
  tone?: 'success' | 'info';
  onDismiss: () => void;
}

export function ToastBanner({
  visible,
  title,
  message,
  tone = 'success',
  onDismiss,
}: ToastBannerProps) {
  if (!visible) return null;

  const isSuccess = tone === 'success';

  return (
    <div
      role="status"
      aria-live="polite"
      className={`rounded-xl border p-4 shadow-sm ${
        isSuccess
          ? 'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-500/30 dark:bg-emerald-950/60 dark:text-emerald-100'
          : 'border-[#8C6730]/40 bg-[#F2F1EE] text-[#141518] dark:border-[#8C6730]/40 dark:bg-[#1E2026] dark:text-[#F4F3F0]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {isSuccess ? (
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
          ) : (
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#8C6730]" />
          )}
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="mt-1 text-sm opacity-90">{message}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="rounded-md p-1 opacity-70 transition hover:bg-black/5 hover:opacity-100"
          aria-label="Dismiss message"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

