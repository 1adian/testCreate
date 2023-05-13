<template>
  <div class="hello">
    <div>改变 h1 中的数据： <input type="text" v-model="message" /></div>

    <!-- 父组件传来的数据，不在 子组件的页面中显示...
      注：若 组件中的数据发生了变化，但数据 不在页面中显示
      则不会触发 updated 和 beforeUpdate 的钩子函数
    -->
    <h1 ref="h1">{{ val }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  props: {
    val: {
      type: String,
    },
  },
  data() {
    return {
      message: "我是子组件 - helloWorld 的数据",
    };
  },
  methods: {},

  mounted() {
    // 本钩子函数 执行的实际，是 真实的DOM元素被渲染到页面中
    // 即在本钩子函数中，介意获取到 真实的 DOM元素
    console.log("mounted", this.$refs.h1);
  },
  beforeMount() {
    // 本钩子函数，在 将 template 解析为 虚拟DOM，
    // 但 虚拟DOM还未 真正变成 真实DOM 之前执行的钩子函数
    // 强调：beforeMount 中，无法获取到 真实的DOM元素
    // 因为 此时 DOM元素还未被创建
    console.log("beforeMount", this.$refs.h1);
  },
  beforeCreate() {
    // 钩子函数，会在 特定的 “生命时间点” 执行的函数
    // this 被创建了，但 this 还无法获得 data / methods 中的属性和方法
    // beforeCreate 中，无法获取到 真实的DOM元素
    // 因为 此时 DOM元素还未被创建
    console.log("beforeCreate", this.message, this.$refs.h1);
  },
  created() {
    // 本钩子函数，在 给 data 的数据 做了 数据劫持 之后执行
    // this 可以 访问 data / methods 中的属性和方法
    // created 中，无法获取到 真实的DOM元素
    // 因为 此时 DOM元素还未被创建
    console.log("created", this.message, this.$refs.h1);
  },
  beforeUpdate() {
    // 本钩子函数，在 data 数据变化，页面更新之前 执行本钩子函数
    // 强调：必须 页面更新 才会触发本钩子函数
    console.log("beforeUpdate");
  },
  updated() {
    // 本钩子函数，在 data 数据变化，页面更新之后，执行本钩子函数
    // 强调：必须 页面更新 才会触发本钩子函数
    console.log("updated");
  },

  beforeDestroy() {
    // 本钩子函数的执行时机：组件被销毁之前
    console.log("beforeDestroy");
  },
  destroyed() {
    // 本钩子函数的执行时机：组件被销毁之后
    console.log("destroyed");
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
  color: red;
}
</style>
