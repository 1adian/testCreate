<template>
  <div class="hello">
    <!-- <h1>子组件中：{{ data }}</h1> -->
    <!-- 插槽，作用：
      本 <slot /> 可以认为是一个 “形参”，
      父组件执行 本组件，可以传递进来 标签代码，甚至是 其他的组件 
    -->
    <!-- <slot>默认内容，不传结构时，默认展示</slot> -->

    <div class="left">
      <!-- 我们希望把 左侧内容放这里 -->
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <!-- 我们希望把 中间内容放这里 -->
      <!-- 默认插槽 -->

      <slot></slot>
    </div>
    <div class="right">
      <!-- 我们希望把 右侧内容放这里 -->
      <!-- 通过 作用域 插槽，父组件，可以得到 val 的值... -->
      <slot name="right" :msg="val"></slot>
    </div>
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
      val: "我是子组件中的数据...",
    };
  },

  created() {},

  watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/variable.scss";
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
