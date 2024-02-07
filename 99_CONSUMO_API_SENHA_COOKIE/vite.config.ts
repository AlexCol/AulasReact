import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5005,
    https: {
      key: './ssl/localhost.key',
      cert: './ssl/localhost.crt'
    },
    strictPort: true,
    hmr: {
      //clientPort: 5005, //GET http://localhost:5005/ net::ERR_EMPTY_RESPONSE
      //clientPort: 5010, //port to nowhere, GET http://localhost:5010/ net::ERR_CONNECTION_REFUSED
      //clientPort: 5001, //port to my api http link, goes on an infinite loop
      host: "localhost",
      protocol: "ws"
    },
  },
});