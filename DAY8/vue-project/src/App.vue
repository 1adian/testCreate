<template>
  <div id="app">
    <button @click="flag = !flag">点我 toggle - HelloWorld</button>

    <img width="50" :src="kPhomeImgUrl" alt="" />

    <!-- flag 为 true 则显示 组件，为 false 则销毁 组件 -->
    <input type="text" v-model="message" />
    <HelloWorld :val="message" v-if="flag" />
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
      message: "父组件传递给子组件的数据...",
      flag: false,
      kPhomeImgUrl: require("@/assets/c.jpg"),
    };
  },
  methods: {},
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
