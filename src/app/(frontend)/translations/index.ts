export type Lang = 'en' | 'ne'

export const translations = {
  en: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    nav: {
      firmName: 'Law Associates',
      firmNameBold: 'Law',
      firmNameWord: 'Associates',
      links: [
        { href: '#practice',     label: 'Practice Areas' },
        { href: '#services',     label: 'Services' },
        { href: '#jurisdiction', label: 'Jurisdiction' },
        { href: '#attorneys',    label: 'Attorneys' },
        { href: '#about',        label: 'About' },
        { href: '#results',      label: 'Case Results' },
        { href: '#insights',     label: 'Insights' },
        { href: '#contact',      label: 'Contact' },
      ],
      bookBtn: 'Book Consultation',
      langLabel: 'Switch to Nepali',
      langToggle: 'NE',
    },

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      eyebrow: 'Aurelius Legal Partners · Est. 1998',
      headline: 'Strategic counsel for the matters that define your future.',
      headlineEmphasis: 'define',
      lead: 'From complex corporate transactions to high-stakes litigation, we provide clear-eyed counsel backed by 25 years of courtroom and boardroom experience.',
      ctaPrimary: 'Schedule a Consultation',
      ctaSecondary: 'Explore Practice Areas',
      statSatisfaction: '98%',
      statRecovered: '$2.4B',
      statYears: '25+',
      statCases: '1,200+',
      statSatisfactionLabel: 'Client satisfaction across representations',
      statYearsLabel: 'Years of practice',
      statCasesLabel: 'Matters resolved',
      statRecoveredLabel: 'Recovered & protected',
    },

    // ── Statistics ───────────────────────────────────────────────────────────
    stats: {
      yearsLabel: 'Years of combined excellence',
      casesLabel: 'Cases successfully resolved',
      attorneysLabel: 'Licensed attorneys & counsel',
      satisfactionLabel: 'Client satisfaction rating',
    },

    // ── Practice Areas (18 Nepal corporate law departments) ──────────────────
    practice: {
      eyebrow: 'Practice Areas',
      headline: 'Depth across the disciplines that matter most.',
      lead: 'Our practice groups are led by partners with decades of focused experience in Nepalese and cross-border corporate law — so the counsel you receive is senior, specialised, and coordinated across every dimension of your matter.',
      cta: 'Discuss Your Matter',
      items: [
        { idx: '01', title: 'Corporate & Commercial', desc: 'Company formation, governance, shareholder agreements, and commercial contracts for businesses at every stage of growth.' },
        { idx: '02', title: 'Banking & Finance', desc: 'Loan documentation, security arrangements, and regulatory compliance for banks, financial institutions, and borrowers.' },
        { idx: '03', title: 'Mergers & Acquisitions', desc: 'End-to-end transaction support for domestic and cross-border acquisitions, mergers, and corporate restructuring.' },
        { idx: '04', title: 'Foreign Investment', desc: 'FITTA approvals, joint venture structuring, and regulatory compliance for inbound foreign direct investment across all sectors.' },
        { idx: '05', title: 'Capital Markets', desc: 'Securities issuance, stock exchange listings, and compliance with SEBON regulations for public and private companies.' },
        { idx: '06', title: 'Tax', desc: 'Tax planning, structuring, and representation before the Inland Revenue Department and appellate authorities.' },
        { idx: '07', title: 'Labour & Employment', desc: 'Employment contracts, workforce compliance, collective bargaining, and representation in labour disputes.' },
        { idx: '08', title: 'Intellectual Property', desc: 'Trademark, patent, and copyright registration and enforcement before the Department of Industry and courts.' },
        { idx: '09', title: 'Real Estate', desc: 'Land acquisition, development agreements, title due diligence, and regulatory approvals for property transactions.' },
        { idx: '10', title: 'Competition Law', desc: 'Advice on market dominance, anti-competitive practices, and compliance with the Competition Promotion and Market Protection Act.' },
        { idx: '11', title: 'Insolvency & Restructuring', desc: 'Corporate insolvency proceedings, debt restructuring, and representation before the Insolvency Court.' },
        { idx: '12', title: 'Dispute Resolution', desc: 'Commercial litigation, mediation, and negotiated settlements before Nepal\'s courts and quasi-judicial bodies.' },
        { idx: '13', title: 'International Arbitration', desc: 'Representation in ICC, SIAC, LCIA, and HKIAC proceedings; arbitration clause drafting and enforcement of awards.' },
        { idx: '14', title: 'Regulatory Compliance', desc: 'Legal compliance programmes, regulatory audits, and liaison with sector-specific regulators across industries.' },
        { idx: '15', title: 'Company Secretarial Services', desc: 'Annual filings, board resolutions, AGM management, and ongoing OCR compliance for Nepalese companies.' },
        { idx: '16', title: 'Environmental Law', desc: 'Environmental impact assessment approvals, compliance programmes, and representation before the Environment Department.' },
        { idx: '17', title: 'Energy & Infrastructure', desc: 'Project development, concession agreements, and regulatory approvals for hydropower, renewables, and infrastructure projects.' },
        { idx: '18', title: 'IT & Data Privacy', desc: 'Technology contracts, data protection compliance, and regulatory advice for digital businesses and platforms.' },
      ],
    },

    // ── Firm Services (20 specific services) ─────────────────────────────────
    services: {
      eyebrow: 'What We Do',
      headline: 'The full scope of our legal work.',
      lead: 'From a company\'s first registration to its eventual restructuring, our team covers every stage of a business\'s legal life in Nepal.',
      items: [
        { title: 'Company Incorporation & Registration', desc: 'End-to-end company formation under the Companies Act 2063, including all OCR filings.' },
        { title: 'MOA & AOA Drafting', desc: 'Drafting and reviewing the Memorandum and Articles of Association tailored to your business model.' },
        { title: 'Board & Shareholder Advisory', desc: 'Advising boards of directors and shareholders on governance, duties, and rights under Nepalese law.' },
        { title: 'Board Meetings & AGM Organisation', desc: 'End-to-end management of board meetings and annual general meetings, including notices and quorum requirements.' },
        { title: 'Board Resolutions & Meeting Minutes', desc: 'Preparing legally compliant board resolutions and accurate meeting minutes for all corporate decisions.' },
        { title: 'Commercial Agreement Drafting & Review', desc: 'Drafting and reviewing commercial contracts, NDAs, supply agreements, and all business-critical documents.' },
        { title: 'Legal Due Diligence', desc: 'Comprehensive legal due diligence for investments, acquisitions, and project financing across sectors.' },
        { title: 'Mergers, Acquisitions & Restructuring', desc: 'Full transaction advisory for domestic and cross-border M&A, demergers, and corporate reorganisations.' },
        { title: 'Foreign Investment Approvals (FITTA)', desc: 'Obtaining Department of Industry and Nepal Rastra Bank approvals for all categories of foreign investment.' },
        { title: 'Trademark & IP Registration', desc: 'Registering trademarks, patents, and copyrights before the Department of Industry and courts.' },
        { title: 'Labour & Employment Advice', desc: 'Employment policy drafting, Labour Act compliance, and representation in labour disputes before the Labour Court.' },
        { title: 'Tax Planning & Dispute Resolution', desc: 'Tax structuring advice and representation before the Inland Revenue Department and Revenue Tribunal.' },
        { title: 'Loan & Security Documentation', desc: 'Preparing all loan agreements, mortgage deeds, pledge documents, and security creation formalities.' },
        { title: 'Securities & Capital Market Compliance', desc: 'Advising on Securities Act compliance, SEBON filings, and public issue procedures for listed companies.' },
        { title: 'Regulatory Representation', desc: 'Representing clients before the OCR, NRB, SEBON, DOI, and other regulatory and quasi-judicial bodies.' },
        { title: 'Legal Audits & Compliance Reviews', desc: 'Periodic audits of a company\'s legal and regulatory compliance position with a written report and recommendations.' },
        { title: 'Corporate Governance & Directors\' Duties', desc: 'Advising on corporate governance best practices and directors\' fiduciary duties under the Companies Act.' },
        { title: 'Arbitration & Commercial Litigation', desc: 'Representing clients in domestic arbitration proceedings and commercial litigation before Nepal\'s courts.' },
        { title: 'Company Liquidation & Insolvency', desc: 'Managing voluntary and compulsory liquidation, and representing creditors and debtors in insolvency proceedings.' },
        { title: 'Ongoing Legal Retainership', desc: 'Comprehensive retainer arrangements providing ongoing legal advice, compliance monitoring, and document management.' },
      ],
    },

    // ── Jurisdiction ──────────────────────────────────────────────────────────
    jurisdiction: {
      eyebrow: 'Jurisdiction & Scope',
      headline: 'Where we practise and how we reach.',
      lead: 'Our practice spans Nepal\'s courts and regulatory bodies, cross-border advisory work, and international arbitration — giving clients a single point of continuity across every forum their matter may reach.',
      blocks: [
        {
          heading: 'Domestic (Nepal)',
          icon: 'Scale',
          description: 'We advise and represent clients before all levels of the Nepalese judiciary and regulatory landscape under the Constitution of Nepal, Companies Act 2063, Labour Act 2074, FITTA 2075, Securities Act 2063, and all other principal Nepalese legislation.',
          points: [
            'Supreme Court of Nepal',
            'High Courts of Nepal',
            'District Courts of Nepal',
            'Office of the Company Registrar (OCR)',
            'Department of Industry (DOI)',
            'Nepal Rastra Bank (NRB)',
            'Securities Board of Nepal (SEBON)',
            'Department of Revenue Investigation',
            'Labour Court & Appellate Bodies',
          ],
        },
        {
          heading: 'International & Cross-Border',
          icon: 'Globe',
          description: 'We advise Nepalese and foreign clients on cross-border transactions and international business law, coordinating with local counsel in other jurisdictions when representation abroad is required.',
          points: [
            'Foreign direct investment (FDI) structuring',
            'International commercial contracts',
            'Joint venture agreements',
            'Cross-border mergers and acquisitions',
            'International taxation advice',
            'International trade law',
            'Project finance',
            'Cross-border banking transactions',
          ],
        },
        {
          heading: 'International Arbitration',
          icon: 'Gavel',
          description: 'Many commercial contracts choose arbitration over national courts for dispute resolution. We draft arbitration clauses, advise on seat selection, and represent clients in proceedings before major international arbitration bodies.',
          points: [
            'International Chamber of Commerce (ICC)',
            'Singapore International Arbitration Centre (SIAC)',
            'London Court of International Arbitration (LCIA)',
            'Hong Kong International Arbitration Centre (HKIAC)',
            'Ad hoc arbitration under UNCITRAL Rules',
          ],
        },
        {
          heading: 'Corporate Regulatory',
          icon: 'Building2',
          description: 'Corporate lawyers advise clients navigating Nepal\'s regulatory landscape — from company registration and securities filings to sector-specific approvals across banking, insurance, telecommunications, and energy.',
          points: [
            'Company registration & deregistration',
            'Securities regulation & SEBON filings',
            'Banking & financial institution regulation',
            'Insurance sector regulation',
            'Competition & consumer protection law',
            'Telecommunications regulation',
            'Energy & infrastructure approvals',
          ],
        },
      ],
    },

    // ── Why Us (13 firm criteria) ─────────────────────────────────────────────
    whyUs: {
      eyebrow: 'Why Choose Us',
      headline: 'The standard by which a Nepalese corporate law firm should be judged.',
      quote: 'We do not just advise — we stand beside you, prepared to go as far as the matter demands.',
      quoteCite: '— Managing Partner',
      items: [
        { icon: 'Scale',          title: 'Legal Expertise',           desc: 'Comprehensive knowledge of company, commercial, tax, banking, labour, investment, and regulatory laws both in Nepal and across borders.' },
        { icon: 'GraduationCap',  title: 'Professional Qualification', desc: 'All our lawyers are licensed to practise and are members of the Nepal Bar Association, bound by professional conduct rules.' },
        { icon: 'Briefcase',      title: 'Track Record',              desc: 'Decades of experience handling complex corporate transactions, high-value disputes, and regulatory matters in Nepal.' },
        { icon: 'Building2',      title: 'Industry Knowledge',        desc: 'Deep sector expertise across banking, hydropower, IT, construction, manufacturing, tourism, and telecommunications.' },
        { icon: 'ClipboardCheck', title: 'Compliance Capability',     desc: 'Structured compliance programmes, legal audits, and ongoing advisory to keep your business fully compliant at all times.' },
        { icon: 'FileText',       title: 'Drafting Skills',           desc: 'Precision drafting of contracts, legal opinions, board resolutions, shareholder agreements, and all transactional documents.' },
        { icon: 'Handshake',      title: 'Negotiation Skills',        desc: 'Experienced negotiators who close transactions on commercial terms that reflect your priorities and protect your position.' },
        { icon: 'Gavel',          title: 'Dispute Resolution',        desc: 'Proven advocacy in litigation, mediation, and domestic and international arbitration proceedings at every level.' },
        { icon: 'Search',         title: 'Due Diligence',             desc: 'Thorough legal due diligence for acquisitions, investments, project financing, and joint ventures in all sectors.' },
        { icon: 'Lock',           title: 'Confidentiality',           desc: 'Client information is protected by strict professional ethics and legal privilege at every stage and at every level.' },
        { icon: 'ShieldCheck',    title: 'Ethics & Independence',     desc: 'Full compliance with professional conduct rules and rigorous management of conflicts of interest across all engagements.' },
        { icon: 'Laptop2',        title: 'Technology',                desc: 'Secure document management, digital legal research tools, and electronic case management for efficient and reliable service.' },
        { icon: 'Globe',          title: 'International Network',     desc: 'Established relationships with foreign law firms and advisors for seamless cross-border matters and international transactions.' },
      ],
    },

    // ── Attorneys ────────────────────────────────────────────────────────────
    attorneys: {
      eyebrow: 'The People',
      headline: 'Counsel you will know by name.',
      lead: 'Our partners bring decades of focused experience and a shared commitment to representing each client as if their matter were our own.',
      yrsExperience: 'yrs experience',
      meetAll: 'Meet all 15 attorneys',
      items: [
        { name: 'Eleanor Ashford-Vance', role: 'Managing Partner', spec: 'Corporate & Mergers · Governance', years: '24' },
        { name: 'Marcus J. Holloway', role: 'Partner · Litigation', spec: 'Commercial & Civil Disputes', years: '19' },
        { name: 'Priya Nair Castellanos', role: 'Partner · Private Client', spec: 'Estates, Family & Wealth', years: '17' },
        { name: 'Rajesh Kumar Sharma', role: 'Partner · Banking & Finance', spec: 'Banking, Finance & Securities', years: '21' },
        { name: 'Sunita Acharya', role: 'Partner · Tax', spec: 'Tax Planning & Revenue', years: '16' },
        { name: 'Meera Pradhan', role: 'Partner · Foreign Investment', spec: 'Foreign Investment & Cross-Border M&A', years: '18' },
        { name: 'Dipendra Singh Rai', role: 'Partner · Energy & Infrastructure', spec: 'Energy, Hydropower & Infrastructure', years: '20' },
        { name: 'Bikash Bahadur Thapa', role: 'Senior Associate · Labour', spec: 'Labour, Employment & Industrial Relations', years: '12' },
        { name: 'Suresh Malla', role: 'Senior Associate · Disputes', spec: 'Dispute Resolution & Arbitration', years: '14' },
        { name: 'Anita Karki', role: 'Associate · Corporate', spec: 'Corporate, Commercial & Compliance', years: '8' },
      ],
    },

    // ── Case Results ─────────────────────────────────────────────────────────
    caseResults: {
      eyebrow: 'Representative Matters',
      headline: 'Outcomes that speak to the work.',
      disclaimer: 'Results shown are illustrative of past engagements. Prior outcomes do not guarantee future results.',
      items: [
        { cat: 'Civil Litigation', amt: '$2.5M', desc: 'Secured a landmark settlement on behalf of an individual client following a multi-year dispute resolved on the eve of trial.', meta: 'Settled · State Superior Court' },
        { cat: 'Corporate / M&A', amt: '$340M', desc: 'Lead counsel on a cross-border acquisition, structuring the transaction and navigating regulatory clearance across two jurisdictions.', meta: 'Closed · Cross-border' },
        { cat: 'Commercial Trial', amt: 'Defense Verdict', desc: 'Prevailed at trial in a high-profile commercial matter, defeating substantial claims against a long-standing institutional client.', meta: 'Verdict · Federal Court' },
      ],
    },

    // ── Testimonials ─────────────────────────────────────────────────────────
    testimonials: {
      eyebrow: 'Client Voices',
      headline: 'Trusted by those with the most to protect.',
      items: [
        { quote: 'Law Associates treated our acquisition as if the company were their own. Their judgment under pressure was the difference between a deal and a disaster.', name: 'Daniel R. Whitfield', role: 'CEO · Corporate Acquisition', initial: 'D' },
        { quote: "I never once felt like a case number. They explained every option in plain language and fought for the outcome I needed.", name: 'Sophia Lindqvist', role: 'Private Client · Family Matter', initial: 'S' },
        { quote: 'Discreet, decisive, and relentlessly prepared. When the stakes were highest, Law Associates was exactly the counsel we hoped for.', name: 'Marcus Bellweather', role: 'Board Chair · Litigation', initial: 'M' },
      ],
    },

    // ── Process ──────────────────────────────────────────────────────────────
    process: {
      eyebrow: 'How We Work',
      headline: 'A clear path from first call to resolution.',
      steps: [
        { num: '1', title: 'Initial Consultation', desc: 'We listen carefully to your situation in a confidential session and assess your legal position honestly.' },
        { num: '2', title: 'Case Analysis', desc: 'Our team reviews all documents, precedents, and risk factors to build a complete picture before advising.' },
        { num: '3', title: 'Strategy Development', desc: 'We craft a tailored legal strategy aligned with your goals, timeline, and risk tolerance.' },
        { num: '4', title: 'Active Representation', desc: 'Our attorneys advocate on your behalf — in negotiations, hearings, or full trial — with precision and force.' },
        { num: '5', title: 'Resolution & Follow-Through', desc: 'We see every matter through to a durable outcome and remain available as your circumstances evolve.' },
      ],
    },

    // ── Insights ─────────────────────────────────────────────────────────────
    insights: {
      eyebrow: 'Insights',
      headline: 'Perspective on the law that shapes your decisions.',
      lead: 'Analysis and guidance from our practice groups on the developments most relevant to our clients.',
      readMore: 'Read the analysis',
      minRead: 'min read',
      defaultFeaturedTitle: 'What the new merger-review thresholds mean for mid-market acquisitions',
      defaultFeaturedExcerpt: 'Recent changes to regulatory review are reshaping deal timelines. We break down the practical implications for buyers, sellers, and their counsel.',
      defaultCategory: 'Business Law',
      defaultDate: 'June 12, 2026',
      defaultReadTime: '8 min read',
    },

    // ── Awards ───────────────────────────────────────────────────────────────
    awards: {
      eyebrow: 'Recognition',
      headline: 'Acknowledged by the institutions that set the standard.',
      items: [
        { icon: 'Award', org: 'Chambers & Partners', yr: 'Band 1 · 2026' },
        { icon: 'Medal', org: 'The Legal 500', yr: 'Leading Firm' },
        { icon: 'Trophy', org: 'Best Lawyers', yr: 'Firm of the Year' },
        { icon: 'Star', org: 'Super Lawyers', yr: '2019–2026' },
        { icon: 'ShieldCheck', org: 'Martindale-Hubbell', yr: 'AV Preeminent' },
      ],
    },

    // ── CTA Band ─────────────────────────────────────────────────────────────
    cta: {
      eyebrow: 'Speak With Our Team',
      headline: 'Your matter deserves a considered response.',
      body: 'Request a confidential consultation. We will review your situation, outline your options, and recommend a clear path forward — with no obligation.',
      btnConsult: 'Request Consultation',
    },

    // ── Contact ──────────────────────────────────────────────────────────────
    contact: {
      eyebrow: 'Contact',
      headline: 'Begin with a conversation.',
      lead: 'Tell us about your matter and the best way to reach you. A member of our team will respond within one business day.',
      labelName: 'Full Name',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelArea: 'Practice Area',
      labelMessage: 'How can we help?',
      selectPlaceholder: 'Select area…',
      placeholderName: 'Jane Doe',
      placeholderEmail: 'jane@example.com',
      placeholderPhone: '(212) 555-0100',
      placeholderMessage: 'Briefly describe your matter…',
      submitBtn: 'Send Message',
      submittingBtn: 'Sending…',
      successTitle: 'Message received',
      successBody: "Thank you — we'll be in touch within one business day.",
      errorMsg: 'Something went wrong. Please try again.',
      required: '*',
      errNameRequired: 'Full name is required.',
      errNameMin: 'Name must be at least 2 characters.',
      errNameMax: 'Name must be 100 characters or fewer.',
      errEmailRequired: 'Email address is required.',
      errEmailPattern: 'Please enter a valid email address.',
      errPhonePattern: 'Please enter a valid phone number.',
      errMessageRequired: 'Please describe your matter.',
      areas: [
        { label: 'Corporate & Commercial', value: 'corporate-commercial' },
        { label: 'Banking & Finance', value: 'banking-finance' },
        { label: 'Mergers & Acquisitions', value: 'mergers-acquisitions' },
        { label: 'Foreign Investment', value: 'foreign-investment' },
        { label: 'Capital Markets', value: 'capital-markets' },
        { label: 'Tax', value: 'tax' },
        { label: 'Labour & Employment', value: 'labour-employment' },
        { label: 'Intellectual Property', value: 'intellectual-property' },
        { label: 'Real Estate', value: 'real-estate' },
        { label: 'Competition Law', value: 'competition-law' },
        { label: 'Insolvency & Restructuring', value: 'insolvency-restructuring' },
        { label: 'Dispute Resolution', value: 'dispute-resolution' },
        { label: 'International Arbitration', value: 'international-arbitration' },
        { label: 'Regulatory Compliance', value: 'regulatory-compliance' },
        { label: 'Company Secretarial', value: 'company-secretarial' },
        { label: 'Environmental Law', value: 'environmental-law' },
        { label: 'Energy & Infrastructure', value: 'energy-infrastructure' },
        { label: 'IT & Data Privacy', value: 'it-data-privacy' },
        { label: 'Other', value: 'other' },
      ],
      addressLabel: 'Office',
      phoneLabel: 'Direct Line',
      emailLabel: 'Email',
      hoursLabel: 'Hours',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NEPALI TRANSLATIONS
  // ═══════════════════════════════════════════════════════════════════════════

  ne: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    nav: {
      firmName: 'लॉ एसोसिएट्स',
      firmNameBold: 'लॉ',
      firmNameWord: 'एसोसिएट्स',
      links: [
        { href: '#practice',     label: 'सेवा क्षेत्रहरू' },
        { href: '#services',     label: 'सेवाहरू' },
        { href: '#jurisdiction', label: 'अधिकार क्षेत्र' },
        { href: '#attorneys',    label: 'वकिलहरू' },
        { href: '#about',        label: 'हाम्रोबारे' },
        { href: '#results',      label: 'मुद्दाका नतिजाहरू' },
        { href: '#insights',     label: 'विश्लेषण' },
        { href: '#contact',      label: 'सम्पर्क' },
      ],
      bookBtn: 'परामर्श बुक गर्नुहोस्',
      langLabel: 'Switch to English',
      langToggle: 'EN',
    },

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      eyebrow: 'अरेलियस कानूनी साझेदारहरू · स्थापित १९९८',
      headline: 'तपाईंको भविष्य निर्धारण गर्ने विषयहरूमा रणनीतिक परामर्श।',
      headlineEmphasis: 'निर्धारण',
      lead: 'जटिल कर्पोरेट लेनदेनदेखि उच्च-दाँवको मुद्दासम्म, हामी २५ वर्षको अदालत र बोर्डरूम अनुभवमा आधारित स्पष्ट परामर्श प्रदान गर्दछौं।',
      ctaPrimary: 'परामर्श तालिका बनाउनुहोस्',
      ctaSecondary: 'सेवा क्षेत्रहरू हेर्नुहोस्',
      statSatisfaction: '९८%',
      statRecovered: '$२.४ अर्ब',
      statYears: '२५+',
      statCases: '१,२००+',
      statSatisfactionLabel: 'प्रतिनिधित्वमा ग्राहक सन्तुष्टि',
      statYearsLabel: 'अभ्यासका वर्षहरू',
      statCasesLabel: 'समाधान भएका मामलाहरू',
      statRecoveredLabel: 'पुनः प्राप्त र सुरक्षित',
    },

    // ── Statistics ───────────────────────────────────────────────────────────
    stats: {
      yearsLabel: 'संयुक्त उत्कृष्टताका वर्षहरू',
      casesLabel: 'सफलतापूर्वक समाधान भएका मुद्दाहरू',
      attorneysLabel: 'लाइसेन्स प्राप्त वकिल र परामर्शदाताहरू',
      satisfactionLabel: 'ग्राहक सन्तुष्टि मूल्याङ्कन',
    },

    // ── Practice Areas (18 departments, NE) ──────────────────────────────────
    practice: {
      eyebrow: 'सेवा क्षेत्रहरू',
      headline: 'सबैभन्दा महत्त्वपूर्ण विधाहरूमा गहन विशेषज्ञता।',
      lead: 'हाम्रा अभ्यास समूहहरू नेपाली र सीमापार कर्पोरेट कानूनमा दशकौंको केन्द्रित अनुभव भएका साझेदारहरूले नेतृत्व गर्छन्।',
      cta: 'आफ्नो विषय छलफल गर्नुहोस्',
      items: [
        { idx: '०१', title: 'कर्पोरेट र वाणिज्य', desc: 'कम्पनी गठन, शासन, सेयरधारक सम्झौता र व्यापारिक अनुबन्धहरू।' },
        { idx: '०२', title: 'बैंकिङ र वित्त', desc: 'ऋण कागजात, सुरक्षा व्यवस्थापन र बैंक तथा वित्तीय संस्थाको नियामक अनुपालन।' },
        { idx: '०३', title: 'विलय र अधिग्रहण', desc: 'घरेलु र सीमापार अधिग्रहण, विलय र कर्पोरेट पुनर्संरचनाको लागि पूर्ण लेनदेन समर्थन।' },
        { idx: '०४', title: 'विदेशी लगानी', desc: 'FITTA अनुमोदन, संयुक्त उद्यम संरचना र विदेशी प्रत्यक्ष लगानीको नियामक अनुपालन।' },
        { idx: '०५', title: 'पूँजी बजार', desc: 'धितोपत्र निर्गमन, शेयर बजार सूचीकरण र SEBON नियमको अनुपालन।' },
        { idx: '०६', title: 'कर', desc: 'कर योजना, संरचना र आन्तरिक राजस्व विभाग तथा पुनरावेदन निकायहरूसमक्ष प्रतिनिधित्व।' },
        { idx: '०७', title: 'श्रम र रोजगार', desc: 'रोजगार अनुबन्ध, कार्यबल अनुपालन, सामूहिक सौदाबाजी र श्रम विवाद समाधान।' },
        { idx: '०८', title: 'बौद्धिक सम्पत्ति', desc: 'उद्योग विभाग र अदालतसमक्ष ट्रेडमार्क, पेटेन्ट र प्रतिलिपि अधिकार दर्ता र प्रवर्तन।' },
        { idx: '०९', title: 'घर-जग्गा', desc: 'जग्गा खरिद, विकास सम्झौता, स्वामित्व लेखापरीक्षण र सम्पत्ति लेनदेनको नियामक अनुमोदन।' },
        { idx: '१०', title: 'प्रतिस्पर्धा कानून', desc: 'बजार प्रभुत्व, प्रतिस्पर्धाविरोधी व्यवहार र प्रतिस्पर्धा प्रवर्धन तथा बजार संरक्षण ऐन अनुपालन।' },
        { idx: '११', title: 'दामासाही र पुनर्संरचना', desc: 'कर्पोरेट दामासाही कार्यवाही, ऋण पुनर्संरचना र दामासाही अदालतसमक्ष प्रतिनिधित्व।' },
        { idx: '१२', title: 'विवाद समाधान', desc: 'व्यावसायिक मुकदमा, मध्यस्थता र नेपालको अदालत तथा अर्ध-न्यायिक निकायहरूसमक्ष वकालत।' },
        { idx: '१३', title: 'अन्तर्राष्ट्रिय मध्यस्थता', desc: 'ICC, SIAC, LCIA र HKIAC कार्यवाहीमा प्रतिनिधित्व; मध्यस्थता खण्ड मस्यौदा र फैसला कार्यान्वयन।' },
        { idx: '१४', title: 'नियामक अनुपालन', desc: 'कानूनी अनुपालन कार्यक्रम, नियामक लेखापरीक्षण र क्षेत्र-विशिष्ट नियामकहरूसँग सम्पर्क।' },
        { idx: '१५', title: 'कम्पनी सचिवालय सेवाहरू', desc: 'वार्षिक दाखिला, बोर्ड प्रस्ताव, साधारण सभा व्यवस्थापन र OCR अनुपालन।' },
        { idx: '१६', title: 'वातावरण कानून', desc: 'वातावरणीय प्रभाव मूल्याङ्कन अनुमोदन, अनुपालन कार्यक्रम र वातावरण विभागसमक्ष प्रतिनिधित्व।' },
        { idx: '१७', title: 'ऊर्जा र पूर्वाधार', desc: 'जलविद्युत, नवीकरणीय ऊर्जा र पूर्वाधार परियोजनाको विकास सम्झौता र नियामक अनुमोदन।' },
        { idx: '१८', title: 'IT र डाटा गोपनीयता', desc: 'प्रविधि अनुबन्ध, डाटा सुरक्षा अनुपालन र डिजिटल व्यवसायहरूको नियामक परामर्श।' },
      ],
    },

    // ── Firm Services (20 items, NE) ──────────────────────────────────────────
    services: {
      eyebrow: 'हामी के गर्छौं',
      headline: 'हाम्रो कानूनी कामको पूर्ण दायरा।',
      lead: 'कम्पनीको पहिलो दर्तादेखि अन्तिम पुनर्संरचनासम्म, हाम्रो टिमले नेपालमा व्यवसायको कानूनी जीवनको हरेक चरणलाई समेट्छ।',
      items: [
        { title: 'कम्पनी निगमन र दर्ता', desc: 'कम्पनी ऐन २०६३ अन्तर्गत OCR दाखिलासहित पूर्ण कम्पनी गठन।' },
        { title: 'MOA र AOA मस्यौदा', desc: 'तपाईंको व्यवसाय मोडेल अनुरूप प्रज्ञापत्र र नियमावली मस्यौदा र समीक्षा।' },
        { title: 'बोर्ड र सेयरधारक परामर्श', desc: 'नेपाली कानून अन्तर्गत शासन, कर्तव्य र अधिकारमा सञ्चालक समिति र सेयरधारकहरूलाई परामर्श।' },
        { title: 'बोर्ड बैठक र साधारण सभा', desc: 'सूचना र कोरम आवश्यकतासहित बोर्ड बैठक र साधारण सभाको पूर्ण व्यवस्थापन।' },
        { title: 'बोर्ड प्रस्ताव र बैठक मिनेट', desc: 'सबै कर्पोरेट निर्णयका लागि कानूनी रूपमा अनुपालित बोर्ड प्रस्ताव र सटीक बैठक मिनेट तयारी।' },
        { title: 'वाणिज्य सम्झौता मस्यौदा र समीक्षा', desc: 'व्यावसायिक अनुबन्ध, NDA, आपूर्ति सम्झौता र सबै व्यापार-महत्त्वपूर्ण कागजातहरू।' },
        { title: 'कानूनी उचित परिश्रम', desc: 'विभिन्न क्षेत्रमा लगानी, अधिग्रहण र परियोजना वित्तपोषणको लागि व्यापक कानूनी उचित परिश्रम।' },
        { title: 'विलय, अधिग्रहण र पुनर्संरचना', desc: 'घरेलु र सीमापार M&A, विभाजन र कर्पोरेट पुनर्गठनको लागि पूर्ण लेनदेन परामर्श।' },
        { title: 'विदेशी लगानी अनुमोदन (FITTA)', desc: 'विदेशी लगानीका सबै श्रेणीको लागि उद्योग विभाग र नेपाल राष्ट्र बैंकको अनुमोदन।' },
        { title: 'ट्रेडमार्क र IP दर्ता', desc: 'उद्योग विभाग र अदालतसमक्ष ट्रेडमार्क, पेटेन्ट र प्रतिलिपि अधिकार दर्ता।' },
        { title: 'श्रम र रोजगार परामर्श', desc: 'रोजगार नीति मस्यौदा, श्रम ऐन अनुपालन र श्रम न्यायालयसमक्ष प्रतिनिधित्व।' },
        { title: 'कर योजना र विवाद समाधान', desc: 'कर संरचना परामर्श र आन्तरिक राजस्व विभाग तथा राजस्व न्यायाधिकरणसमक्ष प्रतिनिधित्व।' },
        { title: 'ऋण र सुरक्षा कागजात', desc: 'सबै ऋण सम्झौता, धितो विलेख, प्रतिज्ञा कागजात र सुरक्षा सृजना औपचारिकता।' },
        { title: 'धितोपत्र र पूँजी बजार अनुपालन', desc: 'धितोपत्र ऐन अनुपालन, SEBON दाखिला र सूचीकृत कम्पनीहरूको सार्वजनिक निर्गमन प्रक्रिया।' },
        { title: 'नियामक प्रतिनिधित्व', desc: 'OCR, NRB, SEBON, DOI र अन्य नियामक तथा अर्ध-न्यायिक निकायहरूसमक्ष प्रतिनिधित्व।' },
        { title: 'कानूनी लेखापरीक्षण र अनुपालन समीक्षा', desc: 'लिखित प्रतिवेदन र सिफारिससहित कम्पनीको कानूनी र नियामक अनुपालन स्थितिको आवधिक लेखापरीक्षण।' },
        { title: 'कर्पोरेट शासन र सञ्चालकको कर्तव्य', desc: 'कर्पोरेट शासन उत्कृष्ट अभ्यास र कम्पनी ऐन अन्तर्गत सञ्चालकको न्यासी कर्तव्यमा परामर्श।' },
        { title: 'मध्यस्थता र वाणिज्य मुकदमा', desc: 'घरेलु मध्यस्थता कार्यवाही र नेपालको अदालतसमक्ष वाणिज्य मुकदमामा प्रतिनिधित्व।' },
        { title: 'कम्पनी खारेजी र दामासाही', desc: 'स्वैच्छिक र अनिवार्य खारेजी व्यवस्थापन र दामासाही कार्यवाहीमा लेनदार र ऋणीको प्रतिनिधित्व।' },
        { title: 'चलिरहने कानूनी रिटेनरशिप', desc: 'चलिरहने कानूनी परामर्श, अनुपालन अनुगमन र कागजात व्यवस्थापन प्रदान गर्ने व्यापक रिटेनर व्यवस्था।' },
      ],
    },

    // ── Jurisdiction (NE) ─────────────────────────────────────────────────────
    jurisdiction: {
      eyebrow: 'अधिकार क्षेत्र र दायरा',
      headline: 'हामी कहाँ अभ्यास गर्छौं र कसरी पहुँच राख्छौं।',
      lead: 'हाम्रो अभ्यास नेपालका अदालत र नियामक निकायहरू, सीमापार परामर्श कार्य र अन्तर्राष्ट्रिय मध्यस्थतामा फैलिएको छ।',
      blocks: [
        {
          heading: 'घरेलु (नेपाल)',
          icon: 'Scale',
          description: 'हामी नेपालको संविधान, कम्पनी ऐन २०६३, श्रम ऐन २०७४, FITTA २०७५ र धितोपत्र ऐन २०६३ अन्तर्गत नेपाली न्यायपालिका र नियामक निकायहरूसमक्ष परामर्श र प्रतिनिधित्व गर्दछौं।',
          points: [
            'नेपालको सर्वोच्च अदालत',
            'नेपालका उच्च अदालतहरू',
            'नेपालका जिल्ला अदालतहरू',
            'कम्पनी रजिस्ट्रारको कार्यालय (OCR)',
            'उद्योग विभाग (DOI)',
            'नेपाल राष्ट्र बैंक (NRB)',
            'नेपाल धितोपत्र बोर्ड (SEBON)',
            'राजस्व अनुसन्धान विभाग',
            'श्रम अदालत र पुनरावेदन निकायहरू',
          ],
        },
        {
          heading: 'अन्तर्राष्ट्रिय र सीमापार',
          icon: 'Globe',
          description: 'हामी नेपाली र विदेशी ग्राहकहरूलाई सीमापार लेनदेन र अन्तर्राष्ट्रिय व्यापार कानूनमा परामर्श दिन्छौं।',
          points: [
            'विदेशी प्रत्यक्ष लगानी (FDI) संरचना',
            'अन्तर्राष्ट्रिय वाणिज्य अनुबन्धहरू',
            'संयुक्त उद्यम सम्झौताहरू',
            'सीमापार विलय र अधिग्रहण',
            'अन्तर्राष्ट्रिय कर परामर्श',
            'अन्तर्राष्ट्रिय व्यापार कानून',
            'परियोजना वित्त',
            'सीमापार बैंकिङ लेनदेन',
          ],
        },
        {
          heading: 'अन्तर्राष्ट्रिय मध्यस्थता',
          icon: 'Gavel',
          description: 'हामी मध्यस्थता खण्ड मस्यौदा गर्छौं, आसन छनोटमा परामर्श दिन्छौं र प्रमुख अन्तर्राष्ट्रिय मध्यस्थता संस्थाहरूसमक्ष ग्राहकहरूको प्रतिनिधित्व गर्छौं।',
          points: [
            'अन्तर्राष्ट्रिय वाणिज्य चेम्बर (ICC)',
            'सिंगापुर अन्तर्राष्ट्रिय मध्यस्थता केन्द्र (SIAC)',
            'लन्डन अन्तर्राष्ट्रिय मध्यस्थता अदालत (LCIA)',
            'हङकङ अन्तर्राष्ट्रिय मध्यस्थता केन्द्र (HKIAC)',
            'UNCITRAL नियम अन्तर्गत तदर्थ मध्यस्थता',
          ],
        },
        {
          heading: 'कर्पोरेट नियामक',
          icon: 'Building2',
          description: 'कर्पोरेट वकिलहरूले ग्राहकहरूलाई नेपालको नियामक परिदृश्यमा नेविगेट गर्न सहयोग गर्छन् — कम्पनी दर्तादेखि क्षेत्र-विशिष्ट अनुमोदनसम्म।',
          points: [
            'कम्पनी दर्ता र खारेजी',
            'धितोपत्र नियमन र SEBON दाखिला',
            'बैंकिङ र वित्तीय संस्था नियमन',
            'बीमा क्षेत्र नियमन',
            'प्रतिस्पर्धा र उपभोक्ता संरक्षण कानून',
            'दूरसञ्चार नियमन',
            'ऊर्जा र पूर्वाधार अनुमोदन',
          ],
        },
      ],
    },

    // ── Why Us (13 criteria, NE) ──────────────────────────────────────────────
    whyUs: {
      eyebrow: 'हामीलाई किन छान्ने',
      headline: 'नेपाली कर्पोरेट कानून फर्मलाई जाँच्ने मानकहरू।',
      quote: 'हामी केवल सल्लाह दिँदैनौं — हामी तपाईंको छेउमा उभिन्छौं, मामलाले जति माग्छ त्यति अघि जान तयार छौं।',
      quoteCite: '— व्यवस्थापन साझेदार',
      items: [
        { icon: 'Scale',          title: 'कानूनी विशेषज्ञता',       desc: 'नेपाल र सीमापार दुवैमा कम्पनी, वाणिज्य, कर, बैंकिङ, श्रम, लगानी र नियामक कानूनको व्यापक ज्ञान।' },
        { icon: 'GraduationCap',  title: 'व्यावसायिक योग्यता',     desc: 'हाम्रा सबै वकिलहरू नेपाल बार एसोसिएसनका सदस्य र अभ्यास गर्न लाइसेन्स प्राप्त छन्।' },
        { icon: 'Briefcase',      title: 'अनुभव',                   desc: 'नेपालमा जटिल कर्पोरेट लेनदेन, उच्च-मूल्यका विवाद र नियामक मामिलाहरूमा दशकौंको अनुभव।' },
        { icon: 'Building2',      title: 'उद्योग ज्ञान',           desc: 'बैंकिङ, जलविद्युत, IT, निर्माण, उत्पादन, पर्यटन र दूरसञ्चारमा गहन क्षेत्र विशेषज्ञता।' },
        { icon: 'ClipboardCheck', title: 'अनुपालन क्षमता',         desc: 'संरचित अनुपालन कार्यक्रम, कानूनी लेखापरीक्षण र व्यापारलाई सधैं अनुपालित राख्ने चलिरहने परामर्श।' },
        { icon: 'FileText',       title: 'मस्यौदा सीप',            desc: 'अनुबन्ध, कानूनी राय, बोर्ड प्रस्ताव, सेयरधारक सम्झौता र सबै लेनदेन कागजातहरूको सटीक मस्यौदा।' },
        { icon: 'Handshake',      title: 'वार्ता सीप',             desc: 'तपाईंको हितको रक्षा गर्दै व्यावसायिक लेनदेन बन्द गर्ने अनुभवी वार्ताकारहरू।' },
        { icon: 'Gavel',          title: 'विवाद समाधान',           desc: 'मुकदमा, मध्यस्थता र घरेलु तथा अन्तर्राष्ट्रिय मध्यस्थता कार्यवाहीमा प्रमाणित वकालत।' },
        { icon: 'Search',         title: 'उचित परिश्रम',           desc: 'सबै क्षेत्रमा अधिग्रहण, लगानी, परियोजना वित्तपोषण र संयुक्त उद्यमको लागि गहन कानूनी उचित परिश्रम।' },
        { icon: 'Lock',           title: 'गोपनीयता',               desc: 'व्यावसायिक आचार नैतिकता र कानूनी विशेषाधिकारद्वारा हरेक चरणमा ग्राहक जानकारी सुरक्षित।' },
        { icon: 'ShieldCheck',    title: 'नैतिकता र स्वतन्त्रता', desc: 'व्यावसायिक आचार नियमहरूको पूर्ण अनुपालन र सबै संलग्नतामा हितको द्वन्द्वको कठोर व्यवस्थापन।' },
        { icon: 'Laptop2',        title: 'प्रविधि',                desc: 'कुशल र विश्वसनीय सेवाको लागि सुरक्षित कागजात व्यवस्थापन, डिजिटल अनुसन्धान उपकरण र इलेक्ट्रोनिक मुद्दा व्यवस्थापन।' },
        { icon: 'Globe',          title: 'अन्तर्राष्ट्रिय नेटवर्क', desc: 'निर्बाध सीमापार मामिला र अन्तर्राष्ट्रिय लेनदेनको लागि विदेशी कानून फर्महरू र सल्लाहकारहरूसँग स्थापित सम्बन्धहरू।' },
      ],
    },

    // ── Attorneys ────────────────────────────────────────────────────────────
    attorneys: {
      eyebrow: 'व्यक्तिहरू',
      headline: 'तपाईंले नामले चिन्ने परामर्श।',
      lead: 'हाम्रा साझेदारहरूले दशकौंको केन्द्रित अनुभव र प्रत्येक ग्राहकलाई आफ्नै मामलाझैं प्रतिनिधित्व गर्ने साझा प्रतिबद्धता ल्याउँछन्।',
      yrsExperience: 'वर्ष अनुभव',
      meetAll: 'सबै १५ वकिलहरूलाई भेट्नुहोस्',
      items: [
        { name: 'एलेनर एशफोर्ड-भ्यान्स', role: 'व्यवस्थापन साझेदार', spec: 'कर्पोरेट र विलय · शासन', years: '२४' },
        { name: 'मार्कस जे. होलोवे', role: 'साझेदार · मुकदमा', spec: 'व्यावसायिक र नागरिक विवाद', years: '१९' },
        { name: 'प्रिया नायर क्यासटेलानोस', role: 'साझेदार · निजी ग्राहक', spec: 'सम्पत्ति, परिवार र सम्पद', years: '१७' },
        { name: 'राजेश कुमार शर्मा', role: 'साझेदार · बैंकिङ र वित्त', spec: 'बैंकिङ, वित्त र धितोपत्र', years: '२१' },
        { name: 'सुनिता आचार्य', role: 'साझेदार · कर', spec: 'कर योजना र राजस्व', years: '१६' },
        { name: 'मीरा प्रधान', role: 'साझेदार · विदेशी लगानी', spec: 'विदेशी लगानी र सीमापार M&A', years: '१८' },
        { name: 'दिपेन्द्र सिंह राई', role: 'साझेदार · ऊर्जा र पूर्वाधार', spec: 'ऊर्जा, जलविद्युत र पूर्वाधार', years: '२०' },
        { name: 'विकास बहादुर थापा', role: 'वरिष्ठ सहयोगी · श्रम', spec: 'श्रम, रोजगार र औद्योगिक सम्बन्ध', years: '१२' },
        { name: 'सुरेश मल्ल', role: 'वरिष्ठ सहयोगी · विवाद', spec: 'विवाद समाधान र मध्यस्थता', years: '१४' },
        { name: 'अनिता कार्की', role: 'सहयोगी · कर्पोरेट', spec: 'कर्पोरेट, वाणिज्य र अनुपालन', years: '८' },
      ],
    },

    // ── Case Results ─────────────────────────────────────────────────────────
    caseResults: {
      eyebrow: 'प्रतिनिधि विषयहरू',
      headline: 'काममा बोल्ने नतिजाहरू।',
      disclaimer: 'देखाइएका नतिजाहरू विगतका संलग्नताहरूको उदाहरण मात्र हुन्। विगतका नतिजाहरूले भविष्यका नतिजाहरूको ग्यारेन्टी गर्दैनन्।',
      items: [
        { cat: 'नागरिक मुकदमा', amt: '$२.५ करोड', desc: 'बहु-वर्षीय विवादमा व्यक्तिगत ग्राहकको तर्फबाट ऐतिहासिक बन्दोबस्त सुनिश्चित गरियो।', meta: 'बन्दोबस्त · राज्य सर्वोच्च अदालत' },
        { cat: 'कर्पोरेट / विलय-अधिग्रहण', amt: '$३४ करोड', desc: 'सीमापार अधिग्रहणमा प्रमुख परामर्शदाता, दुई अधिकार क्षेत्रमा नियामक स्वीकृति प्राप्त।', meta: 'बन्द · सीमापार' },
        { cat: 'व्यावसायिक परीक्षण', amt: 'बचाउ फैसला', desc: 'उच्च-प्रोफाइल व्यावसायिक मामलामा परीक्षणमा विजय प्राप्त गरियो।', meta: 'फैसला · संघीय अदालत' },
      ],
    },

    // ── Testimonials ─────────────────────────────────────────────────────────
    testimonials: {
      eyebrow: 'ग्राहकका आवाजहरू',
      headline: 'सबैभन्दा धेरै सुरक्षित गर्नेहरूले विश्वास गरेको।',
      items: [
        { quote: 'लॉ एसोसिएट्सले हाम्रो अधिग्रहणलाई कम्पनी आफ्नै जस्तो व्यवहार गर्यो। दबाबमा तिनीहरूको निर्णय सम्झौता र विनाशको बीचको फरक थियो।', name: 'डेनियल आर. व्हिटफिल्ड', role: 'सीईओ · कर्पोरेट अधिग्रहण', initial: 'ड' },
        { quote: 'मैले कहिल्यै केस नम्बर जस्तो महसुस गरिनँ। तिनीहरूले हरेक विकल्प सरल भाषामा बुझाए र मैले चाहेको नतिजाका लागि लडे।', name: 'सोफिया लिन्ड्क्विस्ट', role: 'निजी ग्राहक · पारिवारिक विषय', initial: 'स' },
        { quote: 'विवेकशील, निर्णायक र निरन्तर तयार। जब दाँव सबैभन्दा उच्च थियो, लॉ एसोसिएट्स ठीक त्यही परामर्श थियो जुन हामी आशा गरेका थियौं।', name: 'मार्कस बेलवेदर', role: 'बोर्ड अध्यक्ष · मुकदमा', initial: 'म' },
      ],
    },

    // ── Process ──────────────────────────────────────────────────────────────
    process: {
      eyebrow: 'हामी कसरी काम गर्छौं',
      headline: 'पहिलो कलदेखि समाधानसम्म स्पष्ट मार्ग।',
      steps: [
        { num: '१', title: 'प्रारम्भिक परामर्श', desc: 'हामी गोपनीय सत्रमा तपाईंको स्थिति ध्यानपूर्वक सुन्छौं र तपाईंको कानूनी अवस्था इमानदारीसाथ मूल्याङ्कन गर्छौं।' },
        { num: '२', title: 'मामला विश्लेषण', desc: 'हाम्रो टिमले सल्लाह दिनुअघि सम्पूर्ण तस्वीर बनाउन सबै कागजात, उदाहरण र जोखिम कारकहरू समीक्षा गर्छ।' },
        { num: '३', title: 'रणनीति विकास', desc: 'हामी तपाईंको लक्ष्य, समयरेखा र जोखिम सहनशीलतासँग मिल्ने अनुकूलित कानूनी रणनीति तयार पार्छौं।' },
        { num: '४', title: 'सक्रिय प्रतिनिधित्व', desc: 'हाम्रा वकिलहरू वार्ता, सुनुवाइ वा पूर्ण परीक्षणमा तपाईंको तर्फबाट सटीकता र दृढतासाथ वकालत गर्छन्।' },
        { num: '५', title: 'समाधान र अनुगमन', desc: 'हामी प्रत्येक मामला टिकाउ नतिजासम्म पुर्‍याउँछौं र तपाईंको परिस्थिति परिवर्तन हुँदा उपलब्ध रहन्छौं।' },
      ],
    },

    // ── Insights ─────────────────────────────────────────────────────────────
    insights: {
      eyebrow: 'विश्लेषण',
      headline: 'तपाईंका निर्णयहरू आकार दिने कानूनमा दृष्टिकोण।',
      lead: 'हाम्रा ग्राहकहरूका लागि सबैभन्दा सान्दर्भिक विकासहरूमा हाम्रा अभ्यास समूहहरूको विश्लेषण र मार्गदर्शन।',
      readMore: 'विश्लेषण पढ्नुहोस्',
      minRead: 'मिनेट पढाइ',
      defaultFeaturedTitle: 'नयाँ विलय-समीक्षा सीमाहरूले मध्यम-बजार अधिग्रहणका लागि के अर्थ राख्छन्',
      defaultFeaturedExcerpt: 'नियामक समीक्षामा भएका हालका परिवर्तनहरूले सम्झौता समयरेखाहरू पुनः आकार दिइरहेका छन्।',
      defaultCategory: 'व्यापार कानून',
      defaultDate: 'जुन १२, २०२६',
      defaultReadTime: '८ मिनेट पढाइ',
    },

    // ── Awards ───────────────────────────────────────────────────────────────
    awards: {
      eyebrow: 'मान्यता',
      headline: 'मानक स्थापित गर्ने संस्थाहरूद्वारा मान्यता प्राप्त।',
      items: [
        { icon: 'Award', org: 'च्याम्बर्स एन्ड पार्टनर्स', yr: 'ब्यान्ड १ · २०२६' },
        { icon: 'Medal', org: 'द लिगल ५००', yr: 'अग्रणी फर्म' },
        { icon: 'Trophy', org: 'बेस्ट लयर्स', yr: 'वर्षको फर्म' },
        { icon: 'Star', org: 'सुपर लयर्स', yr: '२०१९–२०२६' },
        { icon: 'ShieldCheck', org: 'मार्टिनडेल-हबेल', yr: 'एभि प्रिमिनेन्ट' },
      ],
    },

    // ── CTA Band ─────────────────────────────────────────────────────────────
    cta: {
      eyebrow: 'हाम्रो टिमसँग कुरा गर्नुहोस्',
      headline: 'तपाईंको विषयले विचारशील प्रतिक्रिया पाउन योग्य छ।',
      body: 'गोपनीय परामर्शको अनुरोध गर्नुहोस्। हामी तपाईंको स्थिति समीक्षा गर्नेछौं, तपाईंका विकल्पहरू रूपरेखा बनाउनेछौं र स्पष्ट मार्ग सिफारिस गर्नेछौं — कुनै बाध्यता बिना।',
      btnConsult: 'परामर्शको अनुरोध गर्नुहोस्',
    },

    // ── Contact ──────────────────────────────────────────────────────────────
    contact: {
      eyebrow: 'सम्पर्क',
      headline: 'कुराकानीबाट सुरुवात गर्नुहोस्।',
      lead: 'तपाईंको विषय र तपाईंलाई सम्पर्क गर्ने सबैभन्दा राम्रो तरिका हामीलाई बताउनुहोस्। हाम्रो टिमको एक सदस्यले एक कार्य दिनभित्र जवाफ दिनेछन्।',
      labelName: 'पूरा नाम',
      labelEmail: 'इमेल',
      labelPhone: 'फोन',
      labelArea: 'सेवा क्षेत्र',
      labelMessage: 'हामी कसरी मद्दत गर्न सक्छौं?',
      selectPlaceholder: 'क्षेत्र छान्नुहोस्…',
      placeholderName: 'जन डो',
      placeholderEmail: 'jane@example.com',
      placeholderPhone: '(+९७७) ९८०-०००-०००',
      placeholderMessage: 'आफ्नो विषयको संक्षिप्त वर्णन गर्नुहोस्…',
      submitBtn: 'सन्देश पठाउनुहोस्',
      submittingBtn: 'पठाइँदैछ…',
      successTitle: 'सन्देश प्राप्त भयो',
      successBody: 'धन्यवाद — हामी एक कार्य दिनभित्र सम्पर्क गर्नेछौं।',
      errorMsg: 'केही समस्या भयो। कृपया पुनः प्रयास गर्नुहोस्।',
      required: '*',
      errNameRequired: 'पूरा नाम आवश्यक छ।',
      errNameMin: 'नाम कम्तिमा २ अक्षरको हुनुपर्छ।',
      errNameMax: 'नाम १०० अक्षर वा कम हुनुपर्छ।',
      errEmailRequired: 'इमेल ठेगाना आवश्यक छ।',
      errEmailPattern: 'कृपया वैध इमेल ठेगाना प्रविष्ट गर्नुहोस्।',
      errPhonePattern: 'कृपया वैध फोन नम्बर प्रविष्ट गर्नुहोस्।',
      errMessageRequired: 'कृपया आफ्नो विषय वर्णन गर्नुहोस्।',
      areas: [
        { label: 'कर्पोरेट र वाणिज्य', value: 'corporate-commercial' },
        { label: 'बैंकिङ र वित्त', value: 'banking-finance' },
        { label: 'विलय र अधिग्रहण', value: 'mergers-acquisitions' },
        { label: 'विदेशी लगानी', value: 'foreign-investment' },
        { label: 'पूँजी बजार', value: 'capital-markets' },
        { label: 'कर', value: 'tax' },
        { label: 'श्रम र रोजगार', value: 'labour-employment' },
        { label: 'बौद्धिक सम्पत्ति', value: 'intellectual-property' },
        { label: 'घर-जग्गा', value: 'real-estate' },
        { label: 'प्रतिस्पर्धा कानून', value: 'competition-law' },
        { label: 'दामासाही र पुनर्संरचना', value: 'insolvency-restructuring' },
        { label: 'विवाद समाधान', value: 'dispute-resolution' },
        { label: 'अन्तर्राष्ट्रिय मध्यस्थता', value: 'international-arbitration' },
        { label: 'नियामक अनुपालन', value: 'regulatory-compliance' },
        { label: 'कम्पनी सचिवालय', value: 'company-secretarial' },
        { label: 'वातावरण कानून', value: 'environmental-law' },
        { label: 'ऊर्जा र पूर्वाधार', value: 'energy-infrastructure' },
        { label: 'IT र डाटा गोपनीयता', value: 'it-data-privacy' },
        { label: 'अन्य', value: 'other' },
      ],
      addressLabel: 'कार्यालय',
      phoneLabel: 'प्रत्यक्ष लाइन',
      emailLabel: 'इमेल',
      hoursLabel: 'समय',
    },
  },
} as const

export type Translations = typeof translations['en']

export function getTranslations(lang: Lang): Translations {
  return translations[lang] as unknown as Translations
}
