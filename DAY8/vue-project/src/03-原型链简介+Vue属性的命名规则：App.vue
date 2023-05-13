<template>
  <div id="app">
    <button @click="getVueProp">App中获取 Vue原型对象上的属性</button>
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="handleGetHelloWorld">点击获取 HelloWorld 的实例对象</button>
    <HelloWorld ref="hello" :msg="val" />
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
    getVueProp() {
      console.log(this.yyy);
    },
    handleGetHelloWorld() {
      // VueComponent 组件的构造函数是： `VueComponent`
      console.log("获取 HelloWorld 的实例对象：", this.$refs.hello);
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
