<template>
  <h3>Vue3 - 组合式API - 计数器</h3>
  <p>Count:{{ count }}</p>
  <p>Num: {{ num }}</p>
  <p>Obj: {{ obj }}</p>
  <p>Arr: {{ arr }}</p>
  <button @click="addHandler">增加</button>
  <button @click="update">改变数据</button>
</template>

<script>
// 引入 ref 函数
import { ref } from "vue";

export default {
  // 1. 钩子函数， 所有的 composition API 的写法的代码
  // 要写在 setup 函数中

  // 2. setup return 出来的 对象中的属性，才能在 template 中获取
  setup() {
    const count = ref(0);

    // 希望 num 具有响应性
    let num = ref(999);
    // 注：只要 ref 生成的 数据，都有 .value

    // 复杂数据类型 - obj
    const obj = ref({
      name: "name - obj",
      child: {
        name: "child - name",
        child: {
          name: "child - child",
        },
      },
    });

    // 复杂数据类型 - arr
    const arr = ref(["a", "b"]);

    const update = () => {
      obj.value.name += "1";

      obj.value.child.name += "2";

      obj.value.child.child.name += "3";

      arr.value.push("z");

      console.log(obj, arr, count, num);
    };

    const addHandler = () => {
      count.value++;

      // 让 num 自增
      num.value++;

      console.log(num);
    };

    return {
      count,
      addHandler,
      num,
      update,
      obj,
      arr,
    };
  },
};
</script>
