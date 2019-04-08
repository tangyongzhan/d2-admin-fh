<template>
  <d2-container :filename="filename">

    <el-card class="box-card d2-mb-5 ">
      <div>
        <el-form ref="form" :model="form" label-width="120px" style="width: 540px;">
          <el-form-item label="" class="d2-text-center" >
            <div style="line-height:30px;">
              <img class="image" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
              <div class="d2-text-center" >头像</div>
            </div>
          </el-form-item>
          <el-form-item label="房间ID">
            <el-input v-model="form.id" disabled ></el-input>
          </el-form-item>
          <el-form-item label="房间名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="房间公告">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>

          <el-form-item label="客服">
            <div class="form-item-box">
              <el-col class="line d2-text-center" :span="3">QQ</el-col>
              <el-col :span="9">
                <el-input v-model="form.name"></el-input>
              </el-col>
              <el-col class="line" :span="3">&nbsp;</el-col>
              <el-col :span="9">
                <el-input v-model="form.name"></el-input>
              </el-col>
              <el-col class="line" :span="24"><div style="height: 5px;"></div></el-col>
              <el-col class="line d2-text-center" :span="3">微信</el-col>
              <el-col :span="9">
                <el-input v-model="form.name"></el-input>
              </el-col>
              <el-col class="line" :span="3">&nbsp;</el-col>
              <el-col :span="9">
                <el-input v-model="form.name"></el-input>
              </el-col>
            </div>
          </el-form-item>

          <el-form-item label="收款码">
            <div class="form-item-box">
              <el-col class="line d2-text-center" :span="3">支付宝</el-col>
              <el-col :span="9" style="line-height:0">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
              <el-col class="line d2-text-center" :span="3">微信</el-col>
              <el-col :span="9" style="line-height:0">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
            </div>
          </el-form-item>

          <el-form-item label="宣传海报">
            <!-- <el-col class="line d2-text-center" :span="3">支付宝</el-col> -->
            <el-col :span="9">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-col>
          </el-form-item>

          <el-form-item label="开启房间验证">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
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
