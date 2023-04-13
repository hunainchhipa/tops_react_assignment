import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inc_Dec from "./Inc_Dec";
import Table from "./ReactAssignment";

export default function React_Assignment() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/inc_dec" element={<Inc_Dec />}></Route>
        </Routes>
      </Router>
    </>
  );
}
