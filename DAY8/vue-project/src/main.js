import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Vue.prototype // Vue 的原型对象，其 新增的属性 和 方法，可以被 所有的 实例对象 所继承
// Vue.prototype.yyy = "千锋的属性...";

/* 全局事件总监：
  原理： new Vue 返回的 vm 实例对象， 

  有 `$emit` 的实例方法
    -> 其作用： 用于 “发射” / “触发” 自定义事件 的 回调函数


  还有 `$on` 的实例方法：
    -> 其作用等同于 <HelloWorld @xxx="handleClick" />
    $on('xxx', handleClick);   等同于 `@xxx="handleClick"`


    即若执行了 $emit('xxx', '数据')， 则触发 handleClick 的回调函数。
*/

// 全局 事件总线
// 即任何组件，都可以获取到 `this.$eventBus`
// 即1 任何组件，都可以使用（事件绑定） `this.$eventBus.$on('自定义事件类型', 回调函数)`
// 即2 任何组件，都可以使用（事件触发） `this.$eventBus.$emit('自定义事件类型', 数据)`
Vue.prototype.$eventBus = new Vue();

new Vue({
  render: (h) => h(App),
  el: "#app", // 注： 组件实例，就没有 `el` 属性
});
// .$mount("#app");

// vm 的构造函数是 `Vue`
console.log("Vue.prototype", Vue.prototype);
