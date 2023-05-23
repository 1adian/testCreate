<!-- 
  若 url 中的 path 是 `/about` 则显示本组件。
 -->
<template>
  <div>
    <H2>User</H2>
    <p>name:{{ $route.params.id }}----{{ $route.params.name }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "UserView",
  components: {},

  created() {
    // 注：this.$route 其中包含了 当前组件对应的  路由信息
    console.log(this.$route);
    // 获取参数  {参数：值,id:123,name:''}
    console.log(this.$route.params);
  },
};
</script>
