import { createRouter, createWebHistory } from 'vue-router'
import ToyIndex from '../pages/ToyIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ToyIndex',
      component: ToyIndex
    },
    {
      path: '/toy/:toyId',
      name: 'ToyIndex',
      component: ToyIndex
    },
    {
      path: '/',
      name: 'ToyIndex',
      component: ToyIndex
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/About.vue')
    }
  ]
})

export default router
