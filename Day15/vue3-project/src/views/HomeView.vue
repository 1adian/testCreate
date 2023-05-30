<template>
  <div>
    <h2>获取鼠标位置</h2>
    <p>x:{{ mouse.x }}---y:{{ mouse.y }}</p>
  </div>
</template>

<script setup>
import { useMouse } from "@/utils/hooks";

const mouse = useMouse();
</script>
