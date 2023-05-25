<template>
  <div class="about">
    <h1>store 的计算属性 - getters - {{ $store.getters.doubleCount }}</h1>
    <h2>辅助函数，获取 getters: {{ doubleCount }}</h2>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "AoubtView",
  components: {},
  computed: {
    // 即本组件中有了 `this.doubleCount` 的数据
    ...mapGetters(["doubleCount"]),
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped></style>
