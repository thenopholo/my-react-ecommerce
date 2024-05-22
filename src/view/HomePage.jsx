import React from "react";

import "../assets/css/index.css";
import HeroSlider from "../components/HeroSlider";
import HotProductList from "../components/HotProductList";
import TechProductList from "../components/TechProductList";
import MenClothingProductList from "../components/MenClothingProductList";
import WomenClothingProductList from "../components/WomenClothingProductList";
import BentoCategoty from "../components/BentoCategoty";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <BentoCategoty />
      <HotProductList />
      <WomenClothingProductList />
      <MenClothingProductList />
      <TechProductList />
    </>
  );
};

export default HomePage;