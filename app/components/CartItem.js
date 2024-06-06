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
import Image from 'next/image';

export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart }) {
   return (
      <div className="flex items-center justify-between p-4 border-b">
         <div className="flex items-center">
            <Image src={item.images[0]?.src} alt={item.name} width={50} height={50} />
            <div className="ml-4">
               <h2 className="text-lg font-bold">{item.name}</h2>
               <p className="text-sm">${item.price}</p>
            </div>
         </div>
         <div className="flex items-center">
            <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 text-white bg-red-500 rounded">-</button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 text-white bg-green-500 rounded">+</button>
         </div>
         <button onClick={() => removeFromCart(item.id)} className="px-4 py-1 text-white bg-red-600 rounded">Remove</button>
      </div>
   );
}

