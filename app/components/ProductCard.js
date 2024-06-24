import { useState } from "react";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

export default function ProductCard({ product, addToCart }) {
  const { name, price, images } = product;
  const [isAdded, setIsAdded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (product) => {
    setIsAdding(true);
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setIsAdding(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative flex w-full md:max-w-[24rem] flex-col rounded-xl bg-white p-2 bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 overflow-hidden rounded-md bg-transparent bg-clip-border text-gray-700 shadow-none">
        <Image
          width={300}
          height={300}
          className="hover:scale-[1.1] transition-all"
          src={images[0]?.src}
          alt={name}
        />
      </div>
      <div>
        <div className="flex mt-3 items-center justify-between space-x-1">
          <div className="flex items-center">
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
          <p className="flex items-center gap-1 font-bold text-primary text-xl">
            ${price}
          </p>
        </div>
        <h4 className="block py-2 font-barlow text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h4>
        <hr />
      </div>
      <div className="flex mt-3 pt-2 items-center justify-between pb-6">
        <button
          onClick={() => handleAddToCart(product)}
          className={`p-2 w-full text-center rounded-md font-inter px-6 transition-all duration-300 ${
            isAdded
              ? "bg-green-600 text-white flex justify-center items-center"
              : isAdding
              ? "bg-gray-400 text-white flex justify-center items-center"
              : "bg-red-600 text-white"
          }`}
          disabled={isAdding}
        >
          {isAdded ? (
            <span className="flex items-center gap-2">
              <AiOutlineCheck className="text-xl" /> Added!
            </span>
          ) : isAdding ? (
            <FaSpinner className="animate-spin text-xl" />
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
}
