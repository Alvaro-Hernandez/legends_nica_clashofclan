import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000 // Cambia el puerto a tu preferencia
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        display: 'standalone',
        lang: 'es,ES',
        name: 'Legends Nica',
        short_name: 'LegedsNica',
        description: 'Clan de Clash of Clans llamado Legends Nica',
        theme_color: '#262323',
        background_color: '#d4d4d4',
        icons: [
          {
            "src": "/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/pwa-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/pwa-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
        ]
      }
    })
  ],
})
