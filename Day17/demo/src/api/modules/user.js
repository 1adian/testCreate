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
