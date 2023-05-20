<template>
  <div class="hello">
    <h1 ref="h1">{{ msg }}</h1>
  </div>
</template>

<script>
// vue 中  导入的 js 文件，可以省略 后缀 `.js
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    getFirstApi() {},
  },
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
