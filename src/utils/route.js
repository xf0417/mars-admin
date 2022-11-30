import path from 'path-browserify'
/**
 * 所有的子集路由
 */
const getChildrenRouters = routers => {
    const result = []
    routers.forEach(route => {
        if (route.children && route.children.length > 0) {
            result.push(...route.children)
        }
    })
    return result
}
/**
 * 处理脱离层级的路由
 */
export const filterRouters = (routes) => {
    //所有的子集路由，查重
    const childrenRoutes = getChildrenRouters(routes)
    return routes.filter(route => {
        return !childrenRoutes.find((childrenRoute) => {
            return childrenRoute.path === route.path
        })
    })
}

function isNull(data){
    if(!data) return true
    if(JSON.stringify(data) === '{}') return true
    if(JSON.stringify(data) === '[]') return true
    if(JSON.stringify(data) === undefined) return true
return false
}
/**
 * 根据routers数据返回对应的menu规则数据
 */
export function generateMenus (routes, basePath = '') {
    const result = []
    //不满足条件'mata && meta.title && meta.icon'的数据不应该存在
    routes.forEach((item) =>{
        //不存在children &&不存在meta直接return
        if(isNull(item.children) && isNull(item.meta)) return
        //存在children不存在meta，迭代generateMenus
        if(isNull(item.meta) && !isNull(item.children)){
            result.push(...generateMenus(item.children))
            return
        }

        //不存在children，存在meta
        // const routePath = '/' + `${basePath}/${item.path}`.split('/').filter(Boolean).join('/')
        const routePath = path.resolve(basePath,item.path)

        //路由分离后，可能存在同名情况
        let route = result.find((item) => item.path === routePath)
        if(!route){
            route = {
                ...item,
                path: routePath,
                chidren:[]
            }
            //icon && title
        }
        if(route.meta.icon && route.meta.title){
            result.push(route)
        }
        //存在children 存在meta
        if(item.chidren){
            route.chidren.push(...generateMenus(item.chidren, route.path))
        }
    })
    return result
}