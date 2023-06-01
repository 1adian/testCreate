import axios from "axios";

// 信息弹窗
import { ElMessage } from "element-plus";

export const http = axios.create({
  baseURL: process.env.VUE_APP_URL, // 环境变量

  // 默认，前后端交互 都是 json ，所以将 "Content-type": "application/json" 进行封装
  headers: { "Content-type": "application/json" },
});

// 设置超时时间，即某个 ajax 请求 若超过 5S 还未 response 数据，则报错请求超时的错误
http.defaults.timeout = 5000; // 5000ms

// 设置跨域是 否需要 携带凭证
http.defaults.withCredentials = false;

// 设置 请求 拦截器，
http.interceptors.request.use(
  (config) => {
    // 进行token校验：接收服务器返回的token，存储到本地，每次发送请求，都需要带上token
    const token = localStorage.getItem("token");
    // token && (config.headers.token = token);

    // 如果 本地 localStorage 存储 token
    // 即 请求头中 会携带 token
    // token 的作用：身份识别
    if (token) {
      // 在请求头中 携带 token 信息
      config.headers.token = token;
    }

    // config需要返回
    return config;
  },
  (error) => {
    // 请求错误的操作，返回报错信息
    return Promise.reject(error);
  }
);

// 添加响应拦截器
/**
 * response 包含内容：
 * response: {
 *  data: 响应主体内容，一般都是后端返回的数据
 *  status： 服务器相应的状态码
 *  statusText: 响应状态码的描述，
 *  headers：服务器响应头
 *  config: 之前发送请求是发送给服务器的配置对象
 *  request: 原生的ajax对象
 * }
 */
http.interceptors.response.use((response) => {
  // console.log("axios-response--->", response);
  // 在 响应拦截器中 设置 token

  // 若 返回的接口，携带了 token 信息
  // 则将 token 信息 存储在 localStorage 中
  if (response.data?.data?.token) {
    // 强调：后端必须 data.data.token 的数据格式（即和后端的约定）
    localStorage.setItem("token", response.data.data.token);
  }

  // 小弹窗信息
  ElMessage({
    message: response?.data?.message,
    type: response.data.code === "200" ? "success" : "error",
  });

  // response.data 第一层 data 是 axios 默认携带的 data
  // 第二层，是后端 加入的 data - key
  return response.data;
});
