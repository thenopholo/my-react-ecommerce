import React from 'react';

const IconButton = ({ icon: Icon, onClick }) => (
  <button 
  className={`text-custom-red bg-white rounded-full shadow-lg cursor-pointer py-2 px-2`} 
  onClick={(e) => {
    e.stopPropagation();
    onClick && onClick(e);
  }}
  aria-label="icon button"
  >
    {Icon && <Icon size={24} />}
  </button>
);

export default IconButton;
