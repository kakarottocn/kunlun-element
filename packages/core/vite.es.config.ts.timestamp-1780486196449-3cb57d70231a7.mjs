// vite.es.config.ts
import { defineConfig } from "file:///Users/zws/Desktop/workspace/template/zhuxian-ui-v3/node_modules/.pnpm/vite@5.4.21_@types+node@20.19.41/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/zws/Desktop/workspace/template/zhuxian-ui-v3/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.21_@types+node@20.19.41__vue@3.5.35_typescript@5.9.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { readdirSync } from "fs";
import dts from "file:///Users/zws/Desktop/workspace/template/zhuxian-ui-v3/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.19.41_rollup@4.61.0_typescript@5.9.3_vite@5.4.21_@types+node@20.19.41_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/zws/Desktop/workspace/template/zhuxian-ui-v3/packages/core";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}
var vite_es_config_default = defineConfig({
  plugins: [vue(), dts({
    outDir: "dist/types"
  })],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "KunLunUI",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name;
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("packages/utils")) {
            return "utils";
          }
          if (id.includes("packages/hooks")) {
            return "hooks";
          }
          for (const item of getDirectoriesSync("../components")) {
            if (id.includes(`packages/components/${item}`)) {
              return item;
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvendzL0Rlc2t0b3Avd29ya3NwYWNlL3RlbXBsYXRlL3podXhpYW4tdWktdjMvcGFja2FnZXMvY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3p3cy9EZXNrdG9wL3dvcmtzcGFjZS90ZW1wbGF0ZS96aHV4aWFuLXVpLXYzL3BhY2thZ2VzL2NvcmUvdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3p3cy9EZXNrdG9wL3dvcmtzcGFjZS90ZW1wbGF0ZS96aHV4aWFuLXVpLXYzL3BhY2thZ2VzL2NvcmUvdml0ZS5lcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZnVuY3Rpb24gZ2V0RGlyZWN0b3JpZXNTeW5jKGJhc2VQYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgZW50cmllcyA9IHJlYWRkaXJTeW5jKGJhc2VQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XG4gIHJldHVybiBlbnRyaWVzLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5pc0RpcmVjdG9yeSgpKS5tYXAoZW50cnkgPT4gZW50cnkubmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCBkdHMoe1xuICAgIG91dERpcjogJ2Rpc3QvdHlwZXMnXG4gIH0pXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0L2VzJyxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdLdW5MdW5VSScsXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJyxcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucycsXG4gICAgICAgICdAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lJyxcbiAgICAgICAgJ0Bwb3BwZXJqcy9jb3JlJyxcbiAgICAgICAgJ2FzeW5jLXZhbGlkYXRvcidcbiAgICAgIF0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdzdHlsZS5jc3MnKSByZXR1cm4gJ2luZGV4LmNzcydcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIGlmKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGlkLmluY2x1ZGVzKCdwYWNrYWdlcy91dGlscycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3V0aWxzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihpZC5pbmNsdWRlcygncGFja2FnZXMvaG9va3MnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdob29rcydcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGdldERpcmVjdG9yaWVzU3luYyhcIi4uL2NvbXBvbmVudHNcIikpIHtcbiAgICAgICAgICAgIGlmKGlkLmluY2x1ZGVzKGBwYWNrYWdlcy9jb21wb25lbnRzLyR7aXRlbX1gKSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlgsU0FBUyxvQkFBb0I7QUFDeFosT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixTQUFTLG1CQUFtQjtBQUM1QixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFNekMsU0FBUyxtQkFBbUIsVUFBa0I7QUFDNUMsUUFBTSxVQUFVLFlBQVksVUFBVSxFQUFFLGVBQWUsS0FBSyxDQUFDO0FBQzdELFNBQU8sUUFBUSxPQUFPLFdBQVMsTUFBTSxZQUFZLENBQUMsRUFBRSxJQUFJLFdBQVMsTUFBTSxJQUFJO0FBQzdFO0FBRUEsSUFBTyx5QkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJO0FBQUEsSUFDbkIsUUFBUTtBQUFBLEVBQ1YsQ0FBQyxDQUFDO0FBQUEsRUFDRixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxTQUFTLFlBQWEsUUFBTztBQUMzQyxpQkFBTyxVQUFVO0FBQUEsUUFDbkI7QUFBQSxRQUNBLGFBQWEsSUFBSTtBQUNmLGNBQUcsR0FBRyxTQUFTLGNBQWMsR0FBRztBQUM5QixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFHLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRztBQUNoQyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFHLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRztBQUNoQyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxxQkFBVyxRQUFRLG1CQUFtQixlQUFlLEdBQUc7QUFDdEQsZ0JBQUcsR0FBRyxTQUFTLHVCQUF1QixJQUFJLEVBQUUsR0FBRztBQUM3QyxxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
