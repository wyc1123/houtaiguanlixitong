import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'//清楚默认样式
import 'amfe-flexible'//px转换rem
import './assets/iconfont.css'//引入css
import 'default-passive-events'
const app = createApp(App)
app.use(router)

app.use(ElementPlus)
app.mount('#app')
