# 06 — Content Migration Checklist

Use this checklist to verify 100% parity between `https://www.kingdom.com.bd/`, this `doc/` archive, and the redesigned React + Tailwind CSS application.

## A. Global Chrome & Navigation
- [x] Brand crest logo (`logo-header.png`), `"KINGDOM GROUP"` identity & favicon
- [x] Top utility details: Phone `+88 01711-070777`, Email `info@kingdombd.com`, Google Maps direction link (`23.7788825, 90.3941859`), `Admin` link (`/login`)
- [x] Bangla eco-housing tagline marquee/announcement banner: `"গাছ লাগান পরিবেশ বাঁচান, পরিবেশ বান্ধব সপ্নীল আবাসন গড়ে তুলন ।"` (with EN translation toggle)
- [x] Complete multi-level navigation matching original items:
  - [x] Home
  - [x] About Us (`About Us`, `Photo Gallery`)
  - [x] Our Concern (all 7 parent companies + sub-divisions: Trading, Agriculture, Private/Govt Development Projects, Kingdom City, Stone Crusher/Crasher, Engineering & Workshop, Transport & Communication)
  - [x] Applications (`e-File System` + header quick-login fields preserved cleanly, `Supply Chain Management (SCM)`)
  - [x] Career (`KINGDOM Team Members`, `General Notice`, `Job Circular`, `CV Submission`)
  - [x] Contact
- [x] Footer `Member of` section displaying all 8 real affiliation logos (`RAJUK`, `REHAB`, `BASIS`, `BLDA`, `RHD`, `BPDB`, `PWD`, `BIDA`) with corrected alt text
- [x] Copyright & attribution (`© 2020 KINGDOM GROUP. All rights reserved.` & `Cyberdyne Technology Ltd.`)

## B. Pages & Content Parity
- [x] **Home (`/`):**
  - [x] Interactive showcase of all 11 hero slides with authentic titles (`truck1.JPG`, `IMG_4734.jpg`, `IMG_20171010_164646.jpg`, `KINGDOM_City_31/11/22.jpeg`, `Banner.jpg`, `Cons-11.jpg`, `Cons-2.jpg`, `Zilla_Parishad.jpg`, `2222.jpg`)
  - [x] Founding story (2006 by Mohammed Nusrot Hossan, International Track Loader trade, >12 yrs growth, public/private highway construction, site development, underground utilities, residential infrastructure)
  - [x] Home building render (`kingdom_md_n_pm.jpg`)
- [x] **About Us (`/about` & `/home/about_us`):**
  - [x] Introduction (KINGDOM Builders Limited `"Dedicated to Quality and Commitment"`, incorporated 2006, ~700 apartments handed over, 5-company conglomerate)
  - [x] Management section + documented note regarding missing origin organogram diagram
  - [x] Managing Director bio (`Mohammed Nusrot Hossan`, Stamford University post-grad CS, social welfare) + portrait (`MD_Sir_Picture.jpg`)
  - [x] Business Status (residential, commercial, land development, District HQ govt contracts)
  - [x] Vision & Mission statements verbatim
  - [x] Archive/Founder Chairman card (`Major General Md Abdur Rashid, psc, G(RTD), MDS, MBA`, Vice President REHAB Ex, BASIS, FBCCI) with `chairman.jpg`
- [x] **Photo Gallery (`/gallery` & `/home/photo_gallery`):**
  - [x] Original gallery card `JAKAT_jpg_2.jpg` (`"dhaka"`) + organized curated visuals from original site (clearly labeled by source section)
- [x] **KINGDOM Housing Ltd. — Kingdom City (`/concerns/housing` & `/Home/*` aliases):**
  - [x] Sub-navigation (`About`, `Location Map`, `Layout Plan`, `Booking Contact`, `Photo Gallery`, `Feedback`)
  - [x] Bangla overview copy + plot sizes (`২.৫, ৩, ৪, ৫, ৬, ৭.৫ এবং ১০ কাঠা`) + payment terms (lump-sum & 5-year installment) + block amenities + `ab.jpg` visual & extracted monthly rates (**3 Katha = 30,000 BDT/month**, **5 Katha = 40,000 BDT/month**) + signboard proof (`"খরিদ সূত্রে জমির মালিক"`)
  - [x] Interactive zoomable Location Map (`lm.jpg`) + extracted corridor landmarks
  - [x] Interactive zoomable Layout Plan (`lp2.jpg`) + Sectors 1–7, Commercial Zone, 12 legend amenities, `REHAB`, `BLDA`, `RAJUK Registered RD - 0090`
  - [x] Booking Contact (`Corporate Office House #470 Rd #31`, `Sales Office Sena Kalyan Bhaban`, `Site Office Estern/Eastern Bazar South Keraniganj`, 6 hotlines `01711925097–98, 4720, 4721, 4725, 4726` + banner `01711925095–96`)
  - [x] Photo Gallery tab (`Home/galleryH` empty state documented + Kingdom City field photos showcase)
  - [x] Interactive Feedback form (frontend UI + validation + submission confirmation)
