import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Logo } from '@/components/Logo/Logo'

type FooterLink = { label: string; url: string }
type FooterColumn = { title: string; links?: FooterLink[] }

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const columns: FooterColumn[] = footerData?.columns || []
  const navLinks = columns.flatMap((col) => col.links || [])

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navLinks.map((link, i) => (
              <Link className="text-white" key={i} href={link.url}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
