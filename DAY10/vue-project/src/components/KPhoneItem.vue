<template>
  <div class="hello" :class="activedClass" @click="handleClick">
    <p>{{ data.title }}</p>
    <div class="main">
      <img width="120" :src="imgData" alt="" />
      <div class="section">
        <div class="content">
          {{ data.content }}
        </div>
        <a :href="data.url">{{ data.url }}</a>
      </div>
    </div>
  </div>
</template>

<script>
/* 
  {
    title: "IT培训班_千锋教育IT培训机构良心品牌",
    img: "a.jpg",
    content:
      "【千锋教育IT培训-国内IT培训机构良心品牌】专注IT教育培训,IT培训班课程主要包括Java培训、Web前端培训、Python培训、大数据培训、全媒体培训、UI培训、软件测试培训、网络安全培训等,千锋教育IT...",
    url: "http://www.mobiletrain.org/",
  },
*/

export default {
  name: "SonComp",
  props: {
    // data 是 自己组件的数据
    data: {
      type: Object,
    },

    // 即 右侧 显示的数据
    activedData: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    imgData() {
      return require(`@/assets/${this.data.img}`);
    },

    // 注：难点！！！ 需要 通过 `this.data.title === this.activedData.title`
    // 返回值 为 true，才表示 选中该 KPhoneItem
    activedClass() {
      return {
        actived: this.data.title === this.activedData.title,
      };
    },
  },
  methods: {
    handleClick() {
      console.log("我点击了 一个 item", this.data);
      this.$emit("sendItemData", this.data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/variable.scss";

.hello {
  margin: 20px 10px;
  border: 2px solid transparent;

  .main {
    display: flex;
  }
}
h1 {
  background-color: $--success;
}

div.actived {
  border: 2px solid red;
}
</style>
