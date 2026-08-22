import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Sets a clean, standard port
    open: true, // Automatically opens your browser when you start the server
    host: true, // Allows you to view the app on your mobile device via local network
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Helps with debugging if you encounter errors later
  }
})