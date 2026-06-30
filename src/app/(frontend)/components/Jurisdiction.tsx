'use client'

import { Building2, Gavel, Globe, Network, Scale, Shield } from 'lucide-react'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadJurisdiction } from '../types/payload'

const ICON_MAP = {
  Globe,
  Scale,
  Gavel,
  Building2,
  Shield,
  Network,
} as const
type IconKey = keyof typeof ICON_MAP

interface JurisdictionProps {
  jurisdiction?: PayloadJurisdiction | null
}

export function Jurisdiction({ jurisdiction }: JurisdictionProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const eyebrow =
    language === 'ne'
      ? t.jurisdiction.eyebrow
      : jurisdiction?.sectionEyebrow || t.jurisdiction.eyebrow

  const headline =
    language === 'ne'
      ? t.jurisdiction.headline
      : jurisdiction?.sectionHeadline || t.jurisdiction.headline

  const lead =
    language === 'ne'
      ? t.jurisdiction.lead
      : jurisdiction?.sectionLead || t.jurisdiction.lead

  const blocks =
    language === 'ne'
      ? t.jurisdiction.blocks.map((b) => ({
          heading: b.heading,
          description: b.description,
          points: b.points,
          icon: b.icon,
          key: b.heading,
        }))
      : (jurisdiction?.blocks ?? []).length > 0
        ? (jurisdiction?.blocks ?? []).map((b, i) => ({
            heading: b.heading || '',
            description: b.description || '',
            points: (b.points ?? []).map((p) => p.text || ''),
            icon: b.icon || 'Globe',
            key: b.id || String(i),
          }))
        : t.jurisdiction.blocks.map((b) => ({
            heading: b.heading,
            description: b.description,
            points: b.points,
            icon: b.icon,
            key: b.heading,
          }))

  return (
    <section className="la-section subtle-bg" id="jurisdiction" data-screen-label="Jurisdiction">
      <div className="la-container">
        <div className="jurisdiction-intro reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display d-lg">{headline}</h2>
          <p className="lead">{lead}</p>
        </div>
        <div className="jurisdiction-grid reveal d1">
          {blocks.map(({ heading, description, points, icon, key }) => {
            const Icon = ICON_MAP[icon as IconKey] || Globe
            return (
              <div key={key} className="jblock">
                <div className="jblock-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="jblock-title">{heading}</h3>
                {description && <p className="jblock-desc">{description}</p>}
                {Array.isArray(points) && points.length > 0 && (
                  <ul className="jblock-list">
                    {points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
