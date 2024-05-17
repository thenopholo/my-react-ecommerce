import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import IconButton from "./IconButton";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { NextArrow, PrevArrow } from "./NavArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Oval } from "react-loader-spinner";

const MenClothingProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing?limit=20")
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.map((product) => ({
          id: product.id,
          name: product.title,
          href: "#",
          imageSrc: product.image,
          imageAlt: product.title,
          price: `$${product.price}`,
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
  }, []);

  const handleFavorite = (id, e) => {
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
    return true;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {" "}
        <Oval
          visible={true}
          height={80}
          width={80}
          color="#F21414"
          ariaLabel="oval-loading"
          secondaryColor="#F6921E"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />{" "}
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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Roupas Masculinas
        </h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="group relative p-2">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <IconButton
                  className={"py-4 px-4"}
                  icon={AiOutlineShoppingCart}
                />
                <IconButton
                  className={"py-4 px-4"}
                  icon={product?.favorite ? AiFillHeart : AiOutlineHeart}
                  onClick={(e) => handleFavorite(product.id, e)}
                />
                <IconButton className={"py-4 px-4"} icon={AiOutlineShareAlt} />
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
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MenClothingProductList;
