<template>
  <div class="banner-container">
    <el-table
      :cell-style="{ textAlign: 'center' }"
      :header-cell-style="headerRowStyle"
      :data="computedTableData"
      style="width: 100%"
    >
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="img" label="图片">
        <template #default="scope">
          <el-image :src="scope.row.img"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="link" label="链接"></el-table-column>
      <el-table-column prop="alt" label="提示"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row.bannerid)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total,prev, pager, next"
      :total="tableData.length"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
    />
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      tableData: [],
      headerRowStyle: {
        color: "rgba(0,0,0,0.85)",
        fontWeight: "700",
        fontSize: "14px",
        textAlign: "center",
        background: "#f8f8f8",
        height: "60px",
        borderRight: "1px solid #f0f0f0",
        transition: "background .3s ease",
      },
      currentPage: 1,
      pageSize: 5,
    };
  },
  computed: {
    computedTableData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = this.currentPage * this.pageSize;
      return this.tableData.slice(startIndex, endIndex);
    },
  },
  methods: {
    updateTableData() {
      api.banner.getBannerList().then((res) => {
        console.log("res - getBannerList", res);
        this.tableData = res.data;
      });
    },
    handleDelete(bannerid) {
      api.banner.deleteBanner(bannerid).then((res) => {
        if (res.code == "200") {
          this.updateTableData();
        }
      });
    },
  },
  created() {
    this.updateTableData();
  },
};
</script>

<style lang="scss" scoped>
.el-pagination {
  justify-content: flex-end;
  margin-top: 32px;
}
.banner-container {
  height: 100%;
  padding: 24px;
  background: #fff;
}
</style>

<style scoped lang="scss"></style>
