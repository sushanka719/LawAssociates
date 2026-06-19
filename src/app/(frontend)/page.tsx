import { Attorneys } from './components/Attorneys'
import { Awards } from './components/Awards'
import { CaseResults } from './components/CaseResults'
import { Contact } from './components/Contact'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Insights } from './components/Insights'
import { Nav } from './components/Nav'
import { PracticeAreas } from './components/PracticeAreas'
import { Process } from './components/Process'
import { Statistics } from './components/Statistics'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

export default function LawAssociatesPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Statistics />
        <PracticeAreas />
        <WhyUs />
        <Attorneys />
        <CaseResults />
        <Testimonials />
        <Process />
        <Insights />
        <Awards />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
