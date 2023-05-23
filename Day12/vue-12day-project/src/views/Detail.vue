<!-- 
  若 url 中的 path 是 `/about` 则显示本组件。
 -->
<template>
  <div>
    <H2>Detail</H2>
    <p>id---{{ $route.query.id }}</p>
    <p>title---{{ $route.query.title }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "DetailView",
  components: {},

  created() {
    // 注：this.$route 其中包含了 当前组件对应的  路由信息
    console.log(this.$route);

    console.log(this.$route.query);
  },
};
</script>
