# 06 — Premium Design Research & Architectural Design System

## 1. International Benchmark Research (Luxury Real Estate & Architecture)

Research across award-winning luxury property developer websites (e.g., *111 West 57th Street*, *Vide Infra "Ever"*, boutique architectural monographs, and premier multi-project developer portfolios) highlights four defining UX/UI pillars:

1. **Architecture-as-Brand ("Digital Gallery" over Portal Clutter):**
   - Luxury developments reject crowded real-estate portal grids in favor of spacious editorial layouts, high-resolution architectural renders, calm whitespace, and structural grid lines echoing physical architecture.
2. **Material-Driven Color Restraint:**
   - Warm limestone/alabaster light surfaces (`#F8F6F2`) paired with deep obsidian charcoal (`#141517`) and muted metallic/terracotta accents derived from real building materials rather than harsh primary neon colors.
3. **Typography Contrast & Editorial Rhythm:**
   - High-contrast architectural serif headings (*Cormorant Garamond*) paired with crisp geometric/humanist sans-serif UI & specification text (*Plus Jakarta Sans* / *Inter*).
4. **Data + Emotion Project Showcases & Concierge Inquiries:**
   - Seamless combination of full-bleed architectural elevation imagery with scannable specification matrices (land area, storeys, apartment sizes, parking, lifts, amenities) and refined inquiry pathways (Landowner Joint-Venture Inquiry, Buyer Flat Inquiry, Private Consultation).

---

## 2. El Dorado Visual & Brand Identity System

Grounded directly in El Dorado's real brand identity (`Logo_Eldo.png` — architectural grey wordmark with signature crimson **`A`** and *"home forever"* tagline) and its fair-face architectural aesthetic (*Eldorado Glorious Garden*, *Eldorado Daylight*):

### 2.1 Color Palette

| Role | Token / Hex | Inspiration & Usage |
|---|---|---|
| **Warm Alabaster Canvas** | `#F8F6F2` | Primary light background — evokes limestone & architectural paper |
| **Crisp Elevated Surface** | `#FFFFFF` | Cards, spec panels, interactive forms |
| **Stone Border / Hairline** | `#E5DFD5` | Subtle architectural grid dividers |
| **Architectural Obsidian** | `#141517` | Hero dark canvas, footer, dark editorial bands |
| **Slate Charcoal Ink** | `#23262B` | Primary headings & high-contrast body text |
| **Muted Concrete Grey** | `#61676B` | Secondary captions, metadata, matches `Logo_Eldo.png` grey |
| **Heritage Crimson Accent** | `#B81D24` *(hover `#99151B`)* | Evolved from the crimson `A` in El Dorado's logo & terracotta facade fins; replaces harsh `#FF0000` |
| **Warm Timber Bronze** | `#A67C52` | Subtle luxury secondary accent echoing timber soffits & brass signage |

### 2.2 Typography System
- **Display Serif (`font-serif`):** `Cormorant Garamond` (Weights 500, 600, 700, Italic) — Hero headlines, section titles, project names, editorial quotes.
- **UI & Body Sans (`font-sans`):** `Plus Jakarta Sans` (Weights 400, 500, 600, 700) — Navigation, specs tables, body paragraphs, buttons, form controls.

### 2.3 Component & Layout Architecture
- **Top Accreditation Bar + Floating Sticky Glass Header:** Shows `+880-1314-300 800`, `info@eldorado.com.bd`, `REHAB MEMBER`, `RAJUK ENLISTED`, accessible dropdown navigation (`About Us`, `Projects`, `Query`), and responsive mobile drawer.
- **Full-Bleed Architectural Hero Carousel:** Smooth cross-fade across all 8 verified hero slides with concise architectural typography, slide indicators, and quick CTAs (`Explore Portfolio`, `Landowner Partnership`).
- **Curated Project Cards & Spec Monograph Pages:** Status pills (`Ongoing`, `Upcoming`, `Handed Over`), interactive filter bar (`All` / `Ongoing` / `Upcoming` / `Handed Over` + location search), interactive multi-image gallery lightbox on `/project-details/:id`, and structured specification matrix.
- **Interactive Forms with Client-Side Validation & `/thankyou/` Flow:** Complete faithful forms for `/landowner-query/`, `/buyer-query/`, `/careers/`, and `/contact-us/` routing cleanly to `/thankyou/` upon submission (displaying submitted inquiry confirmation since backend is out of scope).

