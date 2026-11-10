# 01 — Complete Page, URL Inventory & Website Structure

## 1. Robots & Sitemap Probes

| Endpoint | HTTP Status | Final URL / Outcome | Notes |
| :--- | :--- | :--- | :--- |
| `https://shwapnobari.com/robots.txt` | **200** | `User-agent: * / Disallow: /wp-admin/ / Allow: /wp-admin/admin-ajax.php` | No `Sitemap:` directive declared |
| `https://shwapnobari.com/sitemap.xml` | **404** | Redirected/resolved to `/wp-sitemap.xml` (404) | No XML sitemap active |
| `https://shwapnobari.com/sitemap_index.xml` | **404** | Not Found | No Yoast/RankMath sitemap |
| `https://shwapnobari.com/wp-sitemap.xml` | **404** | Not Found | WordPress core sitemap disabled or blocked |
| Meta Robots (All HTML pages) | — | `<meta name="robots" content="noindex, nofollow" />` | Site-wide indexing discouraged in WP settings |

---

## 2. Core Public Pages (12 WP Pages — All HTTP 200)

| WP ID | URL | Page Title | Slug | Primary Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `14` | `https://shwapnobari.com/` | `shwapnobari` | `home` | Main landing page: video hero, Buy/Sell/Develop strip, property categories, latest properties, leadership experts, partner CTA, 6 core values modals, serving areas, About Us, interactive Dhaka map |
| `1379` | `https://shwapnobari.com/about-us/` | `About Us – shwapnobari` | `about-us` | Company history (Est. 2016), Vision, Mission, Rotary District 3281 Social Activities & PHF certificate, Leadership Team, Company overview & call/email CTA |
| `1569` | `https://shwapnobari.com/properties-list/` | `Properties List – shwapnobari` | `properties-list` | Filterable property directory (All / Residential / Commercial via MixItUp; server-side filter by `project_state` and `location`) |
| `1880` | `https://shwapnobari.com/services/` | `Services – shwapnobari` | `services` | 9-card Services Overview grid |
| `1925` | `https://shwapnobari.com/service-buy/` | `Service Buy – shwapnobari` | `service-buy` | Buy Property service detail page |
| `1944` | `https://shwapnobari.com/service-sell/` | `Service Sell – shwapnobari` | `service-sell` | Sell Property service detail page |
| `1950` | `https://shwapnobari.com/service-develop/` | `Service Develop – shwapnobari` | `service-develop` | Develop Property service detail page |
| `1410` | `https://shwapnobari.com/contact-us/` | `Contact Us – shwapnobari` | `contact-us` | Get in Touch info, Email/Call/Head Office cards, Contact Form 7 message form, property showcase photo, interactive Leaflet map |
| `1990` | `https://shwapnobari.com/profile-mahfuzur/` | `Sayed Mahfuzur Rahman – shwapnobari` | `profile-mahfuzur` | Director profile: Rtn. Sayed Mahfuzur Rahman phf |
| `2038` | `https://shwapnobari.com/profile-zakir/` | `Md. Zakir Hossain – shwapnobari` | `profile-zakir` | Managing Director profile: Rtn. Md. Zakir Hossain phf |
| `2834` | `https://shwapnobari.com/privacy-policy/` | `Privacy Policy – shwapnobari` | `privacy-policy` | Full 8-section Privacy Policy |
| `2835` | `https://shwapnobari.com/terms-and-conditions/` | `Terms & Conditions – shwapnobari` | `terms-and-conditions` | Full 11-section Terms & Conditions |

---

## 3. Property Detail Pages (6 Properties — All HTTP 200)

