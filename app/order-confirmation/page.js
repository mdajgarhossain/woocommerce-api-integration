// "use client";
// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { useRouter } from "next/navigation";
// import { FaCheckCircle } from "react-icons/fa";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function OrderConfirmation() {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const storedOrderDetails = JSON.parse(localStorage.getItem("orderDetails"));
//     if (!storedOrderDetails) {
//       router.push("/");
//     } else {
//       setOrderDetails(storedOrderDetails);
//     }
//   }, [router]);

//   if (!orderDetails) return null;

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex flex-col items-center bg-gray-100">
//         <div className="bg-white p-8 border rounded-lg shadow-md w-full max-w-4xl mt-10">
//           <div className="flex flex-col items-center">
//             <FaCheckCircle className="text-green-500 text-6xl mb-4" />
//             <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
//               Thank you for your order!
//             </h2>
//             <p className="text-gray-700 mb-6">
//               Your order has been placed successfully. Here are your order details:
//             </p>
//           </div>
//           <div className="border-t pt-4">
//             <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
//             <div className="grid grid-cols-1 gap-4">
//               <p className="text-lg"><strong>Order ID:</strong> {orderDetails.id}</p>
//               <p className="text-lg"><strong>Date:</strong> {new Date(orderDetails.date_created).toLocaleDateString()}</p>
//               <div className="border p-4 rounded-lg mb-4">
//                 {orderDetails.line_items.map((item) => (
//                   <div key={item.id} className="flex justify-between mb-2">
//                     <p>
//                       {item.name} x {item.quantity}
//                     </p>
//                     <p>${(item.price * item.quantity).toFixed(2)}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between font-semibold">
//                 <p>Shipping</p>
//                 <p>$10.00</p>
//               </div>
//               <div className="flex justify-between font-bold mt-2">
//                 <p>Total</p>
//                 <p>${(parseFloat(orderDetails.total) + 10.0).toFixed(2)}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }


// pages/order-confirmation.js

"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OrderConfirmation() {
  const [orderDetails, setOrderDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedOrderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    if (!storedOrderDetails) {
      router.push("/");
    } else {
      setOrderDetails(storedOrderDetails);
    }
  }, [router]);

  if (!orderDetails) return null;

  const handleContinueShopping = () => {
    localStorage.removeItem("orderDetails");
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="bg-white p-8 border rounded-lg shadow-md w-full max-w-4xl mt-10">
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-6xl mb-4" />
            <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
              Thank you for your order!
            </h2>
            <p className="text-gray-700 mb-6">
              Your order has been placed successfully. Here are your order details:
            </p>
          </div>
          <div className="border-t pt-4 w-full">
            <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <p className="text-lg"><strong>Order ID:</strong> {orderDetails.id}</p>
              <p className="text-lg"><strong>Date:</strong> {new Date(orderDetails.date_created).toLocaleDateString()}</p>
              <div className="border p-4 rounded-lg mb-4">
                {orderDetails.line_items.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <p>
                      {item.name} x {item.quantity}
                    </p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-semibold">
                <p>Shipping</p>
                <p>$10.00</p>
              </div>
              <div className="flex justify-between font-bold mt-2">
                <p>Total</p>
                <p>${(parseFloat(orderDetails.total) + 10.0).toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={handleContinueShopping}
              className="w-full bg-[#464e6e] text-white px-6 py-3 rounded-lg hover:bg-[#353c57] mt-6 flex justify-center items-center text-lg font-medium"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
