// import Link from "next/link";

// export default function MyAccount() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
//       <h1 className="text-3xl font-bold mb-6">My Account</h1>
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
//         <div className="mb-4">
//           <Link
//             href="/my-account/orders"
//             className="text-xl text-blue-500 hover:underline"
//           >
//             Orders
//           </Link>
//         </div>
//         <div>
//           <Link
//             href="/my-account/account-details"
//             className="text-xl text-blue-500 hover:underline"
//           >
//             Account Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Navbar from '../components/Navbar';

// export default function MyAccount() {
//     const [user, setUser] = useState(null);
//     const router = useRouter();

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         } else {
//             router.push('/login');
//         }
//     }, [router]);

//     if (!user) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//         <Navbar />
//         <div className="min-h-screen p-4">
//             <h2 className="text-2xl font-semibold mb-4">My Account</h2>
//             <div className="flex flex-col">
//                 <Link href="/my-account/orders" className="mb-2 p-2 border rounded bg-gray-200">
//                     Orders
//                 </Link>
//                 <Link href="/my-account/account-details" className="p-2 border rounded bg-gray-200">
//                     Account Details
//                 </Link>
//             </div>
//         </div>
//         </>
//     );
// }

// "use client";
// import { useState, useEffect } from 'react';

// export default function AccountDetails() {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         setUser(storedUser);
//     }, []);

//     if (!user) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="min-h-screen p-4">
//             <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
//             <div className="bg-white p-4 rounded shadow-md">
//                 <p><strong>Username:</strong> {user.username}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 {/* Add more user details here as needed */}
//             </div>
//         </div>
//     );
// }

"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function AccountDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-6 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-800">
                <strong>Username:</strong> {user.username}
              </p>
              <p className="text-gray-800 mt-2">
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
