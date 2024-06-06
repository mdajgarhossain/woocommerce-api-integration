import Image from "next/image";
import Link from "next/link";
import { AiOutlineBgColors } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { BsCarFront, BsFuelPumpFill, BsTruckFlatbed } from "react-icons/bs";
import { RiSteering2Line } from "react-icons/ri";

export default function ProductCard({ product, addToCart }) {
   const { name, price, images, meta_data } = product;

   return (
      <div className="relative flex w-full md:max-w-[24rem] flex-col rounded-xl bg-white p-2 bg-clip-border text-gray-700 shadow-md">
         <div className="relative m-0 overflow-hidden rounded-md bg-transparent bg-clip-border text-gray-700 shadow-none">
            <Image
               width={300}
               height={300}
               className=" hover:scale-[1.1] transition-all"
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
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
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
            {/* <div className="grid pb-2 grid-cols-2 my-3 md:grid-cols-3 gap-3">
               <p className="flex items-center gap-2 text-sm">
                  <BsCarFront className="text-primary text-md" />
                  Coupe
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <BsTruckFlatbed className="text-primary text-xl" />
                  Metal
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <RiSteering2Line className="text-primary text-xl" />
                  Automatic
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <BiTransferAlt className="text-primary text-md" />
                  Petrol
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <BsFuelPumpFill className="text-primary text-md" />
                  Diesel
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <AiOutlineBgColors className="text-primary text-md" />
                  Red
               </p>
            </div> */}
            <hr />
         </div>
         <div className="flex mt-3 pt-2 items-center justify-between pb-6">
            <button
               onClick={() => addToCart(product)}
               className="bg-red-600 p-2 w-full text-center text-white rounded-md font-inter px-6">
               Add to Cart
            </button>
         </div>
      </div>
   );
}
