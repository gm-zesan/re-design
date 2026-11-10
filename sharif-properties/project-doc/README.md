# Sharif Properties Service — Website Audit & Redesign Documentation

**Reference Website:** [https://sharif.com.bd/](https://sharif.com.bd/)  
**Brand / Business Name:** Sharif Properties Service (*Home Management Dhaka*)  
**Primary Contact:** Mr. ShariF  
**Audit Date:** 2026-11-10  
**Scope:** Complete discovery, content extraction, media cataloging, premium design research, and full React + React Router frontend architecture.

---

## 1. Executive Summary & Audit Findings

A full recursive crawl of `https://sharif.com.bd/` was executed until the canonical URL queue reached `0` remaining URLs (`465` unique canonical routes crawled, after deduplicating Laravel `/public/...` and trailing-slash aliases).

| Metric | Count | Notes |
|---|---:|---|
| **Total Unique Canonical URLs Crawled** | **465** | `460` HTTP 200, `3` HTTP 404, `2` HTTP 500 |
| **Core Functional Routes** | **4** | `/`, `/rent` (+ 31 pagination pages), `/searchResult`, `/userLogin` |
| **Property Category Routes (`/property-type/...`)** | **11** | Commercial, Residential, Rent, and all subcategories |
| **Informational, Service & Area Guide Routes** | **50** | 49 unique content pages + `/property_mgmt` alias |
| **Property Detail Routes (`/dhaka/...`)** | **365** | `360` full detail pages, `2` live HTTP 500 (card data salvaged), `3` live "No Card Found" (card data salvaged) |
| **Available vs. Rented Listings** | **286 / 79** | Exact `RENTED` status preserved across all 365 properties |
| **Unique Property Gallery Images** | **4,131** | Stored under `/advimages/...` |
| **Static Frontend & CSS Background Images** | **29** | Logo, hero/service banners, About visual, 8 gallery thumbnails, social icons |

---

## 2. Business Profile & Preserved Contact Data

- **Organization:** Sharif Properties Service (Home Management Dhaka)
- **Principal Contact:** Mr. ShariF
- **Office Address:** Sharif Properties Service, Road No 2/2, House-3, Banani, Block-L, Dhaka 1213, Bangladesh.
- **Telephone Numbers:** +8801636333333, +8801916555222
- **Email Addresses:** mail@sharif.com.bd, sharif.rent@gmail.com
- **WhatsApp Direct:** `https://api.whatsapp.com/send?phone=8801636333333&text=`
- **Live World Clocks in Header:** Dhaka, New York, Brisbane, Tokyo
- **Search Price Slider Range:** BDT 0 – BDT 800,000 (Default: 50,000 – 500,000)
- **Fee Schedule (Preserved Verbatim from Homepage About Section):**
  - *Commercial or Residential commonly practices Fifteen (20) % of the rental value per month.*
  - *Only an apartment or minimum income of the property Five (5) % of the rental value.*
  - *Property Manager Charge for company Not below than-10,000/= (Ten thousand) Monthly for all service of management.*

---

## 3. Inventory Breakdown by Category & Location

### Categories
- **Commercial:** 125 properties
- **Residential:** 240 properties

### Subcategories
- **Furnished Apartment For Rent in Dhaka:** 127 properties
- **Office space for rent in dhaka:** 106 properties
- **Apartment:** 76 properties
- **Service Apartment in Dhaka:** 22 properties
- **Independent House:** 15 properties
- **Warehouse:** 14 properties
- **Factory:** 5 properties

### Areas Covered (21 locations)
- **Gulshan Dhaka:** 175 properties
- **Banani Dhaka:** 73 properties
- **Baridhara Diplomatic Zone:** 32 properties
- **Bashundhara:** 23 properties
- **Uttara:** 10 properties
- **Gazipur:** 8 properties
- **Niketon:** 8 properties
- **Ashulia:** 8 properties
- **Tejgaon:** 6 properties
- **Tongi:** 5 properties
- **Progoti Sarani:** 3 properties
- **Dhanmondi:** 2 properties
- **Mohakhali:** 2 properties
- **Unspecified:** 2 properties
- **Nikunja:** 2 properties
- **Mohammadpur:** 1 properties
- **Savar, Dhaka:** 1 properties
- **Khulshi Chattogram:** 1 properties
- **Motijheel:** 1 properties
- **Shewrapara Mirpur:** 1 properties
- **Mirpur-DOHS:** 1 properties

---

## 4. Technical & UX Issues Found on the Original Website

1. **Duplicate `/public/` and Trailing-Slash Routes:** Laravel served identical content at `/about`, `/about/`, `/public/about`, etc. The React redesign routes cleanly on canonical paths and redirects aliases gracefully.
2. **Broken Live Internal Links (HTTP 404 & 500):**
   - `GET /service` -> 404 (fixed by routing cleanly to `/service-apartments-dhaka`)
   - `GET /service-apartments-gulshan` -> 404 (fixed by routing to `/service-apartment-gulshan`)
   - `GET /property/a-beautiful-house-for-rent-in-baridhara-diplomatic-zone` (linked as "Terms of Use" on property inquiry forms) -> 404 (replaced with a dedicated, clean Terms of Use view/modal while documenting original link)
   - `GET /dhaka/5200-sqft-commercial-space-at-dhanmondi-10202` -> HTTP 500 on live server (card metadata preserved!)
   - `GET /dhaka/30000--sft--warehouse-rent-ashulia-10205` -> HTTP 500 on live server (card metadata preserved!)
   - `del-avante-10436`, `industrial-commercial-modern-warehouse-for-rent-at-hemayetpur-savar-dhaka-10406`, `rakesh-ibrahim-10337` -> "No Card Found" on live detail route (card metadata preserved!)
3. **Unfinished / Legacy Artifacts:**
   - Homepage `Adv. Area` Owl Carousel renders literal placeholder text `"Your Add1"` through `"Your Add7"`.
   - Hidden `display: none` SEO keyword/anchor blocks in legacy templates (`about`, `userLogin`, info pages).
   - Right-click and `Ctrl+C` / `Ctrl+U` disabling JavaScript on legacy pages.
   - `<title>` tag string bugs (missing spaces/closing quotes in meta titles on legacy templates).
   - Multi-level dropdowns, non-responsive fixed tables inside property cards, and unformatted prices (`BDT 250000` vs `BDT 250,000`).

---

## 5. Documentation Directory Index (`project-doc/`)

- [`page-inventory.md`](./page-inventory.md) — Complete URL-by-URL inventory of all 465 routes (Core, Category, Service/Area, Property Details, Broken Links, External Links).
- [`content-checklist.md`](./content-checklist.md) — 100% content preservation & migration verification checklist.
- [`image-inventory.md`](./image-inventory.md) — Complete static & property image asset inventory (`4,131` property photos + `29` static/CSS images).
- [`design-research.md`](./design-research.md) — International luxury real estate & corporate relocation UI/UX research and design system blueprint.
- [`extracted-pages.json`](./extracted-pages.json) — Structured machine-readable JSON of homepage, categories, all 50 informational/service/area pages, embeds, and footer/contact data.
- [`extracted-properties.json`](./extracted-properties.json) — Structured machine-readable JSON of all 365 properties with full specs, galleries, maps, videos, and homepage placements.
- [`images.json`](./images.json) — Complete JSON index of all static and property gallery URLs.
