# Dynamic Landing Page — Implementation Plan

**Goal:** Replace all static/hardcoded content on the landing page with data fetched from Payload CMS. Use Playwright to seed that data via the admin UI, then verify it renders correctly on the frontend.

**Admin credentials:** karkisushanka719@gmail.com / sushanka@123

---

## Current State Assessment

The landing page (`src/app/(frontend)/page.tsx`) already calls `getPayload()` and fetches from collections/globals, **but** all components currently fall back to hardcoded constants from `src/app/(frontend)/constants/content.ts` when CMS data is absent. The collections and globals exist in Payload but have **no seed data**.

### What is static today

| Section | Component | Data Source Today |
|---------|-----------|-------------------|
| Nav / branding | `Nav.tsx` | Hardcoded firm name |
| Hero headline / subtext | `Hero.tsx` | `constants/content.ts` |
| Trust stats (years, cases, etc.) | `Statistics.tsx` | `constants/content.ts` |
| Practice areas | `PracticeAreas.tsx` | `constants/content.ts` |
| Why choose us | `WhyUs.tsx` | `constants/content.ts` |
| Attorneys | `Attorneys.tsx` | `constants/content.ts` |
| Case results | `CaseResults.tsx` | `constants/content.ts` |
| Testimonials carousel | `Testimonials.tsx` | `constants/content.ts` |
| Process steps | `Process.tsx` | `constants/content.ts` |
| Insights / blog | `Insights.tsx` | `constants/content.ts` |
| Awards | `Awards.tsx` | `constants/content.ts` |
| CTA band | `CtaBand.tsx` | `constants/content.ts` |
| Contact info | `Contact.tsx` | `constants/content.ts` |
| Footer | `Footer.tsx` | Payload `footer` global (partially wired) |
| Header nav | `Nav.tsx` | Payload `header` global (partially wired) |

---

## Phase 1 — Playwright: Seed Admin Data

**Goal:** Write Playwright scripts that log into the Payload admin panel and create all required CMS content.

### 1.1 — Global: Site Settings
Fields to fill: `heroEyebrow`, `heroHeadline`, `heroLead`, trust stats (years, cases, attorneys, satisfaction, recovered), contact info (address, phone, email), CTA text, SEO meta.

### 1.2 — Global: Process Steps
Fields to fill: `sectionHeadline`, 5 steps each with `number`, `title`, `description`.

### 1.3 — Global: Why Choose Us
Fields to fill: `sectionEyebrow`, `sectionHeadline`, `partnerQuote`, 6 items each with `icon`, `title`, `description`.

### 1.4 — Collection: Practice Areas (8 items)
Fields per item: `title`, `shortDescription`, `fullDescription`, `icon`, `slug`, `order`.

### 1.5 — Collection: Attorneys (3 featured)
Fields per item: `name`, `role`, `specialty`, `yearsExperience`, `bio`, `featured: true`, `order`.

### 1.6 — Collection: Case Results (3 featured)
Fields per item: `headline`, `category`, `description`, `meta`, `featured: true`, `order`.

### 1.7 — Collection: Testimonials (3 featured)
Fields per item: `quote`, `clientName`, `clientTitle`, `avatarInitial`, `featured: true`.

### 1.8 — Collection: Insights (5 items)
Fields per item: `title`, `slug`, `publishedDate`, `readTime`, `excerpt`, `category`, `author`, `featured`.

### 1.9 — Collection: Awards (5 items)
Fields per item: `organization`, `distinction`, `icon`, `order`.

### 1.10 — Global: Header
Fields: nav links, branding.

### 1.11 — Global: Footer
Fields: 5 column structure with links, legal line.

**Deliverable:** `tests/e2e/seed-admin-data.spec.ts` — a single runnable Playwright spec that fills all of the above via the admin UI.

---

## Phase 2 — Wire Components to CMS Data

**Goal:** Update each frontend component to accept typed props from Payload and remove reliance on `constants/content.ts`.

### 2.1 — `page.tsx` (Home page data fetcher)
- Verify all 10 fetch calls return data (after Phase 1 seed)
- Pass fetched data as props to every child component
- Add error boundaries / graceful fallbacks

### 2.2 — `Hero.tsx`
- Accept `SiteSettings` props: `heroEyebrow`, `heroHeadline`, `heroLead`
- Accept trust stats as props (passed through from `Statistics.tsx` data)
- Remove import of `constants/content.ts`

### 2.3 — `Statistics.tsx`
- Accept trust stat props: `years`, `cases`, `attorneys`, `satisfaction`, `recovered`
- Source from `siteSettings` global

### 2.4 — `PracticeAreas.tsx`
- Accept `practiceAreas[]` prop from Payload collection
- Map Payload fields to component card structure
- Remove hardcoded 8-item array

### 2.5 — `WhyUs.tsx`
- Accept `whyChooseUs` global prop
- Map `items[]`, `sectionHeadline`, `partnerQuote`
- Remove hardcoded cards

### 2.6 — `Attorneys.tsx`
- Accept `attorneys[]` prop (featured, sorted by order)
- Map `name`, `role`, `specialty`, `yearsExperience`, `bio`, photo URL
- Remove hardcoded 3-attorney array

