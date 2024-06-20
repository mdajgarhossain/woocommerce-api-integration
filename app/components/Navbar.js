// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FaShoppingCart, FaChevronDown, FaChevronUp } from "react-icons/fa";

// export default function Navbar({ cartItems = [] }) {
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleMouseEnter = () => {
//     setDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setTimeout(() => {
//       setDropdownOpen(false);
//     }, 5000);
//   };

//   const handleDropdownClick = () => {
//     setDropdownOpen(false);
//   };

//   return (
//     <nav className="bg-gray-800 p-4 flex justify-between items-center">
//       <div className="flex items-center ml-auto">
//         <div>
//           <Link href="/" className="text-white text-lg font-semibold mr-4">
//             Shop
//           </Link>
//         </div>
//         {user ? (
//           <div
//             className="relative ml-auto"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <span className="text-white text-lg font-semibold cursor-pointer flex items-center">
//               My Account
//               {dropdownOpen ? (
//                 <FaChevronUp className="ml-2 transition-transform duration-300 ease-in-out" />
//               ) : (
//                 <FaChevronDown className="ml-2 transition-transform duration-300 ease-in-out" />
//               )}
//             </span>
//             {dropdownOpen && (
//               <div
//                 className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10"
//                 onMouseEnter={() => setDropdownOpen(true)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <Link
//                   href="/my-account"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   onClick={handleDropdownClick}
//                 >
//                   Account Details
//                 </Link>
//                 <Link
//                   href="/my-account/orders"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   onClick={handleDropdownClick}
//                 >
//                   Orders
//                 </Link>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link
//             href="/login"
//             className="text-white text-lg font-semibold ml-auto"
//           >
//             Login
//           </Link>
//         )}
//         <Link
//           href="/cart"
//           className="text-white text-lg flex items-center ml-4"
//         >
//           <FaShoppingCart className="mr-2" />
//           <span>{cartItems.length}</span>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { FaShoppingCart, FaChevronDown, FaChevronUp } from "react-icons/fa";

// export default function Navbar({ cartItems = [] }) {
//   const [user, setUser] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prevState) => !prevState);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <nav className="bg-gray-800 p-4 flex justify-between items-center">
//       <div className="flex items-center ml-auto">
//         <div>
//           <Link href="/" className="text-white text-lg font-semibold mr-4">
//             Shop
//           </Link>
//         </div>
//         {user ? (
//           <div className="relative ml-auto" ref={dropdownRef}>
//             <span
//               className="text-white text-lg font-semibold cursor-pointer flex items-center"
//               onClick={toggleDropdown}
//             >
//               My Account
//               {isDropdownOpen ? (
//                 <FaChevronUp className="ml-2 transition-transform duration-300 ease-in-out" />
//               ) : (
//                 <FaChevronDown className="ml-2 transition-transform duration-300 ease-in-out" />
//               )}
//             </span>
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
//                 <Link
//                   href="/my-account"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   onClick={closeDropdown}
//                 >
//                   Account Details
//                 </Link>
//                 <Link
//                   href="/my-account/orders"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   onClick={closeDropdown}
//                 >
//                   Orders
//                 </Link>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link
//             href="/login"
//             className="text-white text-lg font-semibold ml-auto"
//           >
//             Login
//           </Link>
//         )}
//         <Link
//           href="/cart"
//           className="text-white text-lg flex items-center ml-4"
//         >
//           <FaShoppingCart className="mr-2" />
//           <span>{cartItems.length}</span>
//         </Link>
//       </div>
//     </nav>
//   );
// }



import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Navbar({ cartItems = [] }) {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    closeDropdown();
    router.push("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center ml-auto">
        <div>
          <Link href="/" className="text-white text-lg font-semibold mr-4">
            Shop
          </Link>
        </div>
        {user ? (
          <div className="relative ml-auto" ref={dropdownRef}>
            <span
              className="text-white text-lg font-semibold cursor-pointer flex items-center"
              onClick={toggleDropdown}
            >
              My Account
              {isDropdownOpen ? (
                <FaChevronUp className="ml-2 transition-transform duration-300 ease-in-out" />
              ) : (
                <FaChevronDown className="ml-2 transition-transform duration-300 ease-in-out" />
              )}
            </span>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <Link
                  href="/my-account"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Account Details
                </Link>
                <Link
                  href="/my-account/orders"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Orders
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login" className="text-white text-lg font-semibold ml-auto">
            Login
          </Link>
        )}
        <Link href="/cart" className="text-white text-lg flex items-center ml-4">
          <FaShoppingCart className="mr-2" />
          <span>{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  );
}

