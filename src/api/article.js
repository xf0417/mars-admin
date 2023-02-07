import request from '@/utils/request'
/**
 * 
* 获取所有文章
 */

export const getArticleList = (data) => {
    return request({
        url: '/articleList',
        params:data
    })
}
/**
 * 
* 修改排序
 */

export const articleSort = (data) => {
    return request({
      url: '/articleSort',
      method: 'POST',
      data
    })
  }
  /**
 * 
* 删除文章
 */

export const deleteArticle = (articleId) => {
  return request({
    url: '/articleList/${articleId}',
    method: 'DELETE'
    })
}
  /**
 * 
* 文章详情
 */

export const articleDetail = () => {
  return request({
    url: '/articleDetail',
    method: 'GET'
    })
}
  /**
 * 
* 提交文章
 */

export const createArticle = (data) => {
  return request({
    url: '/articleCreate',
    method: 'POST',
    data
    })
}