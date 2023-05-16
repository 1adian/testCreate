<template>
  <div class="hello">
    <input type="text" v-model="val" />
    <h1>子组件中：{{ data }}</h1>
  </div>
</template>

<script>
export default {
  name: "SonComp",
  props: {
    data: {
      type: String,
    },
  },
  data() {
    return {
      val: "",
    };
  },

  created() {
    // 父组件 传递的数据 - data，被赋值给了 this.val;
    this.val = this.data;
  },

  watch: {
    val() {
      // 只要 val 的数据发生变量则会 触发本回调函数
      console.log(this.val);

      // 发射数据
      // this.$emit('事件类型', '回调函数')
      // 只要 子组件中 val 发生变化，则 实时将 val 的数据，以 事件类型 `update:data` 传递数去
      this.$emit("update:data", this.val);
    },
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
