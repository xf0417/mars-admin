import  request  from '@/utils/request'

//获取角色权限
export const permissionList = () => {
    return request({
        url: '/permission'
    })
}