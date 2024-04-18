import React from 'react';
import { AiOutlineUser } from "react-icons/ai";

const UserButton = () =>{
    return (
    <button className="bg-white my-4 p-4 rounded-full shadow-lg mr-2">
        <AiOutlineUser className="text-3xl text-custom-orange" />
    </button>
    );
}

export default UserButton;