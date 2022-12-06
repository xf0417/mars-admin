import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register';
import store from './store'
import i18n from '@/i18n'
import './permission'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 需要全局引入再添加
import svgIcon from '@/components/SvgIcon/index.vue' // 全局svg图标组件

const app = createApp(App);

app.use(router).use(store).use(ElementPlus,{locale:store.getters.language === 'en' ? en : zhCn}).use(i18n);
app.component('svg-icon', svgIcon)

app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }