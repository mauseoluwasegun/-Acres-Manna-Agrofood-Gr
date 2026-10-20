# Cresx Manna — Full Website Content Extraction

> Purpose: Every user-facing text string on the site, grouped by section, so you can approve or replace it.
> Flags: 🔴 **CRITICAL** (inconsistent / wrong brand or contact) · ⚠️ **CHECK** (specific claim, name, number, or testimonial that may be fabricated) · 🟡 **PLACEHOLDER** (TBC / `#` / "coming soon")

---

## 0. BRAND IDENTITY (CRITICAL INCONSISTENCY)

| Location | Current Text | Issue |
|---|---|---|
| `messages/en.json` meta.siteTitle | **"Acres X Manna** — Africa's Richness…" | 🔴 Should be **Cresx Manna** |
| `app/[locale]/layout.tsx` title default | **"Acres X Manna** — Africa's Richness…" | 🔴 Should be **Cresx Manna** |
| `app/[locale]/layout.tsx` title template | `%s · Acres X Manna` | 🔴 Should be Cresx Manna |
| `lib/constants.ts` SITE_URL | `https://acresxmanna.com` | 🔴 Confirm correct domain |
| Footer (hardcoded) | "© {year} **Cresx Manna**" | ✅ Correct |
| Footer logo img alt | "Cresx Manna" | ✅ Correct |
| en.json footer.copyright | "© {year} **Acres X Manna**…" | 🔴 Mismatch with footer (footer overrides it) |
| en.json about.originParagraph1 | "**Acres X Manna** was born in Accra…" | 🔴 Brand name |
| en.json impact.story1Text | "Since joining the **Acres X Manna** outgrower program…" | 🔴 Brand name |
| en.json about.pullquoteTitle | "Founder & Chief Executive, **Acres X Manna**" | 🔴 Brand name |
| StakeholderCube.tsx intro | "**Acres X Manna** brings together a whole value chain." | 🔴 Brand name (hardcoded) |
| GlobalAmbitionSection map alt | "World map showing **Acres X Manna** global presence" | 🔴 Brand name (hardcoded) |
| FinalCTASection img alt | "**Acres X Manna** partnership…" | 🔴 Brand name (hardcoded) |

**ACTION:** Decide the official legal brand name (Cresx Manna) and replace every "Acres X Manna" instance.

---

## 1. META / SEO

| Key | Current Value |
|---|---|
| Site title | "Acres X Manna — Africa's Richness, Transformed Into Great Food" 🔴 |
| Site description | "Rooted in Africa's richest farmlands, we turn the continent's finest harvests into premium food products for tables at home and around the world." |
| Skip link | "Skip to content" |

---

## 2. NAVIGATION

| Key | Value |
|---|---|
| Home | Home |
| About | About |
| Products | Products |
| What We Do | What We Do |
| Impact | Impact |
| Contact | Contact |

---

## 3. HERO SECTION

**Eyebrow:** "Acres X Manna · African Agro-Processing" 🔴

**Headline:**
- "Africa's"
- *"Richness."*
- "Transformed Into"
- "Great"
- *"Food."*

**Subheadline:** "Rooted in Africa's richest farmlands, we turn the continent's finest harvests into premium food products for tables at home and around the world."

**CTAs:** "Explore Our Products" / "Partner With Us"

**Stats (⚠️ verify all):**
| Value | Label |
|---|---|
| 10,000+ | Farmers Supported |
| 24+ | Global Markets |
| 15,000 t/yr | Capacity |

**Image alts (hardcoded in Hero.tsx):**
- "Vibrant African agricultural collage — farms, food, and a smiling farmer"
- "Farmer hands holding fresh mangoes and tomatoes"
- "Plated jollof rice with fried plantains and vegetables"
- "Golden cocoa and harvest products"

---

## 4. FARM TO FOOD — 6 STAGES (home page)

**Section eyebrow:** "→ NEXT: FROM FARM TO FOOD"
**Eyebrow:** "SIGNATURE JOURNEY"
**Headline:** "From *Farm* to *Food* — in Six Stages"
**Description:** "Scroll through the full journey below. Every seed, every harvest, every plate is part of one African story."
**CTA:** "Explore The Full Process"

