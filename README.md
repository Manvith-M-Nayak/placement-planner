# CareerPath — B.Tech CSE Career Roadmap Builder

A static, privacy-respecting website that helps B.Tech Computer Science students explore career
paths and build a customizable semester-wise roadmap up to the beginning of Semester 7.

- 14 detailed, role-specific career roadmaps (`/careers/[slug]`)
- Career explorer with search and area filters (`/careers`)
- Semester-wise degree roadmap builder with fundamentals / balanced / specialization variants (`/degree-roadmap`)
- Temporary roadmap workspace: select, reorder, edit, add topics/projects/notes, print, export Markdown/JSON (`/custom-roadmap`)
- Side-by-side comparison of up to three paths (`/compare`)
- Searchable resource library with static topic pages (`/resources`, `/resources/[topic]`)

## Principles

- **No backend**: no API routes, server actions, databases, auth, or environment variables.
- **No tracking or persistence**: no analytics, cookies, localStorage, sessionStorage, or IndexedDB.
  Workspace edits live in React state and reset on refresh. Exports happen only on explicit clicks.
- **No calculations**: roadmaps are curated static content selected by lookup tables
  (`src/data/degree.ts`), never scored or scheduled.

## Development

Requires Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # node:test suite (data integrity, selection logic, workspace, exports, constraints)
npm run lint
npm run typecheck  # run `npx next typegen` first on a fresh clone
npm run build && npm start
```

## Project structure

```
src/
  app/              routes (App Router); client components live beside their page
  components/       shared UI (header, setup form, resource card, Semester 7 guide)
  data/careers/     one typed file per career path
  data/degree.ts    Semesters 1–6, focus variants, stage placement table, 30-day plans
  data/resources.ts resource library
  lib/              types, roadmap selection, workspace operations, exports
tests/              node:test suites
```

## Deploying to Vercel

Import the repository in Vercel (framework preset: Next.js). No environment variables are needed.
Optionally set `NEXT_PUBLIC_SITE_URL` to a custom domain for sitemap/canonical URLs; otherwise Vercel's
production URL is used automatically.
