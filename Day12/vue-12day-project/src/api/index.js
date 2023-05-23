// 即将 test.js 中所有的 export 的函数/数据，统统“装入” test 对象中
import * as test from "./modules/test";
// 案例： test.getTestFirst 即获取了 test.js 中的 getTestFirst函数

// 将 test 模块，以 默认的形式导出
export default {
  test,
};
