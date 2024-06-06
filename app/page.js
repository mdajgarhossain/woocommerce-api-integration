"use client";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

export default function Products() {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

   // Fetch products
   useEffect(() => {
      fetch("./api/products")
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);

   useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart) setCart(storedCart);
   }, []);

   // useEffect(() => {
   //    localStorage.setItem("cart", JSON.stringify(cart));
   // }, [cart]);

   const addToCart = (product) => {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
         let cartProducts = cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
         )
         setCart(cartProducts);
         localStorage.setItem("cart", JSON.stringify(cartProducts));
      } else {
         let cartProducts = [...cart, { ...product, quantity: 1 }]
         setCart(cartProducts);
         localStorage.setItem("cart", JSON.stringify(cartProducts));
      }
   };


   return (
      <>
         <Navbar cartItems={cart} />
         <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((car) => (
               <ProductCard product={car} key={car.id} addToCart={addToCart} />
            ))}
         </div>
      </>
   );
}
