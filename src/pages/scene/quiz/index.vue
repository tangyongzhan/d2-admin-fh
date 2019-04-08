<template>
  <d2-container :filename="filename">

    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in [1,2,3,4]" :key="index">
        <template slot="title">
          <div class="monitor-container_header">
              <div class="hd">
                <div><span class="black" >北京赛车{{index}}</span></div>
                <div class="w150">期数：<span class="green" >703266</span></div>
                <div class="w150">竞猜总额：<span class="orange" >545645</span></div>
              </div>
          </div>
        </template>

        <div>

          <el-table
            border
            :data="tableData"
            style="width: 100%">
            <el-table-column
              align="center"
              label="冠军">
              <template slot-scope="scope">
                <div class="row_pk10" v-for="(item,i) in pk10['1-5']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="亚军">
              <template slot-scope="scope">

                <div class="row_pk10" v-for="(item,i) in pk10['1-5']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="第三名">
              <template slot-scope="scope">

                <div class="row_pk10" v-for="(item,i) in pk10['1-5']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="第四名">
              <template slot-scope="scope">

                <div class="row_pk10" v-for="(item,i) in pk10['1-5']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="第五名">
              <template slot-scope="scope">

                <div class="row_pk10" v-for="(item,i) in pk10['1-5']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="第六名">
              <template slot-scope="scope">
                <div class="row_pk10" v-for="(item,i) in pk10['6-10']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="第七名">
              <template slot-scope="scope">
                <div class="row_pk10" v-for="(item,i) in pk10['6-10']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="第八名">
              <template slot-scope="scope">
                <div class="row_pk10" v-for="(item,i) in pk10['6-10']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="第九名">
              <template slot-scope="scope">
                <div class="row_pk10" v-for="(item,i) in pk10['6-10']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="第十名">
              <template slot-scope="scope">
                <div class="row_pk10" v-for="(item,i) in pk10['6-10']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item " :class="[ i < 10 ? 'row_item_ball': '']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="冠亚和">
              <template slot-scope="scope">
                <div class="row_pk10" v-for="(item,i) in pk10['11']" :key="i">
                  <span class="row_id">{{scope.row.id}}</span>
                  <span class="row_item" :class="[ i < 17 ? 'row_item_ball': 'row_item_long']"> {{item}} </span>
                  <span class="row_money"></span>
                </div>
              </template>
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
      pk10: {
        '1-5': [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '大', '小', '单', '双', '龙', '虎'
        ],
        '6-10': [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '大', '小', '单', '双'
        ],
        '11': [
          '3', '4', '18', '19', '5', '6', '16', '17', '7', '8', '14', '15', '9', '10', '12', '13', '11', '冠亚大', '冠亚双', '冠亚小', '冠亚单'
        ]
      },
      tableData: [{
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

  .el-table td,.el-table th {
    vertical-align: top !important;
    padding-top:0px !important;
  }

  .el-collapse-item__header{
    height: auto !important;
  }
  .monitor-container_header{
    .hd{
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

  .row_pk10{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
  }

  .row_id{
    display:none;
  }
  .row_item{
    display: block;
    width: 24px;
    height: 24px;
    text-align: center;
    font-size: 12px;
    margin-right: 10px;
  }

  .row_item_ball{
    display: block;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    border-radius: 12px;
    border: 1px solid skyblue;
  }

  .row_item_long{
    width: 40px;
    margin-left: -6px;
    margin-right: 4px;
    font-size: 10px;
  }

  .row_money{
    display: inline-block;
    width: 48px;
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
    border: 1px solid #ccc;
  }
</style>
