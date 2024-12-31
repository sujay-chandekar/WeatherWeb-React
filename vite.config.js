import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,  // Enables external access
    strictPort: true,
    port: 3000,  // Port for local development
  },
  build: {
    outDir: 'dist', // Ensures the output directory is correctly set for deployment
  },
});
