<template>
  <div class="hello">
    <!-- 希望在 组件"执行"，组件使用的时候，传参： `name` -->
    <h1>我是 A 组件 - (子组件)- {{ name }} - 岁数：{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "AComp", // 给组件起一个 名字/别名

  props: {
    // name: String, // 指定 name 参数必须是 字符串类型
    name: {
      // name 传参必须是 "success", "warning", "danger" 三者中的某一个
      validator: function (value) {
        // value 即为调用组件时，传递的参数的值
        // 这个值必须匹配下列字符串中的一个
        // 即必须要求 传递的参数是 数组中的某个元素
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    }, // validator - 验证
    age: {
      type: Number, // 指定 age 的类型必须是 数字
      // required: true, // 布尔值，true 表示 必须填写 age 这个参数
      default: 100,
    },
  },
};
</script>
