// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // écoute toutes les IP (utile pour réseau local)
    port: 3001,      // choisis le port que tu veux
    strictPort: true, // si true, le port 3001 sera obligatoire, sinon Vite cherchera un autre port libre
  },
})
