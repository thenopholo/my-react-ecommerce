import React from "react";

export default function MenListContainer() {
  return (
    <div class="relative bg-white">
      <div class="mx-auto max-w-7xl px-8">
        <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
          <div class="col-start-2 grid grid-cols-2 gap-x-8">
            <div class="group relative text-base sm:text-sm">
              <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  class="object-cover object-center"
                />
              </div>
              <a href="#" class="mt-6 block font-medium text-gray-900">
                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                Recém Chegados
              </a>
              <p aria-hidden="true" class="mt-1">
                Compre agora
              </p>
            </div>
            <div class="group relative text-base sm:text-sm">
              <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                  alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                  class="object-cover object-center"
                />
              </div>
              <a href="#" class="mt-6 block font-medium text-gray-900">
                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                Camisetas Masculinas
              </a>
              <p aria-hidden="true" class="mt-1">
                Compre Agora
              </p>
            </div>
          </div>
          <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
            <div>
              <p id="Clothing-heading" class="font-medium text-gray-900">
                Roupas
              </p>
              <ul
                role="list"
                aria-labelledby="Clothing-heading"
                class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
              >
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Tops
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Calças
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Sweaters
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Camisetas
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Jaquetas
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Esportiva
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Veja todas!
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p id="Accessories-heading" class="font-medium text-gray-900">
                Acessórios
              </p>
              <ul
                role="list"
                aria-labelledby="Accessories-heading"
                class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
              >
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Relógios
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Carteiras
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Bolsas
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Oculós de Sol
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Boné
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Cintos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p id="Brands-heading" class="font-medium text-gray-900">
                Marcas
              </p>
              <ul
                role="list"
                aria-labelledby="Brands-heading"
                class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
              >
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Nike
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Adidas
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    The North Face
                  </a>
                </li>
                <li class="flex">
                  <a href="#" class="hover:text-gray-800">
                    Under Amour
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
