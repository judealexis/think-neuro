import { defineConfig } from 'vite';

import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [svelte()],
    base: '/',
    build: {
        rollupOptions: {
          input: {
            main: 'index.html',
            about: 'about.html',
            faq: 'faq.html',
            internship: 'internship.html',
            newsletter: 'newsletter.html',
            research: 'research.html',
            ty: 'ty.html',
            volunteer: 'volunteer.html',
            // Add other HTML files as needed
          }
        },
        assetsInclude: ['**/*.ttf', '**/*.otf']
      }
})