import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const basePath = env.VITE_BASE_PATH;

  if (!basePath) {
    throw new Error("Missing required environment variable: VITE_BASE_PATH");
  }

  return {
    plugins: [react(), tailwindcss()],
    base: basePath,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
