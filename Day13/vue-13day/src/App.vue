<template>
  <div id="app">
    <h1>app组件 - {{ $store.state.count }}</h1>
    <button @click="add3Count">add3Count</button>
    <button @click="add10Count">add10Count</button>
    <button @click="delayAdd20">delayAdd20</button>
    <button @click="delayAdd100">delayAdd100</button>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    // action - 辅助函数写法
    // 即表示 本组件中，多了一个 this.delayAdd 的方法
    ...mapActions(["delayAdd"]),

    delayAdd100() {
      this.delayAdd(100);
    },

    // mutation - 辅助函数写法
    // 即表示 本组件中，多了一个 this.updateCount 的方法
    ...mapMutations(["updateCount"]),
    add3Count() {
      // 触发mutation的第一种方式 this.$store.commit('mutation名字')
      // 触发 mutation - updateCount 方法
      this.$store.commit("updateCount", 3);
    },
    add10Count() {
      // 本质是执行了 this.$store.commit("updateCount", 10);
      this.updateCount(10);
    },

    delayAdd20() {
      // 只要执行本函数，则会触发 action -> delayAdd
      this.$store.dispatch("delayAdd", 20);
    },
  },
  mounted() {
    console.log(this.$store, this.$store.state.count);
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