| Stage | Eyebrow | Headline | Description |
|---|---|---|---|
| 01 | STAGE · AGRICULTURE | Seeds of *Africa*. | "Sourced from smallholder farms and cooperatives across Ghana, Côte d'Ivoire, and Nigeria — maize, cocoa, shea, and indigenous crops like fonio and tiger nuts." ⚠️ |
| 02 | STAGE · HARVEST | Golden *harvest*. | "Hand-picked and mechanically harvested at peak ripeness. Each batch undergoes farm-gate quality grading per Ghana Standards Authority (GSA) protocols." ⚠️ |
| 03 | STAGE · PROCESSING | Modern *transformation*. | "HACCP and ISO 22000-certified facilities in the Greater Accra region. Cleaning, sorting, milling, and blending — precision at every step." ⚠️ |
| 04 | STAGE · PACKAGING | Ready for *the shelf*. | "Shelf-stable packaging meeting EU, USFDA, and ECOWAS food-safety requirements. Every label tells the origin story of its contents." ⚠️ |
| 05 | STAGE · FOOD | Great *food*. | "From our kitchens to yours. Jollof spice blends, roasted cocoa nibs, cassava flour — nutritious, culturally rooted ingredients and ready meals." |
| 06 | STAGE · GLOBAL MARKETS | For *the world*. | "Distributed across 24+ markets through Africa Continental Free Trade Area (AfCFTA) corridors and partnerships with EU and North American importers." ⚠️ |

---

## 5. ABOUT SECTION

**Divider:** "— WHO WE ARE"

### Origin Story
- **Eyebrow:** "Our Origin Story"
- **Headline:** "We started with one question: / why isn't African food, / everywhere?"
- **Paragraph 1:** "Acres X Manna was born in Accra, Ghana, from a simple observation: Africa produces over 60% of the world's cocoa, yet less than 5% of its chocolate. We set out to close that value gap — not just in cocoa, but across grains, shea, fruits, and ready meals — by building world-class processing right where the crops grow." 🔴⚠️
- **Paragraph 2:** "Today, we operate modern food-manufacturing lines that pair community-first sourcing with international food-safety certifications (HACCP, ISO 22000, Ghana FDA). The result: premium African-made products that stand on any shelf, anywhere." ⚠️

**Meta stats:**
| Value | Label |
|---|---|
| 2021 | Founded ⚠️ |
| 5 | Countries ⚠️ |

**CTAs:** "Read Full Story" / "See Our Impact"

### Three Pillars
- **Eyebrow:** "Our Philosophical Anchor"
- **Headline:** "Ancestral philosophy meets *modern food sovereignty.*"
- **Description:** "Guided by timeless West African principles of soil reverence, artisanal craft, and communal prosperity."

| Pillar | Eyebrow | Headline | Description |
|---|---|---|---|
| 1 | SANKOFA · ANCESTRAL ORIGIN | Reclaiming the *Sacred Seed*. | "Sankofa teaches us to look back to move forward. We preserve indigenous agro-biodiversity — ancient sorghum, wild shea, and heirloom cocoa — paying outgrowers 18–32% above market rates to honor generational soil custodianship." ⚠️ |
| 2 | ASASE YAA · ARTISANAL CRAFT | Transformation with *Reverence*. | "In honour of Mother Earth (Asase Yaa), our processing pairs gentle artisanal methods — plantain-leaf fermentation, cold expeller pressing — with rigorous HACCP and ISO 22000 precision near Tema, Ghana." ⚠️ |
| 3 | NKONSONKONSON · GLOBAL PRESTIGE | An Unbroken *African Chain*. | "Like Nkonsonkonson (the linked chain of unity), we forge direct sovereign trade routes across AfCFTA corridors, Europe, and the Americas — delivering luxury African gastronomy to global tables with pride." ⚠️ |

### Pull Quote
- **Quote:** "We don't just export food — we export the dignity of African labor, the spirit of our soil, and the joy of our communal tables."
- **Name:** "Nana Kwame Asante" ⚠️ (verify real founder)
- **Title:** "Founder & Chief Executive, Acres X Manna" 🔴

---

## 6. PRODUCTS SECTION

