import { Calendar, FileText, Info } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { NOTICE_DATA } from '../data/siteData';

export function NoticesPage() {
  return (
    <div>
      <PageBanner
        eyebrow="Official Bulletin"
        title="General Notice"
        subtitle="Official announcements published under Career -> General Notice on the KINGDOM GROUP corporate portal."
        breadcrumbs={[{ label: 'Career', to: '/career' }, { label: 'General Notice' }]}
        backgroundImage="/images/about/about-banner.jpg"
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {NOTICE_DATA.map((notice) => (
            <article
              key={notice.id}
              className="overflow-hidden rounded-2xl border border-[#E4E3DF] bg-white shadow-sm dark:border-white/10 dark:bg-[#1A1C21]"
            >
              {/* Formal Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E3DF] bg-[#18191D] px-6 py-4 text-white dark:border-white/10 dark:bg-[#141518]">
                <div className="flex items-center gap-2.5">
                  <FileText className="h-5 w-5 text-[#C9A46B]" />
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-[#DFC69B]">
                    Notice No: {notice.noticeNo}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono-tech text-xs text-white/85">
                  <Calendar className="h-3.5 w-3.5 text-[#C9A46B]" />
                  <span>Date: {notice.date}</span>
                </div>
              </div>

              {/* Notice Sheet Content */}
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-[#18191D] dark:text-white sm:text-3xl">
                  {notice.title}
                </h2>

                <div className="mt-6 space-y-3 rounded-2xl border border-[#E4E3DF] bg-[#F9F9F8] p-6 text-sm leading-relaxed text-[#141518] dark:border-white/10 dark:bg-[#141518] dark:text-[#F4F3F0]">
                  {notice.verbatimBody.map((line, idx) => (
                    <p
                      key={idx}
                      className={
                        line === 'Authority' || line === 'GEE Bangladesh'
                          ? 'font-semibold text-[#18191D] dark:text-[#C9A46B]'
                          : ''
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#8C6730]/40 bg-[#F2F1EE]/65 p-4 text-xs text-[#52555E] dark:border-[#8C6730]/30 dark:bg-[#1E2026] dark:text-zinc-300">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                  <p>{notice.auditNote}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

