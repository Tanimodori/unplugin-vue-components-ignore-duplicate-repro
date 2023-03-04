import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "node:path";

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
            if (name.endsWith("ync")) {
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
        if (path.endsWith("ync.vue")) {
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
