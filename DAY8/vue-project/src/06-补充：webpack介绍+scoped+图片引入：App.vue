<template>
  <div id="app">
    <h3>我是 app 组件... 的 h3 标签</h3>

    <!-- 
      下面的写法，则 webpack 会特殊进行打包：
        根据路径，将图片 直接打包进代码中。


      补充：webpack 打包图片的两种规则：
        规则1：若图片很小（具体多少算小，可以设置），
          图片会被直接打包成 `base64`（即以 字符串的形式 表示图片） 格式。

        规则2：若图片较大，不会被打包成 base64，而是以正常图片存储在代码文件夹中。
     -->
    <img :src="imgUrl" alt="" />
    <img :src="kPhomeImgUrl" alt="" />

    <!-- <img :src="imgUrl" alt="" />
      注：imgUrl 写图片的 路径，不生效！！！ 

      imgUrl返回数据（"./assets/logo.png"），其代码是在 页面刷新的时候执行

      图片不显示的原因：
        webpack 打包，并未 将图片，打包进 要被浏览器显示的代码中。
    -->

    <!-- 
      总结：图片的引入形式：
        1. 在标签中直接写字符串路径： <img src="./assets/b.jpg" alt="" />
          注：不能是 JS表达式

        2. 使用 require+JS 表达式：
          <img :src="kPhomeImgUrl" alt="" />
          kPhomeImgUrl: require("@/assets/c.jpg"),

     -->
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      // 注：require 是 node 的语法，因为 使用了 webpack
      // 所以，前端代码中，也可以使用 `require`
      imgUrl: require("./assets/logo.png"), // 使用 require 导入图片

      kPhomeImgUrl: require("@/assets/c.jpg"),
    };
  },
  methods: {},
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
