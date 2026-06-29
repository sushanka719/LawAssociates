# Law Associates — Next.js + Payload CMS Website

A full-featured law firm website built with **Next.js 16**, **Payload CMS 3**, **PostgreSQL**, and **Tailwind CSS**. Includes a dynamic public-facing site, a headless CMS admin panel, multilingual support, dark mode, contact forms, and end-to-end tests.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| CMS | Payload CMS 3 |
| Database | PostgreSQL 16 |
| Styling | Tailwind CSS 4 + CSS variables |
| UI Components | Radix UI primitives |
| Forms | react-hook-form |
| Rich Text | Lexical editor |
| Testing | Vitest · React Testing Library · Playwright |
| Package Manager | pnpm |
| Containerisation | Docker + Docker Compose |

---

## Project Structure

```
lawEvolvion/
├── src/
│   ├── app/
│   │   ├── (frontend)/          # Public law firm site
│   │   │   ├── components/      # Page sections (Hero, Nav, Attorneys, …)
│   │   │   ├── constants/       # Static copy & data arrays
│   │   │   ├── styles/          # Modular CSS files (tokens, base, nav, …)
│   │   │   ├── translations/    # i18n string files
│   │   │   └── __tests__/       # Vitest unit tests
│   │   └── (payload)/           # Payload CMS admin panel (/admin)
│   ├── collections/             # Payload CMS collections
│   │   ├── Attorneys.ts
│   │   ├── Awards.ts
│   │   ├── CaseResults.ts
│   │   ├── Insights.ts
│   │   ├── PracticeAreas.ts
│   │   ├── Testimonials.ts
│   │   └── …
│   ├── globals/                 # Payload global documents
│   │   ├── SiteSettings.ts
│   │   ├── ProcessSteps.ts
│   │   └── WhyChooseUs.ts
│   ├── blocks/                  # Reusable content blocks
│   ├── hooks/                   # Payload lifecycle hooks
│   ├── plugins/                 # Payload plugins
│   └── payload.config.ts        # Main Payload configuration
├── scripts/
│   └── seed-data.mjs            # Database seed script
├── docker-compose.yml           # One-command local stack
├── Dockerfile                   # Production Docker image
├── .env.example                 # Environment variable template
└── next.config.ts
```

---

## Page Sections

| Component | Type | Description |
|---|---|---|
| `Nav.tsx` | Client | Sticky nav, dark-mode toggle, mobile drawer |
| `Hero.tsx` | Server | Above-fold headline, trust stats, portrait |
| `Statistics.tsx` | Server | Years · Cases · Attorneys · Satisfaction strip |
| `PracticeAreas.tsx` | Server | 8 practice area rows with animated arrow |
| `WhyUs.tsx` | Server | 6 value-prop cards + managing partner quote |
| `Attorneys.tsx` | Server | Attorney profile cards |
| `CaseResults.tsx` | Server | Case result cards on dark band |
| `Testimonials.tsx` | Client | Auto-advancing testimonial carousel |
| `Process.tsx` | Server | 5-step consultation process |
| `Insights.tsx` | Server | Featured article + article list |
| `Awards.tsx` | Server | Recognition awards row |
| `CtaBand.tsx` | Server | Dark CTA section with phone link |
| `Contact.tsx` | Client | Contact form + firm info card |
| `Footer.tsx` | Server | 5-column footer |

---

## Prerequisites

- **Node.js** `^18.20.2` or `>=20.9.0`
- **pnpm** `^9` or `^10`
- **PostgreSQL 16** (or use Docker Compose — recommended)

---

## Installation & Local Development

### 1. Clone & install

```bash
git clone https://github.com/sushanka719/LawAssociates.git
cd LawAssociates/lawEvolvion
pnpm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env` and fill in the required values:

```env
# PostgreSQL connection string
DATABASE_URL=postgresql://payload:payload@localhost:5432/payload

# Secret used to sign JWT tokens (generate with: openssl rand -hex 32)
PAYLOAD_SECRET=your-secret-here

# Public URL of the app — no trailing slash
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Secret for protecting cron job endpoints
CRON_SECRET=your-cron-secret

# Secret for validating live-preview requests
PREVIEW_SECRET=your-preview-secret
```

### 3. Start the database

```bash
# Option A — Docker Compose (recommended, no local Postgres needed)
docker compose up postgres -d

# Option B — use your own local Postgres instance
# Make sure DATABASE_URL in .env points to it
```

### 4. Run migrations

```bash
pnpm payload:migrate
```

### 5. (Optional) Seed demo data

```bash
pnpm seed
```

### 6. Start the dev server

```bash
pnpm dev
```

- Public site: [http://localhost:3000](http://localhost:3000)
- Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

On first visit to `/admin`, follow the on-screen prompt to create your admin account.

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server with hot reload |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm payload:migrate` | Run pending database migrations |
| `pnpm payload:migrate:create` | Create a new migration file |
| `pnpm payload:migrate:fresh` | Drop and re-run all migrations |
| `pnpm seed` | Seed the database with demo content |
| `pnpm generate:types` | Regenerate Payload TypeScript types |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Auto-fix ESLint issues |
| `pnpm test:unit` | Run Vitest unit tests |
| `pnpm test:int` | Run integration tests (requires live DB) |
| `pnpm test:e2e` | Run Playwright end-to-end tests |
| `pnpm test` | Run all three test suites |

---

## Docker — Full Stack

The repo includes a multi-stage `Dockerfile` and a `docker-compose.yml` that runs both the Next.js app and a Postgres database.

```bash
# Build and start everything
docker compose up --build

# Or just start the database in the background
docker compose up postgres -d
```

> **Note:** The Dockerfile expects `output: 'standalone'` in `next.config.ts`.

---

## Content Management

All static copy (firm name, phone, email, section text) lives in:

```
src/app/(frontend)/constants/content.ts
```

Dynamic content (attorneys, practice areas, testimonials, insights, awards, case results) is managed through the Payload admin panel at `/admin`.

---

## Dark Mode

Managed by the Payload `ThemeProvider`. The chosen theme is persisted in `localStorage` under the key `payload-theme` and applied as `data-theme="dark"` on the `<html>` element. The `Nav.tsx` component calls `setTheme()` from `useTheme()` to toggle it.

---

## Internationalisation

Language files live in `src/app/(frontend)/translations/`. The active locale is managed by the `Language` provider at `src/providers/Language/`.

---

## Testing

```bash
# Unit tests — fast, no DB required
pnpm test:unit

# Integration tests — requires PostgreSQL
pnpm test:int

# End-to-end tests — requires running dev server
pnpm test:e2e
```

Test files in `src/app/(frontend)/__tests__/` cover Nav, Hero, PracticeAreas, Testimonials, and Contact components.

---

## Deployment

### Vercel

Add the Vercel Postgres adapter:

```bash
pnpm add @payloadcms/db-vercel-postgres
```

```ts
// payload.config.ts
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'

export default buildConfig({
  db: vercelPostgresAdapter({
    pool: { connectionString: process.env.POSTGRES_URL || '' },
  }),
})
```

### Self-hosted (VPS / Docker)

```bash
pnpm build
pnpm payload:migrate  # run migrations before starting
pnpm start
```

Or use Docker Compose for a fully containerised deployment.

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `PAYLOAD_SECRET` | Yes | JWT signing secret (min 32 chars) |
| `NEXT_PUBLIC_SERVER_URL` | Yes | Public base URL, no trailing slash |
| `CRON_SECRET` | Yes | Authenticates cron job requests |
| `PREVIEW_SECRET` | Yes | Validates live-preview requests |

---

## License

MIT
