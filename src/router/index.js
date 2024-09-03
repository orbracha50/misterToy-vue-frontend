import { createRouter, createWebHistory } from 'vue-router'
import ToyIndex from '../pages/ToyIndex.vue'
import ToyDetails from '../pages/ToyDetails.vue'
import ToyEdit from '../pages/ToyEdit.vue'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/toy',
      name: 'ToyIndex',
      component: ToyIndex
    },
    {
      path: '/toy/:toyId',
      name: 'ToyDetails',
      component: ToyDetails
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'ToyEdit',
      component: ToyEdit
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
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
