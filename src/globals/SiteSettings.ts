import type { GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: anyone,
  },
  fields: [
    // ── Navigation labels ─────────────────────────────────────────────────────
    {
      name: 'navLabels',
      type: 'group',
      label: 'Navigation Labels',
      admin: { description: 'Translatable labels for the main navigation links' },
      fields: [
        { name: 'firmName', type: 'text', defaultValue: 'Law Associates', localized: true },
        { name: 'bookConsultation', type: 'text', defaultValue: 'Book Consultation', localized: true },
        { name: 'practiceAreas', type: 'text', defaultValue: 'Practice Areas', localized: true },
        { name: 'services', type: 'text', defaultValue: 'Services', localized: true },
        { name: 'jurisdiction', type: 'text', defaultValue: 'Jurisdiction', localized: true },
        { name: 'attorneys', type: 'text', defaultValue: 'Attorneys', localized: true },
        { name: 'about', type: 'text', defaultValue: 'About', localized: true },
        { name: 'caseResults', type: 'text', defaultValue: 'Case Results', localized: true },
        { name: 'insights', type: 'text', defaultValue: 'Insights', localized: true },
        { name: 'contact', type: 'text', defaultValue: 'Contact', localized: true },
      ],
    },
    // ── Hero ──────────────────────────────────────────────────────────────────
    {
      name: 'heroEyebrow',
      type: 'text',
      defaultValue: 'Aurelius Legal Partners · Est. 1998',
      localized: true,
    },
    {
      name: 'heroHeadline',
      type: 'text',
      defaultValue: 'Strategic counsel for the matters that define your future.',
      localized: true,
    },
    {
      name: 'heroHeadlineEmphasis',
      type: 'text',
      defaultValue: 'define',
      localized: true,
      admin: { description: 'Word in the headline to italicize' },
    },
    {
      name: 'heroLead',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'heroCtaPrimary',
      type: 'text',
      defaultValue: 'Schedule a Consultation',
      localized: true,
    },
    {
      name: 'heroCtaSecondary',
      type: 'text',
      defaultValue: 'Explore Practice Areas',
      localized: true,
    },
    {
      name: 'heroBgImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heroPortraitImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heroStatSatisfaction',
      type: 'text',
      defaultValue: '98%',
    },
    // ── Trust strip / firm statistics ────────────────────────────────────────
    {
      name: 'statYears',
      type: 'text',
      defaultValue: '20+',
    },
    {
      name: 'statYearsLabel',
      type: 'text',
      defaultValue: 'Years of combined excellence',
      localized: true,
    },
    {
      name: 'statCases',
      type: 'text',
      defaultValue: '500+',
    },
    {
      name: 'statCasesLabel',
      type: 'text',
      defaultValue: 'Cases successfully resolved',
      localized: true,
    },
    {
      name: 'statAttorneys',
      type: 'text',
      defaultValue: '15',
    },
    {
      name: 'statAttorneysLabel',
      type: 'text',
      defaultValue: 'Licensed attorneys & counsel',
      localized: true,
    },
    {
      name: 'statSatisfaction',
      type: 'text',
      defaultValue: '98%',
    },
    {
      name: 'statSatisfactionLabel',
      type: 'text',
      defaultValue: 'Client satisfaction rating',
      localized: true,
    },
    {
      name: 'statRecovered',
      type: 'text',
      defaultValue: '$1.2B',
    },
    {
      name: 'statRecoveredLabel',
      type: 'text',
      defaultValue: 'Recovered & protected',
      localized: true,
    },
    // ── Contact information ───────────────────────────────────────────────────
    {
      name: 'phone',
      type: 'text',
      defaultValue: '(212) 555-1840',
    },
    {
      name: 'email',
      type: 'email',
      defaultValue: 'counsel@aureliuslegal.com',
    },
    {
      name: 'addressLine1',
      type: 'text',
      defaultValue: '400 Park Avenue, 28th Floor',
    },
    {
      name: 'addressLine2',
      type: 'text',
      defaultValue: 'New York, NY 10022',
    },
    {
      name: 'officeHours',
      type: 'text',
      defaultValue: 'Mon–Fri · 8:30am – 6:00pm',
      localized: true,
    },
    {
      name: 'officeHoursNote',
      type: 'text',
      defaultValue: 'Evenings by appointment',
      localized: true,
    },
    {
      name: 'officeMapImage',
      type: 'upload',
      relationTo: 'media',
    },
    // ── CTA band ─────────────────────────────────────────────────────────────
    {
      name: 'ctaHeadline',
      type: 'text',
      defaultValue: 'Your matter deserves a considered response.',
      localized: true,
    },
    {
      name: 'ctaBody',
      type: 'textarea',
      localized: true,
    },
    // ── SEO ──────────────────────────────────────────────────────────────────
    {
      name: 'metaTitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      localized: true,
    },
  ],
}
