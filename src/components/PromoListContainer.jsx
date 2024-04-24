import React from 'react';
import IconButton from './IconButton';
import { GrDeliver } from "react-icons/gr";
import { LiaHandPeace } from "react-icons/lia";
import { LiaHotjar } from "react-icons/lia";


const PromoListContainer = () =>{
  return (
    <div className="bg-slate-200 px-4 py-4">
      <h2 className="text-2xl font-bold px-4 text-custom-red">O que está em promoção</h2>
      <div className="flex px-4">
        <IconButton icon={GrDeliver} text="Frete Grátis" />
        <IconButton icon={LiaHotjar} text="10%OFF" />
        <IconButton icon={LiaHotjar} text="20%OFF" />
        <IconButton icon={LiaHotjar} text="30%OFF" />
        <IconButton icon={LiaHandPeace} text="Compre 1 Leve 2" />
      </div>
    </div>

  );

};

export default PromoListContainer;
