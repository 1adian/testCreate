<template>
  <div class="hello">
    <h1>我是子组件 - {{ name }} - 岁数：{{ age }}</h1>
    <button @click="handleClick">我是子组件的按钮</button>
    <button @click="handleXXXClick">触发 xxxType 的回调函数</button>
  </div>
</template>

<script>
export default {
  name: "AComp", // 给组件起一个 名字/别名
  props: {
    name: {
      type: String,
    },
    age: {
      type: Number, // 指定 age 的类型必须是 数字
      // required: true, // 布尔值，true 表示 必须填写 age 这个参数
      default: 100,
    },
  },
  methods: {
    handleClick() {
      console.log("子组件中点击 btn");
      this.$emit("click", "传参数-子组件的 click 传递/emit/发射出来的数据...");
    },
    handleXXXClick() {
      this.$emit("xxxType", "aaa", "bbb", "ccc");
    },
  },
};
</script>
