<!-- 
  若 页面的 url 显示的 path 是 `/`
    则 页面，渲染 本组件

 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },

  mounted() {
    console.log("HomeView 组件 渲染完毕");
  },
  destroyed() {
    console.log("HomeView 组件 被销毁完毕");
  },
};
</script>
