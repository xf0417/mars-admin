import { createRouter, createWebHashHistory } from "vue-router";

//公共路由
const routes = [
  {
    path:'/',
    name: 'login',
    component:() => import('@/views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
