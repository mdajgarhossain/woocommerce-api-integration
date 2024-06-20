// // pages/my-account/orders.js
// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Link from 'next/link';

// export default function Orders() {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             // Replace with your actual API endpoint
//             const response = await axios.get('/api/orders');
//             setOrders(response.data);
//         };

//         fetchOrders();
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
//             <h1 className="text-3xl font-bold mb-6">My Orders</h1>
//             <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
//                 <table className="w-full table-auto">
//                     <thead>
//                         <tr>
//                             <th className="px-4 py-2">Order Number</th>
//                             <th className="px-4 py-2">Date</th>
//                             <th className="px-4 py-2">Status</th>
//                             <th className="px-4 py-2">Total</th>
//                             <th className="px-4 py-2">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order) => (
//                             <tr key={order.id}>
//                                 <td className="border px-4 py-2">{order.id}</td>
//                                 <td className="border px-4 py-2">{order.date}</td>
//                                 <td className="border px-4 py-2">{order.status}</td>
//                                 <td className="border px-4 py-2">${order.total}</td>
//                                 <td className="border px-4 py-2">
//                                     <Link href={`/my-account/orders/${order.id}`}>
//                                         <a className="text-blue-500 hover:underline">View</a>
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Navbar from '@/app/components/Navbar';

// export default function Orders() {
//     const [orders, setOrders] = useState([]);
//     const router = useRouter();

//     useEffect(() => {
//         const fetchOrders = async () => {
//             const storedUser = localStorage.getItem('user');
//             if (storedUser) {
//                 const user = JSON.parse(storedUser);
//                 try {
//                     const response = await axios.get('http://localhost/ecommerce/wp-json/custom/v1/orders', {
//                         params: { user_id: user.id },
//                     });
//                     setOrders(response.data);
//                 } catch (error) {
//                     console.error('Error fetching orders:', error);
//                 }
//             } else {
//                 router.push('/login');
//             }
//         };

//         fetchOrders();
//     }, [router]);

//     return (
//         <>
//         <Navbar />
//         <div className="min-h-screen p-4">
//             <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
//             <table className="min-w-full bg-white">
//                 <thead>
//                     <tr>
//                         <th className="py-2 px-4 border-b">Order Number</th>
//                         <th className="py-2 px-4 border-b">Date</th>
//                         <th className="py-2 px-4 border-b">Status</th>
//                         <th className="py-2 px-4 border-b">Total</th>
//                         <th className="py-2 px-4 border-b">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map((order) => (
//                         <tr key={order.id}>
//                             <td className="py-2 px-4 border-b">{order.id}</td>
//                             <td className="py-2 px-4 border-b">{new Date(order.date_created).toLocaleDateString()}</td>
//                             <td className="py-2 px-4 border-b">{order.status}</td>
//                             <td className="py-2 px-4 border-b">{order.total}</td>
//                             <td className="py-2 px-4 border-b">
//                                 <Link href={`/my-account/orders/${order.id}`}>
//                                     <button className="bg-blue-500 text-white py-1 px-3 rounded">View</button>
//                                 </Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         </>
//     );
// }

// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Navbar from '@/app/components/Navbar';

// export default function Orders() {
//     const [orders, setOrders] = useState([]);
//     const router = useRouter();

//     useEffect(() => {
//         const fetchOrders = async () => {
//             const storedUser = localStorage.getItem('user');
//             if (storedUser) {
//                 const user = JSON.parse(storedUser);
//                 try {
//                     const response = await axios.get('http://localhost/ecommerce/wp-json/custom/v1/orders', {
//                         params: { user_id: user.id },
//                     });
//                     setOrders(response.data);
//                 } catch (error) {
//                     console.error('Error fetching orders:', error);
//                 }
//             } else {
//                 router.push('/login');
//             }
//         };

//         fetchOrders();
//     }, [router]);

