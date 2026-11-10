import { Link } from 'react-router-dom';
import { ArrowRight, Info, Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY } from '../data/siteData';

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Legal & Documentation"
        title="Terms & Condition"
        subtitle="Official terms disclosure and direct legal correspondence contacts for El Dorado Developments Ltd."
        breadcrumbs={[{ label: 'Terms & Condition' }]}
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 border border-bronze/40 bg-bronze-soft/60 p-5 text-sm text-charcoal">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-bronze-ink" />
            <div>
              <p className="font-semibold">Official Source Status Note</p>
              <p className="mt-1 leading-relaxed text-concrete">
                On the original <code>https://www.eldorado.com.bd/terms-condition/</code>{' '}
                page, no legal terms copy was published (the template body was
                blank). Per our strict content-preservation policy, we do not
                fabricate legal clauses or boilerplate policies in place of
                company-issued agreements.
              </p>
            </div>
          </div>

          <div className="border border-stone bg-surface p-8 shadow-card sm:p-10">
            <h2 className="font-serif text-3xl font-semibold text-charcoal">
              Contractual &amp; Legal Inquiries
            </h2>
            <p className="mt-4 text-base leading-relaxed text-concrete">
              All apartment allotment deeds, booking terms, construction
              schedules, and landowner joint-venture agreements are governed by
              written bilateral contracts issued through the{' '}
              <strong className="text-charcoal">
                Logistic &amp; Legal Department
              </strong>{' '}
              of {COMPANY.name}.
            </p>

            <div className="mt-8 grid gap-6 border-t border-stone pt-6 sm:grid-cols-2 text-sm">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-ink">
                  Corporate Office
                </p>
                <p className="flex items-start gap-2 text-concrete">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze-ink" />
                  <span>{COMPANY.offices[1].address}</span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-ink">
                  Direct Assistance
                </p>
                <p className="flex items-center gap-2 text-charcoal font-medium">
                  <Phone className="h-4 w-4 text-bronze-ink" />
                  <span>{COMPANY.contactSummary.supportPhone}</span>
                </p>
                <p className="flex items-center gap-2 text-charcoal font-medium">
                  <Mail className="h-4 w-4 text-bronze-ink" />
                  <span>{COMPANY.contactSummary.supportEmail}</span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-crimson px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-crimson-dark"
              >
                <span>Request Official Documentation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

