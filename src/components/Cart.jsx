import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = ({ cartCount, onClick }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <AiOutlineShoppingCart size={34} />
      {cartCount > 0 && (
        <span className="absolute bottom-8 left-6 inline-flex items-center justify-center px-2 py-2 text-xs font-bold leading-none text-red-100 bg-custom-orange rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
