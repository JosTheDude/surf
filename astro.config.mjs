import { defineConfig } from 'astro/config';

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [compress()],
  sitemap: true,
  site: 'https://surf.joscodes.xyz/',
  outDir: 'public',
  publicDir: 'static'
});
