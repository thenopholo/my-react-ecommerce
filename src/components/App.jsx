import React from "react";
import ReactDOM from "react-dom/client";
import "../assets/css/index.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../view/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
