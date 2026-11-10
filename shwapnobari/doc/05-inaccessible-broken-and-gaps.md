# 05 — Inaccessible Pages, Broken Links & Content Gaps

Every broken route, restricted REST endpoint, placeholder copy block, missing taxonomy item, and content inconsistency discovered on `https://shwapnobari.com/` is documented explicitly below rather than silently omitted or fabricated over.

---

## 1. HTTP 404 & Broken Internal Routes

| Endpoint / Link | Live HTTP Status | Where Discovered | Live Behavior & Redesign Handling |
| :--- | :--- | :--- | :--- |
| `https://shwapnobari.com/service-exchange/` | **404 Not Found** | `/services/` (`Legal Support (Rajuk & Private)` & `Property Acquisition` Read More buttons) | Live site triggers WordPress 404 page. **Redesign decision:** Dedicated Service Detail coverage on `/services/` + `/service-exchange` route presenting Shwapno Bari's factually documented Exchange Offer, RAJUK/Private Legal Support (sale permission, registration, mutation), and Property Acquisition services from `/about-us/` and `/contact-us/` copy (no invented details), plus a proper styled 404 fallback for genuinely unknown URLs. |
| `https://shwapnobari.com/navigation/` | **404 Not Found** | `/wp-json/wp/v2/navigation/4` slug | Internal Gutenberg `wp_navigation` slug not routed as public page. |
| `https://shwapnobari.com/1214/` | **404 Not Found** | Seeded permalink check from attachment ID range | Non-existent post route. |
| `https://shwapnobari.com/sitemap.xml` | **404 Not Found** | Root crawl | Redirects to `/wp-sitemap.xml` which returns 404. |
| `https://shwapnobari.com/sitemap_index.xml` | **404 Not Found** | Root crawl | Not configured. |
| `https://shwapnobari.com/wp-sitemap.xml` | **404 Not Found** | Root crawl | WordPress native sitemap disabled or blocked; `robots.txt` declares no `Sitemap:` directive. |

---

## 2. Restricted / Non-Public WordPress REST Endpoints & SEO Block

- **Meta Robots on Every Public Page:** `<meta name="robots" content="noindex, nofollow" />` is active site-wide in WordPress ("Discourage search engines from indexing this site" setting left enabled in production).
- **Custom Post Type `properties` Excluded from REST API:** `/wp-json/wp/v2/types` only exposes built-in types + Elementor/floating-buttons; `properties` CPT and its custom taxonomies (`project_state`, `location`, property category) have `show_in_rest = false` and were therefore extracted completely from rendered HTML DOM + Leaflet inline scripts instead.
- **WP REST API `401 Unauthorized` / `404` Responses (Unauthenticated Public Requests):**
  - `/wp-json/wp/v2/elementor_library` -> **401**
  - `/wp-json/wp/v2/font-families` -> **401**
  - `/wp-json/wp/v2/menus` -> **401**
  - `/wp-json/wp/v2/menu-items` -> **401**
  - `/wp-json/wp/v2/templates` -> **401**
  - `/wp-json/wp/v2/template-parts` -> **401**
  - `/wp-json/wp/v2/global-styles` -> **404**
  - `/wp-json/wp/v2/posts` -> **200**, `count: 0` (no blog/news posts exist).

---

## 3. Placeholder (`Lorem ipsum`) & Unedited Template Copy on Live Site

The original production website left placeholder Latin copy and template prompts in **5 places**:

1. **Home (`/`) — `Explore The Map` Section Subtitle:**
   > *"Lorem ipsum dolor sit amet, consectetur adipiscing elit."*
2. **Services Overview (`/services/`) — All 9 Service Cards:**
   Every card displays identical placeholder text:
   > *"Dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt sapien id consequat mattis. Pellentesque eget ante sit amet nisi"*
3. **Service Buy (`/service-buy/`) — Body Copy:**
   Two full paragraphs of *"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."* instead of property-buying details.
4. **Service Sell (`/service-sell/`) — Body Copy:**
   Two full paragraphs of *"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."* instead of property-selling details.
5. **All 6 Property Detail Pages — `Mortgage Calculator` Subtitle:**
   > *"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt sapien id consequat mattis..."*
6. **Terms & Conditions (`/terms-and-conditions/`) — Section 8 (`Privacy Policy`):**
   Contains literal unedited boilerplate note:
   > *"Your use of our website is also governed by our Privacy Policy **(please include this if you have one)**."*
   And the `"Privacy Policy"` words are wrapped in an empty `<a href="">` link rather than `/privacy-policy/`.

