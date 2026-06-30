/* Law Associates — static site content (CMS fallback) */

export const FIRM_NAME = 'Law Associates'
export const FIRM_TAGLINE = 'Law Associates · Est. 1998'
export const FIRM_EMAIL = 'counsel@lawassociates.com'
export const FIRM_PHONE = '(212) 555-1840'
export const FIRM_ADDRESS = '400 Park Avenue, 28th Floor\nNew York, NY 10022'
export const FIRM_HOURS = 'Mon–Fri · 8:30am – 6:00pm\nEvenings by appointment'

export const PRACTICE_AREAS = [
  { idx: '01', title: 'Corporate & Commercial', desc: 'Company formation, governance, shareholder agreements, and commercial contracts for businesses at every stage of growth.' },
  { idx: '02', title: 'Banking & Finance', desc: 'Loan documentation, security arrangements, and regulatory compliance for banks, financial institutions, and borrowers.' },
  { idx: '03', title: 'Mergers & Acquisitions', desc: 'End-to-end transaction support for domestic and cross-border acquisitions, mergers, and corporate restructuring.' },
  { idx: '04', title: 'Foreign Investment', desc: 'FITTA approvals, joint venture structuring, and regulatory compliance for inbound foreign direct investment.' },
  { idx: '05', title: 'Capital Markets', desc: 'Securities issuance, stock exchange listings, and compliance with SEBON regulations.' },
  { idx: '06', title: 'Tax', desc: 'Tax planning, structuring, and representation before the Inland Revenue Department and appellate authorities.' },
  { idx: '07', title: 'Labour & Employment', desc: 'Employment contracts, workforce compliance, collective bargaining, and labour dispute representation.' },
  { idx: '08', title: 'Intellectual Property', desc: 'Trademark, patent, and copyright registration and enforcement before the Department of Industry and courts.' },
  { idx: '09', title: 'Real Estate', desc: 'Land acquisition, development agreements, title due diligence, and regulatory approvals.' },
  { idx: '10', title: 'Competition Law', desc: 'Advice on market dominance, anti-competitive practices, and Competition Promotion and Market Protection Act compliance.' },
  { idx: '11', title: 'Insolvency & Restructuring', desc: 'Corporate insolvency proceedings, debt restructuring, and Insolvency Court representation.' },
  { idx: '12', title: 'Dispute Resolution', desc: 'Commercial litigation, mediation, and negotiated settlements before Nepal\'s courts.' },
  { idx: '13', title: 'International Arbitration', desc: 'ICC, SIAC, LCIA, and HKIAC proceedings; arbitration clause drafting and award enforcement.' },
  { idx: '14', title: 'Regulatory Compliance', desc: 'Legal compliance programmes, regulatory audits, and sector-specific regulator liaison.' },
  { idx: '15', title: 'Company Secretarial Services', desc: 'Annual filings, board resolutions, AGM management, and ongoing OCR compliance.' },
  { idx: '16', title: 'Environmental Law', desc: 'EIA approvals, compliance programmes, and Environment Department representation.' },
  { idx: '17', title: 'Energy & Infrastructure', desc: 'Project development, concession agreements, and regulatory approvals for hydropower and infrastructure.' },
  { idx: '18', title: 'IT & Data Privacy', desc: 'Technology contracts, data protection compliance, and regulatory advice for digital businesses.' },
] as const

