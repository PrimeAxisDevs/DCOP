# Green Racks SEO Research — July 2026

Deep research on green-racks.com.au search visibility and the Perth/WA hosting
search landscape. Site itself not crawlable from this environment (network
policy); findings based on SERP analysis and industry sources.

## Finding 1 — CRITICAL: the site is not indexed at all

An exact-phrase search for "green-racks.com.au" returns **zero results** —
Google doesn't know the site exists. Every other SEO task is worthless until
this is fixed. Most likely causes for a new WordPress site, in order:

1. **WordPress "Discourage search engines" is ticked** (Settings → Reading →
   Search Engine Visibility). Extremely common on new builds — devs tick it
   during development and forget to untick at launch. This writes a site-wide
   noindex.
2. Site never registered with Google Search Console; no sitemap submitted; no
   inbound links, so Googlebot has never discovered it.
3. robots.txt blocking crawlers, or a security/maintenance plugin serving
   noindex headers.

Fix sequence (per Google's own guidance): untick the visibility flag → verify
the site in Google Search Console → submit XML sitemap → use URL Inspection →
"Request Indexing" on the homepage and each service page. Expect ~1 week for
initial indexation.

## Finding 2 — Brand collision: "Green Racks" + "Osborne Park" = roof racks

The SERP for the brand name + suburb is wall-to-wall **roof-rack retailers**
(Roof Racks Galore has a physical superstore on Scarborough Beach Rd, Osborne
Park; Rhino-Rack, Prorack, Rola stockists all rank). Implications:

- Branded discovery searches ("green racks perth") will surface competitors
  for a different product until entity signals are strong.
- Countermeasures: always co-brand in titles as "Green Racks — Web Hosting &
  Data Centre" (never bare "Green Racks"); Organization/LocalBusiness schema
  with `@type` reflecting hosting/data-centre; Google Business Profile in the
  right categories; LinkedIn company page; consistent NAP citations that all
  say web hosting; earn the knowledge-panel disambiguation over time.

## Finding 3 — Competitive landscape by query

| Query | Who ranks | Notes for Green Racks |
|---|---|---|
| web hosting Perth | Listicles (Avenue Perth, GoodFirms, ProductReview WA) + locals: Perth Web Hosting, Web in a Box, Dilate, Perth Digital Edge | Locals win on "local support, AWST hours, Perth servers" messaging — same angle as ours. Get onto the listicles/review sites. |
| colocation Perth | Directories first (DataCenterMap: "25 facilities/10 operators", Baxtel, Datacenters.com), then NEXTDC, DC West, Equinix, CMTG, HostAway, DCL Balcatta | Directory listings are free/cheap and rank ABOVE most providers — getting listed on DataCenterMap/Baxtel/Datacenters.com is high-leverage. DC West markets itself as "Perth's newest"; Balcatta/Malaga/Osborne Park industrial-belt angle is credible. |
| dedicated servers Perth | Zen Hosting (Perth, Dell hardware, Tier III, data sovereignty), Hostrunway, GoDedicated, national players (Micron21, Intergrid, Servers Australia) | Zen Hosting is the closest comp — they rank with a dedicated "Dedicated Servers Perth" page + local support + Dell hardware messaging. We need an equivalent page per service. |
| GPU server hosting Australia | Servers Australia (L4→H200), UmartAI, OVHcloud AU, global clouds (Vast, Runpod) | Nobody visibly targets budget/entry GPU hosting. "Tesla P40 server Australia", "affordable GPU server Perth" are near-zero-competition long-tails matching our $747/mo entry point. |
| data sovereignty hosting | Micron21, Cloud Servers Australia, GoDedicated all lead with Australian-owned/APP-compliance messaging | "Data sovereignty WA" / "hosted in Western Australia" is an under-served state-level variant — mining/government/legal verticals care. |

## Finding 4 — Keyword targets (realistic for a new small site)

**Primary (page-level targets, commercial intent):**
- managed wordpress hosting perth · web hosting perth
- colocation perth · server colocation perth · 1U colocation perth
- dedicated server perth · managed servers perth
- gpu server hosting australia · tesla p40 server
- managed colocation perth · remote hands perth

**Long-tail / low competition (blog + FAQ targets):**
- wordpress hosting osborne park / for perth small business
- perth data centre with 4 hour sla · colocation near malaga/balcatta/osborne park
- data sovereignty western australia hosting · APP-compliant hosting WA
- low latency hosting perth (sub-10ms angle) · perth vs sydney hosting latency
- cheap gpu server for ai australia · p40 vs cloud gpu cost
- server rack space perth price · what does colocation cost in perth

**Brand-defensive:** green racks hosting · green racks data centre ·
green racks osborne park (must outrank roof-rack results for these).

## Finding 5 — Local SEO priorities (Australia, 2026)

- **Google Business Profile ≈ 32% of local-pack ranking weight** — the single
  biggest lever. Categories: "Internet hosting company" primary; "Data
  center", "Computer support and services" secondary. Needs real photos
  (racks, facility), services list, Q&A seeded, weekly posts.
- **Citations/NAP consistency** across the standard AU stack: Yellow Pages,
  True Local, Localsearch, StartLocal, Yelp AU, Word of Mouth + **niche
  stack**: DataCenterMap, Baxtel, Datacenters.com, HostAdvice, ProductReview.
- **LinkedIn company page** — trusted entity source for B2B, feeds AI-search
  entity graphs (SGE/Copilot/Perplexity pull from structured business data).
- **Reviews**: ProductReview.com.au has a dedicated "WA web hosting" category
  page that ranks — early reviews there and on GBP compound.

## Finding 6 — Technical/on-page baseline (2026)

- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1. Usual WP culprits:
  oversized hero images, render-blocking assets, slow TTFB. (A hosting company
  with bad CWV is self-disqualifying — this doubles as product proof; publish
  the scores.)
- Schema: LocalBusiness (+ Organization), Service per service page, Product
  with Offer for priced plans, FAQPage on FAQ sections. Author entities on
  blog posts for E-E-A-T.
- One XML sitemap via Rank Math or Yoast (free tiers fine); GSC monitored
  monthly.
- E-E-A-T for an infrastructure provider: real street address, ABN in footer,
  photos of actual hardware, named humans on About page, SLA commitments
  visible (already added), abuse contact — signals a real operator vs. a
  reseller brochure.

## Sources

- ProductReview WA hosting category; Avenue Perth / GoodFirms Perth hosting lists
- DataCenterMap Perth; Baxtel Perth; Datacenters.com Perth; Equinix PE3; DC West; NEXTDC
- Micron21, Intergrid, Cloud Servers Australia, GoDedicated, Zen Hosting, Hostrunway (data-sovereignty/dedicated positioning)
- Servers Australia GPU range; UmartAI; OVHcloud AU GPU
- Birdeye Local SEO Australia 2026; SGD/HiAgency AU directory guides; TrustedSources GBP weighting
- Google Search Console indexing documentation; Onely crawled/discovered-not-indexed guides
- Technical SEO 2026 checklists (Page One Power schema edition, ITD Growth Labs CWV/INP)
