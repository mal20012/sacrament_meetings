# Sacrament Meeting Planner

A Next.js App Router project for viewing ward sacrament meeting schedules, agendas, and announcements. Meeting records are sample in-memory data in `lib/meetings-db.ts`.

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The meetings list and detail pages read from the app's API routes; local development uses `http://localhost:3000` by default.

For deployments, set `APP_URL` to the app's absolute origin (for example, `https://sacrament-meetings.example.com`). Vercel deployments can use the provided `VERCEL_URL`.

## Routes

- `/` — landing page
- `/meetings` — all sample meetings
- `/meetings/current` — redirects to the current Sunday's meeting, or `/meetings` if no matching record exists
- `/meetings/[id]` — meeting agenda with a print view
- `/api/meetings` and `/api/meetings/[id]` — typed meeting API

## Checks

```bash
npm run lint
npm run build
```
