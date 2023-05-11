<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 若 age 不传参，则报错：missing required prop: "age" -->
    <Son :name="msg" :age="33" />

    <!-- 组件之间的数据传递：只能由 父组件传递给子组件，反之不行！！！
      即「组件之间单向的数据流」，即数据只能是 父传子，而不能 子传父。


    原理：
      假设：有该组件
      <AComp :name="msg" />

      试想：若 子组件能改变 父组件的数据，即 子传父，
        即代表 子组件会改变 `msg` 的数据...

        现在 父组件中，使用了 Son  和 AComp  两个组件
          若子组件能改变父组件的数据：则 若 父组件中  msg 的数据发生了变化，
            程序员完全不知道， msg 的数据是被哪个子组件所改变的...
              即，代码的可读性 严重降低。
     -->
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
