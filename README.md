# LARA Swim School Website

A complete responsive public-facing Next.js website for LARA Swim School.

## Features

- Premium responsive swimming academy design
- Sticky navigation and smooth section links
- Programs, coaches, gallery, testimonials, FAQ, and inquiry sections
- Mobile navigation
- Interactive FAQ accordion
- Gallery lightbox
- Frontend-only inquiry validation and confirmation
- Unverified contact, coach, and testimonial details clearly marked as placeholders

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase setup

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in `.env.local` for local development and in the deployment platform's environment variables for production. The local `.env.local` file is ignored by Git.

Supabase browser and server clients are provided in `src/utils/supabase/`. `src/proxy.ts` uses the Next.js 16 Proxy convention to refresh auth cookies. The admin dashboard currently uses browser-local preview data; connecting its CRUD screens to Supabase requires school tables and row-level security policies.

## Production

```bash
npm run build
npm start
```

For Vercel, select the Next.js framework preset and use the repository root as the project Root Directory (leave it at `./`). Do not set it to `public/`; that folder only contains static assets.
