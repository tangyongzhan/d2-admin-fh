import { getRoomList, setRoomStatus } from '@/api/room.js'
import RoomData from '@/api/mock/room.mock.js'

export default {
  namespaced: true,
  state: {
    roomList: [1, 2, 3]
  },
  getters: {
    length (state) {
      return state.roomList.length
    }
  },
  actions: {
    getRoomList ({ state, commit, dispatch }) {
      commit('get', RoomData.room.list)
      /** 获取房间列表 */
      // getRoomList().then(rps=>{
      // }).catch(err=> {
      // })
    },
    setRoomStatus ({ state, commit, dispatch }, { item }) {
      console.log(item)
      /** 设置房间 */
      // setRoomStatus(item).then(rps=>{
      // }).catch(err=> {
      //   commit('setStatusError', item)
      // })
    }
  },
  mutations: {
    get (state, data) {
      state.roomList = data
    },
    setStatusError (state, item) {
      state.roomList.map((curr) => {
        if (item.id == curr.id) {
          item.status = !item.status
        }
      })
    },
    clean (state) {
      state.roomList = []
    }
  }
}
