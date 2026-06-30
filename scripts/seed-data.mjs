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

const BASE = (process.env.SEED_BASE_URL || 'http://localhost:3000').replace(/\/$/, '')
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
  // Try Payload v3 bulk delete first
  const bulkRes = await fetch(`${BASE}/api/${collection}?where[id][exists][equals]=true`, {
    method: 'DELETE',
    headers: { Authorization: `JWT ${token}` },
  })
  if (bulkRes.ok) return

  // Fallback: fetch all docs then delete individually
  const list = await fetch(`${BASE}/api/${collection}?limit=200&depth=0`, {
    headers: { Authorization: `JWT ${token}` },
  }).then(r => r.json()).catch(() => ({ docs: [] }))

  for (const doc of (list.docs || [])) {
    const delRes = await fetch(`${BASE}/api/${collection}/${doc.id}`, {
      method: 'DELETE',
      headers: { Authorization: `JWT ${token}` },
    })
    if (!delRes.ok) {
      console.warn(`    ⚠ delete ${collection}/${doc.id}: HTTP ${delRes.status}`)
    }
  }
}

async function getOrCreateDoc(token, collection, data, uniqueField) {
  const res = await createDoc(token, collection, data)
  if (res?.doc?.id) return res.doc

  // If create failed (likely duplicate), fetch the existing one
  const q = encodeURIComponent(data[uniqueField])
  const existing = await fetch(
    `${BASE}/api/${collection}?where[${uniqueField}][equals]=${q}&limit=1&depth=0`,
    { headers: { Authorization: `JWT ${token}` } },
  ).then(r => r.json()).catch(() => ({ docs: [] }))

  return existing.docs?.[0] ?? null
}

// ── Data ──────────────────────────────────────────────────────────────────────

function siteSettingsData() {
  return {
    navLabels: {
      firmName: 'Law Associates',
      bookConsultation: 'Book Consultation',
      practiceAreas: 'Practice Areas',
      services: 'Services',
      jurisdiction: 'Jurisdiction',
      attorneys: 'Attorneys',
      about: 'About',
      caseResults: 'Case Results',
      insights: 'Insights',
      contact: 'Contact',
    },
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

    metaTitle: 'Law Associates — Strategic Corporate Legal Counsel in Nepal',
    metaDescription: 'Law Associates provides strategic corporate legal counsel across 18 practice areas including M&A, foreign investment, tax, and regulatory compliance in Nepal.',
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
    sectionEyebrow: 'Why Choose Us',
    sectionHeadline: 'The standard by which a Nepalese corporate law firm should be judged.',
    partnerQuote: 'We do not just advise — we stand beside you, prepared to go as far as the matter demands.',
    partnerQuoteCite: 'Managing Partner',
    items: [
      { icon: 'Scale',          title: 'Legal Expertise',           description: 'Comprehensive knowledge of company, commercial, tax, banking, labour, investment, and regulatory laws both in Nepal and across borders.' },
      { icon: 'GraduationCap',  title: 'Professional Qualification', description: 'All our lawyers are licensed to practise and are members of the Nepal Bar Association, bound by professional conduct rules.' },
      { icon: 'Briefcase',      title: 'Track Record',              description: 'Decades of experience handling complex corporate transactions, high-value disputes, and regulatory matters in Nepal.' },
      { icon: 'Building2',      title: 'Industry Knowledge',        description: 'Deep sector expertise across banking, hydropower, IT, construction, manufacturing, tourism, and telecommunications.' },
      { icon: 'ClipboardCheck', title: 'Compliance Capability',     description: 'Structured compliance programmes, legal audits, and ongoing advisory to keep your business fully compliant at all times.' },
      { icon: 'FileText',       title: 'Drafting Skills',           description: 'Precision drafting of contracts, legal opinions, board resolutions, shareholder agreements, and all transactional documents.' },
      { icon: 'Handshake',      title: 'Negotiation Skills',        description: 'Experienced negotiators who close transactions on commercial terms that reflect your priorities and protect your position.' },
      { icon: 'Gavel',          title: 'Dispute Resolution',        description: 'Proven advocacy in litigation, mediation, and domestic and international arbitration proceedings at every level.' },
      { icon: 'Search',         title: 'Due Diligence',             description: 'Thorough legal due diligence for acquisitions, investments, project financing, and joint ventures in all sectors.' },
      { icon: 'Lock',           title: 'Confidentiality',           description: 'Client information is protected by strict professional ethics and legal privilege at every stage and at every level.' },
      { icon: 'ShieldCheck',    title: 'Ethics & Independence',     description: 'Full compliance with professional conduct rules and rigorous management of conflicts of interest across all engagements.' },
      { icon: 'Laptop2',        title: 'Technology',                description: 'Secure document management, digital legal research tools, and electronic case management for efficient and reliable service.' },
      { icon: 'Globe',          title: 'International Network',     description: 'Established relationships with foreign law firms and advisors for seamless cross-border matters and international transactions.' },
    ],
  }
}

