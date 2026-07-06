# Nemo (claw) prompt — Green Racks SEO build-out

Copy-paste everything between the lines into Nemo. Companion research:
`docs/seo/seo-research-2026-07.md`. Items Nemo cannot do (Google Business
Profile, directories, reviews) are in the James checklist in that report.

---

You are working on green-racks.com.au — WordPress site for Green Racks Pty Ltd
(ABN 23 696 631 071), a web hosting and data centre company in Osborne Park,
Perth, WA. Services: Managed WordPress Hosting, Colocation, Managed
Colocation, Dedicated Servers, Managed Servers, AI/GPU Infrastructure.
Differentiators: Perth-local Dell PowerEdge hardware, sub-10ms latency in WA,
4-hour support response, 99.95% power / 99.9% network availability, "Real
People, not call centres", data kept in Western Australia.

Execute the following SEO tasks IN ORDER. Rules that apply to everything:
never keyword-stuff; write for humans; do not invent testimonials, reviews,
statistics, or certifications; do not alter prices, the SLA note lines, or the
Contact Form 7 / ActiveCampaign integration; keep edits consistent with the
site's existing tone (concrete, factual, no hype).

## PHASE 1 — Indexing emergency (do first, this is why the site is invisible)

1. Go to Settings → Reading. If "Discourage search engines from indexing this
   site" is checked, UNCHECK it and save. Report whether it was checked.
2. Check robots.txt (site.com/robots.txt): it must not contain
   "Disallow: /" for User-agent: *. Fix if it does.
3. Check every page for a noindex robots meta tag or X-Robots-Tag header
   (including ones injected by security/maintenance/coming-soon plugins —
   deactivate any coming-soon or maintenance-mode plugin). Report anything
   that was blocking.
4. Install and activate the free Rank Math SEO plugin (skip if Yoast is
   already active — do not run both). Run its setup wizard: business type
   "Local Business", enable XML sitemap. Confirm the sitemap renders at
   /sitemap_index.xml.
5. Ensure the site enforces HTTPS and that http:// and non-www variants 301
   to https://www.green-racks.com.au.
6. Ensure permalinks are "Post name" (Settings → Permalinks).
7. Stop and report: James must then verify the site in Google Search Console
   (via the Rank Math verification field or DNS), submit /sitemap_index.xml,
   and click Request Indexing on the homepage + each service page. Prepare a
   list of the exact URLs to request-index.

## PHASE 2 — Titles, metas, headings (entity disambiguation is critical:
"Green Racks" collides with roof-rack shops in Osborne Park, so every title
pairs the brand with hosting/data-centre words — never the bare brand name)

Set via Rank Math per page (adjust URLs to actual slugs):

- Homepage — Title: "Green Racks — Web Hosting & Data Centre in Perth, WA".
  Meta: "Perth-based web hosting, colocation and dedicated servers on Dell
  PowerEdge hardware in Osborne Park. Sub-10ms WA latency, 4-hour support
  response. Real people, not call centres." H1: "Perth Web Hosting & Data
  Centre — Real People, Not Call Centres".
- Managed WordPress Hosting — Title: "Managed WordPress Hosting Perth | From
  $29/mo | Green Racks". H1: "Managed WordPress Hosting in Perth". Meta
  mentions: auto-updates with rollback, Wordfence firewall, daily backups,
  Perth servers.
- Colocation — Title: "Server Colocation Perth | 1U to Full Rack | Green
  Racks". H1: "Server Colocation in Perth, Western Australia". Meta mentions:
  Osborne Park facility, dual-feed power, from $114/mo, 24/7 remote hands.
- Dedicated Servers — Title: "Dedicated Servers Perth | Dell PowerEdge |
  Green Racks". H1: "Dedicated Servers in Perth".
- Managed Servers — Title: "Managed Servers Perth | Fully Managed Dedicated
  Hosting | Green Racks". H1: "Managed Servers in Perth".
- Managed Colocation — Title: "Managed Colocation Perth | NBD & 4-Hour SLA |
  Green Racks". H1: "Managed Colocation in Perth".
