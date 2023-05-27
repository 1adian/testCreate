// *** 在组件中 的用法 *** eg:

/* 

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
computed: {
  ...mapState("example", ["count"]),
  ...mapGetters("example", ["squareCount"])
}
methods: {
  ...mapActions("example", ["delayIncrement"]),
  ...mapMutations("example", ["increment"]),
} 

*/

// *** 在组件中 的用法 *** eg:

export default {
  // 使用 vuex 模块化的 前提
  namespaced: true, // 强调：必须 设该 属性为 true
  state: {
    count: 11,
    num: 7,
  },
  getters: {
    // `x ** 2` :  ES6 的幂运算
    // 等价于 Math.pow(x, 2)
    squareCount: (state) => state.count ** 2,
  },
  mutations: {
    increment(state, value) {
      state.count += value;
    },
  },
  actions: {
    // 异步操作
    delayIncrement({ commit }, value) {
      setTimeout(() => {
        // 异步时间到了，触发 对应 的 mutation 方法
        commit("increment", value);
      }, 1000);
    },
  },
};
