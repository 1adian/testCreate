// 对应的 接口文档「二、开局测试」相关接口
// 即本文件中，都是 `/test/xxx` 的接口声明
import { http } from "@/api/http.js";

// 注：本函数声明，并未执行 http.get("/test/first") 这个代码
// 只有执行函数的时候，才会执行代码
export const getTestFirst = () => http.get("/test/first");

export const getTestSecond = () => http.get("/test/second");

export const getTestThird = (name, age) =>
  http.get("/test/third", {
    params: {
      name,
      age,
    },
  });

export const getTestFourth = (name, age) =>
  http.post(
    "/test/fourth",
    {
      name,
      age,
    },
    {
      // 直接可以对默认封装的  headers 进行覆盖
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
