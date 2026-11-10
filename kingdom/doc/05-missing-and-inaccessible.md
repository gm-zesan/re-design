# 05 — Inaccessible Pages, Broken Links & Missing Information

In accordance with the project requirement (*"If any content cannot be accessed or extracted, document it instead of silently skipping it"*), every unreachable endpoint, dead navigation item, missing asset, empty database section, and CMS anomaly discovered during the audit is logged below.

---

## 1. Server Errors & HTTP 404 Routes

| Item | Origin URL | HTTP Status | Observed Impact | Redesign Handling |
|---|---|---:|---|---|
| **e-File System Portal** | `/eFS` -> `/eFS/` | **500** | Top nav `Applications > e-File System` crashes with server error. | Dedicated `/applications` page documents live HTTP 500 status & external portal destination. |
| **e-File Login Endpoint** | `/eFS/login/Welcome/login_Check` | **404** | Header inline login bar posts to a non-existent endpoint. | Preserved visually/interactively inside Portal drawer/page with clear frontend-only status note. |
| **e-File Document Upload** | `/eFS/Document/upload_file` | **404** | Commented out in header HTML; unaccessible. | Documented only; not exposed as live upload. |
| **HRM Application** | `/hrm` | **404** | Commented out in `Applications` menu; endpoint missing. | Listed transparently under legacy/offline enterprise software status in `/applications`. |
| **VEMS Application** | `/vems/` | **404** | Commented out in `Applications` menu; endpoint missing. | Same as above. |
| **Financial Accounting (ACTION-5)** | `/aims/` | **404** | Commented out in `Applications` menu; endpoint missing. | Same as above. |
| **Sales System (SS)** | `#` | N/A | Commented out in `Applications` menu; no URL configured. | Same as above. |
| **XML Sitemap** | `/sitemap.xml` | **404** | No sitemap published by origin server. | Replaced cleanly with structured `Architecture / Sitemap` & semantic SPA routes. |

---

## 2. Unpopulated Concern Pages & Dead (`href="#"`) Links

On the origin website, clicking any of these navigation entries either stays on `#` or redirects redundantly to `/home/content_details` (which actually displays **KINGDOM Housing Ltd. — Kingdom City**):

1. **`KINGDOM Ltd.` (`/home/content_details` redirect bug)** and its unlinked sub-items (`#`):
   - `Trading` -> `KINGDOM Export & Import`, `KINGDOM Trading`
   - `Agriculture` -> `KINGDOM Dairy Farm`, `KINGDOM Fisheries`, `KINGDOM Nursery`
2. **`KINGDOM Builders Ltd.` Sub-Links:**
   - Menu item `KINGDOM Government Development Project` (`href="#"`) — however, note that `/home/about_us` confirms government contractual construction and `/home/content_builders` + `Zilla_Parishad.jpg` show Zilla Parishad work (Gosairhat Auditorium, Khulna Trade Center, Zilla Parishad Kingdom Tower Shariatpur).
   - Sidebar links on `/home/content_builders`: `About` (`#`), `Builders Plan` (`#`), `Members` (`#`), `Photo Gallery` (`#`) all point to `#`.
3. **`KINGDOM Construction Ltd.` (`/home/content_details` redirect bug)** and its unlinked sub-items (`#`):
   - `KINGDOM Stone Crasher` [origin spelling] *(slider image `IMG_20171010_164646.jpg` + `Sylhet Office` confirm operational Jaflong stone crusher)*
   - `KINGDOM Engineering & Workshop` *(slider image `truck1.JPG`)*
   - `KINGDOM Transport & Communication` *(also referenced via 5 CV roles)*
4. **`Natural Trading Co. Ltd.`** — Dedicated logo (`ntcl.png`: `"প্রকৃতির অনন্য বন্ধনে।"`), menu links erroneously to `/home/content_details`; no standalone text page exists on origin.
5. **`SOFTBANGLA Automation Ltd.`** — Dedicated logo (`SOFTBANGLA_Logo.png`), menu links erroneously to `/home/content_details`; no standalone text page exists on origin.
6. **`KINGDOM Foundation`** — Dedicated logo (`Kingdom_Foundation_logo.png`: `"মানুষ মানুষের জন্য"`), `JAKAT_jpg_2.jpg` community photo, MD bio cites poverty alleviation; menu links erroneously to `/home/content_details`.

