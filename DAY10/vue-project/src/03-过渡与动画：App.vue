<template>
  <div id="app">
    <button v-on:click="show = !show">Toggle</button>

    <!-- 点击 Toggle 进行 显示/隐藏，  其表现出了 类似 “PPT 渐隐渐现的” 动画效果 -->

    <!-- 
      实现的关键点1： 

      <transition name="fade">
        transition 组件，包裹了  要增加 入场/离场 动画的 组件/标签
        <p v-if="show">hello</p>
      </transition>
    -->
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
/* 
  实现的 关键点2： css

    enter -> 表示 进入(进场动画)

    leave - 表示 离开（离开动画）
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
// 若 透明度 不做特殊设置，则 默认是 1
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
