# Basleal MERN + Next.js starter

A TypeScript workspace with a Next.js App Router frontend, an Express REST API, and MongoDB access through Mongoose.

## Requirements

- Node.js 20.9 or newer
- npm
- A local MongoDB instance or MongoDB connection URI (optional for the health endpoint)

## Setup

1. Install dependencies from the project root:

   ```sh
   npm install
   ```

2. Copy `.env.example` to `.env` and set `MONGODB_URI` if you want database connectivity. The API reads this root-level file.
3. Optionally copy `apps/web/.env.example` to `apps/web/.env.local` to configure the frontend's API URL.
4. Run both services:

   ```sh
   npm run dev
   ```

The Next.js app is at `http://localhost:3000`; the Express API is at `http://localhost:4000`. The dashboard's **Check connection** button calls `GET /api/health`.

## Scripts

- `npm run dev` starts both development servers.
- `npm run dev:web` starts only Next.js.
- `npm run dev:api` starts only Express.
- `npm run build` builds both workspaces.
- `npm run start:web` and `npm run start:api` start their production builds.

The API starts even when MongoDB is not configured, so its health route remains available. The response reports the current database connection state. Add route handlers and Mongoose models under `apps/api/src` as the application grows.
