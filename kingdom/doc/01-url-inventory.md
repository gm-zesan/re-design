# 01 — Complete Page & URL Inventory

**Audit Date:** 2026-11-10  
**Reference Origin:** `https://www.kingdom.com.bd/`  
**Platform Fingerprint:** CodeIgniter (PHP) behind Cloudflare CDN & Email Obfuscation (`data-cfemail`)  
**Total URLs Audited:** 65 (31 core discovered URLs/endpoints + 34 unlinked candidate routes probed)  
**Sitemap (`sitemap.xml`):** Not available (`HTTP 404` on `/sitemap.xml`)  
**Robots Policy (`/robots.txt`):** Available (`HTTP 200`, 1,248 bytes — EU DSM Directive 2019/790 AI content-signals policy, no disallow rules or sitemap declarations)

---

## 1. Publicly Accessible HTML Pages (`HTTP 200 OK`)

| # | URL | Final URL | HTTP Status | Load Time (s) | Size (bytes) | Page Title | Section / Notes |
|---:|---|---|---:|---:|---:|---|---|
| 1 | `https://www.kingdom.com.bd/` | `https://www.kingdom.com.bd/` | 200 | 34.78 | 24,478 | `KINGDOM` | Homepage — 11-slide WOWSlider + founding & services intro |
| 2 | `https://www.kingdom.com.bd/home/index` | `https://www.kingdom.com.bd/home/index` | 200 | — | 24,478 | `KINGDOM` | Byte-identical alias of `/` |
| 3 | `https://www.kingdom.com.bd/home/about_us` | `https://www.kingdom.com.bd/home/about_us` | 200 | 24.71 | 23,818 | `KINGDOM` | Company intro, 2006 heritage, ~700 apartments, MD bio, status, Vision & Mission |
| 4 | `https://www.kingdom.com.bd/home/photo_gallery` | `https://www.kingdom.com.bd/home/photo_gallery` | 200 | 56.95 | 19,555 | `KINGDOM` | Group Photo Gallery (`JAKAT_jpg_2.jpg` — "dhaka") |
| 5 | `https://www.kingdom.com.bd/home/content_details` | `https://www.kingdom.com.bd/home/content_details` | 200 | 26.79 | 26,027 | `KINGDOM` | Shared target of all 7 Concerns + Kingdom City menu items; renders **KINGDOM Housing Ltd. — About** (Bangla copy + `ab.jpg` pricing graphic) |
| 6 | `https://www.kingdom.com.bd/Home/content_details` | `https://www.kingdom.com.bd/Home/content_details` | 200 | 23.51 | 26,027 | `KINGDOM` | Case-insensitive alias of `/home/content_details` (also `/home/content_details/1`, `/2` return same 26,027-byte response) |
| 7 | `https://www.kingdom.com.bd/Home/location_map` | `https://www.kingdom.com.bd/Home/location_map` | 200 | 21.76 | 24,636 | `KINGDOM` | KINGDOM Housing Ltd. — Location Map (`lm.jpg`) |
| 8 | `https://www.kingdom.com.bd/Home/layout_plan` | `https://www.kingdom.com.bd/Home/layout_plan` | 200 | 16.90 | 24,632 | `KINGDOM` | KINGDOM Housing Ltd. — City Layout Plan (`lp2.jpg`) |
| 9 | `https://www.kingdom.com.bd/Home/booking` | `https://www.kingdom.com.bd/Home/booking` | 200 | 13.50 | 26,678 | `KINGDOM` | KINGDOM Housing Ltd. — Booking Contact (Corporate, Sales, Site offices & 6 Hotlines) |
| 10 | `https://www.kingdom.com.bd/Home/galleryH` | `https://www.kingdom.com.bd/Home/galleryH` | 200 | 9.85 | 24,580 | `KINGDOM` | KINGDOM Housing Ltd. — Photo Gallery (empty live body; commented-out Builders cards) |
| 11 | `https://www.kingdom.com.bd/Home/feedback` | `https://www.kingdom.com.bd/Home/feedback` | 200 | 26.01 | 22,286 | `KINGDOM` | KINGDOM Housing Ltd. — Feedback Form (`POST /Home/feedback_add`) |
| 12 | `https://www.kingdom.com.bd/home/content_builders` | `https://www.kingdom.com.bd/home/content_builders` | 200 | 0.63 | 24,199 | `KINGDOM` | KINGDOM Builders Ltd. — Ongoing Projects (`Gosairhat Auditorium`, `Paradise Kingdom`, `Khulna Trade Center`; `/1` alias identical) |
| 13 | `https://www.kingdom.com.bd/home/team_members` | `https://www.kingdom.com.bd/home/team_members` | 200 | 1.20 | 32,230 | `KINGDOM` | KINGDOM Team Members (4 tabs: Management, Marketing, Technical, General) |
| 14 | `https://www.kingdom.com.bd/home/notice_view` | `https://www.kingdom.com.bd/home/notice_view` | 200 | 0.31 | 23,946 | `KINGDOM` | General Notice (`czm/G/201/103`, `Eid Ul Adha Holiday Notice 2017`) |
| 15 | `https://www.kingdom.com.bd/career` | `https://www.kingdom.com.bd/career` | 200 | 46.59 | 19,537 | `KINGDOM` | Job Circular (0 active circulars currently published) |
| 16 | `https://www.kingdom.com.bd/home/cv_submission_form` | `https://www.kingdom.com.bd/home/cv_submission_form` | 200 | 0.27 | 43,774 | `KINGDOM` | CV Submission form (56 positions, 64 districts, file uploads) |
| 17 | `https://www.kingdom.com.bd/home/contact` | `https://www.kingdom.com.bd/home/contact` | 200 | 0.25 | 24,498 | `KINGDOM` | Contact Us — Google Maps embed, 7 offices + Contact form |
| 18 | `https://www.kingdom.com.bd/login` | `https://www.kingdom.com.bd/login` | 200 | 0.23 | 9,363 | `CTL_CMS Login` | Admin CMS Login portal |
| 19 | `https://www.kingdom.com.bd/admin/login` | `https://www.kingdom.com.bd/admin/login` | 200 | 33.39 | 9,363 | `CTL_CMS Login` | Byte-identical alias of `/login` |

