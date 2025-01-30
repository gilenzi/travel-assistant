import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $components: path.resolve(__dirname, './src/components'),
      $layout: path.resolve(__dirname, './src/layout'),
      $pages: path.resolve(__dirname, './src/pages'),
      $images: path.resolve(__dirname, './src/assets/images'),
    },
  },
  base: '/travel-assistant',
});
