import { GROUPID } from "../util/settings/config";
import axiosClient from "./axiosClient";
import { baseService } from "./baseService";


export class QuanLyNguoiDungService extends baseService {
  dangNhap = (thongTinDangNhap) => {
    return axiosClient.post(`/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  dangKy = (thongTinDangKy) => {
    return axiosClient.post(`/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };

  layThongTinNguoiDung = () => {
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan");
  };

  layDanhSachNguoiDung = () => {
    return axiosClient.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
  };

  timKiemNguoiDung = (keyWord) => {
    return axiosClient.get(
      `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${keyWord}`
    );
  };

  layDanhSachLoaiNguoiDung = () => {
    return axiosClient.get("/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  };

  themNguoiDung = (user) => {
    return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung", user);
  };

  capNhatNguoiDung =  (user) => {
    return axiosClient.post("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user);
  };

  xoaNguoiDung = (taiKhoan) => {
    return axiosClient.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
