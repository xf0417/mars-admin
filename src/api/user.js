import request from '@/utils/request'


export const feature = () => {
    return request({
        url:'/feature',
        method: 'get'
    })
}