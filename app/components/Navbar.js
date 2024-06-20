import Link from "next/link";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Navbar({ cartItems = [] }) {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdownOpen(false);
    }, 5000);
  };

  const handleDropdownClick = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <Link href="/" className="text-white text-lg font-semibold">
          Shop
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          href="/cart"
          className="text-white text-lg flex items-center mr-4"
        >
          <FaShoppingCart className="mr-2" />
          <span>{cartItems.length}</span>
        </Link>
        {user ? (
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-white text-lg font-semibold cursor-pointer flex items-center">
              My Account
              {dropdownOpen ? (
                <FaChevronUp className="ml-2 transition-transform duration-300 ease-in-out" />
              ) : (
                <FaChevronDown className="ml-2 transition-transform duration-300 ease-in-out" />
              )}
            </span>
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/my-account"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={handleDropdownClick}
                >
                  Account Details
                </Link>
                <Link
                  href="/my-account/orders"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={handleDropdownClick}
                >
                  Orders
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login" className="text-white text-lg font-semibold">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
