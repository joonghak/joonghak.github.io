// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: process.env.PORTFOLIO_SITE || 'https://joonghak.github.io',
  base: process.env.PORTFOLIO_BASE || '/',
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1' },
});
