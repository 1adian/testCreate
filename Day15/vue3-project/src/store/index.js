import { createStore } from "vuex";

// 典型的 面向函数 的编程范式
export default createStore({
  state: {
    // 根级别
    // 若 整个SPA 中的数据，都放到 一个 state 中，会造成 数据非常多，且不容易管理
    num: 7, // 数据声明
  },
  getters: {
    // 根级别
    // 对 属性(数据) state 进行再加工
    doubleNum(state) {
      return state.num * 2;
    },
  },
  mutations: {
    // 根级别
    // 不能 直接更改 state 中的数据，必须通过 mutation 进行 state 的更改
    updateNum(state, value) {
      state.num += value; //
    },
  },
  actions: {
    // 若 根节点的 actions 非常多，则可以将其 单独放置在一个文件中
    // 为了方便代码的管理
    delayNum(context, value) {
      // 模拟 2S 之后 更改数据
      setTimeout(() => {
        context.commit("updateNum", value);
      }, 2000);
    },
  },
});
