'use client'

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type Language = 'en' | 'ne'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => {},
  toggle: () => {},
})

/** Cookie name read by the server (page.tsx) to pick the Payload locale */
export const LOCALE_COOKIE = 'la-locale'

function readCookieLocale(): Language {
  if (typeof document === 'undefined') return 'en'
  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`))
  const val = match ? decodeURIComponent(match[1]) : null
  return val === 'ne' ? 'ne' : 'en'
}

function writeCookieLocale(lang: Language) {
  // 1-year expiry, path=/ so it's sent to all routes including the server component
  document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=31536000; SameSite=Lax`
}

export function LanguageProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLocale ?? 'en')

  // Sync from cookie on first client render (handles back-button / direct URL)
  useEffect(() => {
    const cookieLocale = readCookieLocale()
    if (cookieLocale !== language) setLanguageState(cookieLocale)
    document.documentElement.lang = cookieLocale
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    writeCookieLocale(lang)
    document.documentElement.lang = lang
  }, [])

  const toggle = useCallback(() => {
    setLanguage(language === 'en' ? 'ne' : 'en')
  }, [language, setLanguage])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
