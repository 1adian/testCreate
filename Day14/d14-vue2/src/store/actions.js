export const action = {
  // 根级别
  // 所有 异步 更改 state 的方法 ，要在 action 中声明
  delayNum(context, value) {
    // 模拟 2S 之后 更改数据
    setTimeout(() => {
      context.commit("updateNum", value);
    }, 2000);
  },
};
