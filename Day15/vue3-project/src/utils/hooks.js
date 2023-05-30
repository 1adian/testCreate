import { reactive, onMounted, onBeforeUnmount } from "vue";
// 函数好处： 具有 可复用性
export function useMouse() {
  // 1、定义一个响应式数据对象，包含x和y属性
  const mouse = reactive({
    x: 0,
    y: 0,
  });

  // 3、move函数为事件对应方法
  const move = (e) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  };

  // 2、监听document的鼠标移动事件  ==>事件绑定，
  onMounted(() => {
    window.addEventListener("mousemove", move);
  });

  // 4、解绑事件
  onBeforeUnmount(() => {
    // 组件被销毁时， 要清楚 绑定到 window 上的 move 函数
    // 以避免 内存泄漏
    window.removeEventListener("mousemove", move);
  });

  return mouse;
}
