<template>
  <div id="app">
    <h1>你好，我第一次使用 scss</h1>
    <p>我是一段 文本...</p>
    <footer>
      我是页脚...
      <span>我是 页脚中的 一个 span 标签</span>
    </footer>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
@import "./style/variable.scss"; // 引入/导入 颜色变量

// 默认 css 的写法，随着页面标签的变多，css 会越写越混乱...
// 即 css 的可读性 就越来越差
// scss 引入，css 可以嵌套的写法：
// 需求：将下述 css 的写法，改写成 scss 嵌套的写法：
#app {
  background-color: wheat;
  height: 400px;

  // 即 h1 是 #app 的子集
  h1 {
    background-color: $--success; // 使用 scss 声明的颜色变量
    color: $--error;
  }

  p {
    color: red;
  }

  // 子集选择器：
  // `&` 即表示 `#app`
  // & > footer 即等同于 `#app > footer`
  & > footer {
    background-color: black;

    span {
      color: white;
    }
  }
}

/* 
  #app {
    background-color: wheat;
  }

  h1 {
    background-color: $--success; // 使用 scss 声明的颜色变量
    color: $--error;
  }

  p {
    color: red;
  }

  #app > footer {
    background-color: black;
  }

*/
</style>