---

## 2. Form Endpoints & Utility Files (`HTTP 200 OK`)

| # | URL | Final URL | HTTP Status | Method | Size (bytes) | Purpose |
|---:|---|---|---:|---|---:|---|
| 1 | `https://www.kingdom.com.bd/Home/feedback_add` | `/Home/feedback` | 200 | POST | 22,286 | Submits Kingdom Housing Ltd. customer feedback |
| 2 | `https://www.kingdom.com.bd/Home/cv_submission_form_info_add` | same | 200 | POST | 1,192 | CV submission handler (`Alert From KINGDOM Website` — returns failure/back prompt on empty GET/POST) |
| 3 | `https://www.kingdom.com.bd/admin/login/login_Check` | `/admin/login/index?err_msg=Log+In+failed!` | 200 | POST | 9,683 | CMS authentication handler |
| 4 | `https://www.kingdom.com.bd/robots.txt` | same | 200 | GET | 1,248 | Crawler & AI content signal directives |
| 5 | `https://www.kingdom.com.bd/images/kingdom-image/header.swf` | same | 200 | GET | 28,668 | Legacy Flash header asset (commented out in HTML, still hosted) |

---

## 3. Server Errors, Missing Pages & Dead Candidate Routes (`HTTP 404 / 500`)

| # | URL | Source Context | HTTP Status | Notes |
|---:|---|---|---:|---|
| 1 | `https://www.kingdom.com.bd/eFS` | Top nav `Applications > e-File System` | **500** | Redirects `/eFS` -> `/eFS/` then crashes with Internal Server Error |
| 2 | `https://www.kingdom.com.bd/eFS/login/Welcome/login_Check` | Header quick-login form `action` | **404** | Header e-File login form submits to a missing endpoint |
| 3 | `https://www.kingdom.com.bd/eFS/Document/upload_file` | Commented header link `Upload` | **404** | Document upload tool no longer present |
| 4 | `https://www.kingdom.com.bd/hrm` | Commented nav `Human Resource Management (HRM)` | **404** | Module removed/offline |
| 5 | `https://www.kingdom.com.bd/vems/` | Commented nav `Vehicle & Equipment Management (VEMS)` | **404** | Module removed/offline |
| 6 | `https://www.kingdom.com.bd/aims/` | Commented nav `Financial Accounting (ACTION-5)` | **404** | Module removed/offline |
| 7 | `https://www.kingdom.com.bd/sitemap.xml` | Standard discovery | **404** | No XML sitemap published |

