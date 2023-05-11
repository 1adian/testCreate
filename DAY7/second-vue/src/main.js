import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 本 new Vue 生成的实例对象即 `$root`
new Vue({
  render: (h) => h(App),
  data() {
    return {
      xx: "123123",
    };
  },
}).$mount("#app"); // el: '#app'