function jurisdictionData() {
  return {
    sectionEyebrow: 'Jurisdiction & Scope',
    sectionHeadline: 'Where we practise and how we reach.',
    sectionLead: "Our practice spans Nepal's courts and regulatory bodies, cross-border advisory work, and international arbitration proceedings — giving clients a single point of continuity across every forum their matter may reach.",
    blocks: [
      {
        heading: 'Domestic (Nepal)',
        icon: 'Scale',
        description: "We advise and represent clients before all levels of the Nepalese judiciary and regulatory landscape under the Constitution of Nepal, Companies Act 2063, Labour Act 2074, FITTA 2075, Securities Act 2063, and all other principal Nepalese legislation.",
        points: [
          { text: 'Supreme Court of Nepal' },
          { text: 'High Courts of Nepal' },
          { text: 'District Courts of Nepal' },
          { text: 'Office of the Company Registrar (OCR)' },
          { text: 'Department of Industry (DOI)' },
          { text: 'Nepal Rastra Bank (NRB)' },
          { text: 'Securities Board of Nepal (SEBON)' },
          { text: 'Department of Revenue Investigation' },
          { text: 'Labour Court & Appellate Bodies' },
        ],
      },
      {
        heading: 'International & Cross-Border',
        icon: 'Globe',
        description: 'We advise Nepalese and foreign clients on cross-border transactions and international business law, coordinating with local counsel in other jurisdictions when representation abroad is required.',
        points: [
          { text: 'Foreign direct investment (FDI) structuring' },
          { text: 'International commercial contracts' },
          { text: 'Joint venture agreements' },
          { text: 'Cross-border mergers and acquisitions' },
          { text: 'International taxation advice' },
          { text: 'International trade law' },
          { text: 'Project finance' },
          { text: 'Cross-border banking transactions' },
        ],
      },
      {
        heading: 'International Arbitration',
        icon: 'Gavel',
        description: 'Many commercial contracts choose arbitration over national courts for dispute resolution. We draft arbitration clauses, advise on seat selection, and represent clients in proceedings before major international arbitration bodies.',
        points: [
          { text: 'International Chamber of Commerce (ICC)' },
          { text: 'Singapore International Arbitration Centre (SIAC)' },
          { text: 'London Court of International Arbitration (LCIA)' },
          { text: 'Hong Kong International Arbitration Centre (HKIAC)' },
          { text: 'Ad hoc arbitration under UNCITRAL Rules' },
        ],
      },
      {
        heading: 'Corporate Regulatory',
        icon: 'Building2',
        description: "Corporate lawyers advise clients navigating Nepal's regulatory landscape — from company registration and securities filings to sector-specific approvals across banking, insurance, telecommunications, and energy.",
        points: [
          { text: 'Company registration & deregistration' },
          { text: 'Securities regulation & SEBON filings' },
          { text: 'Banking & financial institution regulation' },
          { text: 'Insurance sector regulation' },
          { text: 'Competition & consumer protection law' },
          { text: 'Telecommunications regulation' },
          { text: 'Energy & infrastructure approvals' },
        ],
      },
    ],
  }
}

function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function richText(text) {
  return {
    root: {
      type: 'root', format: '', indent: 0, version: 1,
      children: [{
        type: 'paragraph', format: '', indent: 0, version: 1,
        children: [{ type: 'text', format: 0, mode: 'normal', style: '', text, version: 1 }],
      }],
    },
  }
}

