import { FormEvent, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  Building,
  CheckCircle2,
  Compass,
  FileText,
  Images,
  Info,
  Layers,
  Mail,
  Map as MapIcon,
  MapPin,
  Maximize2,
  MessageSquare,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { ImageLightbox } from '../components/ImageLightbox';
import { ToastBanner } from '../components/ToastBanner';
import { KINGDOM_CITY_DATA } from '../data/concernsData';
import { HOUSING_BOOKING_DETAILS } from '../data/siteData';

type HousingTab =
  | 'about'
  | 'location-map'
  | 'layout-plan'
  | 'booking'
  | 'gallery'
  | 'feedback';

interface HousingPageProps {
  defaultSection?: HousingTab;
}

const SIDEBAR_LINKS: { id: HousingTab; label: string; to: string; icon: typeof Building }[] = [
  { id: 'about', label: 'About Kingdom City', to: '/concerns/housing', icon: Building },
  { id: 'location-map', label: 'Location Map', to: '/concerns/housing/location-map', icon: MapIcon },
  { id: 'layout-plan', label: 'Layout Plan', to: '/concerns/housing/layout-plan', icon: Layers },
  { id: 'booking', label: 'Booking Contact', to: '/concerns/housing/booking', icon: Phone },
  { id: 'gallery', label: 'Photo Gallery', to: '/concerns/housing/gallery', icon: Images },
  { id: 'feedback', label: 'Feedback', to: '/concerns/housing/feedback', icon: MessageSquare },
];

const PLOT_SIZES = ['2.5', '3', '4', '5', '6', '7.5', '10'];

export function HousingPage({ defaultSection }: HousingPageProps) {
  const { section } = useParams<{ section?: string }>();
  const location = useLocation();

  const resolveActiveTab = (): HousingTab => {
    if (defaultSection) return defaultSection;
    if (section === 'location-map') return 'location-map';
    if (section === 'layout-plan') return 'layout-plan';
    if (section === 'booking') return 'booking';
    if (section === 'gallery') return 'gallery';
    if (section === 'feedback') return 'feedback';
    if (location.pathname.toLowerCase().includes('location_map')) return 'location-map';
    if (location.pathname.toLowerCase().includes('layout_plan')) return 'layout-plan';
    if (location.pathname.toLowerCase().includes('booking')) return 'booking';
    if (location.pathname.toLowerCase().includes('galleryh')) return 'gallery';
    if (location.pathname.toLowerCase().includes('feedback')) return 'feedback';
    return 'about';
  };

  const activeTab = resolveActiveTab();
  const [selectedPlot, setSelectedPlot] = useState('3');
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    title: string;
    caption?: string;
  } | null>(null);

  // Feedback form state (matches contact_name, contact_email, contact_words)
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactWords, setContactWords] = useState('');
  const [feedbackError, setFeedbackError] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactWords.trim()) {
      setFeedbackError('Please enter your name, email address, and message before submitting.');
      return;
    }
    setFeedbackError('');
    setFeedbackSubmitted(true);
    setContactName('');
    setContactEmail('');
    setContactWords('');
  };

  return (
    <div>
      <PageBanner
        eyebrow="KINGDOM Housing Ltd. • Flagship Township"
        title="KINGDOM City"
        subtitle="স্বপ্ন পূরণ করুন আমাদের হাত ধরে। — A planned eco-conscious residential city situated beside the Dhaleshwari River and Dhaka–Mawa Bypass Road."
        breadcrumbs={[
          { label: 'Our Concern', to: '/concerns' },
          { label: 'KINGDOM Housing Ltd.' },
        ]}
        backgroundImage="/images/hero/kingdom-city-road.jpg"
        backgroundPositionClass="object-[center_30%]"
        badge="RAJUK Reg: RD - 0090"
      />

      {/* Original Housing Sub-Portal Header Strip (hd2.jpg identity preserved with live readable text + click-to-call) */}
      <div className="border-b border-[#E4E3DF] bg-[#141518] text-white dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={KINGDOM_CITY_DATA.logo}
                alt="KINGDOM City Logo"
                className="h-14 w-14 rounded-xl object-cover shadow-sm"
              />
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  {KINGDOM_CITY_DATA.companyHeading}
                </p>
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#C9A46B]">
                  {KINGDOM_CITY_DATA.landownershipBadge}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono-tech mr-1 text-[11px] uppercase tracking-wider text-white/70">
                Hot Lines:
              </span>
              {HOUSING_BOOKING_DETAILS.bannerHotlines.map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-[#8C6730]/50 bg-[#8C6730]/15 px-2.5 py-1 font-mono-tech text-xs font-medium text-[#DFC69B] tabular-nums transition hover:bg-[#C9A46B] hover:text-[#0C0D0F]"
                >
                  <Phone className="h-3 w-3" />
                  <span>{num}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Left Sub-Portal Navigation + Right Active Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Sticky Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-5">
              <div className="overflow-hidden rounded-2xl border border-[#E4E3DF] bg-white shadow-xs dark:border-white/10 dark:bg-[#1A1C21]">
                <div className="border-b border-[#E4E3DF] bg-[#F2F1EE] px-4 py-3 dark:border-white/10 dark:bg-[#141518]">
                  <p className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#18191D] dark:text-[#C9A46B]">
                    KINGDOM City Navigation
                  </p>
                </div>
                <nav className="p-2" aria-label="Kingdom Housing sections">
                  {SIDEBAR_LINKS.map((item) => {
                    const Icon = item.icon;
                    const active = activeTab === item.id;
                    return (
                      <Link
                        key={item.id}
                        to={item.to}
                        className={`flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                          active
                            ? 'bg-[#18191D] text-white shadow-xs dark:bg-[#8C6730] dark:text-[#111215]'
                            : 'text-[#141518] hover:bg-[#F9F9F8] hover:text-[#18191D] dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-[#DFC69B]'
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 ${
                            active
                              ? 'text-[#C9A46B] dark:text-[#111215]'
                              : 'text-[#8C6730] dark:text-[#C9A46B]'
                          }`}
                        />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Credentials Card */}
              <div className="rounded-2xl border border-[#E4E3DF] bg-white p-5 dark:border-white/10 dark:bg-[#1A1C21]">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                  Verified Credentials
                </p>
                <div className="mt-3 space-y-2">
                  {KINGDOM_CITY_DATA.associations.map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 rounded-lg bg-[#F9F9F8] px-3 py-2 text-xs font-semibold text-[#18191D] ring-1 ring-[#E4E3DF] dark:bg-[#141518] dark:text-white dark:ring-white/10"
                    >
                      <ShieldCheck className="h-4 w-4 text-[#8C6730] dark:text-[#C9A46B]" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 overflow-hidden rounded-xl border border-[#E4E3DF] dark:border-white/10">
                  <img
                    src={KINGDOM_CITY_DATA.bannerImage}
                    alt="KINGDOM Housing Ltd. Banner Graphic"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Right Dynamic Panel */}
          <div className="lg:col-span-9">
            {activeTab === 'about' && (
              <div className="space-y-8">
                {/* Bilingual Copy + Landownership */}
                <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E3DF] pb-4 dark:border-white/10">
                    <div>
                      <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                        About KINGDOM City
                      </span>
                      <h2 className="font-bengali mt-1 text-2xl font-bold text-[#18191D] dark:text-white sm:text-3xl">
                        {KINGDOM_CITY_DATA.banglaTagline}
                      </h2>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 font-bengali text-xs font-semibold text-emerald-900 ring-1 ring-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:ring-emerald-500/30">
                      {KINGDOM_CITY_DATA.landownershipBadge}
                    </span>
                  </div>

                  <p className="mt-4 font-display text-base italic text-[#52555E] dark:text-zinc-300">
                    {KINGDOM_CITY_DATA.bilingualMotto}
                  </p>

                  {/* Verbatim Bangla Copy */}
                  <div className="mt-5 space-y-3 rounded-2xl border border-[#E4E3DF] bg-[#F9F9F8] p-5 font-bengali text-base leading-relaxed text-[#141518] dark:border-white/10 dark:bg-[#141518] dark:text-[#F4F3F0]">
                    {KINGDOM_CITY_DATA.banglaParagraphs.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  {/* Interactive Plot Size Filter & Installment Rates */}
                  <div className="mt-8">
                    <h3 className="font-display text-xl font-semibold text-[#18191D] dark:text-white">
                      Available Plot Sizes &amp; Easy 5-Year Installment Rates
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {PLOT_SIZES.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedPlot(size)}
                          className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition tabular-nums ${
                            selectedPlot === size
                              ? 'bg-[#18191D] text-white dark:bg-[#8C6730] dark:text-[#111215]'
                              : 'border border-[#E4E3DF] bg-[#F9F9F8] text-[#141518] hover:border-[#18191D] dark:border-white/15 dark:bg-[#141518] dark:text-zinc-200 dark:hover:border-[#C9A46B]'
                          }`}
                        >
                          {size} Katha
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-[#E4E3DF] bg-[#F2F1EE]/60 p-4 text-sm text-[#141518] dark:border-[#8C6730]/30 dark:bg-[#1E2026] dark:text-white">
                      <p className="font-semibold text-[#18191D] dark:text-[#C9A46B]">
                        Selected Size: {selectedPlot} Katha Plot
                      </p>
                      <p className="mt-1 text-xs text-[#52555E] dark:text-zinc-300">
                        {selectedPlot === '3'
                          ? 'Published promotional installment from brochure (ab.jpg): 30,000 BDT / month over easy 5-year installment plan (or lump-sum).'
                          : selectedPlot === '5'
                            ? 'Published promotional installment from brochure (ab.jpg): 40,000 BDT / month over easy 5-year installment plan (or lump-sum).'
                            : `Available under lump-sum and easy 5-year installment terms. Contact Booking Hotline 01711925098 for exact ${selectedPlot} Katha allotment schedule.`}
                      </p>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {KINGDOM_CITY_DATA.installmentPricing.map((plan) => (
                        <div
                          key={plan.plotSizeEnglish}
                          className="rounded-2xl border border-[#18191D]/20 bg-[#18191D] p-5 text-white shadow-sm dark:border-[#8C6730]/30 dark:bg-[#141518]"
                        >
                          <p className="font-mono-tech text-[11px] uppercase tracking-wider text-[#C9A46B]">
                            {plan.plotSizeEnglish} ({plan.plotSizeBangla})
                          </p>
                          <p className="mt-1 font-display text-2xl font-bold tabular-nums">
                            {plan.monthlyEnglish}
                          </p>
                          <p className="font-bengali mt-1 text-sm text-white/85">
                            {plan.monthlyBangla}
                          </p>
                          <p className="mt-2 text-[11px] text-white/65">{plan.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Zoomable ab.jpg Brochure Graphic */}
                <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#18191D] dark:text-white">
                        Original Promotional Brochure &amp; Offer Sheet
                      </h3>
                      <p className="text-xs text-[#52555E] dark:text-zinc-300">
                        Preserved graphic from `/Home/content_details` (`ab.jpg`) — click to inspect at full resolution
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          src: KINGDOM_CITY_DATA.promoBrochureImage,
                          alt: 'KINGDOM City Brochure (ab.jpg)',
                          title: 'KINGDOM City Installment & Offer Sheet',
                          caption: 'ধলেশ্বরী নদীর তীরে একখণ্ড জমি — 3 Katha 30,000 BDT & 5 Katha 40,000 BDT',
                        })
                      }
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#18191D] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Zoom Brochure</span>
                    </button>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] dark:border-white/10 dark:bg-[#141518]">
                    <img
                      src={KINGDOM_CITY_DATA.promoBrochureImage}
                      alt="KINGDOM City Promotional Brochure"
                      className="mx-auto max-h-[540px] w-auto cursor-zoom-in object-contain"
                      onClick={() =>
                        setLightbox({
                          src: KINGDOM_CITY_DATA.promoBrochureImage,
                          alt: 'KINGDOM City Brochure (ab.jpg)',
                          title: 'KINGDOM City Installment & Offer Sheet',
                          caption: 'Original promotional sheet (ab.jpg)',
                        })
                      }
                    />
                  </div>
                </div>

                {/* Block-Wise Planned Civic Amenities */}
                <div className="rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                  <h3 className="font-display text-xl font-semibold text-[#18191D] dark:text-white">
                    Planned Civic Amenities in Every Block
                  </h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {KINGDOM_CITY_DATA.blockAmenities.map((item) => (
                      <div
                        key={item.en}
                        className="flex items-start gap-2.5 rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] p-3.5 dark:border-white/10 dark:bg-[#141518]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                        <div>
                          <p className="text-sm font-semibold text-[#141518] dark:text-white">{item.en}</p>
                          <p className="font-bengali text-xs text-[#52555E] dark:text-zinc-300">{item.bn}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'location-map' && (
              <div className="space-y-6 rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E3DF] pb-4 dark:border-white/10">
                  <div>
                    <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                      Connectivity &amp; Site Map
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-semibold text-[#18191D] dark:text-white sm:text-3xl">
                      Location Map
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: KINGDOM_CITY_DATA.locationMapImage,
                        alt: 'KINGDOM City Location Map',
                        title: 'KINGDOM City Location Map (lm.jpg)',
                        caption: 'Dhaka–Mawa By-Pass Road & Dhaleshwari River Corridor',
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-[#18191D] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
                  >
                    <Maximize2 className="h-4 w-4 text-[#C9A46B] dark:text-[#111215]" />
                    <span>Open Interactive Zoom Viewer</span>
                  </button>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] p-2 dark:border-white/10 dark:bg-[#141518]">
                  <img
                    src={KINGDOM_CITY_DATA.locationMapImage}
                    alt="KINGDOM City Location Map"
                    className="mx-auto max-h-[700px] w-full cursor-zoom-in rounded-lg object-contain"
                    onClick={() =>
                      setLightbox({
                        src: KINGDOM_CITY_DATA.locationMapImage,
                        alt: 'KINGDOM City Location Map',
                        title: 'KINGDOM City Location Map (lm.jpg)',
                        caption: 'Click + / - inside the viewer to inspect road links',
                      })
                    }
                  />
                </div>

                <div>
                  <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-[#18191D] dark:text-white">
                    <Compass className="h-5 w-5 text-[#8C6730] dark:text-[#C9A46B]" />
                    <span>Key Roadways &amp; Corridor Landmarks Shown on Map</span>
                  </h3>
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {KINGDOM_CITY_DATA.locationCorridors.map((corridor) => (
                      <div
                        key={corridor}
                        className="flex items-center gap-2.5 rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-3 text-sm text-[#141518] dark:border-white/10 dark:bg-[#141518] dark:text-zinc-200"
                      >
                        <MapPin className="h-4 w-4 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                        <span>{corridor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'layout-plan' && (
              <div className="space-y-6 rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E3DF] pb-4 dark:border-white/10">
                  <div>
                    <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                      Master Plan • Sectors 1–7
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-semibold text-[#18191D] dark:text-white sm:text-3xl">
                      City Layout PLAN
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        src: KINGDOM_CITY_DATA.layoutPlanImage,
                        alt: 'KINGDOM City Master Layout Plan',
                        title: 'KINGDOM City Master Layout Plan (lp2.jpg)',
                        caption: 'RAJUK RD - 0090 • Sectors 1–7 along 300 ft Dhaka–Mawa Bypass Road',
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-[#18191D] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
                  >
                    <Maximize2 className="h-4 w-4 text-[#C9A46B] dark:text-[#111215]" />
                    <span>Inspect Masterplan at 300%</span>
                  </button>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] p-2 dark:border-white/10 dark:bg-[#141518]">
                  <img
                    src={KINGDOM_CITY_DATA.layoutPlanImage}
                    alt="KINGDOM City Layout Plan"
                    className="mx-auto max-h-[680px] w-full cursor-zoom-in rounded-lg object-contain"
                    onClick={() =>
                      setLightbox({
                        src: KINGDOM_CITY_DATA.layoutPlanImage,
                        alt: 'KINGDOM City Master Layout Plan',
                        title: 'KINGDOM City Master Layout Plan (lp2.jpg)',
                        caption: 'Zoom in to inspect individual block roads and plots',
                      })
                    }
                  />
                </div>

                {/* Extracted Sector Directory */}
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#18191D] dark:text-white">
                    Township Sector Breakdown (Extracted from Layout Plan)
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {KINGDOM_CITY_DATA.sectors.map((sec) => (
                      <div
                        key={sec.sector}
                        className="rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] p-4 dark:border-white/10 dark:bg-[#141518]"
                      >
                        <p className="font-mono-tech text-xs font-bold uppercase text-[#18191D] dark:text-[#C9A46B]">
                          {sec.sector}
                        </p>
                        <p className="mt-1 text-sm text-[#52555E] dark:text-zinc-300">{sec.highlights}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'booking' && (
              <div className="space-y-6 rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                <div className="border-b border-[#E4E3DF] pb-4 dark:border-white/10">
                  <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                    Plot Inquiry &amp; Client Desk
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#18191D] dark:text-white sm:text-3xl">
                    Booking Contact
                  </h2>
                  <p className="mt-1 text-sm text-[#52555E] dark:text-zinc-300">{HOUSING_BOOKING_DETAILS.intro}</p>
                </div>

                {/* Hotlines */}
                <div className="rounded-2xl border border-[#18191D] bg-[#18191D] p-6 text-white dark:border-white/10 dark:bg-[#141518]">
                  <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#C9A46B]">
                    Direct Booking Hotlines
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {HOUSING_BOOKING_DETAILS.hotlines.map((hotline) => (
                      <a
                        key={hotline}
                        href={`tel:${hotline}`}
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-mono-tech text-sm font-semibold text-white tabular-nums transition hover:border-[#C9A46B] hover:bg-[#C9A46B] hover:text-[#0C0D0F]"
                      >
                        <Phone className="h-4 w-4 text-[#C9A46B]" />
                        <span>{hotline}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 3 Offices */}
                <div className="grid gap-5 md:grid-cols-3">
                  {/* Corporate Office */}
                  <div className="rounded-2xl border border-[#E4E3DF] bg-[#F9F9F8] p-5 dark:border-white/10 dark:bg-[#141518]">
                    <h3 className="font-display text-lg font-semibold text-[#18191D] dark:text-[#C9A46B]">
                      {HOUSING_BOOKING_DETAILS.registeredCorporate.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#141518] dark:text-zinc-200">
                      {HOUSING_BOOKING_DETAILS.registeredCorporate.address}
                    </p>
                    <div className="mt-4 space-y-1.5 text-xs text-[#52555E] dark:text-zinc-300">
                      <p>
                        <strong className="dark:text-white">Phone:</strong> {HOUSING_BOOKING_DETAILS.registeredCorporate.phone}
                      </p>
                      <p>
                        <strong className="dark:text-white">Fax:</strong> {HOUSING_BOOKING_DETAILS.registeredCorporate.fax}
                      </p>
                      <p>
                        <strong className="dark:text-white">Mobile:</strong> {HOUSING_BOOKING_DETAILS.registeredCorporate.mobile}
                      </p>
                      <p className="flex flex-wrap items-center gap-1">
                        <Mail className="h-3.5 w-3.5 text-[#8C6730] dark:text-[#C9A46B]" />
                        <span>{HOUSING_BOOKING_DETAILS.registeredCorporate.emails.join(', ')}</span>
                      </p>
                      <p>
                        <strong className="dark:text-white">Web:</strong> {HOUSING_BOOKING_DETAILS.registeredCorporate.web}
                      </p>
                    </div>
                  </div>

                  {/* Sales Office */}
                  <div className="rounded-2xl border border-[#E4E3DF] bg-[#F9F9F8] p-5 dark:border-white/10 dark:bg-[#141518]">
                    <h3 className="font-display text-lg font-semibold text-[#18191D] dark:text-[#C9A46B]">
                      {HOUSING_BOOKING_DETAILS.salesOffice.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#141518] dark:text-zinc-200">
                      {HOUSING_BOOKING_DETAILS.salesOffice.address}
                    </p>
                    <div className="mt-4 space-y-1.5 text-xs text-[#52555E] dark:text-zinc-300">
                      <p>
                        <strong className="dark:text-white">Mobile:</strong> {HOUSING_BOOKING_DETAILS.salesOffice.mobile}
                      </p>
                      <p>
                        <strong className="dark:text-white">Customer Care:</strong>{' '}
                        {HOUSING_BOOKING_DETAILS.salesOffice.customerCare}
                      </p>
                      <p>
                        <strong className="dark:text-white">Collection:</strong> {HOUSING_BOOKING_DETAILS.salesOffice.collection}
                      </p>
                    </div>
                  </div>

                  {/* Site Office */}
                  <div className="rounded-2xl border border-[#E4E3DF] bg-[#F9F9F8] p-5 dark:border-white/10 dark:bg-[#141518]">
                    <h3 className="font-display text-lg font-semibold text-[#18191D] dark:text-[#C9A46B]">
                      {HOUSING_BOOKING_DETAILS.siteOffice.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#141518] dark:text-zinc-200">
                      {HOUSING_BOOKING_DETAILS.siteOffice.address}
                    </p>
                    <p className="mt-3 text-xs text-[#52555E] dark:text-zinc-300">
                      Layout Plan Reference:{' '}
                      <span className="font-medium text-[#141518] dark:text-white">
                        {HOUSING_BOOKING_DETAILS.siteOffice.layoutPlanVariant}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-6 rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                <div className="border-b border-[#E4E3DF] pb-4 dark:border-white/10">
                  <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                    KINGDOM City Visuals
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#18191D] dark:text-white sm:text-3xl">
                    Photo Gallery
                  </h2>
                </div>

                {/* Honest Audit Note regarding empty /Home/galleryH */}
                <div className="rounded-xl border border-[#8C6730]/40 bg-[#F2F1EE]/60 p-4 dark:border-[#8C6730]/30 dark:bg-[#1E2026]">
                  <div className="flex items-start gap-2.5">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#8C6730] dark:text-[#C9A46B]" />
                    <p className="text-xs leading-relaxed text-[#52555E] dark:text-zinc-300">
                      <strong className="text-[#141518] dark:text-white">Origin Page Status:</strong> The dedicated{' '}
                      <code className="rounded bg-white px-1 py-0.5 font-mono-tech dark:bg-white/10 dark:text-[#DFC69B]">
                        /Home/galleryH
                      </code>{' '}
                      gallery container on the original website currently contains zero published
                      items. Below are the verified KINGDOM City site photographs preserved directly
                      from the origin homepage slider.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  {[
                    {
                      src: '/images/hero/kingdom-city-sign.jpg',
                      title: 'Site Signboard — খরিদ সূত্রে জমির মালিক',
                      caption: 'Eastern Bazar, South Keraniganj Site Office',
                    },
                    {
                      src: '/images/hero/kingdom-city-road.jpg',
                      title: 'Paved Approach & Site Office',
                      caption: 'All-weather approach road to KINGDOM City office',
                    },
                    {
                      src: '/images/hero/kingdom-city-development.jpg',
                      title: 'Ready Plot Land Grading',
                      caption: 'Bulldozer leveling active residential blocks',
                    },
                  ].map((photo) => (
                    <div
                      key={photo.src}
                      className="group overflow-hidden rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] dark:border-white/10 dark:bg-[#141518]"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setLightbox({
                              src: photo.src,
                              alt: photo.title,
                              title: photo.title,
                              caption: photo.caption,
                            })
                          }
                          className="absolute bottom-2.5 right-2.5 rounded-lg bg-[#111215]/85 p-2 text-white transition hover:bg-[#18191D]"
                          aria-label={`Zoom ${photo.title}`}
                        >
                          <Maximize2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="p-3.5">
                        <p className="font-bengali text-sm font-semibold text-[#141518] dark:text-white">
                          {photo.title}
                        </p>
                        <p className="mt-0.5 text-xs text-[#52555E] dark:text-zinc-300">{photo.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'feedback' && (
              <div className="space-y-6 rounded-2xl border border-[#E4E3DF] bg-white p-6 shadow-xs dark:border-white/10 dark:bg-[#1A1C21] sm:p-8">
                <div className="border-b border-[#E4E3DF] pb-4 dark:border-white/10">
                  <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#8C6730] dark:text-[#C9A46B]">
                    KINGDOM City Client Response
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#18191D] dark:text-white sm:text-3xl">
                    Feedback
                  </h2>
                  <p className="mt-1 text-sm text-[#52555E] dark:text-zinc-300">
                    Share feedback, site visit requests, or plot inquiries for KINGDOM Housing Ltd.
                  </p>
                </div>

                <ToastBanner
                  visible={feedbackSubmitted}
                  title="Feedback Recorded (Frontend Demo Preview)"
                  message="Thank you for your feedback regarding KINGDOM City. Backend persistence is out of scope for this frontend redesign; for urgent inquiries please call +88 01711-925098."
                  onDismiss={() => setFeedbackSubmitted(false)}
                />

                {feedbackError && (
                  <div className="rounded-xl border border-[#B93832]/30 bg-red-50 px-4 py-3 text-sm text-[#B93832] dark:border-red-500/40 dark:bg-red-950/50 dark:text-red-200">
                    {feedbackError}
                  </div>
                )}

                <form onSubmit={handleFeedbackSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact_name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#141518] dark:text-zinc-200"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact_name"
                        name="contact_name"
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Your name"
                        required
                        className="mt-2 w-full rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-2.5 text-sm text-[#141518] focus:border-[#18191D] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-400 dark:focus:border-[#C9A46B] dark:focus:bg-[#111215]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact_email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#141518] dark:text-zinc-200"
                      >
                        Your Email *
                      </label>
                      <input
                        id="contact_email"
                        name="contact_email"
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        className="mt-2 w-full rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-2.5 text-sm text-[#141518] focus:border-[#18191D] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-400 dark:focus:border-[#C9A46B] dark:focus:bg-[#111215]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact_words"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#141518] dark:text-zinc-200"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact_words"
                      name="contact_words"
                      rows={5}
                      value={contactWords}
                      onChange={(e) => setContactWords(e.target.value)}
                      placeholder="Your Message"
                      required
                      className="mt-2 w-full rounded-xl border border-[#E4E3DF] bg-[#F9F9F8] px-4 py-2.5 text-sm text-[#141518] focus:border-[#18191D] focus:bg-white focus:outline-none dark:border-white/15 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-400 dark:focus:border-[#C9A46B] dark:focus:bg-[#111215]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#52555E] dark:text-zinc-300">
                      <FileText className="h-3.5 w-3.5 text-[#8C6730] dark:text-[#C9A46B]" />
                      Matches original <code className="font-mono-tech">/Home/feedback</code> fields
                    </span>
                    <button
                      type="submit"
                      className="rounded-xl bg-[#18191D] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2E3036] dark:bg-[#C9A46B] dark:text-[#0C0D0F] dark:hover:bg-[#DFBE88]"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          title={lightbox.title}
          caption={lightbox.caption}
          isOpen
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}

