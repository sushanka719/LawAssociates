/**
 * Seed script — fills all Payload CMS data via the REST API.
 *
 * Usage:
 *   node scripts/seed-data.mjs
 *   # or: pnpm seed
 *
 * Requires the app to be running at http://localhost:3000
 * Admin credentials are read from environment or default below.
 */

const BASE = 'http://localhost:3000'
const EMAIL = process.env.ADMIN_EMAIL || 'karkisushanka719@gmail.com'
const PASSWORD = process.env.ADMIN_PASSWORD || 'sushanka@123'

// ── Auth ──────────────────────────────────────────────────────────────────────

async function login() {
  const res = await fetch(`${BASE}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  })
  if (!res.ok) throw new Error(`Login failed: ${res.status} ${await res.text()}`)
  const data = await res.json()
  return data.token
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function updateGlobal(token, slug, data) {
  const res = await fetch(`${BASE}/api/globals/${slug}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `JWT ${token}` },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    console.warn(`  ⚠ Global ${slug}: ${res.status}`)
    const text = await res.text()
    console.warn(text.slice(0, 300))
    return null
  }
  return res.json()
}

async function createDoc(token, collection, data) {
  const res = await fetch(`${BASE}/api/${collection}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `JWT ${token}` },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    console.warn(`  ⚠ ${collection}: ${res.status}`)
    const text = await res.text()
    console.warn(text.slice(0, 300))
    return null
  }
  return res.json()
}

async function clearCollection(token, collection) {
  const list = await fetch(`${BASE}/api/${collection}?limit=100`, {
    headers: { Authorization: `JWT ${token}` },
  }).then(r => r.json()).catch(() => ({ docs: [] }))
  for (const doc of (list.docs || [])) {
    await fetch(`${BASE}/api/${collection}/${doc.id}`, {
      method: 'DELETE',
      headers: { Authorization: `JWT ${token}` },
    })
  }
}

// ── Data ──────────────────────────────────────────────────────────────────────

function siteSettingsData() {
  return {
    heroEyebrow: 'Aurelius Legal Partners · Est. 1998',
    heroHeadline: 'Strategic counsel for the matters that define your future.',
    heroHeadlineEmphasis: 'define',
    heroLead: 'From complex corporate transactions to high-stakes litigation, we provide clear-eyed counsel backed by 25 years of courtroom and boardroom experience.',
    heroCtaPrimary: 'Schedule a Consultation',
    heroCtaSecondary: 'Explore Practice Areas',
    heroStatSatisfaction: '98%',

    statYears: '25+',
    statYearsLabel: 'Years of combined excellence',
    statCases: '1,200+',
    statCasesLabel: 'Cases successfully resolved',
    statAttorneys: '18',
    statAttorneysLabel: 'Licensed attorneys & counsel',
    statSatisfaction: '98%',
    statSatisfactionLabel: 'Client satisfaction rating',
    statRecovered: '$2.4B',
    statRecoveredLabel: 'Recovered & protected',

    phone: '(212) 555-1840',
    email: 'counsel@aureliuslegal.com',
    addressLine1: '400 Park Avenue, 28th Floor',
    addressLine2: 'New York, NY 10022',
    officeHours: 'Mon–Fri · 8:30 am – 6:00 pm',
    officeHoursNote: 'Evenings by appointment',

    ctaHeadline: 'Your matter deserves a considered response.',
    ctaBody: 'Our attorneys are available for confidential consultations. Tell us about your situation and we will respond within one business day.',

    metaTitle: 'Aurelius Legal Partners — Strategic Legal Counsel',
    metaDescription: 'Aurelius Legal Partners provides strategic legal counsel for corporate, litigation, family, and estate matters. 25 years of excellence.',
  }
}

function processStepsData() {
  return {
    sectionHeadline: 'A clear path from first call to resolution.',
    steps: [
      { number: 1, title: 'Initial Consultation', description: 'We listen carefully to your situation in a confidential session and assess your legal position honestly.' },
      { number: 2, title: 'Case Analysis', description: 'Our team reviews all documents, precedents, and risk factors to build a complete picture before advising.' },
      { number: 3, title: 'Strategy Development', description: 'We craft a tailored legal strategy aligned with your goals, timeline, and risk tolerance.' },
      { number: 4, title: 'Active Representation', description: 'Our attorneys advocate on your behalf — in negotiations, hearings, or full trial — with precision and force.' },
      { number: 5, title: 'Resolution & Follow-Through', description: 'We see every matter through to a durable outcome and remain available as your circumstances evolve.' },
    ],
  }
}

function whyChooseUsData() {
  return {
    sectionEyebrow: 'Why Aurelius',
    sectionHeadline: 'A standard of representation that institutions and individuals return to.',
    partnerQuote: 'We do not just advise — we stand beside you, prepared to go as far as the matter demands.',
    partnerQuoteCite: 'James Aurelius, Founding Partner',
    items: [
      { icon: 'scale', title: 'Proven Courtroom Record', description: 'Over 25 years our litigators have won landmark rulings across federal and state jurisdictions.' },
      { icon: 'target', title: 'Precision Strategy', description: 'Every matter receives a bespoke legal strategy — never templated, always calibrated to your specific facts.' },
      { icon: 'messages-square', title: 'Transparent Communication', description: 'Clear scope, candid assessments, and predictable billing — you always know where your matter stands.' },
      { icon: 'award', title: 'Proven Results', description: 'A two-decade record of favourable settlements, verdicts, and transactions across industries.' },
      { icon: 'lock', title: 'Absolute Discretion', description: 'Confidentiality is the foundation of our practice — protected at every stage and every level.' },
      { icon: 'globe', title: 'Coordinated Reach', description: 'A network of trusted counsel lets us serve clients across jurisdictions without losing a step.' },
    ],
  }
}

const PRACTICE_AREAS = [
  { title: 'Corporate & M&A', shortDescription: 'Formation, governance, financings, and cross-border transactions for companies at every stage.', fullDescription: 'Our corporate practice advises boards, investors, and management teams on the full spectrum of corporate matters.', icon: 'briefcase', slug: 'corporate-ma', order: 1 },
  { title: 'Litigation & Disputes', shortDescription: 'Trial-tested advocacy in commercial, contractual, and high-stakes civil disputes.', fullDescription: 'We represent clients in complex commercial disputes before trial and appellate courts, arbitration panels, and regulatory bodies.', icon: 'scale', slug: 'litigation-disputes', order: 2 },
  { title: 'Real Estate', shortDescription: 'Acquisitions, development, leasing, and complex property and land-use counsel.', fullDescription: 'Our real estate group advises on all aspects of commercial real estate transactions.', icon: 'building', slug: 'real-estate', order: 3 },
  { title: 'Employment & Labour', shortDescription: 'Workforce strategy, executive agreements, investigations, and dispute resolution.', fullDescription: 'We guide employers and executives through the full range of employment matters.', icon: 'users', slug: 'employment-labour', order: 4 },
  { title: 'Private Client & Family', shortDescription: 'Estate planning, wealth preservation, and sensitive family matters handled with discretion.', fullDescription: 'We provide bespoke counsel to individuals, families, and family-owned businesses.', icon: 'home', slug: 'private-client-family', order: 5 },
  { title: 'Intellectual Property', shortDescription: 'Protection, licensing, and enforcement of the assets that drive enterprise value.', fullDescription: 'We protect and monetise intellectual property across all industries.', icon: 'lightbulb', slug: 'intellectual-property', order: 6 },
  { title: 'Immigration', shortDescription: 'Business and family immigration, from talent mobility to complex visa strategy.', fullDescription: 'We advise employers and individuals on all aspects of immigration law.', icon: 'globe', slug: 'immigration', order: 7 },
  { title: 'White-Collar Defense', shortDescription: 'Discreet representation in investigations, regulatory enquiries, and enforcement actions.', fullDescription: 'We defend individuals and organisations in criminal and regulatory proceedings.', icon: 'shield', slug: 'white-collar-defense', order: 8 },
]

const ATTORNEYS = [
  { name: 'Eleanor Ashford-Vance', role: 'Managing Partner', specialty: 'Corporate & Mergers · Governance', yearsExperience: 24, bio: 'Eleanor leads the firm with 24 years of experience advising boards and executives on their most consequential decisions.', featured: true, order: 1 },
  { name: 'Marcus J. Holloway', role: 'Partner · Litigation', specialty: 'Commercial & Civil Disputes', yearsExperience: 19, bio: 'Marcus has tried cases in federal and state courts across the country, with a focus on high-value commercial disputes.', featured: true, order: 2 },
  { name: 'Priya Nair Castellanos', role: 'Partner · Private Client', specialty: 'Estates, Family & Wealth', yearsExperience: 17, bio: 'Priya advises ultra-high-net-worth families on estate planning, wealth transfer, and complex family matters.', featured: true, order: 3 },
]

const CASE_RESULTS = [
  { headline: '$2.5M', category: 'Civil Litigation', description: 'Secured a landmark settlement on behalf of an individual client following a multi-year dispute resolved on the eve of trial.', meta: 'Settled · State Superior Court', featured: true, order: 1 },
  { headline: '$340M', category: 'Corporate / M&A', description: 'Lead counsel on a cross-border acquisition, structuring the transaction and navigating regulatory clearance across two jurisdictions.', meta: 'Closed · Cross-border', featured: true, order: 2 },
  { headline: 'Defense Verdict', category: 'Commercial Trial', description: 'Prevailed at trial in a high-profile commercial matter, defeating substantial claims against a long-standing institutional client.', meta: 'Verdict · Federal Court', featured: true, order: 3 },
]

const TESTIMONIALS = [
  { quote: 'Law Associates treated our acquisition as if the company were their own. Their judgment under pressure was the difference between a deal and a disaster.', clientName: 'Daniel R. Whitfield', clientTitle: 'CEO · Corporate Acquisition', avatarInitial: 'D', featured: true },
  { quote: "I never once felt like a case number. They explained every option in plain language and fought for the outcome I needed.", clientName: 'Sophia Lindqvist', clientTitle: 'Private Client · Family Matter', avatarInitial: 'S', featured: true },
  { quote: 'Discreet, decisive, and relentlessly prepared. When the stakes were highest, Law Associates was exactly the counsel we hoped for.', clientName: 'Marcus Bellweather', clientTitle: 'Board Chair · Litigation', avatarInitial: 'M', featured: true },
]

const AWARDS = [
  { organization: 'Chambers & Partners', distinction: 'Band 1 · 2026', icon: 'award', order: 1 },
  { organization: 'The Legal 500', distinction: 'Leading Firm', icon: 'medal', order: 2 },
  { organization: 'Best Lawyers', distinction: 'Firm of the Year', icon: 'trophy', order: 3 },
  { organization: 'Super Lawyers', distinction: '2019–2026', icon: 'star', order: 4 },
  { organization: 'Martindale-Hubbell', distinction: 'AV Preeminent', icon: 'shield-check', order: 5 },
]

const CATEGORIES = [
  { title: 'Business Law', slug: 'business-law' },
  { title: 'Litigation', slug: 'litigation' },
  { title: 'Family Law', slug: 'family-law' },
  { title: 'Compliance', slug: 'compliance' },
  { title: 'Employment', slug: 'employment' },
]

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🔐 Logging in…')
  const token = await login()
  console.log('✅ Logged in')

  // ── Globals ────────────────────────────────────────────────────────────────

  console.log('\n📋 Seeding globals…')

  console.log('  → Site Settings')
  await updateGlobal(token, 'site-settings', siteSettingsData())
  console.log('    ✓ Site Settings')

  console.log('  → Process Steps')
  await updateGlobal(token, 'process-steps', processStepsData())
  console.log('    ✓ Process Steps')

  console.log('  → Why Choose Us')
  await updateGlobal(token, 'why-choose-us', whyChooseUsData())
  console.log('    ✓ Why Choose Us')

  // ── Collections ────────────────────────────────────────────────────────────

  console.log('\n📦 Seeding collections…')

  // Categories
  console.log('  → Categories (clearing & seeding)')
  await clearCollection(token, 'categories')
  const categoryMap = {}
  for (const cat of CATEGORIES) {
    const doc = await createDoc(token, 'categories', cat)
    if (doc?.doc?.id) categoryMap[cat.slug] = doc.doc.id
  }
  console.log(`    ✓ ${Object.keys(categoryMap).length} categories`)

  // Practice Areas
  console.log('  → Practice Areas (clearing & seeding)')
  await clearCollection(token, 'practice-areas')
  for (const pa of PRACTICE_AREAS) {
    await createDoc(token, 'practice-areas', pa)
  }
  console.log(`    ✓ ${PRACTICE_AREAS.length} practice areas`)

  // Attorneys
  console.log('  → Attorneys (clearing & seeding)')
  await clearCollection(token, 'attorneys')
  for (const att of ATTORNEYS) {
    await createDoc(token, 'attorneys', att)
  }
  console.log(`    ✓ ${ATTORNEYS.length} attorneys`)

  // Case Results
  console.log('  → Case Results (clearing & seeding)')
  await clearCollection(token, 'case-results')
  for (const cr of CASE_RESULTS) {
    await createDoc(token, 'case-results', cr)
  }
  console.log(`    ✓ ${CASE_RESULTS.length} case results`)

  // Testimonials
  console.log('  → Testimonials (clearing & seeding)')
  await clearCollection(token, 'testimonials')
  for (const tst of TESTIMONIALS) {
    await createDoc(token, 'testimonials', tst)
  }
  console.log(`    ✓ ${TESTIMONIALS.length} testimonials`)

  // Awards
  console.log('  → Awards (clearing & seeding)')
  await clearCollection(token, 'awards')
  for (const award of AWARDS) {
    await createDoc(token, 'awards', award)
  }
  console.log(`    ✓ ${AWARDS.length} awards`)

  // Insights (with category references)
  const businessLawId = categoryMap['business-law']
  const litigationId = categoryMap['litigation']
  const familyLawId = categoryMap['family-law']
  const complianceId = categoryMap['compliance']

  const INSIGHTS = [
    {
      title: 'What the new merger-review thresholds mean for mid-market acquisitions',
      slug: 'merger-review-thresholds-mid-market',
      publishedDate: '2026-06-12T00:00:00.000Z',
      readTime: 8,
      excerpt: 'Recent changes to regulatory review are reshaping deal timelines. We break down the practical implications for buyers, sellers, and their counsel.',
      category: businessLawId || undefined,
      featured: true,
    },
    {
      title: 'Five questions to ask before you agree to arbitration',
      slug: 'five-questions-before-arbitration',
      publishedDate: '2026-05-28T00:00:00.000Z',
      readTime: 6,
      excerpt: 'Arbitration can be faster and more private than litigation — but the choice has long-term consequences. Here is what to weigh before signing.',
      category: litigationId || undefined,
      featured: false,
    },
    {
      title: 'Protecting generational wealth through thoughtful estate planning',
      slug: 'estate-planning-generational-wealth',
      publishedDate: '2026-05-14T00:00:00.000Z',
      readTime: 5,
      excerpt: 'A well-structured estate plan does more than transfer assets — it preserves relationships and reflects the values you want to carry forward.',
      category: familyLawId || undefined,
      featured: false,
    },
    {
      title: 'Building an internal investigation playbook before you need one',
      slug: 'internal-investigation-playbook',
      publishedDate: '2026-04-30T00:00:00.000Z',
      readTime: 7,
      excerpt: 'Companies that navigate investigations well are usually the ones that prepared in advance. Here is what a practical playbook looks like.',
      category: complianceId || undefined,
      featured: false,
    },
    {
      title: 'Executive separation agreements: where disputes most often begin',
      slug: 'executive-separation-agreements',
      publishedDate: '2026-04-15T00:00:00.000Z',
      readTime: 4,
      excerpt: 'We review the most common flashpoints in executive separation negotiations — and how to avoid leaving them unresolved.',
      category: businessLawId || undefined,
      featured: false,
    },
  ]

  console.log('  → Insights (clearing & seeding)')
  await clearCollection(token, 'insights')
  for (const insight of INSIGHTS) {
    await createDoc(token, 'insights', insight)
  }
  console.log(`    ✓ ${INSIGHTS.length} insights`)

  console.log('\n🎉 Seed complete!')
  console.log('\nVisit http://localhost:3000 to see the live site.')
  console.log('Visit http://localhost:3000/admin to manage content.')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err.message)
  process.exit(1)
})
