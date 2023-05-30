<template>
  <div>
    <h2>Vue3侦听器</h2>
    <p><input type="text" v-model="keyword" /></p>
    <p>count：{{ count }}</p>
    <p><button @click="count++">count++</button></p>
  </div>
</template>
<!-- 
  计算属性：
    作用：对 数据进行 `再加工`。


 -->
<script setup>
import { ref, watchEffect, watch } from "vue";

const keyword = ref("keyword");

// 1、监听ref定义的响应式数据
// 两个参数：参数1：要侦听的数据  参数2：回调函数 参数3：监视的配置
watch(
  keyword,
  (newVal, oldVal) => {
    console.log("keyword 变化了：", newVal, oldVal);
  },
  // 刷新的时候，立即执行一次回调函数
  { immediate: true }
);

const count = ref(0);

// 常用写法
watch(count, (newVal, oldVal) => {
  console.log("count 变化了：", newVal, oldVal);
});

// 组合式API - watch 还提供了 同时可以监听 多个数据变化的写法：

watch([keyword, count], (newVal, oldVal) => {
  console.log("newVal 或 oldVal 发生了变化", newVal, oldVal);
});

// ---------
// 注：watchEffect 默认 刷新的时候会执行一次
watchEffect(() => {
  console.log("watchEffect", keyword.value, count.value);
});
</script>
