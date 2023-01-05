import request from '@/utils/request'


export const getUserManageList = data => {
    return request({
        url: '/list',
        data
    })
}

export const userBatchImport = data => {
    return request({
        url: '/import',
        method: 'POST',
        data
    })
}

