import { render, screen } from '@testing-library/react'

import { PracticeAreas } from '../components/PracticeAreas'
import type { PayloadPracticeArea } from '../types/payload'

const mockAreas: PayloadPracticeArea[] = [
  { id: 1, title: 'Corporate & M&A', shortDescription: 'Formation, governance, financings, and cross-border transactions.', order: 1, slug: 'corporate-ma' },
  { id: 2, title: 'Commercial Litigation', shortDescription: 'Trial-tested advocacy in high-stakes disputes.', order: 2, slug: 'commercial-litigation' },
  { id: 3, title: 'Family Law', shortDescription: 'Sensitive counsel in divorce, custody, and support matters.', order: 3, slug: 'family-law' },
  { id: 4, title: 'Estate Planning', shortDescription: 'Comprehensive estate plans and trusts.', order: 4, slug: 'estate-planning' },
  { id: 5, title: 'Real Estate', shortDescription: 'Full-service counsel on commercial and residential transactions.', order: 5, slug: 'real-estate' },
  { id: 6, title: 'Employment & Labor', shortDescription: 'Employer-side counsel on workplace disputes.', order: 6, slug: 'employment-labor' },
  { id: 7, title: 'Intellectual Property', shortDescription: 'Protection and enforcement of patents and trademarks.', order: 7, slug: 'intellectual-property' },
  { id: 8, title: 'Regulatory & Compliance', shortDescription: 'Guidance through complex regulatory landscapes.', order: 8, slug: 'regulatory-compliance' },
]

describe('PracticeAreas', () => {
  it('renders the section heading', () => {
    render(<PracticeAreas />)
    expect(screen.getByText(/depth across the disciplines/i)).toBeInTheDocument()
  })

  it('renders all practice area titles from CMS props', () => {
    render(<PracticeAreas practiceAreas={mockAreas} />)
    mockAreas.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders index numbers padded from order', () => {
    render(<PracticeAreas practiceAreas={mockAreas} />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('08')).toBeInTheDocument()
  })

  it('each practice area links to #contact', () => {
    render(<PracticeAreas practiceAreas={mockAreas} />)
    const links = screen.getAllByRole('link').filter(l => l.getAttribute('href') === '#contact')
    expect(links.length).toBeGreaterThanOrEqual(mockAreas.length)
  })

  it('renders practice area descriptions', () => {
    render(<PracticeAreas practiceAreas={mockAreas} />)
    expect(screen.getByText(/formation, governance/i)).toBeInTheDocument()
    expect(screen.getByText(/trial-tested advocacy/i)).toBeInTheDocument()
  })
})
