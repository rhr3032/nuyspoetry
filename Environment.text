# Nuy's Poetry

A full-stack poetry publishing platform built with Next.js App Router, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, JWT auth, and TipTap rich text editor.

## Features

- Public pages: Home, About, Bengali Poems, English Poems, Articles, Post detail, Contact
- Admin auth with JWT stored in HTTP-only cookies
- Protected dashboard for creating, editing, and deleting posts
- Prisma + PostgreSQL models for `User` and `Post`
- Rich text editor with poetry-friendly line break support
- SEO support: page metadata, Open Graph tags, sitemap, robots
- Vercel-ready setup

## Tech Stack

- Next.js 16 (App Router, compatible with 14+ architecture)
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- JWT + bcryptjs
- TipTap editor

## Environment Variables

Copy `.env.example` to `.env` and update values:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/nuyspoetry?schema=public"
JWT_SECRET="replace-with-a-long-random-secret"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="admin123"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Generate Prisma client:

```bash
npm run prisma:generate
```

3. Run migrations:

```bash
npm run prisma:migrate -- --name init
```

4. Seed the admin user:

```bash
npm run prisma:seed
```

5. Start dev server:

```bash
npm run dev
```

## API Endpoints

- `POST /api/login` - authenticate admin and set auth cookie
- `GET /api/posts` - fetch all posts (public)
- `POST /api/posts` - create post (admin)
- `PUT /api/posts/[id]` - update post (admin)
- `DELETE /api/posts/[id]` - delete post (admin)

## Post Types

- `bengali_poem`
- `english_poem`
- `article`

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Set environment variables in Vercel Project Settings:
	- `DATABASE_URL`
	- `JWT_SECRET`
	- `ADMIN_USERNAME`
	- `ADMIN_PASSWORD`
	- `NEXT_PUBLIC_SITE_URL`
4. Run Prisma migration in your production database:

```bash
npx prisma migrate deploy
```

The app is configured to run `prisma generate` automatically during install via `postinstall`.
