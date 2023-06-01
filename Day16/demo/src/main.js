import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/style/index.scss"; // 引入 index.scss 则，全局生效所有的 style 中的样式

// 引入 ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// createApp(App).use(store).use(router).mount("#app");

const app = createApp(App);

// 链式写法，依次 注册其他的功能 （渐进式）
app
  .use(ElementPlus) // 注册 ElementPlus
  .use(store) // vuex
  .use(router) // router
  // .use(xxx)
  .mount("#app");
