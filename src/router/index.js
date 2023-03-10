import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.jsx'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.jsx')
    }
  ]
})

export default router
