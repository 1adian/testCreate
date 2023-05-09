// 将 对象以 默认的形式导出
// 注：该对象，本质就是 `组件`
// 组件的声明/定义：
export default {
  template: `
    <div style="border: 1px solid blue;">
      <h1 @click="handleClick">doubleCount - {{doubleCount}}</h1>
      <p>我是一段 文本内容。。。</p>
      <button @click="count++">点我将 count + 1</button>
    </div>
  `,
  data() {
    return {
      // 注：data 函数必须返回 对象
      count: 1,
    };
  },

  methods: {
    handleClick() {
      alert("Yo ~ 你点击了 h1 标签");
    },
  },

  computed: {
    doubleCount() {
      return this.count * 2;
    }
  }
}