import React, { useState } from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRowSlick.module.css"
import Film from "../Film/Film";
import { useDispatch, useSelector } from "react-redux";
import {
    SET_FILM_DANG_CHIEU,
    SET_FILM_SAP_CHIEU,
  } from "../../redux/types/QuanLyPhimType";
import {CSSTransition} from "react-transition-group";
//Arrow
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-prev"]}`}
        style={{ ...style, }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-prev"]}`}
        style={{ ...style, }}
        onClick={onClick}
      />
    );
  }

  const MultipleRowSlick = (props) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "30px",
        slidesToShow: 1,
        speed: 500,
        rows: 1,
        slidesPerRow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    const [show, setShow] = useState(false);
    const [trailer, setTrailer] = useState("");
    const dispatch = useDispatch();
    const { dangChieu, sapChieu } = useSelector(
      (state) => state.QuanLyPhimReducer
    );
    const renderFilms = () => {
      return props.arrFilm.slice(0, 24).map((item, index) => {
        return (
          <div
            className="mt-2 film relative"
            key={index}
            onClick={() => {
              setTrailer(item.trailer);
            }}
          >
            <Film phim={item} />
            <button onClick={() => setShow(true)} className="play-btn">
              <img src="./images/play-video.png" alt="playvideo" />
            </button>
          </div>
        );
      });
    };
    let activeClassDC = dangChieu === false ? "none_active_Film" : "active_Film";
    let activeClassSC = sapChieu === false ? "none_active_Film" : "active_Film";
    return (
      <div className="container relative">
        <div className="text-center mb-4">
          <button
            className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border mr-2`}
            onClick={() => {
              const action = { type: SET_FILM_DANG_CHIEU };
              dispatch(action);
            }}
          >
            PHIM ĐANG CHIẾU
          </button>
          <button
            className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
            onClick={() => {
              const action = { type: SET_FILM_SAP_CHIEU };
              dispatch(action);
            }}
          >
            PHIM SẮP CHIẾU
          </button>
        </div>
  
        <div className="w-11/12 mx-auto relative mb-4">
          <Slider {...settings}>{renderFilms()}</Slider>
          <CSSTransition
            in={show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
          >
            <div className="modal" onClick={() => setShow(false)}>
      
              <iframe
                style={{ position: "relative" }}
                title="title4"
                allowfullscreen="true"
                width="1000px"
                height="500px"
                src={trailer}
                frameborder="0"
              ></iframe>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  };
  export default MultipleRowSlick;