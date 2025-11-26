import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Bind dev server to IPv4 loopback to avoid EACCES on IPv6 ::1 on Windows
  server: {
    host: '127.0.0.1',
  },
})
