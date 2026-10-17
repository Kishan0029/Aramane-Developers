# Aramane Developers Website: AntiGravity Build Prompt

## Role

You are a senior product designer and full-stack engineer building a premium, editorial-style website for a Bengaluru real estate developer.

Work autonomously:

1. Produce an implementation plan (sitemap, design tokens, component list).
2. Build the site.
3. Run it in the browser and visually verify it at **375px, 768px and 1440px** widths.
4. Fix any issues you find before finishing.

---

## Client

**ARAMANE BUILDERS AND DEVELOPERS PVT. LTD.** (brand: **ARAMANE**, tagline: *"Timeless Living"*)

Bengaluru-based developer of residential apartments and plotted developments.

- **Phone:** 9480008899
- **Fax:** +91 80 6759 0400
- **Website:** www.aramanedevelopers.com
- **Office address:** not provided. Use the placeholder `[Office address – to be confirmed]` and do not invent one.

---

## Design Direction

I have attached a screenshot of an architecture-studio site called **"Archetype"**. It is the **primary** layout and mood reference.

Also open and study these two sites for feel and structure. **Do NOT copy any of their text, images or code.**

- <https://www.mhdesignbuild.in/>: luxury architecture and interiors: restraint, big imagery, premium tone.
- <https://rajabuilders.in/>: real-estate structure: project cards with status tags, a completed-projects typographic list, a purpose-driven statement section, and a contact form with an "I want to Buy / Invest / Partner" intent selector.

### Take from the Archetype screenshot

- Warm cream/ivory page background, generous whitespace, calm editorial pacing.
- Full-bleed hero photograph with a large, light-weight serif headline overlaid bottom-left and one solid button.
- Minimal nav: links on the left, centered wordmark logo, one action on the right.
- Asymmetric, staggered project grid: images of different sizes, each with a small-caps title, a one-line description and an underlined "READ MORE" link.
- "Our Philosophy" split section: monochrome portrait on the left, serif heading and body text on the right, with a small underlined link.
- Numbered services list (01, 02, 03, 04) with thin divider lines.
- Contact section with underline-style form fields and a small solid Submit button.

### Brand adaptation (important)

Do **not** use Archetype's olive green. Use the Aramane brand palette instead:

| Role | Colour |
|---|---|
| Page background | Warm ivory `#F5F0E6` (alternate sections `#EDE6D6`) |
| Primary / buttons / dark sections | Deep navy `#1B2A49` |
| Accent | Antique gold `#B8975A` (thin rules, small icons, hover states, tags) |
| Text | Near-black `#1A1A1A` |
| Muted text | `#6B6B6B` |

- **Typography:** headings in **Cormorant Garamond** (light/regular, large, generous line-height, with some uppercase letter-spaced small labels). Body and UI in **Inter** or **Jost**. Load via `next/font`.
- **Corners:** square or very subtly rounded (2px). No heavy shadows, gradients or glassmorphism. Use hairline (1px) borders in gold or navy at low opacity.
- **Photography treatment:** natural colour for project renders; grayscale portraits for leadership.
- **Overall feel:** modern, elegant, trustworthy, luxurious but not flashy.

---

## Tech Stack

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS** + **Framer Motion**. Configure for **static export** so it can be deployed on a VPS behind Nginx.
- All content lives in **one typed data file** (`/data/site.ts`) so it can be edited or translated later. Do not hard-code copy inside components.
- Images via `next/image` with lazy loading and WebP. Put images in `/public/assets/` with clear names (see **Assets**). If a file is missing, show an elegant neutral placeholder block, never a broken image.
- **Enquiry form:** client-side validation (name, phone, email, intent, message), posts JSON to the URL in env variable `NEXT_PUBLIC_ENQUIRY_WEBHOOK`, with success and error states. Include a honeypot field for spam.
- **WhatsApp:** floating click-to-chat button using env variable `NEXT_PUBLIC_WHATSAPP_NUMBER` (default `919480008899`) with a pre-filled message.
- **Performance and quality:** Lighthouse 90+ on all four categories, semantic HTML, keyboard accessible, visible focus states, alt text on all images, respects `prefers-reduced-motion`.

