// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import CartItem from "../components/CartItem";

// export default function Cart() {
//    const [cart, setCart] = useState([]);

//    useEffect(() => {
//       const storedCart = JSON.parse(localStorage.getItem("cart"));
//       if (storedCart) setCart(storedCart);
//    }, []);

//    const removeFromCart = (productId) => {
//       const updatedCart = cart.filter(item => item.id !== productId);
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//    };

//    const increaseQuantity = (productId) => {
//       const updatedCart = cart.map(item =>
//          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//    };

//    const decreaseQuantity = (productId) => {
//       const updatedCart = cart.map(item =>
//          item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
//       ).filter(item => item.quantity > 0); // Ensures no zero quantity items in the cart
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//    };

//    const calculateTotal = () => {
//       return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
//    };

//    const shippingCost = 10.00; // Example shipping cost

//    const checkout = () => {
//       // Add your checkout logic here
//       alert('Checkout logic not implemented yet!');
//    };

//    return (
//       <>
//          <Navbar cartItems={cart} />
//          <div className="bg-white p-10 border rounded shadow-md">
//             <h2 className="text-2xl font-semibold mb-8">Shopping Cart</h2>
//             <div className="space-y-4">
//                {cart.length === 0 ? (
//                   <p>Your cart is empty</p>
//                ) : (
//                   cart.map((item) => (
//                      <CartItem
//                         key={item.id}
//                         item={item}
//                         increaseQuantity={increaseQuantity}
//                         decreaseQuantity={decreaseQuantity}
//                         removeFromCart={removeFromCart}
//                      />
//                   ))
//                )}
//             </div>
//             {cart.length > 0 && (
//                <div className="mt-4">
//                   <p className="text-lg">Shipping: ${shippingCost.toFixed(2)}</p>
//                   <p className="text-xl font-semibold">Grand Total: ${(parseFloat(calculateTotal()) + shippingCost).toFixed(2)}</p>
//                   <button
//                      onClick={checkout}
//                      className="bg-[#464e6e] text-white px-4 py-2 rounded hover:bg-[#353c57] mt-4 flex items-center"
//                   >
//                      Checkout
//                      <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 ml-2"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                      >
//                         <path
//                            fillRule="evenodd"
//                            d="M16.293 4.293a1 1 0 00-1.414 0L11 8.586V2a1 1 0 10-2 0v6.586l-3.293-3.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
//                            clipRule="evenodd"
//                         />
//                      </svg>
//                   </button>
//                </div>
//             )}
//          </div>
//       </>
//    );
// }




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

   const calculateTotal = () => {
      return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
   };

   const shippingCost = 10.00; // Example shipping cost

   const checkout = () => {
      // Add your checkout logic here
      alert('Checkout logic not implemented yet!');
   };

   return (
      <>
         <Navbar cartItems={cart} />
         <div className="bg-white p-8 border rounded-lg shadow-md max-w-4xl mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h2>
            <div className="space-y-4">
               {cart.length === 0 ? (
                  <p className="text-center text-gray-500">Your cart is empty</p>
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
            {cart.length > 0 && (
               <div className="mt-8 border-t pt-4">
                  <div className="flex justify-between items-center">
                     <p className="text-lg">Shipping:</p>
                     <p className="text-lg font-semibold">${shippingCost.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                     <p className="text-xl font-semibold">Grand Total:</p>
                     <p className="text-xl font-bold">${(parseFloat(calculateTotal()) + shippingCost).toFixed(2)}</p>
                  </div>
                  <button
                     onClick={checkout}
                     className="w-full bg-[#464e6e] text-white px-6 py-3 rounded-lg hover:bg-[#353c57] mt-6 flex justify-center items-center text-lg font-medium"
                  >
                     Checkout
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path
                           fillRule="evenodd"
                           d="M16.293 4.293a1 1 0 00-1.414 0L11 8.586V2a1 1 0 10-2 0v6.586l-3.293-3.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
                           clipRule="evenodd"
                        />
                     </svg>
                  </button>
               </div>
            )}
         </div>
      </>
   );
}
