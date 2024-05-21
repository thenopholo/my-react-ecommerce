import React from "react";

export default function MobileMenu() {
  const [tab, setTab] = React.useState("mulher");



  return (
    <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black bg-opacity-25"></div>
      <div className="fixed inset-0 z-40 flex">
        <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
          <div className="flex px-4 pb-2 pt-5">
            <button
              type="button"
              className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              onClick={() => console.log("Menu should close here.")}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-2">
            <div className="border-b border-gray-200">
              <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                <button
                  id="tabs-1-tab-1"
                  className={`flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium ${
                    tab === "mulher" ? "border-custom-red text-custom-orange" : "border-transparent text-gray-900"
                  }`}
                  aria-controls="tabs-1-panel-1"
                  role="tab"
                  type="button"
                  onClick={() => setTab("mulher")}
                >
                  Mulher
                </button>
                <button
                  id="tabs-1-tab-2"
                  className={`flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium ${
                    tab === "homem" ? "border-custom-red text-custom-orange" : "border-transparent text-gray-900"
                  }`}
                  aria-controls="tabs-1-panel-2"
                  role="tab"
                  type="button"
                  onClick={() => setTab("homem")}
                >
                  Homem
                </button>
              </div>
            </div>
            {/* 'Women' tab panel, show/hide based on tab state. */}
            {tab === "mulher" && (
              <div
                id="tabs-1-panel-1"
                class="space-y-10 px-4 pb-8 pt-10"
                aria-labelledby="tabs-1-tab-1"
                role="tabpanel"
                tabindex="0"
              >
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="group relative text-sm">
                    <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                        alt="Models sitting back to back, wearing Basic Tee in black and bone."
                        class="object-cover object-center"
                      />
                    </div>
                    <a href="#" class="mt-6 block font-medium text-gray-900">
                      <span
                        class="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      Recém chegados
                    </a>
                    <p aria-hidden="true" class="mt-1">
                      Compre Agora
                    </p>
                  </div>
                  <div class="group relative text-sm">
                    <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                        alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                        class="object-cover object-center"
                      />
                    </div>
                    <a href="#" class="mt-6 block font-medium text-gray-900">
                      <span
                        class="absolute inset-0 z-10"
                        aria-hidden="true"
                      ></span>
                      Camisetas Básicas
                    </a>
                    <p aria-hidden="true" class="mt-1">
                      Compre Agora
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    id="women-clothing-heading-mobile"
                    class="font-medium text-gray-900"
                  >
                    Roupas
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="women-clothing-heading-mobile"
                    class="mt-6 flex flex-col space-y-6"
                  >
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Tops
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Vestidos
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Calças
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Denim
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Sweaters
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Camisetas
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Jaquetas
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Esportivas
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Veja tudo!
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p
                    id="women-accessories-heading-mobile"
                    class="font-medium text-gray-900"
                  >
                    Acessórios
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="women-accessories-heading-mobile"
                    class="mt-6 flex flex-col space-y-6"
                  >
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Relógios
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Carteiras
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Bolsas e Mochilas
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Oculós de Sol
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Boné e Chapéu
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Cintos
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p
                    id="women-brands-heading-mobile"
                    class="font-medium text-gray-900"
                  >
                    Marcas
                  </p>
                  <ul
                    role="list"
                    aria-labelledby="women-brands-heading-mobile"
                    class="mt-6 flex flex-col space-y-6"
                  >
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Nike
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Adidas
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        The North Face
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Supreme
                      </a>
                    </li>
                    <li class="flow-root">
                      <a href="#" class="-m-2 block p-2 text-gray-500">
                        Under Amour
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* 'Men' tab panel, show/hide based on tab state. */}
            {tab === "homem" && (
                <div
                  id="tabs-1-panel-2"
                  class="space-y-10 px-4 pb-8 pt-10"
                  aria-labelledby="tabs-1-tab-2"
                  role="tabpanel"
                  tabindex="0"
                >
                  <div class="grid grid-cols-2 gap-x-4">
                    <div class="group relative text-sm">
                      <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                          alt="Drawstring top with elastic loop closure and textured interior padding."
                          class="object-cover object-center"
                        />
                      </div>
                      <a href="#" class="mt-6 block font-medium text-gray-900">
                        <span
                          class="absolute inset-0 z-10"
                          aria-hidden="true"
                        ></span>
                        New Arrivals
                      </a>
                      <p aria-hidden="true" class="mt-1">
                        Shop now
                      </p>
                    </div>
                    <div class="group relative text-sm">
                      <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                          alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                          class="object-cover object-center"
                        />
                      </div>
                      <a href="#" class="mt-6 block font-medium text-gray-900">
                        <span
                          class="absolute inset-0 z-10"
                          aria-hidden="true"
                        ></span>
                        Artwork Tees
                      </a>
                      <p aria-hidden="true" class="mt-1">
                        Shop now
                      </p>
                    </div>
                  </div>
                  <div>
                    <p
                      id="men-clothing-heading-mobile"
                      class="font-medium text-gray-900"
                    >
                      Clothing
                    </p>
                    <ul
                      role="list"
                      aria-labelledby="men-clothing-heading-mobile"
                      class="mt-6 flex flex-col space-y-6"
                    >
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Tops
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Pants
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Sweaters
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          T-Shirts
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Jackets
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Activewear
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Browse All
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p
                      id="men-accessories-heading-mobile"
                      class="font-medium text-gray-900"
                    >
                      Accessories
                    </p>
                    <ul
                      role="list"
                      aria-labelledby="men-accessories-heading-mobile"
                      class="mt-6 flex flex-col space-y-6"
                    >
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Watches
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Wallets
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Bags
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Sunglasses
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Hats
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Belts
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p
                      id="men-brands-heading-mobile"
                      class="font-medium text-gray-900"
                    >
                      Brands
                    </p>
                    <ul
                      role="list"
                      aria-labelledby="men-brands-heading-mobile"
                      class="mt-6 flex flex-col space-y-6"
                    >
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Re-Arranged
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Counterfeit
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          Full Nelson
                        </a>
                      </li>
                      <li class="flow-root">
                        <a href="#" class="-m-2 block p-2 text-gray-500">
                          My Way
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
            )}
            </div>
          <div class="space-y-6 border-t border-gray-200 px-4 py-6">
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">
                Company
              </a>
            </div>
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">
                Stores
              </a>
            </div>
          </div>
          <div class="space-y-6 border-t border-gray-200 px-4 py-6">
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">
                Sign in
              </a>
            </div>
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">
                Create account
              </a>
            </div>
          </div>
          <div class="border-t border-gray-200 px-4 py-6">
            <a href="#" class="-m-2 flex items-center p-2">
              <img
                src="https://tailwindui.com/img/flags/flag-canada.svg"
                alt=""
                class="block h-auto w-5 flex-shrink-0"
              />
              <span class="ml-3 block text-base font-medium text-gray-900">
                CAD
              </span>
              <span class="sr-only">, change currency</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}