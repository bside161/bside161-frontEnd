// import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // basicSsl(),
    // mkcert(),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(),
  ],
  server: {
    // https: true,
    port: 3020,
    // proxy: {
    //   '/api': {
    //     target: 'http://15.164.242.20', // the target server you want to proxy to
    //     changeOrigin: true,
    //     // rewrite: (path) => path.replace(/^\/api/, '/'), // remove the /api prefix before forwarding the request
    //   },
    // },
    // proxy: {
    //   '/api': 'http://15.164.242.20',
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
