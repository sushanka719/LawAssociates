'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { TESTIMONIALS } from '../constants/content'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const count = TESTIMONIALS.length

  const go = useCallback((n: number) => setIndex((n + count) % count), [count])

  const startAuto = useCallback(() => {
    autoRef.current = setInterval(() => go(index + 1), 7000)
  }, [go, index])

  useEffect(() => {
    startAuto()
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [index]) // eslint-disable-line react-hooks/exhaustive-deps

  const stopAuto = () => { if (autoRef.current) clearInterval(autoRef.current) }

  return (
    <section className="la-section" data-screen-label="Testimonials">
      <div className="la-container">
        <div className="testi-layout">
          <div className="reveal">
            <p className="eyebrow">Client Voices</p>
            <h2 className="display d-md">Trusted by those with the most to protect.</h2>
          </div>

          <div className="tcarousel reveal d1" onMouseEnter={stopAuto}>
            <div className="ttrack">
              <div
                className="tslides"
                style={{ transform: `translateX(${-index * 100}%)` }}
                aria-live="polite"
              >
                {TESTIMONIALS.map(({ quote, name, role, initial }, i) => (
                  <div key={name} className="tslide" aria-hidden={i !== index}>
                    <p className="tquote">
                      <span className="mark">&ldquo;</span>
                      {quote}
                      <span className="mark">&rdquo;</span>
                    </p>
                    <div className="tmeta">
                      <div className="ava" aria-hidden="true">{initial}</div>
                      <div className="who">
                        <b>{name}</b>
                        <span>{role}</span>
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
              <button onClick={() => go(index + 1)} aria-label="Next testimonial">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
