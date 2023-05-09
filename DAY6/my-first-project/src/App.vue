<!-- App.vue 文件，等同于 JS 对象：

<template> 即 ： { template: 'xxx' }   

<script> JS  代码，统一写于此

<style>：css 代码，统一写于此
-->

<!-- html 代码， 统一写与此 -->
<!-- App.vue 即 页面显示的内容 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App", // name 的作用：用于给 组件，起一个 唯一的 名字
  components: {
    // 注册 局部 组件
    HelloWorld,
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
