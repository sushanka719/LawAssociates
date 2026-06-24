/**
 * Phase 3 — Verify that every piece of CMS-seeded data renders correctly on
 * the live frontend landing page.
 *
 * Run:  pnpm exec playwright test landing-page-dynamic --timeout=30000
 *
 * Prerequisites:
 *   1. Dev server running at http://localhost:3000
 *   2. Phase 1 seed script already executed (seed-admin-data.spec.ts)
 */

import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:3000'

test.describe('Landing Page — Dynamic CMS Data', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
    await page.waitForLoadState('networkidle')
  })

  // ── Hero section ────────────────────────────────────────────────────────────

  test.describe('Hero', () => {
    test('renders firm eyebrow from Site Settings', async ({ page }) => {
      await expect(page.getByText('Aurelius Legal Partners · Est. 1998')).toBeVisible()
    })

    test('renders hero headline from Site Settings', async ({ page }) => {
      await expect(
        page.getByText(/strategic counsel for the matters that define your future/i),
      ).toBeVisible()
    })

    test('renders hero lead text from Site Settings', async ({ page }) => {
      await expect(page.getByText(/clear-eyed counsel backed by 25 years/i)).toBeVisible()
    })

    test('renders primary CTA button', async ({ page }) => {
      const cta = page.getByRole('link', { name: /schedule a consultation/i }).first()
      await expect(cta).toBeVisible()
      await expect(cta).toHaveAttribute('href', '#contact')
    })
  })

  // ── Statistics strip ────────────────────────────────────────────────────────

  test.describe('Statistics', () => {
    test('renders years stat from Site Settings', async ({ page }) => {
      await expect(page.getByText('25+')).toBeVisible()
    })

    test('renders cases stat from Site Settings', async ({ page }) => {
      await expect(page.getByText('1,200+')).toBeVisible()
    })

    test('renders attorneys stat from Site Settings', async ({ page }) => {
      await expect(page.getByText('18')).toBeVisible()
    })

    test('renders satisfaction stat from Site Settings', async ({ page }) => {
      // 98% appears in both hero plate and trust strip
      await expect(page.getByText('98%').first()).toBeVisible()
    })

    test('renders recovered stat from Site Settings', async ({ page }) => {
      await expect(page.getByText('$2.4B')).toBeVisible()
    })
  })

  // ── Practice Areas ──────────────────────────────────────────────────────────

  test.describe('Practice Areas', () => {
    const areas = [
      'Corporate & M&A',
      'Commercial Litigation',
      'Family Law',
      'Estate Planning & Probate',
      'Real Estate',
      'Employment & Labor',
      'Intellectual Property',
      'Regulatory & Compliance',
    ]

    test('renders all 8 practice area titles', async ({ page }) => {
      for (const area of areas) {
        await expect(page.getByText(area).first()).toBeVisible()
      }
    })

    test('renders practice area short descriptions', async ({ page }) => {
      await expect(
        page.getByText(/strategic counsel on mergers, acquisitions/i),
      ).toBeVisible()
      await expect(
        page.getByText(/comprehensive estate plans, trusts/i),
      ).toBeVisible()
    })

    test('renders index numbers 01–08', async ({ page }) => {
      await expect(page.getByText('01').first()).toBeVisible()
      await expect(page.getByText('08').first()).toBeVisible()
    })
  })

  // ── Why Choose Us ───────────────────────────────────────────────────────────

  test.describe('Why Choose Us', () => {
    test('renders section eyebrow from global', async ({ page }) => {
      await expect(page.getByText('Why Aurelius').first()).toBeVisible()
    })

    test('renders section headline from global', async ({ page }) => {
      await expect(
        page.getByText(/a standard of representation that institutions/i),
      ).toBeVisible()
    })

    test('renders all 6 value-prop item titles', async ({ page }) => {
      const titles = [
        'Proven Courtroom Record',
        'Precision Strategy',
        'Absolute Confidentiality',
        'Senior-Led Teams',
        'National Reach',
        'Responsive & Accessible',
      ]
      for (const title of titles) {
        await expect(page.getByText(title)).toBeVisible()
      }
    })

    test('renders partner quote from global', async ({ page }) => {
      await expect(
        page.getByText(/we do not just advise — we stand beside you/i),
      ).toBeVisible()
    })
  })

  // ── Attorneys ───────────────────────────────────────────────────────────────

  test.describe('Attorneys', () => {
    test('renders James Aurelius', async ({ page }) => {
      await expect(page.getByText('James Aurelius')).toBeVisible()
      await expect(page.getByText('Founding Partner')).toBeVisible()
    })

    test('renders Catherine Voss', async ({ page }) => {
      await expect(page.getByText('Catherine Voss')).toBeVisible()
      await expect(page.getByText('Senior Partner, Litigation')).toBeVisible()
    })

    test('renders Marcus Chen', async ({ page }) => {
      await expect(page.getByText('Marcus Chen')).toBeVisible()
      await expect(page.getByText('Partner, Estate & Family')).toBeVisible()
    })

    test('renders years-of-experience badge', async ({ page }) => {
      await expect(page.getByText('28 yrs experience')).toBeVisible()
      await expect(page.getByText('22 yrs experience')).toBeVisible()
      await expect(page.getByText('15 yrs experience')).toBeVisible()
    })
  })

  // ── Case Results ────────────────────────────────────────────────────────────

  test.describe('Case Results', () => {
    test('renders first case result headline', async ({ page }) => {
      await expect(page.getByText('$48M Verdict — Securities Fraud')).toBeVisible()
    })

    test('renders second case result headline', async ({ page }) => {
      await expect(
        page.getByText('$310M M&A Transaction — Cross-Border Tech Acquisition'),
      ).toBeVisible()
    })

    test('renders third case result headline', async ({ page }) => {
      await expect(
        page.getByText('Custody & Asset Settlement — $75M Estate'),
      ).toBeVisible()
    })

    test('renders case categories', async ({ page }) => {
      await expect(page.getByText('Commercial Litigation').first()).toBeVisible()
      await expect(page.getByText('Corporate & M&A').first()).toBeVisible()
      await expect(page.getByText('Family Law').first()).toBeVisible()
    })

    test('renders case meta strings', async ({ page }) => {
      await expect(page.getByText(/SDNY · 2023/i)).toBeVisible()
      await expect(page.getByText(/Delaware \/ EU · 2024/i)).toBeVisible()
    })
  })

  // ── Testimonials ────────────────────────────────────────────────────────────

  test.describe('Testimonials', () => {
    test('renders first testimonial quote (visible slide)', async ({ page }) => {
      await expect(
        page.getByText(/aurelius legal did not just solve our legal problem/i),
      ).toBeVisible()
    })

    test('renders first testimonial client name', async ({ page }) => {
      await expect(page.getByText('Robert H.')).toBeVisible()
    })

    test('carousel navigation buttons are present', async ({ page }) => {
      await expect(
        page.getByRole('button', { name: /previous testimonial/i }),
      ).toBeVisible()
      await expect(
        page.getByRole('button', { name: /next testimonial/i }),
      ).toBeVisible()
    })

    test('clicking next advances the carousel', async ({ page }) => {
      const track = page.locator('.tslides')
      await expect(track).toHaveCSS('transform', /matrix/)
      await page.getByRole('button', { name: /next testimonial/i }).click()
      await page.waitForTimeout(300)
      // After clicking next the translate should shift (not 0)
      const transform = await track.evaluate((el) => (el as HTMLElement).style.transform)
      expect(transform).toContain('-100%')
    })
  })

  // ── Process Steps ───────────────────────────────────────────────────────────

  test.describe('Process Steps', () => {
    test('renders section headline from global', async ({ page }) => {
      await expect(
        page.getByText('A clear path from first call to resolution.'),
      ).toBeVisible()
    })

    test('renders all 5 step titles', async ({ page }) => {
      const steps = [
        'Initial Consultation',
        'Case Analysis',
        'Strategy Development',
        'Active Representation',
        'Resolution & Follow-Through',
      ]
      for (const step of steps) {
        await expect(page.getByText(step)).toBeVisible()
      }
    })

    test('renders step descriptions', async ({ page }) => {
      await expect(
        page.getByText(/we listen carefully to your situation in a confidential session/i),
      ).toBeVisible()
      await expect(
        page.getByText(/we see every matter through to a durable outcome/i),
      ).toBeVisible()
    })
  })

  // ── Insights ────────────────────────────────────────────────────────────────

  test.describe('Insights', () => {
    test('renders the featured article title', async ({ page }) => {
      await expect(
        page.getByText(
          'What Every Executive Should Know Before Signing an M&A Letter of Intent',
        ),
      ).toBeVisible()
    })

    test('renders featured article excerpt', async ({ page }) => {
      await expect(
        page.getByText(/the LOI is non-binding — or so most executives assume/i),
      ).toBeVisible()
    })

    test('renders non-featured articles in the list', async ({ page }) => {
      await expect(
        page.getByText('Five Employment Contract Clauses That Can Cost You Millions'),
      ).toBeVisible()
      await expect(
        page.getByText('The Hidden Risks in Cross-Border Data Transfers After Schrems III'),
      ).toBeVisible()
    })

    test('renders article read times', async ({ page }) => {
      await expect(page.getByText(/7 min/i).first()).toBeVisible()
    })
  })

  // ── Awards ──────────────────────────────────────────────────────────────────

  test.describe('Awards', () => {
    test('renders all 5 award organizations', async ({ page }) => {
      const orgs = [
        'Chambers USA',
        'Legal 500',
        'Martindale-Hubbell',
        'Best Lawyers in America',
        'National Law Journal',
      ]
      for (const org of orgs) {
        await expect(page.getByText(org)).toBeVisible()
      }
    })

    test('renders award distinctions', async ({ page }) => {
      await expect(
        page.getByText('Band 1 — Corporate/M&A, New York'),
      ).toBeVisible()
      await expect(
        page.getByText('AV Preeminent Rating — 25 Consecutive Years'),
      ).toBeVisible()
    })
  })

  // ── CTA Band ────────────────────────────────────────────────────────────────

  test.describe('CTA Band', () => {
    test('renders CTA headline from Site Settings', async ({ page }) => {
      await expect(
        page.getByText('Your matter deserves a considered response.'),
      ).toBeVisible()
    })

    test('renders phone number from Site Settings', async ({ page }) => {
      await expect(page.getByText('(212) 555-1840').first()).toBeVisible()
    })
  })

  // ── Contact section ─────────────────────────────────────────────────────────

  test.describe('Contact', () => {
    test('renders phone number from Site Settings', async ({ page }) => {
      // Appears in contact card
      await expect(page.getByText('(212) 555-1840').first()).toBeVisible()
    })

    test('renders email from Site Settings', async ({ page }) => {
      await expect(page.getByText('counsel@aureliuslegal.com')).toBeVisible()
    })

    test('renders address from Site Settings', async ({ page }) => {
      await expect(page.getByText('400 Park Avenue, 28th Floor')).toBeVisible()
      await expect(page.getByText('New York, NY 10022')).toBeVisible()
    })

    test('renders office hours from Site Settings', async ({ page }) => {
      await expect(page.getByText(/Mon–Fri/i).first()).toBeVisible()
    })

    test('contact form fields are present', async ({ page }) => {
      await expect(page.getByLabel(/full name/i)).toBeVisible()
      await expect(page.getByLabel(/email/i).first()).toBeVisible()
      await expect(page.getByLabel(/how can we help/i)).toBeVisible()
    })
  })

  // ── Nav ─────────────────────────────────────────────────────────────────────

  test.describe('Nav', () => {
    test('renders all navigation links', async ({ page }) => {
      const links = ['Practice Areas', 'Attorneys', 'About', 'Case Results', 'Insights', 'Contact']
      for (const label of links) {
        await expect(page.getByRole('link', { name: label }).first()).toBeVisible()
      }
    })

    test('Book Consultation CTA is in the nav', async ({ page }) => {
      await expect(
        page.getByRole('link', { name: /book consultation/i }).first(),
      ).toBeVisible()
    })
  })

  // ── Footer ──────────────────────────────────────────────────────────────────

  test.describe('Footer', () => {
    test('renders copyright line', async ({ page }) => {
      await expect(page.getByText(/aurelius legal partners llp/i)).toBeVisible()
    })

    test('renders legal disclaimer', async ({ page }) => {
      await expect(
        page.getByText(/attorney advertising/i),
      ).toBeVisible()
    })
  })
})
