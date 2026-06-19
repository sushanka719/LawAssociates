import { PROCESS_STEPS } from '../constants/content'

export function Process() {
  return (
    <section className="la-section subtle-bg" data-screen-label="Process">
      <div className="la-container">
        <div className="sec-head center reveal" style={{ marginBottom: 72 }}>
          <p className="eyebrow">How We Work</p>
          <h2 className="display d-lg">A clear path from first call to resolution.</h2>
        </div>
        <div className="steps">
          {PROCESS_STEPS.map(({ num, title, desc }, i) => (
            <div key={num} className={`step reveal${i > 0 ? ` d${Math.min(i, 3)}` : ''}`}>
              <div className="num">{num}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
