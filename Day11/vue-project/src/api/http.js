import axios from "axios";

// http 的变量，相当于 axios 的功能；
// 只是
// 1） 绑定了 基本url - 'http://localhost:8888'  (即后续 使用 http 变量发出的 ajax 请求，统统发送到了 8888 的服务器上)
// 2）只要是 http 发出的 ajax 请求，默认都携带 请求头： "Content-type": "application/json"
export const http = axios.create({
  baseURL: "http://localhost:8888", // 即对 基础的 url 进行封装，后续 使用 http 替代 axios
  // 那么 http对象，默认携带了 "http://localhost:8888" 的基础地址

  // baseURL: process.env.VUE_APP_URL,

  // 默认，前后端交互 都是 json ，所以将 "Content-type": "application/json" 进行封装
  headers: { "Content-type": "application/json" },
});

// 添加请求拦截器
// req拦截器主要的用处，实现 token 身份验证
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // config 即可获取到 将要发给服务器的 req
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么

    // 即可以认为是 对 每个实际的接口，进行 DRY
    return response.data; // 直接获得 data 数据
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
