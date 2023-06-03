<template>
  <div>
    <el-menu
      :collapse="isCollapse"
      default-active="2"
      class="el-menu-vertical-demo"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
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
};
</script>

<style scoped lang="scss">
// 对 element 的样式，进行 默认覆盖
.el-menu {
  border-right: none;
}
</style>
