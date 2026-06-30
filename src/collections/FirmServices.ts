import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'

export const FirmServices: CollectionConfig = {
  slug: 'firm-services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'updatedAt'],
    description: 'The 20 specific legal services this firm provides — displayed in the Services section.',
  },
  access: {
    read: anyone,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Short service name, e.g. "Company Incorporation & Registration"' },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      admin: { description: 'One or two sentences describing what this service covers.' },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Controls display order (ascending). Use 1–20.',
      },
    },
  ],
}
