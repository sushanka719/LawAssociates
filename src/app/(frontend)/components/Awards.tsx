'use client'

import { Award, Medal, ShieldCheck, Star, Trophy } from 'lucide-react'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadAward } from '../types/payload'

const ICON_MAP = {
  Award,
  Medal,
  Trophy,
  Star,
  ShieldCheck,
  award: Award,
  medal: Medal,
  trophy: Trophy,
  star: Star,
  'shield-check': ShieldCheck,
} as const
type IconKey = keyof typeof ICON_MAP

interface AwardsProps {
  awards?: PayloadAward[] | null
}

export function Awards({ awards }: AwardsProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const items = language === 'ne'
    ? t.awards.items.map((a, i) => ({ key: String(i), icon: a.icon, org: a.org, yr: a.yr }))
    : (awards ?? []).length > 0
      ? (awards ?? []).map((a) => ({
          key: String(a.id),
          icon: a.icon || 'award',
          org: a.organization,
          yr: a.distinction,
        }))
      : t.awards.items.map((a, i) => ({ key: String(i), icon: a.icon, org: a.org, yr: a.yr }))

  return (
    <section className="la-section" data-screen-label="Awards">
      <div className="la-container">
        <div className="sec-head center reveal" style={{ marginBottom: 52 }}>
          <p className="eyebrow">{t.awards.eyebrow}</p>
          <h2 className="display d-md">{t.awards.headline}</h2>
        </div>
        <div className="awards-row reveal d1">
          {items.map(({ key, icon, org, yr }) => {
            const Icon = ICON_MAP[icon as IconKey] || Award
            return (
              <div key={key} className="award">
                <div className="star"><Icon /></div>
                <div className="org">{org}</div>
                <div className="yr">{yr}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
