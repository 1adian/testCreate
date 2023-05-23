// 对应接口文档「四、 用户相关」 的接口

import { http } from "@/api/http.js";

// login 接口
export const login = (username, password) =>
  http.post(
    `/users/login`,
    {
      username,
      password,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

// 根据 id 和 token 进行用户详情的获取
export const getUserDetails = () =>
  http.get(`/users/info`, {
    params: {
      id: localStorage.getItem("id"),
    },
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
