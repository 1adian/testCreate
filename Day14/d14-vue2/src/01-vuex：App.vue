<template>
  <div id="app">
    <!-- App 中获取 store 的 state 和 getter -->
    <h1>State - {{ num }}</h1>
    <h1>Getter - {{ doubleNum }}</h1>

    <h2>example - State {{ count }}</h2>
    <h2>example - Getter {{ squareCount }}</h2>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    // 即 导入 example 模块下的 state 和 getter
    ...mapState("example", ["count"]),
    ...mapGetters("example", ["squareCount"]),

    ...mapState(["num"]),
    ...mapGetters(["doubleNum"]),
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
