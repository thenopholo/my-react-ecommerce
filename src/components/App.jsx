import React from "react";
import ReactDOM from "react-dom/client";
import "../assets/css/index.css";
import Header from "./Header";
import HeroSlider from "./HeroSlider";
import HotProductList from "./HotProductList";
import TechProductList from "./TechProductList";
import MenClothingProductList from "./MenClothingProductList";
import WomenClothingProductList from "./WomenClothingProductList";
import BentoCategoty from "./BentoCategoty";

const App = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <BentoCategoty />
      <HotProductList />
      <WomenClothingProductList />
      <MenClothingProductList />
      <TechProductList />
    </>
  );
};

export default App;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
