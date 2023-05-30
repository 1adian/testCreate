<template>
  <div>
    <h2>Vue3 的计算属性</h2>
    <p>{{ msg }}</p>
    <p>{{ reverseHello }}</p>
    <p>{{ info }}</p>
    <p>{{ reverseInfo }}</p>
  </div>
</template>
<!-- 
  计算属性：
    作用：对 数据进行 `再加工`。


 -->
<script setup>
// 引入 ref 函数
import { ref } from "vue";
import { reversedStr } from "@/utils/computed.js";

const msg = ref("hello");
const info = ref("你好呀");

// DRY原则： 若开发的过程中，代码发生重复，则要考虑将 代码 统一封装成函数，以实现代码的复用。

const reverseHello = reversedStr(msg);

const reverseInfo = reversedStr(info);
</script>
