<template>
  <div id="app">
    <button @click="handleToUser">toUser</button>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    handleToUser() {
      // 使用的 name 进行路由跳转
      // this.$router.push({ name: "user" });

      // 使用 path 进行路由跳转
      // `/namexxx/idyy` 会以参数的形式，传递至 User.vue 中
      // this.$router.push("/user/namexxx/idyyy"); // params 传参

      // 路由跳转 - query 传参
      this.$router.push({
        path: "/user",
        query: {
          id: "query-idxxx",
          name: "query-nameyyy",
        },
      });
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
