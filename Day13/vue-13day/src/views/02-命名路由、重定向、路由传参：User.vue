<template>
  <div class="home">
    <h1>User</h1>

    <!-- 下述 路由传参， 
      组件中 必须有 `$route`；
        强调：本组件，如果 使用了 `$route`，那么 组件所在的 项目中，必须 安装 路由。

        即 本组件 与 $route （路由耦合）
    -->
    <!-- <p>params {{ $route.params }}</p> -->

    <p>props 传参： {{ name }} - {{ id }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "UserView",
  props: ["name", "id"], // props 传参是最基础，最通用的传参形式
  // 希望：路由的传递参数，被 props 获取的到
  components: {},
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped>
/* 在本标签中写的 css ，默认 全局生效 */

/* 写 让 div 左对齐的 样式 */
</style>
