// 注：本文件，与 `.env.prod` 等文件类似，
// 即若 文件发生了 变动，必须要重启，代码才能生效
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  // 即 开发环境的  代理服务器
  devServer: {
    proxy: {
      // 配置解读：
      // 只要发送 `http://localhost:8080/api` （携带 /api）
      // 则将该请求，`重新定` 向至 `http://localhost:3000` (即 后端服务器 开发环境的资质)
      "/api": {
        // 即 只要携带 `/api` 的请求，直接被代理服务器 重定向至 `http://localhost:3000` 的服务器
        target: "http://localhost:3000",

        // 解读：`/api` 是“单独增加的 path”，实际 后端 并没有 `/api`
        // 即将 http://localhost:3000/api，变成  `http://localhost:3000`

        // 即将 `/api` 改写成 ``
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
