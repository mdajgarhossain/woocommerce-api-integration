// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation'
// import axios from 'axios';

// export default function OrderDetails({params}) {
//   console.log(params);
//     const [order, setOrder] = useState(null);
//     const router = useRouter();
//     const { id } = params;

//     useEffect(() => {
//         const fetchOrderDetails = async () => {
//             if (id) {
//                 try {
//                     const response = await axios.get(`http://localhost/ecommerce/wp-json/custom/v1/orders/${id}`);
//                     setOrder(response.data);
//                 } catch (error) {
//                     console.error('Error fetching order details:', error);
//                 }
//             }
//         };

//         fetchOrderDetails();
//     }, [id]);

//     if (!order) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="min-h-screen p-4">
//             <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
//             <div>
//                 <h3 className="text-lg font-semibold">Order #{order.id}</h3>
//                 <p>Date: {new Date(order.date_created).toLocaleDateString()}</p>
//                 <p>Status: {order.status}</p>
//                 <p>Total: {order.total}</p>
//                 <h4 className="text-lg font-semibold mt-4">Items</h4>
//                 <ul>
//                     {order.line_items.map((item) => (
//                         <li key={item.id} className="border-b py-2">
//                             {item.name} - {item.quantity} x {item.price}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/app/components/Navbar';

// export default function OrderDetails({params}) {
//     const [order, setOrder] = useState(null);
//     const router = useRouter();
//     const { id } = params;

//     useEffect(() => {
//         const fetchOrderDetails = async () => {
//             if (!id) return;
//             try {
//                 const response = await axios.get(`http://localhost/ecommerce/wp-json/custom/v1/orders/${id}`);
//                 setOrder(response.data);
//             } catch (error) {
//                 console.error('Error fetching order details:', error);
//             }
//         };

//         fetchOrderDetails();
//     }, [id]);

//     if (!order) {
//         return <div>Loading...</div>;
//     }

//     const lineItems = Object.values(order.line_items);

//     return (
//         <>
//         <Navbar />
//           <div className="min-h-screen p-4">
//             <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
//             <div className="bg-white p-4 rounded shadow-md">
//                 <p><strong>Order Number:</strong> {order.id}</p>
//                 <p><strong>Date Created:</strong> {new Date(order.date_created.date).toLocaleString()}</p>
//                 <p><strong>Status:</strong> {order.status}</p>
//                 <p><strong>Total:</strong> {order.total}</p>
//                 <h3 className="text-xl mt-4 mb-2">Billing Details</h3>
//                 <p><strong>Name:</strong> {order.billing.first_name} {order.billing.last_name}</p>
//                 <p><strong>Address:</strong> {order.billing.address_1}, {order.billing.city}, {order.billing.state}, {order.billing.postcode}, {order.billing.country}</p>
//                 <p><strong>Email:</strong> {order.billing.email}</p>
//                 <h3 className="text-xl mt-4 mb-2">Line Items</h3>
//                 <table className="min-w-full bg-white">
//                     <thead>
//                         <tr>
//                             <th className="py-2">Product ID</th>
//                             <th className="py-2">Product Name</th>
//                             <th className="py-2">Quantity</th>
//                             <th className="py-2">Total</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {lineItems.map((item) => (
//                             <tr key={item.id}>
//                                 <td className="py-2">{item.product_id}</td>
//                                 <td className="py-2">{item.product_name}</td>
//                                 <td className="py-2">{item.quantity}</td>
//                                 <td className="py-2">{item.total}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         </>
//     );
// }

// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/app/components/Navbar';

// export default function OrderDetails({ params }) {
//     const [order, setOrder] = useState(null);
//     const router = useRouter();
//     const { id } = params;

//     useEffect(() => {
//         const fetchOrderDetails = async () => {
//             if (!id) return;
//             try {
//                 const response = await axios.get(`http://localhost/ecommerce/wp-json/custom/v1/orders/${id}`);
//                 setOrder(response.data);
//             } catch (error) {
//                 console.error('Error fetching order details:', error);
//             }
//         };

