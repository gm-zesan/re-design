# 07 — Content Migration Checklist

Verification tracker comparing the built React + Tailwind CSS application against the audited baseline (`https://shwapnobari.com/`). Every migrated route, property record, contact touchpoint, copy block, and asset path has been verified against `dist/` and SSR DOM rendering across **35 routes**.

---

## 1. Global Chrome, Navigation & Identity
- [x] Official Shwapno Bari logos rendered from local assets (`Logo.webp` in light header, `White-Logo.webp` in dark mode header & dark footer) — verified in [Navbar.tsx](../src/components/layout/Navbar.tsx) & [Footer.tsx](../src/components/layout/Footer.tsx)
- [x] Full site-wide Light & Dark Mode support via icon-only Sun/Moon toggle in [Navbar.tsx](../src/components/layout/Navbar.tsx) and [ThemeContext.tsx](../src/context/ThemeContext.tsx)
- [x] Header links match original hierarchy: `Home` (`/`), `About Us` (`/about-us`), `Properties` (`/properties-list`) with dropdown (`Available`, `Upcoming`, `Sold`), `Services` (`/services`), `Contact Us` (`/contact-us`)
- [x] Functional global Search modal implemented (`SearchModal.tsx`, upgrading hidden header search icon) filtering all 6 real properties & Dhaka areas
- [x] Responsive mobile drawer navigation with Escape-key support & click-outside dismissal
- [x] Footer preserves `"Shwapno Bari Real Estate Ltd."`, Banani office address linking to Google Maps (`cid=17258634447160801028`), Facebook link (`https://www.facebook.com/shwapnobaribd/`), and legal links (`About Us`, `Contact Us`, `Privacy Policy`, `Terms & Conditions`) without dead `"#"` social placeholders

## 2. Homepage (`/`) — Alternating 7-Section Editorial Rhythm
- [x] **Section 1 — Hero Banner (`#0C0C0C`):** Heading `"A RELIABLE PLATFORM OF PROPERTY SOLUTION"`, ambient video film modal (`hyJYhGPQyy8`) + verified local fallback visual (`Atf-Image.jpg`), grounded inventory metric ribbon, and `Buy`, `Sell`, `Develop` CTAs
- [x] **Section 2 — Serving Area (`#FAFAF8` / dark `#12161C`):** Up-front Dhaka neighborhoods grid over subtle `map_bg.jpg` blueprint pattern + map anchor link (`#explore-map`), cleanly replacing broken triple `"Uttara"` repetition
- [x] **Section 3 — Latest Properties Showcase (`#FFFFFF` / dark `#0D1014`):** Displays featured residences (`Shanta The Vintage`, `Shanta Mirzam`, `Urban Shishirkona`, `EMPL Odhuna`) in vertical `4/5` frames directly beneath Serving Area + link to all 6 properties
- [x] **Section 4 — Work With Us (`#000C18`):** Mid-page full-bleed developer collaboration CTA (`/contact-us`, `/service-develop`) integrated seamlessly over `banner-1024x134.webp` atmospheric panorama background, breaking grid density between listings & status stages
- [x] **Section 5 — Browse by Availability (`#FAFAF8` / dark `#12161C`):** 3-column `Available`, `Upcoming`, and `Sold` status block preserving exact original descriptions, icons, and filtered links (`/properties-list?project_state=...`)
- [x] **Section 6 — Core Values (`#0C0C0C` / dark `#080A0D`):** Interactive 6 Core Values (`Consistency`, `Disruptive`, `Execution`, `Ownership`, `Transparent`, `Ambitious`) with full original copy in theme-adaptive modal reader over `Core-Values-Image.jpg`
- [x] **Section 7 — Explore The Map (`#FFFFFF` / dark `#0D1014`):** Closing interactive Dhaka Leaflet map displaying all 6 exact GPS pins (`ShwapnoBari Office`, `Shanta Mirzam`, `The Vintage by Shanta`, `Urban Shishirkona`, `EMPL Odhuna`, `West Dhanmondi Flat`) right above the Banani office footer *(redundant Home About Us & Team sections omitted cleanly; full About story and Leadership Team preserved on `/about-us`, `/profile-zakir`, and `/profile-mahfuzur`)*

## 3. Properties Directory (`/properties-list`, `/properties`, `/category/:slug`)
- [x] All 6 properties included with accurate pricing, Ref IDs, beds, baths, sqft, floor, location, and status
- [x] Supports query filtering by `?project_state=Available|Upcoming|Sold` and `?location=*`
- [x] Supports `All` / `Residential` / `Commercial` category tabs (showing informative empty states for Commercial/Upcoming/Mirpur/Paltan instead of blank templates)
- [x] All 8 `/category/:slug` neighborhood URLs resolve cleanly and link matching inventory

