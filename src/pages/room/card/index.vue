<template>
  <d2-container :filename="filename">

    <el-card class="box-card d2-mb-5 ">
      <div slot="header" class="clearfix">
        <span>会员转让</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div>
        <el-form ref="card-form" :rules="rules" :model="form" label-width="120px" style="width: 540px;">
          <el-form-item label="会员ID" size="medium"  prop="mid">
            <el-input v-model="form.mid"  ></el-input>
          </el-form-item>
          <el-form-item label="转让数量"  size="medium" prop="number">
            <el-input v-model.number="form.number" ></el-input>
          </el-form-item>
          <el-form-item  size="medium">
            <el-button type="primary" @click="onSubmit('card-form')">确认转让</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>转出/转入记录</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div>
        <el-form :inline="true" ref="form-search" :model="formSearch" label-width="80px" >
          <el-form-item label="会员" size="mini">
            <el-input v-model="formSearch.user" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="操作类型" size="mini">
            <el-select v-model="formSearch.type" placeholder="请选择">
              <el-option label="转入" value="1"></el-option>
              <el-option label="转出" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="时间" size="mini">
            <el-date-picker
              v-model="formSearch.date"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>

          <el-form-item size="mini">
            <el-button type="primary" @click="onSubmitSearch('form-search')" >查询</el-button>
          </el-form-item>
        </el-form>
      </div>

      <el-table
        :data="tableData"
        max-height="450"
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
          prop="type"
          label="操作类型"
          width="80">
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="number"
          label="数量"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="时间">
        </el-table-column>
      </el-table>
      <div class="block d2-pt-5">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.page"
          :page-sizes="[50, 100, 200, 300, 400, 500]"
          :page-size="pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </el-card>

  </d2-container>
</template>

<script>
import RoomData from '@/api/mock/room.mock.js'

export default {
  name: 'room-card',
  data () {
    return {
      filename: __filename,
      form: {
        mid: '',
        number: ''
      },
      rules: {
        mid: [
          { required: true, message: '请输入会员ID', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入转让数量', trigger: 'blur' },
          { type: 'number', message: '请输入数字', trigger: 'blur' }
        ]
      },
      formSearch: {
        user: '',
        type: '',
        date: ''
      },
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 1)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 2)
            end.setTime(end.getTime() - 3600 * 1000 * 24 * 1)
            picker.$emit('pick', [start, end])
          }
        }, {
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
      pagination: {
        pageSize: 50,
        page: 1
      },
      total: 0,
      tableData: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pagination.pageSize = val
      this.getData()
    },
    handleCurrentChange (val) {
      console.log(`页 ${val} `)
      this.pagination.page = val
      this.getData()
    },
    getData () {
      // this.tableData = RoomData.room.allCard
      var postData = { ...this.pagination, ...this.formSearch }
      console.log(postData)
      this.$ajax.post('/api/room/card', postData).then(res => {
        let { data, total } = res.data
        this.tableData = data.list
        this.total = data.total
      }).catch(err => {
        console.log(err)
      })
    },
    onSubmit (formName) {
      console.log(this.form)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          // console.log('error submit!!');
          this.$message.error('请完善表单')
          return false
        }
      })
    },
    onSubmitSearch (formName) {
      console.log(this.formSearch)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          // console.log('error submit!!');
          this.$message.error('请完善表单')
          return false
        }
      })
    }
  }
}
</script>
