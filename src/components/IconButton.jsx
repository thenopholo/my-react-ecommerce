import React from 'react';

const IconButton = ({ icon: Icon, className, onClick }) => (
  <button className={`text-custom-red bg-white rounded-full shadow-lg cursor-pointer	 ${className}`} onClick={onClick}>
    <Icon size={24} />
  </button>
);

export default IconButton;
