import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import vueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Layouts(),
    vueDevTools(),
    svgLoader({ defaultImport: 'component', svgo: false }),
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts'
    }),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 40
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 40
      },
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true
      }
    })
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
