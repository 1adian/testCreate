<template>
  <div class="hello">
    <h1 @click="handleClick">你好， vue</h1>
  </div>
</template>

<script>
import { add } from "@/utils/add.js"; // @ 等同于 `src`
console.log("add", add(1, 9));
// 此处能执行 JS 代码
export default {
  name: "HelloWorld",
  methods: {
    handleClick() {
      console.log("11111");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
  font-size: 50px;
}
</style>
