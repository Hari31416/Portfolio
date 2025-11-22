import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { writeFileSync, copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    {
      name: "create-nojekyll-and-cname",
      closeBundle() {
        writeFileSync("dist/.nojekyll", "");
        copyFileSync("CNAME", "dist/CNAME");
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
