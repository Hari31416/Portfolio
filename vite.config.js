import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { writeFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/",
  plugins: [
    react(),
    {
      name: "create-nojekyll",
      closeBundle() {
        writeFileSync("dist/.nojekyll", "");
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
