import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifestFilename: 'manifest.json',
      manifest: {
        name: 'Hello World PWA',
        short_name: 'HelloPWA',
        description: 'A simple Hello World PWA built with Vite and React',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    // Allow the ngrok host
    allowedHosts: [
      '9104-2003-ce-9f3a-8a17-d8ef-f977-30c2-e56.ngrok-free.app', // Replace with your ngrok host
    ],
  },
});