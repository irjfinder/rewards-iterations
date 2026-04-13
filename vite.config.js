import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` matches the GitHub Pages sub-path so asset URLs resolve.
// `outDir: 'docs'` lets Pages serve the built bundle from main/docs.
export default defineConfig({
  plugins: [react()],
  base: '/rewards-iterations/',
  build: { outDir: 'docs', emptyOutDir: true },
  server: { port: 5173, open: true },
});
