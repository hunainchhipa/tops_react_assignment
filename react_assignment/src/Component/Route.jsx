import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IncDec from "./Inc_Dec";
import Table from "./ReactAssignment";
import { wait } from "@testing-library/user-event/dist/utils";
import List from "./List";

//lazyload
const LazyLoading = lazy(() => wait(2000).then(() => import("./LazyLoad")));

export default function React_Assignment() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/inc_dec" element={<IncDec />} />
          <Route path="/list" element={<List />} />
          <Route
            path="/lazyload"
            element={
              <Suspense
                fallback={
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                }
              >
                <LazyLoading />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
