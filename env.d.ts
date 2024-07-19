/// <reference types="vite/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="unplugin-vue-router/client" />

declare module 'v-lazy-image' {
  import { DefineComponent } from 'vue'

  const VLazyImage: DefineComponent<any>

  export default VLazyImage
}
