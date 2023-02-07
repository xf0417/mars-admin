import request from '@/utils/request'


export const getUserManageList = data => {
    return request({
        url: '/list',
        params: data
    })
}
//获取用户列表数据
export const getUserManageAllList = () => {
    return request({
        url: '/list',
    })
}
//获取用户详情
export const userDetail = (id) => {
    return request({
        url: '/userInfo',
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
        url: `/list/role?id=1`,
        method:'delete'
    })
}
//获取指定用户的角色
export const userRoles = id => {
    return request({
        url: '/userRole',
    })
}
//分配角色
export const updateRole = data => {
    return request({
        url: '/userRole',
        method:'POST',
        data
           
    })
}
