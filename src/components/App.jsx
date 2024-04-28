import React from "react";
import ReactDOM from "react-dom/client";
import "../assets/css/index.css";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import HeroSlider from "./HeroSlider";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <ProductList />
    </>
  );
};

export default App;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