**Additional unlinked candidate routes probed (all `HTTP 404`, 1,130 bytes):**
`/about`, `/blog`, `/contact`, `/faq`, `/faqs`, `/gallery`, `/home`, `/news`, `/products`, `/projects`, `/services`, `/home/agriculture`, `/home/builders`, `/Home/builders`, `/home/builders_plan`, `/home/construction`, `/home/faq`, `/home/foundation`, `/home/housing`, `/home/kingdom_ltd`, `/home/members`, `/home/natural_trading`, `/home/news`, `/home/ongoing_projects`, `/home/project_details/70`, `/home/project_details/71`, `/home/project_details/72`, `/home/projects`, `/home/softbangla`, `/home/trading`.

---

## 4. External Links & Embeds Discovered

| External URL | Location on Site | Purpose |
|---|---|---|
| `https://www.google.com.bd/maps/place/KINGDOM+GROUP/@23.7790249,90.3948747,17z/...!3d23.7788825!4d90.3941859` | Top bar `get direction` (all pages) | Google Maps directions to Mohakhali DOHS office |
| `https://www.google.com/maps/embed?pb=!1m18...1s0x3755c769dcea7309:0x7adaed52ed0fa5bc!2sKINGDOM+GROUP` | `/home/contact` map panel | Embedded interactive Google Map |
| `http://cyberdynetechnologyltd.com/scm/` | `Applications > Supply Chain Management (SCM)` | External SCM web application (`target="__blank"`) |
| `http://www.cyberdynetechnologyltd.com/` | Site footer & `/login` footer | Developer credit (`Cyberdyne Technology Ltd.`) |
| `mailto:info@kingdombd.com` / `mailto:info@kingdom.com.bd` / `mailto:kingdombd@hotmail.com` | Header `e-Mail`, `/home/contact`, `/Home/booking` | Decoded from Cloudflare `/cdn-cgi/l/email-protection` |

---

## 5. Redesign URL Mapping (`React Router`)

All original CodeIgniter routes are preserved as aliases or mapped cleanly to modern semantic React routes so existing bookmarks continue to resolve without broken links:

| Legacy URL | Redesigned Route | Behaviour |
|---|---|---|
| `/` & `/home/index` | `/` | Primary Home Page |
| `/home/about_us` | `/about` | Alias `/home/about_us` renders/redirects cleanly |
| `/home/photo_gallery` | `/gallery` | Alias `/home/photo_gallery` supported |
| `/home/content_details`, `/Home/content_details` | `/concerns/housing` | Housing / Kingdom City About view |
| `/Home/location_map` | `/concerns/housing/location-map` | Kingdom City Location Map view |
| `/Home/layout_plan` | `/concerns/housing/layout-plan` | Kingdom City Layout Plan view |
| `/Home/booking` | `/concerns/housing/booking` | Kingdom City Booking Contact view |
| `/Home/galleryH` | `/concerns/housing/gallery` | Kingdom City Photo Gallery view |
| `/Home/feedback` | `/concerns/housing/feedback` | Kingdom City Feedback view |
| `/home/content_builders` | `/concerns/builders` | Kingdom Builders Ltd. Ongoing Projects |
| *Concern Overview* | `/concerns` | Group Sector & Subsidiary Directory |
| *Unlinked Sub-Concerns* | `/concerns/:slug` | Honest division profiles + documented unpopulated status |
| `/eFS` | `/applications` | Applications & Portal Status hub (with e-File UI preserved & `/eFS` HTTP 500 documented) |
| `/login`, `/admin/login` | `/login` | Modernized CTL_CMS Admin Login UI (frontend demo notice) |
| `/home/team_members` | `/team` | Team Members directory (all 4 teams) |
| `/home/notice_view` | `/notices` | General Notices archive |
| `/career` | `/career` | Job Circulars (with 0-circular empty state) |
| `/home/cv_submission_form` | `/career/apply` | Interactive CV Submission form |
| `/home/contact` | `/contact` | All 7 Offices, Map & Inquiry Form |

