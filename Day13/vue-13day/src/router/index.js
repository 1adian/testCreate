import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  // 进行路由配置：将 path 与 组件，进行配对
  // 若 页面中，url 显示对应的 path，则渲染对应的组件
  {
    path: "/",
    component: HomeView,
  },

  // { // props 传参 - 布尔值形式
  //   path: "/user/:name/:id", // 必填 属性
  //   props: true, // 即支持 组件传参
  //   name: "user", // 可选属性
  //   component: () => import("../views/User.vue"),
  // },
  {
    // props 传参 - 函数形式
    path: "/user",
    component: () => import("@/views/User.vue"),
    props(route) {
      return {
        id: route.query.id,
        name: route.query.name,
      };
    },
  },
  {
    path: "/about",
    name: "about", // 注：name 是可选 的属性
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    // 登录页面
    path: "/login",
    component: () => import("../views/LoginView.vue"),
    meta: {
      xx: "xxx", // 即在 组件中，可以通过 `$route.meta` 获取的到
    },
  },
  { path: "/404", component: () => import("../views/404.vue") },

  // '*' 表示 通配符 所有
  // 将所有的 无效路由，重定向到 `/404` 对应的 组件
  { path: "*", redirect: "/404" }, // 注：一定要放在数组的 最后
];

const router = new VueRouter({
  mode: "history", // "hash" || "history"
  base: process.env.BASE_URL,
  routes,
});

// beforeEach 的基本用法
// 注：beforeEach 等导航守卫的核心思想 - 即「拦截器」的思想
// router.beforeEach((to, from, next) => {
//   // 注： next 是函数
//   // to 表示 即将范文的 $route
//   // from 表示 从`本 $route` 去访问路由
//   // -> 即 从哪个路由触发
//   console.log(to, from);

//   next(); // 执行 next 函数，才能真正实现 路由跳转
// });

// 只要进行 任何 路由跳转，均会 执行 本 路由守卫（拦截器）
router.beforeEach((to, from, next) => {
  // 如果是 去往 登录页直接 “放行”
  if (to.path === "/login") {
    next();
    return;
  }

  // 模拟 未登录
  const isLogin = true; // localStorage.getItem('isLogin')

  // 若未登录，去往其他页面，则会被 重定向至 登录页面
  if (!isLogin) {
    alert("你未登录，请登录");
    next("/login"); // 将路由访问：重定向到 登录页面
  } else {
    next();
  }
});
export default router;
