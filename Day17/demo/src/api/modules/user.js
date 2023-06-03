import { http } from "../http";

export const login = (username, password) =>
  http.post("/admin/admin/login", {
    adminname: username,
    password: password,
  });

export const getManagerList = (data) =>
  http.get("/admin/admin/list", {
    params: data,
  });

// 删除管理员的接口
export const deleteAdmin = (adminid) =>
  http.post("/admin/admin/delete", {
    adminid,
  });

// 新增管理员
export const addAdmin = (formData) => http.post("/admin/admin/add", formData);

// admin/admin/update
// 更新管理员
export const updateAdmin = (formData) =>
  http.post("/admin/admin/update", formData);
