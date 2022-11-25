import router from '@/router'
import store from '@/store'

//白名单
const whiteList = ['/login']

/**
 * 路由前置守卫
 */
router.beforeEach((to,from,next) => {
    //1用户已登录则不允许进入login
    console.log(store.getters.token)
    if (store.getters.token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        //2用户未登录，只允许进入login
        if (whiteList.indexOf(to.path) >-1) {
            next()
        } else {
            next('/login')
        }
    }
})