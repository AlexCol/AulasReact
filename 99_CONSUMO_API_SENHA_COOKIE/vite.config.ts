import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5005,
    https: {
      key: './ssl/localhost.key',
      cert: './ssl/localhost.crt',
    }
  },
});
