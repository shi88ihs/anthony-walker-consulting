// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { copyFile } from 'node:fs/promises';

const sitemapXmlAlias = () => ({
  name: 'sitemap-xml-alias',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await copyFile(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir));
    },
  },
});

export default defineConfig({
  site: 'https://placeholder.com', // PLACEHOLDER: replace with real domain
  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    sitemapXmlAlias(),
  ],
});
