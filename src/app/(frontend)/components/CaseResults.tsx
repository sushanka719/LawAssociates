import { CASE_RESULTS } from '../constants/content'

export function CaseResults() {
  return (
    <section className="la-section band" id="results" data-screen-label="Case Results">
      <div className="la-container">
        <div className="cases-head">
          <div className="reveal">
            <p className="eyebrow no-rule" style={{ '--eyebrow': 'var(--gold-bright)' } as React.CSSProperties}>
              Representative Matters
            </p>
            <h2 className="display d-lg" style={{ color: '#fff' }}>Outcomes that speak to the work.</h2>
          </div>
          <p className="muted reveal d1" style={{ maxWidth: '34ch', margin: 0 }}>
            Results shown are illustrative of past engagements. Prior outcomes do not guarantee
            future results.
          </p>
        </div>

        <div className="cases-grid">
          {CASE_RESULTS.map(({ cat, amt, desc, meta }, i) => (
            <article key={cat} className={`case reveal${i > 0 ? ` d${i}` : ''}`}>
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
