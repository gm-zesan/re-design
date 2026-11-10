# 04 — Image, Video & Media Asset References

All media assets on `https://shwapnobari.com/` were enumerated via both the WordPress REST Media API (`/wp-json/wp/v2/media`, **71 media records**) and HTML/CSS extraction across all crawled pages and stylesheets (**142 unique `/wp-content/uploads/` URLs**, totaling **17.7 MB**, all verified HTTP **200 OK**: `68 JPEG`, `60 WebP`, `14 AVIF`).

---

## 1. Ambient Video & External Embeds

| Asset Type | Source URL | Placed On | Usage Notes |
| :--- | :--- | :--- | :--- |
| Ambient Hero Video | `https://www.youtube.com/watch?v=hyJYhGPQyy8` | Home (`/`) Section 1 | Elementor background video container; loops muted behind hero H2 + Buy/Sell/Develop strip |
| OpenStreetMap Tiles | `https://tile.openstreetmap.org/{z}/{x}/{y}.png` | Home (`/`), Contact Us (`/contact-us/`), Properties (`5` with pin data) | Loaded via WP Leaflet Map (`leaflet` library) |

---

## 2. Brand Identity, Logos, Banners & Decorative Graphics

| File (`/wp-content/uploads/...`) | Dimensions / Size | Format | Placed On | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `2024/04/Logo.webp` | `6,954 B` (`300x90` variant: `4,626 B`) | WebP | Global Header & Mobile Drawer | Bangla calligraphic **স্বপ্নবাড়ি** lockup with crimson inverted triangle mark |
| `2024/04/White-Logo.webp` | `5,594 B` (`300x90` variant: `3,994 B`) | WebP | Global Footer | White monochrome version on obsidian `#0C0C0C` footer background |
| `2024/04/cropped-Logo.webp` | `512x512` (`19,666 B`) | WebP | Site Icons (`<link rel="icon">`) | Generates `32x32` (`714 B`), `180x180` (`5,878 B`), `192x192` (`6,238 B`), `270x270` (`8,900 B`) |
| `2024/04/banner.webp` | `1272x167` (`15,888 B`) | WebP | Home (`/`) | Architectural strip banner beneath Meet Your Expert (`banner-1024x134.webp` rendered) |
| `2024/04/Red-Ribbon-2.webp` | `100x38` (`340 B`) | WebP | Home (`/`) | Small crimson ribbon accent on Property Status / Featured section |
| `2024/04/Dot.webp` | `70x230` (`1,990 B`) | WebP | Home (`/`) | Decorative vertical dot matrix graphic |
| `2024/04/Map-Marker.webp` | `50x50` (`854 B`) | WebP | Home (`/`) | Custom pin visual in Serving Area / Map UI |

---

## 3. Page Photography & Section Backgrounds

| File (`/wp-content/uploads/...`) | Dimensions | File Size | Placed On | CSS / HTML Role |
| :--- | :--- | :--- | :--- | :--- |
| `2024/04/About-Us-image.jpg` | `1000x563` | `131,313 B` | Home (`/`) About section, About Us (`/about-us/`) | Company interior / team scene (`300x169`, `768x432` variants also cached) |
| `2024/04/Core-Values-Image.jpg` | `1920x811` | `54,930 B` | Home (`/`) Core Values section | Wide architectural dusk skyline backdrop behind 6 Core Values modal triggers |
| `2024/04/map_bg.jpg` | `1920x827` | `62,523 B` | Home (`/`) Serving Area section | Stylized dark map backdrop behind location badges |
| `2024/05/Image-1.jpg` | `1000x623` | `65,136 B` | Contact Us (`/contact-us/`) | CSS background banner (`post-1410.css`) |
| `2024/05/Image-2.jpg` | `1000x563` | `108,568 B` | WP Media attached to `post=1410` | Architectural dusk twilight villa visual |
| `2024/05/Image-3.jpg` | `1000x563` | `83,174 B` | About Us, Profile Zakir (`post-2038.css`), Profile Mahfuzur (`post-1990.css`) | Dark moody hero header background |
| `2024/06/Image-1.jpg` | `1000x475` | `58,145 B` | Services (`post-1880.css`), Buy (`post-1925.css`), Sell (`post-1944.css`), Develop (`post-1950.css`), Privacy (`post-2834.css`), Terms (`post-2835.css`) | Shared banner background (`post-*.css`) |
| `2024/06/Image-2.jpg` | `1000x590` | `65,818 B` | Service Buy (`/service-buy/`), Service Sell (`/service-sell/`), Service Develop (`/service-develop/`) | Architectural cityscape/modern facade (`300x177`, `768x453` variants also cached) |
| `2025/08/Shwapno-Bari-Social-Activities.jpeg` | `960x1280` | `100,355 B` | About Us (`/about-us/`) Social Activities | Rotary Paul Harris Fellow (PHF) award/recognition framed certificate display (`alt="PHF Achievement"`) |
| `2024/04/Atf-Image.jpg` *(Unlinked in active DOM)* | `1000x606` | `131,331 B` | WP Media ID `410` (`post=None`) | Original Above-The-Fold hero image before YouTube video replacement; ideal high-speed poster/fallback |

