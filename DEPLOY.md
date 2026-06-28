# Deployment

This Astro site builds to static files in `dist`.

## Requirements

- Node.js `>=22.12.0`
- npm
- No additional deployment dependencies are required for Phase 8.

The Node requirement is declared in `package.json`. Netlify is pinned to Node `22.12.0` in `netlify.toml`; Vercel should use the `package.json` engine requirement, and its project settings should be set to Node 22 or newer if the dashboard requires an explicit runtime selection.

## Local Build Verification

Run the production build locally before deploying:

```sh
npm run build
```

The generated static site will be written to `dist`.

Optional local preview:

```sh
npm run preview
```

## Netlify

Use the included `netlify.toml`.

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22.12.0` or newer

Recommended dashboard setup:

1. Create a new Netlify site from the Git repository.
2. Confirm the build command is `npm run build`.
3. Confirm the publish directory is `dist`.
4. Deploy.

## Vercel

Use the included `vercel.json`.

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `>=22.12.0`

Recommended dashboard setup:

1. Import the Git repository into Vercel.
2. Confirm the framework preset is Astro.
3. Confirm the build command is `npm run build`.
4. Confirm the output directory is `dist`.
5. Confirm the project uses Node 22 or newer.
6. Deploy.

## Cloudflare and Wrangler

Cloudflare Pages can host the static `dist` output, but Wrangler is intentionally not configured in Phase 8.

Do not add Wrangler, Cloudflare deploy scripts, or Cloudflare-specific automation without explicit approval.
