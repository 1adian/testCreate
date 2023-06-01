<template>
  <div>
    <h1>element组件 验证</h1>
    <button @click="handleAlert">弹框</button>
  </div>
</template>
<script setup>
import { ElMessage } from "element-plus";

const handleAlert = () => {
  // ElMessage("Delete completed");
  // 注：上述写法，为：
  ElMessage({
    type: "info",
    message: "Delete completed",
  });
};
</script>