**Strict Redesign Policy for Placeholder Copy:**
- We preserve **100% of real business copy** untouched.
- Where the original site had `Lorem ipsum`, we **never** leave Latin dummy text in a premium UI AND **never** fabricate ungrounded claims, fake metrics, or imaginary legal terms. Instead, `Lorem ipsum` blocks are replaced solely with concise, accurate service/tool helper copy synthesized strictly from Shwapno Bari's real stated business descriptions on `/about-us/` and `/contact-us/` (e.g., buy/sell/exchange/mutation/sale-permission/legally vetted residential inventories from `/about-us/` and `/contact-us/`, and real BDT installment calculation context for the Mortgage Calculator), while Section 8 of Terms & Conditions links directly to `/privacy-policy/`.

---

## 4. Broken / Incomplete Contact, Navigation & Icon Mappings

1. **Urban Shishirkona (`SB00002`, Gulshan-2) Missing Agent Links:**
   On the live page, both the `Call` (`<a href="tel:">`) and `Email` (`<a href="mailto:">`) action buttons have empty targets. In the redesign, this falls back cleanly to the verified company property desk (`tel:+8801711107238` and `mailto:helloshwapnobari@gmail.com`) while documenting the gap here.
2. **Global Header Search Icon Hidden Everywhere:**
   Elementor container `bf1293c` containing `Search-Icon.webp` has CSS classes `elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile` and no click action. In the redesign, we provide an interactive global Property Search modal filtering across all 6 real properties, locations, statuses, and prices.
3. **Empty/Dummy Social Links:**
   - Footer `Instagram.webp` and `LinkedIn.webp` have no `href` targets (only Facebook `https://www.facebook.com/shwapnobaribd/` is linked).
   - Mobile drawer renders 5 social icons (`Facebook-1`, `Instagram-1`, `LinkedIn-1`, `Pinterest-1`, `X-1`) where all `href` attributes are `"#"`.
   - **Redesign handling:** Link Facebook to `https://www.facebook.com/shwapnobaribd/` everywhere; do not render fake `"#"` social buttons.
4. **Services Card Icon Swaps & Misrouted CTAs (`/services/`):**
   - `Buy Property` renders `Sell-Property.webp` icon; `Sell Property` renders `Buy-Property.webp` icon (swapped). We pair `Buy-Property.webp` with Buy and `Sell-Property.webp` with Sell cleanly.
   - `Office Solutions` and `Property Consultancy` point to `/service-buy`; `Credit Profiling` and `Property Management` point to `/service-sell`; `Legal Support` and `Property Acquisition` point to `/service-exchange` (404).
5. **Home `Serving Area` Duplicated City Name:**
   The 8-item Serving Area strip renders `Uttara` three times:
   `Gulshan`, `Banani`, `Uttara`, `Dhanmondi`, `Mirpur DOHS`, `Niketan`, `Uttara`, `Uttara`.
   *(In the redesign we preserve the 6 distinct locations displayed — `Gulshan`, `Banani`, `Uttara`, `Dhanmondi`, `Mirpur DOHS`, `Niketan` — alongside the additional catalog locations `Mohammadpur`, `Bashundhara R/A`, `Banasree`, and `Paltan` from `/properties-list/` filters, without broken triple-Uttara repetition.)*
6. **ABC Blooming Dale (`SB00039`, Banani) Missing Map Coordinates:**
   Unlike the other 5 properties, `SB00039` has no embedded Leaflet coordinates on either `/` or `/contact-us/`. Its map marker is omitted or placed as area-level reference only (never fabricated as exact Plot coordinates).
7. **Empty Inventory States on Live Site:**
   - `Upcoming` (`?project_state=Upcoming`) -> `0` properties.
   - `Mirpur` (`?location=mirpur`) -> `0` properties.
   - `Paltan` (`?location=paltan`) -> `0` properties.
   - All `8` `/category/*` archives (`banani`, `banasree-properties`, `bashundhara-properties`, `dhanmondi`, `gulshan`, `mirpur`, `mohammadpur-properties`, `paltan`) have `0` WordPress blog posts and render blank empty headers.
   - **No FAQs** exist on any page on `shwapnobari.com`.

---

## 5. Typographical & Mechanical Issues Logged Verbatim

- `/about-us/`: Section headings read `Mision` (missing `s`) and `Social Activites` (missing `i`).
- `/about-us/` & `/profile-mahfuzur/`: Body paragraph spells `"Sayed Mafuzur Rahman"` (missing `h`) whereas heading reads `"Rtn. Sayed Mahfuzur Rahman phf"`.
- `/` Core Values: Card 4 button label mixes case (`OwnerShip`), whereas modal heading reads `Ownership`.
- `/service-buy/`, `/service-sell/`, `/contact-us/`: `WhatsApp: +88017111 07238` spacing mismatch vs `+880 1711107238` / `tel:01711107238`; minor punctuation spacing (`‘ ’SHWAPNO BARI’’`, `Company .`).
- Footer legal bar: `Copyright © 2023 Shwapnobari` (unupdated year since initial launch).
- Mortgage Calculator JS bug/quirk: Label reads `Total Loan Amount` while `#totalAmount` outputs total lifetime repayment (`monthly_payment * loan_period * 12`).

