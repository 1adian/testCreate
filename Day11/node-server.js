// 简单的 node 服务器，用法给前端发送 json 数据

const http = require('http');


// 模拟 json 数据
const mockData = [
  {name: '小张'},
  {name: '小王'},
  {name: '小孙'}
];

// 
const server = http.createServer((req, res) => {
  // req 即前端访问 本服务器，则 触发回调函数，req 即前端发来的 request

  
  // 强调2：前段后 字符串的格式，必须是 utf-8
  // 指定 后端返回的数据是 json 字符串格式
  res.setHeader('Content-Type', 'application/json;charset=utf-8'); // 设置 响应 头
  
  /* cors 后端解决跨域的写法：
    // 即 允许 任何 前端服务器访问本 服务器的 接口
    res.setHeader('Access-Control-Allow-Origin', '*');
  */
  
  // 强调1：前后端数据交互，一定交互 字符串(json)
  res.end(JSON.stringify(mockData))
});


// node 服务器 监听 3000 端口
server.listen(3000);