import { FIRM_NAME } from '../constants/content'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="la-container">
        <div className="foot-top">
          <div className="foot-brand">
            <a className="brand" href="#top" aria-label={`${FIRM_NAME} home`}>
              <span className="mark">L</span>
              <span className="word">
                <b>Law</b>
                <span>Associates</span>
              </span>
            </a>
            <p>Strategic counsel, trusted advocacy, and lasting results for businesses and individuals since 1998.</p>
          </div>

          <div className="foot-col">
            <h5>Firm</h5>
            <a href="#about">About</a>
            <a href="#attorneys">Attorneys</a>
            <a href="#">Careers</a>
            <a href="#insights">Insights</a>
          </div>
          <div className="foot-col">
            <h5>Practice</h5>
            <a href="#practice">Corporate</a>
            <a href="#practice">Litigation</a>
            <a href="#practice">Real Estate</a>
            <a href="#practice">Family</a>
          </div>
          <div className="foot-col">
            <h5>Resources</h5>
            <a href="#insights">Blog</a>
            <a href="#results">Case Results</a>
            <a href="#">FAQs</a>
            <a href="#">Client Portal</a>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {YEAR} {FIRM_NAME} LLP. All rights reserved.</span>
          <div className="legal">
            <span>Attorney Advertising</span>
            <span>Prior results do not guarantee a similar outcome.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
