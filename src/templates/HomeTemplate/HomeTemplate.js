import { Fragment } from "react";
import {Outlet} from "react-router-dom"
import HomeMenu from "../../pages/Home/HomeMenu/HomeMenu";
import Header from "../HomeTemplate/Layout/Header/Header"
import Footer from "./Layout/Footer/Footer";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";


export const HomeTemplate = () => {
  return (
    <Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
  </Fragment> )};
