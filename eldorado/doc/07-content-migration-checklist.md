# 07 — Content Migration & Verification Checklist

Track migration of 100% of publicly accessible pages, business data, forms, and verified media into the redesigned React + Tailwind CSS application.

## 1. Pages & Routes (24 Routes / 51 Crawled Pages)
- [x] Website audit & content documentation complete (`doc/01`–`doc/07`)
- [x] `/` — Homepage (8 hero slides, Rajbari Group badge, Leaders intro, 75/400/20 stats, Why Clients Love Us, 4 Services, 4 Testimonials, 6 Latest News, Members & Certifications)
- [x] `/about-us/` — About Us (Established 2003, 70+ projects, Rajbari Group concern, Company Objectives, Construction & Creation, photo)
- [x] `/our-message/` — Messages from Chairman (`Md. Abul Kalam Azad`) & Managing Director (`Quazi Gaffar Ahmed`) with portraits
- [x] `/our-business/` — 4 Rajbari Group sister concerns (EL Dorado Developments Ltd, Aureate Jute Mills Ltd, Aureate Crafts, Rajbari Jute Mills Ltd) with fixed external `https://` links
- [x] `/mission-vision/` — Mission & Vision page (with transparent audit handling of origin placeholders)
- [x] `/why-we/` — Why Clients Love Us page & feature image
- [x] `/team/` — Our Team page (clean leadership presentation + origin empty-roster transparency)
- [x] `/projects` — Unified filterable Portfolio overview across all 23 projects (enhancement)
- [x] `/ongoing-project/` — All 10 Ongoing projects
- [x] `/upcomming-project/` & `/upcoming-project` — All 3 Upcoming projects
- [x] `/handover-project/` — All 10 Handed Over projects (`70+ Projects Successfully Handed Over`)
- [x] `/project-details/:id` — All 23 individual project detail pages (`1, 3, 7, 9, 11, 14, 15, 16, 17, 18, 19, 22, 24, 27, 30, 32, 33, 34, 35, 36, 37, 38, 39`)
- [x] `/service/` — All 4 service pillars
- [x] `/gallery/` — All 19 gallery entries (with interactive lightbox for 9 live photos & graceful archival placeholders for 10 origin-404 entries)
- [x] `/landowner-query/` — Landowner Partnership & Land Information form (all 9 fields + select options + confirmation state)
- [x] `/buyer-query/` — Buyer Flat Requirement form (all 6 fields + 700–3200 sft options + confirmation state)
- [x] `/careers/` — Careers page with 2 active job circulars + full Apply Now form (9 fields + CV file picker + confirmation state)
- [x] `/job-details/:id` — Job detail pages `2` and `3`
- [x] `/blog/` — Blog archive with all 6 posts + live category filtering across all 7 categories
- [x] `/blog-details/:id` — All 6 blog detail pages (`28..33`) + category sidebar + recent posts
- [x] `/contact-us/` — Contact page (3 offices, support & sales phones/emails, Corporate fax/landlines, 5-field contact form, Google Maps links)
- [x] `/faq/` — FAQ page (handling origin template placeholders honestly + verified company Q&A reference)
- [x] `/terms-condition/` — Terms & Conditions page (preserving route + noting missing origin legal text + legal desk contact details)
- [x] `/thankyou/` — Confirmation route (`Thank You Our Team Contact You Soon`)

## 2. Global Chrome, Contact Info & Assets
- [x] Top bar contact (`+880-1314-300 800`, `info@eldorado.com.bd`) & badges (`REHAB MEMBER`, `RAJUK ENLISTED`)
- [x] Header logo (`/media/company/Logo_Eldo.png`) & accessible desktop/mobile dropdown menus
- [x] Footer 3 offices (Corporate Office New DOHS Mohakhali, Head Office Bashundhara R/A, Canada Office Toronto), Company links, Newsletter UI, updated copyright
- [x] Pre-footer CTA strip (`Get A Free Quote / Need Help? Contact Us`)
- [x] All 106 HTTP `200 OK` images downloaded, web-optimized (`sips`), bundled into `dist/`, and verified HTTP `200 OK`
- [x] Responsive verification across desktop (`1440x900`) and mobile (`390x844`) viewports + production `npm run build`
