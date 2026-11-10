import { ChangeEvent, FormEvent, useState } from 'react';
import { FileCheck2, Info, Plus, Trash2, UploadCloud } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ToastBanner } from '../components/ToastBanner';
import {
  BANGLADESH_DISTRICTS,
  POSITION_APPLIED_OPTIONS,
} from '../data/careersData';

interface OtherDocRow {
  id: number;
  fileName: string;
}

export function CvSubmissionPage() {
  const [applicantName, setApplicantName] = useState('');
  const [positionApplied, setPositionApplied] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [birthDay, setBirthDay] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [expertOn, setExpertOn] = useState('');
  const [experience1, setExperience1] = useState('');
  const [experience2, setExperience2] = useState('');

  const [pictureName, setPictureName] = useState('');
  const [picturePreview, setPicturePreview] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState('');
  const [otherDocs, setOtherDocs] = useState<OtherDocRow[]>([{ id: 1, fileName: '' }]);

  const [errorMsg, setErrorMsg] = useState('');
  const [submittedSummary, setSubmittedSummary] = useState<{
    applicantName: string;
    positionLabel: string;
    district: string;
    email: string;
    otherDocsCount: number;
  } | null>(null);

  const handlePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPictureName('');
      setPicturePreview(null);
      return;
    }
    setPictureName(file.name);
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setPicturePreview(String(reader.result));
      reader.readAsDataURL(file);
    } else {
      setPicturePreview(null);
    }
  };

  const handleCvChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setCvFileName(file ? file.name : '');
  };

  const handleOtherDocChange = (rowId: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setOtherDocs((prev) =>
      prev.map((row) =>
        row.id === rowId ? { ...row, fileName: file ? file.name : '' } : row
      )
    );
  };

  const addOtherDocRow = () => {
    setOtherDocs((prev) => [
      ...prev,
      { id: prev.length > 0 ? Math.max(...prev.map((r) => r.id)) + 1 : 1, fileName: '' },
    ]);
  };

  const removeOtherDocRow = (rowId: number) => {
    if (otherDocs.length <= 1) return;
    setOtherDocs((prev) => prev.filter((row) => row.id !== rowId));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !applicantName.trim() ||
      !positionApplied ||
      !birthDay.trim() ||
      !contactNo.trim() ||
      !email.trim() ||
      !address.trim() ||
      !district ||
      !pictureName ||
      !cvFileName
    ) {
      setErrorMsg(
        'Please complete all required fields (*) including Picture and Attach CV before submitting.'
      );
      return;
    }

    const selectedPos =
      POSITION_APPLIED_OPTIONS.find((opt) => opt.value === positionApplied)?.label ||
      positionApplied;

    setErrorMsg('');
    setSubmittedSummary({
      applicantName,
      positionLabel: selectedPos,
      district,
      email,
      otherDocsCount: otherDocs.filter((d) => d.fileName).length,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <PageBanner
        eyebrow="Career Application"
        title="CV Submission"
        subtitle="Preserving all 13 original application fields, 56 KINGDOM GROUP position designations, all 64 districts of Bangladesh, and repeatable supporting document uploads."
        breadcrumbs={[
          { label: 'Career', to: '/career' },
          { label: 'CV Submission' },
        ]}
        backgroundImage="/images/hero/truck1.jpg"
        badge="56 Roles • 64 Districts"
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {submittedSummary && (
          <div className="mb-8">
            <ToastBanner
              visible
              title="CV Submission Validated (Frontend Preview)"
              message={`Application prepared for ${submittedSummary.applicantName} applying as "${submittedSummary.positionLabel}" from ${submittedSummary.district} (${submittedSummary.email}, ${submittedSummary.otherDocsCount} extra doc(s)). Backend endpoint /Home/cv_submission_form_info_add is out of scope for this frontend build.`}
              onDismiss={() => setSubmittedSummary(null)}
            />
          </div>
        )}

        {errorMsg && (
          <div className="mb-6 rounded-xl border border-[#C8232C]/40 bg-red-50 px-4 py-3 text-sm font-medium text-[#C8232C] dark:border-red-500/40 dark:bg-red-950/50 dark:text-red-200">
            {errorMsg}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#141D35] sm:p-8"
        >
          {/* Section 1: Personal & Role Selection */}
          <div>
            <h2 className="border-b border-[#E2E8F0] pb-3 font-display text-xl font-semibold text-[#2D3192] dark:border-white/10 dark:text-white">
              1. Applicant &amp; Position Details
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="applicant_name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Name *
                </label>
                <input
                  id="applicant_name"
                  name="applicant_name"
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                />
              </div>

              <div>
                <label
                  htmlFor="job_applied_post_name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Position Applied (56 Roles) *
                </label>
                <select
                  id="job_applied_post_name"
                  name="job_applied_post_name"
                  value={positionApplied}
                  onChange={(e) => setPositionApplied(e.target.value)}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                >
                  <option value="">-- Select Position Applied --</option>
                  {POSITION_APPLIED_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200">
                  Gender *
                </span>
                <div className="mt-2.5 flex items-center gap-6">
                  <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-[#0F172A] dark:text-slate-200">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === 'male'}
                      onChange={() => setGender('male')}
                      className="h-4 w-4 text-[#2D3192] focus:ring-[#2D3192] dark:accent-[#93C5FD]"
                    />
                    <span>Male</span>
                  </label>
                  <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-[#0F172A] dark:text-slate-200">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === 'female'}
                      onChange={() => setGender('female')}
                      className="h-4 w-4 text-[#2D3192] focus:ring-[#2D3192] dark:accent-[#93C5FD]"
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="birth_day"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Date of Birth (dd/mm/yyyy) *
                </label>
                <input
                  id="birth_day"
                  name="birth_day"
                  type="text"
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                  placeholder="dd/mm/yyyy"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] tabular-nums focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Contact & Location */}
          <div>
            <h2 className="border-b border-[#E2E8F0] pb-3 font-display text-xl font-semibold text-[#2D3192] dark:border-white/10 dark:text-white">
              2. Contact Information &amp; District
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact_no"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Contact No. *
                </label>
                <input
                  id="contact_no"
                  name="contact_no"
                  type="tel"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  placeholder="+880 1XXX-XXXXXX"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] tabular-nums focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Present / permanent mailing address"
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                />
              </div>

              <div>
                <label
                  htmlFor="district"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  District (All 64 Districts) *
                </label>
                <select
                  id="district"
                  name="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                >
                  <option value="">-- Select District --</option>
                  {BANGLADESH_DISTRICTS.map((dist) => (
                    <option key={dist} value={dist}>
                      {dist}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="expert_on"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                  >
                    Expert On
                  </label>
                  <span className="font-mono-tech text-[11px] text-[#475569] dark:text-slate-400">
                    {expertOn.length} / 30 chars
                  </span>
                </div>
                <input
                  id="expert_on"
                  name="expert_on"
                  type="text"
                  maxLength={30}
                  value={expertOn}
                  onChange={(e) => setExpertOn(e.target.value)}
                  placeholder="Write your expertise (maximum 30 characters)"
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Work Experiences */}
          <div>
            <h2 className="border-b border-[#E2E8F0] pb-3 font-display text-xl font-semibold text-[#2D3192] dark:border-white/10 dark:text-white">
              3. Experiences
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="experience1"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Experience 1
                </label>
                <textarea
                  id="experience1"
                  name="experience1"
                  rows={3}
                  value={experience1}
                  onChange={(e) => setExperience1(e.target.value)}
                  placeholder="Role, organization & duration"
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                />
              </div>

              <div>
                <label
                  htmlFor="experience2"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Experience 2
                </label>
                <textarea
                  id="experience2"
                  name="experience2"
                  rows={3}
                  value={experience2}
                  onChange={(e) => setExperience2(e.target.value)}
                  placeholder="Previous role, organization & duration"
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#2D3192] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#0F1629] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-[#93C5FD] dark:focus:bg-[#0F1629]"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Picture, CV & Repeatable Other Documents */}
          <div>
            <h2 className="border-b border-[#E2E8F0] pb-3 font-display text-xl font-semibold text-[#2D3192] dark:border-white/10 dark:text-white">
              4. Document Attachments
            </h2>

            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {/* Picture Upload */}
              <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#10182C]">
                <label
                  htmlFor="picture_upload"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Picture (.jpg, .png, .pdf) *
                </label>
                <div className="mt-3 flex items-center gap-3">
                  {picturePreview ? (
                    <img
                      src={picturePreview}
                      alt="Applicant Preview"
                      className="h-14 w-14 rounded-lg border border-[#E2E8F0] object-cover dark:border-white/15"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-dashed border-[#2D3192] bg-white text-[#2D3192] dark:bg-[#141D35] dark:text-[#93C5FD]">
                      <UploadCloud className="h-5 w-5" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <input
                      id="picture_upload"
                      name="image"
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handlePictureChange}
                      className="block w-full text-xs text-[#475569] file:mr-3 file:rounded-lg file:border-0 file:bg-[#2D3192] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#1E2270] dark:text-slate-300 dark:file:bg-[#3B5BDB] dark:file:text-white dark:hover:file:bg-[#4C6EF5]"
                    />
                    {pictureName && (
                      <p className="mt-1 truncate text-[11px] font-medium text-emerald-800 dark:text-emerald-300">
                        Selected: {pictureName}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Attach CV */}
              <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#10182C]">
                <label
                  htmlFor="cv_file"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-slate-200"
                >
                  Attach CV (.doc, .docx, .pdf, .jpg, .png) *
                </label>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-dashed border-[#2D3192] bg-white text-[#2D3192] dark:bg-[#141D35] dark:text-[#93C5FD]">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <input
                      id="cv_file"
                      name="cv_file"
                      type="file"
                      accept=".doc,.docx,.pdf,.jpg,.jpeg,.png"
                      onChange={handleCvChange}
                      className="block w-full text-xs text-[#475569] file:mr-3 file:rounded-lg file:border-0 file:bg-[#2D3192] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#1E2270] dark:text-slate-300 dark:file:bg-[#3B5BDB] dark:file:text-white dark:hover:file:bg-[#4C6EF5]"
                    />
                    {cvFileName && (
                      <p className="mt-1 truncate text-[11px] font-medium text-emerald-800 dark:text-emerald-300">
                        Attached: {cvFileName}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Repeatable Other Documents Rows */}
            <div className="mt-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#10182C]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white">
                    Other Documents (.doc, .docx, .pdf, .jpg, .png)
                  </p>
                  <p className="text-[11px] text-[#475569] dark:text-slate-300">
                    Add academic certificates, NID, or portfolio files as needed.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addOtherDocRow}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#2D3192] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1E2270] dark:bg-[#3B5BDB] dark:text-white dark:hover:bg-[#4C6EF5]"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Row</span>
                </button>
              </div>

              <div className="mt-4 space-y-2.5">
                {otherDocs.map((row, idx) => (
                  <div
                    key={row.id}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 dark:border-white/10 dark:bg-[#141D35]"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <span className="font-mono-tech text-xs text-[#475569] dark:text-slate-400">#{idx + 1}</span>
                      <input
                        type="file"
                        name="others_document[]"
                        accept=".doc,.docx,.pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleOtherDocChange(row.id, e)}
                        className="block w-full text-xs text-[#475569] file:mr-3 file:rounded-lg file:border-0 file:bg-[#F1F5F9] file:px-3 file:py-1 file:text-xs file:font-semibold file:text-[#2D3192] dark:text-slate-300 dark:file:bg-white/10 dark:file:text-[#BFDBFE]"
                      />
                    </div>
                    {otherDocs.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeOtherDocRow(row.id)}
                        className="rounded-lg p-1.5 text-[#C8232C] transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/50"
                        aria-label={`Remove document row ${idx + 1}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E8F0] pt-6 dark:border-white/10">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#475569] dark:text-slate-300">
              <Info className="h-4 w-4 text-[#2D3192] dark:text-[#93C5FD]" />
              <span>Fields marked (*) are required on the original application form.</span>
            </span>
            <button
              type="submit"
              className="rounded-xl bg-[#2D3192] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1E2270] dark:bg-[#3B5BDB] dark:text-white dark:hover:bg-[#4C6EF5]"
            >
              Submit CV Application
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

