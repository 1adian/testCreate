<template>
  <div class="hello">
    <h1 @click="handleClick">你好， vue</h1>
  </div>
</template>

<script>
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
