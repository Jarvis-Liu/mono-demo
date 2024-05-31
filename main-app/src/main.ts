import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'animate.css'
import '@/assets/style/index.css'
import '@/assets/style/common.less'
import microApp from '@micro-zoe/micro-app'

microApp.start({
  'router-mode': 'native-scope',
  'keep-router-state': false
})

microApp.router.setBaseAppRouter(router)

const app = createApp(App)

app.use(router).mount('#app')
