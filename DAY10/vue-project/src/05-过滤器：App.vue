<template>
  <div id="app">
    <button v-on:click="show = !show">Toggle</button>
    <!-- 过滤器的使用 -->
    <h1>{{ msg | add$ }}</h1>

    <!--使用 计算属性 替代 过滤器 -->
    <h1>{{ msgAdd$ }}</h1>
  </div>
</template>

<script>
/* 
  过滤器 案例：
    作用：对 已有的数据，进行 再处理/再加工。


  需求/案例：
    对 字符串，只要 执行了 本过滤器，则 对字符串 的末尾增加一个 `$`

*/
export default {
  name: "App",
  components: {},
  data() {
    return {
      show: true,
      msg: "Hello Filter",
    };
  },

  computed: {
    msgAdd$() {
      return this.msg + "$$$";
    },
  },

  filters: {
    // 自定义 局部过滤器
    // 对 字符串，只要 执行了 本过滤器，则 对字符串 的末尾增加一个 `$`
    add$(val) {
      // 注： val 等同于 要 施加效果的 字符串
      return `${val}~~~$`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
