<template>
  <div>
    <el-table
      :data="computedTableData"
      style="width: 100%"
      :header-cell-style="headerCellStyle"
      :cell-style="{ textAlign: 'center' }"
    >
      <!-- 
        一个 column ，即 table 的一列
       -->
      <el-table-column type="index" width="150" label="序号" />
      <el-table-column prop="adminname" label="账号" />
      <el-table-column prop="role" label="权限">
        <template #default="scope">
          <el-tag :type="scope.row.role == 1 ? 'success' : 'danger'">{{
            scope.row.role == 1 ? "普通管理员" : "超级管理员"
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <!-- 
          插槽知识点：
          
          -> 作用域插槽：可以直接获得 对应行的数据
            -> #default="scope" 
         -->
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      v-model:page-size="pageSize"
      v-model:current-page="currentPage"
      background
      layout="total, prev, pager, next"
      :total="tableData.length"
    />
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "ManagerListView",
  components: {},
  data() {
    return {
      pageSize: 5, // 分页，一页显示的数据条数
      currentPage: 1, // 当前页

      tableData: [],
      // 设置table表头的样式
      headerCellStyle: {
        color: "rgba(0,0,0,0.85)",
        fontWeight: "700",
        fontSize: "14px",
        textAlign: "center",
        background: "#f8f8f8",
        height: "60px",
        borderRight: "1px solid #f0f0f0",
        transition: "background .3s ease",
      },
    };
  },

  // 计算属性：对已有数据，进行再加工
  computed: {
    computedTableData() {
      // 思考：如何通过 this.currentPage 的变化，得到 table 中要显示的数据
      // currentPage 值为1： [0, 5)
      // currentPage 值为2： [5, 10)
      // currentPage 值为3： [10, 15)

      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = this.currentPage * this.pageSize;

      // 截取数组的范围：[startIndex, endIndex)
      return this.tableData.slice(startIndex, endIndex);
    },
  },
  // vm组件实例创建完毕，则执行本钩子函数
  // 本钩子函数，适合 进行 ajax 请求（ this 已经可以调用 data 和 methods 的内容）
  created() {
    this.updateTable();
  },
  methods: {
    // 只要执行了本函数，则更新table
    updateTable() {
      api.user.getManagerList().then((res) => {
        this.tableData = res.data;
        console.log("getManagerList", res);
      });
    },
    handleEdit(i, row) {
      console.log("handleEdit", i, row);
    },
    handleDelete(i, row) {
      console.log("handleDelete", i, row);

      api.user.deleteAdmin(row.adminid).then((res) => {
        // 注：删除成功后，必须重新执行 `getManagerList` 才能更新 table
        console.log("删除", res);
        if (res.code == 200) {
          api.user.getManagerList().then((res) => {
            this.tableData = res.data;
            console.log("getManagerList", res);
          });
        }
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
