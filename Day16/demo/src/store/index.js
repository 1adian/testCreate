import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    userInfo: {}, // 用于 存储 登录后，后端返回的用户数据
  },
  getters: {},
  mutations: {
    updateUserInfo(state, value) {
      state.userInfo = value;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      // 设置持久化的数据
      reducer: (state) => {
        return {
          // 即 将 state 中的 `userInfo` 的数据，进行 持久化 -> 即将数据存储在 localStorage
          userInfo: state.userInfo,
        };
      },
    }),
  ],
});
