import { useState } from 'react';
import { Briefcase, Info, MapPin, Phone, Users } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { TEAM_MEMBERS, TEAM_TABS } from '../data/siteData';

type TabFilter = 'all' | 'management' | 'marketing' | 'technical' | 'general';

export function TeamPage() {
  const [activeTab, setActiveTab] = useState<TabFilter>('management');

  const filteredMembers =
    activeTab === 'all'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.tab === activeTab);

  const getInitials = (name: string) =>
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || '')
      .join('');

  return (
    <div>
      <PageBanner
        eyebrow="Career & People"
        title="KINGDOM Team Members"
        subtitle="Personnel directory across Management, Marketing, Technical, and General Team divisions."
        breadcrumbs={[{ label: 'Career', to: '/career' }, { label: 'Team Members' }]}
        badge="4 Teams"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Tabs matching original 4 divisions + All option */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {TEAM_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-[#2D3192] text-white shadow-xs dark:bg-[#3B5BDB] dark:text-white'
                    : 'border border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#2D3192] dark:border-white/15 dark:bg-[#141D35] dark:text-slate-200 dark:hover:border-[#93C5FD]'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                activeTab === 'all'
                  ? 'bg-[#2D3192] text-white shadow-xs dark:bg-[#3B5BDB]'
                  : 'border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] hover:border-[#2D3192] dark:border-white/15 dark:bg-[#10182C] dark:text-slate-300 dark:hover:border-[#93C5FD]'
              }`}
            >
              View All (4)
            </button>
          </div>
        </div>

        {/* Member Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredMembers.map((member) => (
            <article
              key={member.id}
              className="flex flex-col gap-5 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#141D35] sm:flex-row"
            >
              {/* Portrait or Accessible Initials Monogram */}
              <div className="shrink-0">
                {member.recoveredImage ? (
                  <img
                    src={member.recoveredImage}
                    alt={member.name}
                    className="h-32 w-28 rounded-xl border border-[#E2E8F0] object-cover object-top shadow-2xs dark:border-white/15"
                  />
                ) : (
                  <div className="flex h-32 w-28 flex-col items-center justify-center rounded-xl border border-[#E2E8F0] bg-gradient-to-br from-[#2D3192] to-[#1E2270] text-white dark:border-white/15">
                    <span className="font-display text-2xl font-bold tracking-wider">
                      {getInitials(member.name)}
                    </span>
                    <span className="mt-1 font-mono-tech text-[9px] uppercase tracking-widest text-[#93C5FD]">
                      No Origin Img
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F1F5F9] px-2.5 py-0.5 font-mono-tech text-[10px] font-semibold uppercase tracking-wider text-[#2D3192] dark:bg-[#3B5BDB]/20 dark:text-[#BFDBFE]">
                    <Users className="h-3 w-3 text-[#2D3192] dark:text-[#93C5FD]" />
                    {TEAM_TABS.find((t) => t.id === member.tab)?.label}
                  </span>

                  <h2 className="mt-2 font-display text-xl font-semibold text-[#2D3192] dark:text-white">
                    {member.name}
                  </h2>

                  <div className="mt-3 space-y-1.5 text-sm text-[#475569] dark:text-slate-300">
                    <p className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-[#2D3192] dark:text-[#93C5FD]" />
                      <span>
                        <strong className="text-[#0F172A] dark:text-white">Designation:</strong>{' '}
                        {member.designation} •{' '}
                        <strong className="text-[#0F172A] dark:text-white">Department:</strong>{' '}
                        {member.department}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[#2D3192] dark:text-[#93C5FD]" />
                      <a
                        href={`tel:${member.contactNo}`}
                        className="font-mono-tech font-medium text-[#2D3192] tabular-nums hover:underline dark:text-[#93C5FD]"
                      >
                        {member.contactNo}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#2D3192] dark:text-[#93C5FD]" />
                      <span>Location: {member.location}</span>
                    </p>
                  </div>
                </div>

                {member.note && (
                  <p className="mt-4 flex items-start gap-1.5 border-t border-[#E2E8F0] pt-2.5 text-[11px] text-[#475569] dark:border-white/10 dark:text-slate-400">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2D3192] dark:text-[#93C5FD]" />
                    <span>{member.note}</span>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

