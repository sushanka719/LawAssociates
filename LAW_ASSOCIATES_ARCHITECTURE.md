# Law Associates — Frontend Architecture

## Route Groups

```
src/app/
├── (frontend)/          ← Public law firm site (this document)
│   ├── layout.tsx       ← Root HTML shell, theme, global CSS imports
│   ├── page.tsx         ← Home page — assembles all section components
│   ├── [slug]/          ← Payload CMS content pages (about, blog posts, etc.)
│   ├── posts/           ← Blog listing + pagination
│   ├── search/          ← Site search
│   ├── components/      ← Law Associates page components
│   ├── constants/       ← Static site content (copy, data arrays)
│   ├── styles/          ← Site CSS (split into ≤250-line files)
│   └── __tests__/       ← Vitest + React Testing Library unit tests
└── (payload)/           ← Payload CMS admin panel (/admin)
```

## Component Map

All components live in `src/app/(frontend)/components/`:

| File | Type | Renders |
|------|------|---------|
| `Nav.tsx` | Client | Sticky nav, dark-mode toggle, mobile sheet |
| `Hero.tsx` | Server | Above-fold headline, trust stats, portrait |
| `Statistics.tsx` | Server | 4-cell trust strip (years, cases, attorneys, satisfaction) |
| `PracticeAreas.tsx` | Server | 8 practice area rows with animated arrow |
| `WhyUs.tsx` | Server | 6 value-prop cards + managing partner quote |
| `Attorneys.tsx` | Server | 3 attorney cards |
| `CaseResults.tsx` | Server | 3 case result cards on dark band |
| `Testimonials.tsx` | Client | Auto-advancing carousel with prev/next controls |
| `Process.tsx` | Server | 5-step horizontal (vertical on mobile) process |
| `Insights.tsx` | Server | Featured article + 4-item article list |
| `Awards.tsx` | Server | 5 recognition awards row |
| `CtaBand.tsx` | Server | Dark CTA section with phone link |
| `Contact.tsx` | Client | react-hook-form contact form + contact card aside |
| `Footer.tsx` | Server | 5-column footer with dynamic year |
| `ImageSlot.tsx` | Server | Placeholder for drop-in images (dashed border) |

## CSS Architecture

Files are kept under 250 lines and imported in order in `layout.tsx`:

| File | Contents |
|------|----------|
| `tokens.css` | Google Fonts @import, `:root` CSS variables, dark/accent/serif variants |
| `base.css` | Reset, `.la-container`, `.la-section`, typography scale, buttons, `.reveal` |
| `nav.css` | `.la-nav`, brand, nav-links, icon-btn, theme-toggle, mobile sheet |
| `hero.css` | Hero grid, trust strip, hero variants (`split`/`centered`/`fullbleed`) |
| `sections-a.css` | Practice areas, why-us, attorneys, case results |
| `content.css` | Testimonials carousel, process steps, insights, awards |
| `contact-footer.css` | Contact form, CTA band, footer |

## Dark Mode

Theme is managed by the existing Payload `ThemeProvider` (`@/providers/Theme`):
- Storage key: `payload-theme` (localStorage)
- HTML attribute: `data-theme="dark"` on `<html>`
- All CSS dark overrides use `[data-theme="dark"]` selectors
- `Nav.tsx` calls `setTheme()` from `useTheme()` to toggle

## Testing

```
pnpm test:unit    # Vitest unit tests (src/**/*.test.tsx)
pnpm test:int     # Payload integration tests (requires live DB)
pnpm test:e2e     # Playwright end-to-end tests
```

Unit test files in `src/app/(frontend)/__tests__/`:
- `Nav.test.tsx` — dark mode toggle, mobile sheet open/close
- `Hero.test.tsx` — headline, trust stats, CTA link
- `PracticeAreas.test.tsx` — 8 items rendered, correct labels
- `Testimonials.test.tsx` — carousel navigation, slide wrapping
- `Contact.test.tsx` — form submission, success state, firm info

## Content

All static copy lives in `src/app/(frontend)/constants/content.ts`.
To update firm name, phone, email, or any section text — edit that file only.
