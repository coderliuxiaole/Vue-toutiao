import request from '@/utils/request'

export const getAllChannels = () => {
  return request({
    methods: 'GET',
    url: '/app/v1_0/channels'
  })
}
/*
* 添加用户频道
*/
export const addUserChannel = channel => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/channels',
    data: {
      channels: [channel]
    }
  })
}

/*
* 获取用户频道
*/
