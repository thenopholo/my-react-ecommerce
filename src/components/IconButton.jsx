import React from "react";

const IconButton = ({ icon: Icon, className }) => {
  return (
    <div
      className={`flex items-center my-4 mr-2 px-4 bg-white border-2 border-custom-red rounded-full shadow-lg ${className}`}
    >
      {Icon && <Icon className="text-custom-orange text-2xl" />}
    </div>
  );
};

export default IconButton;
