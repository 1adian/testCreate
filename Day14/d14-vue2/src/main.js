import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入 Element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 注册 Element
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 下述的 `new` 的典型的 「面向对象」的写法
const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
