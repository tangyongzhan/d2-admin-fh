import request from '@/plugin/axios'

export function getRoomList (data) {
  return request({
    url: '/room/list',
    method: 'post',
    data
  })
}

export function setRoomStatus (data) {
  return request({
    url: '/room/status/set',
    method: 'post',
    data
  })
}
