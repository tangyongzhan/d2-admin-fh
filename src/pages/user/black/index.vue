<template>
  <d2-container :filename="filename">
    <template slot="header">
       <div>
        <el-form :inline="true" ref="formInline" :model="formInline" label-width="48px" >
          <el-form-item label="会员" size="mini">
            <el-input v-model="formInline.user" placeholder="请输入"></el-input>
          </el-form-item>

          <el-form-item size="mini">
            <el-button type="primary" @click="onSubmit" >查询</el-button>
            <el-button type="primary" @click="onSubmit" >批量取消名单</el-button>
            <el-button type="primary" @click="onSubmit" >批量删除</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>
    <el-card class="box-card" :body-style='{height:"100%"}'>
      <el-table
        border
        fit
        :data="tableData "
        style="width: 100%">
        <el-table-column
          fixed
          type=selection>
        </el-table-column>
        <el-table-column
          align="center"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          align="center"
          prop="nickname"
          label="昵称"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="nickname"
          label="备注"
          width="180">
        </el-table-column>
         <el-table-column
          align="center"
          prop="id"
          label="ID">
        </el-table-column>

        <el-table-column
          align="center"
          prop="id"
          label="代理昵称"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="nickname"
          label="代理ID"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="nickname"
          label="代理备注"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="nickname"
          label="积分"
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
              type="success"
              style="padding: 2px 5px;"
              @click="handleEdit(scope.$index, scope.row)">通过</el-button>
            <el-button
              size="mini"
              plain
              type="warning"
              style="padding: 2px 5px;"
              @click="handleEdit(scope.$index, scope.row)">拒绝</el-button>
            <el-button
              size="mini"
              plain
              type="danger"
              style="padding: 2px 5px;"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>

        </el-table-column>
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
    },
    onCellSelect () {
      console.log('selector')
    }
  }
}
</script>

<style lang="scss" scoped>

  .box-card{
    position: absolute;
    left: 15px;
    right: 15px;
    top:15px;
    bottom:15px;

  }

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
