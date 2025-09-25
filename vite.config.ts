import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fs-jun25-team-4-tech-check/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          `@use '@/styles/_variables.scss' as *;` +
          `@use '@/styles/_mixins.scss' as *;` +
          `@use '@/styles/_global' as *;`,
      },
    },
  },
});
