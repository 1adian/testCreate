import { createApp } from "vue"; // 导入需要的函数，vue3 函数式写法，其各种功能，都需要通过 导入函数来实现对应的 功能
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入 ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import mitt from "mitt"; // 引入 mitt

// mitt库默认导出的是一个函数，我们需要执行它从而得到事件总线的对象
const mitter = mitt();

// 典型的 面向函数 的编程范式
const app = createApp(App);

// 挂载到 app 上
// 以 实现 类似 vue2 中，全局的 单例的效果
app.config.globalProperties.$mitt = mitter;

// .use(ElementPlus) -> 注册 ElementPlus
app.use(store).use(router).use(ElementPlus).mount("#app");
