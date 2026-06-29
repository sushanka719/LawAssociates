'use client'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadProcessSteps } from '../types/payload'

interface ProcessProps {
  processSteps?: PayloadProcessSteps | null
}

export function Process({ processSteps }: ProcessProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const headline = language === 'ne'
    ? t.process.headline
    : (processSteps?.sectionHeadline || t.process.headline)

  const steps = language === 'ne'
    ? t.process.steps.map((s) => ({ key: s.num, num: s.num, title: s.title, desc: s.desc }))
    : (processSteps?.steps ?? []).length > 0
      ? (processSteps?.steps ?? []).map((s) => ({
          key: String(s.number),
          num: String(s.number),
          title: s.title,
          desc: s.description,
        }))
      : t.process.steps.map((s) => ({ key: s.num, num: s.num, title: s.title, desc: s.desc }))

  return (
    <section className="la-section subtle-bg" data-screen-label="Process">
      <div className="la-container">
        <div className="sec-head center reveal" style={{ marginBottom: 72 }}>
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="display d-lg">{headline}</h2>
        </div>
        <div className="steps">
          {steps.map(({ key, num, title, desc }, i) => (
            <div key={key} className={`step reveal${i > 0 ? ` d${Math.min(i, 3)}` : ''}`}>
              <div className="num">{num}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