**Divider:** "— SIGNATURE PRODUCTS"
**Eyebrow:** "Product Showcase"
**Headline:** "Meet the products carrying *Africa's* taste forward."

**Categories:** All · Grains & Flours · Cocoa & Chocolate · Beverages · Shea & Oils · Meal Kits · Teas & Infusions

**Empty state:** "No products in this category yet — real catalog coming soon." 🟡

**Shelf section:** "Explore The Shelf" / "Swipe through *the full line*."
**Filters bar:** "Showing X of Y products" · "Filters · All origins · All sizes · Price: All" · "Full catalog →"
**CTAs:** "View All Products" / "Become a Distributor"

### Product Catalog (lib/products.ts) — ⚠️ ALL VERIFY

| # | Name | Category | Badge | Origin | Description |
|---|---|---|---|---|---|
| 1 | Volta Ancient Grain Flour | GRAINS & FLOURS | Heritage Selection | Volta Basin · Ghana | "Stone-ground blend of ancestral sorghum, fonio, and pearl millet from the Volta basin. Naturally gluten-free, mineral-dense, and revered in West African heritage cuisine." |
| 2 | Ashanti Heirloom Cocoa Powder | COCOA & CHOCOLATE | Grand Cru | Sefwi Wiawso · Western North | "Single-origin Ghanaian Forastero cocoa, fermented under plantain leaves and slow sun-cured. Imparts profound dark fruit notes, raw silk finish, and exceptional polyphenol depth." |
| 3 | Wild Savanna Mango Nectar | BEVERAGES | Single Press | Kintampo Belt · Bono East | "Cold-extracted nectar from tree-ripened Keitt and Kent mangoes bathed in Sahelian sunshine. Pure single-press fruit essence with zero refined sugars, additives, or dilution." |
| 4 | Northern Savanna Gold Shea | SHEA & NATURAL OILS | Women Cooperative Reserve | Tamale & Dagbon · Northern Region | "First cold-press unrefined vitellaria paradoxa butter. Handcrafted by master women custodians using woodsmoke roasting and cold filtration, preserving all active phytosterols." |
| 5 | Heritage Jollof Feast Kit | MEAL KITS & READY MEALS | Culinary Icon | Accra & Kumasi Artisanal Kitchens | "An homage to the West African culinary crown. Features long-grain parboiled rice, slow-simmered vine tomato purée, aged dawadawa seasoning, and Scotch bonnet aromatics." |
| 6 | Sahelian Hibiscus & Ginger Tisane | TEAS & INFUSIONS | Royal Reserve | Upper East Savannas | "Sun-dried crimson Bissap (Hibiscus sabdariffa) calyces balanced with fiery hand-crushed Volta ginger and wild mint. A deeply restorative, ruby-hued royal elixir." |

**Cultural notes per product (verify):**
1. "Sustaining West African culinary traditions for over 3,000 years"
2. "Honoring the cocoa belt elders with 100% fair cooperative pricing"
3. "Harvested at peak brix ripeness during the dry harmattan bounty"
4. "Direct off-take empowering 2,400+ women processors and their families" ⚠️
5. "The authentic party-pot smokiness celebrating joyous African feasts"
6. "Served across centuries at West African celebrations and ceremonies"

---

## 7. STAKEHOLDER CUBE

**Divider:** "— PICK YOUR ROLE"
**Eyebrow:** "For Everyone We Serve"
**Headline:** "Six faces. *One ecosystem.*"
**Intro:** "Acres X Manna brings together a whole value chain. Rotate the cube to explore a starting point that fits you." 🔴

| Stakeholder | Label | Headline | Description | CTA |
|---|---|---|---|---|
| Consumer | Explore Products | I want to Explore Products | "Discover our range of premium African-made food products crafted for global tables." | Browse Catalog |
| Farmer | Become a Supplier | Become a Supplier (Farmers) | "Partner with us as a farmer or agricultural supplier. Fair prices, steady markets, shared growth." | Farmer Inquiry |
| Distributor | Distribution | Distribution Opportunities | "Bring Acres X Manna products to your region. Distributor, wholesaler & retail partnerships." 🔴 | Distributor Inquiry |
| Partner | Partner With Us | Partner With Us | "Strategic business partnerships, co-branding, ingredient supply & joint ventures welcome." | Start Partnership |
| Investor | Invest in Growth | Invest in Growth | "Investment opportunities in African agro-processing and food manufacturing infrastructure." | Investor Deck |
| Employee | Join Our Team | Join Our Team | "Build a career at the intersection of African agriculture, food & global commerce." | View Roles |