export const SERVICES = [
  { id: 'svc-01', title: 'Company Incorporation & Registration', desc: 'End-to-end company formation under the Companies Act 2063, including all OCR filings.' },
  { id: 'svc-02', title: 'MOA & AOA Drafting', desc: 'Drafting and reviewing the Memorandum and Articles of Association tailored to your business model.' },
  { id: 'svc-03', title: 'Board & Shareholder Advisory', desc: 'Advising boards of directors and shareholders on governance, duties, and rights under Nepalese law.' },
  { id: 'svc-04', title: 'Board Meetings & AGM Organisation', desc: 'End-to-end management of board meetings and AGMs, including notices and quorum requirements.' },
  { id: 'svc-05', title: 'Board Resolutions & Meeting Minutes', desc: 'Preparing legally compliant board resolutions and accurate meeting minutes for all corporate decisions.' },
  { id: 'svc-06', title: 'Commercial Agreement Drafting & Review', desc: 'Drafting and reviewing commercial contracts, NDAs, supply agreements, and business-critical documents.' },
  { id: 'svc-07', title: 'Legal Due Diligence', desc: 'Comprehensive legal due diligence for investments, acquisitions, and project financing across sectors.' },
  { id: 'svc-08', title: 'Mergers, Acquisitions & Restructuring', desc: 'Full transaction advisory for domestic and cross-border M&A, demergers, and corporate reorganisations.' },
  { id: 'svc-09', title: 'Foreign Investment Approvals (FITTA)', desc: 'Obtaining Department of Industry and Nepal Rastra Bank approvals for all categories of foreign investment.' },
  { id: 'svc-10', title: 'Trademark & IP Registration', desc: 'Registering trademarks, patents, and copyrights before the Department of Industry and courts.' },
  { id: 'svc-11', title: 'Labour & Employment Advice', desc: 'Employment policy drafting, Labour Act compliance, and Labour Court representation.' },
  { id: 'svc-12', title: 'Tax Planning & Dispute Resolution', desc: 'Tax structuring advice and representation before the Inland Revenue Department and Revenue Tribunal.' },
  { id: 'svc-13', title: 'Loan & Security Documentation', desc: 'Preparing all loan agreements, mortgage deeds, pledge documents, and security creation formalities.' },
  { id: 'svc-14', title: 'Securities & Capital Market Compliance', desc: 'Advising on Securities Act compliance, SEBON filings, and public issue procedures.' },
  { id: 'svc-15', title: 'Regulatory Representation', desc: 'Representing clients before the OCR, NRB, SEBON, DOI, and other regulatory bodies.' },
  { id: 'svc-16', title: 'Legal Audits & Compliance Reviews', desc: 'Periodic audits of a company\'s legal compliance position with a written report and recommendations.' },
  { id: 'svc-17', title: "Corporate Governance & Directors' Duties", desc: "Advising on corporate governance best practices and directors' fiduciary duties under the Companies Act." },
  { id: 'svc-18', title: 'Arbitration & Commercial Litigation', desc: 'Representing clients in domestic arbitration and commercial litigation before Nepal\'s courts.' },
  { id: 'svc-19', title: 'Company Liquidation & Insolvency', desc: 'Managing voluntary and compulsory liquidation and representing parties in insolvency proceedings.' },
  { id: 'svc-20', title: 'Ongoing Legal Retainership', desc: 'Comprehensive retainer arrangements providing ongoing legal advice, compliance monitoring, and document management.' },
] as const

export const WHY_US_ITEMS = [
  { icon: 'Scale',          title: 'Legal Expertise',           desc: 'Comprehensive knowledge of company, commercial, tax, banking, labour, investment, and regulatory laws.' },
  { icon: 'GraduationCap',  title: 'Professional Qualification', desc: 'All lawyers licensed to practise and members of the Nepal Bar Association.' },
  { icon: 'Briefcase',      title: 'Track Record',              desc: 'Decades of experience handling complex corporate transactions, high-value disputes, and regulatory matters.' },
  { icon: 'Building2',      title: 'Industry Knowledge',        desc: 'Deep sector expertise across banking, hydropower, IT, construction, manufacturing, tourism, and telecommunications.' },
  { icon: 'ClipboardCheck', title: 'Compliance Capability',     desc: 'Structured compliance programmes, legal audits, and ongoing advisory to keep your business fully compliant.' },
  { icon: 'FileText',       title: 'Drafting Skills',           desc: 'Precision drafting of contracts, opinions, resolutions, shareholder agreements, and all transactional documents.' },
  { icon: 'Handshake',      title: 'Negotiation Skills',        desc: 'Experienced negotiators who close transactions on commercial terms that protect your interests.' },
  { icon: 'Gavel',          title: 'Dispute Resolution',        desc: 'Proven advocacy in litigation, mediation, and domestic and international arbitration proceedings.' },
  { icon: 'Search',         title: 'Due Diligence',             desc: 'Thorough legal due diligence for acquisitions, investments, financing, and joint ventures in all sectors.' },
  { icon: 'Lock',           title: 'Confidentiality',           desc: 'Client information protected by strict professional ethics and legal privilege at every stage.' },
  { icon: 'ShieldCheck',    title: 'Ethics & Independence',     desc: 'Full compliance with professional conduct rules and rigorous management of conflicts of interest.' },
  { icon: 'Laptop2',        title: 'Technology',                desc: 'Secure document management, digital research tools, and electronic case management systems.' },
  { icon: 'Globe',          title: 'International Network',     desc: 'Established relationships with foreign law firms and advisors for seamless cross-border matters.' },
] as const

