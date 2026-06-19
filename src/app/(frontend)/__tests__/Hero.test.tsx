import { render, screen } from '@testing-library/react'

import { Hero } from '../components/Hero'
import { FIRM_TAGLINE } from '../constants/content'

describe('Hero', () => {
  it('renders the firm tagline', () => {
    render(<Hero />)
    expect(screen.getByText(FIRM_TAGLINE)).toBeInTheDocument()
  })

  it('renders the headline with italic emphasis', () => {
    render(<Hero />)
    expect(screen.getByText(/strategic counsel for the matters/i)).toBeInTheDocument()
    expect(screen.getByText(/define/i)).toBeInTheDocument()
  })

  it('renders the trust stats (20+, 500+, $1.2B)', () => {
    render(<Hero />)
    expect(screen.getByText('20+')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('$1.2B')).toBeInTheDocument()
  })

  it('renders the 98% satisfaction plate', () => {
    render(<Hero />)
    expect(screen.getByText('98%')).toBeInTheDocument()
  })

  it('has a link to Schedule a Consultation', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /schedule a consultation/i })
    expect(link).toHaveAttribute('href', '#contact')
  })
})
