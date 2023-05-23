<template>
  <div class="login">
    <h1>用户详情页面</h1>

    <h2>用户详情信息：{{ userInfo }}</h2>
  </div>
</template>

<script>
export default {
  name: "UserDetailsView",
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {},
  // 进入 用户详情页面，需要 进行 用户详情的 数据请求
  // 注：ajax 的数据请求，进入组件需要 ajax 的话，一般在 created 的钩子函数中写代码

  created() {
    // 通过 接口 获取 用户详情的数据
    this.$api.user.getUserDetails().then((res) => {
      console.log("getUserDetails", res);
      if (res.code === 1) {
        // 表示成功登录，可以获取到数据
        this.userInfo = res.info;
      } else {
        alert("获取 用户详情失败，即将为您跳转至登录页面，请重新登录");
        this.$router.push("/login");
      }
    });
  },
};
</script>
