import { createApp } from "vue"; // 导入需要的函数，vue3 函数式写法，其各种功能，都需要通过 导入函数来实现对应的 功能
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入 ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 典型的 面向函数 的编程范式
const app = createApp(App);
// .use(ElementPlus) -> 注册 ElementPlus
app.use(store).use(router).use(ElementPlus).mount("#app");
