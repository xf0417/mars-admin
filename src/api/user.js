import request from '@/utils/request'

//项目功能
export const feature = () => {
    return request({
        url:'/feature',
    })
}
//章节功能
export const chapter = () => {
    return request({
        url:'/chapter',
    })
}