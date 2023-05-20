<template>
  <div class="hello">
    <h1 ref="h1">{{ msg }}</h1>

    <button @click="getFirstApi">接口使用测试</button>
  </div>
</template>

<script>
// vue 中  导入的 js 文件，可以省略 后缀 `.js`
import { getTestFirst } from "@/api/modules/test";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    async getFirstApi() {
      // getTestFirst() 返回值的类型是：Promise 实例对象
      //
      /* Promise 的链式写法：
        getTestFirst()
          .then((res) => {
            console.log("res", res);
          })
          .catch((err) => {
            console.log("如果 接口报错 则走 catch", err);
          })
          .finally(() => {
            console.log(
              "不管走 then 还是走 catch ，最终都会执行 finally 的回调函数"
            );
          });
      */

      // async - await (同步写法) 使用 promise 进行异步操作
      const res = await getTestFirst(); // 强调：await 后面必须接 Promise 实例对象
      console.log("await - res", res);
    },
  },
  //

  // 组件实例创建，而 DOM元素未被渲染
  beforeCreate() {},
  created() {
    this.$nextTick(() => {
      console.log(this.$refs.h1);
    });
  },

  // 组件被渲染（DOM元素被渲染）
  beforeMount() {},
  mounted() {},

  // 数据更新，页面变化
  beforeUpdate() {},
  updated() {},

  // 组件被销毁（v-if）
  beforeDestroy() {},
  destroyed() {},

  // 在 若组件使用了 <keep-alive> “保活”，那么 组件 显示/隐藏 会触发的钩子函数
  activated() {},
  deactivated() {},
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
