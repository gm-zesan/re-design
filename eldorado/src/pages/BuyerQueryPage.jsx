import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Home, Mail, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY } from '../data/siteData';

const FLAT_SIZES = Array.from({ length: 26 }, (_, idx) => 700 + idx * 100);

export default function BuyerQueryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const prefillArea = location.state?.prefillArea || '';
  const projectTitle = location.state?.projectTitle || '';

  const [form, setForm] = useState({
    area: prefillArea,
    flat_size: '1600',
    name: '',
    phone: '',
    email: '',
    address: projectTitle ? `Inquiring regarding: ${projectTitle}` : '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (prefillArea) {
      setForm((prev) => ({
        ...prev,
        area: prefillArea,
        address: projectTitle
          ? `Inquiring regarding: ${projectTitle}`
          : prev.address,
      }));
    }
  }, [prefillArea, projectTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.area.trim() || !form.name.trim() || !form.phone.trim()) {
      setError('Please provide your preferred area, name, and phone number.');
      return;
    }
    setError('');
    navigate('/thankyou', {
      state: {
        source: 'Buyer Apartment Requirement Query',
        summary: {
          Name: form.name,
          Phone: form.phone,
          'Preferred Area': form.area,
          'Preferred Flat Size': `${form.flat_size} Sft`,
        },
      },
    });
  };

  return (
    <div>
      <PageHeader
        eyebrow="Buyers"
        title="YOUR NEXT DESTINATION"
        subtitle="Share your preferred location and apartment size so our sales advisors can match you with your dream residence."
        breadcrumbs={[
          { label: 'Query', to: '/buyer-query' },
          { label: 'Buyer Query' },
        ]}
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                  Residence Advisory
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                  Finding Your Dream Abode
                </h2>
                <p className="mt-4 text-base leading-relaxed text-concrete">
                  Our clients get the first priority from our service part.
                  Finding the best apartments in prime locations is easy with
                  Eldorado Developments Ltd at our client’s disposal. All our
                  projects promise to stand on the test of time, design, and
                  aesthetics, making an ideal home for our clients. Please
                  contact us and send your requirements for finding your dream
                  abode.
                </p>
              </div>

              <div className="border border-stone bg-surface p-6 shadow-card space-y-4">
                <div className="flex items-center gap-2.5 text-crimson-ink">
                  <Home className="h-5 w-5" />
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    Available Configurations
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-concrete">
                  Ongoing and upcoming residences span from compact{' '}
                  <strong className="text-charcoal">960–1,600 Sft</strong> urban
                  homes in Siddheswari, Nakhalpara &amp; Bashundhara R/A up to
                  spacious single-unit{' '}
                  <strong className="text-charcoal">2,850–3,500 Sft</strong>{' '}
                  residences in Jalshiri Abashon and Block-M, Bashundhara R/A.
                </p>
              </div>

              <div className="border border-stone bg-obsidian p-6 text-white space-y-3 dark:border-white/15">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-light">
                  Direct Sales Consultation
                </span>
                <p className="flex items-center gap-2 font-serif text-2xl font-semibold">
                  <Phone className="h-5 w-5 text-crimson-ink" />
                  <span>{COMPANY.contactSummary.salesPhone}</span>
                </p>
                <p className="flex items-center gap-2 text-xs text-white/80">
                  <Mail className="h-4 w-4 text-bronze-light" />
                  <span>{COMPANY.contactSummary.salesEmail}</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-stone bg-surface p-7 shadow-editorial sm:p-10"
              >
                <div className="border-b border-stone pb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                    Client Preference Form
                  </span>
                  <h2 className="mt-1 font-serif text-3xl font-semibold text-charcoal">
                    FLAT INFORMATION
                  </h2>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="mt-5 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-800/70 dark:bg-red-950/50 dark:text-red-200"
                  >
                    {error}
                  </div>
                )}

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="buyer_area"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Preferred Area <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="buyer_area"
                      name="area"
                      type="text"
                      required
                      value={form.area}
                      onChange={handleChange}
                      placeholder="e.g., Bashundhara R/A, Jalshiri Abashon"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="flat_size"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Preferred Flat Size (Sft){' '}
                      <span className="text-crimson-ink">*</span>
                    </label>
                    <select
                      id="flat_size"
                      name="flat_size"
                      required
                      value={form.flat_size}
                      onChange={handleChange}
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    >
                      {FLAT_SIZES.map((sft) => (
                        <option key={sft} value={String(sft)}>
                          {sft} Sft
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="buyer_name"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Your Full Name <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="buyer_name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="buyer_phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Phone Number <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="buyer_phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="buyer_email"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="buyer_email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="buyer_address"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Present Address / Notes (Optional)
                    </label>
                    <textarea
                      id="buyer_address"
                      name="address"
                      rows={3}
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Share your address, preferred facing, or specific project interest..."
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-8 border-t border-stone pt-6">
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-crimson px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-crimson-dark"
                  >
                    <span>Submit Buyer Query</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

