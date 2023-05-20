import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// import api from '@/api'; 相当于 import api from '@/api/index.js'; 的简写

// api 相当于 `/api/index.js` 的 `export default`
import api from "@/api";

// 即 任何一个 Vue组件中，则都可以通过 `this.$api` 获取到 `/api/index.js` 的 `export default`
Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
