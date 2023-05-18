<template>
  <div id="app">
    <button v-on:click="show = !show">Toggle</button>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__backOutDown"
    >
      <!-- 强调： animate.css 的使用，必须保留 custom-classes 和 animate__animated 这两个 className -->

      <!-- 注： 
        enter 表示 进场动画
          用法：在 animate.css 官网复制 想要的 进场动画 css, 直接 粘贴替换 `animate__backInDown`

        leave 表示 离场动画
          用法：在 animate.css 官网复制 想要的 离场动画 css， 肢体粘贴替换  `animate__backOutDown`
      -->
      <p v-if="show">hello</p>
    </Transition>
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

<style lang="scss" scoped></style>