- [x] **KINGDOM Builders Ltd. (`/concerns/builders` & `/home/content_builders`):**
  - [x] `Gosairhat Auditorium` (`70_43.png`) — Shariatpur
  - [x] `Paradise Kingdom` (`71_44.png`) — Sector 4, Road 10, Plot 24, Uttara, Dhaka
  - [x] `Khulna Trade Center` (`72_45.png`) — Old Duck Banglo, Khulna
  - [x] `Zilla Parishad Kingdom Tower, Shariatpur` (`Zilla_Parishad.jpg`)
  - [x] Builders sub-menu tabs (`About`, `Ongoing Projects`, `Builders Plan`, `Members`, `Photo Gallery`) transparently showing unpopulated origin `#` tabs
- [x] **Other Sister Concerns (`/concerns`, `/concerns/:slug`):**
  - [x] `KINGDOM Ltd.` (Trading: Export & Import, Trading; Agriculture: Dairy Farm, Fisheries, Nursery) with `kingdom-ltd.png`
  - [x] `KINGDOM Construction Ltd.` (Stone Crusher, Engineering & Workshop, Transport & Communication) with `kingdom-construction.png`, `truck1.jpg`, `construction-dozer.jpg`, `stone-crusher.jpg`, `construction-fleet.jpg`, `construction-site.jpg`
  - [x] `Natural Trading Co. Ltd.` with `ntcl.png` & Bangla tagline `"প্রকৃতির অনন্য বন্ধনে।"`
  - [x] `SOFTBANGLA Automation Ltd.` with `softbangla.png`
  - [x] `KINGDOM Foundation` with `kingdom-foundation.png` (`"মানুষ মানুষের জন্য"`) & `jakat-dhaka.jpg`
- [x] **Applications (`/applications` & `/eFS`) & Admin Login (`/login` & `/admin/login`):**
  - [x] `e-File System` login UI (`CompanyID=3`, `UserName`, `Password`) + HTTP 500/404 status notice
  - [x] `Supply Chain Management (SCM)` card linking to `http://cyberdynetechnologyltd.com/scm/`
  - [x] Legacy commented modules (`HRM`, `VEMS`, `ACTION-5`, `Sales System`) status overview
  - [x] `CTL_CMS Login` UI (`/login`) with `logo-login.png`, `cms-favicon.png`, `Email address/Username`, `Password`, `Remember me`, `© 2015 - 2026 Cyberdyne Technology Ltd.`
- [x] **Team Members (`/team` & `/home/team_members`):**
  - [x] All 4 tabs (`Management Team`, `Marketing Team`, `Technical Team`, `General Team`)
  - [x] All 4 named individuals (`Major General Md Abdur Rashid`, `Mahmud Hasan Rasel`, `Mahbubur Rahman`, `Ratul khan`) with exact contact numbers & departments
- [x] **Notices (`/notices` & `/home/notice_view`):**
  - [x] Notice `czm/G/201/103` (`29-08-2017`) — `Eid Ul Adha Holiday Notice 2017` verbatim body + provenance note
- [x] **Career & CV Submission (`/career`, `/career/apply`):**
  - [x] `/career` empty circular notice (`0` posted) + direct CTA to CV submission
  - [x] `/career/apply` complete form with all **56 Position Applied** options, **64 Districts**, date of birth, experience fields, file attachment previews, repeatable Other Documents row UI, frontend validation
- [x] **Contact (`/contact` & `/home/contact`):**
  - [x] Embedded Google Map (`KINGDOM GROUP`)
  - [x] All 7 Offices (`Corporate Office House #160 Rd #23`, `Sales Office`, `Gulshan Office`, `Kingdom City Project Office`, `Sylhet Office`, `Shariatpur Office`, `Control Unit 24 Hours`) + cross-note for Registered Office `House #470 Rd #31`
  - [x] Interactive frontend Contact Inquiry form

## C. Post-Build Verification Sign-Off
- [x] `npm run build` (`tsc -b && vite build`) passes cleanly with zero errors
- [x] All 33 internal & legacy CodeIgniter routes resolve and render in headless Chrome (`localhost:4173`)
- [x] Responsive layout verified on desktop (`1440px`) and mobile (`390px`) with `0` overflow routes
- [x] Zero console errors, zero uncaught exceptions, zero broken `<img>` assets across all 33 routes
- [x] Dropdown counts verified (`56` positions, `64` districts) and zoomable Lightbox interaction verified
