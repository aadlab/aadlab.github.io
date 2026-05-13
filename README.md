# aadlab.github.io

Marketing site for **AAD lab** — the CYPRES 2 training simulator.

Served at https://aadlab.github.io and the support page at https://aadlab.github.io/support.

## Stack

- Next.js 14 with the App Router, `output: 'export'` for a static build.
- Plain CSS (no framework) — single `globals.css` with CSS custom properties driving the theme switch.
- Two canvas-2D background components (`CosmosBackground`, `AuroraBackground`) that recreate the in-app Skia visuals for the web.

## Local dev

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
# → static site emitted to ./out
```

## Deploy

GitHub Actions workflow at `.github/workflows/deploy.yml` builds on every push to `main` and publishes via GitHub Pages.

Enable Pages on the repo: **Settings → Pages → Source: GitHub Actions**.

## Brand

Theme tokens (`--corner-color`, `--brand-pink`, `--aurora-pink`) and palette values are pulled from the app's `branding/aadlab.ts`. Keep them in sync if the app theme shifts.
