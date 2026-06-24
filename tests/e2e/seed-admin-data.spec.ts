/**
 * Phase 1 — Seed all CMS content via the Payload admin UI.
 *
 * Run:  pnpm exec playwright test seed-admin-data --headed
 *
 * Order:
 *   1. Login
 *   2. Globals  — Site Settings, Process Steps, Why Choose Us
 *   3. Collections — Categories, Practice Areas, Attorneys, Case Results,
 *                    Testimonials, Insights, Awards
 */

import { test, expect, Page } from '@playwright/test'
import path from 'path'
import fs from 'fs'

// ── Constants ──────────────────────────────────────────────────────────────────

const BASE_URL = 'http://localhost:3000'

const ADMIN_USER = {
  email: 'karkisushanka719@gmail.com',
  password: 'sushanka@123',
}

// Minimal valid 1×1 transparent PNG (used for required upload fields)
const FIXTURE_DIR = path.resolve('tests/fixtures')
const PLACEHOLDER_IMG = path.join(FIXTURE_DIR, 'placeholder.png')

function ensurePlaceholder() {
  fs.mkdirSync(FIXTURE_DIR, { recursive: true })
  if (!fs.existsSync(PLACEHOLDER_IMG)) {
    const png1x1 = Buffer.from(
      '89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c489' +
        '0000000a49444154789c6260000000020001e221bc330000000049454e44ae426082',
      'hex',
    )
    fs.writeFileSync(PLACEHOLDER_IMG, png1x1)
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────────

async function adminLogin(page: Page) {
  await page.goto(`${BASE_URL}/admin/login`)
  await page.fill('#field-email', ADMIN_USER.email)
  await page.fill('#field-password', ADMIN_USER.password)
  await page.click('button[type="submit"]')
  await page.waitForURL(`${BASE_URL}/admin`)
  await expect(page.locator('span[title="Dashboard"]').first()).toBeVisible()
}

/** Click the primary Save button and wait for the save to complete.
 *
 * Payload v3 uses react-hook-form's isDirty — the Save button stays disabled
 * when the loaded form values match the DB (e.g. after a re-run). If disabled,
 * we force a trivial keystroke on the first text input to mark the form dirty.
 */
async function save(page: Page) {
  const saveBtn = page.getByRole('button', { name: 'Save', exact: true })

  if (await saveBtn.isDisabled()) {
    // Force dirty state: focus the first text input, append a space, remove it
    const firstInput = page.locator('input[type="text"]').first()
    await firstInput.focus()
    await firstInput.press('End')
    await page.keyboard.type(' ')
    await page.keyboard.press('Backspace')
    await page.waitForTimeout(400)
  }

  await saveBtn.click()
  await page.waitForTimeout(2000)
}

/** Upload a placeholder image via Payload's media upload drawer.
 *
 * Payload v3 upload fields show a "Create New" button that opens a drawer.
 * Inside the drawer a hidden file input accepts the file, then we save.
 */
async function uploadPlaceholder(page: Page, fieldLabel = 'Photo', imagePath = PLACEHOLDER_IMG) {
  // Click "Create New" on the upload field for the given label
  const uploadField = page.locator('.field-type.upload').filter({ hasText: new RegExp(fieldLabel, 'i') }).first()
  await uploadField.getByRole('button', { name: 'Create New' }).click()

  // Wait for the drawer to open
  await page.waitForSelector('.drawer__content, [class*="drawer"]', { timeout: 10000 })
  await page.waitForTimeout(600)

  // The actual file input inside the drawer (may be hidden — setInputFiles bypasses visibility)
  const fileInput = page.locator('.drawer__content input[type="file"], [class*="drawer"] input[type="file"]').first()
  await fileInput.setInputFiles(imagePath)
  await page.waitForTimeout(1000)

  // Save the media item within the drawer
  const drawerSave = page.locator('.drawer__content').getByRole('button', { name: 'Save', exact: true })
  if (await drawerSave.isVisible()) {
    await drawerSave.click()
    await page.waitForTimeout(1500)
  }

  // Close the drawer if still open
  const closeBtn = page.locator('button[aria-label="Close"], .drawer__header button').first()
  if (await closeBtn.isVisible()) {
    await closeBtn.click()
    await page.waitForTimeout(500)
  }
}

/** Click an array row's "Add …" button. Payload derives the label from the field name.
 *  e.g. steps → "Add Step", items → "Add Item", etc.
 */
async function addArrayRow(page: Page, addBtnText: string | RegExp = /add item/i) {
  await page.getByRole('button', { name: addBtnText }).click()
  await page.waitForTimeout(400)
}

/** Type into a Lexical rich-text editor (contenteditable div) */
async function fillRichText(page: Page, fieldName: string, text: string) {
  const editor = page
    .locator(`[id$="${fieldName}"] .ContentEditable__root, [data-lexical-editor="true"]`)
    .first()
  await editor.click()
  await page.keyboard.type(text)
}

/** Open a relationship picker and pick the first matching option */
async function pickRelationship(page: Page, fieldLabel: string, searchText: string) {
  // Click the relationship field's "Add" / search button
  const field = page.locator('.relationship__wrap', { hasText: new RegExp(fieldLabel, 'i') }).first()
  await field.locator('input').click()
  await page.waitForTimeout(300)
  await field.locator('input').fill(searchText)
  await page.waitForTimeout(600)
  // Pick first result in the dropdown
  const option = page.locator('.rs__option, .relationship-field__option').first()
  await option.click()
  await page.waitForTimeout(300)
}

// ── Test suite ─────────────────────────────────────────────────────────────────

test.describe.configure({ mode: 'serial' })

test.describe('Seed Admin Data', () => {
  let page: Page

  test.beforeAll(async ({ browser }) => {
    ensurePlaceholder()
    const ctx = await browser.newContext()
    page = await ctx.newPage()
    await adminLogin(page)
  })

  // ────────────────────────────────────────────────────────────────────────────
  // GLOBAL — Site Settings
  // ────────────────────────────────────────────────────────────────────────────

  test('fills Site Settings global', async () => {
    await page.goto(`${BASE_URL}/admin/globals/site-settings`)
    await page.waitForLoadState('networkidle')

    // Hero
    await page.locator('#field-heroEyebrow').fill('Aurelius Legal Partners · Est. 1998')
    await page.locator('#field-heroHeadline').fill(
      'Strategic counsel for the matters that define your future.',
    )
    await page.locator('#field-heroHeadlineEmphasis').fill('define')
    await page.locator('#field-heroLead').fill(
      'From complex corporate transactions to high-stakes litigation, we provide clear-eyed counsel backed by 25 years of courtroom and boardroom experience.',
    )
    await page.locator('#field-heroCtaPrimary').fill('Schedule a Consultation')
    await page.locator('#field-heroCtaSecondary').fill('Explore Practice Areas')
    await page.locator('#field-heroStatSatisfaction').fill('98%')

    // Trust statistics
    await page.locator('#field-statYears').fill('25+')
    await page.locator('#field-statYearsLabel').fill('Years of combined excellence')
    await page.locator('#field-statCases').fill('1,200+')
    await page.locator('#field-statCasesLabel').fill('Cases successfully resolved')
    await page.locator('#field-statAttorneys').fill('18')
    await page.locator('#field-statAttorneysLabel').fill('Licensed attorneys & counsel')
    await page.locator('#field-statSatisfaction').fill('98%')
    await page.locator('#field-statSatisfactionLabel').fill('Client satisfaction rating')
    await page.locator('#field-statRecovered').fill('$2.4B')
    await page.locator('#field-statRecoveredLabel').fill('Recovered & protected')

    // Contact
    await page.locator('#field-phone').fill('(212) 555-1840')
    await page.locator('#field-email').fill('counsel@aureliuslegal.com')
    await page.locator('#field-addressLine1').fill('400 Park Avenue, 28th Floor')
    await page.locator('#field-addressLine2').fill('New York, NY 10022')
    await page.locator('#field-officeHours').fill('Mon–Fri · 8:30 am – 6:00 pm')
    await page.locator('#field-officeHoursNote').fill('Evenings by appointment')

    // CTA band
    await page.locator('#field-ctaHeadline').fill('Your matter deserves a considered response.')
    await page.locator('#field-ctaBody').fill(
      'Our attorneys are available for confidential consultations. Tell us about your situation and we will respond within one business day.',
    )

    // SEO
    await page.locator('#field-metaTitle').fill('Aurelius Legal Partners — Strategic Legal Counsel')
    await page.locator('#field-metaDescription').fill(
      'Aurelius Legal Partners provides strategic legal counsel for corporate, litigation, family, and estate matters. 25 years of excellence.',
    )

    await save(page)
    await expect(page.locator('text=Site Settings').first()).toBeVisible()
  })

  // ────────────────────────────────────────────────────────────────────────────
  // GLOBAL — Process Steps
  // ────────────────────────────────────────────────────────────────────────────

  test('fills Process Steps global', async () => {
    await page.goto(`${BASE_URL}/admin/globals/process-steps`)
    await page.waitForLoadState('networkidle')

    await page.locator('#field-sectionHeadline').fill(
      'A clear path from first call to resolution.',
    )

    const steps = [
      {
        number: 1,
        title: 'Initial Consultation',
        description:
          'We listen carefully to your situation in a confidential session and assess your legal position honestly.',
      },
      {
        number: 2,
        title: 'Case Analysis',
        description:
          'Our team reviews all documents, precedents, and risk factors to build a complete picture before advising.',
      },
      {
        number: 3,
        title: 'Strategy Development',
        description:
          'We craft a tailored legal strategy aligned with your goals, timeline, and risk tolerance.',
      },
      {
        number: 4,
        title: 'Active Representation',
        description:
          'Our attorneys advocate on your behalf — in negotiations, hearings, or full trial — with precision and force.',
      },
      {
        number: 5,
        title: 'Resolution & Follow-Through',
        description:
          'We see every matter through to a durable outcome and remain available as your circumstances evolve.',
      },
    ]

    for (let i = 0; i < steps.length; i++) {
      await addArrayRow(page, /add step/i)
      await page.locator(`#field-steps__${i}__number`).fill(String(steps[i].number))
      await page.locator(`#field-steps__${i}__title`).fill(steps[i].title)
      await page.locator(`#field-steps__${i}__description`).fill(steps[i].description)
    }

    await save(page)
  })

  // ────────────────────────────────────────────────────────────────────────────
  // GLOBAL — Why Choose Us
  // ────────────────────────────────────────────────────────────────────────────

  test('fills Why Choose Us global', async () => {
    await page.goto(`${BASE_URL}/admin/globals/why-choose-us`)
    await page.waitForLoadState('networkidle')

    await page.locator('#field-sectionEyebrow').fill('Why Aurelius')
    await page.locator('#field-sectionHeadline').fill(
      'A standard of representation that institutions and individuals return to.',
    )
    await page.locator('#field-partnerQuote').fill(
      'We do not just advise — we stand beside you, prepared to go as far as the matter demands.',
    )
    await page.locator('#field-partnerQuoteCite').fill(
      'James Aurelius, Founding Partner',
    )

    const items = [
      {
        icon: 'scale',
        title: 'Proven Courtroom Record',
        description:
          'Over 25 years our litigators have won landmark rulings across federal and state jurisdictions.',
      },
      {
        icon: 'target',
        title: 'Precision Strategy',
        description:
          'Every matter receives a bespoke legal strategy — never templated, always calibrated to your specific facts.',
      },
      {
        icon: 'lock',
        title: 'Absolute Confidentiality',
        description:
          'Strict information barriers and secure systems ensure your sensitive matters stay private.',
      },
      {
        icon: 'users',
        title: 'Senior-Led Teams',
        description:
          'You work directly with partners, not associates. Senior counsel lead every case from intake to resolution.',
      },
      {
        icon: 'globe',
        title: 'National Reach',
        description:
          'Licensed in all 50 states with active relationships in key federal districts and international arbitration forums.',
      },
      {
        icon: 'clock',
        title: 'Responsive & Accessible',
        description:
          'We return calls within the hour during business hours and maintain emergency lines for time-critical matters.',
      },
    ]

    for (let i = 0; i < items.length; i++) {
      await addArrayRow(page, /add item/i)
      await page.locator(`#field-items__${i}__icon`).fill(items[i].icon)
      await page.locator(`#field-items__${i}__title`).fill(items[i].title)
      await page.locator(`#field-items__${i}__description`).fill(items[i].description)
    }

    await save(page)
  })

  // ────────────────────────────────────────────────────────────────────────────
  // COLLECTION — Categories (needed by Insights)
  // ────────────────────────────────────────────────────────────────────────────

  test('creates Categories', async () => {
    const categories = [
      'Corporate Law',
      'Litigation',
      'Family Law',
      'Estate Planning',
      'Real Estate',
    ]

    for (const cat of categories) {
      await page.goto(`${BASE_URL}/admin/collections/categories/create`)
      await page.waitForLoadState('networkidle')
      await page.locator('#field-title').fill(cat)
      await save(page)
    }
  })

  // ────────────────────────────────────────────────────────────────────────────
  // COLLECTION — Practice Areas (8 items)
  // ────────────────────────────────────────────────────────────────────────────

  test('creates Practice Areas', async () => {
    const areas = [
      {
        title: 'Corporate & M&A',
        shortDescription:
          'Strategic counsel on mergers, acquisitions, joint ventures, and complex corporate transactions from term sheet to close.',
        slug: 'corporate-ma',
        order: 1,
      },
      {
        title: 'Commercial Litigation',
        shortDescription:
          'Aggressive, focused representation in high-stakes contract, fraud, and business dispute matters across all federal and state courts.',
        slug: 'commercial-litigation',
        order: 2,
      },
      {
        title: 'Family Law',
        shortDescription:
          'Sensitive, results-driven counsel in divorce, custody, support, and prenuptial matters with an emphasis on protecting your family.',
        slug: 'family-law',
        order: 3,
      },
      {
        title: 'Estate Planning & Probate',
        shortDescription:
          'Comprehensive estate plans, trusts, and probate administration that protect your wealth and honor your intentions.',
        slug: 'estate-planning',
        order: 4,
      },
      {
        title: 'Real Estate',
        shortDescription:
          'Full-service counsel on commercial and residential transactions, land use, zoning, and real estate litigation.',
        slug: 'real-estate',
        order: 5,
      },
      {
        title: 'Employment & Labor',
        shortDescription:
          'Employer-side counsel on workplace disputes, executive agreements, non-competes, and regulatory compliance.',
        slug: 'employment-labor',
        order: 6,
      },
      {
        title: 'Intellectual Property',
        shortDescription:
          'Protection and enforcement of patents, trademarks, copyrights, and trade secrets for innovators and creative enterprises.',
        slug: 'intellectual-property',
        order: 7,
      },
      {
        title: 'Regulatory & Compliance',
        shortDescription:
          'Guidance through SEC, FDA, FTC, and industry-specific regulatory landscapes to keep your business on the right side of the law.',
        slug: 'regulatory-compliance',
        order: 8,
      },
    ]

    for (const area of areas) {
      await page.goto(`${BASE_URL}/admin/collections/practice-areas/create`)
      await page.waitForLoadState('networkidle')

      await page.locator('#field-title').fill(area.title)
      await page.locator('#field-shortDescription').fill(area.shortDescription)
      await page.locator('#field-slug').fill(area.slug)
      await page.locator('#field-order').fill(String(area.order))

      await save(page)
    }
  })

  // ────────────────────────────────────────────────────────────────────────────
  // COLLECTION — Attorneys (3 featured)
  // ────────────────────────────────────────────────────────────────────────────

  test('creates Attorneys', async () => {
    const attorneys = [
      {
        name: 'James Aurelius',
        slug: 'james-aurelius',
        role: 'Founding Partner',
        specialty: 'Corporate & M&A',
        yearsExperience: 28,
        email: 'j.aurelius@aureliuslegal.com',
        order: 1,
        photo: path.resolve('tests/fixtures/attorney-james.png'),
        bio: 'James Aurelius founded the firm after a decade as lead M&A counsel at Sullivan & Cromwell. He has advised on over $40B in transactions and is consistently ranked among the top corporate attorneys in New York.',
      },
      {
        name: 'Catherine Voss',
        slug: 'catherine-voss',
        role: 'Senior Partner, Litigation',
        specialty: 'Commercial Litigation',
        yearsExperience: 22,
        email: 'c.voss@aureliuslegal.com',
        order: 2,
        photo: path.resolve('tests/fixtures/attorney-catherine.png'),
        bio: "Catherine Voss is one of the firm's most decorated litigators, with a 90% trial success rate across federal and state courts. Her practice focuses on complex commercial fraud and securities litigation.",
      },
      {
        name: 'Marcus Chen',
        slug: 'marcus-chen',
        role: 'Partner, Estate & Family',
        specialty: 'Estate Planning & Family Law',
        yearsExperience: 15,
        email: 'm.chen@aureliuslegal.com',
        order: 3,
        photo: path.resolve('tests/fixtures/attorney-marcus.png'),
        bio: "Marcus Chen brings a calm, methodical approach to the firm's estate and family practice. He has structured over 600 estate plans and handled dozens of high-net-worth divorce proceedings with discretion and precision.",
      },
    ]

    for (const attorney of attorneys) {
      await page.goto(`${BASE_URL}/admin/collections/attorneys/create`)
      await page.waitForLoadState('networkidle')

      // Main fields
      await page.locator('#field-name').fill(attorney.name)
      await page.locator('#field-role').fill(attorney.role)
      await page.locator('#field-specialty').fill(attorney.specialty)
      await page.locator('#field-yearsExperience').fill(String(attorney.yearsExperience))

      // Upload the per-attorney colored avatar image
      await uploadPlaceholder(page, 'Photo', attorney.photo)

      // Sidebar fields
      await page.locator('#field-slug').fill(attorney.slug)
      await page.locator('#field-email').fill(attorney.email)
      await page.locator('#field-order').fill(String(attorney.order))

      // Checkbox — featured
      const featuredCheckbox = page.locator('#field-featured')
      if (!(await featuredCheckbox.isChecked())) {
        await featuredCheckbox.check()
      }

      // Rich text bio — click the Lexical editor and type
      const bioEditor = page
        .locator('[id*="field-bio"] .ContentEditable__root, [id*="bio"] [contenteditable="true"]')
        .first()
      if (await bioEditor.isVisible()) {
        await bioEditor.click()
        await page.keyboard.type(attorney.bio)
      }

      await save(page)
    }
  })

  // ────────────────────────────────────────────────────────────────────────────
  // COLLECTION — Case Results (3 featured)
  // ────────────────────────────────────────────────────────────────────────────

  test('creates Case Results', async () => {
    const cases = [
      {
        headline: '$48M Verdict — Securities Fraud',
        category: 'Commercial Litigation',
        description:
          'Represented a class of defrauded investors against a public company that materially misstated earnings over four fiscal years. After a three-week bench trial we secured a $48M verdict and injunctive relief.',
        meta: 'SDNY · 2023 · Class Action',
        order: 1,
      },
      {
        headline: '$310M M&A Transaction — Cross-Border Tech Acquisition',
        category: 'Corporate & M&A',
        description:
          'Lead counsel to a global technology firm on its acquisition of a European SaaS platform. We navigated multi-jurisdiction regulatory approvals, complex IP transfers, and earnout structuring to close in 90 days.',
        meta: 'Delaware / EU · 2024 · Cross-Border M&A',
        order: 2,
      },
      {
        headline: 'Custody & Asset Settlement — $75M Estate',
        category: 'Family Law',
        description:
          'Achieved a favorable custody arrangement and negotiated a $75M marital estate settlement for a prominent executive, preserving business continuity while protecting our client\'s primary residence and trust assets.',
        meta: 'NY Supreme Court · 2023 · High-Net-Worth Divorce',
        order: 3,
      },
    ]

    for (const c of cases) {
      await page.goto(`${BASE_URL}/admin/collections/case-results/create`)
      await page.waitForLoadState('networkidle')

      await page.locator('#field-headline').fill(c.headline)
      await page.locator('#field-category').fill(c.category)
      await page.locator('#field-description').fill(c.description)
      await page.locator('#field-meta').fill(c.meta)
      await page.locator('#field-order').fill(String(c.order))

      const featuredCheckbox = page.locator('#field-featured')
      if (!(await featuredCheckbox.isChecked())) {
        await featuredCheckbox.check()
      }

      await save(page)
    }
  })

  // ────────────────────────────────────────────────────────────────────────────
  // COLLECTION — Testimonials (3 featured)
  // ────────────────────────────────────────────────────────────────────────────

  test('creates Testimonials', async () => {
    const testimonials = [
      {
        quote:
          'Aurelius Legal did not just solve our legal problem — they anticipated risks we had not even considered. Their M&A team is in a class of its own.',
        clientName: 'Robert H.',
        clientTitle: 'CEO, Meridian Capital Group',
        avatarInitial: 'R',
        order: 1,
      },
      {
        quote:
          'In the most difficult period of my life, Catherine Voss fought relentlessly and delivered a result I never thought possible. I cannot recommend them highly enough.',
        clientName: 'Sarah T.',
        clientTitle: 'Plaintiff, Securities Class Action',
        avatarInitial: 'S',
        order: 2,
      },
      {
        quote:
          'Marcus Chen handled our estate planning with extraordinary care and precision. Every detail was considered. Our family is protected for generations.',
        clientName: 'David & Elaine M.',
        clientTitle: 'Estate Planning Clients',
        avatarInitial: 'D',
        order: 3,
      },
    ]

    for (const t of testimonials) {
      await page.goto(`${BASE_URL}/admin/collections/testimonials/create`)
      await page.waitForLoadState('networkidle')

      await page.locator('#field-quote').fill(t.quote)
      await page.locator('#field-clientName').fill(t.clientName)
      await page.locator('#field-clientTitle').fill(t.clientTitle)
      await page.locator('#field-avatarInitial').fill(t.avatarInitial)
      await page.locator('#field-order').fill(String(t.order))

      const featuredCheckbox = page.locator('#field-featured')
      if (!(await featuredCheckbox.isChecked())) {
        await featuredCheckbox.check()
      }

      await save(page)
    }
  })

  // ────────────────────────────────────────────────────────────────────────────
  // COLLECTION — Insights (5 articles)
  // ────────────────────────────────────────────────────────────────────────────

  test('creates Insights', async () => {
    const insights = [
      {
        title: 'What Every Executive Should Know Before Signing an M&A Letter of Intent',
        slug: 'executive-guide-loi',
        publishedDate: '2025-03-15',
        readTime: 7,
        excerpt:
          'The LOI is non-binding — or so most executives assume. In practice, exclusivity clauses, confidentiality obligations, and break-fee triggers can lock you in before you realize it.',
        categorySearch: 'Corporate',
        featured: true,
      },
      {
        title: 'Five Employment Contract Clauses That Can Cost You Millions',
        slug: 'employment-contract-clauses',
        publishedDate: '2025-02-20',
        readTime: 5,
        excerpt:
          'Non-competes, garden leave, and clawback provisions are increasingly aggressive. Here is what to scrutinize before you sign.',
        categorySearch: 'Litigation',
        featured: false,
      },
      {
        title: 'The Hidden Risks in Cross-Border Data Transfers After Schrems III',
        slug: 'cross-border-data-transfers',
        publishedDate: '2025-01-10',
        readTime: 8,
        excerpt:
          'Regulatory risk for US firms handling EU personal data is escalating. We outline the compliance steps that cannot wait.',
        categorySearch: 'Corporate',
        featured: false,
      },
      {
        title: "Protecting Your Estate When a Family Member Contests the Will",
        slug: 'estate-will-contest',
        publishedDate: '2024-12-05',
        readTime: 6,
        excerpt:
          'Will contests are rising in frequency, often fuelled by blended-family dynamics. Proactive drafting strategies can dramatically reduce your exposure.',
        categorySearch: 'Estate',
        featured: false,
      },
      {
        title: 'Navigating Commercial Lease Disputes in a Post-Pandemic Market',
        slug: 'commercial-lease-disputes',
        publishedDate: '2024-11-18',
        readTime: 4,
        excerpt:
          'Force majeure arguments have largely run their course in the courts. Landlords and tenants now need different tools to resolve ongoing rent and termination disputes.',
        categorySearch: 'Real Estate',
        featured: false,
      },
    ]

    for (const ins of insights) {
      await page.goto(`${BASE_URL}/admin/collections/insights/create`)
      await page.waitForLoadState('networkidle')

      // Main fields
      await page.locator('#field-title').fill(ins.title)
      await page.locator('#field-excerpt').fill(ins.excerpt)

      // Sidebar fields
      await page.locator('#field-slug').fill(ins.slug)
      // Date field — #field-publishedDate is the wrapper div; the actual input is inside.
      // After filling, press Escape to close the datepicker popup that appears.
      await page.locator('#field-publishedDate input').fill(ins.publishedDate)
      await page.keyboard.press('Escape')
      await page.waitForTimeout(300)
      await page.locator('#field-readTime').fill(String(ins.readTime))

      // Category relationship — Payload renders a custom combobox
      const catContainer = page
        .locator('.field-type.relationship, .field-type.upload')
        .filter({ hasText: /^category/i })
        .first()
      // Click the combobox / search input to open the dropdown
      await catContainer.locator('input').click()
      await page.waitForTimeout(300)
      await catContainer.locator('input').fill(ins.categorySearch)
      await page.waitForTimeout(700)
      const catOption = page.locator('.rs__option, [class*="option"]').first()
      if (await catOption.isVisible()) await catOption.click()

      // Featured checkbox
      if (ins.featured) {
        const featuredCheckbox = page.locator('#field-featured')
        if (!(await featuredCheckbox.isChecked())) {
          await featuredCheckbox.check()
        }
      }

      // Content rich text (required) — type minimal content
      const contentEditor = page
        .locator('[id*="field-content"] [contenteditable="true"], [data-lexical-editor="true"]')
        .first()
      await contentEditor.click()
      await page.keyboard.type(ins.excerpt) // reuse excerpt as placeholder content

      await save(page)
    }
  })

  // ────────────────────────────────────────────────────────────────────────────
  // COLLECTION — Awards (5 items)
  // ────────────────────────────────────────────────────────────────────────────

  test('creates Awards', async () => {
    const awards = [
      {
        organization: 'Chambers USA',
        distinction: 'Band 1 — Corporate/M&A, New York',
        icon: 'award',
        order: 1,
      },
      {
        organization: 'Legal 500',
        distinction: 'Tier 1 — Commercial Litigation',
        icon: 'trophy',
        order: 2,
      },
      {
        organization: 'Martindale-Hubbell',
        distinction: 'AV Preeminent Rating — 25 Consecutive Years',
        icon: 'star',
        order: 3,
      },
      {
        organization: 'Best Lawyers in America',
        distinction: 'Law Firm of the Year — Litigation, 2024',
        icon: 'medal',
        order: 4,
      },
      {
        organization: 'National Law Journal',
        distinction: 'Elite Trial Lawyers — Top 50 Firms',
        icon: 'shield-check',
        order: 5,
      },
    ]

    for (const award of awards) {
      await page.goto(`${BASE_URL}/admin/collections/awards/create`)
      await page.waitForLoadState('networkidle')

      await page.locator('#field-organization').fill(award.organization)
      await page.locator('#field-distinction').fill(award.distinction)
      await page.locator('#field-order').fill(String(award.order))

      // Icon select — Payload renders a custom select; click it and pick by value
      const iconSelect = page.locator('.field-type.select').filter({ hasText: /icon/i }).first()
      await iconSelect.locator('.rs__control').click()
      await page.waitForTimeout(300)
      const iconOption = page
        .locator('.rs__option')
        .filter({ hasText: new RegExp(award.icon, 'i') })
        .first()
      if (await iconOption.isVisible()) await iconOption.click()

      await save(page)
    }
  })

  // ────────────────────────────────────────────────────────────────────────────
  // Verify counts
  // ────────────────────────────────────────────────────────────────────────────

  test('verifies collection counts in admin', async () => {
    const checks: Array<{ url: string; minCount: number; label: string }> = [
      { url: `${BASE_URL}/admin/collections/practice-areas`, minCount: 8, label: 'Practice Areas' },
      { url: `${BASE_URL}/admin/collections/attorneys`, minCount: 3, label: 'Attorneys' },
      { url: `${BASE_URL}/admin/collections/case-results`, minCount: 3, label: 'Case Results' },
      { url: `${BASE_URL}/admin/collections/testimonials`, minCount: 3, label: 'Testimonials' },
      { url: `${BASE_URL}/admin/collections/insights`, minCount: 5, label: 'Insights' },
      { url: `${BASE_URL}/admin/collections/awards`, minCount: 5, label: 'Awards' },
    ]

    for (const check of checks) {
      await page.goto(check.url)
      await page.waitForLoadState('networkidle')
      const rows = page.locator('table tbody tr, .collection-list__item')
      const count = await rows.count()
      expect(count, `${check.label} should have at least ${check.minCount} items`).toBeGreaterThanOrEqual(
        check.minCount,
      )
    }
  })
})
