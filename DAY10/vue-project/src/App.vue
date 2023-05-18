<template>
  <div id="app">
    <button @click="handleGet1">请求 1 接口</button>
    <button @click="handleGet2">请求 2 接口</button>
    <button @click="handleGet3">请求 3 接口</button>
    <button @click="handleGet4">请求 4 接口</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },

  methods: {
    handleGet1() {
      axios.get("http://localhost:8888/test/first").then((res) => {
        console.log("111", res);
      });
    },
    handleGet2() {
      axios.get("http://localhost:8888/test/second").then((res) => {
        console.log("222", res);
      });
    },
    handleGet3() {
      axios
        .get("http://localhost:8888/test/third", {
          params: {
            name: "张三",
            age: 33,
          },
        })
        .then((res) => {
          console.log("333", res);
        });
    },
    handleGet4() {
      axios
        .post(
          "http://localhost:8888/test/fourth",
          {
            name: "李四",
            age: 44,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          console.log("444", res);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
