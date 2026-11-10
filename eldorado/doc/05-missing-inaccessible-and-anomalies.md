# 05 — Inaccessible Pages, Broken Assets & Original Site Anomalies

Every inaccessible page, missing asset, empty template section, or data anomaly observed on `https://www.eldorado.com.bd/` is documented below instead of being silently skipped or replaced with invented corporate facts.

---

## 1. Inaccessible / Non-Public Pages & Missing Standard Files

| Resource | Status / Outcome | Notes |
|---|---|---|
| `/admin/` | Excluded (Authentication-gated) | Django admin interface exposed in `eldorado.urls`; private backend out of scope. |
| `/robots.txt` | `404 Not Found` | Not configured on origin; Django `DEBUG = True` error page revealed `eldorado.urls`. |
| `/sitemap.xml`, `/sitemap_index.xml`, `/wp-sitemap.xml` | `404 Not Found` | No XML sitemap configured on origin. |
| `/our-business/www.eldorado.com.bd` | `404 Not Found` | Broken relative link on `/our-business/` due to missing `https://` prefix. |
| `/our-business/www.rajbarigroupbd.com` | `404 Not Found` | Broken relative link on `/our-business/` due to missing `https://` prefix. |
| `/our-business/www.rjmlbd.com` | `404 Not Found` | Broken relative link on `/our-business/` due to missing `https://` prefix. |

---

## 2. Broken / Missing Images on Origin (`HTTP 404` — 29 Assets)

On the live server, 29 referenced image URLs return `HTTP 404 Not Found`:

- **Group Businesses (`/our-business/`):** All 4 logos (`/media/OurBusiness/Logo_Eldo.png`, `Aureate_Craft.jpeg`, `Aureate__Jute_mills.jpeg`, `RJML_LOGO.jpeg`) return `404`. *(Verified working company logo exists at `/media/company/Logo_Eldo.png`.)*
- **Mission & Vision (`/mission-vision/`):** Both images (`WhatsApp_Image_2022-04-24_at_5.46.40_PM.jpeg` and `...44_PM.jpeg`) return `404`.
- **Services (`/service/`):** 3 of 4 service images return `404` (`2e356c72-...jpeg`, `WhatsApp_Image_2022-05-23_at_4.39.27_PM_2.jpeg`, `WhatsApp_Image_2023-07-23_at_12.39.21.jpeg`). Only `WhatsApp_Image_2022-04-24_at_5.46.44_PM.jpeg` returns `200 OK`.
- **Gallery (`/gallery/`):** 10 of 19 gallery images return `404` (`Glorious_Garden_Sign-N.jpeg`, `Glorious_garden_signing-MD_sir.jpeg`, `IMG_0895.jpg`, `Signing_Jalshiri.jpeg`, `WhatsApp_Image_2022-04-24_at_5.46.41_PM.jpeg`, `WhatsApp_Image_2022-04-24_at_5.46.41_PM_2_gLmjHh7.jpeg`, `WhatsApp_Image_2023-01-30_at_21.14.25.jpeg`, `21.14.26_3.jpeg`, `21.14.26_5.jpeg`, `21.14.27_5.jpeg`). Note: `/media/blog/Signing_Jalshiri.jpeg` IS `200 OK`, whereas `/media/gallery/Signing_Jalshiri.jpeg` is `404`.
- **Projects:**
  - `project-details/27` (**El Dorado Khan Palace**): card image `WhatsApp_Image_2022-06-02_at_2.45.40_PM.jpeg` returns `404` (0 working images for ID 27).
  - `project-details/3` (**El Dorado Chowdhury Villa**): 3rd gallery image `WhatsApp_Image_2024-05-05_at_15.05.29.jpeg` returns `404` (card + 2 gallery photos work).
  - `project-details/9` (**ElDorado Arshed Square**): 2 gallery images (`Back_view_fNYA2dJ.jpg`, `Front_View_Blmrc5H.jpg`) return `404` (card + 1 gallery photo work).
  - `project-details/11` (**El Dorado Swapno**): all 3 detail carousel images (`124.jpg`, `88.jpg`, `66.jpg`) return `404` (card thumbnail works).
  - `project-details/30` (**Eldorado Dream Haven**): detail carousel image `WhatsApp_Image_2022-07-29_at_9.32.53_PM.jpeg` returns `404` (card thumbnail works).
- **Memberships:** `/media/membership/Rehab_logo.png` returns `404` (duplicate working logo exists at `/media/membership/REHAB_LOGO_86WzhSV.png`).
- **Template Inline Style Artifact:** `/_img/sections/bg/bg-2.html` returns `404`.

