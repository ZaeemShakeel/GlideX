import React from "react";
import HeroSection from "../Components/HeroSection";
import ProductDetails from "../Components/ProductDetails";
import ScrollText from "../Components/ScrollText";
import Products from "../Components/Products";
import AdvanceProduct from "../Components/AdvanceProduct";
import Cards from "../Components/Cards";
import AboutRoad from "../Components/AboutRoad";
import QuantumGlide from "../Components/QuantumGlide";
import Scooter from "../Components/Scooter";
import Companies from "../Components/Companies";
import ReadMore from "../Components/ReadMore";
import Details from "../Components/Details";

function Home() {
  return (
    <div>
      <HeroSection />
      <ProductDetails />
      <ScrollText />
      <Products />
      <AdvanceProduct />
      <Cards />
      <AboutRoad />
      <QuantumGlide />
      <Scooter />
      <Companies />
      <ReadMore />
      <Details />
    </div>
  );
}

export default Home;
