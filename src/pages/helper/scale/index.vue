<template>
  <d2-container :filename="filename">

    <el-card class="box-card d2-mb-5 ">
      <div>
        <el-form ref="form" :model="form" label-width="120px" style="width: 320px;">
          <el-form-item :label="'游戏' + item" size="medium" v-for="(item,index) in [1,2,3,4,5,6]" :key="index">
            <el-col :span="18">
              <el-input v-model="form.id"  ></el-input>
            </el-col>
            <el-col :span="6">
             &nbsp;%
            </el-col>
          </el-form-item>

          <el-form-item  size="medium">
            <el-button type="primary" @click="onSubmit">保存设置</el-button>
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
