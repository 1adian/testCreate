<template>
  <div class="login">
    <h1>登录页面</h1>

    <div>用户名：<input type="text" v-model="username" /></div>
    <div>密码：<input type="password" v-model="password" /></div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      console.log("登录", this.username, this.password);

      this.$api.user.login(this.username, this.password).then((res) => {
        console.log("login", res);
        if (res.code === 1) {
          // 将后端返回的 token 信息，存储在 本地的 localStorage
          localStorage.setItem("token", res.token);

          // 将后端返回的 id 信息，存储在 本地的 localStorage
          localStorage.setItem("id", res.user.id);

          alert("登录成功，即将为您跳转至 用户详情页面");

          // 进行路由跳转，跳转至 用户详情页面
          this.$router.push("/user-details");
        } else {
          alert(res.message);
        }
      });
    },
  },
};
</script>
