import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://sistechsoftware.com.br',
  base: 'sistechsoftware.com.br',
  integrations: [tailwind()]
});
