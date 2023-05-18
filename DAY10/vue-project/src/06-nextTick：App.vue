<template>
  <div id="app">
    <h1 ref="header">App</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      show: true,
      msg: "Hello Filter",
    };
  },
  // 思考：在 钩子函数中 获取 DOM元素：
  created() {
    // 强调：created钩子函数，无法获取DOM元素
    // created 钩子函数执行的时候，是 vm 实例创建完毕，但 页面并未进行渲染
    // 即 虚拟DOM，并未 渲染成真实的 DOM
    console.log("created", this.$refs.header); // 可以获取到 DOM 元素

    // 面试问题：如何在 created钩子函数中 获取到 DOM元素？
    this.$nextTick(() => {
      // 本回调函数，会在 页面更新(即DOM元素挂载)完毕，执行本钩子函数
      console.log("created - nextTick", this.$refs.header);
    });
  },

  mounted() {
    // mounted钩子函数中，可以获取DOM元素
    // mounted执行的时机：页面的DOM元素渲染完毕
    console.log("mounted", this.$refs.header); // 可以获取到 DOM 元素
  },
};
</script>

<style lang="scss" scoped></style>
