# Basement

Editing and post-production.

## Setup

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
yarn build
yarn start
```

## Deploy on Vercel (from the basement_tv repo)

1. **Push this project to your GitHub repo** (if not already):
   ```bash
   git remote -v   # should show origin → https://github.com/digitalkeed/basement_tv
   git add .
   git commit -m "Basement site: Next.js feed, work pages, Vercel-ready"
   git push origin main
   ```

2. **Connect the repo to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in (or sign up with GitHub).
   - Click **Add New… → Project**.
   - Import **digitalkeed/basement_tv** from your GitHub account.
   - Leave **Framework Preset** as **Next.js** and **Root Directory** blank.
   - Click **Deploy**. Vercel will run `yarn install` and `yarn build` and deploy.

3. **Optional**: To deploy from your machine with the CLI, run `vercel login` once, then from this directory run `npx vercel` (preview) or `npx vercel --prod` (production).

No environment variables are required for basic deployment.

## Content

- **Projects**: Edit `content/projects.ts` — add or change projects (slug, client, title, category, videoSrc, poster, credits, year).
- **Site copy & links**: Edit `content/site.ts` for nav, footer locations, and legal links.

## Routes

| Path | Description |
|------|-------------|
| `/` | Home — project feed |
| `/editors` | Editors category |
| `/the-lookout` | The Lookout category |
| `/music-videos` | Music videos category |
| `/films` | Films category |
| `/contact` | Contact |
| `/work/[slug]` | Project detail |
| `/privacy`, `/terms`, `/careers` | Legal placeholders |
