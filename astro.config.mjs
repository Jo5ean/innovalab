// @ts-check
import { defineConfig } from 'astro/config';
import config from './src/config/config.ts';


import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: config.baseURL
});