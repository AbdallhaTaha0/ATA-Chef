
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/ATA-Chef/",
  plugins: [
    tailwindcss(),react()
  ],
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
