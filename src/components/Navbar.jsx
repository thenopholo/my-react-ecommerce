import React, { useState } from "react";
import logo from "../assets/svg/supershop_logo.svg";
import IconTextButton from "./IconTextButton";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import UserButton from "./UserButton";
import CategoriesListContainer from "./CategoriesListContainer";
import PromoListContainer from "./PromoListContainer";
import { AiOutlineHome } from "react-icons/ai";
import { LiaHotjar } from "react-icons/lia";
import { AiOutlineSkin } from "react-icons/ai";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);

  const handleSubMenu = (currentSubMenu) => {
    showSubMenu === currentSubMenu
      ? setShowSubMenu(null)
      : setShowSubMenu(currentSubMenu);
  };

  return (
    <>
      <header className="flex justify-between bg-white px-4 py-4 z-10">
        <div className="flex">
          <img className="w-[85px]" src={logo} alt="supershop_logo" />
          <IconTextButton icon={AiOutlineHome} text="Home" />
          <IconTextButton
            icon={AiOutlineSkin}
            text="Categorias"
            onClick={() => handleSubMenu("categories")}
          />
          <IconTextButton
            icon={LiaHotjar}
            text="Promoção"
            onClick={() => handleSubMenu("promo")}
          />
        </div>
        <div className="flex">
          <CartButton />
          <UserButton />
          <SearchBar />
        </div>
      </header>
      {showSubMenu === "categories" && <CategoriesListContainer />}
      {showSubMenu === "promo" && <PromoListContainer />}
    </>
  );
};

export default Navbar;
