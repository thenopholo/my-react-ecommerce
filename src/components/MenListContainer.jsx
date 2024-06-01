import React from "react";
import { Link } from "react-router-dom";
import EletronicImg from "../assets/img/pexels-cottonbro-3584998.jpg";
import BijuteriasImg from "../assets/img/pexels-the-glorious-studio-3584518-5442465.jpg";
import NovosImg from "../assets/img/pexels-karolina-grabowska-4210860.jpg";
import MasculinoImg from "../assets/img/pexels-blitzboy-1040945.jpg";

export default function MenListContainer() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
          <div className="col-start-1 grid grid-cols-2 gap-x-8">
            <div className="group relative text-base sm:text-sm">
              <div className="w-[250pxpx] h-[250px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={MasculinoImg}
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="object-cover object-center w-[350px] h-[250px]"
                />
              </div>
              <Link to="/category/men's%20clothing" className="mt-6 block font-medium text-gray-900">
                <span
                  className="absolute inset-0 z-10"
                  aria-hidden="true"
                ></span>
                Roupas Masculinas
              </Link>
              <p aria-hidden="true" className="mt-1">
                Veja todos os outfits!
              </p>
            </div>
            <div className="group relative text-base sm:text-sm">
              <div className="w-[250pxpx] h-[250px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={BijuteriasImg}
                  alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                  className="object-cover object-center w-[350px] h-[250px]"
                />
              </div>
              <Link to="/category/jewelery" className="mt-6 block font-medium text-gray-900">
                <span
                  className="absolute inset-0 z-10"
                  aria-hidden="true"
                ></span>
                Bijuterias
              </Link>
              <p aria-hidden="true" className="mt-1">
                Veja todos as Bijus!
              </p>
            </div>
          </div>
          <div className="col-start- grid grid-cols-2 gap-x-8">
            <div className="group relative text-base sm:text-sm">
              <div className="w-[250pxpx] h-[250px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={NovosImg}
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="object-cover object-center w-[350px] h-[250px]"
                />
              </div>
              <Link to="/category" className="mt-6 block font-medium text-gray-900">
                <span
                  className="absolute inset-0 z-10"
                  aria-hidden="true"
                ></span>
                Jeans
              </Link>
              <p aria-hidden="true" className="mt-1">
                Veja tudo!
              </p>
            </div>
            <div className="group relative text-base sm:text-sm">
              <div className="w-[250pxpx] h-[250px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={EletronicImg}
                  alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                  className="object-cover object-center w-[350px] h-[250px]"
                />
              </div>
              <Link to="/category/electronics" className="mt-6 block font-medium text-gray-900">
                <span
                  className="absolute inset-0 z-10"
                  aria-hidden="true"
                ></span>
                Eletônicos
              </Link>
              <p aria-hidden="true" className="mt-1">
                Veja tudo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