| Ref ID | URL | Page Title | Project / Building | Location | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `SB00037` | `https://shwapnobari.com/properties/luxury-flat-for-sale-asad-avenue/` | `Luxury Flat for Sale @Asad Avenue \| 2421 SFT – shwapnobari` | Shanta Mirzam | 3/7, Asad Avenue, Block A, Mohammadpur, Dhaka | **Available** |
| `SB00039` | `https://shwapnobari.com/properties/luxury-flat-for-sale-banani/` | `Luxury Flat for Sale @Banani \| 1800 SFT – shwapnobari` | ABC Blooming Dale | House 61, Road 01, Block-I, Banani | **Sold** |
| `SB00001` | `https://shwapnobari.com/properties/luxury-flat-for-sale-banasree/` | `Luxury Flat for Sale @Banasree \| 2120 SFT – shwapnobari` | Shanta Properties – The Vintage | Plot-A, Main Road, Block-A, Banasree | **Sold** |
| `SB000033` | `https://shwapnobari.com/properties/luxury-flat-for-sale-bashundhara/` | `Luxury Flat for Sale @Bashundhara \| 2129 SFT – shwapnobari` | EMPL Odhuna | House 73, Road 8, Block-B, Bashundhara R/A | **Available** |
| `SB00002` | `https://shwapnobari.com/properties/luxury-flat-for-sale-in-gulshan-2-3050-sft/` | `Luxury Flat for Sale @Gulshan-2 \| 3050 SFT – shwapnobari` | Urban Shishirkona | Road 115, House 36, Gulshan-2 | **Sold** |
| `SB00044` | `https://shwapnobari.com/properties/modern-south-facing-apartment-for-sale-west-dhanmondi/` | `Modern South-Facing Apartment for Sale @West Dhanmondi \| 1400 SFT – shwapnobari` | Modern South-Facing Apartment (Renowned Developer) | West Dhanmondi (Shankar), Dhaka | **Available** |

---

## 4. Property Archive, Query Filter & Category Routes

### 4.1 Archive & Pagination Probes
| URL | HTTP Status | H1 Heading | Matching Listings |
| :--- | :--- | :--- | :--- |
| `https://shwapnobari.com/properties/` | **200** | Property archive | All 6 properties |
| `https://shwapnobari.com/properties-list/` | **200** | `All Properties` | All 6 properties |
| `https://shwapnobari.com/properties-list/?paged=2` -> `/properties-list/page/2/` | **200** | `All Properties` | Same 6 properties (no additional pages) |

### 4.2 Status Filter Routes (`project_state`)
| URL | HTTP Status | H1 Heading | Matching Listings |
| :--- | :--- | :--- | :--- |
| `https://shwapnobari.com/properties-list/?project_state=Available` | **200** | `All Available Properties` | 3 properties (Bashundhara, West Dhanmondi, Asad Avenue) |
| `https://shwapnobari.com/properties-list/?project_state=Upcoming` | **200** | `All Upcoming Properties` | 0 (`No properties found.`) |
| `https://shwapnobari.com/properties-list/?project_state=Sold` | **200** | `All Sold Properties` | 3 properties (Banani, Gulshan-2, Banasree) |

### 4.3 Location Filter Routes (`location`)
| URL | HTTP Status | H1 Heading | Matching Listings |
| :--- | :--- | :--- | :--- |
| `https://shwapnobari.com/properties-list/?location=banani` | **200** | `All Banani Properties` | 1 property (`SB00039`) |
| `https://shwapnobari.com/properties-list/?location=banasree-properties` | **200** | `All Banasree Properties` | 1 property (`SB00001`) |
| `https://shwapnobari.com/properties-list/?location=bashundhara-properties` | **200** | `All Bashundhara Properties` | 1 property (`SB000033`) |
| `https://shwapnobari.com/properties-list/?location=dhanmondi` | **200** | `All Dhanmondi Properties` | 1 property (`SB00044`) |
| `https://shwapnobari.com/properties-list/?location=gulshan` | **200** | `All Gulshan Properties` | 1 property (`SB00002`) |
| `https://shwapnobari.com/properties-list/?location=mirpur` | **200** | `All Mirpur Properties` | 0 (`No properties found.`) |
| `https://shwapnobari.com/properties-list/?location=mohammadpur-properties` | **200** | `All Mohammadpur Properties` | 1 property (`SB00037`) |
| `https://shwapnobari.com/properties-list/?location=paltan` | **200** | `All Paltan Properties` | 0 (`No properties found.`) |

### 4.4 WordPress Category Archives (`/category/*` — All HTTP 200, Empty)
All 8 WP categories returned `count: 0` in `/wp-json/wp/v2/categories` and display empty template headers (`Category: <Name>`):
- `/category/banani/`
- `/category/banasree-properties/`
- `/category/bashundhara-properties/`
- `/category/dhanmondi/`
- `/category/gulshan/`
- `/category/mirpur/`
- `/category/mohammadpur-properties/` (contains category description: `"Properties in Mohammadpur"`)
- `/category/paltan/`

---

## 5. Broken, 404 & Redirected Internal Routes

