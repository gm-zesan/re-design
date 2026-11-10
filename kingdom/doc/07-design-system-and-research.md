# 07 — Design Research & Creative Direction

## 1. Benchmark Insights (International Real Estate & Construction Conglomerates)

Studying contemporary award-winning engineering, urban township, and real estate holding groups (e.g., Emaar, Lendlease, Foster + Partners Studio portfolios, BAM, and modern APAC conglomerate flagships) revealed five clear principles separating authoritative leaders from dated corporate portals:

1. **Architectural Editorial Aesthetic over Boxed Clutter:** High-trust infrastructure and property firms present content inside spacious, high-contrast structural grids (`max-w-7xl`, crisp hairline borders, generous vertical rhythm) rather than cramped tables or heavy dark drop-shadows.
2. **Heritage Meets Authority in Typography:** Pairing a refined editorial serif (`Cormorant Garamond` / `Playfair Display`) or monumental display grotesque with a crisp humanist sans-serif (`Plus Jakarta Sans` / `Inter`) plus a clean Bengali script face (`Hind Siliguri` / `Noto Sans Bengali`) creates executive gravitas while ensuring effortless bilingual readability.
3. **Conglomerate Clarity (Hub & Spoke Navigation):** Multi-vertical groups succeed when visitors can immediately distinguish *Land & Township (Kingdom City)*, *Building & Commercial Towers (Kingdom Builders)*, *Heavy Civil & Aggregates (Kingdom Construction)*, *Trading & Agro*, *IT Automation (Softbangla)*, and *Philanthropy (Kingdom Foundation)* from a unified portfolio switcher.
4. **Evidence-First Visual Presentation:** Architectural renders, site photography, Master Layout Plans, and Location Maps deserve high-resolution lightbox inspection (pan/zoom viewer) with extracted key figures surfaced cleanly beside the graphic—not buried solely inside small raster JPEGs.
5. **Restrained Heritage Color Continuity:** Instead of discarding Kingdom's historical brand equity (`#291670` / `#2d3192` royal indigo-navy and `#F4E5BE` warm sandstone/limestone), translate those exact cues into a modern, elevated architectural palette.

---

## 2. Original Design System for KINGDOM GROUP

> Created uniquely for Kingdom Group — inspired by blueprint drafting lines, limestone facades, and royal Bengal heritage; not cloned from any third-party template.

### Color Palette (`Sovereign Limestone & Royal Indigo`)

| Token | Hex | Usage |
|---|---|---|
| `--surface-canvas` | `#FAF8F3` | Warm architectural alabaster page background (elevates `#FFFFDF`) |
| `--surface-sandstone` | `#F3ECD8` | Soft limestone cards, subtle callout bands (evolves `#F4E5BE`) |
| `--surface-card` | `#FFFFFF` | Crisp elevated content cards & forms with `1px solid #E5DFD0` borders |
| `--ink-primary` | `#121629` | Deep obsidian-navy primary body headings & copy |
| `--ink-secondary` | `#4A4F63` | Muted architectural slate for captions & metadata |
| `--brand-indigo` | `#1E1B5E` | Core sovereign Kingdom indigo (`evolves #291670 / #2d3192`) |
| `--brand-indigo-bright` | `#2E3192` | Interactive links, active states, focus rings |
| `--accent-brass` | `#B8862D` | Warm architectural brass / champagne gold highlights, badges & section rules |
| `--accent-crimson` | `#B93832` | Emergency hotlines, urgent notices & error states (evolves `#C54742`) |
| `--dark-foundation` | `#0E1122` | Hero overlays, footer band & dark contrast showcase sections |

### Typography Stack
- **Display Headings:** `'Playfair Display', Georgia, serif` — sculptural elegance for hero titles and major section markers.
- **UI & English Body:** `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif` — modern geometric legibility with crisp tabular numerals for phone numbers, plot sizes (`2.5–10 Katha`), and pricing (`30,000 / 40,000 BDT`).
- **Bangla Script:** `'Hind Siliguri', 'Noto Sans Bengali', sans-serif` — ensures crisp rendering of Kingdom City copy (`স্বপ্ন পূরণ করুন আমাদের হাত ধরে...`), tagline marquee, and NTCL/Foundation Bangla mottos.
- **Technical Monospace:** `'JetBrains Mono', monospace` — subtle hairline coordinates, notice reference numbers (`czm/G/201/103`), and RAJUK registration (`RD - 0090`).

### Signature Components & UX Enhancements
1. **Architectural Frame & Subtle Blueprint Hairlines:** 1px hairline borders (`#E5DFD0`) and structured bento cards replace legacy CSS box-shadows and blinking animations.
2. **Hero Full-Bleed Architectural Showcase:** High-impact hero slider displaying all 11 original Kingdom slides with pause/play, slide switcher pills, direct division quick-jump, and clean gradient scrims so text remains WCAG AA+ legible.
3. **Interactive Zoomable Lightbox Viewer (`ImageLightbox`):** Allows prospective Kingdom City buyers to zoom into `lp2.jpg` (`City Layout PLAN`) and `lm.jpg` (`Location Map`) at full legibility, alongside structured searchable tables of all 7 sectors, 12 amenities, and road links.
4. **Unified Concern Hub & Sidebars:** Desktop sticky navigation + responsive mobile sheet navigation across all 7 Group companies, housing sub-pages, and builder projects.
5. **Accessible Inquiry & CV Workflows:** Multi-step visual hierarchy, inline field feedback, clear Bangla + English labels where applicable, and non-destructive frontend submission previews with transparent notes that backend persistence is out of scope.

