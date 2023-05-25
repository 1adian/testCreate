<template>
  <div class="home">
    <h1>你访问的页面不存在 - 获取 store-state-count - {{ count }}</h1>
    <h1>计算属性将 count 值加10 - {{ add10Count }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "NotFoundView",
  components: {},
  computed: {
    // 写法1：映射成当前组件需要的计算属性 【常用】   ...mapState(['','',''])
    ...mapState(["count"]),

    // 写法3：对state 实现 计算属性的写法
    ...mapState({
      // mapState 函数写法:可以访问data数据
      // 注：也可对 state 的数据 进行 “再加工”
      add10Count: (state) => state.count + 10,
    }),
  },
};
</script>

<style scoped>
/* 在本标签中写的 css ，默认 全局生效 */

/* 写 让 div 左对齐的 样式 */
</style>
