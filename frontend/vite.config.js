import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   manifest: {
    //     name: 'Ona AI',
    //     short_name: 'OnaAI',
    //     description: 'Your AI-powered assistant',
    //     theme_color: '#4CAF50',
    //     background_color: '#2E7D32',
    //     display: 'standalone',
    //     icons: [
    //       {
    //         src: 'favicon.ico',
    //         sizes: '64x64 32x32 24x24 16x16',
    //         type: 'image/x-icon'
    //       }
    //     ]
    //   }
    // })
  ]
});
