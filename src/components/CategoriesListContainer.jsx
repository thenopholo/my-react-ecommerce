import React from 'react';
import IconButton from './IconButton';
import { IoShirtOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoTennisballOutline } from "react-icons/io5";
import { IoSparklesOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoBeerOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";

const CategoriesListContainer = () =>{
  return (
    <div className="bg-slate-200 px-4 py-4">
      <h2 className="text-2xl font-bold px-4 text-custom-red">Categorias</h2>
      <div className="flex px-4">
        <IconButton icon={IoShirtOutline} text="Roupas" />
        <IconButton icon={IoPhonePortraitOutline} text="Eletrônicos" />
        <IconButton icon={IoTennisballOutline} text="Itens Espotivos" />
        <IconButton icon={IoSparklesOutline} text="Maquiagem" />
        <IconButton icon={IoRestaurantOutline} text="Cozinha" />
        <IconButton icon={IoBedOutline} text="Casa" />
        <IconButton icon={IoBeerOutline} text="Cervejas Artesanais" />
      </div>
    </div>

  );

};

export default CategoriesListContainer;
