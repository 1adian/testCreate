<template>
  <div>
    <h1>声明周期 - {{ count }}</h1>
    <button @click="count++">add</button>
  </div>
</template>

<script>
// 组合式API的钩子函数，需要以 函数的形式实现
import {
  onBeforeMount, // BeforeMount // 挂载
  onBeforeUnmount, // BeforeUnmount // 卸载
  onBeforeUpdate, // BeforeUpdate // 数据更新
  onMounted, // Mounted
  onUnmounted, // Unmounted
  onUpdated, // Updated
  ref,
} from "vue";

export default {
  setup() {
    // 组合式 API
    console.log("本钩子函数，用于 替代 create 钩子函数");

    const count = ref(111);
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });

    return {
      count,
    };
  },
};
</script>

<!-- <script>
export default {
  mounted() {
    console.log("mounted");
  },

  // 注：vue3 中 写在的钩子函数 ，改为了 `unmount`
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script> -->
