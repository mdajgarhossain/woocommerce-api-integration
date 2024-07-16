"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentSuccess = ({ params }) => {
  const router = useRouter();
  // const { orderId } = router.query;
  const { orderId } = params;

  useEffect(() => {
    if (orderId) {
      console.log("orderId", orderId);
      updateOrderStatus(orderId);
    }
  }, [orderId]);

  const updateOrderStatus = async (orderId) => {
    try {
      // Retrieve order details from localStorage
      const storedOrder = JSON.parse(localStorage.getItem("orderDetails"));
      if (storedOrder && storedOrder.id === parseInt(orderId)) {
        // Update order status
        await axios.put(`/api/orders/${orderId}`, {
          status: "completed",
        });

        toast.success("Payment successful! Order status updated.");
      } else {
        toast.error("Order not found.");
      }
    } catch (error) {
      toast.error("Failed to update order status. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 border rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Payment Successful
        </h2>
        <p className="text-center text-gray-600">
          Thank you for your payment. Your order has been successfully updated.
        </p>
        <button
          onClick={() => router.push("/order-confirmation")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
        >
          View Order Details
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaymentSuccess;
