import React from 'react';
import logo from '../assets/svg/supershop_logo.svg';
import IconButton from './IconButton';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import UserButton from './UserButton';
import { AiFillHome } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { AiFillSkin } from "react-icons/ai";




const Navbar = () => {
    return (
        <>
            <header className="flex justify-between bg-slate-200 px-4 py-4">
                <div className="flex">
                <img className="w-[85px]" src={logo} alt="supershop_logo"/>
                <IconButton icon={AiFillHome} text="Home" />
                <IconButton icon={AiFillSkin} text="Categorias" />
                <IconButton icon={AiFillFire} text="Promoção" />
                </div>
                <div className="flex">
                <CartButton />
                <UserButton />
                <SearchBar />
                </div>

            </header>
        
        </>
    );
};

export default Navbar;