import React, {useEffect} from 'react'
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel"
import { useSelector,useDispatch } from 'react-redux'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapActions";
import HomeMenu from "../Home/HomeMenu/HomeMenu"

export default function Home() {
  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
    dispatch(layDanhSachHeThongRapAction());
  }, [dispatch]);
  console.log({arrFilm})
  return (
    <div>
          <HomeCarousel/>
          <section className="text-gray-600 body-font">
        <div className="container py-10 mx-auto ">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
        <h1 className="text-center text-3xl">CỤM RẠP & LỊCH CHIẾU</h1>
        <div className="container py-10 mx-auto mb-10">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
      </section>
    </div>
  )
}
