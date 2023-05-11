<template>
  <div class="hello">
    <h1>我是子组件 - {{ name }} - 岁数：{{ age }}</h1>
    <button @click="handleClick">Son-点我</button>
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
  data() {
    return {
      val: "我是 Son 中的 val",
    };
  },
  methods: {
    handleClick() {
      // console.log("Son-$root", this.$root);
      console.log("Son-$parent", this.$parent);
    },
  },
};
</script>
