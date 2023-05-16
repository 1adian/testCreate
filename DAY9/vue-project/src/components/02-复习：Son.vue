<template>
  <div class="hello">
    <!-- 
      新增需求： val 默认 获得 父组件 data 中传递来的数据
    -->
    <input type="text" v-model="val" />
    <h1>子组件中：{{ data }}</h1>
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
      val: "",
      timerId: null, // 设null是为了 “占位”，即初始化的时候，不赋值
    };
  },
  // 声明周期：
  // 即 实例生成，且 data 和 methods 中都有数据和方法
  created() {
    // 父组件 传递的数据 - data，被赋值给了 this.val;
    this.val = this.data;

    // 重点1（常用的钩子函数）：created 被常用于 组件发出 ajax 请求

    // 需求：页面刷新（组件渲染，发起一个 定时器，每一秒钟 控制台显示 当前时间）
    this.timerId = setInterval(() => {
      console.log(new Date());
    }, 1000);

    // 注：若 Son 组件被销毁，定时器并不会停止执行；
    // 即发生了 内存泄漏...

    // 解决方案：在组件内销毁的时候，要 清除清时期
  },

  beforeCreate() {
    // 本钩子函数，执行的时机是： 实例创建完毕，但 data 和 methods 还未被绑定
  },

  beforeMount() {
    // DOM 渲染之前
  },

  mounted() {
    // DOM渲染完毕
    // 重点2（常用的钩子函数）：用于 获取 DOM元素
  },

  beforeUpdate() {
    // data 的数据更新，且页面更新之前
  },
  updated() {
    // data 的数据更新，且页面也被更新
  },

  // destroy 声明周期的作用：组件被销毁时，清除定时器 或 其他容易引起内存泄漏相关的代码
  beforeDestroy() {
    // 组件被销毁之前
    // 组件被销毁时， 清除 定时器
    clearInterval(this.timerId);
  },

  destroyed() {
    // 组件被销毁之后
  },
  watch: {
    val() {
      // 只要 val 的数据发生变量则会 触发本回调函数
      console.log(this.val);

      // 发射数据
      // this.$emit('事件类型', '回调函数')
      // 只要 子组件中 val 发生变化，则 实时将 val 的数据，以 事件类型 `update:data` 传递数去
      this.$emit("update:data", this.val);
    },
  },
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
