<!-- 
  若 url 中的 path 是 `/about` 则显示本组件。
 -->
<template>
  <div class="about">
    <h1>This is an about page~~~</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AboutView",
  components: {},

  mounted() {
    console.log("AboutView 组件 渲染完毕");
  },
  destroyed() {
    console.log("AboutView 组件 被销毁完毕");
  },
};
</script>
