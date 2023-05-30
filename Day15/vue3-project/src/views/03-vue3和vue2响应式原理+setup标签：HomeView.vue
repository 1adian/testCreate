<template>
  <h3>Vue3 - setup 标签</h3>
  <button @click="handleAddCount">addCount</button>
  <h1>count {{ count }}</h1>
</template>

<script setup>
// 引入 ref 函数
import { ref } from "vue";

// 直接在 setup 标签中声明的变量 和 方法，可以不需要 return ，直接在 template 中使用
const count = ref(0);

const handleAddCount = () => {
  count.value++;
};
</script>
