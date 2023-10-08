import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(),
  ],
  server: {
    port: 3020,
    // proxy: {
    //   '/auth': 'http://15.164.242.20/auth',
    // },
    // proxy: {
    //   '/auth': {
    //     // target: 'http://15.164.242.20',
    //     target: 'http://15.164.242.20',
    //     changeOrigin: true,
    //   },
    // },
  },
});
