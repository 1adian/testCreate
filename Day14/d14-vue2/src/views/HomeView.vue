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

    <div>
      <h2>example 的 mutation 和 action</h2>
      <el-button @click="increment(3)" type="primary" icon="el-icon-edit"
        >add3</el-button
      >
      <el-button size="mini" type="success" @click="delayIncrement(10)" round
        >delayAdd10</el-button
      >
    </div>
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

    // 即导入 example 模块下的 action 和 mutation
    ...mapActions("example", ["delayIncrement"]),
    ...mapMutations("example", ["increment"]),
  },
};
</script>
