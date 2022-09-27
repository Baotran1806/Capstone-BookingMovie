import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import {store} from "./redux/types/configStore";
import { BrowserRouter } from "react-router-dom";
import * as signalR from "@microsoft/signalr";

// config
import { DOMAIN } from "./util/settings/config";
// Hiệu ứng
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//Ant design
import 'antd/dist/antd.css';

// Log ra react
const root = ReactDOM.createRoot(document.getElementById("root"));


export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection
  .start()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  })
  .catch((errors) => {
    console.log(errors);
  });

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

