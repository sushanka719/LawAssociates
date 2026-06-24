import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Testimonials } from '../components/Testimonials'
import type { PayloadTestimonial } from '../types/payload'

const mockTestimonials: PayloadTestimonial[] = [
  { id: 1, quote: 'Outstanding legal strategy.', clientName: 'Robert H.', clientTitle: 'CEO', avatarInitial: 'R', featured: true },
  { id: 2, quote: 'Relentless advocate.', clientName: 'Sarah T.', clientTitle: 'Plaintiff', avatarInitial: 'S', featured: true },
  { id: 3, quote: 'Extraordinary care and precision.', clientName: 'David M.', clientTitle: 'Estate Planning Client', avatarInitial: 'D', featured: true },
]

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/trusted by those with the most to protect/i)).toBeInTheDocument()
  })

  it('renders all testimonial slides from CMS props', () => {
    render(<Testimonials testimonials={mockTestimonials} />)
    mockTestimonials.forEach(({ clientName }) => {
      expect(screen.getByText(clientName)).toBeInTheDocument()
    })
  })

  it('renders navigation buttons', () => {
    render(<Testimonials testimonials={mockTestimonials} />)
    expect(screen.getByRole('button', { name: /previous testimonial/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next testimonial/i })).toBeInTheDocument()
  })

  it('advances to next slide when next button is clicked', async () => {
    const user = userEvent.setup({ delay: null })
    render(<Testimonials testimonials={mockTestimonials} />)
    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    await act(async () => { await user.click(nextBtn) })
    const track = document.querySelector('.tslides') as HTMLElement
    expect(track.style.transform).toBe('translateX(-100%)')
  })

  it('wraps to last slide when prev is clicked from index 0', async () => {
    const user = userEvent.setup({ delay: null })
    render(<Testimonials testimonials={mockTestimonials} />)
    const prevBtn = screen.getByRole('button', { name: /previous testimonial/i })
    await act(async () => { await user.click(prevBtn) })
    const track = document.querySelector('.tslides') as HTMLElement
    const lastIdx = mockTestimonials.length - 1
    expect(track.style.transform).toBe(`translateX(-${lastIdx * 100}%)`)
  })
})
