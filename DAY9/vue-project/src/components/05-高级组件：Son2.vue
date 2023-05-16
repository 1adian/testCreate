<template>
  <div class="hello">
    <h1>我是 SON - 222 组件</h1>
  </div>
</template>

<script>
export default {
  name: "SonComp2",
  props: {
    data: {
      type: String,
    },
  },
  data() {
    return {
      val: "我是子组件中的数据...",
    };
  },

  created() {
    console.log("我是 SON2 - created");
  },

  destroyed() {
    console.log("我是 SON2 - destroyed");
  },
  activated() {
    console.log("我是 SON2 - 我被激活...");
  },
  deactivated() {
    console.log("我是 SON2 - 我被隐藏...");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/variable.scss";
h1 {
  background-color: $--warning;
}
.hello {
  width: 100vw;
  height: 100vh;
  display: flex;

  .left {
    flex: 1;
    background: $--success;
  }
  .middle {
    flex: 1;
    background: $--warning;
  }
  .right {
    flex: 1;
    background: $--error;
  }
}
</style>
