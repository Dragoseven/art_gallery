import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/art_gallery/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
  }
})
