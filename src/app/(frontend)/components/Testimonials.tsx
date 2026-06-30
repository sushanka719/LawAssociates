'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadTestimonial } from '../types/payload'

interface TestimonialsProps {
  testimonials?: PayloadTestimonial[] | null
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const items = language === 'ne'
    ? t.testimonials.items.map((item, i) => ({
        key: String(i),
        quote: item.quote,
        name: item.name,
        role: item.role,
        initial: item.initial,
      }))
    : (testimonials ?? []).length > 0
      ? (testimonials ?? []).map((tst) => ({
          key: String(tst.id),
          quote: tst.quote,
          name: tst.clientName,
          role: tst.clientTitle,
          initial: tst.avatarInitial || tst.clientName.charAt(0),
        }))
      : t.testimonials.items.map((item, i) => ({
          key: String(i),
          quote: item.quote,
          name: item.name,
          role: item.role,
          initial: item.initial,
        }))

  const [index, setIndex] = useState(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const count = items.length

  const go = useCallback((n: number) => setIndex((n + count) % count), [count])

  const startAuto = useCallback(() => {
    autoRef.current = setInterval(() => go(index + 1), 7000)
  }, [go, index])

  useEffect(() => {
    startAuto()
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [index]) // eslint-disable-line react-hooks/exhaustive-deps

  // reset carousel when language changes
  useEffect(() => { setIndex(0) }, [language])

  const stopAuto = () => { if (autoRef.current) clearInterval(autoRef.current) }

  return (
    <section className="la-section subtle-bg" data-screen-label="Testimonials">
      <div className="la-container">
        <div className="testi-head reveal">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="display d-md">{t.testimonials.headline}</h2>
        </div>

        <div className="tcarousel reveal d1" onMouseEnter={stopAuto}>
          <div className="ttrack">
            <div
              className="tslides"
              style={{ transform: `translateX(${-index * 100}%)` }}
              aria-live="polite"
            >
              {items.map(({ key, quote, name, role, initial }, i) => (
                <div key={key} className="tslide" aria-hidden={i !== index}>
                  <div className="tslide-inner">
                    <div className="tquote-wrap">
                      <p className="tquote">{quote}</p>
                    </div>
                    <div className="tmeta">
                      <div className="ava" aria-hidden="true">{initial}</div>
                      <div className="who">
                        <b>{name}</b>
                        <span>{role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tnav">
            <button onClick={() => go(index - 1)} aria-label="Previous testimonial">
              <ArrowLeft />
            </button>
            <span className="tcounter" aria-live="polite" aria-atomic="true">
              {index + 1} / {count}
            </span>
            <button onClick={() => go(index + 1)} aria-label="Next testimonial">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
