import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
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
  }, build: {
    rollupOptions: {
      output: {
        manualChunks: {
          radix: [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-tabs",
            "@radix-ui/react-popover",
            "@radix-ui/react-dropdown-menu",
            // Add others as needed
          ],
          reactVendor: ["react", "react-dom", "react-router-dom"],
          uiUtils: ["clsx", "lucide-react", "tailwind-merge"],
          formLibs: ["react-hook-form", "zod", "@hookform/resolvers"],
        },
      },
    },
  },
}));
