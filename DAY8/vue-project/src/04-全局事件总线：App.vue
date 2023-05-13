<template>
  <div id="app">
    <p>模拟爷爷组件</p>
    <button @click="handleClick">点击爷爷</button>
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
    handleClick() {
      console.log("点击 爷爷，绑定 一个 自定义事件");

      // 绑定 自定义事件
      // 注：$on 等同于 `addEventListener`，即同一事件类型，可以被绑定多次
      this.$eventBus.$on("onlyId", (data) => {
        console.log(
          '只要本回调函数被触发，则表示 其他组件 执行了 this.$eventBus.$emit("onlyId", 传递给我的数据)',
          data
        );
      });
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
