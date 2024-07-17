import './styles/main.css'

import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { VueQueryPlugin, type VueQueryPluginOptions } from 'vue-query'

import App from './App.vue'
import router from './router'

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(createHead())
app.use(VueQueryPlugin, vueQueryPluginOptions)
app.use(router)

app.mount('#app')
