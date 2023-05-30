<template>
  <h3>B 组件</h3>
  <p>
    {{ message }}
  </p>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";

const { proxy } = getCurrentInstance();

const message = ref("");

onMounted(() => {
  // 监听  - `send` 自定义事件类型的触发
  proxy.$mitt.on("send", (data) => {
    console.log("proxy.$mitt.on - send", data);
    message.value = data.value;
  });
});
</script>

<style lang="scss" scoped></style>
