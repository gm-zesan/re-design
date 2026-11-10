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
                    ? 'bg-[#18191D] text-white shadow-xs dark:bg-[#8C6730] dark:text-[#111215]'
                    : 'border border-[#E4E3DF] bg-white text-[#141518] hover:border-[#18191D] dark:border-white/15 dark:bg-[#1A1C21] dark:text-zinc-200 dark:hover:border-[#C9A46B]'
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
                  ? 'bg-[#8C6730] text-[#111215] shadow-xs dark:bg-[#C9A46B]'
                  : 'border border-[#E4E3DF] bg-[#F9F9F8] text-[#52555E] hover:border-[#18191D] dark:border-white/15 dark:bg-[#141518] dark:text-zinc-300 dark:hover:border-[#C9A46B]'
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
              className="flex flex-col gap-5 rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:flex-row"
            >
              {/* Portrait or Accessible Initials Monogram */}
              <div className="shrink-0">
                {member.recoveredImage ? (
                  <img
                    src={member.recoveredImage}
                    alt={member.name}
                    className="h-32 w-28 rounded-xl border border-[#E4E3DF] object-cover object-top shadow-2xs dark:border-white/15"
                  />
                ) : (
                  <div className="flex h-32 w-28 flex-col items-center justify-center rounded-xl border border-[#E4E3DF] bg-gradient-to-br from-[#18191D] to-[#2E3036] text-white dark:border-white/15">
                    <span className="font-display text-2xl font-bold tracking-wider">
                      {getInitials(member.name)}
                    </span>
                    <span className="mt-1 font-mono-tech text-[9px] uppercase tracking-widest text-[#C9A46B]">
                      No Origin Img
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F2F1EE] px-2.5 py-0.5 font-mono-tech text-[10px] font-semibold uppercase tracking-wider text-[#18191D] dark:bg-[#C9A46B]/18 dark:text-[#DFC69B]">
                    <Users className="h-3 w-3 text-[#8C6730] dark:text-[#C9A46B]" />
                    {TEAM_TABS.find((t) => t.id === member.tab)?.label}
                  </span>

                  <h2 className="mt-2 font-display text-xl font-semibold text-[#18191D] dark:text-white">
                    {member.name}
                  </h2>

                  <div className="mt-3 space-y-1.5 text-sm text-[#52555E] dark:text-zinc-300">
                    <p className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-[#8C6730] dark:text-[#C9A46B]" />
                      <span>
                        <strong className="text-[#141518] dark:text-white">Designation:</strong>{' '}
                        {member.designation} •{' '}
                        <strong className="text-[#141518] dark:text-white">Department:</strong>{' '}
                        {member.department}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[#8C6730] dark:text-[#C9A46B]" />
                      <a
                        href={`tel:${member.contactNo}`}
                        className="font-mono-tech font-medium text-[#18191D] tabular-nums hover:underline dark:text-[#C9A46B]"
                      >
                        {member.contactNo}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#8C6730] dark:text-[#C9A46B]" />
                      <span>Location: {member.location}</span>
                    </p>
                  </div>
                </div>

                {member.note && (
                  <p className="mt-4 flex items-start gap-1.5 border-t border-[#E4E3DF] pt-2.5 text-[11px] text-[#52555E] dark:border-white/10 dark:text-zinc-400">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
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

