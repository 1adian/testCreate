<template>
  <div id="app">
    <button @click="handleClick('Son1')">显示1</button>
    <button @click="handleClick('Son2')">显示2</button>
    <button @click="handleClick('Son3')">显示3</button>

    <!-- 保活：即 component 的动态组件，渲染，不会再被销毁 -->
    <!-- :exclude='["Personal"]' -->
    <keep-alive>
      <component :is="showComp" />
    </keep-alive>
    <!-- <Son1 />
    <Son2 />
    <Son3 /> -->
  </div>
</template>

<script>
import Son1 from "./components/Son1.vue";
import Son2 from "./components/Son2.vue";
import Son3 from "./components/Son3.vue";

/* 
  // 需求：点击 button，分别显示 对应的 组件 - Son1 / 2 / 3
  // 即： 选项卡案例
  正常思路：需要 if - else if ... 的条件分支：
*/
export default {
  name: "App",
  components: {
    Son1,
    Son2,
    Son3,
  },
  data() {
    return {
      showComp: "Son1",
    };
  },
  methods: {
    handleClick(str) {
      this.showComp = str;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/variable.scss"; // 引入/导入 颜色变量
</style>
