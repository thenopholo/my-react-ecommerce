import React, { useState } from "react";

const ProductCounter = ({ onAddToCart }) => {
  const [count, setCount] = useState(1);

  const increment = (e) => {
    e.stopPropagation();
    setCount(count + 1);
  };

  const decrement = (e) => {
    e.stopPropagation();
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-2 bg-white rounded-full border border-grey-600">
        <button
          className="group cursor-pointer outline-none hover:rotate-180 duration-300"
          title="Subtract"
          onClick={decrement}
        >
          <svg
            className="stroke-red-500 fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            ></path>
            <path strokeWidth="1.5" d="M8 12H16"></path>
          </svg>
        </button>

        <span>{count}</span>
        <button
          className="group cursor-pointer outline-none hover:rotate-90 duration-300"
          title="Add New"
          onClick={increment}
        >
          <svg
            className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            ></path>
            <path strokeWidth="1.5" d="M8 12H16"></path>
            <path strokeWidth="1.5" d="M12 16V8"></path>
          </svg>
        </button>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(count);
        }}
        className="px-2 py-1 bg-custom-orange text-white rounded-full font-bold"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductCounter;