<template>
  <div id="app">
    <button @click="handleGet1">请求 1 接口</button>
    <button @click="handleGet2">请求 2 接口</button>
    <button @click="handleGet3">请求 3 接口</button>
    <button @click="handleGet4">请求 4 接口</button>
  </div>
</template>

<script>
// import axios from "axios";
// import { http } from "@/api/http.js";

import {
  getTestFirst,
  getTestSecond,
  getTestThird,
  getTestFourth,
} from "@/api/modules/test.js";
/* 使用 axios 的封装，将 baseURL 进行统一封装 - DRY
  思考：
    下述 axios 的用法，哪些 地方 出现了 重复 - DRY？？？
      ->  'http://localhost:8888'
        即，只要 是 该后台服务器，其 基本地址都是 'http://localhost:8888'，其重复了！！！
*/

/* 知识点2：
  实际的开发过程中，同一个接口，可能经常被复用
    举例： `/test/first` 可能会在 N 个组件中被使用..
      所以，若每个组件中，均 是下述写法：又会造成 DRY的问题。
        所以，实际的开发，通常将 接口声明，封装函数，统一将函数，放置于 /api/modules 文件夹中


      // 接口声明
      http.get("/test/first").then((res) => {
        // 每次使用 ajax 返回的数据，都要 res.data
        // 即又重复了 ...
        // 即 在 axios 可以通过「拦截器」对 response 的数据，进行统一处理
        console.log("111-http", res);
      });
*/
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },

  methods: {
    handleGet1() {
      // 接口声明
      getTestFirst().then((res) => {
        console.log("getTestFirst", res);
      });

      /* http.get("/test/first").then((res) => {
        // 每次使用 ajax 返回的数据，都要 res.data
        // 即又重复了 ...
        // 即 在 axios 可以通过「拦截器」对 response 的数据，进行统一处理
        console.log("111-http", res);
      }); */
    },
    handleGet2() {
      getTestSecond().then((res) => {
        console.log("getTestSecond", res);
      });
      /* http.get("/test/second").then((res) => {
        console.log("222-http", res);
      }); */
    },
    handleGet3() {
      getTestThird("张三三", 333).then((res) => {
        console.log("getTestThird", res);
      });
      /* http
        .get("/test/third", {
          params: {
            name: "张三",
            age: 33,
          },
        })
        .then((res) => {
          console.log("333-http", res);
        }); */
    },
    handleGet4() {
      getTestFourth("李思思", 444).then((res) => {
        console.log("getTestFourth", res);
      });
      /* http
        .post(
          "/test/fourth",
          {
            name: "李四",
            age: 44,
          },
          {
            // 直接可以对默认封装的  headers 进行覆盖
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          console.log("444-http", res);
        }); */
    },
  },
};
</script>

<style lang="scss" scoped></style>
