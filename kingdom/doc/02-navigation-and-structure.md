# 02 — Navigation & Website Structure

## 1. Original Header & Utility Bar Structure

Every main public page shares the following header hierarchy:

1. **Brand Mark (Left):**
   - Logo image: `/images/web_images/logo.png` (`alt="KINGDOM Group"`, links to `/`)
   - Commented tagline in source: `<!-- <span>TRUSTED PARTNER TO REALIZE YOUR DREAM</span> -->`
2. **Top Utility Strip (Top Right):**
   - Phone: `+88 01711-070777`
   - Email: `e-Mail` -> `mailto:info@kingdombd.com` (Cloudflare obfuscated on origin)
   - Location: `get direction` -> Google Maps link for `KINGDOM GROUP` (`23.7788825, 90.3941859`)
   - Admin Portal: `Admin` -> `/login` (`http://kingdom.com.bd/login`)
   - *(Commented out on origin: `Upload` -> `/eFS/Document/upload_file`)*
3. **Inline e-File System Login Strip:**
   - Form `action="https://www.kingdom.com.bd/eFS/login/Welcome/login_Check"`, `method="post"`
   - Hidden field: `CompanyID="3"`
   - Inputs: `UserName`, `Password`, Submit button `Login` *(Note: target endpoint returns `HTTP 404` on live site)*
4. **Announcement Ticker (`<marquee>`):**
   - Exact Bangla text: `গাছ লাগান পরিবেশ বাঁচান, পরিবেশ বান্ধব সপ্নীল আবাসন গড়ে তুলন ।`
   - Translation context: *"Plant trees, save the environment; build eco-friendly dream housing."*

---

## 2. Original Multi-Level Primary Navigation Tree

```text
KINGDOM GROUP Main Navigation
├── Home (/)
├── About Us (dropdown)
│   ├── About Us (/home/about_us)
│   └── Photo Gallery (/home/photo_gallery)
├── Our Concern (multi-level dropdown — all 7 root items currently link to /home/content_details)
│   ├── KINGDOM Ltd. (/home/content_details)
│   │   ├── Trading (#)
│   │   │   ├── KINGDOM Export & Import (#)
│   │   │   └── KINGDOM Trading (#)
│   │   └── Agriculture (#)
│   │       ├── KINGDOM Dairy Farm (#)
│   │       ├── KINGDOM Fisheries (#)
│   │       └── KINGDOM Nursery (#)
│   ├── KINGDOM Builders Ltd. (/home/content_details)
│   │   ├── KINGDOM Private Development Project (/home/content_builders)
│   │   └── KINGDOM Government Development Project (#)
│   ├── KINGDOM Housing Ltd. (/home/content_details)
│   │   └── KINGDOM City (/home/content_details)
│   ├── KINGDOM Construction Ltd. (/home/content_details)
│   │   ├── KINGDOM Stone Crasher (#)   [original spelling preserved]
│   │   ├── KINGDOM Engineering & Workshop (#)
│   │   └── KINGDOM Transport & Communication (#)
│   ├── Natural Trading Co. Ltd. (/home/content_details)
│   ├── SOFTBANGLA Automation Ltd. (/home/content_details)
│   └── KINGDOM Foundation (/home/content_details)
├── Applications (dropdown)
│   ├── e-File System (/eFS) [HTTP 500 on origin]
│   ├── Supply Chain Management (SCM) (http://cyberdynetechnologyltd.com/scm/)
│   ├── [Commented/404] Human Resource Management (HRM) (/hrm)
│   ├── [Commented/404] Vehicle & Equipment Management (VEMS) (/vems/)
│   ├── [Commented/404] Financial Accounting (ACTION-5) (/aims/)
│   └── [Commented/#] Sales System (SS) (#)
├── Career (multi-level dropdown)
│   ├── KINGDOM Team Members (/home/team_members)
│   └── KINGDOM Career (#)
│       ├── General Notice (/home/notice_view)
│       ├── Job Circular (/career)
│       └── CV Submission (/home/cv_submission_form)
└── Contact (/home/contact)
```

---

