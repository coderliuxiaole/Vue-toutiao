import request from '@/utils/request'
/**
 * 获取用户评论列表
 */

export const getComments = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/comments',
    params
  })
}
