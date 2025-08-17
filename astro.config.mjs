import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false, // We'll use custom CSS to match Squarespace exactly
  })],
  output: 'static',
  site: 'https://gobigfilms.com',
  vite: {
    css: {
      devSourcemap: true
    }
  }
});