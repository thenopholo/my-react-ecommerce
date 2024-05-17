import React from "react";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1}}
      onClick={onClick}
    >
      <AiOutlineRightCircle className="text-custom-red bg-white" size={32} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <AiOutlineLeftCircle className="text-custom-red bg-white" size={32} />
    </div>
  );
};

export { NextArrow, PrevArrow };
