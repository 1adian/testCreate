import { http } from "../http";

export const getBannerList = () => http.get("/admin/banner/list");

export const deleteBanner = (bannerid) =>
  http.get("/admin/banner/delete", {
    params: {
      bannerid,
    },
  });

// 添加轮播图
export const addBanner = (formData) => http.post("admin/banner/add", formData);
