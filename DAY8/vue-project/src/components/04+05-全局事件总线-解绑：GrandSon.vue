<template>
  <div class="hello" style="border: 1px solid blue">
    <p>模拟 孙子</p>
    <button @click="handleClick">点击孙子</button>
  </div>
</template>

<script>
export default {
  name: "GrandSon",

  data() {
    return {
      // message: "我是子组件 - helloWorld 的数据",
    };
  },
  methods: {
    handleClick() {
      console.log(
        "点击孙子，则执行 this.$eventBus.$emit('onlyId') 则触发 对应的回调函数"
      );

      // 全局事件总线
      this.$eventBus.$emit("onlyId", "孙子传递给爷爷的数据...");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
