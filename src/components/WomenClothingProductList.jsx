import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./NavArrows";
import ProductCounter from "./ProductCounter";
import Cart from "./Cart";
import CartWindow from "./CartWindow";

const HotProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartWindowOpen, setCartWindowOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing?limit=20")
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
  }, []);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      <ToastContainer />
      <div className="fixed bottom-4 right-6 z-50 bg-custom-red text-white rounded-full shadow-lg py-4 px-4">
        <Cart cartCount={getTotalItemsInCart()} onClick={handleCartIconClick} />
      </div>
      {isCartWindowOpen && (
        <CartWindow cart={cart} onClose={handleCloseCartWindow} />
      )}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Roupas Femininas
        </h2>
        <Slider {...settings}>
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
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
              <div className="mt-2 flex justify-center gap-2" onClick={(e) => e.stopPropagation()}>
                <ProductCounter
                  onAddToCart={(quantity) => handleAddToCart(product, quantity)}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HotProductList;
