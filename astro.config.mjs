import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://1nfinit0.github.io/Portfolio',
  base: '/1nfinit0',
  build: { outDir: 'dist', // Directorio de salida 
  },
});