import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TESTIMONIALS } from '../constants/content'
import { Testimonials } from '../components/Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/trusted by those with the most to protect/i)).toBeInTheDocument()
  })

  it('renders all testimonial slides', () => {
    render(<Testimonials />)
    TESTIMONIALS.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: /previous testimonial/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next testimonial/i })).toBeInTheDocument()
  })

  it('advances to next slide when next button is clicked', async () => {
    const user = userEvent.setup({ delay: null })
    render(<Testimonials />)
    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    await act(async () => { await user.click(nextBtn) })
    const track = document.querySelector('.tslides') as HTMLElement
    expect(track.style.transform).toBe('translateX(-100%)')
  })

  it('wraps to last slide when prev is clicked from index 0', async () => {
    const user = userEvent.setup({ delay: null })
    render(<Testimonials />)
    const prevBtn = screen.getByRole('button', { name: /previous testimonial/i })
    await act(async () => { await user.click(prevBtn) })
    const track = document.querySelector('.tslides') as HTMLElement
    const lastIdx = TESTIMONIALS.length - 1
    expect(track.style.transform).toBe(`translateX(-${lastIdx * 100}%)`)
  })
})
