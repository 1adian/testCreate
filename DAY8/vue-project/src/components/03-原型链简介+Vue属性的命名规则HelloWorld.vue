<template>
  <div class="hello">
    <button @click="getProp">HelloWorld中获取Vue原型对象上的属性</button>
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
    getProp() {
      console.log("我是Hello组件，我要获取 Vue.prototype.yyy 的数据", this.yyy);
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
