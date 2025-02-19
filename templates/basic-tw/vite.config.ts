import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { VitePWA } from 'vite-plugin-pwa'

// VitePWA docs: https://vite-pwa-org.netlify.app/guide/
// When you are ready to enable PWA features: 
// 1. Update manifest details in pwaConfig
// 2. Add icons to the public folder
// 3. Uncomment the pwaConfig object and the VitePWA plugin

// const pwaConfig = { 
//   registerType: 'autoUpdate',
//   includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
//   manifest: {
//     name: 'your app name',
//     short_name: 'your app short name',
//     description: 'your app description',
//     theme_color: '#ffffff',
//     icons: [
//       {
//         src: 'logo-144.png',
//         sizes: '144x1s44',
//         type: 'image/png'
//       },
//       {
//         src: 'logo-512.png',
//         sizes: '512x512',
//         type: 'image/png'
//       },
//       {
//         src: 'logo-512.png',
//         sizes: '512x512',
//         type: 'image/png',
//         purpose: 'any maskable'
//       }
//     ]
//   },
// }


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // VitePWA(pwaConfig) // Uncomment this line to enable PWA features
  ],
})
