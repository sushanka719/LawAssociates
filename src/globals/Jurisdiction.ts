import type { GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'

export const Jurisdiction: GlobalConfig = {
  slug: 'jurisdiction',
  admin: {
    description:
      'The four jurisdiction blocks shown in the Jurisdiction section — Domestic Nepal, International, Arbitration, and Regulatory.',
  },
  access: {
    read: anyone,
  },
  fields: [
    {
      name: 'sectionEyebrow',
      type: 'text',
      localized: true,
      defaultValue: 'Jurisdiction & Scope',
    },
    {
      name: 'sectionHeadline',
      type: 'text',
      localized: true,
      defaultValue: 'Where we practise and how we reach.',
    },
    {
      name: 'sectionLead',
      type: 'textarea',
      localized: true,
      defaultValue:
        'Our practice spans Nepal\'s courts and regulatory bodies, cross-border advisory work, and international arbitration proceedings — giving clients a single point of continuity across every forum their matter may reach.',
    },
    {
      name: 'blocks',
      type: 'array',
      admin: {
        description:
          'Each block is one jurisdiction type. Recommended order: Domestic, International, Arbitration, Regulatory.',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          localized: true,
          admin: { description: 'e.g. "Domestic (Nepal)"' },
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Globe', value: 'Globe' },
            { label: 'Scale', value: 'Scale' },
            { label: 'Gavel', value: 'Gavel' },
            { label: 'Building2', value: 'Building2' },
            { label: 'Shield', value: 'Shield' },
            { label: 'Network', value: 'Network' },
          ],
          defaultValue: 'Globe',
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          admin: { description: 'Two or three sentences describing the scope of this jurisdiction.' },
        },
        {
          name: 'points',
          type: 'array',
          admin: { description: 'Bullet-point items — courts, institutions, or work types covered.' },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
