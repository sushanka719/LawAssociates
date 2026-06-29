'use client'

import { Award, Globe, Lock, MessagesSquare, Scale, Target } from 'lucide-react'

import { useLanguage } from '@/providers/Language'
import { resolveMediaUrl } from '@/utilities/getMediaUrl'
import { getTranslations } from '../translations'
import type { PayloadWhyChooseUs } from '../types/payload'

const ICON_MAP = { Scale, Target, MessagesSquare, Award, Lock, Globe, scale: Scale, target: Target, 'messages-square': MessagesSquare, award: Award, lock: Lock, globe: Globe } as const
type IconKey = keyof typeof ICON_MAP

interface WhyUsProps {
  whyChooseUs?: PayloadWhyChooseUs | null
}

export function WhyUs({ whyChooseUs }: WhyUsProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const eyebrow = language === 'ne' ? t.whyUs.eyebrow : (whyChooseUs?.sectionEyebrow || t.whyUs.eyebrow)
  const headline = language === 'ne' ? t.whyUs.headline : (whyChooseUs?.sectionHeadline || t.whyUs.headline)
  const quote = language === 'ne' ? t.whyUs.quote : (whyChooseUs?.partnerQuote || t.whyUs.quote)
  const cite = language === 'ne' ? t.whyUs.quoteCite : (whyChooseUs?.partnerQuoteCite || t.whyUs.quoteCite)

  const items = language === 'ne'
    ? t.whyUs.items.map((item) => ({ icon: item.icon, title: item.title, desc: item.desc, key: item.title }))
    : (whyChooseUs?.items ?? []).length > 0
      ? (whyChooseUs?.items ?? []).map((item) => ({
          icon: item.icon || '',
          title: item.title || '',
          desc: item.description || '',
          key: item.id || item.title || '',
        }))
      : t.whyUs.items.map((item) => ({ icon: item.icon, title: item.title, desc: item.desc, key: item.title }))

  return (
    <section className="la-section subtle-bg" id="about" data-screen-label="Why Choose Us">
      <div className="la-container">
        <div className="why-layout">
          <div className="why-media reveal">
            <div className="why-media-img">
              {whyChooseUs?.partnerQuoteImage ? (
                <img
                  src={resolveMediaUrl(whyChooseUs.partnerQuoteImage)}
                  alt={whyChooseUs.partnerQuoteImage.alt || ''}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                  alt="Law Associates team"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', borderRadius: 14 }}
                />
              )}
            </div>
            <blockquote className="why-quote">
              <p>&ldquo;{quote}&rdquo;</p>
              <cite>{cite}</cite>
            </blockquote>
          </div>

          <div>
            <p className="eyebrow reveal">{eyebrow}</p>
            <h2 className="display d-lg reveal" style={{ marginBottom: 14 }}>
              {headline}
            </h2>
            <div className="why-list reveal d1">
              {items.map(({ icon, title, desc, key }) => {
                const Icon = ICON_MAP[icon as IconKey] || Scale
                return (
                  <div key={key} className="why-item">
                    <span className="ico"><Icon /></span>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
