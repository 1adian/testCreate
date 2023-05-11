<template>
  <div id="app">
    <!-- App - 父组件 -->

    <!-- 
      注：click 点击事件，默认都是 绑定到 DOM元素上面
        那么，事件默认是不能 绑定到 组件上的（在 vue2 中）。

        注：`xxxType` 是自定义事件名
     -->
    <Son @click="handleClick" @xxxType="handleXXXType" :name="msg" :age="33" />
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  name: "App",
  components: {
    Son,
  },
  data() {
    return {
      msg: "success",
    };
  },
  methods: {
    handleClick(data) {
      // 在父组件中，获得了 子组件传递来的数据
      // 即 子组件给 父组件 传递数据！！！
      console.log("父组件中 。。。 点击了 Son 组件", data);
    },

    // 子组件 如何触发本回调函数？？
    // 子组件中 执行该函数，即触发本回调函数 -> this.$emit('xxxType'，'传递给a的实参', '传递给b的实参', '传递给c的实参')
    handleXXXType(a, b, c) {
      // 即 a b c 三个变量，接收的 都是 子组件 传递过来的数据...
      console.log("父组件中-绑定到 xxxType 上的回调函数", a, b, c);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
