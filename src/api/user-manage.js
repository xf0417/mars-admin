import request from '@/utils/request'


export const getUserManageList = data => {
    return request({
        url: '/list',
        params: data
    })
}
export const getUserManageAllList = () => {
    return request({
        url: '/list',
    })
}

export const userBatchImport = data => {
    return request({
        url: '/import',
        method: 'POST',
        data
    })
}
//删除用户
export const deleteUser = id => {
    return request({
        url: '/list',
    })
}
