import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteMeta,
  createWebHistory
} from 'vue-router'
import { markRaw } from 'vue'
import Home from '../views/home.vue'

export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: markRaw(Home),
    redirect: '/child',
    meta: {
      title: '首页',
      menuKey: 'Home',
      keepAlive: false
    },
    children: [
      {
        path: '/child',
        name: 'Child',
        meta: {
          title: 'Child'
        },
        component: () => import('@/views/childs/child-a.vue')
      }
    ]
  }
]

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
