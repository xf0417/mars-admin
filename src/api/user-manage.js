import request from '@/utils/request'


export const getUserManageList = data => {
    return request({
        url: '/list',
        data
    })
}