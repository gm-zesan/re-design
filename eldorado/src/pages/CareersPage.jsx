import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  FileUp,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { JOB_CIRCULARS } from '../data/editorial';

export default function CareersPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const prefillDesignation = location.state?.prefillDesignation || '';

  const [form, setForm] = useState({
    career_name: '',
    femail: '',
    career_phone: '',
    career_designation: prefillDesignation,
    career_city: '',
    career_salary: '',
    career_experience: '',
    career_comment: '',
  });
  const [cvFileName, setCvFileName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (prefillDesignation) {
      setForm((prev) => ({
        ...prev,
        career_designation: prefillDesignation,
      }));
    }
  }, [prefillDesignation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyForJob = (designation) => {
    setForm((prev) => ({ ...prev, career_designation: designation }));
    const el = document.getElementById('apply-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.career_name.trim() ||
      !form.femail.trim() ||
      !form.career_phone.trim() ||
      !form.career_designation.trim() ||
      !form.career_city.trim()
    ) {
      setError('Please complete all required application fields.');
      return;
    }
    setError('');
    navigate('/thankyou', {
      state: {
        source: 'Career Application',
        summary: {
          Applicant: form.career_name,
          Position: form.career_designation,
          Email: form.femail,
          Phone: form.career_phone,
          City: form.career_city,
          CV: cvFileName || 'Not attached',
        },
      },
    });
  };

  return (
    <div>
      <PageHeader
        eyebrow="Join El Dorado Developments Ltd."
        title="Careers & Openings"
        subtitle="Grow your career alongside architects, engineers, and real estate specialists shaping Dhaka’s skyline."
        breadcrumbs={[
          { label: 'Query', to: '/careers' },
          { label: 'Careers' },
        ]}
      />

      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Active Job Circulars */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
              Current Opportunities
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
              Published Job Circulars ({JOB_CIRCULARS.length})
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {JOB_CIRCULARS.map((job) => (
                <article
                  key={job.id}
                  className="flex flex-col justify-between border border-stone bg-surface p-7 shadow-card"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-crimson-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-crimson-ink">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.jobType}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-concrete">
                        <Calendar className="h-3.5 w-3.5 text-bronze-ink" />
                        Deadline: {job.deadline}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl font-semibold text-charcoal">
                      <Link
                        to={`/job-details/${job.id}`}
                        className="hover:text-crimson-ink transition"
                      >
                        {job.designation}
                      </Link>
                    </h3>

                    <div className="mt-4 space-y-2 text-sm text-concrete">
                      <p className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-bronze-ink" />
                        <span>
                          <strong className="text-charcoal">Education:</strong>{' '}
                          {job.education}
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-bronze-ink" />
                        <span>{job.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 border-t border-stone pt-5">
                    <Link
                      to={`/job-details/${job.id}`}
                      className="inline-flex items-center gap-2 border border-obsidian bg-alabaster px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-obsidian transition hover:bg-obsidian hover:text-white dark:border-white/35 dark:text-white dark:hover:bg-white dark:hover:text-obsidian"
                    >
                      <span>View Job Details</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleApplyForJob(job.designation)}
                      className="inline-flex items-center gap-2 bg-crimson px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-crimson-dark"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Apply Now Form */}
          <div id="apply-form" className="scroll-mt-28">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-stone bg-surface p-7 shadow-editorial sm:p-10"
            >
              <div className="border-b border-stone pb-5">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-ink">
                  Candidate Submission
                </span>
                <h2 className="mt-1 font-serif text-3xl font-semibold text-charcoal">
                  Apply Now
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

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label
                    htmlFor="career_name"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Full Name <span className="text-crimson-ink">*</span>
                  </label>
                  <input
                    id="career_name"
                    name="career_name"
                    type="text"
                    required
                    value={form.career_name}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="femail"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Email Address <span className="text-crimson-ink">*</span>
                  </label>
                  <input
                    id="femail"
                    name="femail"
                    type="email"
                    required
                    value={form.femail}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="career_phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Phone Number <span className="text-crimson-ink">*</span>
                  </label>
                  <input
                    id="career_phone"
                    name="career_phone"
                    type="tel"
                    required
                    value={form.career_phone}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="career_designation"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Designation / Position{' '}
                    <span className="text-crimson-ink">*</span>
                  </label>
                  <input
                    id="career_designation"
                    name="career_designation"
                    type="text"
                    required
                    value={form.career_designation}
                    onChange={handleChange}
                    placeholder="e.g., Sr.Executive, Sales"
                    className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="career_city"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    City <span className="text-crimson-ink">*</span>
                  </label>
                  <input
                    id="career_city"
                    name="career_city"
                    type="text"
                    required
                    value={form.career_city}
                    onChange={handleChange}
                    placeholder="Dhaka"
                    className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="career_salary"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Expected Salary
                  </label>
                  <input
                    id="career_salary"
                    name="career_salary"
                    type="text"
                    value={form.career_salary}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="career_experience"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Years of Experience
                  </label>
                  <input
                    id="career_experience"
                    name="career_experience"
                    type="text"
                    value={form.career_experience}
                    onChange={handleChange}
                    placeholder="e.g., 5 Years"
                    className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="careerfile"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Upload CV / Resume (PDF, DOC)
                  </label>
                  <label className="mt-1.5 flex cursor-pointer items-center gap-3 border border-dashed border-stone bg-alabaster px-4 py-2.5 text-sm text-concrete hover:border-crimson">
                    <FileUp className="h-4 w-4 text-crimson-ink" />
                    <span className="truncate">
                      {cvFileName || 'Choose your CV file...'}
                    </span>
                    <input
                      id="careerfile"
                      name="careerfile"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setCvFileName(e.target.files?.[0]?.name || '')
                      }
                      className="sr-only"
                    />
                  </label>
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <label
                    htmlFor="career_comment"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Additional Message / Cover Note
                  </label>
                  <textarea
                    id="career_comment"
                    name="career_comment"
                    rows={3}
                    value={form.career_comment}
                    onChange={handleChange}
                    className="mt-1.5 w-full border border-stone bg-alabaster px-3.5 py-2.5 text-sm text-charcoal focus:border-crimson focus:bg-surface focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-8 border-t border-stone pt-6">
                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-crimson px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-crimson-dark"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

