import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import "bootstrap5/src/css/bootstrap.min.css";
import Home from "./CRUD/Home";
import { Provider } from "react-redux";
import Store from "./store";
import SubmitData from "./CRUD/SubmitData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./CRUD/Update";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={Store}>
      {/* <Home />
      <SubmitData /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Register" element={<SubmitData />}></Route>
          <Route path="/Update/:id" element={<Update />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
