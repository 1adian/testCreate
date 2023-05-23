<!-- 
  若 url 中的 path 是 `/about` 则显示本组件。
 -->
<template>
  <div>
    <H2>NestView - 嵌套路由</H2>
    <main>
      <div class="menu">
        <!-- 路由导航 -->
        <ul>
          <li><router-link to="/nest/nest1">子路由1</router-link></li>
          <li><router-link to="/nest/nest2">子路由2</router-link></li>
        </ul>
      </div>
      <!-- 路由出口 -->
      <div class="view">
        <!-- 
          则 Nest 的二级路由 组件，显示在：<router-view /> 中
        
        -->
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "NestView",
};
</script>
