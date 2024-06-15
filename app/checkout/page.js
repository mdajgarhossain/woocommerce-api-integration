// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Checkout() {
//     const [user, setUser] = useState(null);
//     const router = useRouter();

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         if (!storedUser) {
//             router.push('/login');
//         } else {
//             setUser(storedUser);
//         }
//     }, [router]);

//     if (!user) return null;

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
//                 <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
//                 {/* Checkout form goes here */}
//                 <p>Welcome, {user.username}</p>
//             </div>
//         </div>
//     );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "../components/Navbar";

// export default function Checkout() {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [shippingInfo, setShippingInfo] = useState({
//     fullName: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     country: "",
//   });
//   const [billingInfo, setBillingInfo] = useState({
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//   });

//   const router = useRouter();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (!storedUser) {
//       router.push("/login");
//     } else {
//       setUser(storedUser);
//     }

//     const storedCart = JSON.parse(localStorage.getItem("cart"));
//     if (storedCart) setCart(storedCart);
//   }, [router]);

//   if (!user) return null;

//   const handleInputChange = (e, setter) => {
//     const { name, value } = e.target;
//     setter((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const calculateTotal = () => {
//     const total = cart.reduce(
//       (acc, item) => acc + item.quantity * item.price,
//       0
//     );
//     return total.toFixed(2);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle the form submission, e.g., send the data to your backend
//     alert("Order placed successfully!");
//     localStorage.removeItem("cart"); // Clear the cart
//     router.push("/"); // Redirect to home or another page
//   };

//   return (
//     <>
//       <Navbar cartItems={cart} />
//       <div className="min-h-screen flex flex-col items-center bg-gray-100">
//         <div className="bg-white p-8 border rounded-lg shadow-md w-full max-w-4xl mt-10">
//           <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//             Checkout
//           </h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <h3 className="text-2xl font-semibold mb-4">
//                 Shipping Information
//               </h3>
//               <div className="grid grid-cols-1 gap-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={shippingInfo.fullName}
//                   onChange={(e) => handleInputChange(e, setShippingInfo)}
//                   placeholder="Full Name"
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="address"
//                   value={shippingInfo.address}
//                   onChange={(e) => handleInputChange(e, setShippingInfo)}
//                   placeholder="Address"
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="city"
//                   value={shippingInfo.city}
//                   onChange={(e) => handleInputChange(e, setShippingInfo)}
//                   placeholder="City"
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="state"
//                   value={shippingInfo.state}
//                   onChange={(e) => handleInputChange(e, setShippingInfo)}
//                   placeholder="State"
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="zip"
//                   value={shippingInfo.zip}
//                   onChange={(e) => handleInputChange(e, setShippingInfo)}
//                   placeholder="ZIP Code"
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="country"
//                   value={shippingInfo.country}
//                   onChange={(e) => handleInputChange(e, setShippingInfo)}
//                   placeholder="Country"
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="mb-6">
//               <h3 className="text-2xl font-semibold mb-4">
//                 Billing Information
//               </h3>
//               <div className="grid grid-cols-1 gap-4">
//                 <input
//                   type="text"
//                   name="cardNumber"
//                   value={billingInfo.cardNumber}
//                   onChange={(e) => handleInputChange(e, setBillingInfo)}
//                   placeholder="Card Number"
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="expiryDate"
//                   value={billingInfo.expiryDate}
//                   onChange={(e) => handleInputChange(e, setBillingInfo)}
//                   placeholder="Expiry Date (MM/YY)"
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="cvv"
//                   value={billingInfo.cvv}
//                   onChange={(e) => handleInputChange(e, setBillingInfo)}
//                   placeholder="CVV"
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="mb-6">
//               <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
//               <div className="border p-4 rounded-lg">
//                 {cart.map((item) => (
//                   <div key={item.id} className="flex justify-between mb-2">
//                     <p>
//                       {item.name} x {item.quantity}
//                     </p>
//                     <p>${(item.price * item.quantity).toFixed(2)}</p>
//                   </div>
//                 ))}
//                 <div className="flex justify-between font-semibold">
//                   <p>Shipping</p>
//                   <p>$10.00</p>
//                 </div>
//                 <div className="flex justify-between font-bold mt-2">
//                   <p>Grand Total</p>
//                   <p>${(parseFloat(calculateTotal()) + 10.0).toFixed(2)}</p>
//                 </div>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#464e6e] text-white px-6 py-3 rounded-lg hover:bg-[#353c57] mt-6 flex justify-center items-center text-lg font-medium"
//             >
//               Place Order
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// // Create WooCommerce API instance
// const api = new WooCommerceRestApi({
//   url: "http://localhost/ecommerce",
//   consumerKey: "ck_6c6d8f618e284c86bed3da3abc1156e5ec64bbf4",
//   consumerSecret: "cs_044ddfaa49cf43f898777795617bf3f6b20352da",
//   version: "wc/v3",
// });

// Validation schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required."),
  address: yup.string().required("Address is required."),
  city: yup.string().required("City is required."),
  state: yup.string().required("State is required."),
  zip: yup.string().required("ZIP Code is required."),
  country: yup.string().required("Country is required."),
  cardNumber: yup.string().required("Card Number is required."),
  expiryDate: yup.string().required("Expiry Date is required."),
  cvv: yup.string().required("CVV is required."),
});

