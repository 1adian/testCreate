<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="handleGetHelloWorld">点击获取 HelloWorld 的实例对象</button>
    <!-- 需求：
      点击 HelloWorld 组件，
        则将 HelloWorld 的数据，赋值给 val




      强调：点击 HelloWorld 组件，并不会 触发 回调函数
        因为 vue2 中， @click 等事件，必须绑定到 原生的DOM元素

      @事件类型="回调函数"

      @xxx="handleClick" 的含义：
        只要 子组件中，执行了 this.$emit('xxx', `实参A`)  即触发 `handleClick` 的回调函数
          `实参A` 会被赋值给 handleClick 回调函数的 形参
    -->
    <HelloWorld ref="hello" @xxx="handleClick" :msg="val" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      val: "xxx",
    };
  },
  methods: {
    handleGetHelloWorld() {
      console.log("获取 HelloWorld 的实例对象：", this.$refs.hello);
    },
    // this.$emit("xxx", this.message);
    // data 形参的值是 `this.message` 的值
    handleClick(data) {
      this.val = data;
      console.log("APP 的回调函数 - handleClick", data);
    },
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
