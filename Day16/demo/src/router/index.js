import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import { ElMessage } from "element-plus";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children : [
      {
        path:'manager',
        name:'manger',
        component :()=>import('@/views/manager/ManagerIndexView.vue'),

      
      children : [
        {
          path:'managerlist',
          name:'list',
          component :()=>import('@/views/manager/ManagerListView.vue')
        },
      ]
    },
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  }, // SetView.vue
  {
    path: "/set",
    name: "set",
    component: () => import("../views/SetView.vue"),
  }, // .vue
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 添加前置 路由守卫
const isLogin = () => {
  // `!!` 作用：将 字符串 / null， 转成 布尔值
  return !!localStorage.getItem("token"); //如果token为''|undefined|false等，返回结果都是false
};

// 如果登录成功了，本地存储存了token了，再去访问登录页面的话，如果登录了，直接跳转到首页
router.beforeEach((to, from, next) => {
  // 去`/login` 页面之前：
  if (to.path === "/login") {
    if (isLogin()) {
      // isLogin() -> false （表示未登录） -> 直接跳转到登录页面
      ElMessage("登录状态有效，不需要重复登录");

      // 重定向： 至  `/` ， home 页面
      next("/");
      return;
    }
  }

  // 表示 正常的 路由跳转
  next();
});

export default router;
