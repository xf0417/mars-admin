import { createRouter, createWebHashHistory } from "vue-router";
import layout from '@/layout/index.vue'
import UserManage from './modules/UserManage'
import RoleList from './modules/RoleList'
import Article from './modules/Article'
import ArticleCreate from './modules/ArticleCreate'
import PermissionList from './modules/PermissionList'
import store from '@/store'
//私有路由
// export const privateRoutes = [
//   UserManage,
//   RoleList,
//   PermissionList,
//   Article,
//   ArticleCreate
// ]
const privateRoutes = [
  {
    path: '/user',
    component: () => import('@/layout/index.vue'),
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage/index.vue'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        component: () => import('@/views/role-list/index.vue'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        component: () => import('@/views/permission-list/index.vue'),
        meta: {
          title: 'permissionList',
          icon: 'permission'
        }
      },
      {
        // path: '/user/info',
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/user-info/index.vue'),
        props:true,
        meta: {
          title: 'userInfo',
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import/index.vue'),
        meta: {
          title: 'excelImport',
        }
      },
    ]
  },
  {
    path: '/article',
    component: () => import('@/layout/index.vue'),
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        component: () => import('@/views/article-ranking/index.vue'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/:id',
        component: () => import('@/views/article-detail/index.vue'),
        meta: {
          title: 'articleDetail',
        }
      },
      {
        path: '/article/create',
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: 'articleCreate',
          icon: 'article-create'
        }
      },
      {
        path: '/article/editor/:id',
        component: () => import('@/views/article-create/index.vue'),
        meta: {
          title: 'articleEditor',
        }
      },

    ]
  }
]
//公共路由
 const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/profile',
    component: () => import('@/layout/index.vue'),
    children: [
      //个人中心
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index.vue'),
        meta: {
          title: 'profile',
          icon: 'user'
        }
      },
      //404
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue'),
      },
      //401
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue'),
      }
    ]
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/login/index.vue'),
  }
  
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
});

export default router;
