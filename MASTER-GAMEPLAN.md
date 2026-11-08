# walkintubsarizona.com · MASTER GAMEPLAN
Last updated 2026-11-08 (overnight aging-network push). Network plan: Desktop\02 AGING SAFELY BATHS\07 Aging Safely Website Network\MASTER GAMEPLAN.md. Rules: C:\Users\zachw\aging-sweep\notes\RULES.md.

## Lane
Arizona: cities, ALTCS/VA funding, permits, heat, roll-in showers.

Every page here supports agingsafelybaths.com (quotes, installs) and never targets its head terms (walk in tubs, walk in tub cost, handicap showers, roll in showers, Medicaid/grants head terms). Max 2 followed network links per page; other network links nofollow; one nofollow Eye To Ad credit.

## Business facts
Aging Safely Baths & More, LLC. 1-888-779-2284, sales@agingsafelybaths.com. BBB A+ since 2012. Published prices only (RULES.md): walk-in tub about $15,500 installed after the $2,000 promo, $15,250 veterans, roll-in showers $13,500 to $17,000, wide/transfer/bariatric from about $19,000.

## Targets (one page owns one term)
- walk in tubs arizona
- walk in tubs phoenix
- altcs home modification

## Competitors (live check 2026-11-08; search results, not verified rank)
- consumeraffairs.com/arizona/phoenix: flags undersized water heaters
- contractorplus.app city pages: $0.00 placeholder totals
- bathplanet / statewide remodeling dealer pages

**How we beat them:** Dated sourced price table, AHCCCS specifics, approval timeline, water-heater sizing for Arizona homes.

## Done tonight (2026-11-08)
- Quote forms now post to the company lead server (clients.eyetoad.com/lead/send.php, saves to disk first, then emails sales) through /lead-send.js, with the old sender (FormSubmit or EmailJS) as automatic fallback. Pilot verified in a live browser on walkintubsflorida.com.
- GA4 tag (property per site, events generate_lead, phone_click, estimator_use) confirmed on every indexable page; Search Console verification file googleadb17462a109b3ca.html present.
- Lighthouse (home page, live, 2026-11-08 early morning) recorded before and after in _overnight-reports/aging-sites-report.md.
- GA4 was silently blocked by the page CSP since Oct 25: snippet moved to /assets/ga4.js and Google Analytics hosts allowed. Data starts tonight.
- New /altcs-home-modification-approval-timeline/.
- CSP connect-src/form-action now allow the lead server.

## Next
1. Will my Arizona water heater fill a walk-in tub (needs manufacturer gallon specs)
1. Refresh dates on the 44 pages; keep the CSP
1. Best-practices score 92: check the CSP/console warnings Lighthouse flagged

## Morning to-dos (network)
- Add the six EmailJS satellites (seniorwalkintub, utahwalkintubs, walkintubdenver, walkintubscalifornia, walkintubschicago, walkintubstexas) to lead-config.php on clients.eyetoad.com so they stop falling back to EmailJS.
- Confirm where aging-site leads from the lead server are emailed (sales@agingsafelybaths.com?) and that the mail lands; fix eyetoad.com SPF/DMARC.
- Request indexing in Search Console for every new or changed URL listed in the report.
- AdSense: not added to these lead-gen pages on purpose (ads next to a quote form cost leads). Decide if any info-only page should carry it.

## Measurement
GA4 property per site (account 45765285), key events generate_lead and phone_click. Search Console: bare domain property, sitemap.xml submitted. Check queries and positions in GA4's Search Console report at the start of every project.
