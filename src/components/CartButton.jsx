import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

const CartButton = () => {
  const [cartCounter, setCart] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setCart(cartCounter + 1);
  };

  return (
    <div className="flex relative">
    {cartCounter > 0 && <p className="flex absolute right-9 items-center bg-custom-red p-5 rounded-full text-lg text-white font-bold h-1/2">{cartCounter}</p>}
    <button onClick={handleClick} className="bg-white my-4 p-4 rounded-full shadow-lg mr-2">
      <AiOutlineShoppingCart className="text-3xl text-custom-orange" />
    </button>
    </div>
  );
};

export default CartButton;
