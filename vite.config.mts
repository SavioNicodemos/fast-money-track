import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
