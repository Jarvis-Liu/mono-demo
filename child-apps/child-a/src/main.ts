import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'animate.css'
import '@/assets/style/index.css'
import '@/assets/style/common.less'

const app = createApp(App)

app.use(router).mount('#child-a')
