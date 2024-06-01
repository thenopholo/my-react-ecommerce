import React from "react";
import ReactDOM from "react-dom/client";
import "../assets/css/index.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../view/HomePage";
import CartPage from "../view/CartPage";
import CategoryPage from "../view/CategoryPage";
import ProductPage from "../view/ProductPage";
import CheckoutPage from "../view/CheckoutPage";
import SingUpPage from "../view/SingupPage";
import LoginPage from "../view/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singuppage" element={<SingUpPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
