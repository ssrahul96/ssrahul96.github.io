import { defineConfig, type Plugin } from "vite";
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
    /**
     * Make the main stylesheet non-render-blocking.
     *
     * Lighthouse flags the Vite-generated `<link rel="stylesheet" ...>` as render-blocking.
     * We keep a minimal inline baseline for first paint (already present in `index.html`)
     * and load the full CSS asynchronously using the preload+onload pattern.
     *
     * Note: This is a best-effort optimization; it trades potential brief unstyled content
     * for improved FCP/LCP in throttled networks.
     */
    {
      name: "async-stylesheet",
      enforce: "post",
      transformIndexHtml(html: string) {
        return html.replace(
          /<link\b([^>]*?)rel="stylesheet"([^>]*?)>/g,
          (match: string) => {
            // Only rewrite Vite's main CSS asset(s), leave any other stylesheets alone.
            if (!/(href="\/assets\/.*?\.css")/.test(match)) return match;

            const hrefMatch = match.match(/href="([^"]+\.css)"/);
            if (!hrefMatch) return match;
            const href = hrefMatch[1];

            const crossoriginMatch = match.match(/\bcrossorigin\b/);
            const crossOriginAttr = crossoriginMatch ? " crossorigin" : "";

            return [
              `<link rel="preload"${crossOriginAttr} href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">`,
              `<noscript><link rel="stylesheet"${crossOriginAttr} href="${href}"></noscript>`,
            ].join("");
          }
        );
      },
    } satisfies Plugin,
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
    // Ensure production output is minified (Lighthouse: "Minify JavaScript").
    // Vite defaults to esbuild minification, but we keep it explicit.
    minify: "esbuild",
    cssMinify: "esbuild",
    sourcemap: false,
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
