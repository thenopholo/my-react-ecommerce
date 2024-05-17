import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="relative flex items-center justify-center">
      <input
        type="text"
        className="w-[300px] h-[44px] rounded-full px-4 shadow-lg focus:border-custom-red focus:ring-custom-red focus:ring-1 ml-4"
        placeholder="O que você está procurando?"
      />
      <button className="absolute right-4">
        <AiOutlineSearch className="text-3xl text-custom-orange" />
      </button>
    </div>
  );
};

export default SearchBar;