- AI/GPU page — Title: "GPU Server Hosting Australia | Tesla P40 from
  $747/mo | Green Racks". H1: "GPU & AI Server Hosting in Australia". Meta
  mentions: dedicated GPU nodes with root access, hosted in Perth, monthly
  pricing with no egress fees.
- Contact — Title: "Contact Green Racks | Perth Web Hosting Support". Include
  full street address and AWST business hours on the page.

Every page: exactly one H1; logical H2/H3s; unique meta description ≤160
chars; no clickbait.

## PHASE 3 — Schema markup

1. In Rank Math Local SEO settings (or a Custom HTML block in the footer if
   unavailable), add LocalBusiness JSON-LD: name "Green Racks", legalName
   "Green Racks Pty Ltd", @type ["LocalBusiness","Organization"], description
   mentioning web hosting and data centre, address (Osborne Park, WA, AU —
   use the real street address from the Contact page), telephone, url,
   email, areaServed "Perth, Western Australia", sameAs pointing to the
   LinkedIn company page once it exists.
2. On each service page add Service schema (serviceType, provider → the
   LocalBusiness, areaServed) and, for pages with fixed plan pricing, Product
   + Offer schema per plan (name, price in AUD, priceCurrency "AUD",
   url). Skip Offer schema for "from" prices on custom plans.
3. Wherever Phase 4 adds an FAQ section, mark it up with FAQPage schema
   (Rank Math FAQ block does this automatically — use it).

## PHASE 4 — Content enhancements (per page, light touch)

1. Add a 3-5 question FAQ section (Rank Math FAQ block) at the bottom of each
   service page answering real buyer questions, e.g.: Colocation — "How much
   does colocation cost in Perth?", "Can I access my server myself?", "What
   power redundancy do you provide?"; WordPress — "Do you migrate my site for
   free?", "Where are your servers located?"; GPU — "What can I run on a
   Tesla P40 server?", "How does this compare with cloud GPU pricing?".
   Answer factually from existing site content and pricing only.
2. Add one short paragraph to each service page naming the location
   naturally (Osborne Park facility, Perth metro, Western Australia) and one
   sentence on data sovereignty (data stays in WA, Australian Privacy
   Principles). Once per page — no suburb lists, no repetition.
3. Create an About page if missing: who runs Green Racks, the Osborne Park
   facility, the hardware (Dell PowerEdge), the support philosophy, ABN
   23 696 631 071 in the footer site-wide. Real facility/hardware photos
   when James supplies them — leave placeholders, don't use stock images.
4. Create a blog (empty is fine) with categories: Hosting Guides, Perth Tech,
   Product Updates. Draft the first post: "Perth vs Sydney hosting: what
   sub-10ms local latency actually means for WA businesses" (~800 words,
   factual, no competitor bashing), save as DRAFT for James's review.
5. Internal linking: homepage links to every service page with descriptive
   anchors ("server colocation in Perth", not "click here"); each service
   page links to Contact and to one related service; footer lists all
   services.

## PHASE 5 — Performance (Core Web Vitals)

1. Install a caching plugin (LiteSpeed Cache if the server is LiteSpeed,
   otherwise W3 Total Cache or WP Super Cache — free tiers). Enable page
   caching and browser caching.
2. Compress and resize images: hero images ≤ 200KB, WebP where supported;
   set explicit width/height attributes (prevents CLS); lazy-load images
   below the fold but NOT the LCP hero image.
3. Remove unused plugins and themes (deactivated WPForms can be deleted once
   James confirms the refund situation is resolved).
4. Target: LCP < 2.5s, INP < 200ms, CLS < 0.1. Test with PageSpeed Insights
   after changes and report before/after scores for homepage + one service
   page.

## PHASE 6 — Report back

Produce a summary: what was blocking indexing in Phase 1; every
title/meta/H1 set; schema added per page; FAQs added; performance
before/after; the exact URL list for James to request indexing in GSC; and
anything you could not complete with the reason.

---
