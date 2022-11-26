import { createRouter, createWebHashHistory } from "vue-router";

//公共路由
const routes = [
  {
    path:'/login',
    name: 'login',
    component:() => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'home',
    component:() => import('@/layout/index.vue'),
  }   
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