**Redesign Handling Strategy:**
- Every broken image URL is handled gracefully with a clean architectural fallback frame (or verified valid duplicate/sibling media where clearly an identical asset path exists, e.g., `REHAB_LOGO_86WzhSV.png` and `/media/company/Logo_Eldo.png`)—never rendering broken `<img>` icons.
- Gallery and project listings clearly preserve all records and captions, visually tagging or showing an architectural placeholder card only where origin media is unavailable (`404` on origin).

---

## 3. Empty Pages & Template Placeholder Text Observed on Origin

| Page / Section | Observed State on Original Site | Redesign Handling |
|---|---|---|
| **Homepage Counter Box (`#fun-factor`)** | Contains template placeholder: *"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is"* alongside stats `75 Complete Works`, `400 Happy Clients`, `20 Awards`. | Keep all verified factual metrics (`75`, `400`, `20` and `70+ Handed Over` / `Since 2003`) cleanly without displaying raw `Lorem Ipsum` on the luxury homepage; document original anomaly here. |
| **`/about-us/` — "Difference Between Construction and Creation"** | Heading appears with an empty `<p><!-- You can add content here --></p>` HTML comment. | Preserved heading/philosophy cleanly in the About narrative or noted gracefully without inventing unverified corporate claims. |
| **`/team/`** | Heading `Meet the Team` with zero team records (`owl-carousel` is empty). | Render the page cleanly at `/team/` showcasing Leadership already published on `/our-message/` (`Md. Abul Kalam Azad` — Chairman, `Quazi Gaffar Ahmed` — Managing Director) and transparently noting that the full departmental team roster is not yet published on the source website. |
| **`/terms-condition/`** | Completely empty body (`<h4></h4>`, `<p></p>`, `<img src="">`). | Preserve `/terms-condition/` route cleanly, clearly stating that formal Terms & Conditions copy has not yet been published by Eldorado Developments Ltd. on the official portal, alongside verified contact channels for legal/agreement inquiries. |
| **`/mission-vision/`** | Headings `Vision` and `Mission` contain verbatim `Lorem Ipsum` text and two `404` images. | Preserve `/mission-vision/` route cleanly, presenting El Dorado's verified motto (**"Home Forever"**) and verified mission/objective statements verbatim from `/` and `/about-us/`, while explicitly noting the origin page contained placeholder copy. |
| **`/faq/`** | Contains 4 leftover template FAQs about *"Tuts+ Premium affiliate program"* and *"How do I become an author?"* with Latin text. | Preserve `/faq/` route; instead of showing unrelated Tuts+/author Lorem Ipsum as El Dorado's real FAQs, clearly document that the live site's FAQ entries contain unedited template text, and provide helpful **verified inquiry & specification facts** (derived strictly from `/about-us/`, `/landowner-query/`, `/buyer-query/`, `/contact-us/`, `/handover-project/`) plus a direct link to contact/query teams! |
| **`/service/` — Card 1 ("Prestigious Landmark")** | Contains verbatim copy-paste typo `"Suvastu Properties always keep in mind..."` on the live site. | Documented here; display faithfully with clean brand attribution or exact copy note so no factual distortion occurs. |
| **`/contact-us/` — Map Widget** | Original Google Maps div had template coordinates `-35.2835, 149.128` (`Austin` / `info@youremail.com`). | Replaced broken Canberra/Austin template coordinates with accurate Dhaka (Bashundhara R/A & New DOHS Mohakhali) and Toronto (Danforth Ave) office cards and direct map search links. |
| **Footer Newsletter & Copyright** | Newsletter form posted to `http://zozothemes.com/html/mist/light/subscription.php`; copyright said `© 2026 Black Ice` (`zozothemes.com`). | Updated copyright to **Eldorado Developments Ltd.** and converted newsletter signup to a clean client-side confirmation UI (no external third-party PHP leak). |
| **Broken External Link Prefix (`/our-business/`)** | Links lacked `https://`, causing 404 internal hits. | Normalized to `https://www.eldorado.com.bd`, `https://www.rajbarigroupbd.com`, and `https://www.rjmlbd.com`. |
| **Duplicate / Similar Project Entries** | Notice IDs `32` & `37` (`Nasima Garden`) and IDs `36` & `38` (`Eldorado Daylight`) appear as separate entries on `/ongoing-project/`, and ID `33` (`Eldorado Uttara Tower`) lists address `Sector-16, Road-501, Plot-021` (matching Jalshiri Plot 21). | All 23 database entries and exact specs are preserved faithfully without deleting or altering any record. |
| **Large Unoptimized Project Renders** | Several uploaded project renders are 8 MB – 17.5 MB JPEGs (`F004_copy_2_1.jpg` = 17.5 MB, `L-Block265_Top_View_xWK1ZmK.jpg` = 13.5 MB). | Stored & web-optimized 13 oversized JPEGs under `public/media/project/` (`max 1600px`, progressive-ready quality 85%) reducing ~105 MB to ~9 MB while keeping exact relative URLs and full clarity. |