export default function Checkout() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(storedUser);
    }

    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) setCart(storedCart);
  }, [router]);

  if (!user) return null;

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    return total.toFixed(2);
  };

  // const onSubmit = async (data) => {
  //   setIsSubmitting(true);

  //   try {
  //     // Simulate order submission
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     toast.success("Order placed successfully!");
  //     localStorage.removeItem("cart");
  //     router.push("/");
  //     reset();
  //   } catch (err) {
  //     toast.error("Failed to place order. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const onSubmit = async (data) => {
    console.log("test");
    setIsPlacingOrder(true);
    try {
      const orderData = {
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        billing: {
          first_name: data.fullName.split(" ")[0],
          last_name: data.fullName.split(" ")[1] || "",
          address_1: data.address,
          city: data.city,
          state: data.state,
          postcode: data.zip,
          country: data.country,
          email: user.email,
          phone: "",
        },
        shipping: {
          first_name: data.fullName.split(" ")[0],
          last_name: data.fullName.split(" ")[1] || "",
          address_1: data.address,
          city: data.city,
          state: data.state,
          postcode: data.zip,
          country: data.country,
        },
        line_items: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
        customer_id: user.id,
      };

      // const response = await api.post("orders", orderData);
      const response = await axios.post('/api/orders', orderData);

      localStorage.setItem("orderDetails", JSON.stringify(response.data));
      toast.success("Order placed successfully! Redirecting...", {
        onClose: () => {
          router.push("/order-confirmation");
        },
      });
      localStorage.removeItem("cart"); // Clear the cart
    } catch (err) {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <>
      <Navbar cartItems={cart} />
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="bg-white p-8 border rounded-lg shadow-md w-full max-w-4xl mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Checkout
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">
                Shipping Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="fullName"
                  {...register("fullName")}
                  placeholder="Full Name"
                  className="w-full p-2 border rounded"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                <input
                  type="text"
                  name="address"
                  {...register("address")}
                  placeholder="Address"
                  className="w-full p-2 border rounded"
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                <input
                  type="text"
                  name="city"
                  {...register("city")}
                  placeholder="City"
                  className="w-full p-2 border rounded"
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                <input
                  type="text"
                  name="state"
                  {...register("state")}
                  placeholder="State"
                  className="w-full p-2 border rounded"
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                <input
                  type="text"
                  name="zip"
                  {...register("zip")}
                  placeholder="ZIP Code"
                  className="w-full p-2 border rounded"
                />
                {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
                <input
                  type="text"
                  name="country"
                  {...register("country")}
                  placeholder="Country"
                  className="w-full p-2 border rounded"
                />
                {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">
                Billing Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="cardNumber"
                  {...register("cardNumber")}
                  placeholder="Card Number"
                  className="w-full p-2 border rounded"
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
                <input
                  type="text"
                  name="expiryDate"
                  {...register("expiryDate")}
                  placeholder="Expiry Date (MM/YY)"
                  className="w-full p-2 border rounded"
                />
                {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>}
                <input
                  type="text"
                  name="cvv"
                  {...register("cvv")}
                  placeholder="CVV"
                  className="w-full p-2 border rounded"
                />
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
              <div className="border p-4 rounded-lg">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <p>
                      {item.name} x {item.quantity}
                    </p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="flex justify-between font-semibold">
                  <p>Shipping</p>
                  <p>$10.00</p>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <p>Grand Total</p>
                  <p>${(parseFloat(calculateTotal()) + 10.0).toFixed(2)}</p>
                </div>
              </div>
            </div>
            {/* <button
              type="submit"
              className={`w-full bg-[#464e6e] text-white px-6 py-3 rounded-lg hover:bg-[#353c57] mt-6 flex justify-center items-center text-lg font-medium ${isSubmitting ? 'opacity-50' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button> */}

<button
              type="submit"
              className={`w-full bg-[#464e6e] text-white px-6 py-3 rounded-lg hover:bg-[#353c57] mt-6 flex justify-center items-center text-lg font-medium ${isPlacingOrder ? "opacity-50" : ""}`}
              disabled={isPlacingOrder}
            >
              {isPlacingOrder && (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {isPlacingOrder ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

