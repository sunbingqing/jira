/*
 * @Author: sunbingqing
 * @Date: 2022-01-22 13:59:34
 * @LastEditors: sunbingqing
 * @LastEditTime: 2022-01-22 16:22:44
 * @Description:
 * @Copyrigh: © 2020 杭州杰竞科技有限公司 版权所有
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
