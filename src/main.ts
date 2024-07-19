import './styles/main.css'

import {
  QueryClient,
  VueQueryPlugin,
  type VueQueryPluginOptions
} from '@tanstack/vue-query'
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 0 } }
})

const vueQueryPluginOptions: VueQueryPluginOptions = { queryClient }

const app = createApp(App)

app.use(createPinia())
app.use(createHead())
app.use(VueQueryPlugin, vueQueryPluginOptions)
app.use(router)

app.mount('#app')