// ── 18 Nepal corporate law departments ───────────────────────────────────────

const PRACTICE_AREAS = [
  { title: 'Corporate & Commercial', shortDescription: 'Company formation, governance, shareholder agreements, and commercial contracts for businesses at every stage of growth.', slug: 'corporate-commercial', order: 1 },
  { title: 'Banking & Finance', shortDescription: 'Loan documentation, security arrangements, and regulatory compliance for banks, financial institutions, and borrowers.', slug: 'banking-finance', order: 2 },
  { title: 'Mergers & Acquisitions', shortDescription: 'End-to-end transaction support for domestic and cross-border acquisitions, mergers, and corporate restructuring.', slug: 'mergers-acquisitions', order: 3 },
  { title: 'Foreign Investment', shortDescription: 'FITTA approvals, joint venture structuring, and regulatory compliance for inbound foreign direct investment across all sectors.', slug: 'foreign-investment', order: 4 },
  { title: 'Capital Markets', shortDescription: 'Securities issuance, stock exchange listings, and compliance with SEBON regulations for public and private companies.', slug: 'capital-markets', order: 5 },
  { title: 'Tax', shortDescription: 'Tax planning, structuring, and representation before the Inland Revenue Department and appellate authorities.', slug: 'tax', order: 6 },
  { title: 'Labour & Employment', shortDescription: 'Employment contracts, workforce compliance, collective bargaining, and representation in labour disputes.', slug: 'labour-employment', order: 7 },
  { title: 'Intellectual Property', shortDescription: 'Trademark, patent, and copyright registration and enforcement before the Department of Industry and courts.', slug: 'intellectual-property', order: 8 },
  { title: 'Real Estate', shortDescription: 'Land acquisition, development agreements, title due diligence, and regulatory approvals for property transactions.', slug: 'real-estate', order: 9 },
  { title: 'Competition Law', shortDescription: 'Advice on market dominance, anti-competitive practices, and Competition Promotion and Market Protection Act compliance.', slug: 'competition-law', order: 10 },
  { title: 'Insolvency & Restructuring', shortDescription: 'Corporate insolvency proceedings, debt restructuring, and representation before the Insolvency Court.', slug: 'insolvency-restructuring', order: 11 },
  { title: 'Dispute Resolution', shortDescription: "Commercial litigation, mediation, and negotiated settlements before Nepal's courts and quasi-judicial bodies.", slug: 'dispute-resolution', order: 12 },
  { title: 'International Arbitration', shortDescription: 'ICC, SIAC, LCIA, and HKIAC proceedings; arbitration clause drafting and enforcement of awards.', slug: 'international-arbitration', order: 13 },
  { title: 'Regulatory Compliance', shortDescription: 'Legal compliance programmes, regulatory audits, and liaison with sector-specific regulators across industries.', slug: 'regulatory-compliance', order: 14 },
  { title: 'Company Secretarial Services', shortDescription: 'Annual filings, board resolutions, AGM management, and ongoing OCR compliance for Nepalese companies.', slug: 'company-secretarial', order: 15 },
  { title: 'Environmental Law', shortDescription: 'EIA approvals, compliance programmes, and representation before the Environment Department.', slug: 'environmental-law', order: 16 },
  { title: 'Energy & Infrastructure', shortDescription: 'Project development, concession agreements, and regulatory approvals for hydropower, renewables, and infrastructure projects.', slug: 'energy-infrastructure', order: 17 },
  { title: 'IT & Data Privacy', shortDescription: 'Technology contracts, data protection compliance, and regulatory advice for digital businesses and platforms.', slug: 'it-data-privacy', order: 18 },
]

// ── 20 specific firm services ─────────────────────────────────────────────────

