import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/pressupostos',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Benvinguda',
    component: () => import(/* webpackChunkName: "benvinguda" */ '../views/Benvinguda.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
