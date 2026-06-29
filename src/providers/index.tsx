import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { LanguageProvider } from './Language'
import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
