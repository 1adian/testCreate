<template>
  <!-- https://element-plus.org/zh-CN/component/container.html -->
  <el-container>
    <el-aside :width="sideWidth">
      <MenuCom :isCollapse="flag" />
    </el-aside>
    <el-container>
      <el-header>
        <!-- 左侧 的 icon - 即切换 放大/缩小 menu菜单 -->
        <el-icon @click="flag = !flag">
          <ArrowRightBold v-if="flag" />
          <ArrowLeftBold v-else />
        </el-icon>
        <el-space :size="16">
          <span>欢迎您:{{ userInfo.adminname }}</span>

          <el-dropdown>
            <el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="$router.push('/set')"
                  >设置</el-dropdown-item
                >
                <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-space>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { Check } from "@element-plus/icons-vue";
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";
import { mapState, mapMutations } from "vuex";
import MenuCom from "@/components/MenuCom.vue";
export default {
  name: "HomeView",
  data() {
    return {
      flag: true,
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  methods: {
    ...mapMutations(["updateUserInfo"]),
    handleLogout() {
      // 清空 token，即表示 退出
      localStorage.removeItem("token");

      // 清空 vuex 的数据
      this.updateUserInfo({});

      // 跳转至登录页面
      this.$router.push("/login");
    },
  },
  components: {
    // Check,
    MenuCom,
    ArrowLeftBold,
    ArrowRightBold,
  },

  computed: {
    ...mapState(["userInfo"]),
    sideWidth() {
      return !this.flag ? "200px" : "64px";
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  background-color: #dfe6e9;
  .el-aside {
    background-color: white;
    transition: 0.25s all;
  }
  .el-header {
    background-color: #7f8fa6;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
