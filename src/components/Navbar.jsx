import React, { useState, useEffect } from 'react';
import logo from '../assets/svg/supershop_logo.svg';
import IconButton from './IconButton';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import UserButton from './UserButton';
import CategoriesListContainer from './CategoriesListContainer';
import PromoListContainer from './PromoListContainer';
import { AiOutlineHome } from "react-icons/ai";
import { LiaHotjar } from "react-icons/lia";
import { AiOutlineSkin } from "react-icons/ai";




const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showPromo, setShowPromo] = useState(false);
    
    const toggleCategories = () => {
        setShowCategories(!showCategories); // Alterna o estado de visibilidade
    };

    const togglePromo = () => {
        setShowPromo(!showPromo); // Alterna o estado de visibilidade
    };

    return (
        <>
            <header className="flex justify-between bg-slate-200 px-4 py-4">
                <div className="flex">
                <img className="w-[85px]" src={logo} alt="supershop_logo"/>
                <IconButton icon={AiOutlineHome} text="Home" />
                <IconButton icon={AiOutlineSkin} text="Categorias" onClick={toggleCategories} />
                <IconButton icon={LiaHotjar} text="Promoção" onClick={togglePromo} />
                </div>
                <div className="flex">
                <CartButton />
                <UserButton />
                <SearchBar />
                </div>
            </header>
            {showCategories && <CategoriesListContainer />}
            {showPromo && <PromoListContainer />}
            
        </>
    );
};

export default Navbar;