<template>
  <div class="hello">
    <h1>Hello World</h1>
    <h3>我是你好，世界~~~</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      message: "我是子组件 - helloWorld 的数据",
    };
  },
  methods: {},
};
</script>

<!-- 
  Add "scoped" attribute to limit CSS to this component only
  增加 "scoped" 属性 则 限制 css 只在 本组件内生效。


  原因：css 属性，默认 全局生效。
    在 组件的 <style scoped> 增加 scoped 属性，则确保 css 只作用于 本组件内部。
-->
<style>
h3 {
  margin: 40px 0 0;
  color: red;
}
</style>
