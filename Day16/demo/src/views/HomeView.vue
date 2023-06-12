<template>
  <el-container>
    <el-aside :width="sideWidth"><MenuCom :isCollapse="!flag"/></el-aside>
    <el-container>
      <el-header>
        <el-icon @click="flag = !flag">
    <ArrowLeftBold v-if="flag" />
    <ArrowRightBold v-else />
  </el-icon>
  <div class="avatar-box">
    <el-space :size="24">
      <span>欢迎您:{{ userInfo.adminname }}</span>
      <el-dropdown>
        <el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar>
        <template #dropdown>
<el-dropdown-menu>
  <el-dropdown-item @click="$router.push('/set')"
                    >设置</el-dropdown-item
    >
  <el-dropdown-item @click="handleLogout"
                    >退出</el-dropdown-item
    >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-space>
  </div>
      </el-header>
      <el-main><router-view /> </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";
import MenuCom from '@/components/MenuCom.vue'
import {Check} from '@element-plus/icons-vue'
import { mapState ,mapMutations} from 'vuex'
export default{
  name : 'HomeView',
  data(){
    return{
      flag:true,
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    
    }
  },
   
  methods : {
    ...mapMutations(['updateUserInfo']),
    handleLogout(){
      localStorage.removeItem('token');
      this.updateUserInfo({});
      //跳转之登录页面
      this.$router.push('/login')
    },
   
  },

  components : {
    Check,
    MenuCom,
    ArrowLeftBold,
    ArrowRightBold
  },
  computed : {
    ...mapState(['userInfo']),
    sideWidth(){
      return this.flag ? '200px' : '64px'
    }
  }
}
</script>

<style lang="scss" scoped>


.el-container {
  height: 100%;
  background-color: #dfe6e9;
.el-aside {
  background-color: white;

  // 侧边栏折叠动画速度
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