<template>
  <div id="app">
    <div>
      <button @click="handleToPath('/')">toHome</button>
      <button @click="handleToPath('/about')">toAbout</button>
      <button @click="handleToPath('/news')">toNews</button>
    </div>
    <nav>
      <!-- 
        <router-link> 本质是 <a> 点击其标签，进行 url 的 path 更改 
        -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/news">News</router-link> |
      <!-- params to属性字符串写法  
            path: "/user/:name/:id",
      -->
      <router-link to="/user/zhangsan/001">User 1</router-link> |
      <router-link to="/user/lisi/002">User 2</router-link> |
      <router-link to="/detail?id=001&title=hello"
        >query传参-商品详情-1</router-link
      >
      |
      <router-link to="/detail?id=002&title=hi"
        >query传参-商品详情-2</router-link
      >
      |
      <router-link to="/nest">嵌套路由</router-link>
      |
    </nav>

    <!-- 
      <router-view /> 作用：
        路由组件，渲染在 <router-view /> 其中。
      
     -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    handleToPath(path) {
      // 是 路由跳转的 最常用 写法！
      this.$router.push(path);
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
