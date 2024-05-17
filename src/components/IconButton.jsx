import React from 'react';

const IconButton = ({ icon: Icon, className, onClick }) => (
  <button className={`text-gray-500 hover:text-gray-700 ${className}`} onClick={onClick}>
    <Icon size={24} />
  </button>
);

export default IconButton;
