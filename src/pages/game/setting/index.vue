<template>
  <d2-container :filename="filename">

    <el-card class="box-card d2-mb-5 ">
      <div>
        <el-form ref="form" :model="form" label-width="150px" style="width: 540px;">
          <el-form-item label="会员昵称长度" size="medium" >
            <el-input v-model="form.id"  ></el-input>
          </el-form-item>
          <el-form-item label="积分最低显示" size="medium" >
            <el-input v-model="form.id"  ></el-input>
          </el-form-item>

          <el-form-item label="奖后积分显示" size="medium" >
            <el-radio-group v-model="form.resource">
              <el-radio label="一列"></el-radio>
              <el-radio label="两列"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="返水设置选择" size="medium" >
            <el-radio-group v-model="form.resource">
              <el-radio label="会员命令回水"></el-radio>
              <el-radio label="实时回水"></el-radio>
              <el-radio label="不提前回水"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="上下分申请是否显示代注" label-width="300px" >
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>

          <el-form-item  size="medium">
            <el-button type="primary" @click="onSubmit">保存设置</el-button>
            <el-button  @click="onSubmit">取消</el-button>
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
      }
    }
  }
}
</script>
