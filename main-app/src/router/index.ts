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
        component: () => import('@/views/childs/child-a.vue'),
        children: [
          {
            path: 'docxPreview',
            name: 'DocxPreview',
            meta: {
              title: '视频预览',
              menuKey: 'DocxPreview',
              keepAlive: false
            }
          },
          {
            path: 'videoPreview',
            name: 'VideoPreview',
            meta: {
              title: '视频预览',
              menuKey: 'VideoPreview',
              keepAlive: false
            }
          }
        ]
      },
      {
        path: '/app-chatVideo',
        name: 'ChatVideo',
        component: () => import('@/views/childs/chat-video.vue')
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
