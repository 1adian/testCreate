import { computed } from "vue";

// 将 msg / info 提成参数
export const reversedStr = (str) => {
  return computed(() => {
    return str.value.split("").reverse().join("");
  });
};
