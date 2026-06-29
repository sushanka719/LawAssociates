'use client'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadCaseResult } from '../types/payload'

interface CaseResultsProps {
  caseResults?: PayloadCaseResult[] | null
}

export function CaseResults({ caseResults }: CaseResultsProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const items = language === 'ne'
    ? t.caseResults.items.map((r, i) => ({ key: String(i), cat: r.cat, amt: r.amt, desc: r.desc, meta: r.meta }))
    : (caseResults ?? []).length > 0
      ? (caseResults ?? []).map((r) => ({
          key: String(r.id),
          cat: r.category,
          amt: r.headline,
          desc: r.description,
          meta: r.meta,
        }))
      : t.caseResults.items.map((r, i) => ({ key: String(i), cat: r.cat, amt: r.amt, desc: r.desc, meta: r.meta }))

  return (
    <section className="la-section band" id="results" data-screen-label="Case Results">
      <div className="la-container">
        <div className="cases-head">
          <div className="reveal">
            <p className="eyebrow no-rule" style={{ '--eyebrow': 'var(--gold-bright)' } as React.CSSProperties}>
              {t.caseResults.eyebrow}
            </p>
            <h2 className="display d-lg" style={{ color: '#fff' }}>{t.caseResults.headline}</h2>
          </div>
          <p className="muted reveal d1" style={{ maxWidth: '34ch', margin: 0 }}>
            {t.caseResults.disclaimer}
          </p>
        </div>

        <div className="cases-grid">
          {items.map(({ key, cat, amt, desc, meta }, i) => (
            <article key={key} className={`case reveal${i > 0 ? ` d${i}` : ''}`}>
              <span className="cat">{cat}</span>
              <div className="amt">{amt}</div>
              <p className="desc">{desc}</p>
              <div className="meta">{meta}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
