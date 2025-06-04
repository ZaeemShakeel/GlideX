import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function PublicRoutes() {
  return (
    <div className="bg-[#1B1B1B]">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicRoutes;
