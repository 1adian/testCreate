<template>
  <div>
    <div class="header">
      <el-button type="primary" @click="addAdmin">
        <el-icon><Plus /></el-icon>
        添加管理员
      </el-button>
    </div>
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

    <!-- 
      抽屉：对 抽屉进行 DRY
        使得 该组件同时支持：「新增」和「编辑」两种功能

        思路：如何让 一个组件，同时 适配 两种功能 
          -> 引入一个 type：
            若 type 的值为 'add'，则为「新增」抽屉
            若 type 的值为 'edit'，则为「编辑」抽屉
     -->
    <el-drawer v-model="drawer" direction="rtl">
      <template #header>
        <h4>{{ type === "add" ? "添加管理员" : "编辑管理员" }}</h4>
      </template>
      <template #default>
        <el-form
          label-position="right"
          label-width="80px"
          :model="formData"
          style="max-width: 460px"
        >
          <el-form-item label="账户" v-if="type === 'add'">
            <el-input v-model="formData.adminname" />
          </el-form-item>
          <el-form-item label="密码" v-if="type === 'add'">
            <el-input v-model="formData.password" />
          </el-form-item>
          <el-form-item label="角色">
            <el-select
              v-model="formData.role"
              class="m-2"
              placeholder="请选择角色"
            >
              <el-option label="管理员" value="1" />
              <el-option label="超级管理员" value="2" />
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="drawer = false">取消</el-button>
          <!-- 添加管理员 -->
          <el-button v-if="type === 'add'" type="primary" @click="handleConfirm"
            >添加</el-button
          >

          <!-- 更新管理员 -->
          <el-button v-if="type === 'edit'" type="primary" @click="handleUpdate"
            >更新</el-button
          >
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script>
import api from "@/api";
import { Plus } from "@element-plus/icons-vue";
export default {
  name: "ManagerListView",
  components: {
    Plus,
  },
  data() {
    return {
      type: "", // 为了表示 抽屉的状态
      // 新增管理员的数据
      formData: {
        adminname: "",
        password: "",
        role: "1",
      },
      drawer: false, // 抽屉
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
      return this.tableData?.slice(startIndex, endIndex);
    },
  },
  // vm组件实例创建完毕，则执行本钩子函数
  // 本钩子函数，适合 进行 ajax 请求（ this 已经可以调用 data 和 methods 的内容）
  created() {
    this.updateTable();
  },
  methods: {
    // 调用 更新管理员的 接口
    handleUpdate() {
      api.user.updateAdmin(this.formData).then((res) => {
        // TODO：提供了 role 成功提交到后端，但 拉取最新数据 role 不变
        // 强调：`==` 数据数据类型的判断，直接判断数值 是否相等
        if (res.code == 200) {
          // 1. 关闭 抽屉
          this.drawer = false;

          // 2. 更新列表数据
          this.updateTable();
        }
        console.log("this.formData", this.formData);
        console.log("updateAdmin", res);
      });
    },

    // 点击「添加管理员」按钮，触发本函数
    addAdmin() {
      this.type = "add"; // 让 抽屉的状态 适配「新增」

      this.drawer = true; // 打开抽屉
    },

    // 新增用户，提交数据
    handleConfirm() {
      api.user.addAdmin(this.formData).then((res) => {
        if (res.code == "200") {
          // 表示 添加数据成功，
          // 1. 关闭 抽屉
          this.drawer = false;
          // 2. 刷新 table 的数据
          this.updateTable();
          // 3. 清空 抽屉中的数据（）
          this.formData = {
            adminname: "",
            password: "",
            role: "1",
          };
        }
      });
    },
    // 只要执行了本函数，则更新table
    updateTable() {
      api.user.getManagerList().then((res) => {
        // console.log(res);
        // 数据请求成功，才进行后续的赋值操作
        if (res.code == "200") {
          this.tableData = res.data;
        }

        // 注：token 失效，则 res.data 返回值是 undefined，
        // 且若代码还执行后续代码，如 undefined.slice() 则肯定报错
        // this.tableData = res.data || [];
        // console.log("getManagerList", res);
      });
    },
    handleEdit(i, row) {
      this.type = "edit"; // 让 抽屉的状态 适配「编辑」

      // 点击编辑，1. 打开抽屉
      this.drawer = true;
      console.log("handleEdit", i, row);

      this.formData.role = String(row.role); // 获取到 该管理员的 角色/权限/role
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
