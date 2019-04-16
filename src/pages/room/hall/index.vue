<template>
  <d2-container :filename="filename">
    <!-- <template slot="header">room hall</template> -->

    <div class="card-item" v-for="(item , index) in roomList" :key="index">
      <el-card :body-style="{ padding: '0px' }" >
        <div class="d2-p-10" flex>
          <div class="card-item_image" flex-box="0">
            <img :src="item.src" class="image">
          </div>
          <div  class="card-item_switch" flex-box="1" justify="center">
            <span>{{ item.status ? "开" : "关" }} &nbsp;</span> <el-switch @change="changeRoomStatus(item)" v-model="item.status"></el-switch>
          </div>
        </div>
      </el-card>
    </div>

  </d2-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'page1',
  data () {
    return {
      filename: __filename
    }
  },
  computed: {
    ...mapState('fhgame/room', [
      'roomList'
    ])
  },
  created: function () {
    this.getData()
  },
  methods: {
    ...mapMutations({
      listClean: 'fhgame/room/clean'
    }),
    ...mapActions({
      setRoomStatus: 'fhgame/room/setRoomStatus',
      getRoomList: 'fhgame/room/getRoomList'
    }),
    getData () {
      this.getRoomList()
    },
    changeRoomStatus (item) {
      this.setRoomStatus({ item })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .card-item{
    width: 200px;
    float:left;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .card-item_image{
    width: 80px;
    height:80px;
    border-radius: 40px;
    overflow: hidden;
  }

  .card-item_image .image{
    width: 80px;
    height:80px;
    border-radius: 40px;
    overflow: hidden;
  }

  .card-item_switch{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
