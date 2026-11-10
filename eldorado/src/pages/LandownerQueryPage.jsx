import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COMPANY } from '../data/siteData';

export default function LandownerQueryPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    area: '',
    address: '',
    land_size: '',
    width_of_road_in_front: '',
    land_category: 'Freehold',
    land_facing: 'East',
    landowner_name: '',
    contact_number: '',
    email: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.area.trim() ||
      !form.address.trim() ||
      !form.land_size.trim() ||
      !form.width_of_road_in_front.trim() ||
      !form.landowner_name.trim() ||
      !form.contact_number.trim()
    ) {
      setError('Please complete all required land and contact fields.');
      return;
    }
    setError('');
    navigate('/thankyou', {
      state: {
        source: 'Landowner Joint-Venture Inquiry',
        summary: {
          Landowner: form.landowner_name,
          Contact: form.contact_number,
          Area: form.area,
          'Land Size': form.land_size,
          'Front Road': form.width_of_road_in_front,
          'Category / Facing': `${form.land_category} • ${form.land_facing}`,
        },
      },
    });
  };

  return (
    <div>
      <PageHeader
        eyebrow="Landowners"
        title="LET'S INVEST FOR FUTURE"
        subtitle="Partner with El Dorado Developments Ltd. to transform prime residential and commercial plots across Dhaka into enduring architectural landmarks."
        breadcrumbs={[
          { label: 'Query', to: '/landowner-query' },
          { label: 'Landowner Query' },
        ]}
        image="/media/slider/WhatsApp_Image_2023-07-23_at_12.39.20.jpeg"
        badgeLabel="Joint Venture Land"
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Editorial Rationale */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                  Joint Venture Partnership
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                  Partners at the Core of Every Milestone
                </h2>
                <p className="mt-4 text-base leading-relaxed text-concrete">
                  Landowners have always been the key partners in our journey
                  so far. Eldorado Developments Ltd has earned immense trust
                  from the landowners over the years through the quality
                  commitment and excellence of work. Each &amp; Every project of
                  Eldorado Developments Ltd intends to turn into a notorious
                  milestone on the horizon of Dhaka. Holding fast to the point,
                  Eldorado Developments Ltd projects convey the sign of
                  architectural and technical advancement in a manner which puts
                  the partners at the core of each thought and action to go with
                  us. Here, the landowners are very significant to satisfy our
                  points over the long haul. Eldorado Developments Ltd is a
                  place for commitment &amp; excellence as well as a place for
                  aristocrat identity.
                </p>
              </div>

              <div className="border border-stone bg-surface p-6 space-y-3 shadow-card">
                <div className="flex items-center gap-2 text-crimson-ink">
                  <Building2 className="h-5 w-5" />
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    Why Landowners Trust El Dorado
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-concrete">
                  {[
                    '70+ completed developments delivered since 2003',
                    'REHAB Member & RAJUK Enlisted architectural practice',
                    'Earthquake & fire-resistant construction standards',
                    'Transparent joint-venture valuation & timely handover',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-stone bg-limestone p-6 text-charcoal transition-colors duration-200 dark:border-white/15 dark:bg-obsidian dark:text-white">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-ink dark:text-bronze-light">
                  Direct Land Development Desk
                </span>
                <p className="mt-2 flex items-center gap-2 font-serif text-2xl font-semibold">
                  <Phone className="h-5 w-5 text-crimson-ink" />
                  <span>{COMPANY.topBar.phone}</span>
                </p>
                <p className="mt-1 text-xs text-concrete dark:text-white/70">
                  Email: {COMPANY.contactSummary.supportEmail}
                </p>
              </div>
            </div>

            {/* Land Information Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-stone bg-surface p-7 shadow-editorial sm:p-10"
              >
                <div className="border-b border-stone pb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                    Proposal Submission
                  </span>
                  <h2 className="mt-1 font-serif text-3xl font-semibold text-charcoal">
                    LAND INFORMATION
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
                      htmlFor="area"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Locality / Area <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="area"
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
                      htmlFor="land_size"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Land Size (Katha / Decimal){' '}
                      <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="land_size"
                      name="land_size"
                      type="text"
                      required
                      value={form.land_size}
                      onChange={handleChange}
                      placeholder="e.g., 5 Katha"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Plot Address <span className="text-crimson-ink">*</span>
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      required
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Plot no, Road no, Block / Sector..."
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="width_of_road_in_front"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Width of Road in Front{' '}
                      <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="width_of_road_in_front"
                      name="width_of_road_in_front"
                      type="text"
                      required
                      value={form.width_of_road_in_front}
                      onChange={handleChange}
                      placeholder="e.g., 40 Feet / 60 Feet"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="land_category"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Land Category <span className="text-crimson-ink">*</span>
                    </label>
                    <select
                      id="land_category"
                      name="land_category"
                      required
                      value={form.land_category}
                      onChange={handleChange}
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    >
                      <option value="Freehold">Freehold</option>
                      <option value="Leasehold">Leasehold</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="land_facing"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Land Facing <span className="text-crimson-ink">*</span>
                    </label>
                    <select
                      id="land_facing"
                      name="land_facing"
                      required
                      value={form.land_facing}
                      onChange={handleChange}
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    >
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="landowner_name"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Landowner Name <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="landowner_name"
                      name="landowner_name"
                      type="text"
                      required
                      value={form.landowner_name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact_number"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Contact Number <span className="text-crimson-ink">*</span>
                    </label>
                    <input
                      id="contact_number"
                      name="contact_number"
                      type="tel"
                      required
                      value={form.contact_number}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-8 border-t border-stone pt-6">
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-crimson px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-crimson-dark"
                  >
                    <span>Submit Land Inquiry</span>
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

