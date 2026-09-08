import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react', 'gsap', 'gsap/ScrollTrigger'],
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('react-dom') || id.includes('react-router') || id.includes('/react/')) {
              return 'vendor';
            }
          }
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
      '/uploads': 'http://localhost:3001',
      '/sitemap.xml': 'http://localhost:3001',
    },
  },
});
