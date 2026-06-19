import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { PRACTICE_AREAS } from '../constants/content'

export function PracticeAreas() {
  return (
    <section className="la-section" id="practice" data-screen-label="Practice Areas">
      <div className="la-container">
        <div className="practice-layout">
          <div className="practice-intro reveal">
            <p className="eyebrow">Practice Areas</p>
            <h2 className="display d-lg">Depth across the disciplines that matter most.</h2>
            <p className="lead">
              Our practice groups are led by partners with decades of focused experience — so the
              counsel you receive is senior, specialised, and coordinated across every dimension
              of your matter.
            </p>
            <a href="#contact" className="btn btn-outline">
              Discuss Your Matter <ArrowRight />
            </a>
          </div>

          <div className="practice-list reveal d1">
            {PRACTICE_AREAS.map(({ idx, title, desc }) => (
              <a key={idx} className="parea" href="#contact">
                <span className="idx">{idx}</span>
                <span>
                  <span className="pa-title">{title}</span>
                  <span className="pa-desc">{desc}</span>
                </span>
                <span className="pa-arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
