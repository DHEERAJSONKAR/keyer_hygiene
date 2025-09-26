import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  define: {
    __WS_TOKEN__: JSON.stringify(process.env.VITE_WS_TOKEN || '')
  }
});
