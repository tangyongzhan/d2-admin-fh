<template>
  <d2-container :filename="filename">

    <el-card class="box-card d2-mb-5 ">
      <div>
        <el-form ref="cost-form" :model="form" size="medium" label-width="120px" style="width: auto;">
          <el-form-item label="房间ID" >
            <div>{{form.rid}}</div>
          </el-form-item>
          <el-form-item label="房卡数量" >
            <div>{{form.cardNumber}} 张</div>
          </el-form-item>
          <el-form-item label="到期时间" >
            <div>{{form.date}} <el-button round  type="danger" plain  size="mini" disabled>已到期</el-button></div>
          </el-form-item>
          <el-form-item label="开通彩种">
            <el-button class="d2-mg-5"  round disabled type="success" size="mini" v-for="(item, index) in form.types" :key="index">{{item}}</el-button>
          </el-form-item>
          <el-form-item label="续费套餐"  >
              <div style="margin-top: 0px">
                <el-col class="d2-pb-5"><el-radio v-model="form.cost" label="1" border >1天（1天）&nbsp;&nbsp;&nbsp;&nbsp;10张房卡</el-radio></el-col>
                <el-col class="d2-pb-5"><el-radio v-model="form.cost" label="2" border >月卡（30天）&nbsp;&nbsp;&nbsp;&nbsp;300张房卡</el-radio></el-col>
                <el-col class="d2-pb-5"><el-radio v-model="form.cost" label="3" border >季卡（90天）&nbsp;&nbsp;&nbsp;&nbsp;900张房卡</el-radio></el-col>
                <el-col class="d2-pb-5"><el-radio v-model="form.cost" label="4" border >半年卡（180天）&nbsp;&nbsp;&nbsp;&nbsp;1800张房卡</el-radio></el-col>
              </div>
              <div>需要房卡: <span style="color: red;"> {{selecItem[form.cost] }} </span>张！</div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit('cost-form')">续费</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

  </d2-container>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      filename: __filename,
      selecItem: {
        '1': 10,
        '2': 300,
        '3': 900,
        '4': 1800
      },
      form: {
        rid: '',
        cardNumber: '',
        date: '',
        cost: '',
        types: []
      }
    }
  },
  computed: {

  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$ajax.get('/api/room/cost/get')
        .then(res => {
          let { data, code } = res.data
          this.form = data.form
        }).catch(err => {
          this.$message.error('获取数据失败')
        })
    },
    onSubmit () {
      console.log('submit!')
      this.$ajax.post('/api/room/cost/update', { ...this.form })
        .then(res => {
          this.$message.error('续费成功')
        }).catch(err => {
          this.$message.error('续费不成功')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-button{
    margin: 2px;
  }

  .form-item-box {
    border: 1px solid #eee;
    height: auto;
    overflow:hidden;
    padding: 5px;
    border-radius: 4px;
  }

</style>
