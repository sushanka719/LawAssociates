const STATS = [
  { num: '20', sup: '+', lab: 'Years of combined excellence' },
  { num: '500', sup: '+', lab: 'Cases successfully resolved' },
  { num: '15', sup: '', lab: 'Licensed attorneys & counsel' },
  { num: '98', sup: '%', lab: 'Client satisfaction rating' },
] as const

export function Statistics() {
  return (
    <section className="trust-strip" aria-label="Firm statistics" data-screen-label="Firm Statistics">
      <div className="la-container">
        {STATS.map(({ num, sup, lab }, i) => (
          <div key={num} className={`trust-cell reveal${i > 0 ? ` d${i}` : ''}`}>
            <div className="num">
              {num}
              {sup && <span>{sup}</span>}
            </div>
            <div className="lab">{lab}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
