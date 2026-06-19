import { Award, Medal, ShieldCheck, Star, Trophy } from 'lucide-react'

import { AWARDS } from '../constants/content'

const ICON_MAP = { Award, Medal, Trophy, Star, ShieldCheck } as const
type IconKey = keyof typeof ICON_MAP

export function Awards() {
  return (
    <section className="la-section" data-screen-label="Awards">
      <div className="la-container">
        <div className="sec-head center reveal" style={{ marginBottom: 52 }}>
          <p className="eyebrow">Recognition</p>
          <h2 className="display d-md">Acknowledged by the institutions that set the standard.</h2>
        </div>
        <div className="awards-row reveal d1">
          {AWARDS.map(({ icon, org, yr }) => {
            const Icon = ICON_MAP[icon as IconKey]
            return (
              <div key={org} className="award">
                <div className="star"><Icon /></div>
                <div className="org">{org}</div>
                <div className="yr">{yr}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
