import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "core/assets": "./src/core/assets",
      "core/components": "./src/core/components",
      "core/utils": "./src/core/utils",
    },
  },
});
