import React, { useState, useEffect, useRef } from 'react';
import banner01 from "../assets/img/Banner01.png";
import banner02 from "../assets/img/Banner02.png";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


const HeroSlider = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [banner01, banner02];
  const intervalRef = useRef();

  useEffect(() => {
    // Define um intervalo para trocar automaticamente os banners
    intervalRef.current = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000); // Troca a cada 5 segundos

    // Limpar o intervalo quando o componente desmontar
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full relative">
      <img src={banners[currentBanner]} alt={`Banner ${currentBanner + 1}`} className="w-full" />
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={() => setCurrentBanner((currentBanner - 1 + banners.length) % banners.length)}
          className="bg-white p-2 rounded-full"
        ><FaChevronLeft /></button>
        <button
          onClick={() => setCurrentBanner((currentBanner + 1) % banners.length)}
          className="bg-white p-2 rounded-full"
        ><FaChevronRight /></button>
      </div>
    </div>
  );
};

export default HeroSlider;
