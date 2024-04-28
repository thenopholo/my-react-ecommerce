import React from "react";

const IconTextButton = ({ icon: Icon, text, className, onClick}) => {
    return(
        <button 
        className={`flex items-center my-4 mr-2 px-4 bg-white border-2 border-custom-red rounded-full shadow-lg ${className}`}
        onClick={onClick}
        >
            {Icon && <Icon className="mr-2 text-custom-orange" />}
            {text && <span className="text-custom-orange font-bold">{text}</span>}
        </button>
    );

};



export default IconTextButton;