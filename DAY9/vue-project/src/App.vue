<template>
  <div id="app">
    <div class="left">
      <KPhoneItem
        @sendItemData="getItemData"
        :data="item"
        v-for="item in list"
        :key="item.title"
        :activedData="activedData"
      />
    </div>
    <div class="right">
      <h1>{{ activedData.title }}</h1>
      <h2>{{ activedData.content }}</h2>
    </div>
  </div>
</template>

<script>
// import Son from "./components/Son.vue";
import KPhoneItem from "./components/KPhoneItem.vue";
const list = [
  {
    title: "IT培训班_千锋教育IT培训机构良心品牌",
    img: "a.jpg",
    content:
      "【千锋教育IT培训-国内IT培训机构良心品牌】专注IT教育培训,IT培训班课程主要包括Java培训、Web前端培训、Python培训、大数据培训、全媒体培训、UI培训、软件测试培训、网络安全培训等,千锋教育IT...",
    url: "http://www.mobiletrain.org/",
  },
  {
    title: "青岛IT培训_青岛Java培训_web前端培训_千锋教育",
    img: "b.jpg",
    content:
      "青岛千锋教育IT培训,专注青岛web前端培训,Java培训,前端培训让学员在实践中掌握开发技术,青岛千锋教育IT培训机构采用全程面授高品质、高体验培养模式,提供一流IT培训服务,想参加青岛IT培训学习提...",
    url: "http://www.mobiletrain.org/",
  },
  {
    title: "千锋 - 百度百科",
    img: "c.jpg",
    content:
      "简介：千锋一般指千锋教育。 北京千锋互联科技有限公司（下面简称“千锋教育”），成立于2011年1月，立足于职业教育培训领域，公司现有教育培训、高校服务、企业服务三大业务板块。教育培训业务分为大学生技能培训和职后技能培训；高校服务业务主要提供校企合...",
    url: "https://baike.baidu.com/item/千锋教育",
  },
];

export default {
  name: "App",
  components: {
    KPhoneItem,
  },
  data() {
    return {
      // msg: "~~~~",
      list,
      activedData: list[0],
    };
  },
  methods: {
    getItemData(data) {
      // 只要 本回调函数被触发，则 data 是对应组件的 数据
      this.activedData = data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/variable.scss"; // 引入/导入 颜色变量

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  .left,
  .right {
    flex: 1;
  }
  .left {
    background: #e39;
  }
  .right {
    background-color: #39e;
  }
}
</style>
