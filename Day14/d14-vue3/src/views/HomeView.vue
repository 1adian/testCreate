<template>
  <div class="home">
    <div>
      <el-switch
        v-model="value1"
        active-text="按月付费"
        inactive-text="按年付费"
      >
      </el-switch>
    </div>
    <el-button @click="updateNum(3)" type="primary">add3</el-button>
    <button @click="delayNum(10)">delayAdd10</button>

    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      value1: true,
    };
  },
  components: {
    // HelloWorld,
  },
  methods: {
    // 即 本组件实例，有了 updateNum 的方法
    ...mapMutations(["updateNum"]),
    ...mapActions(["delayNum"]),
    fn() {
      // 下述 `this.xxx` 是 典型的「面向对象」的编程范式
      this.value1;
    },
  },
};
</script>
