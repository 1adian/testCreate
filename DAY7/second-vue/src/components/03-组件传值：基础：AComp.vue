<template>
  <div class="hello">
    <!-- 希望在 组件"执行"，组件使用的时候，传参： `name` -->
    <h1>我是 A 组件 - (子组件)- {{ name }} - 岁数：{{ age }}</h1>
  </div>
</template>

<script>
// 1. 组件声明
export default {
  name: "AComp", // 给组件起一个 名字/别名
  // 属性：数组中，写 "组件的形参"
  // （props 的数组形式）
  // props: ["name", "age"], // 只要在此 声明了 `组件的参数`，则 this.xxx 即可获取到该参数
  // 若在 父组件中， 使用了本组件 <AComp :name="xxx" />
  // xxx 的值，则会赋值给 `this.name`

  // --- props 中要指定 `参数的类型` （props 的对象形式 - 对象形式更常用）
  props: {
    name: String, // 指定 name 参数必须是 字符串类型
    age: Number, // 指定 age 参数 必须是 数字类型
  },
};
</script>
