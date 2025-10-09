import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/art_gallery/',
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,
    strictPort: false, // Allow port switching if 5173 is busy
    open: true, // Auto-open browser
    cors: true // Enable CORS
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
  }
})