**Mini-stats per panel (⚠️ verify):**
- Consumer: "6 Product lines" / "24/7 Availability"
- Farmer: "10K+ Farmers served" / "Fair Pricing"
- Distributor: "12+ Countries" / "D2W Distribution"
- Partner: "36+ Partners" / "Co-create Business model"
- Investor: "24+ Years horizon" / "Impact Reporting" ⚠️ (24+ years horizon seems wrong)
- Employee: "420+ Open roles" / "Purpose Driven by" ⚠️ (420+ open roles unrealistic)

**Perks per panel (verify tone/accuracy):** listed inline in StakeholderCube.tsx.

---

## 8. MANUFACTURING SECTION (hardcoded content)

**Divider:** "— MANUFACTURING & HERITAGE"
**Eyebrow:** "The Science of African Transformation"
**Headline:** "From ancestral harvest to the *world's tables* — sovereign, pristine, uncompromising."
**Description:** "We believe Africa should never just export raw bulk ingredients. We transform our continent's richness in-country — with generational reverence, laboratory precision, and culinary artistry."

### 4 Manufacturing Stages
| Stage | Eyebrow | Headline | Description |
|---|---|---|---|
| 1 | HARVEST & TERROIR | Hand-picked by *generational custodians.* | "Sourced directly from outgrower cooperatives across the Ashanti cocoa belt, Sahelian shea parklands, and Volta grain plains. Graded at the farm gate, honoring traditional harvesting rhythms with digital batch traceability." ⚠️ |
| 2 | TRANSFORMATION | Ancestral craft, *modern food science.* | "Sun-curing under plantain leaves, stone-milling, and precision cold extraction. Our Tema manufacturing lines marry age-old agro-wisdom with strict HACCP and ISO 22000 protocols." ⚠️ |
| 3 | CULINARY PRESERVATION | Engineered for *global fine dining.* | "Sustainable barrier packaging and retort technologies that lock in delicate volatile aromas, nutrients, and terroir identity — free from artificial additives or preservatives." ⚠️ |
| 4 | AFRICAN SOVEREIGNTY | Finished food, *celebrated worldwide.* | "Rigorous sensory panels, nutritional certification, and organoleptic sign-off before pallets depart Accra — proudly elevating African culinary heritage across 24+ global markets." ⚠️ |

### Triptych — Three Promises
| Eyebrow | Headline |
|---|---|
| TERROIR INTEGRITY | 100% Value Added on African Soil. |
| WORLD-CLASS STANDARDS | HACCP · ISO 22000 · FDA-Aligned. |
| COMMUNAL PROSPERITY | Fair Off-Take & Living Income Premiums. |

### Manufacturing Capabilities (list)
1. Single-origin cocoa & liquor pressing
2. Sahelian cold-pressed virgin shea butter
3. Heritage ancient grain milling (fonio, sorghum, millet)
4. HACCP & ISO 22000 certified cleanrooms
5. Retort pouching & shelf-stable African ready meals
6. Private label & bespoke formulation for luxury hospitality
7. Solar-assisted dehydration & botanical teas
8. Direct AfCFTA, EU & North America export logistics

**CTAs:** "Deep Dive Process" / "Request a Quote"

---

## 9. IMPACT SECTION

**Divider:** "— IMPACT WE CAN FEEL"
**Eyebrow:** "By The Numbers"
**Headline:** "Impact measured in *farmers*, *families* and *real futures.*"
**Description:** "Every number on this page is a person, a community, or a meal on a table we helped get there."

### Metrics (⚠️ verify ALL)
| Value | Label |
|---|---|
| 10,000+ | Farmers supported |
| 85 | Communities reached |
| 36+ | Products developed |
| 24+ | Markets served |
| 420+ | Jobs created |
| 15,000 t/yr | Production capacity |

