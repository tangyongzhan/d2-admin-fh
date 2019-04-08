<template>
  <d2-container :filename="filename">
    <!-- <template slot="header">room hall</template> -->

    <div class="card-item" v-for="(item , index) in items" :key="index">
      <el-card :body-style="{ padding: '0px' }" >
        <div class="d2-p-10" flex>
          <div class="card-item_image" flex-box="0">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          </div>
          <div  class="card-item_switch" flex-box="1" justify="center">
            <span>{{ form.switch ? "开" : "关" }} &nbsp;</span> <el-switch v-model="form.switch"></el-switch>
          </div>
        </div>
      </el-card>
    </div>

  </d2-container>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      filename: __filename,
      form: {
        switch: true
      },
      items: [
        {
          game: 'A',
          status: 1
        },
        {
          game: 'A',
          status: 1
        },
        {
          game: 'A',
          status: 1
        },
        {
          game: 'A',
          status: 1
        },
        {
          game: 'A',
          status: 1
        },
        {
          game: 'A',
          status: 1
        },
        {
          game: 'A',
          status: 1
        },
        {
          game: 'A',
          status: 1
        },
        {
          game: 'A',
          status: 1
        }
      ]
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

  // .bg-purple-dark {
  //   background: #99a9bf;
  // }
  // .bg-purple {
  //   background: #d3dce6;
  // }
  // .bg-purple-light {
  //   background: #e5e9f2;
  // }
  // .grid-content {
  //   border-radius: 4px;
  //   min-height: 36px;
  // }
  // .row-bg {
  //   padding: 10px 0;
  //   background-color: #f9fafc;
  // }
</style>
