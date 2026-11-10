# 01 — Complete Page & URL Inventory

**Target Website:** `https://www.eldorado.com.bd/`  
**Audit Date:** November 10, 2026  
**Technology Stack (Original):** Django (Python) server-rendered templates based on the Bootstrap "Mist" theme (`zozothemes.com`)

---

## 1. Discovery Methodology

1. Crawled `https://www.eldorado.com.bd/` recursively via internal `<a>` links and embedded URL discovery (`scratch/crawl.py`).
2. Checked `robots.txt`, `sitemap.xml`, `sitemap_index.xml`, and `wp-sitemap.xml` — all returned `HTTP 404` because `DEBUG = True` is enabled on the live Django server. The Django 404 debug page exposed the complete `eldorado.urls` URLconf (24 URL patterns).
3. Probed `/thankyou/` plus candidate sequential IDs (`project-details/1..50`, `blog-details/1..40`, `job-details/1..10`) to ensure no unlinked publicly accessible pages were missed.

---

## 2. Core & Static Routes (from `eldorado.urls`)

| # | Route Path | Django URL Name | HTTP Status | HTML Size (Bytes) | Discovery Source | Page Title (`<title>`) |
|---|---|---|---|---:|---|---|
| 1 | `/` | `home` | `200 OK` | 50,951 | Root / Navbar | `Eldorado \|\| Your best choice` |
| 2 | `/about-us/` | `about-us` | `200 OK` | 22,338 | Navbar / Footer | `Eldorado \|\| Your best choice` |
| 3 | `/our-message/` | `our-message` | `200 OK` | 25,012 | Navbar / Footer | `Eldorado \|\| Your best choice` |
| 4 | `/our-business/` | `our-business` | `200 OK` | 23,638 | Navbar Dropdown | `Eldorado \|\| Your best choice` |
| 5 | `/ongoing-project/` | `ongoing-project` | `200 OK` | 32,847 | Navbar Dropdown | `Eldorado \|\| Your best choice` |
| 6 | `/upcomming-project/` | `upcomming-project` | `200 OK` | 23,616 | Navbar Dropdown | `Eldorado \|\| Your best choice` |
| 7 | `/handover-project/` | `handover-project` | `200 OK` | 31,703 | Navbar Dropdown | `Eldorado \|\| Your best choice` |
| 8 | `/service/` | `service` | `200 OK` | 23,687 | Navbar / Home | `Eldorado \|\| Your best choice` |
| 9 | `/landowner-query/` | `landowner-query` | `200 OK` | 23,935 | Navbar Dropdown | `Eldorado \|\| Your best choice` |
| 10 | `/buyer-query/` | `buyer-query` | `200 OK` | 23,935 | Navbar Dropdown | `Eldorado \|\| Your best choice` |
| 11 | `/careers/` | `careers` | `200 OK` | 24,670 | Navbar Dropdown | `Eldorado \|\| Your best choice` |
| 12 | `/blog/` | `blog` | `200 OK` | 26,711 | Navbar | `Eldorado \|\| Your best choice` |
| 13 | `/contact-us/` | `contact-us` | `200 OK` | 24,243 | Navbar / CTA | `Eldorado \|\| Your best choice` |
| 14 | `/why-we/` | `why-we` | `200 OK` | 20,681 | Home / Footer | `Eldorado \|\| Your best choice` |
| 15 | `/team/` | `team` | `200 OK` | 20,093 | Footer | `Eldorado \|\| Your best choice` |
| 16 | `/faq/` | `faq` | `200 OK` | 24,665 | Footer | `Eldorado \|\| Your best choice` |
| 17 | `/gallery/` | `gallery` | `200 OK` | 33,353 | Footer | `Eldorado \|\| Your best choice` |
| 18 | `/terms-condition/` | `terms-condition` | `200 OK` | 19,970 | Footer | `Eldorado \|\| Your best choice` |
| 19 | `/mission-vision/` | `mission-vision` | `200 OK` | 22,526 | Footer | `Eldorado \|\| Your best choice` |
| 20 | `/thankyou/` | `thankyou` | `200 OK` | 19,930 | `eldorado.urls` | `Eldorado \|\| Your best choice` |
| 21 | `/admin/` | Django Admin | Not crawled (Auth-gated) | — | `eldorado.urls` | Excluded (private backend) |

---

## 3. Project Detail Pages (`/project-details/<int:id>`) — 23 Published Pages

All IDs `1..50` were verified; the 23 IDs below return `HTTP 200 OK` and are linked from their respective category listing pages. All other IDs in `1..50` return `HTTP 404`.

### 3.1 Ongoing Projects (10 Projects)

| ID | Route | Project Name | Location / Address | Status |
|---:|---|---|---|---|
| 1 | `/project-details/1` | ELDORADO STARLIGHT-BASHUNDHARA R/A | Block-M, Road-24, Bashundhara R/A, Dhaka | `200 OK` |
| 3 | `/project-details/3` | El Dorado Chowdhury Villa-BASHUNDHARA | Plot-265, Block-L, Bashundhara R/A, Dhaka | `200 OK` |
| 9 | `/project-details/9` | ElDorado Arshed Square. Malibagh Chowdhury Para | 1000/5, Block-B, Khilgaon, Dhaka | `200 OK` |
| 22 | `/project-details/22` | El Dorado Treebani- Siddeshwary | Sudi Somaj Goli, Siddheswari, Dhaka | `200 OK` |
| 32 | `/project-details/32` | Eldorado Nasima Garden-Bashundhara | Road-12, Block-L, Bashundhara R/A, Dhaka | `200 OK` |
| 34 | `/project-details/34` | Eldorado Glorious Garden-Jalshiri Abashon | Sector-16, Road-501, Plot-021 | `200 OK` |
| 35 | `/project-details/35` | Eldorado Jahanara Garden,Bashundhara R/A | Plot-3094, Road-16, Block-M, Bashundhara R/A, Dhaka | `200 OK` |
| 36 | `/project-details/36` | Eldorado Daylight, Jalshiri Abashon | Sector-09, Road-508, Plot-016 | `200 OK` |
| 37 | `/project-details/37` | ELDORADO NASIMA GARDEN | Bashundhara R/A, Dhaka | `200 OK` |
| 38 | `/project-details/38` | Eldorado Daylight | Sector-09, Plot-016, Road-508, Jolshiri Abashon | `200 OK` |

