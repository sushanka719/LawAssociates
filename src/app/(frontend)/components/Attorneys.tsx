'use client'

import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

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
          photoUrl: (() => {
            const photo = a.photo
            if (!photo) return null
            const pub = process.env.NEXT_PUBLIC_R2_PUBLIC_URL
            if (pub && photo.filename) return `${pub}/${photo.filename}`
            return photo.url || null
          })(),
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

  const count = items.length
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const [perView, setPerView] = useState(3)

  const computeOffset = useCallback((idx: number) => {
    if (!trackRef.current) return
    const slide = trackRef.current.querySelector<HTMLElement>('.atslide')
    const slidesEl = trackRef.current.querySelector<HTMLElement>('.atslides')
    if (!slide || !slidesEl) return
    const gap = parseFloat(getComputedStyle(slidesEl).gap) || 0
    setOffset(idx * (slide.offsetWidth + gap))
  }, [])

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      const pv = w >= 920 ? 3 : w >= 560 ? 2 : 1
      setPerView(pv)
      setIndex(i => {
        const max = Math.max(0, count - pv)
        const clamped = Math.min(i, max)
        computeOffset(clamped)
        return clamped
      })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [count, computeOffset])

  useEffect(() => {
    computeOffset(index)
  }, [index, computeOffset])

  useEffect(() => { setIndex(0); setOffset(0) }, [language])

  const maxIndex = Math.max(0, count - perView)
  const showNav = count > perView

  const go = useCallback((n: number) => {
    const next = Math.max(0, Math.min(n, Math.max(0, count - perView)))
    setIndex(next)
  }, [count, perView])

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

        <div className="atty-carousel reveal d2">
          <div className="attrack" ref={trackRef}>
            <div
              className="atslides"
              style={{ transform: `translateX(-${offset}px)` }}
              aria-live="polite"
            >
              {items.map(({ id, name, role, spec, years, photoUrl, photoAlt }, i) => (
                <div key={id} className="atslide" aria-hidden={showNav && i !== index}>
                  <article className="attorney">
                    <div className="photo">
                      {photoUrl && (
                        <img src={photoUrl} alt={photoAlt} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      )}
                      <span className="badge">{years} {t.attorneys.yrsExperience}</span>
                    </div>
                    <div className="info">
                      <div>
                        <h4>{name}</h4>
                        <div className="role">{role}</div>
                        <div className="spec">{spec}</div>
                      </div>
                      <a className="prof" href="#contact" aria-label={`View ${name} profile`}>
                        <ArrowUpRight />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {showNav && (
            <div className="atfooter">
              <div className="atnav">
                <button onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous attorney">
                  <ArrowLeft />
                </button>
                <button onClick={() => go(index + 1)} disabled={index === maxIndex} aria-label="Next attorney">
                  <ArrowRight />
                </button>
              </div>
              <div className="atdots">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    className={`atdot${i === index ? ' active' : ''}`}
                    onClick={() => go(i)}
                    aria-label={`Go to attorney ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
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
