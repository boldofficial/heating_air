// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
  }),
  site: 'https://chicagoheatingair.pro',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        item.changefreq = 'weekly';
        item.priority = item.url === 'https://chicagoheatingair.pro/' ? 1.0 : 0.8;
        return item;
      },
    }),
  ],
});