//     return (
//         <>
//             <Navbar />
//             <div className="min-h-screen bg-gray-100 py-6 px-4">
//                 <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//                     <div className="p-6">
//                         <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full bg-white border border-gray-200">
//                                 <thead className="bg-gray-100">
//                                     <tr>
//                                         <th className="py-2 px-4 border-b border-gray-200">Order Number</th>
//                                         <th className="py-2 px-4 border-b border-gray-200">Date</th>
//                                         <th className="py-2 px-4 border-b border-gray-200">Status</th>
//                                         <th className="py-2 px-4 border-b border-gray-200">Total</th>
//                                         <th className="py-2 px-4 border-b border-gray-200">Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {orders.map((order) => (
//                                         <tr key={order.id}>
//                                             <td className="py-2 px-4 border-b border-gray-200 text-center">{order.id}</td>
//                                             <td className="py-2 px-4 border-b border-gray-200 text-center">{new Date(order.date_created).toLocaleDateString()}</td>
//                                             <td className="py-2 px-4 border-b border-gray-200 text-center">{order.status}</td>
//                                             <td className="py-2 px-4 border-b border-gray-200 text-center">${order.total}</td>
//                                             <td className="py-2 px-4 border-b border-gray-200 text-center">
//                                                 <Link href={`/my-account/orders/${order.id}`}>
//                                                     <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">View</button>
//                                                 </Link>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Navbar from '@/app/components/Navbar';
// import { FaSpinner } from 'react-icons/fa';

// export default function Orders() {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true); // State for loading indicator
//     const router = useRouter();

//     useEffect(() => {
//         const fetchOrders = async () => {
//             const storedUser = localStorage.getItem('user');
//             if (storedUser) {
//                 const user = JSON.parse(storedUser);
//                 try {
//                     const response = await axios.get('http://localhost/ecommerce/wp-json/custom/v1/orders', {
//                         params: { user_id: user.id },
//                     });
//                     setOrders(response.data);
//                     setLoading(false); // Set loading to false after data is fetched
//                 } catch (error) {
//                     console.error('Error fetching orders:', error);
//                     setLoading(false); // Set loading to false in case of error
//                 }
//             } else {
//                 router.push('/login');
//             }
//         };

//         fetchOrders();
//     }, [router]);

//     return (
//         <>
//             <Navbar />
//             <div className="min-h-screen bg-gray-100 py-6 px-4">
//                 <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//                     <div className="p-6">
//                         <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
//                         {loading ? (
//                             <div className="flex items-center justify-center h-64">
//                                 <FaSpinner className="text-4xl text-gray-400 animate-spin" />
//                             </div>
//                         ) : (
//                             <div className="overflow-x-auto">
//                                 <table className="min-w-full bg-white border border-gray-200">
//                                     <thead className="bg-gray-100">
//                                         <tr>
//                                             <th className="py-2 px-4 border-b border-gray-200">Order Number</th>
//                                             <th className="py-2 px-4 border-b border-gray-200">Date</th>
//                                             <th className="py-2 px-4 border-b border-gray-200">Status</th>
//                                             <th className="py-2 px-4 border-b border-gray-200">Total</th>
//                                             <th className="py-2 px-4 border-b border-gray-200">Actions</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {orders.map((order) => (
//                                             <tr key={order.id}>
//                                                 <td className="py-2 px-4 border-b border-gray-200 text-center">{order.id}</td>
//                                                 <td className="py-2 px-4 border-b border-gray-200 text-center">{new Date(order.date_created).toLocaleDateString()}</td>
//                                                 <td className="py-2 px-4 border-b border-gray-200 text-center">{order.status}</td>
//                                                 <td className="py-2 px-4 border-b border-gray-200 text-center">${order.total}</td>
//                                                 <td className="py-2 px-4 border-b border-gray-200 text-center">
//                                                     <Link href={`/my-account/orders/${order.id}`}>
//                                                         <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">View</button>
//                                                     </Link>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

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
