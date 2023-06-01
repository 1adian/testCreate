<template>
  <div class="home">
    <h1>{{ userInfo }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState(["userInfo"]),
  },
  components: {},
};
</script>
