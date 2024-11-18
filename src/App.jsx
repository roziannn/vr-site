import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Register from "./components/Register";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-7xl mx-auto px-6">
                <Landing />
              </div>
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
