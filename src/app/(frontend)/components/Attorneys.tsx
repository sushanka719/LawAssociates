import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { ATTORNEYS } from '../constants/content'
import { ImageSlot } from './ImageSlot'

export function Attorneys() {
  return (
    <section className="la-section" id="attorneys" data-screen-label="Attorneys">
      <div className="la-container">
        <div className="sec-split">
          <div className="reveal">
            <p className="eyebrow">The People</p>
            <h2 className="display d-lg">Counsel you will know by name.</h2>
          </div>
          <p className="lead reveal d1">
            Our partners bring decades of focused experience and a shared commitment to
            representing each client as if their matter were our own.
          </p>
        </div>

        <div className="attorneys-grid">
          {ATTORNEYS.map(({ id, name, role, spec, years }, i) => (
            <article key={id} className={`attorney reveal${i > 0 ? ` d${i}` : ''}`}>
              <div className="photo">
                <ImageSlot placeholder="Portrait" />
                <span className="badge">{years} yrs experience</span>
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
            Meet all 15 attorneys <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