//         fetchOrderDetails();
//     }, [id]);

//     if (!order) {
//         return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//     }

//     const lineItems = Object.values(order.line_items);

//     return (
//         <>
//             <Navbar />
//             <div className="min-h-screen bg-gray-100 py-6 px-4">
//                 <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//                     <div className="p-6">
//                         <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
//                         <div className="bg-white p-4 rounded shadow-md">
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div>
//                                     <p><strong>Order Number:</strong> {order.id}</p>
//                                     <p><strong>Date Created:</strong> {new Date(order.date_created.date).toLocaleString()}</p>
//                                     <p><strong>Status:</strong> {order.status}</p>
//                                     <p><strong>Total:</strong> ${order.total}</p>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-xl mb-2">Billing Details</h3>
//                                     <p><strong>Name:</strong> {order.billing.first_name} {order.billing.last_name}</p>
//                                     <p><strong>Address:</strong> {order.billing.address_1}, {order.billing.city}, {order.billing.state}, {order.billing.postcode}, {order.billing.country}</p>
//                                     <p><strong>Email:</strong> {order.billing.email}</p>
//                                 </div>
//                             </div>
//                             <div className="mt-6">
//                                 <h3 className="text-xl mb-2">Line Items</h3>
//                                 <table className="min-w-full bg-white border border-gray-200">
//                                     <thead className="bg-gray-100">
//                                         <tr>
//                                             <th className="py-2 px-4 border-b">Product ID</th>
//                                             <th className="py-2 px-4 border-b">Product Name</th>
//                                             <th className="py-2 px-4 border-b">Quantity</th>
//                                             <th className="py-2 px-4 border-b">Total</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {lineItems.map((item) => (
//                                             <tr key={item.id}>
//                                                 <td className="py-2 px-4 border-b">{item.product_id}</td>
//                                                 <td className="py-2 px-4 border-b">{item.product_name}</td>
//                                                 <td className="py-2 px-4 border-b">{item.quantity}</td>
//                                                 <td className="py-2 px-4 border-b">${item.total}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
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
// import Navbar from '@/app/components/Navbar';
// import { FaSpinner } from 'react-icons/fa';

// export default function OrderDetails({ params }) {
//     const [order, setOrder] = useState(null);
//     const [loading, setLoading] = useState(true); // State to manage loading status
//     const router = useRouter();
//     const { id } = params;

//     useEffect(() => {
//         const fetchOrderDetails = async () => {
//             if (!id) return;
//             try {
//                 setLoading(true); // Set loading to true when starting to fetch data
//                 const response = await axios.get(`http://localhost/ecommerce/wp-json/custom/v1/orders/${id}`);
//                 setOrder(response.data);
//                 setLoading(false); // Set loading to false after data is fetched
//             } catch (error) {
//                 console.error('Error fetching order details:', error);
//                 setLoading(false); // Ensure loading is set to false even in case of error
//             }
//         };

//         fetchOrderDetails();
//     }, [id]);

//     if (loading) {
//         return (
//             <>
//                 <Navbar />
//                 <div className="min-h-screen flex items-center justify-center">
//                     <FaSpinner className="text-4xl text-gray-400 animate-spin" />
//                 </div>
//             </>
//         );
//     }

//     if (!order) {
//         return (
//             <>
//                 <Navbar />
//                 <div className="min-h-screen p-4 flex flex-col items-center justify-center">
//                     <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
//                     <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                         <p className="text-gray-500">Error fetching order details. Please try again later.</p>
//                     </div>
//                 </div>
//             </>
//         );
//     }

//     const lineItems = Object.values(order.line_items);

