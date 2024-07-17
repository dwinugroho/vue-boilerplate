import { createRouter, createWebHistory } from 'vue-router'

const modules = import.meta.glob('/src/pages/**/[a-z[]*.vue', { eager: true })

const pages = Object.keys(modules)
  .filter((key) => key !== '/src/pages/not-found.vue')
  .map((key) => {
    const path = key
      .replace(/\/src\/pages|app|index|\.vue$/g, '')
      .replace(/\[([^[\]]+)\]/g, ':$1')
      .replace(/\/\([^()]*\)/g, '')
    return {
      path,
      component: () => import(/* @vite-ignore */ key.replace('/src', '..'))
    }
  })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [...pages]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../pages/not-found.vue')
    }
  ]
})

export default router
