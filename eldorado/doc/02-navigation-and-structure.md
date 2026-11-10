# 02 — Navigation & Website Structure

## 1. Original Global Chrome & Navigation

### 1.1 Top Utility Bar (`#top-bar`)
- **Left Contact Links:**
  - Phone: `+880-1314-300 800` (clickable link on origin had `href="#"`)
  - Email: `info@eldorado.com.bd` (clickable link on origin had `href="#"`)
- **Right Accreditations / Badges:**
  - `REHAB MEMBER`
  - `RAJUK ENLISTED`

### 1.2 Primary Header Navbar (`#sticker`)
- **Brand Logo:** `/media/company/Logo_Eldo.png` linking to `/`
- **Top-Level Navigation Items (7 items, with 3 dropdowns):**
  1. **Home** → `/`
  2. **About Us** → `/about-us/`
     - Dropdown:
       - `About Us` → `/about-us/`
       - `Our Message` → `/our-message/`
       - `Our Business` → `/our-business/`
  3. **Project** → `#` (dropdown parent)
     - Dropdown:
       - `Ongoing Project` → `/ongoing-project/`
       - `Upcomming Project` → `/upcomming-project/`
       - `Handover Project` → `/handover-project/`
  4. **Services** → `/service/`
  5. **Query** → `#` (dropdown parent)
     - Dropdown:
       - `Landowner` → `/landowner-query/`
       - `Buyer` → `/buyer-query/`
       - `Careers` → `/careers/`
  6. **Blog** → `/blog/`
  7. **Contact Us** → `/contact-us/`

*(Note: The original template also includes unused hidden `.header-contact-content` with placeholder phone `+0 (123) 456 78 90` and hidden `.header-share-content` social icons with `href="#"`.)*

### 1.3 Pre-Footer CTA Strip (`#get-quote`)
- Copy: `Get A Free Quote / Need a Help ?`
- Button: `Contact Us` → `/contact-us/`

### 1.4 Footer Structure (`#footer`) — 5 Columns + Copyright Bar
1. **Corporate Office:**
   - Address: House-323 (1st floor), Road-22, New DOHS, Mohakhali, Dhaka-1206, Bangladesh.
   - Phone: `+88 028712066`, `+88 028833671` *(labeled "Plone-" on origin)*
   - Call Us: `+880-8712066, +880-8712419, +880-8833671, +880-1713137161`
   - Fax: `+88-02-8712451`
2. **Head Office:**
   - Address: Floor: C-9, Rupayan Shopping Square, Plot: 2, Block: G, Sayem Sobhan Anvir Road, Bashundhara R/A, Dhaka-1229, Bangladesh.
   - Call Us: `+880-9612330055`
   - Email: `info@eldorado.com.bd`
3. **Canada Office:**
   - Address: `3098 Danforth ave , Suit 216 Toronto, ON MIL 1B1 , Canada` *(M1L 1B1)*
   - Phone: `+16472443685, +16479176248` *(labeled "Plone:" on origin)*
   - Call Us: `+16472443685, +16479176248`
   - Email: `info@eldorado.com.bd`
4. **Company Links:**
   - `About Us` → `/about-us/`
   - `Our Message` → `/our-message/`
   - `Team` → `/team/`
   - `Why We` → `/why-we/`
   - `FAQ` → `/faq/`
   - `Gallery` → `/gallery/`
   - `Terms & Condition` → `/terms-condition/`
   - `Mission Vision` → `/mission-vision/`
5. **Newsletter Signup:**
   - Copy: *"Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:"*
   - Note: Original form posted to broken third-party URL `http://zozothemes.com/html/mist/light/subscription.php`.
6. **Copyright Strip:**
   - Original template leftover: `© [Year] Black Ice` linking to `http://zozothemes.com/`. In the redesign, this is updated cleanly to **Eldorado Developments Ltd.** (while preserving the audit record here).

---

## 2. Information Architecture Tree

```text
El Dorado Developments Ltd. (/)
├── Company & Leadership
│   ├── About Us (/about-us/)
│   ├── Our Message (/our-message/)
│   ├── Our Business (/our-business/)
│   ├── Mission & Vision (/mission-vision/)
│   ├── Why We (/why-we/)
│   └── Team (/team/)
├── Portfolio / Projects
│   ├── All Projects Overview (/projects — enhancement combining all 23 projects with filters)
│   ├── Ongoing Projects (/ongoing-project/) ──► 10 Project Detail Pages (/project-details/:id)
│   ├── Upcoming Projects (/upcomming-project/ & /upcoming-project) ──► 3 Project Detail Pages
│   └── Handover Projects (/handover-project/) ──► 10 Project Detail Pages
├── Services & Showcase
│   ├── Services (/service/)
│   └── Gallery (/gallery/)
├── Inquiries & Careers
│   ├── Landowner Query (/landowner-query/) ──► Thank You (/thankyou/)
│   ├── Buyer Query (/buyer-query/) ──► Thank You (/thankyou/)
│   ├── Contact Us (/contact-us/) ──► Thank You (/thankyou/)
│   └── Careers (/careers/) ──► 2 Job Detail Pages (/job-details/:id) ──► Thank You (/thankyou/)
├── Journal / News
│   └── Blog (/blog/) ──► 6 Blog Detail Pages (/blog-details/:id)
└── Support & Legal
    ├── FAQ (/faq/)
    └── Terms & Conditions (/terms-condition/)
```

---

## 3. Redesigned React Router Map

Every original route is preserved 1:1 (supporting optional trailing slashes automatically in React Router), plus clean spelling/UX aliases:
- `/` → `HomePage`
- `/about-us` → `AboutPage`
- `/our-message` → `MessagesPage`
- `/our-business` → `OurBusinessPage`
- `/mission-vision` → `MissionVisionPage`
- `/why-we` → `WhyWePage`
- `/team` → `TeamPage`
- `/projects` → `AllProjectsPage` *(unified filterable showcase across all 23 projects)*
- `/ongoing-project` → `ProjectsCategoryPage (ongoing)`
- `/upcomming-project` & `/upcoming-project` → `ProjectsCategoryPage (upcoming)`
- `/handover-project` → `ProjectsCategoryPage (handover)`
- `/project-details/:id` → `ProjectDetailPage`
- `/service` → `ServicesPage`
- `/gallery` → `GalleryPage`
- `/landowner-query` → `LandownerQueryPage`
- `/buyer-query` → `BuyerQueryPage`
- `/careers` → `CareersPage`
- `/job-details/:id` → `JobDetailPage`
- `/blog` → `BlogPage`
- `/blog-details/:id` → `BlogDetailPage`
- `/contact-us` → `ContactPage`
- `/faq` → `FaqPage`
- `/terms-condition` → `TermsPage`
- `/thankyou` → `ThankYouPage`

