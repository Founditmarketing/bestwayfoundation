import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode, isSsrBuild}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Split vendor code out of the app bundle so a content change does not
      // invalidate React and the router in every returning visitor's cache.
      // Client build only — in the SSR build these are external.
      rollupOptions: isSsrBuild
        ? {}
        : {
            output: {
              manualChunks: {
                react: ['react', 'react-dom', 'react-router', 'react-router-dom'],
                motion: ['framer-motion'],
                icons: ['lucide-react'],
              },
            },
          },
      chunkSizeWarningLimit: 700,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
