<template>
  <div class="login-container">
    <div class="form-wrap">
      <h2>嗨购后台商品管理系统</h2>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户：" prop="username">
          <el-input v-model="ruleForm.username" type="text" autocomplete="off">
            <!-- 使用插槽 -->
            <template v-slot:prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off">
            <!-- <template #prefix>
              <el-icon><Lock /></el-icon>
            </template> -->
            <template #prefix>
              <el-icon><search /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码确认" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password">
            <template v-slot:prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置表单</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { User, Lock, Search } from "@element-plus/icons-vue";
export default {
  name: "LoginView",
  components: {
    User,
    Lock,
    Search,
  },
  data() {
    return {
      rules: {
        username: [
          {
            required: true, // 必填项
            message: "请输入用户名", // 若不填写内容，则 提示 message 信息
            trigger: "blur", // 光标丢失时，进行必填项的验证
          },
        ],
        pass: [
          {
            required: true, // 必填项
            message: "请输入密码", // 若不填写内容，则 提示 message 信息
            trigger: "blur", // 光标丢失时，进行必填项的验证
          },
        ],
        checkPass: [
          // validator -> 验证器
          // this.validatePass2 该函数触发的时机：光标丢失
          { required: true, validator: this.validatePass2, trigger: "blur" },

          // {
          //   // 本表单验证的规则是： 光标丢失时，进行 必填项的验证，若本 input 没有输入信息，则 红色文字显示 message 的信息
          //   required: true, // 必填项
          //   message: "请二次输入密码", // 若不填写内容，则 提示 message 信息
          //   trigger: "blur", // 光标丢失时，进行必填项的验证
          // },
        ],
      },
      ruleForm: {
        username: "", // 用户名
        pass: "", // 密码
        checkPass: "", // 密码确认
      },

      // 其要获取 <el-form> 的表单实例对象
      ruleFormRef: null,
    };
  },
  methods: {
    // 自定义 表单验证器
    validatePass2(rule, value, callback) {
      // console.log("value", value);
      // 注：形参 value 的值是 input 中的输入值
      if (value === "") {
        // 只要执行本 callback ，则 Error 中的文本，会在 页面中显示
        callback(new Error("请再次输入密码！！"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入的密码不一致！"));
      } else {
        // 表示验证通过
        callback();
      }
    },

    submitForm(formEl) {
      // formEl 该参数即为 <el-form> 表单实例 对象
      console.log(formEl);

      if (!formEl) return;

      // formEl.validate 执行表单验证
      // https://element-plus.org/zh-CN/component/form.html#form-methods
      formEl.validate((valid) => {
        // 如果 valid 为true 则表示，表单验证通过
        if (valid) {
          console.log("submit!");
        } else {
          // 表单验证未通过
          console.log("error submit!");
          return false;
        }
      });
    },
    resetForm(formEl) {
      if (!formEl) return;
      formEl.resetFields(); // 重置表单
    },
  },
  mounted() {
    // 本钩子函数的执行时机： 页面渲染完毕，执行本钩子函数

    this.ruleFormRef = this.$refs.ruleFormRef; // 即可以获取 <el-form> 的引用
  },
};
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // scss 中的 特殊符号： `&` -> 指的 父级选择器
  // 在此为 `.login-container`
  & > .form-wrap {
    width: 400px;
    background-color: white;
    padding: 20px;
    border-radius: 20px;

    h2 {
      padding: 20px 0;
      text-align: center;
    }
  }
}
</style>
