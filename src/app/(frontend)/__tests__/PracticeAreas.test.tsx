import { render, screen } from '@testing-library/react'

import { PRACTICE_AREAS } from '../constants/content'
import { PracticeAreas } from '../components/PracticeAreas'

describe('PracticeAreas', () => {
  it('renders the section heading', () => {
    render(<PracticeAreas />)
    expect(screen.getByText(/depth across the disciplines/i)).toBeInTheDocument()
  })

  it('renders all 8 practice area items', () => {
    render(<PracticeAreas />)
    PRACTICE_AREAS.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders all index numbers 01–08', () => {
    render(<PracticeAreas />)
    PRACTICE_AREAS.forEach(({ idx }) => {
      expect(screen.getByText(idx)).toBeInTheDocument()
    })
  })

  it('each practice area links to #contact', () => {
    render(<PracticeAreas />)
    const links = screen.getAllByRole('link').filter(l => l.getAttribute('href') === '#contact')
    expect(links.length).toBeGreaterThanOrEqual(PRACTICE_AREAS.length)
  })

  it('renders each practice area description', () => {
    render(<PracticeAreas />)
    expect(screen.getByText(/formation, governance/i)).toBeInTheDocument()
    expect(screen.getByText(/trial-tested advocacy/i)).toBeInTheDocument()
  })
})
