import { ArrowRight } from 'lucide-react'

import { FIRM_TAGLINE } from '../constants/content'
import { ImageSlot } from './ImageSlot'

export function Hero() {
  return (
    <section className="hero la-section" data-screen-label="Hero">
      <div className="hero-bg">
        <ImageSlot placeholder="Drop a courtroom / office image" />
      </div>
      <div className="la-container">
        <div className="hero-grid">
          <div className="hero-col-text reveal">
            <p className="eyebrow hero-eyebrow">{FIRM_TAGLINE}</p>
            <h1 className="display">
              Strategic counsel for the matters that <em>define</em> your future.
            </h1>
            <p className="lead measure">
              For more than two decades, Law Associates has guided corporations, founders, and
              families through their most consequential legal challenges — pairing rigorous
              strategy with the discretion and resolve our clients depend on.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Schedule a Consultation <ArrowRight />
              </a>
              <a href="#practice" className="btn btn-outline">Explore Practice Areas</a>
            </div>
            <div className="hero-trustline">
              <span><b>20+</b>Years of practice</span>
              <span className="sep" aria-hidden="true" />
              <span><b>500+</b>Matters resolved</span>
              <span className="sep" aria-hidden="true" />
              <span><b>$1.2B</b>Recovered &amp; protected</span>
            </div>
          </div>
          <div className="hero-media reveal d1" aria-hidden="true">
            <span className="frame" />
            <div className="hero-portrait">
              <ImageSlot placeholder="Drop an attorney portrait" />
            </div>
            <div className="hero-plate">
              <span className="big">98%</span>
              <span className="vr" />
              <span className="lab">Client satisfaction across representations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
