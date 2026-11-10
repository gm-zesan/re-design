# Shwapno Bari Website Audit & Redesign Documentation

**Reference Website:** https://shwapnobari.com/  
**Audit Date:** November 10, 2026  
**Business Entity:** Shwapno Bari Real Estate Ltd. (Est. 2016)  
**Head Office:** House- 14/A, Level-1 (1st Floor), Road-02, Block-L, Banani, Dhaka-1213, Bangladesh  
**CMS & Platform Audited:** WordPress 6.8.12 + Hello Elementor + Elementor 3.31.2 + Header Footer Elementor + Premium Addons + Contact Form 7 + WP Leaflet Map + Custom Child Theme (`shwapnobari`)

---

## Executive Summary

A full-scope automated and manual audit of `https://shwapnobari.com/` was conducted prior to designing or building the React + Tailwind CSS redesign. Discovery combined:

- `robots.txt` inspection and sitemap probing (`sitemap.xml`, `sitemap_index.xml`, `wp-sitemap.xml`)
- Full WordPress REST API enumeration (`/wp-json/`, `/wp-json/wp/v2/types`, `taxonomies`, `pages`, `posts`, `categories`, `navigation`, `media`)
- Breadth-first HTML crawling of **108 discovered URLs** plus **5 targeted endpoint/query probes**
- Stylesheet extraction across **16 theme/Elementor CSS files** to uncover CSS background images, typography, and color tokens
- Asset download verification across all **71 WordPress Media Library items** and **142 unique upload URLs** (100% returned HTTP 200)

### Key Quantitative Audit Findings

| Audit Metric | Count / Result |
| :--- | :--- |
| Publicly accessible core pages (WP Pages) | **12 pages** (Home, About Us, Properties List, Services, Service Buy, Service Sell, Service Develop, Contact Us, Profile Zakir, Profile Mahfuzur, Privacy Policy, Terms & Conditions) |
| Publicly accessible property detail dossiers | **6 properties** (`SB00037`, `SB00039`, `SB00001`, `SB000033`, `SB00002`, `SB00044`) |
| Property filter URL variants crawled | **11 query routes** (`project_state` x3, `location` x8) + `/properties/` archive + `/properties-list/page/2/` |
| Category archive pages crawled | **8 WordPress category archives** (all currently empty of standard WP posts; `count = 0`) |
| Attachment wrapper pages crawled | **57 WP attachment routes** |
| Broken / 404 internal endpoints | **3 explicit 404s** (`/service-exchange/`, `/navigation/`, `/1214/`) + 3 missing XML sitemaps |
| Unique upload assets verified (HTTP 200) | **142 files** (all downloaded & verified) |
| Placeholder (`Lorem ipsum`) occurrences found on live site | **5 sections/pages** (Explore The Map, Services Hub cards, Service Buy, Service Sell, Property Mortgage Calculator intro) |
| FAQ Pages / FAQ Accordions on live site | **None** (0 FAQ pages or sections exist on the live site) |

---

## Documentation Index

1. **[01 — Complete URL Inventory & Navigation Structure](./01-url-inventory-and-structure.md)**  
   Every discovered URL (pages, properties, filter states, category archives, REST endpoints, external links, `tel:` / `mailto:` links) plus exact header, mobile drawer, and footer architecture.

2. **[02 — Page-Wise Content Documentation](./02-page-content-documentation.md)**  
   Complete, verbatim extracted copy, headings, forms, modals, leadership biographies, Rotary/PHF details, services, and legal texts for every page.

3. **[03 — Properties Catalog & Technical Specifications](./03-properties-catalog.md)**  
   Complete structured property dossiers for all 6 apartments (pricing, dimensions, specs, building details, amenities, GPS Leaflet coordinates, galleries, and cross-links).

4. **[04 — Image & Asset References](./04-assets-and-media-inventory.md)**  
   All 71 WP Media Library records, all 142 upload asset paths and byte sizes, CSS background mappings, and YouTube hero video reference.

5. **[05 — Inaccessible Pages, Broken Links & Content Gaps](./05-inaccessible-broken-and-gaps.md)**  
   Explicit log of 401/404 responses, broken `/service-exchange/` routes, missing sitemaps, `noindex` header, `Lorem ipsum` copy, duplicated serving areas, swapped icons, and missing contact links.

6. **[06 — Premium Design Research & Redesign Architecture](./06-design-research-and-architecture.md)**  
   International luxury real estate UI/UX research, Shwapno Bari visual identity system, typography, layout strategy, component hierarchy, and route parity map.

7. **[07 — Content Migration Checklist](./07-content-migration-checklist.md)**  
   Actionable verification matrix ensuring 100% preservation of all factual information, properties, assets, and legal/contact data in the React + Tailwind CSS implementation.
