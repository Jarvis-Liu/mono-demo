import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteMeta,
  createWebHistory
} from 'vue-router'
import Home from '../views/home.vue'

export const constantRouterMap = []

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap
})

declare module 'vue-router' {
  interface RouteMeta {
    btns?: Array<{
      key: string
      name: string
    }>
  }
}

export default router