const FIRM_SERVICES = [
  { title: 'Company Incorporation & Registration', description: 'End-to-end company formation under the Companies Act 2063, including all OCR filings and post-incorporation compliance.', order: 1 },
  { title: 'MOA & AOA Drafting', description: 'Drafting and reviewing the Memorandum and Articles of Association tailored to your ownership structure and business model.', order: 2 },
  { title: 'Board & Shareholder Advisory', description: 'Advising boards of directors and shareholders on governance, duties, and rights under Nepalese company and securities law.', order: 3 },
  { title: 'Board Meetings & AGM Organisation', description: 'End-to-end management of board meetings and annual general meetings, including notices, quorum requirements, and resolutions.', order: 4 },
  { title: 'Board Resolutions & Meeting Minutes', description: 'Preparing legally compliant board resolutions and accurate meeting minutes for all corporate decisions and statutory requirements.', order: 5 },
  { title: 'Commercial Agreement Drafting & Review', description: 'Drafting and reviewing commercial contracts, NDAs, supply agreements, distribution agreements, and all business-critical documents.', order: 6 },
  { title: 'Legal Due Diligence', description: 'Comprehensive legal due diligence for investments, acquisitions, and project financing across all sectors — with detailed written reports.', order: 7 },
  { title: 'Mergers, Acquisitions & Restructuring', description: 'Full transaction advisory for domestic and cross-border M&A, demergers, and corporate reorganisations from LOI to closing.', order: 8 },
  { title: 'Foreign Investment Approvals (FITTA)', description: 'Obtaining Department of Industry and Nepal Rastra Bank approvals for all categories of foreign direct investment in Nepal.', order: 9 },
  { title: 'Trademark & IP Registration', description: 'Registering trademarks, patents, industrial designs, and copyrights before the Department of Industry and courts of Nepal.', order: 10 },
  { title: 'Labour & Employment Advice', description: 'Employment policy drafting, Labour Act 2074 compliance, and representation in labour disputes before the Labour Court and appellate bodies.', order: 11 },
  { title: 'Tax Planning & Dispute Resolution', description: 'Tax structuring advice and representation before the Inland Revenue Department, Revenue Tribunal, and higher courts.', order: 12 },
  { title: 'Loan & Security Documentation', description: 'Preparing all loan agreements, mortgage deeds, pledge documents, guarantee deeds, and security creation formalities.', order: 13 },
  { title: 'Securities & Capital Market Compliance', description: 'Advising on Securities Act 2063 compliance, SEBON filings, public issue procedures, and listed company obligations.', order: 14 },
  { title: 'Regulatory Representation', description: 'Representing clients before the OCR, NRB, SEBON, DOI, Revenue Department, and other regulatory and quasi-judicial bodies.', order: 15 },
  { title: 'Legal Audits & Compliance Reviews', description: "Periodic audits of a company's entire legal and regulatory compliance position with a written report and actionable recommendations.", order: 16 },
  { title: "Corporate Governance & Directors' Duties", description: "Advising on corporate governance best practices and directors' fiduciary duties, liabilities, and protections under the Companies Act.", order: 17 },
  { title: 'Arbitration & Commercial Litigation', description: "Representing clients in domestic arbitration proceedings and commercial litigation before Nepal's courts at all levels.", order: 18 },
  { title: 'Company Liquidation & Insolvency', description: 'Managing voluntary and compulsory liquidation proceedings and representing creditors and debtors in insolvency matters.', order: 19 },
  { title: 'Ongoing Legal Retainership', description: 'Comprehensive retainer arrangements providing ongoing legal advice, compliance monitoring, document management, and priority access to our team.', order: 20 },
]

