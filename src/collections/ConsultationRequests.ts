import type { CollectionConfig } from 'payload'

export const ConsultationRequests: CollectionConfig = {
  slug: 'consultation-requests',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'practiceArea', 'status', 'submittedAt'],
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  hooks: {
    beforeOperation: [
      ({ args, operation }) => {
        if (operation === 'create') {
          const data = args.data as Record<string, unknown>
          if (data._honeypot) {
            throw new Error('Bot submission detected')
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'practiceArea',
      type: 'select',
      options: [
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
        { label: 'Company Secretarial Services', value: 'company-secretarial' },
        { label: 'Environmental Law', value: 'environmental-law' },
        { label: 'Energy & Infrastructure', value: 'energy-infrastructure' },
        { label: 'IT & Data Privacy', value: 'it-data-privacy' },
        { label: 'Other', value: 'other' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Engaged', value: 'engaged' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: { position: 'sidebar', readOnly: true },
      hooks: {
        beforeChange: [({ value }) => value || new Date().toISOString()],
      },
    },
    {
      name: '_honeypot',
      type: 'text',
      admin: { hidden: true },
    },
  ],
}
