<template>
  <div id="app">
    <button @click="isShow = !isShow">显示/隐藏 Son组件</button>
    <!-- 父传递数据给子，通过 props -->

    <!-- 需求：
      子组件 的数据，只要更新了，
      就将 子组件的 数据 同步(传递)给父组件（val）
    -->
    <Son v-if="isShow" :data="msg" @update:data="updateData" />
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
      msg: "我是父组件传递给子组件的数据",
      isShow: false,
    };
  },
  methods: {
    updateData(val) {
      // val 即 子组件传递过来的数据
      // 子组件：this.$emit("update:data", this.val);
      this.msg = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/variable.scss"; // 引入/导入 颜色变量
</style>
