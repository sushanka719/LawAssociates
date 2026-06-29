'use client'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadSiteSettings } from '../types/payload'

interface StatisticsProps {
  siteSettings?: PayloadSiteSettings | null
}

export function Statistics({ siteSettings }: StatisticsProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const stats = [
    {
      num: language === 'ne' ? t.hero.statYears : (siteSettings?.statYears ?? '20'),
      sup: language === 'ne' ? '' : '+',
      lab: language === 'ne' ? t.stats.yearsLabel : (siteSettings?.statYearsLabel ?? t.stats.yearsLabel),
    },
    {
      num: language === 'ne' ? t.hero.statCases : (siteSettings?.statCases ?? '500'),
      sup: language === 'ne' ? '' : '+',
      lab: language === 'ne' ? t.stats.casesLabel : (siteSettings?.statCasesLabel ?? t.stats.casesLabel),
    },
    {
      num: siteSettings?.statAttorneys ?? '15',
      sup: '',
      lab: language === 'ne' ? t.stats.attorneysLabel : (siteSettings?.statAttorneysLabel ?? t.stats.attorneysLabel),
    },
    {
      num: language === 'ne' ? t.hero.statSatisfaction : (siteSettings?.statSatisfaction ?? '98'),
      sup: language === 'ne' ? '' : '%',
      lab: language === 'ne' ? t.stats.satisfactionLabel : (siteSettings?.statSatisfactionLabel ?? t.stats.satisfactionLabel),
    },
  ]

  return (
    <section className="trust-strip" aria-label="Firm statistics" data-screen-label="Firm Statistics">
      <div className="la-container">
        {stats.map(({ num, sup, lab }, i) => (
          <div key={lab} className={`trust-cell reveal${i > 0 ? ` d${i}` : ''}`}>
            <div className="num">
              {num}
              {sup && <span>{sup}</span>}
            </div>
            <div className="lab">{lab}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
