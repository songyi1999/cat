import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',//首页
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'My',   
    component: () => import('../views/my.vue')
  }
  ,
  {
    path: '/category',
    name: 'category',   
    component: () => import('../views/category.vue')
  }
  ,
  {
    path: '/takepic',
    name: 'takepic',   
    component: () => import('../views/takepic.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
