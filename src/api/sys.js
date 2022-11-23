import request from '@/utils/request'
/**
 * 
* 登录
*return promise 实例
 */

export const login = data => {
    return request({
        url: '/sys/login',
        method: 'post',
        data
    })
}