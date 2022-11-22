import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register';
// 需要全局引入再添加
import svgIcon from './components/SvgIcon/index.vue' // 全局svg图标组件
app.component('svg-icon', svgIcon)

const app = createApp(App);

app.use(router).use(ElementPlus);

app.mount("#app");
