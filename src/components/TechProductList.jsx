import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import IconButton from "./IconButton";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NextArrow, PrevArrow } from "./NavArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart";
import CartWindow from "./CartWindow";

const HotProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartWindowOpen, setCartWindowOpen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics?limit=20")
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.map((product) => ({
          id: product.id,
          name: product.title,
          href: "#",
          imageSrc: product.image,
          imageAlt: product.title,
          price: product.price,
          color: "Unknown",
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

  const handleFavorite = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id !== id) {
          return product;
        }
        return {
          ...product,
          favorite: !product.favorite,
        };
      })
    );
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    let newCart;
    if (existingProduct) {
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
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
          Eletrônicos
        </h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="group relative p-2">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
              <div ref={sliderRef} className="mt-2 flex justify-center gap-2">
                <IconButton
                  icon={AiOutlineShoppingCart}
                  onClick={() => handleAddToCart(product)}
                />
                <IconButton
                  icon={product?.favorite ? AiFillHeart : AiOutlineHeart}
                  onClick={() => handleFavorite(product.id)}
                />
                <IconButton icon={AiOutlineShareAlt} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HotProductList;
