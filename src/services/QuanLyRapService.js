import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";
import axiosClient from "./axiosClient"
export class QuanLyRapService extends baseService {
    layThongTinHeThongRap = () => {
        return axiosClient.get(`/QuanLyRap/LayThongTinHeThongRap`);
      };

  layDanhSachHeThongRap = () => {
    return axiosClient.get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };


  layThongTinCumRap = (maHeThongRap) => {
    return axiosClient.get(
      `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  };

  layThongTinLichChieuPhim = (maPhim) => {
    return axiosClient.get(`/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  };

}

export const quanLyRapService = new QuanLyRapService();