### 2.7 — `CaseResults.tsx`
- Accept `caseResults[]` prop (featured, sorted by order)
- Map `headline`, `category`, `description`, `meta`
- Remove hardcoded data

### 2.8 — `Testimonials.tsx`
- Accept `testimonials[]` prop (featured)
- Map `quote`, `clientName`, `clientTitle`, `avatarInitial`
- Remove hardcoded carousel data

### 2.9 — `Process.tsx`
- Accept `processSteps` global prop
- Map `sectionHeadline`, `steps[]`
- Remove hardcoded 5-step array

### 2.10 — `Insights.tsx`
- Accept `insights[]` prop (latest 5 by `publishedDate`)
- Map `title`, `excerpt`, `readTime`, `publishedDate`, `slug`, `category`
- Remove hardcoded articles

### 2.11 — `Awards.tsx`
- Accept `awards[]` prop (sorted by order)
- Map `organization`, `distinction`, `icon`
- Remove hardcoded award list

### 2.12 — `CtaBand.tsx`
- Accept CTA text / button label from `siteSettings` global
- Remove hardcoded strings

### 2.13 — `Contact.tsx`
- Accept contact info from `siteSettings` global: `address`, `phone`, `email`
- Remove hardcoded contact details

### 2.14 — `Nav.tsx`
- Ensure `header` global data (nav links, firm name) flows in from `page.tsx`
- Remove any remaining hardcoded strings

### 2.15 — `Footer.tsx`
- Ensure `footer` global data (columns, links, legal line) is fully wired
- Remove any remaining hardcoded strings

**Deliverable:** All 15 components accept Payload-typed props. `constants/content.ts` is no longer imported by any component.

---

## Phase 3 — Playwright: Frontend Verification

**Goal:** Write Playwright tests that verify seeded CMS data appears correctly on the live frontend.

### 3.1 — Hero section
- Check eyebrow text, headline, lead paragraph match what was seeded

### 3.2 — Statistics strip
- Check each of the 5 trust stat values

### 3.3 — Practice Areas
- Check all 8 practice area titles appear in the list

### 3.4 — Attorneys
- Check 3 attorney names, roles, specialties render

### 3.5 — Case Results
- Check 3 case result headlines and categories

### 3.6 — Testimonials
- Check first testimonial quote and client name

### 3.7 — Process Steps
- Check all 5 step titles appear

### 3.8 — Insights
- Check 5 insight titles and read times

### 3.9 — Awards
- Check all 5 award organization names

### 3.10 — Contact section
- Check phone, email, address match seeded data

### 3.11 — Nav & Footer
- Check nav links and footer columns match seeded globals

**Deliverable:** `tests/e2e/landing-page-dynamic.spec.ts` — full frontend verification suite.

---

## Phase 4 — Cleanup & Polish

### 4.1 — Remove `constants/content.ts` (or keep as type reference only)
- Audit all imports; delete file or strip all runtime values

### 4.2 — TypeScript types
- Update `src/app/(frontend)/types/payload.ts` to match final Payload-generated types
- Run `pnpm generate:types` and fix any drift

### 4.3 — Loading / empty states
- Add skeleton placeholders or graceful "no content" messages for sections with zero CMS items

### 4.4 — Image handling
- Wire `Media` relationship fields (attorney photos, award icons) to Next.js `<Image>` with proper `alt` text

### 4.5 — Revalidation strategy
- Set `revalidate` tag on all Payload fetches so ISR purges correctly on CMS publish

### 4.6 — Final test run
- `pnpm test:unit` — all unit tests green
- `pnpm test:e2e` — seed + verify specs pass end-to-end

**Deliverable:** Clean codebase with no hardcoded copy, full ISR wiring, and a green test suite.

---

## Execution Order

```
Phase 1  →  Phase 2  →  Phase 3  →  Phase 4
  seed         wire        verify      clean
```

Phases 1 and 2 can be worked in parallel once data shapes are confirmed (Phase 1 confirms the field names that Phase 2 maps to).

---

## Files to Create / Modify

### New files
- `tests/e2e/seed-admin-data.spec.ts`
- `tests/e2e/landing-page-dynamic.spec.ts`

### Modified files
- `src/app/(frontend)/page.tsx`
- `src/app/(frontend)/components/Hero.tsx`
- `src/app/(frontend)/components/Statistics.tsx`
- `src/app/(frontend)/components/PracticeAreas.tsx`
- `src/app/(frontend)/components/WhyUs.tsx`
- `src/app/(frontend)/components/Attorneys.tsx`
- `src/app/(frontend)/components/CaseResults.tsx`
- `src/app/(frontend)/components/Testimonials.tsx`
- `src/app/(frontend)/components/Process.tsx`
- `src/app/(frontend)/components/Insights.tsx`
- `src/app/(frontend)/components/Awards.tsx`
- `src/app/(frontend)/components/CtaBand.tsx`
- `src/app/(frontend)/components/Contact.tsx`
- `src/app/(frontend)/components/Nav.tsx`
- `src/app/(frontend)/components/Footer.tsx`
- `src/app/(frontend)/types/payload.ts`

### Deleted / emptied
- `src/app/(frontend)/constants/content.ts` (runtime values stripped)
