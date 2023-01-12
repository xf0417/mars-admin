import  request  from '@/utils/request'

//获取角色
export const roleList = () => {
    return request({
        url: '/role'
    })
}

/**
 * 获取指定角色的权限
 */
export const rolePermission = (roleId) => {
    return request({
      url: `/permission`
    })
  }
  /**
   * 为角色修改权限
   */
  export const distributePermission = (data) => {
    return request({
      url: '/distribute-permission',
      method: 'POST',
      data
    })
  }