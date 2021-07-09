import request from '@/utils/request'
export const getSearchList = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/search',
    params
  })
}
export const getCompletion = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params
  })
}
