'use client'

import { Menu, Moon, Sun, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { useLanguage } from '@/providers/Language'
import { useTheme } from '@/providers/Theme'
import { getTranslations } from '../translations'
import type { PayloadSiteSettings } from '../types/payload'

interface NavProps {
  siteSettings?: PayloadSiteSettings | null
}

export function Nav({ siteSettings }: NavProps) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const { language, toggle: toggleLangState } = useLanguage()

  // Write cookie + soft-refresh the server component tree so Payload re-fetches with new locale
  const toggleLang = () => {
    toggleLangState()
    setTimeout(() => router.refresh(), 50)
  }

  const t = getTranslations(language)
  const [sheetOpen, setSheetOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // CMS nav labels override translations when present
  const nl = siteSettings?.navLabels
  const navLinks = [
    { href: '#practice', label: nl?.practiceAreas || t.nav.links[0].label },
    { href: '#attorneys', label: nl?.attorneys    || t.nav.links[1].label },
    { href: '#about',    label: nl?.about         || t.nav.links[2].label },
    { href: '#results',  label: nl?.caseResults   || t.nav.links[3].label },
    { href: '#insights', label: nl?.insights      || t.nav.links[4].label },
    { href: '#contact',  label: nl?.contact       || t.nav.links[5].label },
  ]
  const firmName = nl?.firmName || t.nav.firmName
  const bookBtn  = nl?.bookConsultation || t.nav.bookBtn

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
    <a className="brand" href="#top" aria-label={`${firmName} home`} onClick={onClick}>
      <span className="mark">L</span>
      <span className="word"><b>Law</b><span>{firmName.replace('Law ', '')}</span></span>
    </a>
  )

  return (
    <>
      <header className="la-nav" ref={navRef} data-screen-label="Navigation">
        <div className="la-container">
          <Brand />
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-btn lang-toggle"
              onClick={toggleLang}
              aria-label={t.nav.langLabel}
              title={t.nav.langLabel}
              style={{ fontFamily: 'inherit', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', minWidth: 34, padding: '0 6px' }}
            >
              {t.nav.langToggle}
            </button>
            <button className="icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              <Sun className="sun" aria-hidden="true" />
              <Moon className="moon" aria-hidden="true" />
            </button>
            <a href="#contact" className="btn btn-primary btn-sm">{bookBtn}</a>
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
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setSheetOpen(false)}>{label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 12, padding: '0 0 8px' }}>
          <button
            className="btn btn-outline"
            onClick={() => { setSheetOpen(false); toggleLang() }}
            style={{ flex: 1, fontSize: '0.85rem' }}
          >
            {t.nav.langLabel.replace('Switch to ', '')}
          </button>
        </div>
        <a href="#contact" className="btn btn-primary" onClick={() => setSheetOpen(false)}>
          {bookBtn}
        </a>
      </aside>
    </>
  )
}
