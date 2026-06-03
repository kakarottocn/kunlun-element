import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { readdirSync } from "fs";
import dts from 'vite-plugin-dts'

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return entries.filter(entry => entry.isDirectory()).map(entry => entry.name)
}

export default defineConfig({
  plugins: [vue(), dts({
    outDir: 'dist/types'
  })],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'KunLunUI',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator'
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        },
        manualChunks(id) {
          if(id.includes('node_modules')) {
            return 'vendor'
          }
          if(id.includes('packages/utils')) {
            return 'utils'
          }
          if(id.includes('packages/hooks')) {
            return 'hooks'
          }
          for (const item of getDirectoriesSync("../components")) {
            if(id.includes(`packages/components/${item}`)) {
              return item
            }
          }
        }
      },
    },
  },
})