---

## 4. Leadership Team Portraits

| Person | Active File (`/wp-content/uploads/...`) | Dimensions / Size | Earlier Alternate Upload (Unused in Active HTML) |
| :--- | :--- | :--- | :--- |
| **Rtn. Md. Zakir Hossain phf** (Managing Director) | `2025/07/WhatsApp-Image-2025-07-26-at-15.55.53_da44d487.jpg` | `530x650` (`35,322 B`; `245x300` variant `9,915 B`) | `2024/04/managing-director-e1714031641735.jpg` (`717x941`, `66,589 B`, Media ID `1443`) |
| **Rtn. Sayed Mahfuzur Rahman phf** (Director) | `2025/07/WhatsApp-Image-2025-07-26-at-15.56.15_4bc3f1fc.jpg` | `768x965` (`43,195 B`; `239x300` variant `9,054 B`) | `2024/04/director.jpg` (`718x960`, `54,417 B`, Media ID `1442`) |

---

## 5. UI Icons, Services & Property Amenity Icons

### 5.1 Header, Footer, Contact & Quick-Spec Icons (`50x50` / `100x100` WebP)
- `2024/04/Search-Icon.webp` (`1,220 B`), `2025/02/Close-Icon.webp` (`1,140 B`), `2024/04/Local-Icon-White.webp` (`490 B`)
- `2024/04/Ongoing-icon.webp` (`3,134 B`), `2024/04/Upcoming-Icon.webp` (`1,530 B`), `2024/04/Completed-Icon.webp` (`2,246 B`)
- `2024/05/Beds.webp` (`504 B`), `2024/05/Baths.webp` (`712 B`), `2024/05/sqft.webp` (`258 B`)
- `2024/05/Call.webp` (`818 B`), `2024/05/Email.webp` (`732 B`), `2024/05/Call-new.webp` (`770 B`), `2024/05/Email-new.webp` (`816 B`), `2024/05/Home-new.webp` (`654 B`)
- Footer & Drawer Social Icons: `Facebook.webp` (`290 B`), `Instagram.webp` (`528 B`), `LinkedIn.webp` (`356 B`), `Facebook-1.webp` (`320 B`), `Instagram-1.webp` (`660 B`), `LinkedIn-1.webp` (`468 B`), `Pinterest-1.webp` (`730 B`), `X-1.webp` (`1,084 B`)

### 5.2 Services Grid Icons (`2024/06/`, `100x100` WebP)
- `Buy-Property.webp` (`1,354 B`) *(Note: live `/services/` card for Buy Property erroneously displays `Sell-Property.webp`)*
- `Sell-Property.webp` (`1,130 B`) *(Note: live `/services/` card for Sell Property erroneously displays `Buy-Property.webp`)*
- `Rent-Lease.webp` (`1,360 B`) *(placed on `Develop` card on live site)*
- `Office-Solutions.webp` (`1,414 B`)
- `Credit-Profiling.webp` (`886 B`)
- `Legal-Support-2.webp` (`1,170 B`)
- `Property-Consultancy.webp` (`1,166 B`)
- `Property-Management.webp` (`1,544 B`)
- `Property-Acquisition.webp` (`1,446 B`)

### 5.3 Property Amenity Icons (`2024/06/`, `186x186` WebP)
`24-Hours-Concierge.webp` (`2,298 B`), `Balcony.webp` (`1,482 B`), `CCTV.webp` (`1,608 B`), `Elevators.webp` (`2,352 B`), `Floor-Level.webp` (`1,614 B`), `Flooring.webp` (`1,380 B`), `Generator.webp` (`1,982 B`), `Intercom.webp` (`1,814 B`), `Lobby.webp` (`2,106 B`), `Parking.webp` (`1,556 B`), `View.webp` (`1,800 B`), `Waste-Disposal.webp` (`2,170 B`).

---

## 6. Property Photography Assets (`2025/08/`)

### 6.1 `SB00037` — Shanta Mirzam (Asad Avenue)
- **Home Featured Slide (`post 2639`):** `2025/08/SM01.jpg` (`648x900`, `127,083 B` + `216x300` thumbnail)
- **Property Gallery (7 AVIF images):**
  1. `mirzam-flat-for-sale-02.avif` (`199,913 B`)
  2. `mirzam-flat-for-sale-01.avif` (`243,450 B`)
  3. `mirzam-flat-for-sale-03.avif` (`301,926 B`)
  4. `mirzam_9.width-2560.format-avif-1.avif` (`122,482 B`)
  5. `mirzam-flat-for-sale-04.avif` (`123,679 B`)
  6. `mirzam-flat-for-sale-05.avif` (`88,635 B`)
  7. `mirzam_1.width-2560.format-avif.avif` (`1152x768`, `136,875 B` + `1024x683` variant `95,707 B`)