## 3. Section Sub-Navigations (Sidebars)

### A. KINGDOM HOUSING LTD. Sidebar
Displayed on `/home/content_details`, `/Home/content_details`, `/Home/location_map`, `/Home/layout_plan`, `/Home/booking`, `/Home/galleryH`, `/Home/feedback`:
1. `About` -> `/Home/content_details`
2. `Location Map` -> `/Home/location_map`
3. `Layout Plan` -> `/Home/layout_plan`
4. `Booking Contact` -> `/Home/booking`
5. `Photo Gallery` -> `/Home/galleryH`
6. `Feedback` -> `/Home/feedback`
*(Plus two blank placeholder `<a href="#"></a>` list items)*

### B. KINGDOM BUILDERS LTD. Sidebar
Displayed on `/home/content_builders`:
1. `About` -> `#` (dead link)
2. `Ongoing Projects` -> `#` (active view rendered directly on page)
3. `Builders Plan` -> `#` (dead link)
4. `Members` -> `#` (dead link)
5. `Photo Gallery` -> `#` (dead link)
*(Plus three blank placeholder `<a href="#"></a>` list items)*

### C. KINGDOM Team Members Tab Strip (`/home/team_members`)
Bootstrap horizontal nav-tabs:
1. `Management Team` (`#tab1default`, default active)
2. `Marketing Team` (`#tab2default`)
3. `Technical Team` (`#tab3default`)
4. `General Team` (`#tab4default`)

---

## 4. Original Footer Structure

- **Member of:** 8 affiliation/government/association logos in a 2-row/8-column strip:
  - RAJUK (`rajuk-logo.jpg`)
  - REHAB (`logo1.gif`)
  - BASIS (`BASIS-logo.png`)
  - BLDA (`blda-logo-2.png`)
  - Roads and Highways Department — RHD (`logoRHD_n.jpg`)
  - Bangladesh Power Development Board — BPDB (`P_nDB1.jpg`)
  - Public Works Department — PWD (`PWD_n.jpg`)
  - Bangladesh Investment Development Authority — BIDA (`1499603958_n.jpg`)
  *(Note: Origin HTML erroneously sets `alt="Leed Logo"` / `alt="Leed Green Association Logo"` on all 8 footer `<img>` tags despite the actual images belonging to RAJUK, REHAB, BASIS, BLDA, RHD, BPDB, PWD, and BIDA.)*
- **Bottom Legal Bar:**
  - `© 2020 KINGDOM GROUP. All rights reserved.`
  - `Design and Develop By Cyberdyne Technology Ltd.` (`http://www.cyberdynetechnologyltd.com`)

---

## 5. Structural UX Problems Fixed in the Redesign

1. **Redundant Concern Links:** Original menu routed all 7 distinct Group companies to the **Kingdom City (Housing)** page (`/home/content_details`). The redesign introduces a dedicated **Our Concerns Directory (`/concerns`)** plus specific company pages (`/concerns/kingdom-ltd`, `/concerns/builders`, `/concerns/housing`, `/concerns/construction`, `/concerns/natural-trading`, `/concerns/softbangla`, `/concerns/foundation`) while preserving direct links and clearly marking divisions whose detailed copy was never published on the origin website.
2. **Buried Header Form:** Inline PHP login form (`eFS`) cramped the top right navbar. Moved cleanly to an accessible **Enterprise Portals / Applications** page and quick-access utility modal while preserving exact fields (`CompanyID=3`, `UserName`, `Password`) and surfacing `e-File System` + `Admin (CTL_CMS)` + `SCM` clearly.
3. **Sub-sidebar `#` Dead Links & Mobile Responsiveness:** Legacy Bootstrap 3 `left-menu` with 82 `<hr>` spacer tags on `/` and small mobile viewport overflow. Replaced with responsive sticky navigation, mobile accordion drawer, and clean pill sub-navigation.
4. **Slow Backend Queries:** Origin pages took up to 57s (e.g., `/home/photo_gallery` 56.95s, `/career` 46.59s, `/` 34.78s). Static React + local asset bundle makes navigation instantaneous.

