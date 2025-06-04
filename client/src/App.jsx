import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./Layouts/PublicRoutes";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
