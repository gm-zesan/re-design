# 06 — Premium Design Research & Frontend Architecture

## 1. International Luxury Real Estate Design Research

To elevate Shwapno Bari Real Estate Ltd. above generic template WordPress layouts without cloning any single competitor, design patterns across top international architectural real estate platforms (e.g., Sotheby's International Realty, Knight Frank Private Office, Douglas Elliman, and boutique modern brokerage portals) were synthesized into 5 core principles:

1. **Architectural Gallery Pacing & Whitespace:**
   Generous vertical rhythm, edge-to-edge editorial photography with restrained gradient scrims (`linear-gradient` overlays preserving natural masonry/interior lighting), and zero visual clutter or noisy carousels around text.
2. **Bifurcated Neutral Palette + Confident Crimson Restraint:**
   Shwapno Bari's heritage brand crimson (`#DA2328` / `#B81D22`) and deep obsidian (`#0C0C0C` / `#000C18`) pair naturally with warm alabaster surfaces (`#FAFAF8`), crisp architectural paper white (`#FFFFFF`), and subtle hairline borders (`#E7E4DE`). Reserve crimson exclusively for high-intent calls to action, live availability markers, and brand accents—never washing whole blocks in heavy red.
3. **Editorial Serif + Precision Sans Typography:**
   - **Display / Headings:** `'Cormorant Garamond'`, serif — high-contrast vertical stems conveying architectural heritage, discretion, and private-client trust (befitting residential estates in Gulshan, Banani, Bashundhara, Dhanmondi, Mohammadpur, and Banasree).
   - **Body / UI:** `'Plus Jakarta Sans'`, sans-serif — geometric clarity, crisp readability for Dhaka real estate specifications and legal policy dossiers.
   - **Tabular Figures (`tabular-nums`):** All prices (`BDT 1,65,00,000`, `18,000 / SFT`), areas (`2,421 SFT`), installments, and coordinates align vertically.
4. **Actionable Discovery Over Passive Marketing:**
   Rather than dead icons (`Search-Icon.webp` hidden in the original header) or dead-end `Lorem ipsum` cards, buyers/sellers can immediately filter by status (`Available`, `Upcoming`, `Sold`), filter by neighborhood (`Gulshan`, `Banani`, `Bashundhara R/A`, `Mohammadpur`, `West Dhanmondi`, `Banasree`, `Mirpur`, `Paltan`), inspect interactive Leaflet/area maps across Dhaka, launch photo lightbox galleries, and calculate monthly BDT home finance installments with transparent principal-vs-interest feedback.
5. **Authentic Local Trust Signals:**
   Center Shwapno Bari's genuine institutional proof points—founded in **2016**, **REAAB** leadership (Vice President role), **Rotary Club of Mukto Swadesh** (District 3281, Club ID 85915, Chartered 12 June 2014) & **Paul Harris Fellow (PHF)** recognition—presented with dignity alongside complete, verified Banani head-office contact details.

---

## 2. Design System Specification

### Color Tokens
- `canvas`: `#FAFAF8` (Warm Alabaster page ground)
- `surface`: `#FFFFFF` (Elevated card / specification surface)
- `surface-muted`: `#F2EFE9` (Subtle sand secondary panels & badges)
- `obsidian`: `#0C0C0C` (Primary dark hero, footer, and high-contrast feature bands)
- `navy-ink`: `#000C18` (Dark section accent & header text on light backgrounds)
- `crimson`: `#DA2328` (Primary brand red from WP Global Kit `--e-global-color-primary`)
- `crimson-dark`: `#B11B20` (Hover/active state meeting WCAG AA contrast on white text)
- `slate-muted`: `#5E646C` (Secondary metadata copy on light backgrounds)
- `border-hairline`: `#E5E2DC` (1px architectural grid separators)
- `status-available`: `#156E44` / `#ECF7F1` (Verified ready-to-move signal)
- `status-sold`: `#1F242D` / `#EFEFF1` (Track record / delivered signal)

### Responsive Breakpoints & Container Scale
- Max container width: `1280px` (`max-w-7xl`) with horizontal padding `20px` (mobile) -> `32px` (tablet) -> `48px` (desktop).
- Mobile (`375px`+), Tablet (`768px`+), Desktop (`1280px`+): Single-column Editorial Reader -> 2-column Specification Grids -> 3-column Portfolio Matrix with sticky Inquiry/Mortgage sidebars on property detail dossiers.

---

## 3. Clean React + Tailwind CSS Application Architecture

```text
public/
  uploads/                  # Local verified mirror of all brand logos, property galleries, leadership portraits, icons, and photos
src/
  context/
    ThemeContext.tsx        # Persistent Light/Dark theme state (`shwapnobari-theme`) synced cleanly to `html.dark`
  data/
    company.ts              # Official office address, Banani GPS, phone/WhatsApp/email touchpoints, core values, serving areas, Rotary/PHF info
    properties.ts           # Complete dataset for all 6 verified properties (SB00037, SB00039, SB00001, SB000033, SB00002, SB00044)
    services.ts             # All 9 Service overview offerings + dedicated Buy, Sell, Develop, Exchange/Legal service content
    team.ts                 # Complete verbatim biographies & contacts for Rtn. Md. Zakir Hossain phf & Rtn. Sayed Mahfuzur Rahman phf
    legal.ts                # Full 8-section Privacy Policy & 11-section Terms & Conditions
  components/
    layout/
      Navbar.tsx            # Fixed glassmorphic navigation header with dropdown (`Properties`, `Services`), Light/Dark icon-only toggle (Sun/Moon), live Search Modal trigger & responsive Drawer
      Footer.tsx            # Dark obsidian footer (`White-Logo.webp`), Banani Google Maps link, verified Facebook link, legal bar
      SearchModal.tsx       # Functional global Property & Neighborhood Finder (replacing hidden WP Search icon)
      Layout.tsx            # Route wrapper + ScrollToTop + Breadcrumb / Skip-link accessibility
    common/
      PropertyCard.tsx      # Architectural card showing photo, Ref ID, status badge, SFT/Beds/Baths specs, pricing
      DhakaMap.tsx          # Interactive Leaflet (OpenStreetMap) + clickable pin selector for Office & all 5 Geo-pinned Properties
      LightboxModal.tsx     # Fullscreen image viewer with keyboard arrows & thumbnails for property photos & PHF certificate
      MortgageCalculator.tsx# Live BDT Home Finance Calculator (Inputs: Price, Period, Down Payment, Rate; visual Principal/Interest breakdown)
      CoreValuesSection.tsx # Interactive 6 Core Values showcase with expandable dossier modal
      ServiceInquiryBanner.tsx
  pages/
    HomePage.tsx            # `/` (Alternating Dark/Light 7-band editorial rhythm in Light & Dark modes: Architectural hero w/ video modal -> Serving Area Dhaka neighborhoods w/ blueprint texture -> Latest Properties showcase -> Work With Us mid-page CTA over full-bleed `banner-1024x134.webp` panorama background -> Browse by Availability [Available/Upcoming/Sold] -> Interactive Core Values dark band -> Explore The Map interactive Leaflet pins feeding into Banani office footer; About Us & Leadership Team live on `/about-us`, `/profile-zakir`, `/profile-mahfuzur`)
    AboutPage.tsx           # `/about-us` (Company history Est. 2016, Vision, Mission, Rotary District 3281 Social Activities & zoomable PHF certificate, Leadership Team cards, Corporate summary & direct Call/Email)
    PropertiesListPage.tsx  # `/properties-list` & `/properties` (URL-synced filters: status `?project_state=`, `?location=`, category tabs All/Residential/Commercial, search sort, informative empty states for Upcoming/Mirpur/Paltan)
    PropertyDetailPage.tsx  # `/properties/:slug` (Interactive multi-photo gallery + lightbox, spec strip, Ref ID/Last Updated table, architectural highlights, amenity icon grid, interactive Dhaka map pin when coordinates exist, live BDT Mortgage Calculator, Agent Call/Email/FB Share, Recommended & Nearby Neighborhood links)
    ServicesPage.tsx        # `/services` (9-card comprehensive advisory matrix with clean non-swapped icons)
    ServiceDetailPage.tsx   # `/service-buy`, `/service-sell`, `/service-develop`, `/service-exchange` (Tailored service pages with real company info, clear advisories replacing broken 404 & Lorem ipsum)
    ProfilePage.tsx         # `/profile-zakir`, `/profile-mahfuzur` (Dedicated Executive Dossier pages)
    ContactPage.tsx         # `/contact-us` (Direct phone/WhatsApp/email/head-office cards, validated Contact Inquiry Form UI with submission feedback, Urban Shishirkona showcase photo, interactive Dhaka map)
    LegalPage.tsx           # `/privacy-policy`, `/terms-and-conditions` (8-section Privacy Policy & 11-section Terms with fixed working internal Privacy Policy link)
    CategoryArchivePage.tsx # `/category/:slug` (Handles all 8 WP neighborhood category routes gracefully, bridging users to matching properties in that location)
    NotFoundPage.tsx        # Styled 404 route fallback with quick links back to portfolio & home
```

---

## 4. Original URL Route Parity Map

| Original WordPress URL | React Router Route | Parity Guarantee |
| :--- | :--- | :--- |
| `/` | `/` | Full homepage sections & real content preserved |
| `/about-us/` | `/about-us` | All history, Vision, Mission, Rotary PHF photo/copy, team, CTA |
| `/properties-list/` & `/properties/` | `/properties-list`, `/properties` | Supports `?project_state=Available\|Upcoming\|Sold` & `?location=*` |
| `/properties/:slug/` (all 6) | `/properties/:slug` | Exact URL slugs preserved (`luxury-flat-for-sale-asad-avenue`, etc.) |
| `/services/` | `/services` | All 9 service categories represented cleanly |
| `/service-buy/` | `/service-buy` | Dedicated Buy service route |
| `/service-sell/` | `/service-sell` | Dedicated Sell service route |
| `/service-develop/` | `/service-develop` | Exact original developer partnership copy preserved |
| `/service-exchange/` *(404 on live)* | `/service-exchange` | Fixed dead link from `/services/`: covers Legal Support (RAJUK/Mutation), Acquisition & Exchange Offer grounded in About/Contact copy |
| `/profile-zakir/` | `/profile-zakir` | Full biography + direct MD Call/Email |
| `/profile-mahfuzur/` | `/profile-mahfuzur` | Full biography + direct Director Call/Email |
| `/contact-us/` | `/contact-us` | All numbers, emails, Banani address, interactive form UI, Leaflet map |
| `/privacy-policy/` | `/privacy-policy` | Full 8-section policy |
| `/terms-and-conditions/` | `/terms-and-conditions` | Full 11-section terms (broken Section 8 link fixed to `/privacy-policy`) |
| `/category/:slug/` (all 8) | `/category/:slug` | Graceful neighborhood hub displaying location properties instead of blank template |

