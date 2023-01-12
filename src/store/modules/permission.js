import { publicRoutes, privateRoutes } from '@/router/index.js'

export default {
  namespaced: true,
  state: {
    //初始的路由表
    routes: publicRoutes
  },
  mutations: {
    //增加路由
    setRoutes(state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    //筛选路由
    filterRoutes(context, menus) {
      //筛选后获取到路由表
      const routes = []

      menus.forEach(key => {
        routes.push(...privateRoutes.filter(item => item.name === key))
      })

      //所有不匹配的路由
      //该配置必须在所有路由指定之后
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })

      context.commit('setRoutes', routes)

      return routes
    }
  }
}