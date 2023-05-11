<template>
  <div id="app">
    <!-- App - 父组件 -->
    <button @click="handleClick">点我-app</button>
    <Son ref="son" :name="msg" :age="33" />
    <!-- 。。。无数个组件 -->
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  name: "App",
  components: {
    Son,
  },
  data() {
    return {
      msg: "success",
    };
  },
  methods: {
    handleClick() {
      console.log("App", this.$el); // element -> 即当前组件的 根节点(dom元素)
      console.log("获取 children", this.$children); // 数组

      // this.$refs.xxx 获取 子组件的 vm ，相对常用
      // 因为 父组件通过该方法，可以直接获得 子组件的 数据和方法
      // 在某些 极端情况下，会有用。
      console.log("获取 Son 的 ref", this.$refs.son);
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
