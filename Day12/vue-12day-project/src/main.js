import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import api from "./api"; // 即将 `/src/api/index.js` 的默认导出对象，赋值给 api 变量
import "@/style/index.scss"; // 即将 style 的样式，统一使用/生效

Vue.config.productionTip = false;

// 即任何组件中，都可以通过 this.$api 获取到
// 举例： this.$api.test.getTestFirst() ; // 即能使用对应的 ajax 请求
Vue.prototype.$api = api;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
