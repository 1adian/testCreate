<template>
  <div id="app">
    <!-- 
      子组件，通过 emit 改变父组件的方法，和 v-model 一致，也有 「语法糖」 ：

      <Son :data="msg" @update:data="updateData" />
      上述语句，其语法糖是：  


      // 即 本来 :data 是 单向数据流，通过 `.sync` 本质还是语法糖，实现了 组件间 双向数据流的写法
      <Son :data.sync="msg" />

      // 强调：子组件 必须有 `this.$emit("update:data", this.val);`
    -->
    <Son :data.sync="msg" />
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
      msg: "~~~~",
    };
  },
  methods: {
    // updateData(val) {
    //   // val 即 子组件传递过来的数据
    //   // 子组件：this.$emit("update:data", this.val);
    //   this.msg = val;
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/variable.scss"; // 引入/导入 颜色变量
</style>
