import React from "react";
import { useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import ProductCounter from "../components/ProductCounter";
import Cart from "../components/Cart";
import CartWindow from "../components/CartWindow";

const sortOptions = [
  { name: "Mais vendidos", href: "#", current: true },
  { name: "Melhores avaliados", href: "#", current: false },
  { name: "Mais baratos", href: "#", current: false },
];
const subCategories = [
  { name: "Casacos", href: "#" },
  { name: "Camisetas", href: "#" },
  { name: "Bolsas", href: "#" },
  { name: "Roupa infantil", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Cor",
    options: [
      { value: "white", label: "Branco", checked: false },
      { value: "blue", label: "Azul", checked: true },
      { value: "brown", label: "Marrom", checked: false },
      { value: "green", label: "Verde", checked: false },
      { value: "purple", label: "Azul", checked: false },
    ],
  },
  {
    id: "size",
    name: "Tamanho",
    options: [
      { value: "PP", label: "PP", checked: false },
      { value: "P", label: "P", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "G", label: "G", checked: false },
      { value: "GG", label: "GG", checked: false },
      { value: "XG", label: "XG", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CategoryPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartWindowOpen, setCartWindowOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.map((product) => ({
          id: product.id,
          name: product.title,
          href: "#",
          imageSrc: product.image,
          imageAlt: product.title,
          price: product.price,
          favorite: false,
        }));
        setProducts(formattedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, [id]);

  const handleAddToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    let newCart;
    if (existingProduct) {
      newCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity }];
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const getTotalItemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const handleCartIconClick = () => {
    setCartWindowOpen(true);
  };

  const handleCloseCartWindow = () => {
    setCartWindowOpen(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          visible={true}
          height={80}
          width={80}
          color="#F21414"
          ariaLabel="oval-loading"
          secondaryColor="#F6921E"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <ToastContainer />
      <div className="fixed bottom-4 right-6 z-50 bg-custom-red text-white rounded-full shadow-lg py-4 px-4">
        <Cart cartCount={getTotalItemsInCart()} onClick={handleCartIconClick} />
      </div>
      {isCartWindowOpen && (
        <CartWindow cart={cart} onClose={handleCloseCartWindow} />
      )}
      <div className="bg-white mt-12">
        <div>
          {/* Mobile filter dialog */}
          <Transition show={mobileFiltersOpen}>
            <Dialog
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <TransitionChild
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </TransitionChild>

              <div className="fixed inset-0 z-40 flex">
                <TransitionChild
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </DisclosureButton>
                              </h3>
                              <DisclosurePanel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="custom-checkbox"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </DisclosurePanel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </Dialog>
          </Transition>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                {id}
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Filtrar
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </MenuButton>
                  </div>

                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <MenuItem key={option.name}>
                            {({ focus }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  focus ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filtrar</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5 text-custom-red"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5 text-custom-orange"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </DisclosureButton>
                          </h3>
                          <DisclosurePanel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center "
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="custom-checkbox"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                      <div key={product.id} className="p-2">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="mt-4 px-4 flex justify-between h-16 bg-red rounded-lg">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              {product.name}
                            </h3>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            ${product.price}
                          </p>
                        </div>
                        <div
                          className="mt-2 flex justify-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ProductCounter
                            onAddToCart={(quantity) =>
                              handleAddToCart(product, quantity)
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
