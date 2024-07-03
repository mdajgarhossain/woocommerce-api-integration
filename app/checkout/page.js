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

// Validation schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required."),
  address: yup.string().required("Address is required."),
  city: yup.string().required("City is required."),
  zip: yup.string().required("ZIP Code is required."),
  mobileNumber: yup.string().required("Mobile Number is required."),
  paymentOption: yup.string().required("Payment option is required."),
});

export default function Checkout() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const router = useRouter();

  console.log("process.env.NEXT_PUBLIC_BASE_URL", process.env.NEXT_PUBLIC_BASE_URL);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
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

  const onSubmit = async (data) => {
    setIsPlacingOrder(true);

    try {
      const orderData = {
        payment_method: data.paymentOption === "cod" ? "cod" : "sslcommerz",
        payment_method_title:
          data.paymentOption === "cod" ? "Cash On Delivery" : "SSLCommerz",
        set_paid: false,
        billing: {
          first_name: data.fullName.split(" ")[0],
          last_name: data.fullName.split(" ")[1] || "",
          address_1: data.address,
          city: data.city,
          state: "",
          postcode: data.zip,
          country: "BD",
          email: user.email,
          phone: data.mobileNumber,
        },
        shipping: {
          first_name: data.fullName.split(" ")[0],
          last_name: data.fullName.split(" ")[1] || "",
          address_1: data.address,
          city: data.city,
          state: "",
          postcode: data.zip,
          country: "BD",
        },
        line_items: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
        customer_id: user.id,
      };

      const response = await axios.post("/api/orders", orderData);
      console.log("response", response);
      debugger;

      // Store order details in localStorage
      localStorage.setItem("orderDetails", JSON.stringify(response.data));

      if (data.paymentOption === "cod") {
        toast.success("Order placed successfully! Redirecting...", {
          autoClose: 2000,
        });
        setTimeout(() => {
          router.push("/order-confirmation");
        }, 1000);
      } else {
        // Redirect to SSLCommerz payment page
        const orderId = response.data.id;
        const orderKey = response.data.order_key;
        const amount = response.data.total;
        const customerInfo = response.data.billing;

        // Prepare SSLCommerz payment data
        const paymentData = {
          store_id: process.env.NEXT_PUBLIC_SSLCOMMERZ_STORE_ID,
          store_passwd: process.env.NEXT_PUBLIC_SSLCOMMERZ_STORE_PASSWORD,
          total_amount: amount,
          currency: "BDT",
          tran_id: orderId,
          success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success/${orderId}`,
          fail_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-failure/${orderId}`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-cancel/${orderId}`,
          cus_name: customerInfo.first_name + " " + customerInfo.last_name,
          cus_email: customerInfo.email,
          cus_add1: customerInfo.address_1,
          cus_add2: customerInfo.address_2,
          cus_city: customerInfo.city,
          cus_state: customerInfo.state,
          cus_postcode: customerInfo.postcode,
          cus_country: customerInfo.country,
          cus_phone: customerInfo.phone,
          shipping_method: "NO",
          product_name: "Order " + orderId,
          product_category: "General",
          product_profile: "general",
        };

        const sslCommerzResponse = await axios.post(
          "/api/sslcommerz",
          paymentData
        );

        if (sslCommerzResponse.data.status === "SUCCESS") {
          const gatewayUrl = sslCommerzResponse.data.GatewayPageURL;
          window.location.href = gatewayUrl;
        } else {
          console.error(
            "Payment initialization failed: ",
            sslCommerzResponse.data
          );
        }
      }

      reset();
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
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
                <input
                  type="text"
                  name="address"
                  {...register("address")}
                  placeholder="Address"
                  className="w-full p-2 border rounded"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
                <input
                  type="text"
                  name="city"
                  {...register("city")}
                  placeholder="City"
                  className="w-full p-2 border rounded"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
                <input
                  type="text"
                  name="zip"
                  {...register("zip")}
                  placeholder="ZIP Code"
                  className="w-full p-2 border rounded"
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm">{errors.zip.message}</p>
                )}
                <input
                  type="text"
                  name="mobileNumber"
                  {...register("mobileNumber")}
                  placeholder="Mobile Number"
                  className="w-full p-2 border rounded"
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Payment Options</h3>
              <div className="grid grid-cols-1 gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="cod"
                    {...register("paymentOption")}
                    className="mr-2"
                  />
                  Cash On Delivery
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="sslcommerz"
                    {...register("paymentOption")}
                    className="mr-2"
                  />
                  Pay Online (SSLCommerz)
                </label>
                {errors.paymentOption && (
                  <p className="text-red-500 text-sm">
                    {errors.paymentOption.message}
                  </p>
                )}
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className={`${
                  isPlacingOrder
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700"
                } text-white font-bold py-2 px-4 rounded`}
                disabled={isPlacingOrder}
              >
                {isPlacingOrder ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