| URL | HTTP Status | Discovered From | Notes |
| :--- | :--- | :--- | :--- |
| `https://shwapnobari.com/service-exchange/` | **404** | `/services/` (`Legal Support` and `Property Acquisition` "Read More" buttons) | Broken target link |
| `https://shwapnobari.com/navigation/` | **404** | `/wp-json/wp/v2/navigation/4` | Internal WP block navigation slug not routed as public page |
| `https://shwapnobari.com/1214/` | **404** | Asset/permalink reference | Non-existent post/attachment route |
| `https://shwapnobari.com/?p=3112` | **200** (redirects to `/`) | Media item `3113` parent ID `3112` | Redirects to homepage |

---

## 6. External & Direct Contact Links Found Site-Wide

### External Links
- **Google Maps Official Pin:** `https://www.google.com/maps?cid=17258634447160801028`
- **Facebook Official Page:** `https://www.facebook.com/shwapnobaribd/`
- **Facebook Sharer Links:** `https://www.facebook.com/sharer/sharer.php?u=<property-url>` (on all 6 property detail pages)
- **Hero Ambient Background Video:** `https://www.youtube.com/watch?v=hyJYhGPQyy8` (embedded in homepage Elementor hero container)
- **Map Tile Source:** `https://tile.openstreetmap.org/{z}/{x}/{y}.png` (base64-encoded in WP Leaflet Map shortcode)

### Direct Contact Links (`tel:` & `mailto:`)
| Link | Label / Context | Found On |
| :--- | :--- | :--- |
| `tel:+8801711107238` / `tel:+880 1711107238` / `tel:01711107238` | Main / Director / Office Phone | Contact Us, About Us, Profile Mahfuzur, 5 of 6 Property pages |
| `tel:+8801911398936` | Managing Director Phone | Profile Zakir (`/profile-zakir/`) |
| `01722926232` (plain text) | Call line mentioned alongside WhatsApp `+88017111 07238` | Contact Us (`/contact-us/`) |
| `mailto:info@shwapnobari.com` (plain text in Contact card) | General Contact Email | Contact Us (`/contact-us/`) |
| `mailto:helloshwapnobari@gmail.com` | Property Inquiry Email | 5 of 6 Property pages (`Call`/`Email` buttons; empty on Gulshan-2) |
| `mailto:mahfuzred@gmail.com` | Director Email | About Us, Profile Mahfuzur |
| `mailto:z.hossain71@yahoo.com` | Managing Director Email | Profile Zakir |

---

## 7. Navigation & Website Structural Hierarchy

### 7.1 Header Navigation (`elementor-16`, Fixed Top Bar)
- **Brand Logo:** `Logo.webp` -> `/`
- **Primary Menu Items:**
  1. `Home` -> `/`
  2. `About Us` -> `/about-us`
  3. `Properties` -> `/properties-list` *(Dropdown Submenu)*
     - `Available` -> `/properties-list?project_state=Available`
     - `Upcoming` -> `/properties-list?project_state=Upcoming`
     - `Sold` -> `/properties-list?project_state=Sold`
  4. `Services` -> `/services`
  5. `Contact Us` -> `/contact-us`
- **Search Icon (`Search-Icon.webp`):** Container `bf1293c` is hidden across all breakpoints (`elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile`) and has no active anchor/trigger on the live site.
- **Mobile Drawer (`hfe-flyout`):** Renders `Logo.webp`, `Close-Icon.webp`, same 5 menu items + Properties submenu, plus a hardcoded social icon row (`Facebook-1`, `Instagram-1`, `LinkedIn-1`, `Pinterest-1`, `X-1`) where all 5 `href` values are `"#"`.

### 7.2 Footer Navigation (`elementor-252`)
- **Brand Logo:** `White-Logo.webp` -> `/`
- **Company Block:**
  - Icon: `Local-Icon-White.webp`
  - Heading (`H2`): `Shwapno Bari Real Estate Ltd.`
  - Address Link: `House- 14/A, Level-1(1st floor), Road-02, Block-L, Banani, Dhaka-1213` -> `https://www.google.com/maps?cid=17258634447160801028`
- **Social Icons:**
  - `Facebook.webp` -> `https://www.facebook.com/shwapnobaribd/`
  - `Instagram.webp` -> *(no link attached)*
  - `LinkedIn.webp` -> *(no link attached)*
- **Bottom Legal Bar:**
  - `Copyright © 2023 Shwapnobari`
  - Links: `About Us` (`/about-us/`), `Contact Us` (`/contact-us/`), `Privacy Policy` (`/privacy-policy/`), `Terms & Condition` (`/terms-and-conditions/`)

