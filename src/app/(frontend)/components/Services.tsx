'use client'

import { CheckCircle2 } from 'lucide-react'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadFirmService } from '../types/payload'

interface ServicesProps {
  firmServices?: PayloadFirmService[] | null
}

export function Services({ firmServices }: ServicesProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const items =
    language === 'ne'
      ? t.services.items.map((item) => ({
          title: item.title,
          desc: item.desc,
          key: item.title,
        }))
      : (firmServices ?? []).length > 0
        ? (firmServices ?? []).map((svc) => ({
            title: svc.title || '',
            desc: svc.description || '',
            key: String(svc.id),
          }))
        : t.services.items.map((item) => ({
            title: item.title,
            desc: item.desc,
            key: item.title,
          }))

  return (
    <section className="la-section" id="services" data-screen-label="Firm Services">
      <div className="la-container">
        <p className="eyebrow reveal">{t.services.eyebrow}</p>
        <div className="services-head reveal">
          <h2 className="display d-lg">{t.services.headline}</h2>
          <p className="lead">{t.services.lead}</p>
        </div>
        <div className="services-grid reveal d1">
          {items.map(({ title, desc, key }) => (
            <div key={key} className="svc-item">
              <CheckCircle2 className="svc-check" aria-hidden="true" />
              <div>
                <h4 className="svc-title">{title}</h4>
                <p className="svc-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
