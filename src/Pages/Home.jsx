import React from "react";
import HeroSection from "../Components/HeroSection";
import ProductDetails from "../Components/ProductDetails";
import ScrollText from "../Components/ScrollText";
import Products from "../Components/Products";

function Home() {
  return (
    <div>
      <HeroSection />
      <ProductDetails />
      <ScrollText />
      <Products />
    </div>
  );
}

export default Home;
