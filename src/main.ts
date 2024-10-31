import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {setupAntd} from './antd'
import * as Icons from '@ant-design/icons-vue'

import 'ant-design-vue/dist/antd.css';

import './style.css'

const app = createApp(App)
setupAntd(app)

// 全局使用图标，遍历引入
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}
app.use(router)
app.mount('#app')
