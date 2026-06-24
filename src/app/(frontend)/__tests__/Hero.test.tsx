import { render, screen } from '@testing-library/react'

import { Hero } from '../components/Hero'
import type { PayloadSiteSettings } from '../types/payload'

const mockSettings: PayloadSiteSettings = {
  heroEyebrow: 'Aurelius Legal Partners · Est. 1998',
  heroHeadline: 'Strategic counsel for the matters that define your future.',
  heroHeadlineEmphasis: 'define',
  heroLead: 'Trusted legal counsel for 25 years.',
  heroCtaPrimary: 'Schedule a Consultation',
  heroCtaSecondary: 'Explore Practice Areas',
  heroStatSatisfaction: '98%',
  statYears: '25+',
  statCases: '1,200+',
  statRecovered: '$2.4B',
}

describe('Hero', () => {
  it('renders the firm eyebrow from CMS', () => {
    render(<Hero siteSettings={mockSettings} />)
    expect(screen.getByText('Aurelius Legal Partners · Est. 1998')).toBeInTheDocument()
  })

  it('renders the headline with italic emphasis', () => {
    render(<Hero siteSettings={mockSettings} />)
    expect(screen.getByText(/strategic counsel for the matters/i)).toBeInTheDocument()
    expect(screen.getByText(/define/i)).toBeInTheDocument()
  })

  it('renders trust stats from siteSettings', () => {
    render(<Hero siteSettings={mockSettings} />)
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('1,200+')).toBeInTheDocument()
    expect(screen.getByText('$2.4B')).toBeInTheDocument()
  })

  it('renders the satisfaction plate', () => {
    render(<Hero siteSettings={mockSettings} />)
    expect(screen.getAllByText('98%').length).toBeGreaterThanOrEqual(1)
  })

  it('has a link to Schedule a Consultation', () => {
    render(<Hero siteSettings={mockSettings} />)
    const link = screen.getByRole('link', { name: /schedule a consultation/i })
    expect(link).toHaveAttribute('href', '#contact')
  })
})
