import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const PORT = 4000;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
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
});
