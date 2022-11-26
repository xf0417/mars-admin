import request from '@/utils/request'
/**
 * 
* 登录
*return promise 实例
 */

export const login = data => {
    return request({
        url: '/login',
        method: 'get',
        data
    })
}

/**
 * 
* 登录
*return promise 实例
 */
export const getUserInfo = () => {
    return request({
        url:'/sys/profile'
    })
}
// export const addRecords = (data) => {
//     return request({
//         url: '/data',
//         method: 'post',
//         data: {
//             username: 'xiaofang',
//             id: 1234,
//             password: 1234
//         }
//     })
// }