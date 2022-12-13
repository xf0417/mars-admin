import path from 'path-browserify'
import i18n from '@/i18n'

export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
    let res = []

    for(const route of routes){
        //创建包含path鹤title的item
        const data = {
            path: path.resolve(basePath, route.path),
            title: [...prefixTitle]
        }

        //当前存在meta时，使用i8n解析，组合成新的title
        //动态路由不允许被检索
        const re = /.*\/:.*/
        if(route.meta && route.meta.title && !re.exec(route.path)){
            const i18nTitle = i18n.global.t(`msg.route.${route.meta.title}`)
            data.title = [...data.title, i18nTitle]
            res.push(data)
        }
        //存在children时进行迭代
        if(route.children){
            const tempRoutes = generateRoutes(route.children, data.path, data.title)
            if(tempRoutes.length > 0){ 
                res = [...res,  ...tempRoutes]

            }
        }
    }

    return res
}