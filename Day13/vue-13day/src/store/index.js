import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 所有的数据(状态)，在此声明
    count: 2,
  },
  getters: {
    // 对 state 的数据进行 “再加工”，其完全等同于 计算属性
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    // 强调：只能在 mutations 中，定义 改变 state 数据的 方法
    updateCount(state, value) {
      console.log("updateCount mutation 被调用了");
      state.count += value; // 强调：本函数实现的是 `+=` count 的值
    },
  },
  actions: {
    // 延迟加
    // 本质 actions 中执行 异步的代码
    delayAdd(context, value) {
      console.log("delayAdd action 被调用了--延迟加");
      setTimeout(() => {
        context.commit("updateCount", value);
      }, 2000);
    },
  },
  modules: {},
});
