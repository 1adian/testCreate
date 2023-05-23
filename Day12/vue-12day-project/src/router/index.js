import Vue from "vue";
import VueRouter from "vue-router";

// `import` 关键字，引入 路由组件
// 引入的是 Home 组件
// 「同步加载」，即 刷新页面的时候，即加载本组件
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

// routes - 即 好多个 route
const routes = [
  {
    // 本对象即一个 路由  - route
    // 在 数组中的每个对象，即 进行一个 route 的配置
    path: "/", // 指定 path
    name: "home",
    component: HomeView, // 对该path， 匹配 要显示对应的 路由组件
  },
  {
    path: "/about",
    name: "about", // 注：name 不是 必选项
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is `lazy-loaded` when the route is visited.

    // 懒加载；其 作用：点击/url中输入 `/about` 的 path，
    // 才进行对应 组件的  导入/import
    // 与 「懒加载」对应的叫「同步加载」，即页面刷新（显示首页  - HomeView）
    // 即加载组件。

    /* 懒加载/异步加载 的好处：
      1. 首屏加载（首页），不需要加载对应的 组件，点击/输入 对应的 path ，才进行组件的加载。
        -> 避免了 首屏白屏。

        首屏白屏：
          首页的时候，需要 同步 import 太多组件，导致 CPU/内存，消耗过大。
            才导致的白屏。

      2. 点击/输入 对应的 path，才 import 对应的 路由组件。
        避免 首屏加载过多，导致白屏。
    
    */
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    // 将 path 与 路由组件，进行 配对
    // 则 页面中，url 的 path 是 `/test`，就显示对应的 路由组件
    path: "/test",
    component: HomeView,
  },

  {
    // 若 url 显示 `/news`，则 渲染 `新闻组件`
    path: "/news",
    component: () => import("../views/NewsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
