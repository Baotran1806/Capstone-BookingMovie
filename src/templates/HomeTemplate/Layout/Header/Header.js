import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import {
  BarChartOutlined,
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";
import { OPEN_MODAL_USER } from "../../../../redux/types/QuanLyNguoiDungType";

export default function Header() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  const dispatch = useDispatch();
  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined />
        <button
          onClick={() => {
            dispatch({
              type: OPEN_MODAL_USER,
            });
          }}
        >
          Cá nhân
        </button>
      </Menu.Item>

      {userLogin.maLoaiNguoiDung === "QuanTri" ? (
        <Menu.Item>
          <NavLink
            to="/admin"
            className="flex items-center p-2 hover:text-yellow-400 text-white"
          >
            <BarChartOutlined />
            Quản Trị
          </NavLink>
        </Menu.Item>
      ) : (
        ""
      )}

      <Menu.Item>
        <LogoutOutlined />
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            window.location.reload();
          }}
        >
          Đăng xuất
        </button>
      </Menu.Item>
    </Menu>
  );
  return (
    <header className=" bg-white w-full z-10 ">
      <div className=" flex justify-between items-center mx-10 h-14 ">
        <NavLink
          to="/"
          aria-label="Homepage"
          className="flex items-center "
        >
          <img src="./images/logo cepheus.png" style={{ width: 100 }} alt="logo" />
        </NavLink>
<ul className="items-stretch hidden space-x-5 lg:flex">
  <li className="flex self-center ">
    <a rel="noopener noreferrer" href="/home" className="flex items-center px-6  border-b-2 dark:border-transparent">Home</a>
  </li>
  <li className="flex">
  <a rel="noopener noreferrer" href="/home" className="flex items-center px-6  border-b-2 dark:border-transparent">Lịch Chiếu</a>
  </li>
  <li className="flex">
    <a a rel="noopener noreferrer" href="/home" className="flex items-center px-6  border-b-2 dark:border-transparent">Cụm rạp</a>
  </li>
</ul>

        <div className="">
          {_.isEmpty(userLogin) ? (
            <Fragment>
              <NavLink to="/login" className="font-bold self-center pr-10 ">
                Đăng nhập
              </NavLink>
              <NavLink to="/register" className="font-bold self-center pr-10">
                Đăng ký
              </NavLink>
            </Fragment>
          ) : (
            <Dropdown overlay={menu}>
              <button
                className="ant-dropdown-link font-bold text-red"
                onClick={(e) => e.preventDefault()}
              >
                Xin chào {userLogin.taiKhoan} <DownOutlined />
              </button>
            </Dropdown>
          )}
        </div>
      </div>
    </header>
  );
}
