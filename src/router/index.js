import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Habits from '@/views/Habits'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/habits',
    name: 'habits',
    component: Habits
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
