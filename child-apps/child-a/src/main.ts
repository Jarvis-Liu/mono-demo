import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'animate.css'
import '@/assets/style/index.css'
import '@/assets/style/common.less'

const app = createApp(App)

app.use(router).mount('#child-a')

function handleMicroData(router: any) {
  // eventCenterForA 是基座添加到window的数据通信对象
  if (window.rawWindow.eventCenterForA) {
    // 主动获取基座下发的数据
    console.log('app-sidp getData:', window.rawWindow.eventCenterForA.getData())

    // 监听基座下发的数据变化
    window.rawWindow.eventCenterForA.addDataListener(
      (data: Record<string, unknown>) => {
        console.log('这里是sidp-main的监听')
        console.log('app-sidp addDataListener:', data)
        if (data.key === 'userInfo') {
          store.$patch((state: any): void => {
            state.userInfo = data.userInfo
          })
        }

        if (data.path && typeof data.path === 'string') {
          data.path = data.path.replace(/^#/, '')
          // 当基座下发path时进行跳转
          if (data.path && data.path !== router.currentRoute.value.path) {
            router.push(data.path as string)
          }
        }
      },
      true
    )

    // 向基座发送数据
    setTimeout(() => {
      window.rawWindow.eventCenterForA.dispatch({ myname: 'app-sidp' })
    }, 3000)
  } else {
    console.warn('未找到eventCenterForA，无法通信')
  }
}

/**
 * 用于解决主应用和子应用都是vue-router4时相互冲突，导致点击浏览器返回按钮，路由错误的问题。
 * 相关issue：https://github.com/micro-zoe/micro-app/issues/155
 * 当前vue-router版本：4.0.12
 */
function fixBugForVueRouter4(router: Router) {
  // 判断主应用是main-vue3或main-vite，因为这这两个主应用是 vue-router4
  if (
    window.location.href.includes('/main-vue3') ||
    window.location.href.includes('/main-vite')
  ) {
    /**
     * 重要说明：
     * 1、这里主应用下发的基础路由为：`/main-xxx/app-vite`，其中 `/main-xxx` 是主应用的基础路由，需要去掉，我们只取`/app-vite`，不同项目根据实际情况调整
     *
     * 2、因为vite关闭了沙箱，又是hash路由，我们这里写死realBaseRoute为：/app-vite#
     */
    const realBaseRoute = '/app-vite#'

    router.beforeEach(() => {
      if (typeof window.history.state?.current === 'string') {
        window.history.state.current = window.history.state.current.replace(
          new RegExp(realBaseRoute, 'g'),
          ''
        )
      }
    })

    router.afterEach(() => {
      if (typeof window.history.state === 'object') {
        window.history.state.current =
          realBaseRoute + (window.history.state.current || '')
      }
    })
  }
}

// 微前端环境
if (window.__MICRO_APP_ENVIRONMENT__) {
  handleMicroData(router)
  fixBugForVueRouter4(router)
}

// 监听卸载操作
window.addEventListener('unmount', function () {
  app.unmount()
  // 卸载所有数据监听函数
  window.rawWindow.eventCenterForA?.clearDataListener()
  console.log('微应用app-sidp卸载了')
})
