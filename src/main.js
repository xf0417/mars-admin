import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register';
import store from './store'
import './permission'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 需要全局引入再添加
import svgIcon from '@/components/SvgIcon/index.vue' // 全局svg图标组件

const app = createApp(App);

app.use(router).use(store).use(ElementPlus);
app.component('svg-icon', svgIcon)

app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }