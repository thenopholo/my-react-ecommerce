import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = ({ cartCount, onClick }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <AiOutlineShoppingCart size={34} />
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
