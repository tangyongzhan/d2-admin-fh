<template>
  <d2-container :filename="filename">
     <el-card class="box-card d2-mb-5 ">
      <div>
        <el-form ref="password-form" :model="form" :rules="rules" size="medium" label-width="120px" style="width: 540px;">
          <el-form-item label="旧密码" prop="oldpass">
            <el-input v-model="form.oldpass" type="password" ></el-input>
          </el-form-item>
          <el-form-item label="新密码"  prop="newpass" >
            <el-input v-model="form.newpass"  type="password" ></el-input>
          </el-form-item>
          <el-form-item label="确认密码"  prop="confirmpass" >
            <el-input v-model="form.confirmpass"  type="password" ></el-input>
          </el-form-item>
          <el-form-item  >
            <el-button type="primary" @click="onSubmit('password-form')">确认修改</el-button>
            <el-button @click="handleResetPass">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

  </d2-container>
</template>

<script>
export default {
  name: 'room-password',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.confirmpass !== '') {
          this.$refs['password-form'].validateField('confirmpass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.newpass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      filename: __filename,
      form: {
        oldpass: '',
        newpass: '',
        confirmpass: ''
      },
      rules: {
        oldpass: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        newpass: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        confirmpass: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleResetPass () {
      this.form = {
        oldpass: '',
        newpass: '',
        confirmpass: ''
      }
    },
    onSubmit (formName) {
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