export const ATTORNEYS = [
  { id: 'att-1', name: 'Eleanor Ashford-Vance', role: 'Managing Partner', spec: 'Corporate & Mergers · Governance', years: '24', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
  { id: 'att-2', name: 'Marcus J. Holloway', role: 'Partner · Litigation', spec: 'Commercial & Civil Disputes', years: '19', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
  { id: 'att-3', name: 'Priya Nair Castellanos', role: 'Partner · Private Client', spec: 'Estates, Family & Wealth', years: '17', img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=600&q=80' },
] as const

export const CASE_RESULTS = [
  { cat: 'Civil Litigation', amt: '$2.5M', desc: 'Secured a landmark settlement on behalf of an individual client following a multi-year dispute resolved on the eve of trial.', meta: 'Settled · State Superior Court' },
  { cat: 'Corporate / M&A', amt: '$340M', desc: 'Lead counsel on a cross-border acquisition, structuring the transaction and navigating regulatory clearance across two jurisdictions.', meta: 'Closed · Cross-border' },
  { cat: 'Commercial Trial', amt: 'Defense Verdict', desc: 'Prevailed at trial in a high-profile commercial matter, defeating substantial claims against a long-standing institutional client.', meta: 'Verdict · Federal Court' },
] as const

export const TESTIMONIALS = [
  { quote: 'Law Associates treated our acquisition as if the company were their own. Their judgment under pressure was the difference between a deal and a disaster.', name: 'Daniel R. Whitfield', role: 'CEO · Corporate Acquisition', initial: 'D' },
  { quote: "I never once felt like a case number. They explained every option in plain language and fought for the outcome I needed.", name: 'Sophia Lindqvist', role: 'Private Client · Family Matter', initial: 'S' },
  { quote: 'Discreet, decisive, and relentlessly prepared. When the stakes were highest, Law Associates was exactly the counsel we hoped for.', name: 'Marcus Bellweather', role: 'Board Chair · Litigation', initial: 'M' },
] as const

export const PROCESS_STEPS = [
  { num: '1', title: 'Consultation', desc: 'A confidential conversation to understand your objectives, concerns, and timeline.' },
  { num: '2', title: 'Case Evaluation', desc: 'We assess the facts, risks, and options — and tell you candidly where you stand.' },
  { num: '3', title: 'Legal Strategy', desc: 'A tailored strategy built around your goals, with clear scope and expectations.' },
  { num: '4', title: 'Representation', desc: 'Senior-led advocacy at the table, in negotiations, and in the courtroom.' },
  { num: '5', title: 'Resolution', desc: 'We pursue the strongest possible outcome and stand with you through to close.' },
] as const

export const INSIGHTS_LIST = [
  { cat: 'Litigation', time: '6 min', title: 'Five questions to ask before you agree to arbitration' },
  { cat: 'Family Law', time: '5 min', title: 'Protecting generational wealth through thoughtful estate planning' },
  { cat: 'Compliance', time: '7 min', title: 'Building an internal investigation playbook before you need one' },
  { cat: 'Employment', time: '4 min', title: 'Executive separation agreements: where disputes most often begin' },
] as const

export const AWARDS = [
  { icon: 'Award', org: 'Chambers & Partners', yr: 'Band 1 · 2026' },
  { icon: 'Medal', org: 'The Legal 500', yr: 'Leading Firm' },
  { icon: 'Trophy', org: 'Best Lawyers', yr: 'Firm of the Year' },
  { icon: 'Star', org: 'Super Lawyers', yr: '2019–2026' },
  { icon: 'ShieldCheck', org: 'Martindale-Hubbell', yr: 'AV Preeminent' },
] as const
