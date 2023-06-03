<template>
  <div>
    <h1>设置页面</h1>
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
