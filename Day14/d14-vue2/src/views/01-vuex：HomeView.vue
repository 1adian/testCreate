<template>
  <div class="home">
    <button @click="updateNum(3)">add3</button>
    <button @click="delayNum(10)">delayAdd10</button>

    <div>
      <h2>example 的 mutation 和 action</h2>
      <button @click="increment(3)">add3</button>
      <button @click="delayIncrement(10)">delayAdd10</button>
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
