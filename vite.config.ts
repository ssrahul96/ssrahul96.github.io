import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor'
            }
            if (id.includes('@radix-ui')) {
              return 'radix-ui'
            }
            if (id.includes('@tanstack/react-query')) {
              return 'react-query'
            }
            if (id.includes('date-fns')) {
              return 'date-fns'
            }
            if (id.includes('lucide-react')) {
              return 'lucide-icons'
            }
            if (id.includes('zod')) {
              return 'zod'
            }
            return 'vendor'
          }
        },
      },
    },
  },
}));
