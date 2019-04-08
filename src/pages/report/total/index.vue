<template>
  <d2-container :filename="filename">
    <template slot="header" >
       <div>
        <el-form :inline="true" ref="formInline" :model="formInline" label-width="48px" >
          <el-form-item label="会员" size="mini">
            <el-input v-model="formInline.user" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="游戏" size="mini">
            <el-select v-model="formInline.region" placeholder="请选择"  style="width: 100px" >
              <el-option label="北京赛车" value="shanghai"></el-option>
              <el-option label="幸运飞艇" value="beijing"></el-option>
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
    </template>
    <el-card class="box-card" :body-style='{height:"100%"}'>
      <div class="sub-title">
        <p>
          总盈亏：<span class="red">256555</span> &nbsp;  &nbsp;
          回水：<span class="green">256555</span> &nbsp;  &nbsp;
          未回水：<span class="green">256555</span> &nbsp;  &nbsp;
          <el-button type="success" @click="onSubmit" size="medium" >确认回水</el-button>
        </p>
      </div>

      <el-table
        border
        fit
        :data="tableData "
        max-height="400"
        style="width: 100%;">
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
          prop="comment"
          label="备注">
        </el-table-column>

        <el-table-column
          align="center"
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          align="center"
          prop="type"
          label="流水"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="type"
          label="盈亏"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="number"
          label="已回水">
        </el-table-column>
        <el-table-column
          align="center"
          prop="type"
          label="未回水">
        </el-table-column>

      </el-table>

      <div class="block d2-pt-5 d2-text-center">
          <el-button type="primary" @click="onSubmit" size="medium" >查看明细</el-button>
      </div>

      <div id="detail" class="">
        <div v-for="(item,index) in [1,3]" :key="index" >
          <div class="sub-title d2-mt-10" >
              <div class="title"> PK10 北京赛车</div>
              <p >
                总盈亏：<span class="red">256555</span> &nbsp;  &nbsp;
                回水：<span class="green">256555</span> &nbsp;  &nbsp;
                未回水：<span class="green">256555</span> &nbsp;  &nbsp;
                <el-button type="success" @click="onSubmit" size="medium" >确认回水</el-button>
              </p>
          </div>
          <el-table
            border
            fit
            :data="tableData"
            style="width: 100%;">
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
              prop="comment"
              label="备注">
            </el-table-column>

            <el-table-column
              align="center"
              prop="id"
              label="ID">
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              label="流水"
              width="80">
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              label="盈亏"
              width="80">
            </el-table-column>
            <el-table-column
              align="center"
              prop="number"
              label="已回水">
            </el-table-column>
            <el-table-column
              align="center"
              prop="type"
              label="未回水">
            </el-table-column>

          </el-table>
        </div>
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
  .d2-container-full__header{
    padding-bottom:0;
  }

  .box-card{
    // position: absolute;
    // left: 15px;
    // right: 15px;
    // top:15px;
    // bottom:15px;
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
