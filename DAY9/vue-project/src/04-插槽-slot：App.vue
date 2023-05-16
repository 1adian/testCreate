<template>
  <div id="app">
    <Son :data="msg">
      <!-- 放入 name 为 left 的插槽 -->

      <!-- `#left` 是  `v-slot:left` 的简写 -->
      <template #left>
        <h1>父组件传递给子组件的，希望其放到 left。。。</h1>
      </template>

      <!-- 放入 默认 插槽 -->
      <h1>父组件传递给子组件的，希望其放到 middle。。。</h1>

      <!-- 放入 name 为 right 的插槽 -->
      <template v-slot:right="data">
        <h1>data - {{ data }} - {{ data.msg }}</h1>
        <!-- <h1>父组件传递给子组件的，希望其放到 right。。。</h1> -->
      </template>
      <!-- <Son2 /> -->
      <!-- <h2 style="color: palevioletred">父组件传递给子组件的标签...</h2> -->
    </Son>
  </div>
</template>

<script>
// import Son2 from "./components/Son2.vue";
import Son from "./components/Son.vue";

export default {
  name: "App",
  components: {
    Son,
    // Son2,
  },
  data() {
    return {
      msg: "~~~~",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./style/variable.scss"; // 引入/导入 颜色变量
</style>
