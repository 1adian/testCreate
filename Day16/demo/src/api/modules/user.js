import { http } from "../http";

export const login = (username, password) =>
  http.post("/admin/admin/login", {
    adminname: username,
    password: password,
  });
