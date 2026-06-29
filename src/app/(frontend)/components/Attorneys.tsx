'use client'

import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadAttorney } from '../types/payload'

interface AttorneysProps {
  attorneys?: PayloadAttorney[] | null
}

export function Attorneys({ attorneys }: AttorneysProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const items = language === 'ne'
    ? t.attorneys.items.map((a, i) => ({
        id: String(i),
        name: a.name,
        role: a.role,
        spec: a.spec,
        years: a.years,
        photoUrl: null as string | null,
        photoAlt: a.name,
      }))
    : (attorneys ?? []).length > 0
      ? (attorneys ?? []).map((a) => ({
          id: String(a.id),
          name: a.name,
          role: a.role,
          spec: a.specialty,
          years: String(a.yearsExperience),
          photoUrl: a.photo?.url || null,
          photoAlt: a.photo?.alt || a.name,
        }))
      : t.attorneys.items.map((a, i) => ({
          id: String(i),
          name: a.name,
          role: a.role,
          spec: a.spec,
          years: a.years,
          photoUrl: null as string | null,
          photoAlt: a.name,
        }))

  return (
    <section className="la-section" id="attorneys" data-screen-label="Attorneys">
      <div className="la-container">
        <div className="sec-split">
          <div className="reveal">
            <p className="eyebrow">{t.attorneys.eyebrow}</p>
            <h2 className="display d-lg">{t.attorneys.headline}</h2>
          </div>
          <p className="lead reveal d1">{t.attorneys.lead}</p>
        </div>

        <div className="attorneys-grid">
          {items.map(({ id, name, role, spec, years, photoUrl, photoAlt }, i) => (
            <article key={id} className={`attorney reveal${i > 0 ? ` d${i}` : ''}`}>
              <div className="photo">
                {photoUrl && (
                  <img src={photoUrl} alt={photoAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
                <span className="badge">{years} {t.attorneys.yrsExperience}</span>
              </div>
              <div className="info">
                <div>
                  <h4>{name}</h4>
                  <div className="role">{role}</div>
                  <div className="spec">{spec}</div>
                </div>
                <a className="prof" href="#contact" aria-label="View profile">
                  <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 48 }} className="reveal">
          <a href="#contact" className="linkarrow">
            {t.attorneys.meetAll} <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
