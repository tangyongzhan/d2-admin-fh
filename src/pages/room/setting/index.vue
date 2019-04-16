<template>
  <d2-container :filename="filename">

    <el-card class="box-card d2-mb-5 ">
      <div>
        <el-form ref="setting-form" :model="form" size="medium" :rules="rules" label-width="120px" style="width: 540px;">
          <el-form-item label="" class="d2-text-center" >
            <div style="line-height:30px;">
              <img class="image" :src="form.avatar" @click="handleOpenAvatar">
              <div class="d2-text-center" >房间头像</div>
            </div>
          </el-form-item>
          <el-form-item label="房间ID">
            <el-input v-model="form.id" disabled ></el-input>
          </el-form-item>
          <el-form-item label="房间名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="房间公告">
            <el-input type="textarea" v-model="form.notice"></el-input>
          </el-form-item>

          <el-form-item label="客服">
            <div class="form-item-box">
              <el-col class="line d2-text-center" :span="3">QQ</el-col>
              <el-col :span="9">
                <el-input v-model="form.qq1"></el-input>
              </el-col>
              <el-col class="line" :span="3">&nbsp;</el-col>
              <el-col :span="9">
                <el-input v-model="form.qq2"></el-input>
              </el-col>
              <el-col class="line" :span="24"><div style="height: 5px;"></div></el-col>
              <el-col class="line d2-text-center" :span="3">微信</el-col>
              <el-col :span="9">
                <el-input v-model="form.wx1"></el-input>
              </el-col>
              <el-col class="line" :span="3">&nbsp;</el-col>
              <el-col :span="9">
                <el-input v-model="form.wx2"></el-input>
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
                  :on-success="handlerUploadImage"
                  :before-upload="beforeUploadImage">
                  <img v-if="form.zfbUrl" :src="form.zfbUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-col>
              <el-col class="line d2-text-center" :span="3">微信</el-col>
              <el-col :span="9" style="line-height:0">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handlerUploadImage"
                  :before-upload="beforeUploadImage">
                  <img v-if="form.wxUrl" :src="form.wxUrl" class="avatar">
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
                :on-success="handlerUploadImage"
                :before-upload="beforeUploadImage">
                <img v-if="form.hbUrl" :src="form.hbUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-col>
          </el-form-item>

          <el-form-item label="开启房间验证">
            <el-switch v-model="form.verify"></el-switch>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit('setting-form')"  style="min-width: 150px;">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-dialog
      title="选择头像"
      custom-class="fh-dialog"
      :center="true"
      :close-on-click-modal="true"
      :show-close="true"
      :visible.sync="dialogVisible"
      :before-close="handleCloseAvatar">
      <div class="d2-text-center"> <img class="image" :src="currentAvatar" alt=""> </div>
      <div class="content avatar-list">
        <div class="item" v-for="(item, index) in allAvatar" :key="index">
          <img :src="item.avatar" alt="" @click="handleClickAvatar(item)">
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCloseAvatar">取 消</el-button>
        <el-button type="primary" @click="handleConfirmAvatar">确 定</el-button>
      </span>
    </el-dialog>

  </d2-container>

</template>

<script>

import RoomData from '@/api/mock/room.mock.js'

export default {
  name: 'room-setting',
  data () {
    return {
      dialogVisible: false,
      currentAvatar: '',
      allAvatar: [],
      filename: __filename,
      form: {
        avatar: '/image/placeholder.png',
        id: 123,
        name: '',
        notice: '',
        qq1: '',
        qq2: '',
        wx1: '',
        wx2: '',
        zfbUrl: '',
        wxUrl: '',
        hbUrl: '',
        verify: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    this.getAvatarList()
    console.log(this.allAvatar)
    this.getRoomSettingData()
  },
  methods: {
    handleOpenAvatar () {
      this.dialogVisible = true
      this.currentAvatar = this.form.avatar
    },
    handleClickAvatar (item) {
      this.currentAvatar = item.avatar
    },
    handleConfirmAvatar () {
      this.form.avatar = this.currentAvatar
      this.dialogVisible = false
    },
    handleCloseAvatar () {
      this.dialogVisible = false
    },

    getAvatarList () {
      this.allAvatar = RoomData.room.allAvatar
    },

    handlerUploadImage (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeUploadImage (file) {
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

    getRoomSettingData () {
      // this.$ajax.get('api/getRoomSetting')
      // .then((response)=>{

      //   this.newsList=response.data.data;
      // }).catch((response)=>{
      //   console.log(response);
      // })
    },
    onSubmit (formName) {
      console.log(this.form)
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

<style lang="scss">

  .fh-dialog{
    width: 400px;
    .avatar-list{
      margin: 0 auto;
      height: auto;
      overflow:hidden;
      .item{
        margin: 5px;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        float: left;
        img{
          width: 60px;
          height: 60px;
          border-radius: 30px;
        }
      }

    }
  }

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