//     return (
//         <>
//             <Navbar />
//             <div className="min-h-screen bg-gray-100 py-6 px-4">
//                 <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//                     <div className="p-6">
//                         <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
//                         <div className="bg-white p-4 rounded shadow-md">
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div>
//                                     <p><strong>Order Number:</strong> {order.id}</p>
//                                     <p><strong>Date Created:</strong> {new Date(order.date_created.date).toLocaleString()}</p>
//                                     <p><strong>Status:</strong> {order.status}</p>
//                                     <p><strong>Total:</strong> ${order.total}</p>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-xl mb-2">Billing Details</h3>
//                                     <p><strong>Name:</strong> {order.billing.first_name} {order.billing.last_name}</p>
//                                     <p><strong>Address:</strong> {order.billing.address_1}, {order.billing.city}, {order.billing.state}, {order.billing.postcode}, {order.billing.country}</p>
//                                     <p><strong>Email:</strong> {order.billing.email}</p>
//                                 </div>
//                             </div>
//                             <div className="mt-6">
//                                 <h3 className="text-xl mb-2">Line Items</h3>
//                                 <table className="min-w-full bg-white border border-gray-200">
//                                     <thead className="bg-gray-100">
//                                         <tr>
//                                             <th className="py-2 px-4 border-b">Product ID</th>
//                                             <th className="py-2 px-4 border-b">Product Name</th>
//                                             <th className="py-2 px-4 border-b">Quantity</th>
//                                             <th className="py-2 px-4 border-b">Total</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {lineItems.map((item) => (
//                                             <tr key={item.id}>
//                                                 <td className="py-2 px-4 border-b">{item.product_id}</td>
//                                                 <td className="py-2 px-4 border-b">{item.product_name}</td>
//                                                 <td className="py-2 px-4 border-b">{item.quantity}</td>
//                                                 <td className="py-2 px-4 border-b">${item.total}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
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
import Navbar from "@/app/components/Navbar";
import { FaSpinner } from "react-icons/fa";

export default function OrderDetails({ params }) {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!id) return;
      try {
        setLoading(true); // Set loading to true when starting to fetch data
        const response = await axios.get(
          `http://localhost/ecommerce/wp-json/custom/v1/orders/${id}`
        );
        setOrder(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching order details:", error);
        setLoading(false); // Ensure loading is set to false even in case of error
      }
    };

    fetchOrderDetails();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 py-6 px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
              <div className="flex items-center justify-center h-60">
                <FaSpinner className="text-4xl text-gray-400 animate-spin" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!order) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen p-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-500">
              Error fetching order details. Please try again later.
            </p>
          </div>
        </div>
      </>
    );
  }

  const lineItems = Object.values(order.line_items);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-6 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
            <div className="bg-white p-4 rounded shadow-md">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>
                    <strong>Order Number:</strong> {order.id}
                  </p>
                  <p>
                    <strong>Date Created:</strong>{" "}
                    {new Date(order.date_created.date).toLocaleString()}
                  </p>
                  <p>
                    <strong>Status:</strong> {order.status}
                  </p>
                  <p>
                    <strong>Total:</strong> ${order.total}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Billing Details</h3>
                  <p>
                    <strong>Name:</strong> {order.billing.first_name}{" "}
                    {order.billing.last_name}
                  </p>
                  <p>
                    <strong>Address:</strong> {order.billing.address_1},{" "}
                    {order.billing.city}, {order.billing.state},{" "}
                    {order.billing.postcode}, {order.billing.country}
                  </p>
                  <p>
                    <strong>Email:</strong> {order.billing.email}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl mb-2">Products</h3>
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border-b">Product ID</th>
                      <th className="py-2 px-4 border-b">Product Name</th>
                      <th className="py-2 px-4 border-b">Quantity</th>
                      <th className="py-2 px-4 border-b">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lineItems.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2 px-4 border-b text-center">
                          {item.product_id}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          {item.product_name}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          {item.quantity}
                        </td>
                        <td className="py-2 px-4 border-b text-center">
                          ${item.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
