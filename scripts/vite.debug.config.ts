import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Debug-only build: keeps React's development bundle so hydration mismatch
// messages are readable. Not part of the production pipeline.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: { 'process.env.NODE_ENV': '"development"' },
  build: { minify: false, outDir: 'dist' },
});
