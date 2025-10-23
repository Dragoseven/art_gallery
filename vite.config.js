
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,
    strictPort: false, // Allow port switching if 5173 is busy
    open: true, // Auto-open browser
    cors: true // Enable CORS
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
