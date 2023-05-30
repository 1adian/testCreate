<template>
  <h3>Vue3 获取Dom 元素</h3>
  <div ref="box">Hello</div>
  <ChildComp msg="父组件传递给子组件的数据..." @sendHandler="getFn" />
</template>

<script setup>
import { ref, onMounted } from "vue";
// 注：setup 标签中，组件不需要注册
import ChildComp from "@/components/ChildComp.vue";

const getFn = (data) => {
  console.log("子组件通过 $emit 传递过来的数据...", data);
};

// --------- 模板引用 ---------------
// 注：变量名 `box`， 必须与 ref 的属性值一致： `<div ref="box">Hello</div>`
const box = ref(null);

onMounted(() => {
  console.log(box.value);
});
// --------- 模板引用 ---------------
</script>