### 3.2 Upcoming Projects (3 Projects, listed under `/upcomming-project/`)

| ID | Route | Project Name | Location / Address | Status |
|---:|---|---|---|---|
| 27 | `/project-details/27` | El Dorado Khan Palace | Mohammadpur, Dhaka | `200 OK` |
| 33 | `/project-details/33` | Eldorado Uttara Tower | Sector-16, Road-501, Plot-021 | `200 OK` |
| 39 | `/project-details/39` | Eldorado Nakhalpara | 19, Nakhal Para | `200 OK` |

### 3.3 Handover Projects (10 Projects)

| ID | Route | Project Name | Location / Address | Status |
|---:|---|---|---|---|
| 7 | `/project-details/7` | El Dorado Chistia | 9, GirdaUrdu-Road, BakshiBazar, Dhaka | `200 OK` |
| 11 | `/project-details/11` | El Dorado Swapno | 5 Katha *(address field misentered on origin)* | `200 OK` |
| 14 | `/project-details/14` | El Dorado Legend | 11/b & 8/d/2, Mirbagh, Maghbazar, Dhaka | `200 OK` |
| 15 | `/project-details/15` | El Dorado Jabed castle | 999/B Malibagh Chowdhury Para, Dhaka | `200 OK` |
| 16 | `/project-details/16` | El Dorado Rupsha | 516, North Ibrahimpur, Kafrul, Dhaka | `200 OK` |
| 17 | `/project-details/17` | El Dorado Hena Height | Plot-209, Road-06, Block-D, Bashundhara R/A, Dhaka | `200 OK` |
| 18 | `/project-details/18` | El Dorado Rose Dale | Plot-403, Road-09, Block-F, Bashundhara R/A, Dhaka | `200 OK` |
| 19 | `/project-details/19` | El Dorado Anamika | 40, West Kafrul, Dhaka Cantonment, Dhaka | `200 OK` |
| 24 | `/project-details/24` | El Dorado Sumon castle | Mirpur-2, Dhaka | `200 OK` |
| 30 | `/project-details/30` | Eldorado Dream Haven | 12Kha, Siddeshwari, Dhaka | `200 OK` |

---

## 4. Blog Detail Pages (`/blog-details/<int:id>`) — 6 Published Posts

All IDs `1..40` were probed; only IDs `28..33` return `HTTP 200 OK`.

| ID | Route | Post Title | Date | Category | Status |
|---:|---|---|---|---|---|
| 28 | `/blog-details/28` | Project Opening Ceremony @ Doa Mahfil | April 13, 2026 | Marketing | `200 OK` |
| 29 | `/blog-details/29` | Project Handed Over Ceremony | Sept. 30, 2024 | Marketing | `200 OK` |
| 30 | `/blog-details/30` | New Project Signing | April 22, 2024 | Logistic & Legal | `200 OK` |
| 31 | `/blog-details/31` | Project Opening Ceremony | April 22, 2024 | Logistic & Legal | `200 OK` |
| 32 | `/blog-details/32` | Project Handed Over | Sept. 22, 2025 | Marketing | `200 OK` |
| 33 | `/blog-details/33` | New Project Opening Ceremony | Dec. 22, 2024 | Marketing | `200 OK` |

---

## 5. Career / Job Detail Pages (`/job-details/<int:id>`) — 2 Active Circulars

All IDs `1..10` were probed; only IDs `2` and `3` return `HTTP 200 OK`.

| ID | Route | Designation | Deadline | Status |
|---:|---|---|---|---|
| 2 | `/job-details/2` | Sr.Executive/Asst.Manager Marketing & Sales | June 30, 2025 | `200 OK` |
| 3 | `/job-details/3` | Sr.Executive, Sales | Oct. 15, 2025 | `200 OK` |

---

## 6. Broken / 404 Internal Links Discovered During Crawl

| Broken URL on Origin | Originating Page | HTTP Status | Root Cause |
|---|---|---:|---|
| `/our-business/www.eldorado.com.bd` | `/our-business/` | `404` | Missing `https://` protocol on external link `href="www.eldorado.com.bd"` |
| `/our-business/www.rajbarigroupbd.com` | `/our-business/` | `404` | Missing `https://` protocol on external link `href="www.rajbarigroupbd.com"` |
| `/our-business/www.rjmlbd.com` | `/our-business/` | `404` | Missing `https://` protocol on external link `href="www.rjmlbd.com"` |
| `/robots.txt`, `/sitemap.xml`, `/sitemap_index.xml`, `/wp-sitemap.xml` | Standard crawl checks | `404` | Not configured in Django URLconf |

---

## 7. Summary Totals

- **Publicly accessible `200 OK` pages discovered:** **51 pages** (20 core/static routes + 23 project details + 6 blog details + 2 job details).
- **Gated backend route:** 1 (`/admin/`).
- **Broken internal links found on origin:** 3 (`/our-business/www.*`).

