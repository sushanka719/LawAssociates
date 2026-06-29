export type Lang = 'en' | 'ne'

export const translations = {
  en: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    nav: {
      firmName: 'Law Associates',
      firmNameBold: 'Law',
      firmNameWord: 'Associates',
      links: [
        { href: '#practice', label: 'Practice Areas' },
        { href: '#attorneys', label: 'Attorneys' },
        { href: '#about', label: 'About' },
        { href: '#results', label: 'Case Results' },
        { href: '#insights', label: 'Insights' },
        { href: '#contact', label: 'Contact' },
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

    // ── Practice Areas ───────────────────────────────────────────────────────
    practice: {
      eyebrow: 'Practice Areas',
      headline: 'Depth across the disciplines that matter most.',
      lead: 'Our practice groups are led by partners with decades of focused experience — so the counsel you receive is senior, specialised, and coordinated across every dimension of your matter.',
      cta: 'Discuss Your Matter',
      items: [
        { idx: '01', title: 'Corporate & M&A', desc: 'Formation, governance, financings, and cross-border transactions for companies at every stage.' },
        { idx: '02', title: 'Litigation & Disputes', desc: 'Trial-tested advocacy in commercial, contractual, and high-stakes civil disputes.' },
        { idx: '03', title: 'Real Estate', desc: 'Acquisitions, development, leasing, and complex property and land-use counsel.' },
        { idx: '04', title: 'Employment & Labour', desc: 'Workforce strategy, executive agreements, investigations, and dispute resolution.' },
        { idx: '05', title: 'Private Client & Family', desc: 'Estate planning, wealth preservation, and sensitive family matters handled with discretion.' },
        { idx: '06', title: 'Intellectual Property', desc: 'Protection, licensing, and enforcement of the assets that drive enterprise value.' },
        { idx: '07', title: 'Immigration', desc: 'Business and family immigration, from talent mobility to complex visa strategy.' },
        { idx: '08', title: 'White-Collar Defense', desc: 'Discreet representation in investigations, regulatory enquiries, and enforcement actions.' },
      ],
    },

    // ── Why Us ───────────────────────────────────────────────────────────────
    whyUs: {
      eyebrow: 'Why Aurelius',
      headline: 'A standard of representation that institutions and individuals return to.',
      quote: 'We do not just advise — we stand beside you, prepared to go as far as the matter demands.',
      quoteCite: '— James Aurelius, Founding Partner',
      items: [
        { icon: 'Scale', title: 'Proven Courtroom Record', desc: 'Over 25 years our litigators have won landmark rulings across federal and state jurisdictions.' },
        { icon: 'Target', title: 'Precision Strategy', desc: 'Every matter receives a bespoke legal strategy — never templated, always calibrated to your specific facts.' },
        { icon: 'MessagesSquare', title: 'Transparent Communication', desc: 'Clear scope, candid assessments, and predictable billing — you always know where your matter stands.' },
        { icon: 'Award', title: 'Proven Results', desc: 'A two-decade record of favourable settlements, verdicts, and transactions across industries.' },
        { icon: 'Lock', title: 'Absolute Discretion', desc: 'Confidentiality is the foundation of our practice — protected at every stage and every level.' },
        { icon: 'Globe', title: 'Coordinated Reach', desc: 'A network of trusted counsel lets us serve clients across jurisdictions without losing a step.' },
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
        { label: 'Corporate & M&A', value: 'corporate-ma' },
        { label: 'Litigation & Disputes', value: 'litigation-disputes' },
        { label: 'Real Estate', value: 'real-estate' },
        { label: 'Employment & Labour', value: 'employment-labour' },
        { label: 'Private Client & Family', value: 'private-client-family' },
        { label: 'Intellectual Property', value: 'intellectual-property' },
        { label: 'Immigration', value: 'immigration' },
        { label: 'White-Collar Defense', value: 'white-collar-defense' },
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
        { href: '#practice', label: 'सेवा क्षेत्रहरू' },
        { href: '#attorneys', label: 'वकिलहरू' },
        { href: '#about', label: 'हाम्रोबारे' },
        { href: '#results', label: 'मुद्दाका नतिजाहरू' },
        { href: '#insights', label: 'विश्लेषण' },
        { href: '#contact', label: 'सम्पर्क' },
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

    // ── Practice Areas ───────────────────────────────────────────────────────
    practice: {
      eyebrow: 'सेवा क्षेत्रहरू',
      headline: 'सबैभन्दा महत्त्वपूर्ण विधाहरूमा गहन विशेषज्ञता।',
      lead: 'हाम्रा अभ्यास समूहहरू दशकौंको केन्द्रित अनुभव भएका साझेदारहरूले नेतृत्व गर्छन् — जसले गर्दा तपाईंले पाउने परामर्श वरिष्ठ, विशेषज्ञ र तपाईंको मामलाको हर पक्षमा समन्वित हुन्छ।',
      cta: 'आफ्नो विषय छलफल गर्नुहोस्',
      items: [
        { idx: '०१', title: 'कर्पोरेट र विलय-अधिग्रहण', desc: 'कम्पनीहरूको गठन, शासन, वित्तपोषण र सीमापार लेनदेन।' },
        { idx: '०२', title: 'मुकदमा र विवाद', desc: 'व्यावसायिक, सम्बिदात्मक र उच्च-दाँवका नागरिक विवादहरूमा अनुभवसिद्ध वकालत।' },
        { idx: '०३', title: 'घर-जग्गा', desc: 'खरिद, विकास, भाडा र जटिल सम्पत्ति तथा भूमि उपयोग परामर्श।' },
        { idx: '०४', title: 'रोजगार र श्रम', desc: 'कार्यबल रणनीति, कार्यकारी सम्झौता, अनुसन्धान र विवाद समाधान।' },
        { idx: '०५', title: 'निजी ग्राहक र परिवार', desc: 'सम्पत्ति योजना, सम्पद संरक्षण र संवेदनशील पारिवारिक विषयहरू विवेकसाथ सम्हालिन्छन्।' },
        { idx: '०६', title: 'बौद्धिक सम्पत्ति', desc: 'उद्यम मूल्य सिर्जना गर्ने सम्पत्तिहरूको संरक्षण, लाइसेन्स र प्रवर्तन।' },
        { idx: '०७', title: 'आप्रवासन', desc: 'व्यावसायिक र पारिवारिक आप्रवासन — प्रतिभा गतिशीलतादेखि जटिल भिसा रणनीतिसम्म।' },
        { idx: '०८', title: 'श्वेत-कालर बचाउ', desc: 'अनुसन्धान, नियामक जाँच र प्रवर्तन कार्यहरूमा विवेकशील प्रतिनिधित्व।' },
      ],
    },

    // ── Why Us ───────────────────────────────────────────────────────────────
    whyUs: {
      eyebrow: 'हामीलाई किन छान्ने',
      headline: 'संस्था र व्यक्तिहरू पुनः फर्कने प्रतिनिधित्वको मानक।',
      quote: 'हामी केवल सल्लाह दिँदैनौं — हामी तपाईंको छेउमा उभिन्छौं, मामलाले जति माग्छ त्यति अघि जान तयार छौं।',
      quoteCite: '— जेम्स अरेलियस, संस्थापक साझेदार',
      items: [
        { icon: 'Scale', title: 'प्रमाणित अदालत रेकर्ड', desc: '२५ वर्षभन्दा बढी समयमा हाम्रा मुकदमेबाजहरूले संघीय र राज्य अधिकार क्षेत्रमा ऐतिहासिक फैसलाहरू जितेका छन्।' },
        { icon: 'Target', title: 'सटीक रणनीति', desc: 'प्रत्येक मामलाले विशिष्ट कानूनी रणनीति पाउँछ — कहिल्यै ढाँचामा होइन, सधैं तपाईंको विशेष तथ्यअनुसार।' },
        { icon: 'MessagesSquare', title: 'पारदर्शी सञ्चार', desc: 'स्पष्ट दायरा, खुलाखुली मूल्याङ्कन र अनुमानित बिलिङ — तपाईं सधैं आफ्नो मामलाको स्थिति जान्नुहुन्छ।' },
        { icon: 'Award', title: 'प्रमाणित नतिजाहरू', desc: 'दुई दशकको अनुकूल बन्दोबस्त, फैसला र विभिन्न उद्योगहरूमा लेनदेनको रेकर्ड।' },
        { icon: 'Lock', title: 'पूर्ण गोपनीयता', desc: 'गोपनीयता हाम्रो अभ्यासको आधार हो — हरेक चरणमा र हरेक स्तरमा सुरक्षित।' },
        { icon: 'Globe', title: 'समन्वित पहुँच', desc: 'विश्वसनीय परामर्शदाताहरूको नेटवर्कले हामीलाई कदम नगुमाई अधिकार क्षेत्रहरूमा ग्राहकहरूलाई सेवा दिन सक्षम बनाउँछ।' },
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
        { label: 'कर्पोरेट र विलय-अधिग्रहण', value: 'corporate-ma' },
        { label: 'मुकदमा र विवाद', value: 'litigation-disputes' },
        { label: 'घर-जग्गा', value: 'real-estate' },
        { label: 'रोजगार र श्रम', value: 'employment-labour' },
        { label: 'निजी ग्राहक र परिवार', value: 'private-client-family' },
        { label: 'बौद्धिक सम्पत्ति', value: 'intellectual-property' },
        { label: 'आप्रवासन', value: 'immigration' },
        { label: 'श्वेत-कालर बचाउ', value: 'white-collar-defense' },
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
