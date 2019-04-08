<template>
  <d2-container :filename="filename">

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="十码类" name="first">
        <el-collapse accordion  v-model="activeNames">
          <el-collapse-item v-for="(item, index) in [1,2,3,4]" :key="index" :name="index+''">
            <template slot="title">
              <div class="container_header">
                  <div class="hd">
                    <div>
                      <span class="black" >北京赛车{{index}}</span>
                        <el-button
                        size="mini"
                        type="success">同步到</el-button>
                        <el-button
                        size="mini"
                        type="danger">初始化赔率</el-button>
                    </div>
                  </div>
              </div>
            </template>

            <div>
              <el-table
                border
                :data="tableData"
                max-height="400"
                style="width: 100%">
                <el-table-column
                  align="center"
                  type="index"
                  width="50">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="nickname"
                  label="玩法"
                  width="180">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="comment"
                  label="赔率">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="id"
                  label="单笔最低限额">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="id"
                  label="单人最高限额">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="id"
                  label="总限额">
                </el-table-column>
                 <el-table-column
                  align="center"
                  label="操作"
                  width="150">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      plain
                      type="warning"
                      style="padding: 2px 5px;"
                      @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-collapse-item>

        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="时时彩" name="second">
        <el-collapse accordion  v-model="activeNames" >
          <el-collapse-item v-for="(item, index) in [1,2]" :key="index"  :name="index+''">
            <template slot="title">
              <div class="container_header">
                  <div class="hd">
                    <div>
                      <span class="black" >重庆时时彩{{index}}</span>
                        <el-button
                        size="mini"
                        type="success">同步到</el-button>
                        <el-button
                        size="mini"
                        type="danger">初始化赔率</el-button>
                    </div>
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
                  type="index"
                  width="50">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="nickname"
                  label="玩法"
                  width="180">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="comment"
                  label="赔率">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="id"
                  label="单笔最低限额">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="id"
                  label="单人最高限额">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="id"
                  label="总限额">
                </el-table-column>
                 <el-table-column
                  align="center"
                  label="操作"
                  width="150">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      plain
                      type="warning"
                      style="padding: 2px 5px;"
                      @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-collapse-item>

        </el-collapse>

      </el-tab-pane>
      <el-tab-pane label="PC蛋蛋" name="third">

      </el-tab-pane>
      <el-tab-pane label="百家乐" name="fourth">

      </el-tab-pane>
    </el-tabs>

  </d2-container>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {

      filename: __filename,
      activeName: 'first',
      activeNames: ['0'],
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
      },, {
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
        },, {
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
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
  .container_header{
      font-size: 12px;
      .hd{
        width: 100%;
        div{
          .black{
            font-size: 18px;
            width: 180px;
            margin-right: 10px;
            overflow:hidden;
          }
        }
      }
  }
</style>
