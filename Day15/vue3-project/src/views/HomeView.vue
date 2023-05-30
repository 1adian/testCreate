<template>
  <div>
    <h2>VueUse</h2>
    <p>x-{{ x }}, y-{{ y }}</p>
    <h1>你电脑实时的刷新率是:{{ fps }}</h1>

    <div class="box" ref="el" :style="style" style="position: fixed">拖我</div>
  </div>
</template>

<script setup>
import { useMouse, useDraggable, useFps } from "@vueuse/core";
import { ref } from "vue";

// `{x, y}` -> ES6 的解构赋值
const { x, y } = useMouse();

// 强调：  useXXX 函数返回的数据，都具有 数据响应性
const fps = useFps();

// 拖拽 div
const el = ref(null);
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
