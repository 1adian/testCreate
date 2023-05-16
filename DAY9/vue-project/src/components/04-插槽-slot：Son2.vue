<template>
  <div class="hello">
    <h1>我是另外一个组件</h1>
    <button @click="handleClick">点我</button>
  </div>
</template>

<script>
export default {
  name: "SonComp2",
  data() {
    return {};
  },
  methods: {
    handleClick() {
      alert("我是 Son2 组件,...");
    },
  },

  created() {},

  watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
