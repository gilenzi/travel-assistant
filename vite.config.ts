import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {ghPages} from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  resolve: {
    alias: {
      $components: path.resolve(__dirname, './src/components'),
      $layout: path.resolve(__dirname, './src/layout'),
      $pages: path.resolve(__dirname, './src/pages'),
      $images: path.resolve(__dirname, './src/assets/images'),
    },
  },
  base: '/travel-assistant/',
});
