'use client'

import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { useTheme } from '@/providers/Theme'

const NAV_LINKS = [
  { href: '#practice', label: 'Practice Areas' },
  { href: '#attorneys', label: 'Attorneys' },
  { href: '#about', label: 'About' },
  { href: '#results', label: 'Case Results' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const { theme, setTheme } = useTheme()
  const [sheetOpen, setSheetOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  /* compact nav on scroll */
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const handler = () => nav.classList.toggle('compact', window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* lock body scroll when sheet is open */
  useEffect(() => {
    document.body.style.overflow = sheetOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sheetOpen])

  /* close sheet on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setSheetOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const Brand = ({ onClick }: { onClick?: () => void }) => (
    <a className="brand" href="#top" aria-label={'Aurelius Legal Partners home'} onClick={onClick}>
      <span className="mark">L</span>
      <span className="word"><b>Law</b><span>Associates</span></span>
    </a>
  )

  return (
    <>
      <header className="la-nav" ref={navRef} data-screen-label="Navigation">
        <div className="la-container">
          <Brand />
          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              <Sun className="sun" aria-hidden="true" />
              <Moon className="moon" aria-hidden="true" />
            </button>
            <a href="#contact" className="btn btn-primary btn-sm">Book Consultation</a>
            <button className="icon-btn la-hamburger" onClick={() => setSheetOpen(true)} aria-label="Open menu">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`sheet-scrim${sheetOpen ? ' open' : ''}`}
        aria-hidden="true"
        onClick={() => setSheetOpen(false)}
      />
      <aside className={`sheet${sheetOpen ? ' open' : ''}`} aria-label="Mobile menu">
        <div className="sheet-head">
          <Brand onClick={() => setSheetOpen(false)} />
          <button className="icon-btn" onClick={() => setSheetOpen(false)} aria-label="Close menu">
            <X />
          </button>
        </div>
        <nav aria-label="Mobile primary">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setSheetOpen(false)}>{label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary" onClick={() => setSheetOpen(false)}>
          Book Consultation
        </a>
      </aside>
    </>
  )
}
