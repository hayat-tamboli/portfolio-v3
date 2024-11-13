import { defineConfig } from 'astro/config';
import swup from '@swup/astro';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }),, vue(), react(), swup({
    theme: false,
    animationClass: 'transition-',
    containers: ['nav', 'main'],
    parallel: ['main', 'nav'],
    cache: true,
    preload: true,
    accessibility: true,
    forms: false,
    morph: true,
    parallel: false,
    progress: false,
    routes: true,
    smoothScrolling: true,
    updateBodyClass: false,
    updateHead: true,
    reloadScripts: true,
    debug: false,
    loadOnIdle: true,
    globalInstance: false,
  })],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});