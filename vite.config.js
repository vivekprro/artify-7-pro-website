import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/login': 'http://localhost:8081',
      '/signup': 'http://localhost:8081',
    },
  },
  plugins: [react()],
})
