import Vue from "vue";
import App from "./App.vue";

import "animate.css"; // 引入 三方库 - `animate.css`

// 注：因为有了 webpack，所以 main.js 中，能直接导入 `.scss` 的文件
// 作用：即让 index.scss 所导入的 文件，全局生效
import "@/style/index.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
