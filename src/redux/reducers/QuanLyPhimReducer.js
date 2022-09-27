import {
  GET_DANH_SACH_PHIM_KEYWORD,
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
  SET_THONG_TIN_PHIM,
} from "../types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";
const stateDefault = {
  arrFilm: [
    {
      maPhim: 10547,
      tenPhim: "ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM 1",
      biDanh: "an-mang-lien-hoan-luc-nua-dem-1",
      trailer: "https://www.youtube.com/watch?v=PDq6ww8zEVU",
      hinhAnh:
        "http://movienew.cybersoft.edu.vn/hinhanh/an-mang-lien-hoan-luc-nua-dem-1_gp01.jpg",
      moTa: "<p>Bộ phim kể về 3 c&acirc;u chuyện b&iacute; ẩn với những sự thật kinh ho&agrave;ng dần được h&eacute; lộ.</p>",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-08-27T09:46:32.773",
      danhGia: 7,
    },
  ],
  arrFilmSearch: [],
  arrFilmDefault: [],
  filmDetail: {},
  thongTinPhim: {},
  dangChieu: false,
  sapChieu: false,
};
export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }

    case GET_DANH_SACH_PHIM_KEYWORD: {
      state.arrFilmSearch = action.arrFilmSearch;
      state.arrFilmDefault = state.arrFilmSearch;
      return { ...state };
    }

    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    case SET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }
    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
