import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const PORT = 4000;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    port: PORT,
    host: true,
    open: true,
  },
  preview: {
    port: PORT,
    host: true,
    open: true,
  },
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
