<template>
  <div class="hello" style="border: 1px solid red">
    <p>模拟 爸爸</p>
    <button @click="handleClick">点击爸爸</button>
    <GrandSon />
  </div>
</template>

<script>
import GrandSon from "./GrandSon.vue";
export default {
  name: "HelloWorld",
  components: {
    GrandSon,
  },
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
      console.log("点击爸爸");
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
