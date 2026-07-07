# ARC BRIDGE CAPITAL

Boutique advisory website built with Next.js.

## Local Preview

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build

```bash
pnpm build
```

The site is configured with `output: 'export'`, so the static production files are generated in `out/`.

## Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: `Next.js`.
4. Build command: `pnpm build`.
5. Output directory: `out`.

## Cloudflare Pages

1. Create a new Pages project from the GitHub repository.
2. Framework preset: `Next.js (Static HTML Export)`.
3. Build command: `pnpm build`.
4. Output directory: `out`.

## GitHub Pages

Use GitHub Actions or upload the generated `out/` directory as the Pages artifact.

Build command:

```bash
pnpm build
```

Publish directory:

```bash
out
```

## Update Content

Most editable content lives in `app/page.tsx`:

- global city nodes: `cities`
- investment cards: `focusAreas`
- selected opportunities: `opportunities`
- contact links: `contactSection`
