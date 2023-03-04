import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dts: true,
      resolvers: [
        (name: string) => {
          console.log("Name: ", name);
        },
        ArcoResolver(),
      ],
      globs: ["src/components/**/*.vue", "src/App.vue"],
      importPathTransform: (path: string) => {
        if (path.endsWith("View.vue") || path.endsWith("ViewItem.vue")) {
          console.log("Path: ", path);
        }
        return path;
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
