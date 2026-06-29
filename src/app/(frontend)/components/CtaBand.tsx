'use client'

import { ArrowRight, Phone } from 'lucide-react'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadSiteSettings } from '../types/payload'

interface CtaBandProps {
  siteSettings?: PayloadSiteSettings | null
}

export function CtaBand({ siteSettings }: CtaBandProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const headline = language === 'ne' ? t.cta.headline : (siteSettings?.ctaHeadline || t.cta.headline)
  const body = language === 'ne' ? t.cta.body : (siteSettings?.ctaBody || t.cta.body)
  const phone = siteSettings?.phone || '(212) 555-1840'

  return (
    <section className="la-section band ctaband" data-screen-label="CTA">
      <div className="la-container">
        <p
          className="eyebrow no-rule reveal"
          style={{ '--eyebrow': 'var(--gold-bright)', justifyContent: 'center' } as React.CSSProperties}
        >
          {t.cta.eyebrow}
        </p>
        <h2 className="display d-lg reveal d1">{headline}</h2>
        <p className="lead reveal d1">{body}</p>
        <div className="hero-cta reveal d2">
          <a href="#contact" className="btn btn-gold">
            {t.cta.btnConsult} <ArrowRight />
          </a>
          <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn btn-outline">
            <Phone /> {phone}
          </a>
        </div>
      </div>
    </section>
  )
}
