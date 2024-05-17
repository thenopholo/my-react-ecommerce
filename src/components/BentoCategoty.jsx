import EletronicImg from "../assets/img/pexels-cottonbro-3584998.jpg";
import BijuteriasImg from "../assets/img/pexels-the-glorious-studio-3584518-5442465.jpg";
import NovosImg from "../assets/img/pexels-karolina-grabowska-4210860.jpg";
import MasculinoImg from "../assets/img/pexels-blitzboy-1040945.jpg";
import FemininoImg from "../assets/img/pexels-ron-lach-8307704.jpg";

export default function BentoCategoty() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4 grid-rows-2">
          <li>
            <a href="#" className="group relative block">
              <img
                src={FemininoImg}
                alt=""
                className="rounded-lg shadow-lg aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Roupas Femininas
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group relative block">
              <img
                src={MasculinoImg}
                alt=""
                className="rounded-lg shadow-lg aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Roupas Masculinas
                </span>
              </div>
            </a>
          </li>
          <li className="lg:col-span-1 lg:rows-span-2 lg:row-start-1 lg:col-start-4">
            <a href="#" className="group relative block">
              <img
                src={BijuteriasImg}
                alt=""
                className="rounded-lg shadow-lg aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Bijuterias
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-1 lg:rows-span-2 lg:row-start-2 lg:col-start-4">
            <a href="#" className="group relative block">
              <img
                src={EletronicImg}
                alt=""
                className="rounded-lg shadow-lg aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Eletronicos
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="group relative block">
              <img
                src={NovosImg}
                alt=""
                className="rounded-lg shadow-lg w-full object-contain transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Recebidos da Semana
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
