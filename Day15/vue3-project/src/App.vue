<template>
  <div id="app">
    <p>
      <button @click="sendMsg">发送数据</button>
    </p>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";

export default {
  name: "App",
  setup() {
    const msg = ref("App 里的数据");

    // 通过 getCurrentInstance 才能获取 全局实例
    const { proxy } = getCurrentInstance();

    const sendMsg = () => {
      // eventBus 发射数据
      proxy.$mitt.emit("send", msg);
    };

    return {
      sendMsg,
    };
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
