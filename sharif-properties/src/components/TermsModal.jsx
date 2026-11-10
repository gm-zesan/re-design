import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function TermsModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-brand-navyDeep/70 backdrop-blur-sm flex items-center justify-center p-4 no-print"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-md border border-hairline shadow-elevated max-w-xl w-full p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Terms of Use"
          className="absolute top-4 right-4 p-2 rounded text-ink-muted hover:text-ink hover:bg-panel transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-brand-navy mb-3">
          <ShieldCheck className="w-6 h-6 text-brand-cobalt" />
          <h3 className="font-serif text-2xl font-bold text-brand-navy">
            Terms of Use &amp; Leasing Advisory
          </h3>
        </div>

        <div className="space-y-3 text-sm text-ink-muted leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
          <p>
            By submitting a viewing request or contacting <strong className="text-ink">Sharif Properties Service</strong> regarding any residential or commercial listing on this website, you acknowledge the following service policies:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-ink">Property Availability:</strong> Listings marked{' '}
              <em>RENTED</em> are preserved as portfolio reference examples; available properties are subject to final owner lease execution.
            </li>
            <li>
              <strong className="text-ink">Tenant Screening &amp; Move-In:</strong> Standard tenancy agreements include identity, income, and reference verification, plus collection of 02/03 months’ rent and security deposit per owner terms.
            </li>
            <li>
              <strong className="text-ink">Property Management Fee Schedule:</strong> Commercial or Residential commonly practices Fifteen (20) % of the rental value per month; Only an apartment or minimum income of the property Five (5) % of the rental value; Property Manager Charge for company not below than-10,000/= (Ten thousand) Monthly for all service of management.
            </li>
            <li>
              <strong className="text-ink">Privacy:</strong> Inquiry details (Name, Phone, Email) are used solely to arrange property viewings and respond to relocation inquiries.
            </li>
          </ul>
          <p className="text-xs text-ink-subtle pt-2 border-t border-hairline">
            Advisory note: On the live legacy site, the form Terms link pointed to a removed URL (HTTP 404). This modal restores clear terms access.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded bg-brand-cobalt hover:bg-brand-navy text-white text-sm font-semibold transition-colors"
          >
            Close Terms
          </button>
        </div>
      </div>
    </div>
  );
}
