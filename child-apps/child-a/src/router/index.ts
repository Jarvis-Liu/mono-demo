import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteMeta,
  createWebHistory
} from 'vue-router'
import Home from '@/views/home.vue'

export const constantRouterMap = [
  {
    path: '/child',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      menuKey: 'Home',
      keepAlive: false
    },
    children: [
      {
        path: 'docxPreview',
        name: 'DocxPreview',
        component: () => import('@/views/detail.vue'),
        meta: {
          title: '详情',
          menuKey: 'Detail',
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
        },
        component: () => import('@/views/videoPreview/index.vue')
      }
    ]
  },
  // {
  //   path: '/child',
  //   name: 'home',
  //   component: () => import('@/views/detail.vue'),
  //   meta: {
  //     title: '详情',
  //     menuKey: 'Detail',
  //     keepAlive: false
  //   }
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
  console.log(to)

  next()
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
