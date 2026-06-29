'use client'

import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadPracticeArea } from '../types/payload'

interface PracticeAreasProps {
  practiceAreas?: PayloadPracticeArea[] | null
}

export function PracticeAreas({ practiceAreas }: PracticeAreasProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const items = language === 'ne'
    ? t.practice.items.map((item) => ({ idx: item.idx, title: item.title, desc: item.desc, key: item.idx }))
    : (practiceAreas ?? []).length > 0
      ? (practiceAreas ?? []).map((pa, i) => ({
          idx: String(pa.order ?? i + 1).padStart(2, '0'),
          title: pa.title,
          desc: pa.shortDescription,
          key: String(pa.id),
        }))
      : t.practice.items.map((item) => ({ idx: item.idx, title: item.title, desc: item.desc, key: item.idx }))

  return (
    <section className="la-section" id="practice" data-screen-label="Practice Areas">
      <div className="la-container">
        <div className="practice-layout">
          <div className="practice-intro reveal">
            <p className="eyebrow">{t.practice.eyebrow}</p>
            <h2 className="display d-lg">{t.practice.headline}</h2>
            <p className="lead">{t.practice.lead}</p>
            <a href="#contact" className="btn btn-outline">
              {t.practice.cta} <ArrowRight />
            </a>
          </div>

          <div className="practice-list reveal d1">
            {items.map(({ idx, title, desc, key }) => (
              <a key={key} className="parea" href="#contact">
                <span className="idx">{idx}</span>
                <span>
                  <span className="pa-title">{title}</span>
                  <span className="pa-desc">{desc}</span>
                </span>
                <span className="pa-arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
