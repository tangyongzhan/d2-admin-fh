<template>
  <d2-container :filename="filename">

    <el-card class="box-card d2-mb-5 ">
      <div slot="header" class="clearfix">
        <span>会员转让</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div>
        <el-form ref="form" :model="form" label-width="120px" style="width: 540px;">
          <el-form-item label="会员ID" size="medium">
            <el-input v-model="form.id"  ></el-input>
          </el-form-item>
          <el-form-item label="转让数量"  size="medium">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item  size="medium">
            <el-button type="primary" @click="onSubmit">确认转让</el-button>
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
        <el-form :inline="true" ref="formInline" :model="formInline" label-width="80px" >
          <el-form-item label="会员" size="mini">
            <el-input v-model="formInline.user" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="操作类型" size="mini">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option label="转入" value="shanghai"></el-option>
              <el-option label="转出" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="时间" size="mini">
            <el-date-picker
              v-model="value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
            </el-date-picker>
          </el-form-item>

          <el-form-item size="mini">
            <el-button type="primary" @click="onSubmit" >查询</el-button>
          </el-form-item>
        </el-form>
      </div>

      <el-table
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
      }]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
