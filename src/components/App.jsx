import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import "../assets/css/index.css";

const App = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
