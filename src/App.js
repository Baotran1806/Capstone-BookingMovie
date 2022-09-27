import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import { DetailTemplate } from "./templates/DetailTemplate/DetailTemplate";
import { CheckoutTemplate } from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy } from "react";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
export const history = createBrowserHistory();

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
        <Route path="/news" element={<News />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route index element={<Home />} />
        
        </Route>
        <Route element={<UserTemplate/>}>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        </Route>
        

        <Route path ="/details" element={<DetailTemplate/>}>
        <Route path="/details/:id" element={<Detail/>}/>
        </Route>

        <Route path ="/checkout" element={<CheckoutTemplate/>}>
        <Route path="/checkout/:id" element={<Checkout/>}/>

        
        </Route>     
      </Routes>
    </>
  );
}

export default App;
