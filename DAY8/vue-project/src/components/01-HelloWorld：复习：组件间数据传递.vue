<template>
  <div class="hello" @click="handleClick">
    <h1>子组件：{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "我是子组件 - helloWorld 的数据",
    };
  },
  methods: {
    handleClick() {
      console.log("我在 HelloWorld 组件中，点击的 根节点的标签");

      // 自定义事件：
      // 在子组件中，`触发` 父组件 绑定的 自定义事件 -
      // 'xxx' - 即 自定义的事件类型
      // this.message - 即 触发该自定义事件的回调函数，所获取的数据

      // 全局事件总线
      // this.$eventBus.$emit("onlyId", "孙子传递给爷爷的数据...");

      // 子传父：和 全局事件总线 的 $emit 用法一致
      // （全局事件总线 的本质和 子传父 的本质，是一回事儿）
      // --->  观察者模式

      // $on('click', handleClick)  - 等价于 -  <组件 @click="handleClick" />
      this.$emit("xxx", this.message);
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
