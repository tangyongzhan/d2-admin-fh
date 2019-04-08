<template>
  <d2-container :filename="filename">

    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in [1,2,3,4]" :key="index">
        <template slot="title">
          <div class="monitor-container_header">
              <div class="hd">
                <div><span class="black" >北京赛车{{index}}</span></div>
                <div class="w150">今日流水：<span class="red" >3265455</span></div>
                <div>今日盈亏：<span class="red" >5645</span></div>
                <div>期数：<span class="green" >703266</span></div>
                <div class="w150">竞猜总额：<span class="orange" >545645</span></div>
                <div class="w100">竞猜人数：<span class="orange2" >12</span>人</div>
                <div>距离开奖：<span class="red" >02:35</span></div>
                <div>距离封盘：<span class="red" >01:16</span></div>
                <div class="w150">上期竞猜总额：<span class="orange" >798564</span></div>
                <div class="w100">上期总盈亏：<span class="red" >5894</span></div>
              </div>
          </div>
        </template>

        <div>
          <el-table
            border
            :data="tableData"
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              prop="nickname"
              label="昵称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="comment"
              label="备注">
            </el-table-column>
            <el-table-column
              prop="id"
              label="ID">
            </el-table-column>
            <el-table-column
              prop="comment"
              label="竞猜内容">
            </el-table-column>
            <el-table-column
              prop="number"
              label="竞猜金额">
            </el-table-column>
            <el-table-column
              prop="comment"
              label="上期竞猜">
            </el-table-column>
            <el-table-column
              prop="number"
              label="上期盈亏">
            </el-table-column>
            <el-table-column
              prop="date"
              label="时间">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>

    </el-collapse>

  </d2-container>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      filename: __filename,
      tableData: [{
        date: '2016-05-02',
        nickname: '王小虎',
        comment: '上海市普陀区金沙江路 1518 弄',
        type: '转入',
        id: '1',
        number: '14'
      }, {
        date: '2016-05-02',
        nickname: '王小虎',
        comment: '上海市普陀区金沙江路 1518 弄',
        type: '转入',
        id: '1',
        number: '14'
      }, {
        date: '2016-05-02',
        nickname: '王小虎',
        comment: '上海市普陀区金沙江路 1518 弄',
        type: '转入',
        id: '1',
        number: '14'
      }, {
        date: '2016-05-02',
        nickname: '王小虎',
        comment: '上海市普陀区金沙江路 1518 弄',
        type: '转入',
        id: '1',
        number: '14'
      }]
    }
  }
}
</script>

<style lang="scss">
  .el-collapse-item__header{
    height: auto !important;
  }
  .monitor-container_header{
    font-size: 12px;
    .hd{
      width: 100%;
      div{
        float:left;
        margin: 0 5px 0 0;
        width: 100px;
        overflow:hidden;
      }
      .w100{
        width: 100px;
      }
      .w150{
        width: 150px;
      }
      .w200{
        width: 200px;
      }
    }
    .black{
      font-weight: bold;
      font-size: 18px;
      color: black;
    }
    .red{
      color: red;
    }
    .green{
      color: green;
    }
    .orange{
      color: orange;
    }
    .orange2 {
      color:darksalmon
    }
  }
</style>
