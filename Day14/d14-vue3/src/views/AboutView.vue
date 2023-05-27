<template>
  <h3>Vue3Reactive实现对象类型数据的响应式</h3>
  <p>姓名：{{ stu.name }}</p>
  <p>年龄：{{ stu.age }}</p>
  <p>英语：{{ stu.score.english }}</p>
  <p>数学：{{ stu.score.shuxue }}</p>
  <p>测试 c :{{ stu.a.b.c }}</p>
  <p>爱好：{{ stu.hobby }}</p>
  <p><button @click="change">修改name和age</button></p>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    // 处理对象  ref({}) 借助 reactive来实现的响应式
    // 代理对象  源对象

    // obj 对象 并不具有数据的响应性
    const obj = {
      name: "zhangsan",
      age: 18,
      score: {
        english: 19,
        shuxue: 99,
      },
      // 深层次
      a: {
        b: {
          c: 1,
        },
      },
      hobby: ["⚽️", "🏀", "🏓"],
    };

    // stu 即使用了 Proxy 为 `obj` 实现了数据的响应性
    let stu = reactive(obj);

    // 定义方法
    const change = () => {
      // 注： reactive 处理对象，使其 具有响应性之后，不需要 .value 以触发其响应性
      stu.name = "李四";
      stu.age = 98;
      // reactive({})  修改里面的属性  不需要再 .value
      stu.score.english = 100;
      stu.hobby[1] = "篮球";
    };

    return { stu, change };
  },
};
</script>
<style lang="" scoped></style>
