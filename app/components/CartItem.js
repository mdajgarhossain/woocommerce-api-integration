// import Image from "next/image";
// import { AiOutlineClose } from "react-icons/ai";

// export default function CartItem({ item, removeFromCart }) {
//    const { id, name, price, images, quantity } = item;

//    return (
//       <div className="flex items-center justify-between border-b py-4">
//          <div className="flex items-center">
//             <Image src={images[0]?.src} width={50} height={50} alt={name} />
//             <div className="ml-4">
//                <h2 className="text-lg font-semibold">{name}</h2>
//                <p>${price}</p>
//             </div>
//          </div>
//          <div className="flex items-center">
//             <p className="mr-4">Quantity: {quantity}</p>
//             <button onClick={() => removeFromCart(id)} className="text-red-600">
//                <AiOutlineClose size={20} />
//             </button>
//          </div>
//       </div>
//    );
// }

// components/CartItem.js
// import Image from 'next/image';

// export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart }) {
//    return (
//       <div className="flex items-center justify-between p-4 border-b">
//          <div className="flex items-center">
//             <Image src={item.images[0]?.src} alt={item.name} width={50} height={50} />
//             <div className="ml-4">
//                <h2 className="text-lg font-bold">{item.name}</h2>
//                <p className="text-sm">${item.price}</p>
//             </div>
//          </div>
//          <div className="flex items-center">
//             <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 text-white bg-red-500 rounded">-</button>
//             <span className="mx-2">{item.quantity}</span>
//             <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 text-white bg-green-500 rounded">+</button>
//          </div>
//          <button onClick={() => removeFromCart(item.id)} className="px-4 py-1 text-white bg-red-600 rounded">Remove</button>
//       </div>
//    );
// }


// components/CartItem.js
import Image from 'next/image';

export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart }) {
   const price = parseFloat(item.price);

   return (
      <div className="flex items-center space-x-4 border-b pb-4">
         <Image src={item.images[0]?.src} alt={item.name} width={64} height={64} className="w-16 h-16 object-cover rounded" />
         <div className="flex-grow">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">
               Quantity: {item.quantity} x ${price.toFixed(2)} = ${(item.quantity * price).toFixed(2)}
            </p>
         </div>
         <div className="flex items-center space-x-2">
            <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300">-</button>
            <p>{item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300">+</button>
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Remove</button>
         </div>
      </div>
   );
}



