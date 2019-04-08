<template>
  <d2-container :filename="filename">
    <template slot="header">
      <div>
        <el-form :inline="true" ref="formInline" :model="formInline" label-width="48px" >
          <el-form-item label="游戏" size="mini">
            <el-select v-model="formInline.region" placeholder="请选择" style="width: 100px">
              <el-option label="全部" value="beijing"></el-option>
              <el-option label="普通会员" value="shanghai"></el-option>
              <el-option label="代理注册" value="beijing"></el-option>
              <el-option label="人工代注" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </template>
    <el-card class="box-card">

      <div>
        <el-table
          border
          fit
          :data="tableData "
          class="d2-mb-10"
          style="width: 100%">
          <el-table-column label="奖前消息">
            <el-table-column
              align="center"
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              align="center"
              prop="nickname"
              label="类型"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              prop="nickname"
              label="时间"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              prop="id"
              label="类容">
            </el-table-column>
            <el-table-column
              align="center"
              prop="id"
              label="状态"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              label="操作"
              fixed="right"
              width="150">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  plain
                  type="danger"
                  style="padding: 2px 5px;"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>

            </el-table-column>
          </el-table-column>
        </el-table>

        <el-table
          border
          fit
          :data="tableData "
          class="d2-mb-10"
          style="width: 100%">
          <el-table-column label="奖后消息">
            <el-table-column
              align="center"
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              align="center"
              prop="nickname"
              label="类型"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              prop="nickname"
              label="时间"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              prop="id"
              label="类容">
            </el-table-column>
            <el-table-column
              align="center"
              prop="id"
              label="状态"
              width="180">
            </el-table-column>
            <el-table-column
              align="center"
              label="操作"
              fixed="right"
              width="150">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  plain
                  type="danger"
                  style="padding: 2px 5px;"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>

            </el-table-column>
          </el-table-column>
        </el-table>
      </div>

    </el-card>
  </d2-container>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      imageUrl: '',
      filename: __filename,
      form: {
        id: 123,
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formInline: {
        user: '',
        region: ''
      },
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
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
      }],
      currentPage4: 2
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    onSubmit () {
      console.log('submit!')
    },
    onCellSelect () {
      console.log('selector')
    }
  }
}
</script>

<style lang="scss" scoped>

  .sub-title{
    font-size: 14px;
    text-align: center;
    margin-top: -15px;
    .red{
      color: red
    }
    .green{
      color: green;
    }
  }
</style>
