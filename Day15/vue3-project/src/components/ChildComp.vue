<template>
  <h3>子组件</h3>
  <button @click="fn">emit</button>
</template>

<script setup>
import { defineProps } from "vue";
import { defineEmits } from "vue";

// 定义 emit，即 子组件可以 `emit` 该事件类型：
const emit = defineEmits(["sendHandler"]);

const fn = () => {
  emit("sendHandler", "子组件传递给父组件的数据");
};

const props = defineProps({
  msg: String,
});

console.log(props.msg);
</script>
