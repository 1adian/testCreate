import Vue from "vue";
import Vuex from "vuex";
import example from "./modules/example";
import { action } from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
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

  // 若 根节点的 actions 非常多，则可以将其 单独放置在一个文件中
  // 为了方便代码的管理
  actions: action,

  // es6：ESM  ->  ES Module
  // Module - 模块化
  modules: {
    example, // 注册是 example 的模块
  },
});
