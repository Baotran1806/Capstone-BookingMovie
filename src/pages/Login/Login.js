import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      dispatch(dangNhapAction(values));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >



      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl 
      xl:text-bold"
        >
          Đăng nhập
        </h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tài khoản
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 pl-4 mt-2 rounded-xl border-b focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào tài khoản"
              />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
              </div>

              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b mt-2 pl-4 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào mật khẩu"
              />
              {/* <div className="text-right mt-2">
                <NavLink
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800
                          cursor-pointer"
                  to="/forgotpassword"
                >
                  Quên mật khẩu
                </NavLink>
              </div> */}
            </div>
            <div className="mt-5">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg"
              >
                Đăng nhập
              </button>
            </div>
          </div>
          <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn chưa có tài khoản ?  
            </div>
            <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
            <NavLink to="/register"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
               Đăng ký
            </NavLink>
            <NavLink to="/home"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
               Về trang chủ
            </NavLink>
            </div>


        </div>
      </div>
    </form>
  );
}

