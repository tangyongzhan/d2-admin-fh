<template>
  <d2-container :filename="filename">
     <el-card class="box-card d2-mb-5 ">
      <div>
        <el-form ref="form" :model="form" label-width="120px" style="width: 540px;">
          <el-form-item label="旧密码" size="medium">
            <el-input v-model="form.id"  ></el-input>
          </el-form-item>
          <el-form-item label="新密码"  size="medium">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"  size="medium">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item  size="medium">
            <el-button type="primary" @click="onSubmit">确认修改</el-button>
            <el-button>重置</el-button>
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
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
