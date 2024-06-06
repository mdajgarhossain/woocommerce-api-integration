import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar({ cartItems }) {
   return (
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
         <div>
            <Link href="/" className="text-white text-lg">
               Shop
            </Link>
         </div>
         <div>
            <Link href="/cart" className="text-white text-lg flex items-center">
                  <FaShoppingCart className="mr-2" />
                  <span>{cartItems.length}</span>
            </Link>
         </div>
      </nav>
   );
}
