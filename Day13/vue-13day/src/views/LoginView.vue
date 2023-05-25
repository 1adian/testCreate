<template>
  <div class="home">
    <h1>我模拟 - 登录页面</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LoginView",
  components: {},
  mounted() {
    // 可以获取到 $route ，是在 router/index.js 中对 路由信息的配置
    console.log(this.$route.meta);
  },
};
</script>

<style scoped></style>
