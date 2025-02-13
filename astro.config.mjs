// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

console.log({ prod: import.meta.env.PROD });
// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [tailwind()],
  vite: {
    server: {
      allowedHosts: true,
      hmr: import.meta.env.PROD ? false : true, // Deshabilita HMR solo en producción
    }
  }
});