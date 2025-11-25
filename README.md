# thread-x

thread-x is a Next.js 13+ (App Router) discussion / threads starter project that demonstrates a small community/forum-style UI with authentication (Clerk), file uploads (UploadThing), and MongoDB persistence via Mongoose.

This repository includes server and client components, API routes, and example models/actions for threads, users, and communities.

**Key features**

- Next.js App Router (`app/`) with server and client components
- Authentication using Clerk
- File uploads with UploadThing
- MongoDB via Mongoose (`MONGO_URL`)
- Structured components in `components/` and shared UI primitives in `components/ui/`

**Quick links**

- `app/` — Next.js routes and pages
- `components/` — UI components (cards, forms, shared layout)
- `lib/` — helpers, Mongoose connection, UploadThing config, and action helpers
- `models/` — Mongoose models for `user`, `thread`, and `community`
- `api/` — server routes (UploadThing core and webhook handlers)

## Requirements

- Node.js 18+ (or the version recommended by Next.js)
- npm, yarn, or pnpm
- A MongoDB connection (Atlas or self-hosted)
- Clerk account and API keys (for auth)
- UploadThing account and keys (for file uploads)

## Environment variables

Create a `.env.local` file at the project root containing the following keys (example values are provided in the repo but keep secrets out of source control):

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk publishable key
- `CLERK_SECRET_KEY` — Clerk secret key
- `NEXT_CLERK_WEBHOOK_SECRET` — Clerk webhook secret for verifying webhooks
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL` — Sign-in URL (e.g. `/sign-in`)
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL` — Sign-up URL (e.g. `/sign-up`)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` — Redirect after sign-in (e.g. `/onboarding`)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` — Redirect after sign-up (e.g. `/`)
- `MONGO_URL` — MongoDB connection string
- `UPLOADTHING_SECRET` — UploadThing secret key
- `UPLOADTHING_APP_ID` — UploadThing app id

Important: Do not commit credentials to the repository. Use GitHub secrets or environment management for production.

## Install and run

Install dependencies and run the development server:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

Common npm scripts (from `package.json`):

- `dev` — Run Next.js in development mode
- `build` — Build the production app
- `start` — Start the production server after `build`
- `lint` — Run ESLint (if configured)

## Project structure (high level)

- `app/` — Next.js App Router pages and layouts. Key folders:
  - `app/(auth)/` — auth-related layouts and pages (sign-in, sign-up)
  - `app/(root)/` — main app layout and homepage
  - `app/thread/[id]` — thread detail pages
  - `app/create-thread` — page for posting a new thread
- `components/` — UI components including `cards/`, `forms/`, `shared/`, and `ui/` primitives
- `lib/` — helpers: `mongoose.ts`, `uploadthing.ts`, `utils.ts`, and `actions/` for data access
- `models/` — Mongoose schemas for `user`, `thread`, and `community`
- `api/` — server route files (UploadThing core and Clerk webhook handlers)

## Notes on auth & uploads

- Clerk handles authentication; Clerk routes and webhook verification are implemented under `api/webhook/clerk/route.ts`.
- UploadThing configuration and core route live under `api/uploadthing/` and `lib/uploadthing.ts`.

## Development tips

- To work on database-backed features, provide a valid `MONGO_URL` pointing to a MongoDB instance (Atlas works well).
- Use the provided components in `components/forms/` for posting threads and comments as examples of client/server interactions.

## Deployment

This app is ready to deploy to Vercel or any hosting that supports Next.js 13 App Router. Set the environment variables in the deployment platform (Vercel dashboard, for example).

## Contributing

Contributions are welcome. Open issues or PRs for bug fixes, enhancements, or documentation improvements.

## License

This repository does not include a license file. Add a `LICENSE` if you want to make the project open source.

---

If you'd like, I can also:

- run the app locally and verify pages (requires environment variables), or
- add a short `CONTRIBUTING.md` and `ISSUE_TEMPLATE` for the repo.
