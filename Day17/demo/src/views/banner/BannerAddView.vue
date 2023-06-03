<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="alt" prop="alt">
        <el-input v-model="ruleForm.alt" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="link" prop="link">
        <el-input v-model="ruleForm.link" type="text" autocomplete="off" />
      </el-form-item>

      <el-form-item label="img" prop="img">
        <el-upload
          :http-request="httpRequest"
          class="avatar-uploader"
          :show-file-list="false"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >添加</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "@/api";
import { Plus } from "@element-plus/icons-vue";
export default {
  name: "BannerAddView",
  components: {
    Plus,
  },
  data() {
    return {
      ruleFormRef: null,
      ruleForm: {
        img: "",
        alt: "",
        link: "",
      },
      imageUrl: "",
      rules: {
        link: [{ required: true, message: "输入link", trigger: "blur" }],
        alt: [{ required: true, message: "输入alt", trigger: "blur" }],
        img: [{ required: true, message: "选择图片", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.ruleFormRef = this.$refs.ruleFormRef;
  },
  methods: {
    // 注：希望 限制图片的大小、甚至格式，可以参考：
    // https://element-plus.org/zh-CN/component/upload.html#%E7%94%A8%E6%88%B7%E5%A4%B4%E5%83%8F
    httpRequest(data) {
      this.imageUrl = URL.createObjectURL(data.file);
      this.ruleForm.img = this.imageUrl;
      console.log("httpRequest - data", this.imageUrl);
    },
    // httpRequest(data) {
    //   // 注： data.file 中 存储的是 图片信息
    //   // file 被解析为 可传输的 图片数据格式
    //   const file = URL.createObjectURL(data.file);

    //   console.log("httpRequest", data, file);
    // },
    submitForm(formEl) {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          // console.log("submit!");
          // 表单验证成功之后，进行数据的提交
          api.banner.addBanner(this.ruleForm).then((res) => {
            console.log("res", res);
            // 如果数据上传成功，则跳到 banner 列表页面
            if (res.code == "200") {
              this.$router.push("/banner/bannerlist");
            }
          });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
<!-- 
<style scoped lang="scss">
.banner-container {
  height: 100%;
  width: 360px;
  padding: 24px;
  .el-icon {
    width: 50px;
    height: 50px;
    background: #fff;
  }
}
</style> -->