### Human Stories
**Section eyebrow:** "Human Stories"
**Headline:** "Behind each metric, a *real story.*"

| Story | Eyebrow | Name | Quote |
|---|---|---|---|
| 1 | FARMER STORY · NORTHERN REGION | Ama Kyerewaa — Maize Farmer, Tamale | "Since joining the Acres X Manna outgrower program in 2022, I received training on improved OPV maize varieties, a guaranteed off-take contract, and a 32% higher price at harvest. My children's school fees are now covered every term." 🔴⚠️ |
| 2 | COMMUNITY · COCOA COOPERATIVE | Osei & Sons Cooperative, Sefwi Wiawso | "Premium cocoa prices year on year, plus a school scholarship fund covering 240 farmer families. We've invested in fermentation sheds and now grade our beans to EU export standard ourselves." ⚠️ |
| 3 | TEAM STORY · PRODUCTION LINE | Nana Afia — Production Lead, Tema Factory | "I started as a seasonal temp on the packaging line in 2021. After completing Acres X Manna's internal skills program, I now lead a team of 14 in the milling department, working with GMP and HACCP protocols daily." 🔴⚠️ |

> Note: ImpactSection.tsx ALSO has a fallback `STORIES` array with "[TBC real quote]" markers (🟡), but the rendered component uses the en.json versions above.

### Impact Report Banner
- **Eyebrow:** "ACRES X MANNA IMPACT REPORT · 2024" 🔴
- **Headline:** "Our full *impact report*, with methodology, community audits and data source notes."
- **CTAs:** "Download PDF" / "View all stories"

---

## 10. GLOBAL AMBITION SECTION

**Divider:** "— FROM LOCAL TO GLOBAL"
**Eyebrow:** "Global Ambition"
**Headline:** "Built in Africa, *shipped to the world.*"
**Description:** "Our ambition is simple: make African-made food a household category on every continent. These are the markets we serve today and the roadmap ahead."

### HQ Panel
- **Eyebrow:** "HQ · Ghana"
- **Headline:** "Our *home market* is where it all starts."
- **Description:** "West Africa is our heartland — Ghana as HQ, Nigeria as our biggest national market, and the broader cocoa belt our richest source of raw material." ⚠️

**Country list (⚠️ verify):**
- 🇬🇭 Ghana · HQ + milling + cocoa processing
- 🇳🇬 Nigeria · Jollof / ready meals lines
- 🇨🇮 Côte d'Ivoire · Cocoa supply network
- 🇰🇪 Kenya · East Africa distribution hub
- 🇿🇦 South Africa · Southern Africa retail

### Map Hotspots (verify presence in each)
Ghana (HQ), Nigeria (Largest Market), Côte d'Ivoire (Cocoa Belt), Kenya (East Africa Hub), South Africa (Regional Distribution), UK (Exports · EU Market), US (North America Entry), UAE (GCC Distribution)

### Export Stats (⚠️ verify)
| Eyebrow | Value | Label |
|---|---|---|
| CURRENT | 24+ | Countries with current distribution |
| 3-YEAR TARGET | 40+ | Target countries by Year 3 |
| CAPACITY | 15,000 t/yr | Annual production capacity |
| EXPORTS | 38% | Of output sold outside home markets |

**CTA:** "Bring Us To Your Region"

---

## 11. FINAL CTA / CONTACT SECTION

**Divider:** "— LET'S GROW TOGETHER"
**Eyebrow:** "Let's Talk"
**Headline:** "Great partnerships start with a *single conversation.*"
**Description:** "Whether you're a farmer, distributor, investor, or retailer ready to stock African-made — our team is ready to build the next step with you."

### Contact Details (🔴 INCONSISTENT — pick one set)

| Field | en.json (cta) | Footer.tsx |
|---|---|---|
| Email | hello@acresxmanna.com 🔴 | hello@cresxmanna.com ✅ |
| Phone | +233 20 811 2200 🔴 | +233 20 000 0000 ✅ |
| HQ | Tema Industrial Area, Greater Accra, Ghana | Accra, Ghana |

> **ACTION:** Reconcile to one canonical email, phone, and address.

