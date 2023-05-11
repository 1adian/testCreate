<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 4. 局部组件使用 -->

    <!-- 将 `msg` 作为 "实参"，传递给子组件的 "形参" - `name` -->
    <AComp :name="msg" :age="155" />
    <!-- 
      <AComp :name="msg" age="十三岁" />
      报错信息：Invalid prop: type check failed for prop "age". Expected Number with value NaN, got String with value "十三岁".
      原因：age 参数只能接收数字，而实例传参 是字符串
     -->
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
  data() {
    return {
      msg: "123-abc",
    };
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
