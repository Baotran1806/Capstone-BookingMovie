import { baseService } from "./baseService";
import axiosClient from "./axiosClient";
import { GROUPID } from "../util/settings/config";
export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }
  layDanhSachBanner = () => {
    return axiosClient.get(`/QuanLyPhim/LayDanhSachBanner`);
  };
  layDanhSachPhim = () => {
    return axiosClient.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
  layThongTinPhim = (maPhim) => {
    return axiosClient.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
}
export const quanLyPhimService = new QuanLyPhimService();
