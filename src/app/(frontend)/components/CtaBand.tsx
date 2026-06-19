import { ArrowRight, Phone } from 'lucide-react'

import { FIRM_PHONE } from '../constants/content'

export function CtaBand() {
  return (
    <section className="la-section band ctaband" data-screen-label="CTA">
      <div className="la-container">
        <p
          className="eyebrow no-rule reveal"
          style={{ '--eyebrow': 'var(--gold-bright)', justifyContent: 'center' } as React.CSSProperties}
        >
          Speak With Our Team
        </p>
        <h2 className="display d-lg reveal d1">Your matter deserves a considered response.</h2>
        <p className="lead reveal d1">
          Request a confidential consultation. We will review your situation, outline your options,
          and recommend a clear path forward — with no obligation.
        </p>
        <div className="hero-cta reveal d2">
          <a href="#contact" className="btn btn-gold">
            Request Consultation <ArrowRight />
          </a>
          <a href={`tel:+1${FIRM_PHONE.replace(/\D/g, '')}`} className="btn btn-outline">
            <Phone /> {FIRM_PHONE}
          </a>
        </div>
      </div>
    </section>
  )
}