**Redesign Policy:** We give each concern a clean route under `/concerns/:slug` displaying **only verified factual assets/logos/context already present in the Kingdom site** (e.g., slider photos, regional office, logo tagline, Foundation photo) and **transparently state** where dedicated copy was not published on the original website—zero fabricated marketing fluff.

---

## 3. Missing Images (`HTTP 404`)

- All 4 member avatars in `/home/team_members` (`chairman2.jpg`, `maha10.jpg`, `maha.jpg`, `maha1.jpg`) return `404`.
  - **Note:** `chairman.jpg` (Portrait of `MAJOR GENERAL MD ABDUR RASHID`) still exists inside `/images/kingdom-image/chairman.jpg` (commented out on `about_us`) and **is recovered/reused respectfully**, while the other 3 members use accessible monogram avatars.
- `images/logo/Fevicon.png`, `assets/engine1/playvideo.png`, `assets/login/img/demo-2-bg.jpg`.

---

## 4. Empty Public Content Containers

- **Job Circular (`/career`):** `div.blog-box` contains 0 postings on the live site. Redesign shows an honest "0 Active Job Circulars Currently Published" state with a direct call-to-action to `/career/apply` (`CV Submission`).
- **Kingdom Housing Photo Gallery (`/Home/galleryH`):** Contains 0 live photos (only commented-out Builders project HTML). Redesign transparently notes this and cross-links the verified `Kingdom City` on-site photography (`KINGDOM_City_31`, `11`, `22`) and `City Layout / Location Map` visuals.
- **Organogram (`/home/about_us`):** Copy ends with `"The Organogram of KINGDOM Group is shown below:"` with no organogram image or chart present on the live server. Documented cleanly without inventing an unverified reporting chart.

---

## 5. Legacy / Discrepant Content Anomalies Identified & Preserved Transparently

1. **Corporate Office Address Discrepancy:**
   - `/home/contact` active card: **`House # 160, Road # 23, DOHS Mohakhali, Dhaka-1206, Bangladesh.`**
   - `/Home/booking`, `/home/contact` commented Registered Office, `lp2.jpg`, and `ab.jpg`: **`House # 470, Road # 31, New DOHS Mohakhali, Dhaka-1206, Bangladesh.`**
   - **Handling:** Both addresses are preserved explicitly (clearly labeled by context: Corporate Office vs. Registered / Housing Booking Office).
2. **Project Locality Field Default (`/home/content_builders`):**
   - `Gosairhat Auditorium` (Shariatpur), `Paradise Kingdom` (Uttara, Dhaka), and `Khulna Trade Center` (Khulna) all list `Type: Apartment` and `Locality: DOHS, Mirpur` in the CMS output despite their actual addresses in Shariatpur, Uttara, and Khulna. Both the exact CMS metadata and actual addresses are shown verbatim.
3. **General Notice Body Text (`/home/notice_view`):**
   - Header reads `Notice No: czm/G/201/103`, `Date: 29-08-2017`, `Eid Ul Adha Holiday Notice 2017`, whereas the paragraph body mentions `Eid Ul Fitr 2017` and `GEE Bangladesh` (24 June – 30 June 2017). Preserved verbatim as an authentic archive record with an unobtrusive provenance note.
4. **Kingdom City Project / Site Office Spelling Variants:**
   - Appears as `Estern Bazar, South Keranigong` (`/Home/booking`), `Eastern Bazar, South Keraniganj, Dhaka-1310` (`lp2.jpg`), and `Kingdom City, Bibir Bazar Road, South Keraniganj, Munshiganj Sadar, Dhaka` (`/home/contact`). All three preserved clearly.
5. **Footer Alt Attribute Mismatch:**
   - Origin HTML sets `alt="Leed Logo"` / `alt="Leed Green Association Logo"` on RAJUK, REHAB, BASIS, BLDA, RHD, BPDB, PWD, and BIDA images. Corrected to accurate organization names in `alt` text while keeping all 8 original logos.
6. **Backend Latency:**
   - `/home/photo_gallery` (56.95s), `/career` (46.59s), `/admin/login/login_Check` (38.87s), `/` (34.78s), `/home/about_us` (24.71s), `/home/content_details` (26.79s). Resolved via static React SPA + local assets.

