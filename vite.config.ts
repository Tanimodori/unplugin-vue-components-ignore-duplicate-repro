import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";

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
        {
          type: "component",
          resolve: (name: string) => {
            console.log("Name: ", name);
            if (name.endsWith("View") || name.endsWith("ViewItem")) {
              return {
                from: "@arco-design/web-vue",
                name: "Input",
              };
            }
          },
        },
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