### Quick Inquiry Form
- **Eyebrow:** "Quick Inquiry"
- **Headline:** "Tell us what you need — *we'll reply in 48h.*"
- **Placeholders:** Full name · you@email.com · Company / Cooperative / Farm (optional)
- **Select options:** I'm reaching out as a... · Consumer · Farmer / Supplier · Distributor / Retailer · Business Partner · Investor · Press · Job Seeker
- **Message:** "A few sentences about what you need..."
- **Submit:** "Send Inquiry"
- **Alt CTA:** "Full Contact Page"

### Trust Badges
- ✉ 48h response time
- 🔒 Secure, confidential process
- 🌾 Farmers-first sourcing
- 🌏 Global shipping + logistics

---

## 12. FOOTER

**Logo:** Cresx Manna (concept2-horizontal SVG)
**Tagline:** "Turning Africa's agricultural richness into great food for local communities and global tables alike."

**Navigate:** Home · About · Products · What We Do · Impact · Contact

**Products list:** Grains & Flours · Cocoa & Chocolate · Beverages & Nectars · Shea & Natural Oils · Meal Kits & Ready Meals · "View full catalog →"

**Stay Connected:**
- 📍 Accra, Ghana
- ✉ hello@cresxmanna.com
- 📞 +233 20 000 0000

**Newsletter:**
- Label: "Newsletter"
- Description: "Get updates on harvests, products & impact stories."
- Placeholder: "you@email.com"
- Button: "Subscribe"

**Socials (all href="#" 🟡):** Instagram · LinkedIn · Facebook · X / Twitter · YouTube

**Copyright:** "© {year} Cresx Manna. All rights reserved." (hardcoded, overrides en.json)
**Legal links:** Privacy · Terms · Cookies (all href="#" 🟡)

---

## 13. INDIVIDUAL PAGES (thin — reuse home content)

| Page | Headline source |
|---|---|
| /about | Uses about.pillarsHeadline + originParagraph1/2 |
| /what-we-do | Uses farmToFood headline + description |
| /products | Uses products headline + shelfHeadline, renders full PRODUCTS grid |
| /impact | Uses impact headline + description |
| /contact | Uses cta headline + description + form |

---

## 14. SUMMARY OF REQUIRED DECISIONS

### 🔴 CRITICAL (must fix before launch)
1. **Brand name:** Replace every "Acres X Manna" → "Cresx Manna" across en.json, layout.tsx, constants.ts, and hardcoded strings in StakeholderCube, GlobalAmbitionSection, FinalCTASection, Hero.
2. **Domain:** Confirm `acresxmanna.com` vs `cresxmanna.com` (constants.ts + layout).
3. **Contact details:** Reconcile email (acresxmanna.com vs cresxmanna.com), phone (+233 20 811 2200 vs +233 20 000 0000), and address (Tema Industrial Area vs Accra, Ghana).

### ⚠️ VERIFY (specific claims that may be fabricated)
4. All numeric stats: 10,000+ farmers, 85 communities, 36+ products, 24+ markets, 420+ jobs, 15,000 t/yr capacity, 38% exports, 40+ 3-yr target.
5. Founded year (2021), countries count (5).
6. Founder name "Nana Kwame Asante" — real person?
7. Testimonial names: Ama Kyerewaa, Osei & Sons Cooperative, Nana Afia — real or fabricated?
8. Product origins and cultural notes (Volta Basin, Sefwi Wiawso, Kintampo Belt, Tamale & Dagbon, etc.).
9. Certifications claimed: HACCP, ISO 22000, Ghana FDA, EU, USFDA, ECOWAS, GSA.
10. Facility location: "Tema manufacturing lines" / "near Tema, Ghana".
11. Stakeholder mini-stats (6 product lines, 10K+ farmers, 12+ countries, 36+ partners, 24+ years horizon, 420+ open roles).

### 🟡 PLACEHOLDERS
12. Social media links all `#`.
13. Privacy / Terms / Cookies links all `#`.
14. ImpactSection fallback STORIES array has "[TBC real quote]" (not rendered but should be cleaned).
15. Products empty state: "real catalog coming soon."

---

*Generated for your approval. Mark each item APPROVE / REVISE / REMOVE and return.*
