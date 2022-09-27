import { AppleOutlined, FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
import _ from "lodash";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
    _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"])
  );

  return (
    <Fragment>
      <footer className="py-4 bg-coolGray-100 text-coolGray-900 bg-yellow-600">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="mt-2">
              <NavLink to="/">
                <img
                  src="./images/logo cepheus.png"
                  alt="Cepehus"
                  style = {{width:100,paddingTop:10}}
                />
              </NavLink>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 sm:grid-cols-1">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-50">Điều khoản</h3>
				<ul className="space-y-3">
					<li>
						<a rel="noopener noreferrer" className="text-black" href="/">Thoả thuận người dùng</a>
					</li>
					<li>
						<a rel="noopener noreferrer" className="text-black" href="/">Chế độ bảo mật</a>
					</li>
				</ul>
			</div>
      </div>
            <div>
            <h1>ĐỐI TÁC</h1>
            <div className="flex">
              
              {arrHeThongRap.map((htr, index) => {
                return (
                  <div key={index}>
                    <img
                      alt=""
                      className="m-1"
                      src={htr.logo}
                      style={{ width: 60 }}
                    />
                  </div>
                );
              })}
            </div>
            </div>
            <div>
            <h1>KÊNH TRUYỀN THÔNG</h1>
            <div className="text-white pt-4">
              <div className="flex text-white">
                <div className="">
                  <AppleOutlined className="text-2xl" />
                </div>
                <div>
                  <FacebookOutlined className="ml-4 text-2xl" />
                </div>
                <div>
                  <TwitterOutlined className="ml-4 text-2xl" />
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className=""></div>
        </div>
      </footer>
    </Fragment>
  );
}