### 6.2 `SB00039` — ABC Blooming Dale (Banani)
- **Properties List Card:** `2025/08/ABC-Blooming-Dale.jpg` (`303,181 B` + `768x1024` variant `195,019 B`)
- **Gallery (5 JPEGs):** `ABC-Blooming-Dale-00-scaled.jpg` (`522,081 B`), `ABC-Blooming-Dale.jpg`, `ABC-Blooming-Dale-03-scaled.jpg` (`461,321 B`), `ABC-Blooming-Dale-02-scaled.jpg` (`353,776 B`), `ABC-Blooming-Dale-01-scaled.jpg` (`353,776 B`)

### 6.3 `SB00001` — Shanta Properties – The Vintage (Banasree)
- **Home Featured Slide:** `2025/08/Shanta-Vintage.jpg` (`129,408 B` + `217x300` thumbnail)
- **Properties List Card & Gallery (6 AVIFs):** `The-Vintage.avif` (`75,036 B`), `The-Vintage-01-1.avif` (`53,031 B`), `The-Vintage-02.avif` (`70,816 B`), `The-Vintage-01.avif` (`50,003 B`), `The-Vintage-03.avif` (`72,854 B`), `The-Vintage-04.avif` (`28,567 B`)

### 6.4 `SB000033` — EMPL Odhuna (Bashundhara R/A)
- **Home Featured Slide (`post 3113`):** `2025/08/EMPL-Bashundhara-home.jpg` (`720x1000`, `258,095 B` + `216x300`)
- **Properties List Card & Gallery (5 JPEGs):** `EMPL-Bashundhara-003-scaled.jpg` (`848,260 B` + `682x1024`), `EMPL-Bashundhara-01-scaled.jpg` (`553,182 B`), `EMPL-Bashundhara-004-scaled.jpg` (`492,448 B`), `EMPL-Bashundhara-001-scaled.jpg` (`550,914 B`), `EMPL-Bashundhara-002-scaled.jpg` (`532,034 B`)
- *(Note: WP Media IDs `2391`–`2399` contain 9 unedited vertical smartphone photos `IMG_4016-scaled.jpg` through `IMG_8883-scaled.jpg` (`1920x2560` HEIC-converted JPEGs) of this same Odhuna Bashundhara building; not linked in active pages.)*

### 6.5 `SB00002` — Urban Shishirkona (Gulshan-2)
- **Home Featured Slide:** `2025/08/Urban-Shishirkona-home-1.jpg` (`213,536 B` + `216x300`)
- **Properties List Card & Gallery (6 JPEGs):** `Urban-Shishirkona-00.jpg` (`349,224 B` + responsive `300x200` through `2048x1364`, also used on `/contact-us/`), `Urban-Shishirkona.jpg` (`321,879 B`), `Urban-Shishirkona-03.jpg` (`328,897 B`), `Urban-Shishirkona-02-1.jpg` (`774,516 B`), `Urban-Shishirkona-04.jpg` (`354,309 B`), `Urban-Shishirkona-02.jpg` (`426,064 B`)

### 6.6 `SB00044` — Modern South-Facing Apartment (West Dhanmondi)
- **Properties List Card & Gallery (4 JPEGs):** `West-Dhanmondi-Modern-Flat.jpeg` (`479,530 B` + `768x1024`), `West-Dhanmondi-Modern-Flat-02.jpeg` (`155,168 B`), `West-Dhanmondi-Modern-Flat-01.jpeg` (`304,903 B`), `West-Dhanmondi-Modern-Flat-03.jpeg` (`178,146 B`)

---

## 7. Unlinked / Legacy WP Media Library Uploads

Preserved in local mirror archive for audit completeness (`used_in_pages=false`):
- `2024/04/1214.jpg` (`720x1000`, `168,560 B`, Media ID `798`) — 3D architectural render labeled "Ratanpur Square" (not linked to any live property post).
- `2024/05/Floor.webp` (`800x800`, `26,108 B`, Media ID `1609`) — generic floor plan icon unused in active templates.
- `2024/04/director.jpg`, `2024/04/managing-director-e1714031641735.jpg` — 2024 portrait uploads superseded by July 2025 leadership portraits.
- `2024/05/IMG_4016-scaled.jpg` through `2024/05/IMG_8883-scaled.jpg` — May 2024 architectural/interior capture set (`9` files, `246 KB`–`871 KB`) superseded by `2025/08/EMPL-Bashundhara-*.jpg`.

