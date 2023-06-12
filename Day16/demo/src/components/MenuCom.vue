<template>
  <div>
    <el-menu
      :collapse="isCollapse"
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      router
    >
      <!--  
        :router="true" 
        注：若 el-menu 设置 router，则 自动实现路由跳转
          其跳转的 path 为 `index` 的值
      -->
      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-sub-menu index="/manager">
        <template #title>
          <el-icon><location /></el-icon>
          <span>账号管理</span>
        </template>
        <el-menu-item index="/manager/managerlist">管理员列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/banner">
        <template #title>
          <el-icon><location /></el-icon>
          <span>轮播图管理</span>
        </template>
        <el-menu-item index="/banner/bannerlist">轮播图列表</el-menu-item>
        <el-menu-item index="/banner/banneradd">轮播图添加</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import { Menu as IconMenu, Location } from "@element-plus/icons-vue";

export default {
  name: "MenuCom",
  props: {
    isCollapse: {
      type: Boolean,
    },
  },
  components: { IconMenu, Location },
  data() {
    return {
      defaultActive: "",
    };
  },
  // 侦听器
  watch: {
    $route: {
      // 设为 true，则 刷新页面的时候，也会执行一次回掉函数
      immediate: true,
      handler() {
        // 刷新时，也将 fullPath 赋值给 defaultActive
        // 作用：刷新时，也能高亮对应的 menu 按钮
        this.defaultActive = this.$route.fullPath;
      },
    },
  },
};
</script>

<style scoped lang="scss">
// 对 element 的样式，进行 默认覆盖
.el-menu {
  border-right: none;
}
</style>
