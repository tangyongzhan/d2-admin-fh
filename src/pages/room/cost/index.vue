<template>
  <d2-container :filename="filename">

    <el-card class="box-card d2-mb-5 ">
      <div>
        <el-form ref="form" :model="form" label-width="120px" style="width: auto;">
          <el-form-item label="房间ID" size="medium">
            <div>20109998</div>
          </el-form-item>
          <el-form-item label="房卡数量" size="medium">
            <div>5000 张</div>
          </el-form-item>
          <el-form-item label="到期时间" size="medium">
            <div>2019-03-04 <el-button round size="mini" type="danger" plain disabled>已到期</el-button></div>
          </el-form-item>
          <el-form-item label="开通彩种">
            <el-button size="mini" round disabled type="success" v-for="(item, index) in form.type" :key="index">{{item}}</el-button>
          </el-form-item>
          <el-form-item label="续费套餐"  size="medium">
              <div style="margin-top: 0px">
                <el-col class="d2-pb-5"><el-radio v-model="form.radio8" label="1" border size="medium">1天（1天）&nbsp;&nbsp;&nbsp;&nbsp;10张房卡</el-radio></el-col>
                <el-col class="d2-pb-5"><el-radio v-model="form.radio8" label="2" border size="medium">月卡（30天）&nbsp;&nbsp;&nbsp;&nbsp;300张房卡</el-radio></el-col>
                <el-col class="d2-pb-5"><el-radio v-model="form.radio8" label="3" border size="medium">季卡（90天）&nbsp;&nbsp;&nbsp;&nbsp;900张房卡</el-radio></el-col>
                <el-col class="d2-pb-5"><el-radio v-model="form.radio8" label="4" border size="medium">半年卡（180天）&nbsp;&nbsp;&nbsp;&nbsp;1800张房卡</el-radio></el-col>
              </div>
              <div>需要房卡: 300张！</div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">续费</el-button>
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
      imageUrl: '',
      filename: __filename,
      form: {
        id: 123,
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        radio8: '1',
        type: [
          '北京赛车',
          '幸运飞艇',
          '幸运F1',
          '重庆时时彩',
          'pc蛋蛋',
          '百家乐'
        ],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {

    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss">

  .form-item-box {
    border: 1px solid #eee;
    height: auto;
    overflow:hidden;
    padding: 5px;
    border-radius: 4px;
  }

</style>
