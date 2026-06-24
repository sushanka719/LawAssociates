import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Contact } from '../components/Contact'
import type { PayloadSiteSettings } from '../types/payload'

const mockSettings: PayloadSiteSettings = {
  phone: '(212) 555-1840',
  email: 'counsel@aureliuslegal.com',
  addressLine1: '400 Park Avenue, 28th Floor',
  addressLine2: 'New York, NY 10022',
  officeHours: 'Mon–Fri · 8:30am – 6:00pm',
  officeHoursNote: 'Evenings by appointment',
}

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText(/begin with a conversation/i)).toBeInTheDocument()
  })

  it('renders the contact form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/how can we help/i)).toBeInTheDocument()
  })

  it('renders firm contact information from siteSettings', () => {
    render(<Contact siteSettings={mockSettings} />)
    expect(screen.getByText('(212) 555-1840')).toBeInTheDocument()
    expect(screen.getByText('counsel@aureliuslegal.com')).toBeInTheDocument()
  })

  it('shows success message after form submission', async () => {
    render(<Contact />)
    await userEvent.type(screen.getByLabelText(/full name/i), 'Jane Doe')
    await userEvent.type(screen.getByLabelText(/email/i), 'jane@example.com')
    await userEvent.type(screen.getByLabelText(/how can we help/i), 'Legal advice needed')
    await userEvent.click(screen.getByRole('button', { name: /request consultation/i }))
    expect(await screen.findByText(/we'll be in touch/i)).toBeInTheDocument()
  })

  it('renders the practice area dropdown with options', () => {
    render(<Contact />)
    const select = screen.getByLabelText(/practice area/i)
    expect(select).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /corporate/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /litigation/i })).toBeInTheDocument()
  })
})
