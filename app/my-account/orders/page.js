"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { FaSpinner } from "react-icons/fa";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        try {
          const response = await axios.get(
            "http://localhost/ecommerce/wp-json/custom/v1/orders",
            {
              params: { user_id: user.id },
            }
          );
          setOrders(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching orders:", error);
          setLoading(false);
        }
      } else {
        router.push("/login");
      }
    };

    fetchOrders();
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-6 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">
                      Order Number
                    </th>
                    <th className="py-2 px-4 border-b border-gray-200">Date</th>
                    <th className="py-2 px-4 border-b border-gray-200">
                      Status
                    </th>
                    <th className="py-2 px-4 border-b border-gray-200">
                      Total
                    </th>
                    <th className="py-2 px-4 border-b border-gray-200">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="py-8 text-center h-60">
                        <FaSpinner className="text-4xl text-gray-400 animate-spin inline-block align-middle" />
                      </td>
                    </tr>
                  ) : orders.length === 0 ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="py-8 text-center text-gray-500 h-60"
                      >
                        No orders available.
                      </td>
                    </tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order.id}>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">
                          {order.id}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">
                          {new Date(
                            order.date_created.date
                          ).toLocaleDateString()}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">
                          {order.status}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">
                          ${order.total}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center">
                          <Link href={`/my-account/orders/${order.id}`}>
                            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                              View
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
