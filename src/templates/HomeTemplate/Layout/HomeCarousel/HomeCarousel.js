import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Carousel} from 'antd'
import { getCarouselAction } from "../../../../redux/actions/CarouselActions"
import "./HomeCarousel.css";
const contentStyle = {
  height: "100vh",
  backgroundSize: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel() {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  console.log(arrImg);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselAction());
  }, [dispatch]);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };

  return (
    <div className="relative">
      <Carousel >{renderImg()}</Carousel>
    </div>
  );
}
