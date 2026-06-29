import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

const mockSetTheme = vi.fn()
const mockRefresh = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ refresh: mockRefresh }),
}))

vi.mock('@/providers/Theme', () => ({
  useTheme: () => ({ theme: 'light', setTheme: mockSetTheme }),
}))

vi.mock('@/providers/Language', () => ({
  useLanguage: () => ({ language: 'en', toggle: vi.fn() }),
}))

import { Nav } from '../components/Nav'

describe('Nav', () => {
  it('renders the firm brand links', () => {
    render(<Nav />)
    const brands = screen.getAllByRole('link', { name: /law associates home/i })
    expect(brands.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all primary navigation links', () => {
    render(<Nav />)
    expect(screen.getAllByRole('link', { name: /practice areas/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /attorneys/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThan(0)
  })

  it('calls setTheme when the theme toggle is clicked', async () => {
    render(<Nav />)
    const toggle = screen.getByRole('button', { name: /toggle dark mode/i })
    await userEvent.click(toggle)
    expect(mockSetTheme).toHaveBeenCalledWith('dark')
  })

  it('opens the mobile sheet when the hamburger is clicked', async () => {
    render(<Nav />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await userEvent.click(hamburger)
    expect(screen.getByRole('complementary', { name: /mobile menu/i })).toHaveClass('open')
  })

  it('closes the mobile sheet when the close button is clicked', async () => {
    render(<Nav />)
    await userEvent.click(screen.getByRole('button', { name: /open menu/i }))
    await userEvent.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('complementary', { name: /mobile menu/i })).not.toHaveClass('open')
  })
})