## 4. Property Detail Dossiers (All 6 Exact Slugs)
- [x] `SB00037` — `/properties/luxury-flat-for-sale-asad-avenue` (`Shanta Mirzam`, Available, `BDT - 18000/sft`, 2421 SFT, 3B/3B, 6th floor, 7 AVIF photos, 11 amenities, GPS pin, Call/Email)
- [x] `SB00039` — `/properties/luxury-flat-for-sale-banani` (`ABC Blooming Dale`, Sold, `BDT - 2,30,00,000`, 1800 SFT, 3B/4B, B-201 2nd floor, 2004 handover, Titash gas, 5 JPG photos, 4 amenities, Banani location note, Call/Email)
- [x] `SB00001` — `/properties/luxury-flat-for-sale-banasree` (`Shanta Properties – The Vintage`, Sold, `BDT - 2,30,00,000`, 2120 SFT, 3B/3B, 3rd floor, 40 Katha, 6 AVIF photos, 12 amenities, GPS pin, Call/Email)
- [x] `SB000033` — `/properties/luxury-flat-for-sale-bashundhara` (`EMPL Odhuna`, Available, `BDT - 1,65,00,000`, 2129 SFT, 3B/4B, 1A 1st floor, 5 Katha, 5 JPG photos, 8 amenities, GPS pin, Call/Email)
- [x] `SB00002` — `/properties/luxury-flat-for-sale-in-gulshan-2-3050-sft` (`Urban Shishirkona`, Sold, `BDT - 5,50,00,000`, 3050 SFT, 4B/5B, 5A 5th floor, 15.9 Katha, 6 JPG photos, 11 amenities, GPS pin, fallback Call/Email)
- [x] `SB00044` — `/properties/modern-south-facing-apartment-for-sale-west-dhanmondi` (`West Dhanmondi`, Available, `BDT - Call for Details`, 1400 SFT, 3B/3B, 7th floor, 4 JPEG photos, 7 amenities, GPS pin, Call/Email)
- [x] Working Photo Gallery Lightbox, Facebook Share link, Nearby Neighborhood links, Recommended Properties, and interactive BDT Mortgage Calculator on every property page

## 5. Corporate, Leadership, Services, Contact & Legal Pages
- [x] `/about-us`: Est. 2016 overview, Vision, Mission, Rotary District 3281 Club 85915 Social Activities + zoomable `Shwapno-Bari-Social-Activities.jpeg` PHF photo, Leadership cards, corporate footer summary & Call/Email buttons
- [x] `/profile-zakir`: Full biography (`19 years`, Rupayan Housing, MBA/Management, age `52`, CRP/Quantum Foundation) + `tel:+8801911398936` + `mailto:z.hossain71@yahoo.com`
- [x] `/profile-mahfuzur`: Full biography (Founder Director, MBA Marketing & Real Estate, Secretary Rotary Club of Mukto Swadesh, VP REAAB) + `tel:+8801711107238` + `mailto:mahfuzred@gmail.com`
- [x] `/services`, `/service-buy`, `/service-sell`, `/service-develop`, `/service-exchange`: All 9 services listed, fixed Buy/Sell swapped icons, real service descriptions grounded in audited copy (zero `Lorem ipsum`), broken `/service-exchange` 404 resolved cleanly
- [x] `/contact-us`: All verified touchpoints (`01722926232`, WhatsApp `+88017111 07238`, `+880 1711107238`, `info@shwapnobari.com`, Banani Head Office address), validated 5-field message form matching Contact Form 7 schema, `Urban-Shishirkona-00` photo, and interactive Leaflet map
- [x] `/privacy-policy` & `/terms-and-conditions`: Complete verbatim legal clauses, working Section 8 internal Privacy Policy link (without boilerplate template prompt)

## 6. Final Technical & Verification Notes
- [x] TypeScript compilation (`tsc --noEmit` / `tsc -b`) & Vite production build (`npm run build`) pass with zero errors
- [x] All `142` mirrored assets exist in `public/uploads/` & `dist/uploads/`; all `89` active bundle asset references verified present on disk; SSR DOM verification (`ReactDOMServer.renderToString` + `MemoryRouter`) passed across all **35 tested routes** with zero missing images or placeholder copy
- [ ] **Manual Interactive Browser Check (Deferred to Host Environment):** Headless Chromium/Playwright was not installed in the sandbox environment (`playwright not found`, `chromium not found`), so responsive grids were verified statically and via Tailwind breakpoint review rather than live screenshot capture. Run `npm run dev` locally to inspect responsive animations, interactive map tiles over network, and YouTube embed playback directly in Chrome/Safari.