---

## Sitemap

1. **Home**
2. **About** (company story, philosophy, leadership)
3. **Projects** (listing with filter chips: All / Ongoing / Upcoming / Plotted Developments / Apartments)
4. **Five individual project pages:**
   - `/projects/assets-aadhya`
   - `/projects/krb-township`
   - `/projects/chandapura-apartments`
   - `/projects/electronics-city-high-rise`
   - `/projects/plotted-township`
5. **Contact**

**Header:** Projects and About on the left; centered ARAMANE logo; "Enquire Now" button plus phone number on the right. On mobile, use a full-screen menu overlay with the same links. The header becomes solid ivory with a hairline border after scrolling.

---

## Logo

Recreate the logo as an inline SVG:

- A gold Greek-temple icon (pediment plus 6 columns plus base).
- The wordmark "ARAMANE" in letter-spaced serif capitals (navy).
- "TIMELESS LIVING" in small caps beneath, with a thin gold ornamental line.

Make it easy to swap for `/public/assets/logo.svg` later. Provide light and dark variants for the navy footer.

---

## Home Page Sections (in order)

### 1. Hero

Full-bleed image (use the Chandapura apartment render) with a dark gradient at the bottom for legibility.

- **Headline:** "ARAMANE: Timeless Living, Built on Trust."
- **Sub-line:** "Residential and plotted developments across Bengaluru, guided by over four decades of real estate experience."
- **Buttons:** "View Projects" (solid navy) and "Enquire Now" (outlined).

### 2. Statement

A large centered serif statement in the style of a purpose section:

> "From a rank outsider to property development in a new city, to an enviable portfolio of residential and plotted developments."

Below it, a short two-line paragraph and an underlined "Our Story" link to About.

### 3. Featured Projects

Archetype-style staggered grid with all 5 projects. Each card has a status tag (see **Project Data**), name, location, one-line summary and an underlined "READ MORE". Subtle hover zoom on the image.

### 4. Numbers Strip

Large serif numerals with small-caps labels, using **only facts from the PDF**:

- **40+**: Years of real estate experience (founder)
- **5**: Projects: ongoing, upcoming and plotted
- **115**: Plots at Assets Aadhya
- **57,000**: Sq. ft. apartment project in progress

### 5. Our Philosophy

- **Left:** grayscale portrait of K. P. Ramesh Babu.
- **Right:** heading "Our Philosophy" and the PQRST credo introduction, then five rows, each with a big gold serif letter and one short line (write original short lines that stay faithful to the meaning):
  - **P**: Punctuality
  - **Q**: Quality
  - **R**: Reliability
  - **S**: Speed
  - **T**: Transparency
- **Link:** "Meet the Leadership".

### 6. Services

Numbered list (see **Services**). Beside it, chips for in-house verticals.

### 7. Land Owners / Partners

A navy full-width band: **"Own land in Bengaluru? Partner with Aramane."** Copy should mention Joint Development (JD) and outright acquisition, both of which appear in the PDF. Button: "Discuss Joint Development".

### 8. Contact

- **Left:** heading "Let's Talk", phone, fax, website, address placeholder.
- **Right:** the enquiry form.
- **Intent selector options:** I want to Buy / I want to Invest / I am a Landowner (Joint Development) / I want to Partner / Other.

### 9. Footer (navy)

Logo, quick links, contact details, the disclaimer text below and a copyright line.

> **Footer disclaimer:** "Images are artist's impressions and are for illustration only. Specifications, amenities and availability are subject to change. RERA Registration No.: [to be provided]."

---

## About Page

