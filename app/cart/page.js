"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";

export default function Cart() {
   const [cart, setCart] = useState([]);

   useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart) setCart(storedCart);
   }, []);

  //  useEffect(() => {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //  }, [cart]);

   const removeFromCart = (productId) => {
      const updatedCart = cart.filter(item => item.id !== productId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
   };

   const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
 };

 const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
       item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0); // Ensures no zero quantity items in the cart
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
 };

   return (
      <>
         <Navbar cartItems={cart} />
         <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
               <p>Your cart is empty</p>
            ) : (
               cart.map((item) => (
                  <CartItem 
                    key={item.id}
                    item={item}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                  />
               ))
            )}
         </div>
      </>
   );
}

