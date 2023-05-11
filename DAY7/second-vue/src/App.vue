<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 4. 局部组件使用 -->
    <AComp />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// 2. 引入局部组件
import AComp from "@/components/AComp.vue"; // 路径中 `@` 直接表示 `/src` 文件夹

export default {
  name: "App",
  components: {
    // HelloWorld,
    AComp, // 3. 局部组件注册
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
