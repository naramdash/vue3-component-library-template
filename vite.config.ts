import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      formats: ["es", "umd"],
      name: "index",
      entry: resolve(__dirname, "src/index.ts"),
      fileName(format, entryName) {
        return `index.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
