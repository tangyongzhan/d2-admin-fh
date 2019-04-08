<template>
  <d2-container :filename="filename">

    <el-card class="box-card d2-mb-5 ">
      <div>
        <el-form ref="form" :model="form" size="small" label-width="120px" style="width: 400px;">
          <el-form-item label="盘口类型">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="网址">
            <el-input v-model="form.id" ></el-input>
          </el-form-item>
          <el-form-item label="搜索码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="form.id" ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <div>登录成功</div>
          </el-form-item>
          <el-form-item label="上盘比例">
            <el-col :span="18">
              <el-input v-model="form.name"></el-input>
            </el-col>
            <el-col :span="6">&nbsp;&nbsp; % </el-col>
          </el-form-item>

          <el-form-item label="上盘游戏">
            <div style="margin-top: 0px">
              <el-checkbox v-model="form.checked5" label="备选项1" border size="mini"></el-checkbox>
              <el-checkbox v-model="form.checked6" label="备选项2" border size="mini"></el-checkbox>
            </div>
          </el-form-item>

          <el-form-item label="上盘失败是否转移" label-width="150">
            <el-switch v-model="form.delivery" ></el-switch>
          </el-form-item>

          <el-form-item label="是否开启上盘">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>

          <el-form-item>
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
        checked5: false,
        checked6: true,
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss">

  .image{
    width: 80px;
    height: 80px;
    border-radius: 40px;
  }

  .form-item-box {
    border: 1px solid #eee;
    height: auto;
    overflow:hidden;
    padding: 5px;
    border-radius: 4px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }
</style>