- Hero strip with the heading "Timeless Living".
- Company story paragraph built from the PDF facts, in refined language.
- PQRST philosophy section (expanded, same as home).
- **Leadership:** two large profile blocks with grayscale arch- or circle-masked portraits (`/assets/ramesh-babu.jpg` and `/assets/sandeep-kopparam.jpg`), name, title, credentials line and full bio (text below).
- **Core capabilities** from the PDF: real estate, land sourcing, land development, legal, infrastructure development, land parcel identification and market analysis, project finance, project conceptualization, design, construction, execution and delivery.
- CTA band to Contact.

---

## Leadership Content

*From the client PDF; lightly proofread, facts unchanged.*

### K. P. Ramesh Babu

**Title:** Founder, Promoter and Executive Director

**Bio:** A veteran of the real estate industry, K. P. Ramesh Babu has had a ringside view of the highs and lows of the development sector over four decades. He has extensive experience in real estate and property development in Bangalore. Under his stewardship, the company's history is a testimony to the success of a rank outsider to property development in a new city; today, Aramane has an enviable portfolio of assets comprising class residential and plotted development projects. At the core of his professional endeavours is his personal credo of PQRST: Punctuality, Quality, Reliability, Speed and Transparency. This value framework places the customer at the heart of every project and every activity within Aramane. Through this, he has infused a high level of professionalism very early in the organization. From displaying architectural flair to being a bellwether of corporate responsibility, Mr. Ramesh Babu has demonstrated the power of his vision and the strength of his values, inspiring others with a quest to achieve greater heights. He has worked with most of the top players in the Bangalore realty sector and brings significant experience in real estate and property development. He oversees all activities of Aramane Developers, including real estate, sourcing of land, land development, legal, infrastructure development, identification of land parcels and market, and overall finance of the projects.

### Mr. Sandeep Kopparam

**Title:** Managing Director

**Credentials line:** B.Arch, M.Sc (London), IPF Dip, MRICS, MCIOB

**Bio:** Mr. Sandeep Kopparam is the Managing Director of Aramane Builders and Developers Pvt. Ltd. He is an architect by profession and a professionally qualified chartered builder. He holds a master's degree in Construction Management and Real Estate from the University of Reading, and a Bachelor of Architecture degree from M.S. Ramaiah Institute of Technology, Bangalore. He has diverse experience in design, architecture, liaison, project coordination, project management, procurement, construction, project execution and sales with world-class and reputed organizations such as RSP Architects, Engineers and Planners, Synergy Property Development, Colliers International, Prestige Group, Anarock and other leading consultants and developers in India and the United Kingdom. He is also involved in angel investment, farming and finance. He oversees all activities of Aramane Developers, including project conceptualization, design, construction, execution and delivery. Verticals such as projects and engineering, design and architecture, construction, marketing and communications, and customer service were established under him.

---

## Services

Numbered 01–04, each with a one-line description:

| # | Service | Description |
|---|---|---|
| 01 | Residential Apartments | From mid-size communities to high-rise living |
| 02 | Plotted Developments & Townships | Approved layouts with planned amenities |
| 03 | Land Sourcing & Development | Identification of land parcels, legal, infrastructure |
| 04 | Joint Development & Outright Partnerships | Collaboration models for landowners |

**In-house verticals (chips):** Projects & Engineering, Design & Architecture, Construction, Marketing & Communications, Customer Service

---

## Project Data

Use exactly as given. **Do not invent specs, prices or dates.**

Status tag options: **Ongoing**, **Upcoming**, **Plots Available**.

### 1. Assets Aadhya: *Plots Available*

- Premium residential plots, 8 acres, 115 plots, a luxurious gated community.
- **Location:** Hampapura, Mysore Road, just 800 metres from the KHB project, on the Bangalore–Mysore Expressway corridor.
- **Approvals/badges:** BMICAPA Approved, RERA Approved, Individual E-Khata.
- **Layout amenities:** Entry Plaza, Jogging Track, Kids Play Area, Basketball Court, Cricket Lawn, Elder's Seating Court.
- **Nearby:** educational institutions, 15 minutes from Bengaluru University, entertainment hubs.
- **Image:** `/assets/assets-aadhya.jpg`