const ATTORNEYS = [
  { name: 'Eleanor Ashford-Vance', slug: toSlug('Eleanor Ashford-Vance'), role: 'Managing Partner', specialty: 'Corporate & Mergers · Governance', yearsExperience: 24, bio: richText('Eleanor leads the firm with 24 years of experience advising boards and executives on their most consequential decisions.'), featured: true, order: 1 },
  { name: 'Marcus J. Holloway', slug: toSlug('Marcus J. Holloway'), role: 'Partner · Litigation', specialty: 'Commercial & Civil Disputes', yearsExperience: 19, bio: richText('Marcus has tried cases in federal and state courts across the country, with a focus on high-value commercial disputes.'), featured: true, order: 2 },
  { name: 'Priya Nair Castellanos', slug: toSlug('Priya Nair Castellanos'), role: 'Partner · Private Client', specialty: 'Estates, Family & Wealth', yearsExperience: 17, bio: richText('Priya advises ultra-high-net-worth families on estate planning, wealth transfer, and complex family matters.'), featured: true, order: 3 },
  { name: 'Rajesh Kumar Sharma', slug: toSlug('Rajesh Kumar Sharma'), role: 'Partner · Banking & Finance', specialty: 'Banking, Finance & Securities', yearsExperience: 21, bio: richText('Rajesh advises banks, financial institutions, and borrowers on complex financing transactions, loan documentation, and regulatory compliance before the Nepal Rastra Bank.'), featured: true, order: 4 },
  { name: 'Sunita Acharya', slug: toSlug('Sunita Acharya'), role: 'Partner · Tax', specialty: 'Tax Planning & Revenue', yearsExperience: 16, bio: richText('Sunita leads the firm\'s tax practice, advising on corporate tax structuring, transfer pricing, and representation before the Inland Revenue Department and Revenue Tribunal.'), featured: true, order: 5 },
  { name: 'Meera Pradhan', slug: toSlug('Meera Pradhan'), role: 'Partner · Foreign Investment', specialty: 'Foreign Investment & Cross-Border M&A', yearsExperience: 18, bio: richText('Meera heads the foreign investment practice, guiding multinational clients through FITTA approvals, joint venture structuring, and cross-border acquisitions in Nepal.'), featured: true, order: 6 },
  { name: 'Dipendra Singh Rai', slug: toSlug('Dipendra Singh Rai'), role: 'Partner · Energy & Infrastructure', specialty: 'Energy, Hydropower & Infrastructure', yearsExperience: 20, bio: richText('Dipendra specialises in project development and regulatory approvals for hydropower, renewables, and large-scale infrastructure projects across Nepal.'), featured: true, order: 7 },
  { name: 'Bikash Bahadur Thapa', slug: toSlug('Bikash Bahadur Thapa'), role: 'Senior Associate · Labour', specialty: 'Labour, Employment & Industrial Relations', yearsExperience: 12, bio: richText('Bikash advises employers and employees on Labour Act compliance, workforce restructuring, collective bargaining, and representation in labour disputes.'), featured: true, order: 8 },
  { name: 'Suresh Malla', slug: toSlug('Suresh Malla'), role: 'Senior Associate · Disputes', specialty: 'Dispute Resolution & Arbitration', yearsExperience: 14, bio: richText('Suresh represents clients in commercial litigation before Nepal\'s courts and in domestic and international arbitration proceedings, including ICC and SIAC.'), featured: true, order: 9 },
  { name: 'Anita Karki', slug: toSlug('Anita Karki'), role: 'Associate · Corporate', specialty: 'Corporate, Commercial & Compliance', yearsExperience: 8, bio: richText('Anita advises on company formation, corporate governance, commercial contracts, and regulatory compliance for domestic and foreign businesses operating in Nepal.'), featured: true, order: 10 },
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

  console.log('  → Why Choose Us (13 criteria)')
  await updateGlobal(token, 'why-choose-us', whyChooseUsData())
  console.log('    ✓ Why Choose Us')

  console.log('  → Jurisdiction (4 blocks)')
  await updateGlobal(token, 'jurisdiction', jurisdictionData())
  console.log('    ✓ Jurisdiction')

  // ── Collections ────────────────────────────────────────────────────────────

  console.log('\n📦 Seeding collections…')

  // Categories
  console.log('  → Categories (clearing & seeding)')
  await clearCollection(token, 'categories')
  const categoryMap = {}
  for (const cat of CATEGORIES) {
    const doc = await getOrCreateDoc(token, 'categories', cat, 'slug')
    if (doc?.id) categoryMap[cat.slug] = doc.id
  }
  console.log(`    ✓ ${Object.keys(categoryMap).length} categories`)

  // Practice Areas (18 Nepal departments)
  console.log('  → Practice Areas (clearing & seeding 18 departments)')
  await clearCollection(token, 'practice-areas')
  for (const pa of PRACTICE_AREAS) {
    await createDoc(token, 'practice-areas', pa)
  }
  console.log(`    ✓ ${PRACTICE_AREAS.length} practice areas`)

  // Firm Services (20 services)
  console.log('  → Firm Services (clearing & seeding 20 services)')
  await clearCollection(token, 'firm-services')
  for (const svc of FIRM_SERVICES) {
    await createDoc(token, 'firm-services', svc)
  }
  console.log(`    ✓ ${FIRM_SERVICES.length} firm services`)

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

  // Insights
  const businessLawId = categoryMap['business-law']
  const litigationId  = categoryMap['litigation']
  const familyLawId   = categoryMap['family-law']
  const complianceId  = categoryMap['compliance']

  function insightDoc(fields) {
    // Only include category if we resolved its ID; omit rather than pass undefined
    const doc = { ...fields }
    if (!doc.category) delete doc.category
    return doc
  }

  const INSIGHTS = [
    insightDoc({
      title: 'What the new merger-review thresholds mean for mid-market acquisitions',
      slug: 'merger-review-thresholds-mid-market',
      publishedDate: '2026-06-12T00:00:00.000Z',
      readTime: 8,
      excerpt: 'Recent changes to regulatory review are reshaping deal timelines. We break down the practical implications for buyers, sellers, and their counsel.',
      content: richText('Recent changes to regulatory review are reshaping deal timelines. We break down the practical implications for buyers, sellers, and their counsel.'),
      category: businessLawId,
      featured: true,
    }),
    insightDoc({
      title: 'Five questions to ask before you agree to arbitration',
      slug: 'five-questions-before-arbitration',
      publishedDate: '2026-05-28T00:00:00.000Z',
      readTime: 6,
      excerpt: 'Arbitration can be faster and more private than litigation — but the choice has long-term consequences. Here is what to weigh before signing.',
      content: richText('Arbitration can be faster and more private than litigation — but the choice has long-term consequences. Here is what to weigh before signing.'),
      category: litigationId,
      featured: false,
    }),
    insightDoc({
      title: 'Protecting generational wealth through thoughtful estate planning',
      slug: 'estate-planning-generational-wealth',
      publishedDate: '2026-05-14T00:00:00.000Z',
      readTime: 5,
      excerpt: 'A well-structured estate plan does more than transfer assets — it preserves relationships and reflects the values you want to carry forward.',
      content: richText('A well-structured estate plan does more than transfer assets — it preserves relationships and reflects the values you want to carry forward.'),
      category: familyLawId,
      featured: false,
    }),
    insightDoc({
      title: 'Building an internal investigation playbook before you need one',
      slug: 'internal-investigation-playbook',
      publishedDate: '2026-04-30T00:00:00.000Z',
      readTime: 7,
      excerpt: 'Companies that navigate investigations well are usually the ones that prepared in advance. Here is what a practical playbook looks like.',
      content: richText('Companies that navigate investigations well are usually the ones that prepared in advance. Here is what a practical playbook looks like.'),
      category: complianceId,
      featured: false,
    }),
    insightDoc({
      title: 'Executive separation agreements: where disputes most often begin',
      slug: 'executive-separation-agreements',
      publishedDate: '2026-04-15T00:00:00.000Z',
      readTime: 4,
      excerpt: 'We review the most common flashpoints in executive separation negotiations — and how to avoid leaving them unresolved.',
      content: richText('We review the most common flashpoints in executive separation negotiations — and how to avoid leaving them unresolved.'),
      category: businessLawId,
      featured: false,
    }),
  ]

  console.log('  → Insights (clearing & seeding)')
  await clearCollection(token, 'insights')
  for (const insight of INSIGHTS) {
    await createDoc(token, 'insights', insight)
  }
  console.log(`    ✓ ${INSIGHTS.length} insights`)

  console.log('\n🎉 Seed complete!')
  console.log('\nNew sections seeded:')
  console.log('  • Practice Areas:  18 Nepal corporate law departments')
  console.log('  • Firm Services:   20 specific legal services')
  console.log('  • Jurisdiction:    4 jurisdiction blocks (global)')
  console.log('  • Why Choose Us:   13 firm criteria')
  console.log('\nVisit http://localhost:3000 to see the live site.')
  console.log('Visit http://localhost:3000/admin to manage content in the CMS.')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err.message)
  process.exit(1)
})
