# Consulting Website

Static Astro website for a consulting business, an independent Perth IT consulting site covering AI consulting, Linux and cloud infrastructure, field IT support, contact capture, and anonymised case studies.

The site builds to static files in `dist` and uses Astro content collections for case studies.

## Requirements

- Node.js `>=22.12.0`
- npm

## Run Locally

From a fresh checkout, install the locked dependencies:

```sh
npm ci
```

Start the local dev server:

```sh
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321`.

Build the production site:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Add a Case Study

Case studies live in `src/content/case-studies`.

1. Create a new Markdown file using a URL-safe slug, for example `src/content/case-studies/example-project.md`.
2. Add frontmatter that matches the collection schema in `src/content/config.ts`.
3. Write the body content in Markdown below the frontmatter.
4. Keep client names, private hostnames, sensitive details, revenue figures, and invented metrics out of the copy.
5. Run `npm run build` to validate the new content and generated routes.

Required frontmatter:

```yaml
---
title: "Example Case Study Title"
summary: "Short summary shown on listing pages."
category: "Linux & Cloud"
tags:
  - "--example"
challenge: "Short description of the problem."
outcome: "Short description of the result."
date: "2026-06"
draft: false
---
```

Allowed `category` values are:

- `AI & Automation`
- `Linux & Cloud`
- `Field IT`
- `Docker & VPS`

The case study route is generated automatically from the file slug. If a custom SEO title is required, add the slug to the `seoTitles` map in `src/pages/case-studies/[...slug].astro`; otherwise the page falls back to the case study title.

## Deploy

Run a production build before deploying:

```sh
npm run build
```

The deployable output is `dist`.

Netlify is configured with `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22.12.0` or newer

Vercel is configured with `vercel.json`:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `>=22.12.0`

Cloudflare Pages can host the static `dist` output, but Wrangler and Cloudflare-specific deployment automation are not configured.

Do not configure a production domain until the real domain is confirmed. When the real domain is ready, update the Astro `site` value, canonical URLs, robots sitemap URL, and schema URL together.

## Remaining Handoff Items

The following placeholders remain intentionally unresolved:

- `astro.config.mjs:18` - `site: 'https://placeholder.com'` with `PLACEHOLDER: replace with real domain`.
- `public/robots.txt:3` - `Sitemap: [PLACEHOLDER: https://anthonywalker.com.au/sitemap.xml]`.
- `src/components/seo/SchemaOrg.astro:8` - `url: '[PLACEHOLDER: https://anthonywalker.com.au]'`.
- `src/components/layout/Footer.astro:20` - `[PLACEHOLDER: ABN XX XXX XXX XXX]`.
- `src/components/layout/Footer.astro:39` - `[PLACEHOLDER: Add LinkedIn URL when ready]`.
- `src/pages/about.astro:51` - professional photo placeholder.
- `src/pages/about.astro:114` - `[PLACEHOLDER: Add LinkedIn URL when ready]`.
- `src/components/shared/ContactForm.astro:11` - `PLACEHOLDER: configure form action for your deployment`.

The following canonical URL values also still use `https://placeholder.com` and should be updated only after the real domain is confirmed:

- `src/pages/index.astro`
- `src/pages/404.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`
- `src/pages/services/index.astro`
- `src/pages/services/ai-consulting.astro`
- `src/pages/services/linux-cloud.astro`
- `src/pages/services/field-it.astro`
- `src/pages/case-studies/index.astro`
- `src/pages/case-studies/[...slug].astro`

## Verification

Available npm scripts are `dev`, `build`, `preview`, and `astro`. There are no dedicated test or lint scripts in `package.json`.

`astro check` currently requires additional packages (`@astrojs/check` and `typescript`) that are not declared in this project. Do not add them without explicit approval.
