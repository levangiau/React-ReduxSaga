import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App/Taskboard/index";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./generator";
import GlobalLoading from "./components/Global_Loading";

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <GlobalLoading />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
