<template>
  <d2-container :filename="filename">

    <el-card class="box-card" :body-style='{height:"100%"}'>

      <el-table
        border
        fit
        :data="tableData "
        max-height="460"
        style="width: 100%;">
        <el-table-column
          align="center"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          align="center"
          prop="nickname"
          label="期号"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="date"
          label="时间">
        </el-table-column>
        <el-table-column
          align="center"
          prop="id"
          label="号码">
        </el-table-column>
        <el-table-column
          align="center"
          prop="type"
          label="冠亚和"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="number"
          label="1-5龙虎">
        </el-table-column>
        <!--
        <el-table-column
          align="center"
          label="操作"
          fixed="right"
          width="150">
          <template slot-scope="scope">
            <el-button

              plain
              type="success"
              style="padding: 2px 5px;"
              @click="handleDelete(scope.$index, scope.row)">明细</el-button>
          </template>

        </el-table-column>
        -->

      </el-table>

      <div class="block d2-pt-5">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
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
      }, , {
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
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
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

  .box-card{

    height:auto;
  }

  .sub-title{
    font-size: 14px;
    text-align: center;
    margin-top: -15px;
    position: relative;
    .title{
      position: absolute;
      top: 5px;
      left: 5px;
      font-size: 18px;
      color: black;
    }
    .red{
      color: red
    }
    .green{
      color: green;
    }
  }
</style>