### 2. KRB Township: *Plots Available*

- Premium residential plots, JD project, 35 acres.
- **Location:** Jayasandra, Nukkanahalli, Karnataka 563126 (opposite CBIT College, Kolar, Bengaluru).
- **Sites available:** 30×40, 30×50, 40×60.
- **Amenities:** next to the state highway, water connection with borewell, drainage and sewage.
- **Image:** `/assets/krb-township.jpg`

### 3. Apartment Project, Chandapura: *Ongoing*

- 57,000 sq. ft. apartment project.
- **Location:** near Narayana Hrudayalaya, Chandapura.
- **Images:** `/assets/chandapura-1.jpg`, `/assets/chandapura-2.jpg` (gallery of 2 renders).

### 4. High-Rise Apartments, Electronics City: *Upcoming*

- 3.5-acre high-rise apartment project (Joint Development + Outright).
- **Location:** Electronics City.
- **Image:** `/assets/electronics-city.jpg`

### 5. Plotted Township, 25 Acres: *Upcoming*

- 25 acres of own land, township / plotted development.
- **Location:** to be confirmed (show `Location: [to be confirmed]`).
- **Image:** `/assets/township-layout.jpg`. This is a colour-coded parcel map, so style it as a "Land parcel map" figure on a light card with a caption, **not** as a hero image.

### Project page template

- Full-width hero image, breadcrumb, status tag, title, location line.
- Two-column body: a **"Key facts"** table on the left; amenities as an icon grid (simple line icons) on the right.
- "Nearby" list.
- Gallery if more than one image.
- A sticky **"Enquire about this project"** card with the form pre-filled with the project name.
- "Next project" link at the bottom.
- For Assets Aadhya, show the three approval badges as gold-outlined round seals.
- Only render the sections that have data.

---

## Assets

Place in `/public/assets/`:

| File | Used for |
|---|---|
| `logo.svg` | Logo (swap for the recreated SVG when available) |
| `ramesh-babu.jpg` | Leadership portrait |
| `sandeep-kopparam.jpg` | Leadership portrait |
| `assets-aadhya.jpg` | Project 1 |
| `krb-township.jpg` | Project 2 |
| `chandapura-1.jpg`, `chandapura-2.jpg` | Project 3 and home hero |
| `electronics-city.jpg` | Project 4 |
| `township-layout.jpg` | Project 5 (parcel map) |

---

## Motion

Subtle and premium:

- Fade-up and slight parallax on hero and images.
- Staggered reveal of project cards.
- Link underline slide-in on hover.
- Number count-up in the numbers strip.
- Smooth scrolling.

No autoplaying sound, no heavy full-page animations, no auto-rotating carousels.

---

## SEO

- Unique title and meta description per page, Open Graph tags, canonical URLs, `sitemap.xml`, `robots.txt`.
- JSON-LD (Organization / RealEstateAgent) with the phone number.
- Natural keywords: plots in Mysore Road, plots in Kolar, apartments in Chandapura, high-rise apartments Electronics City, Bengaluru real estate developer.

---

## Rules

- Use **only the facts in this prompt**. Do not invent testimonials, awards, prices, statistics, team members, addresses or RERA numbers. Mark anything unknown as a clearly visible placeholder in the data file.
- Do not copy text, images or code from the reference websites.
- Write short supporting copy in a refined, confident tone (no hype words like "dream", "best", "No.1").
- Keep code clean, componentized and commented where non-obvious.
- Include a `README.md` covering: how to run, how to edit content in `/data/site.ts`, how to set the env variables, and how to build and export for deployment.

---

## Deliverable

A running, polished, fully responsive website, with:

- the implementation plan,
- browser verification screenshots at 3 breakpoints,
- a list of every placeholder I still need to fill in.
